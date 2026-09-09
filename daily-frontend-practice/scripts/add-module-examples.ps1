$ErrorActionPreference = 'Stop'

$practiceRoot = Split-Path -Parent $PSScriptRoot
$daysRoot = Join-Path $practiceRoot 'days'

# 每项依次为：输入/场景、输出/交付、具体例子、关键边界。
$examples = @{
  '2026-09-02/01-algorithm.js' = @('nums 数组与 target 数字。', '所有满足和为 target 的不重复下标对；没有答案返回空数组。', 'nums=[2,7,11,15], target=9 -> [[0,1]]，因为 nums[0]+nums[1]=9。', '同一元素不能使用两次；结果中的同一组下标不能重复。')
  '2026-09-02/02-javascript.js' = @('待扁平化数组 array 与展开深度 depth。', '展开到指定层数的新数组，不修改 array。', 'flat([1,[2,[3]]], 1) -> [1,2,[3]]；depth=2 时得到 [1,2,3]。', '稀疏数组空位要跳过；depth=0 返回浅拷贝。')
  '2026-09-02/03-browser-network.md' = @('一段同时包含同步代码、Promise、queueMicrotask 和 setTimeout 的代码。', '准确的打印顺序，以及每一步属于同步、微任务还是宏任务的中文原因。', 'console.log("A"); Promise.resolve().then(()=>console.log("B")); setTimeout(()=>console.log("C")); 输出 A、B、C。', '本轮同步代码结束后先清空微任务，再执行下一个宏任务。')
  '2026-09-02/04-engineering.js' = @('原函数 fn、等待时间 wait，以及连续调用时的 this 和参数。', '一个带 cancel 方法的防抖函数；停止触发 wait 毫秒后只执行最后一次。', '20ms 内依次调用 search("a")、search("ab")、search("abc")，wait=50ms -> 只执行 fn("abc") 一次。', 'cancel 后不能再执行待触发调用；调用时的 this 不能丢失。')

  '2026-09-03/01-algorithm.js' = @('整数数组 nums。', '所有和为 0 且数值组合不重复的三元组。', '[-1,0,1,2,-1,-4] -> [[-1,-1,2],[-1,0,1]]。', '少于 3 项返回 []；排序后要跳过重复基准值和重复双指针值。')
  '2026-09-03/02-javascript.js' = @('待柯里化函数 fn；后续调用可每次传一个或多个参数。', '新函数；累计参数数量达到 fn.length 后执行并返回结果。', 'curry((a,b,c)=>a+b+c)(1)(2,3) -> 6。', '一次传入全部参数也要工作；注意保留调用时的 this。')
  '2026-09-03/03-browser-network.md' = @('一个容器元素，以及可能在之后动态加入的列表项点击事件。', '一个绑在容器上的处理方案，能定位真正的目标项并解释资源优势。', '点击 button 内的 span 时，event.target.closest("button[data-id]") 找到按钮并读取 data-id。', 'closest 结果可能为空；目标必须仍位于委托容器内部。')
  '2026-09-03/04-engineering.js' = @('Todo 数组和 add/toggle/remove/filter 等操作参数。', '每次操作后的新数组，以及总数、已完成数等统计。', 'add([], {id:1,text:"学习"}) -> [{id:1,text:"学习",done:false}]；toggle 后 done=true。', '找不到 id 时保持数据不变；任何更新都不能修改原数组或原对象。')

  '2026-09-04/01-algorithm.js' = @('字符串 s。', 's 中最长的连续回文子串。', 's="babad" -> "bab" 或 "aba"；s="cbbd" -> "bb"。', '空字符串返回 ""；要同时检查单字符中心和双字符中心。')
  '2026-09-04/02-javascript.js' = @('目标函数 fn、thisArg 与参数列表。', '使用 thisArg 调用 fn 后的返回值。', 'myCall(function(x){return this.base+x}, {base:2}, 3) -> 5。', '临时属性必须清理；thisArg 为 null/undefined 的规则要明确；箭头函数的 this 不能被改写。')
  '2026-09-04/03-browser-network.md' = @('一个完整 URL，例如 https://site.test/search?tag=js&tag=ts#top。', 'pathname、查询参数、重复键数组和 hash，并说明原生 API 与手写方案的取舍。', 'new URL(url).searchParams.getAll("tag") -> ["js","ts"]，url.hash -> "#top"。', '空值、+、百分号编码和重复键必须明确处理。')
  '2026-09-04/04-engineering.js' = @('数据行数组、排序字段与 asc/desc 方向。', '排序后的新数组，原列表顺序不变。', '按 score 升序排序 [{id:1,score:20},{id:2,score:10}] -> id 顺序 [2,1]。', '数字、中文字符串和空值要有明确比较规则；相等项保持稳定。')

  '2026-09-05/01-algorithm.js' = @('只含括号字符的字符串 s。', '第一个不合法字符的下标；完全合法返回 -1。', '"([)]" -> 2，因为下标 2 的 ) 不能匹配当前栈顶 [。', '遍历结束仍有左括号时，要定义并返回第一个未匹配左括号的位置。')
  '2026-09-05/02-javascript.js' = @('函数 fn、绑定对象 thisArg、预置参数和调用时参数。', '绑定后的函数；普通调用和 new 调用都符合 bind 行为。', 'bind(add,{base:1},2)(3) -> 6；new Bound("Ada") 创建的对象仍应继承原构造器原型。', '作为构造函数调用时忽略 thisArg；参数顺序是预置参数在前。')
  '2026-09-05/03-browser-network.md' = @('要保存的 key/value，以及 Cookie、localStorage 或 sessionStorage 的使用场景。', '三者对比表和 safeGet/safeSet JSON 工具的成功或失败结果。', 'safeGet("profile", {}) 遇到值 "{bad" 时返回默认值 {}，而不是抛异常。', '存储可能不可用或超配额；Cookie 会随请求发送且受 SameSite/过期属性影响。')
  '2026-09-05/04-engineering.js' = @('字段值对象与 required、minLength、pattern 规则配置。', '按字段名组织的错误信息对象；无错误字段不出现。', 'values={name:"A"}, rules.name.minLength=2 -> {name:"至少输入 2 个字符"}。', '空值是否继续执行后续规则要统一；正则对象的 lastIndex 风险要考虑。')

  '2026-09-06/01-algorithm.js' = @('字符串 s。', '对象 {substring,start,end}，表示最长无重复连续子串及闭区间下标。', '"abba" -> {substring:"ab",start:0,end:1}；若并列，返回最早出现的一段。', '空字符串返回 {substring:"",start:-1,end:-1}；左边界不能倒退。')
  '2026-09-06/02-javascript.js' = @('事件名、普通监听器、通配监听器 * 与 once 监听器。', 'emit 时的调用结果；off 后对应函数引用从内部存储移除。', 'on("save",a) 与 on("*",all) 后 emit("save",1) 会依次通知 a(1) 和 all("save",1)。', 'once 只运行一次；事件集合为空后应删除 Map 项，避免残留引用。')
  '2026-09-06/03-browser-network.md' = @('一段先读取 offsetHeight、再修改 style、又立即读取布局的 DOM 代码。', '渲染阶段顺序说明，并指出哪次读写可能触发强制同步布局。', 'element.style.width="100px" 后立刻读取 element.offsetWidth，浏览器可能被迫提前完成 style 与 layout。', 'transform/opacity 通常只涉及 composite，但实际优化仍要用性能工具验证。')
  '2026-09-06/04-engineering.js' = @('总条数、scrollTop、固定行高、视口高度和 overscan。', 'start/end 下标、应渲染切片、顶部与底部占位高度。', '100 项、行高 20、scrollTop=100、视口高 60、overscan=0 -> start=5,end=7,top=100,bottom=1840。', '下标要夹在有效范围；最后一屏不能产生负占位高度。')

  '2026-09-07/01-algorithm.js' = @('可能含首尾和连续空格的字符串 s。', '单词顺序反转、单词内部不变且只有单个空格分隔的新字符串。', '"  hello   world  " -> "world hello"。', '全是空格时返回空字符串；不要依赖一个正则直接完成全部处理。')
  '2026-09-07/02-javascript.js' = @('任意两个 JavaScript 值 x、y。', '与 Object.is(x,y) 一致的布尔值。', 'objectIs(NaN,NaN) -> true；objectIs(+0,-0) -> false；objectIs(1,1) -> true。', '对象只按引用比较；重点区分 NaN 与正负零。')
  '2026-09-07/03-browser-network.md' = @('一个 HTTP 状态码和当前请求场景。', '状态含义、是否可重试、页面提示和登录/缓存等前端动作。', '401 -> 身份未认证，可尝试刷新登录态；403 -> 已认证但无权限，不应循环刷新 token。', '204 没有响应体；304 依赖本地缓存；429 应尊重 Retry-After。')
  '2026-09-07/04-engineering.js' = @('本周任一已做题的原始题目、30 分钟计时和自己设计的测试。', '不看旧代码的实现、状态注释、至少 3 个边界测试和复盘。', '选择 flat：提交实现，并测试空数组、depth=0、稀疏数组三类边界。', '不得复制旧实现；超时也保留当前代码，用于定位真实卡点。')

  '2026-09-08/01-algorithm.js' = @('单链表头结点 head，节点结构为 {value,next}。', '反转后的新头结点，节点本身复用。', '1->2->3->null -> 3->2->1->null。', 'head=null 返回 null；改 current.next 前必须先保存 next。')
  '2026-09-08/02-javascript.js' = @('普通对象、数组、Date、RegExp 或含循环/共享引用的值。', '结构相同的深拷贝；支持的引用值是新对象，内部共享关系保留。', 'source.self=source，clone 后 copy!==source 且 copy.self===copy。', 'WeakMap 必须在递归子属性之前登记副本，否则循环引用会无限递归。')
  '2026-09-08/03-browser-network.md' = @('一条包含多个 then、返回普通值、返回 Promise 和 throw 的 Promise 链。', '每个 then/catch 接收到的值或错误，以及完整执行顺序。', 'Promise.resolve(1).then(x=>x+1).then(console.log) 最终打印 2；若回调 throw，则跳到最近 catch。', '缺少成功或失败处理器时要值透传/错误冒泡；返回 Promise 时后续必须等待。')
  '2026-09-08/04-engineering.js' = @('当前状态和 start/succeed/fail/reset 等事件。', '合法迁移后的新状态；非法迁移返回错误或保持原状态，规则需统一。', 'idle + start -> loading；loading + succeed(data) -> success；success + succeed 属于非法迁移。', 'loading 才能 success/error；reset 可否从所有状态发生要写清。')

  '2026-09-09/01-algorithm.js' = @('两个按升序排列的链表头结点 list1、list2。', '合并后的有序链表头结点，复用输入节点。', '1->2->4 与 1->3->4 -> 1->1->2->3->4->4。', '任一链表为空时直接返回另一个；不要新建承载业务值的节点。')
  '2026-09-09/02-javascript.js' = @('构造函数 Constructor 与传给它的参数列表。', '模拟 new 表达式创建出的实例，或构造器显式返回的对象。', 'myNew(Person,"Ada") -> 对象 name="Ada" 且 Object.getPrototypeOf(result)===Person.prototype。', '构造器返回对象/函数时采用该返回值；返回原始值时仍采用新实例。')
  '2026-09-09/03-browser-network.md' = @('URL、fetch options，以及成功 JSON、非 2xx、网络断开等响应场景。', '统一结果，例如成功 {ok:true,data}，失败 {ok:false,error:{type,status,message}}。', '服务器返回 404 JSON 时 fetch 本身通常仍 fulfilled，封装层需检查 response.ok 并返回 HTTP_ERROR。', '204 可能没有 JSON；JSON 解析失败与网络失败要能区分。')
  '2026-09-09/04-engineering.js' = @('一个返回 Promise 的提交函数和按钮点击动作。', '可测试的 loading/text/error 状态；重复点击不会重复提交。', '第一次点击后 state={loading:true,text:"加载中..."}；请求成功后恢复 {loading:false,text:"提交"}。', '请求 reject 也必须在 finally 恢复；loading=true 时的点击直接忽略。')

  '2026-09-10/01-algorithm.js' = @('单链表头结点 head。', '无环返回 null；有环时返回入环节点，若只做基础版可先返回布尔值。', '1->2->3->4 且 4.next=2 -> 入环节点是值 2 的节点。', '空链表或单节点无环返回 null；比较节点引用而不是节点值。')
  '2026-09-10/02-javascript.js' = @('任意左值 value 与右侧构造函数 Constructor。', 'value 的原型链是否包含 Constructor.prototype 的布尔值。', 'myInstanceof([],Array) -> true；myInstanceof({},Array) -> false。', '左值为 null 或原始值返回 false；右值不可调用时应抛 TypeError。')
  '2026-09-10/03-browser-network.md' = @('fetch 请求、超时毫秒数、可选的外部 AbortSignal。', '成功数据，或明确分类为 timeout、aborted、network 的错误。', 'timeout=1000ms，接口 2s 才响应 -> 1s 时 controller.abort()，结果 type="timeout"。', '请求完成后清除定时器；主动取消与超时不能都被笼统标成网络失败。')
  '2026-09-10/04-engineering.js' = @('文件列表以及 start/success/fail/retry 事件。', '每个文件的 queued/uploading/success/error 状态与重试后的新队列。', '文件 a 从 queued -> uploading -> error；retry(a) 后回到 queued 并可再次启动。', '同一文件不能同时上传两次；失败信息要保留；重试只作用于失败项。')

  '2026-09-11/01-algorithm.js' = @('升序数组 nums 与目标值 target。', '目标下标；不存在返回 -1。', 'nums=[1,3,5,7], target=5 -> 2；target=4 -> -1。', '空数组；左右端点；计算 mid 时避免边界更新不前进。')
  '2026-09-11/02-javascript.js' = @('函数 fn、时间间隔 wait 与一串高频调用。', 'debounce 在停止后执行一次；throttle 在时间窗口内最多执行一次。', '搜索输入 a/ab/abc 适合 debounce，只请求 abc；滚动位置持续上报适合 throttle。', '都要保留 this/参数；定时器结束、取消和首尾触发规则要明确。')
  '2026-09-11/03-browser-network.md' = @('前端源、目标 URL、方法、headers 和 credentials 配置。', '判断是否预检、浏览器需要哪些响应头，以及失败原因。', 'POST application/json 通常先发 OPTIONS；带 Cookie 时服务端需明确 Allow-Origin，不能使用 *，并允许 credentials。', 'CORS 是浏览器读取限制，不是服务端请求失败；自定义头常触发预检。')
  '2026-09-11/04-engineering.js' = @('请求 key、创建 fetch 的函数和写入状态的回调。', '同 key 旧请求被取消；只有最新请求的结果能更新状态。', 'search("a") 未完成时启动 search("ab")，前者 abort，最终只写入 ab 的结果。', '旧请求可能在取消前已经完成，仍需用版本号或引用检查防止过期写入。')

  '2026-09-12/01-algorithm.js' = @('无重复元素的旋转升序数组 nums 与 target。', 'target 下标，不存在返回 -1。', '[4,5,6,7,0,1,2], target=0 -> 4。', '每轮至少有一半有序；边界比较必须明确包含哪一端。')
  '2026-09-12/02-javascript.js' = @('可迭代的值或 Promise 列表。', '一个 Promise；全部成功时按输入顺序 resolve 数组，任一失败立即 reject。', 'Promise.all 手写版接收 [delay("A",30),delay("B",10)]，仍输出 ["A","B"]。', '空输入立即 resolve([])；普通值按已成功 Promise 处理。')
  '2026-09-12/03-browser-network.md' = @('请求与响应头中的 Cache-Control、ETag/Last-Modified 及浏览器缓存状态。', '判断使用强缓存、协商缓存还是重新下载，并说明 304 的含义。', 'Cache-Control:max-age=3600 未过期 -> 不发请求直接用缓存；过期后带 If-None-Match，服务端可回 304。', 'no-store 与 no-cache 含义不同；304 没有新响应体，要复用本地副本。')
  '2026-09-12/04-engineering.js' = @('缓存 key、请求函数、ttl 和当前时间。', '有效期内复用值或进行中的 Promise；失效后重新请求。', 'get("user:1") 连续调用两次且首个未完成 -> 网络函数只执行一次，两次得到同一结果。', '失败结果通常不缓存；手动 invalidate 后下一次必须重新请求。')

  '2026-09-13/01-algorithm.js' = @('可比较数字数组 nums。', '升序的新数组，不修改 nums。', '[3,1,2] -> [1,2,3]，原数组仍为 [3,1,2]。', '空数组、重复值和已排序数组；pivot 选择会影响最坏 O(n^2)。')
  '2026-09-13/02-javascript.js' = @('可迭代的值或 Promise 列表。', '一个由第一个 settled 项决定的 Promise。', 'race([delayResolve("slow",30),delayReject("bad",10)]) -> 约 10ms 后 reject "bad"。', '空数组返回永远 pending 的 Promise；普通值可能立即赢得竞速。')
  '2026-09-13/03-browser-network.md' = @('storage 对象、key、JSON 值与默认值。', 'safeGet/safeSet/remove 的成功结果；环境不可用或数据损坏时安全降级。', 'storage.getItem("x") 返回 "{bad"，safeGet("x",[]) -> [] 并可报告解析错误。', 'SSR 没有 window；隐私模式或容量不足时 setItem 可能抛异常。')
  '2026-09-13/04-engineering.js' = @('草稿 key、输入值、保存延迟和 storage 适配器。', '防抖保存后的草稿；加载可恢复；提交成功后对应 key 被删除。', '连续输入 "a"、"ab"、"abc" 后只保存 "abc"；reload 时 load() 返回 "abc"。', '空草稿是否保存要定义；保存失败不能阻塞输入；销毁时清理定时器。')

  '2026-09-14/01-algorithm.js' = @('升序数组 nums 与 target。', 'lowerBound 返回第一个 >= target 的下标；upperFloor 返回最后一个 <= target 的下标，不存在返回 -1。', '[1,2,2,4], target=2 -> lowerBound=1、upperFloor=2。', 'target 小于全部或大于全部元素；区间采用闭区间还是左闭右开必须一致。')
  '2026-09-14/02-javascript.js' = @('返回 Promise 的任务函数数组 tasks 与正整数 limit。', 'Promise；并发不超限，结果按输入顺序，失败时拒绝并停止领取新任务。', 'A=30ms、B=10ms、C=20ms、limit=2 -> 完成顺序 B、A、C，但输出 [A,B,C]。', '空任务；非法 limit；同步抛错任务；reject 后已运行任务可结束但不再启动新任务。')
  '2026-09-14/03-browser-network.md' = @('一个具体 URL 和“用户按下回车”的起点。', '2 分钟口述：URL 解析、缓存/DNS、TCP/TLS、HTTP、浏览器解析与渲染的关键链路。', '访问 https://example.com 时先解析主机并建立安全连接，取得 HTML 后构建 DOM/CSSOM，再 layout、paint、composite。', '缓存命中可能跳过网络阶段；不要把 DNS、TCP、TLS 顺序混在一起。')
  '2026-09-14/04-engineering.js' = @('反转链表或 Promise.all 原题、45 分钟计时与空白实现文件。', '独立实现、测试结果、复杂度和一个曾经遗漏边界的记录。', '选择 Promise.all：除成功顺序测试外，主动添加 [] 和中途 reject 两个测试。', '禁止查看旧实现；未完成也保留代码与卡点，作为下一轮教学证据。')

  '2026-09-15/01-algorithm.js' = @('二叉树根节点 root，节点含 value/left/right。', '前序值数组，顺序为根、左、右；分别写递归和迭代版。', '树 1，左 2，右 3 -> [1,2,3]。', '空树返回 []；迭代栈中先压右节点再压左节点。')
  '2026-09-15/02-javascript.js' = @('作为新对象原型的 proto；可选属性描述符。', '一个自身为空、原型指向 proto 的新对象。', 'proto={greet(){return "hi"}}，obj=objectCreate(proto) 后 obj.greet() -> "hi" 且 proto 是 obj 的原型。', 'proto 必须是对象或 null；属性查找先自身再沿原型链。')
  '2026-09-15/03-browser-network.md' = @('一段含 async 函数、await、Promise.then、setTimeout 的代码。', '打印顺序，并指出 await 前同步执行、await 后作为微任务继续。', 'async function f(){console.log(1);await 0;console.log(2)}; f();console.log(3) -> 1、3、2。', 'await 非 Promise 值也会异步恢复；微任务之间按入队顺序执行。')
  '2026-09-15/04-engineering.js' = @('原菜单树和当前角色拥有的 permission 集合。', '只含可见节点的新树；无可见子项且自身无权限的父节点被移除。', 'admin 下只有 user:list，权限仅含 user:list -> 保留 admin 和 user:list，删除 sibling 节点。', '不修改原树；父节点自身有权限时即使 children 为空是否保留要明确。')

  '2026-09-16/01-algorithm.js' = @('二叉树根节点 root。', '按层组织的二维值数组。', '树 [3,9,20,null,null,15,7] -> [[3],[9,20],[15,7]]。', '空树返回 []；使用队列下标代替反复 shift，避免潜在 O(n^2)。')
  '2026-09-16/02-javascript.js' = @('null、布尔、有限数字、字符串、数组或普通对象。', '符合本题子集规则的 JSON 字符串。', '{name:"Ada",active:true} -> "{\"name\":\"Ada\",\"active\":true}"。', '循环引用抛 TypeError；数组中不支持值与对象属性中的不支持值规则要明确。')
  '2026-09-16/03-browser-network.md' = @('一个 CPU 密集任务和需要保持响应的页面场景。', '是否使用 Worker 的判断、主线程与 Worker 的消息结构及限制说明。', '主线程 postMessage({type:"SUM",numbers})，Worker 计算后回 {type:"RESULT",value}；页面期间仍可响应点击。', 'Worker 不能直接访问 DOM；大量数据复制有成本，可讨论 Transferable。')
  '2026-09-16/04-engineering.js' = @('大数组、每批数量、处理函数、进度回调和取消信号。', '分批处理结果与 0~1 进度；取消后不再安排下一批。', '1000 项每批 100 项 -> onProgress 依次约为 0.1、0.2…1，主线程在批次间可处理事件。', '空数组应立即完成；处理函数抛错要停止并传播。')

  '2026-09-17/01-algorithm.js' = @('二叉树根节点 root。', '从根到最深叶子的节点层数。', '单节点树 -> 1；根左右子树深度为 2 和 3 -> 整棵树深度 4。', '空树返回 0；递归式是 1 + max(左深度,右深度)。')
  '2026-09-17/02-javascript.js' = @('JSON 字符串、解析失败默认值和可选 onError 回调。', '成功时返回解析值；失败时调用 onError 并返回默认值。', 'safeParse("{bad", {}, err=>logs.push(err)) -> {} 且 logs 新增一个 SyntaxError。', '合法 JSON "null" 应返回 null，不能因 falsy 错用默认值。')
  '2026-09-17/03-browser-network.md' = @('一组 DOM 读取/写入操作，例如改宽度、读 offsetHeight、改 class。', '哪些操作可能回流/重绘，以及把读取和写入分批的优化方案。', '循环中每次 style.width=... 后读取 offsetWidth 会反复强制布局；先统一读取、再统一写入可减少抖动。', 'transform/opacity 通常不触发布局；实际性能要用 DevTools 验证。')
  '2026-09-17/04-engineering.js' = @('图片元素、真实 src、占位图和 IntersectionObserver 配置。', '进入视口后开始加载，成功解除观察；失败时显示错误占位。', '观察到 entry.isIntersecting=true -> 把 data-src 写入 src；load 后 observer.unobserve(img)。', '加载失败也要解除或按策略重试；组件销毁时 disconnect。')

  '2026-09-18/01-algorithm.js' = @('二叉树根节点 root。', '是否为平衡二叉树的布尔值。', '根的左子树高度 3、右子树高度 1 -> false，因为高度差超过 1。', '空树是平衡树；后序函数可用 -1 表示已不平衡并提前向上传播。')
  '2026-09-18/02-javascript.js' = @('任意类型的 key、value 和 get/set/delete 操作。', '能以对象本身作为 key 的缓存结果。', 'const key={id:1}; cache.set(key,"data"); cache.get(key) -> "data"，而另一个 {id:1} 查不到。', '对象会把键字符串化而冲突；Map 按 SameValueZero 和引用身份区分键。')
  '2026-09-18/03-browser-network.md' = @('DOM 节点、事件类型、handler 和 capture 布尔值。', '订阅后的事件调用顺序与一个可解除订阅的函数。', '父元素 capture=true、子元素默认冒泡：点击子元素时先调用父捕获，再目标，最后冒泡监听。', 'removeEventListener 必须使用相同 handler 与 capture；once/passive 选项要说明。')
  '2026-09-18/04-engineering.js' = @('列表 list、原下标 from、目标下标 to。', '移动元素后的新数组，原数组不变。', 'moveItem(["a","b","c"],0,2) -> ["b","c","a"]。', 'from/to 越界时采用抛错或夹取策略并写清；from===to 返回等值新数组。')

  '2026-09-19/01-algorithm.js' = @('二叉树根节点 root 与树中的节点 p、q。', 'p、q 的最近公共祖先节点。', '根 3 的左子树含 5、右子树含 1，p=5、q=1 -> 返回节点 3。', '一个节点是另一个祖先时返回该祖先；比较节点引用。')
  '2026-09-19/02-javascript.js' = @('数组、回调函数和可选初始值。', '从左到右累计后的单个结果。', 'reduce([1,2,3],(sum,n)=>sum+n,0) -> 6；无初始值时从首项作为 accumulator 开始。', '空数组且无初始值必须抛 TypeError；不能跳过回调参数 index/array。')
  '2026-09-19/03-browser-network.md' = @('Service Worker 注册脚本、请求 URL、缓存版本和在线/离线状态。', 'install/activate/fetch 生命周期说明及缓存命中、网络、离线回退策略。', 'fetch 页面请求时先查缓存；网络失败且无缓存则返回预置 offline.html。', '新 Worker 可能处于 waiting；更新缓存时清理旧版本但不能误删其他应用缓存。')
  '2026-09-19/04-engineering.js' = @('window 的 online/offline 事件和初始 navigator.onLine。', '当前是否离线的状态与提示条显示/隐藏结果。', '触发 offline -> state.offline=true 显示“网络已断开”；online -> false 隐藏。', '初始化就要读取当前状态；重复 mount 不得叠加监听，destroy 时解除。')

  '2026-09-20/01-algorithm.js' = @('二叉树根节点 root 与目标和 target。', '是否存在根到叶子的节点值之和等于 target。', '树路径 5->4->11->2 的和为 22，target=22 -> true。', '必须到叶子才算完整路径；空树返回 false。')
  '2026-09-20/02-javascript.js' = @('若干一元函数，从右到左组合。', '一个新函数，其输出依次经过最右函数到最左函数。', 'compose(x=>x*2,x=>x+1)(3) -> 8，先 3+1，再乘 2。', '零个函数时可返回恒等函数；进阶遇到 Promise 时后续函数必须等待。')
  '2026-09-20/03-browser-network.md' = @('一个具体 CSS 选择器和 DOM 规模，例如 .app ul li .title。', '从右向左匹配过程、潜在成本和更清晰的选择器方案。', '浏览器先找所有 .title，再逐级验证祖先；改为 .menu-item__title 可减少无关候选与耦合。', '选择器通常不是首要性能瓶颈，必须先测量；不要牺牲可维护性做微优化。')
  '2026-09-20/04-engineering.js' = @('用户选择 light/dark/system、系统 prefers-color-scheme 和持久化存储。', '页面实际主题、保存结果以及系统主题变化时的更新。', '用户选择 system 且系统为 dark -> document 根节点应用 dark；系统变 light 时自动切换。', '首屏脚本应在渲染前恢复选择以减少闪烁；手动选择后不再跟随系统。')

  '2026-09-21/01-algorithm.js' = @('含 id/parentId 的扁平列表与根 parentId。', '对象 {tree,orphans}；正常节点组成树，父节点缺失的节点进入 orphans。', '[{id:1,parentId:null},{id:2,parentId:99}] -> tree 含节点 1，orphans 含节点 2。', '输入顺序任意；不能修改原节点；孤儿的后代归属规则要说明。')
  '2026-09-21/02-javascript.js' = @('完整 URL 或查询字符串。', '查询对象；重复键为数组，空值为 ""，+ 为空格，异常编码安全降级。', '"?tag=js&tag=ts&flag&x=a+b" -> {tag:["js","ts"],flag:"",x:"a b"}。', 'decodeURIComponent 可能抛 URIError；无 =、空 key 和 hash 都要定义。')
  '2026-09-21/03-browser-network.md' = @('三个真实攻击场景：不可信 HTML、跨站转账、透明 iframe 诱导点击。', '分别识别 XSS/CSRF/点击劫持，并给至少一个匹配的防护措施。', '把用户输入直接写入 innerHTML 可能造成 XSS，应做上下文转义/白名单清洗并配合 CSP。', 'SameSite 防 CSRF 但不替代服务端 token；X-Frame-Options/frame-ancestors 防点击劫持。')
  '2026-09-21/04-engineering.js' = @('路径数组和可选标题，例如 /a/b/c 与 /a/b/d。', '共享前缀节点的路由树、手画节点复用过程和测试。', '两个路径只创建一个 /a 和一个 /a/b，再在其 children 下放 c、d。', '首尾斜杠、重复路径和隐式父节点；45 分钟内先画图再编码。')

  '2026-09-22/01-algorithm.js' = @('非负整数 n，表示有 n 级台阶，每次走 1 或 2 级。', '到达第 n 级的不同走法数量。', 'n=3 -> 3，分别是 1+1+1、1+2、2+1。', '明确 n=0 的定义；n=1 返回 1，n=2 返回 2。')
  '2026-09-22/02-javascript.js' = @('数组 array、predicate 和可选 thisArg。', '包含所有 predicate 返回 truthy 元素的新数组。', 'filter([1,2,3],(value,index)=>value>index) -> [1,2,3]；回调接收 value/index/array。', '不修改原数组；稀疏数组空位不调用回调。')
  '2026-09-22/03-browser-network.md' = @('一组页面体验现象或性能报告数值。', '分别说明 FCP、LCP、CLS、INP 衡量的阶段和对应问题。', '主图很晚出现主要影响 LCP；按钮点击后迟迟无反馈主要影响 INP；内容突然跳动影响 CLS。', '指标要结合真实用户数据和实验室数据；不要把 FCP 当成页面完全可用。')
  '2026-09-22/04-engineering.js' = @('event 名与 payload；环境提供时间、页面路径和匿名 session id。', '标准化埋点对象并交给发送器，例如 {event,payload,time,path,sessionId}。', 'report("buy",{sku:"A"}) -> 事件自动带 Date.now()、location.pathname 和稳定匿名会话 id。', 'payload 不能覆盖保留字段；避免采集敏感信息；发送失败策略要说明。')

  '2026-09-23/01-algorithm.js' = @('非负整数数组 nums，每项是某间房金额。', '不能选择相邻房间时能取得的最大金额。', '[2,7,9,3,1] -> 12，选择 2、9、1。', '空数组返回 0；滚动变量分别表示“不偷当前”和“偷当前/当前最优”。')
  '2026-09-23/02-javascript.js' = @('数组 array、mapper 和可选 thisArg。', '长度相同的新数组；已有元素被映射，稀疏空位仍为空位。', '[1,,3].map(x=>x*2) 的手写结果为 [2,,6]，下标 1 仍不存在。', '不修改原数组；回调接收 value/index/array。')
  '2026-09-23/03-browser-network.md' = @('一张首屏大图及设备宽度、DPR、网络条件。', '格式、srcset/sizes、lazy、width/height 的组合优化建议。', '首屏 hero 用 AVIF/WebP 并提供 srcset，明确 width/height 防 CLS；屏外图片 loading="lazy"。', '首屏 LCP 图通常不应懒加载；格式选择需提供兼容回退。')
  '2026-09-23/04-engineering.js' = @('图片 URL 列表、并发上限 limit 和单张加载函数。', '所有图片的 success/error 结果、成功失败计数和全部完成通知。', '4 张图、limit=2 -> 任意时刻最多加载 2 张，最终返回每个原下标对应状态。', '空列表立即完成；单张失败不能阻止其他图片；结果保持输入顺序。')

  '2026-09-24/01-algorithm.js' = @('硬币面额数组 coins 与非负金额 amount。', '凑成 amount 的最少硬币数；无法凑成返回 -1。', 'coins=[1,2,5], amount=11 -> 3，组合为 5+5+1。', 'amount=0 返回 0；硬币可重复使用；无解状态不能参与转移。')
  '2026-09-24/02-javascript.js' = @('正整数容量 capacity，以及 get(key)/put(key,value) 操作。', 'get 返回值或 -1；访问与写入都会把 key 标记为最新，超容量淘汰最旧。', 'capacity=2；put(a,1),put(b,2),get(a),put(c,3) 后 b 被淘汰，get(b)->-1。', '更新已有 key 不增加容量；capacity 非正整数应拒绝。')
  '2026-09-24/03-browser-network.md' = @('一段含闭包、定时器、DOM 监听和已移除节点引用的组件代码。', '指出保留链、可观测症状、清理时机和验证方法。', '组件卸载后未 clearInterval，回调仍引用组件状态 -> 内存和 CPU 持续增长；destroy 中清理定时器。', '监听器必须用同一函数引用解除；用堆快照验证而不是凭感觉。')
  '2026-09-24/04-engineering.js' = @('timer id、target/event/handler 等资源注册信息。', 'cleanup 管理器；destroy 时一次性释放全部资源且可重复调用。', 'registerTimer(id) 与 registerListener(button,"click",fn) 后 destroy() 会 clearTimeout 并 removeEventListener。', '资源在 destroy 前手动释放时要同步取消登记；重复 destroy 不应报错。')

  '2026-09-25/01-algorithm.js' = @('可能含重复数字的数组 nums。', '所有不重复排列组成的二维数组。', '[1,1,2] -> [[1,1,2],[1,2,1],[2,1,1]]。', '空数组通常返回 [[]]；同一层跳过相同值，但不同位置仍可使用。')
  '2026-09-25/02-javascript.js' = @('数组、predicate 和 some/every 模式。', 'some 在任一项满足时 true；every 在任一项不满足时 false，并立即停止。', 'some([1,3,4],n=>n%2===0) -> true，访问到 4 后不再继续；every([],fn) -> true。', '稀疏空位跳过；回调参数与 thisArg 规则和原生一致。')
  '2026-09-25/03-browser-network.md' = @('一个每帧更新位置的动画需求和目标持续时间。', '选择 requestAnimationFrame 的原因、基于时间戳的进度计算和取消方式。', '动画 300ms：每帧 progress=min((now-start)/300,1)，再据此计算位置；完成时停止请求下一帧。', '后台标签页 rAF 会降频/暂停；不能用帧数假设固定 60Hz。')
  '2026-09-25/04-engineering.js' = @('任务真实进度 targetProgress、当前显示进度和 rAF 调度器。', '平滑变化的显示值；达到目标或页面隐藏时合理停止/降频。', '显示 20%，任务跳到 80% 时用多帧逐步接近 80%，而不是一次跳变。', '进度不能倒退或超过 100%；销毁时 cancelAnimationFrame。')

  '2026-09-26/01-algorithm.js' = @('元素互不相同的数组 nums。', '包含所有子集的二维数组。', '[1,2] -> [[],[1],[1,2],[2]]，顺序可以按回溯过程定义。', '空数组返回 [[]]；每次记录 path 时必须复制，不能把同一数组引用反复加入结果。')
  '2026-09-26/02-javascript.js' = @('可观察对象、初始状态和多个 observer 回调。', 'setState 后通知订阅者；unsubscribe 后不再收到通知。', 'observerA/observerB 订阅后 setState(1) 两者都收到 1；解除 A 后 setState(2) 只有 B 收到。', '通知过程中解除/新增订阅不应破坏本轮遍历；避免残留引用。')
  '2026-09-26/03-browser-network.md' = @('IntersectionObserver 配置和一批曝光元素。', 'threshold/rootMargin 的含义、何时上报，以及防重复曝光 key。', 'threshold=0.5 表示元素至少 50% 可见时触发；商品 key 可用 pageId+sku，Set 中已有则不再报。', '回调可能多次触发；元素离开再进入仍需按“一次曝光”规则去重。')
  '2026-09-26/04-engineering.js' = @('商品元素条目、sku、观察器 entry 与上报函数。', '每个商品第一次进入可视区时的一次上报记录。', 'sku=A 首次 isIntersecting=true -> report(A) 并加入 seen；再次进入时 seen 已有 A，不再上报。', '缺失 sku 不上报；销毁时 disconnect；列表复用 DOM 时 key 必须跟业务项走。')

  '2026-09-27/01-algorithm.js' = @('由 "1" 陆地和 "0" 水组成的二维网格。', '上下左右连通的岛屿数量。', '[["1","1","0"],["0","1","0"],["1","0","1"]] -> 3。', '空网格返回 0；访问邻居前检查边界；是否修改原网格要明确。')
  '2026-09-27/02-javascript.js' = @('事件名与多个监听器，其中某个监听器可能在执行时 off 自己。', '本轮 emit 按开始时快照调用，下一轮不再调用已移除监听器。', 'A 执行时 off(A)，B 仍在本轮执行；第二次 emit 只执行 B。', '遍历原 Set 时直接删除可能改变行为，先复制监听器快照。')
  '2026-09-27/03-browser-network.md' = @('一个只有图标的按钮、键盘用户和低对比度文字场景。', '语义元素、焦点顺序、可访问名称和对比度的修正方案。', '<button aria-label="关闭">×</button> 可被键盘聚焦且读屏知道用途；不要用无 tabindex 的 div 模拟按钮。', 'aria 不能修复错误交互语义；焦点样式不能只靠颜色且不应无故移除 outline。')
  '2026-09-27/04-engineering.js' = @('Modal、触发按钮、内部可操作元素列表和键盘事件。', '打开/关闭状态以及正确的焦点移动和键盘循环。', '点击“打开”后聚焦 Modal 第一个输入框；按 Esc 关闭后焦点回到原按钮。', 'Tab/Shift+Tab 不得逃出模态框；禁用/隐藏元素不能进入焦点序列。')

  '2026-09-28/01-algorithm.js' = @('LRU 容量和一串 get/put 操作，限时 25 分钟。', '每次 get 的返回值、最终键顺序以及 get/put 平均 O(1) 的说明。', 'capacity=2，put(1,A),put(2,B),get(1),put(3,C) -> key 2 被淘汰。', '更新已有 key、容量 1、读取不存在 key；不得看旧实现。')
  '2026-09-28/02-javascript.js' = @('含嵌套对象、Date、RegExp 和循环引用的 source，限时完成。', '独立深拷贝 copy，类型和值正确且循环/共享关系保留。', 'source.self=source，copy.self===copy；source.date!==copy.date 但时间戳相同。', 'WeakMap 登记时机、RegExp.lastIndex、null 和函数处理范围。')
  '2026-09-28/03-browser-network.md' = @('一个“长列表滚动卡顿”的页面、性能录制和可复现步骤。', '测量、定位、优化、验证四段排查报告。', '先录 Performance 发现 scroll handler 长任务，再定位每次读取布局并渲染全部行，改为 rAF+虚拟列表后复测帧率。', '先有基线数据再优化；网络慢和主线程卡顿要区分。')
  '2026-09-28/04-engineering.js' = @('本月代码、测试失败和评估记录。', '三个最常遗漏边界，每项配一个可执行测试和改进动作。', '遗漏“空数组”：记录 assert.deepEqual(flat([]),[])，并规定今后编码前先列空输入。', '只记录有证据的问题；“我不熟”不算可验证边界。')

  '2026-09-29/01-algorithm.js' = @('k 个升序链表头结点数组 lists。', '合并后的单个升序链表头结点。', '[1->4, 1->3->5, 2->6] -> 1->1->2->3->4->5->6。', 'lists=[] 或全是 null 返回 null；说明最小堆 O(N log k) 或分治复杂度。')
  '2026-09-29/02-javascript.js' = @('值或 Promise 的可迭代列表。', 'Promise，始终成功为每项的 {status,value} 或 {status,reason}，顺序与输入一致。', '[Promise.resolve(1),Promise.reject("x")] -> [{status:"fulfilled",value:1},{status:"rejected",reason:"x"}]。', '空输入立即 resolve([])；单项失败不能让整体 reject。')
  '2026-09-29/03-browser-network.md' = @('用户访问 https://example.com 的场景。', '按顺序说明 DNS、TCP、TLS 各自解决的具体问题。', 'DNS 把域名解析为 IP；TCP 建立可靠连接；TLS 校验证书并协商密钥，然后才安全发送 HTTP。', '启用 HTTP/3 时传输基于 QUIC/UDP，不应机械套用独立 TCP 阶段。')
  '2026-09-29/04-engineering.js' = @('异步任务 task、最大重试次数、退避参数和 AbortSignal。', '最终成功值或最后错误，并记录每次尝试时间；取消后立即停止。', '任务前两次返回 503、第三次成功，base=100ms -> 约等待 100ms、200ms 后成功。', '400 等不可重试错误立即失败；等待退避期间也必须响应取消。')

  '2026-09-30/01-algorithm.js' = @('非负整数数组 heights，表示每列高度。', '下雨后能接住的总水量。', '[0,1,0,2,1,0,1,3,2,1,2,1] -> 6。', '少于 3 根柱子返回 0；双指针移动由较小一侧的最大值决定。')
  '2026-09-30/02-javascript.js' = @('值或 Promise 的可迭代列表。', '第一个 fulfilled 值；若全部 rejected，则 reject AggregateError，errors 按输入顺序。', '[reject("A"),resolve("B")] -> resolve("B")；两个都失败 -> AggregateError(["A","B"])。', '空输入应立即以 AggregateError 拒绝；普通值视为已成功。')
  '2026-09-30/03-browser-network.md' = @('资源加载失败、同步运行时异常和未处理 Promise 拒绝三个场景。', '对应监听入口、统一错误字段和去重/采样策略。', 'window error 捕获脚本异常；资源 error 需捕获阶段；unhandledrejection 读取 event.reason。', '监控代码自身不能再次抛错；跨域脚本可能只得到 Script error。')
  '2026-09-30/04-engineering.js' = @('错误事件、批量阈值、发送器、持久化存储与页面卸载事件。', '批量发送队列；失败项保留，卸载时使用 sendBeacon 尝试发送。', '队列达到 10 条 -> flush；请求失败则恢复到队列；pagehide 时 sendBeacon(JSON)。', '并发 flush 防重复；限制队列长度；脱敏；sendBeacon 返回 false 时仍保留。')

  '2026-10-01/01-algorithm.js' = @('课程数 numCourses 与先修关系 [course,prerequisite] 数组。', '能完成全部课程返回 true，否则 false。', 'numCourses=2, prerequisites=[[1,0]] -> true；再加 [0,1] -> false，形成环。', '孤立课程也要计数；重复边要避免错误增加入度。')
  '2026-10-01/02-javascript.js' = @('Promise 任务函数数组 tasks 与并发上限 limit。', '按输入顺序 resolve 结果；任一失败 reject 且不再领取新任务。', 'A=30ms、B=10ms、C=20ms、limit=2 -> 完成可为 B/A/C，结果仍 [A,B,C]。', '空任务、非法 limit、同步抛错；运行数始终不能超过 limit。')
  '2026-10-01/03-browser-network.md' = @('同源页面要加载很多小资源，分别假设 HTTP/1.1 与 HTTP/2。', '说明连接数、队头等待和多路复用对请求策略的影响。', 'HTTP/1.1 常受每源并发连接限制；HTTP/2 可在一条连接上并发多个流，不必再做域名分片。', '服务端和代理实际支持情况需测量；HTTP/2 仍有 TCP 层队头阻塞。')
  '2026-10-01/04-engineering.js' = @('下载任务数组、并发数及 pause/retry 操作。', '每项 pending/running/success/error/paused 状态与调度结果。', 'limit=2 时前两项 running，pause 第三项只阻止其启动；某项失败后 retry 回到 pending。', '暂停运行中任务是否取消要定义；重复启动、失败重试和队列公平性。')

  '2026-10-02/01-algorithm.js' = @('课程数与先修关系数组。', '一条满足全部依赖的课程顺序；有环返回 []。', 'numCourses=4, [[1,0],[2,0],[3,1],[3,2]] -> [0,1,2,3] 或 [0,2,1,3]。', '可能存在多种正确顺序；结果长度不足 numCourses 说明有环。')
  '2026-10-02/02-javascript.js' = @('原 Promise 与 onFinally 回调。', '新 Promise；回调执行后保留原成功值或原失败原因。', 'Promise.resolve(1).finally(()=>2) 仍 resolve 1；finally 抛 Error("x") 则改为 reject x。', '回调返回 Promise 时要等待；回调本身无参数。')
  '2026-10-02/03-browser-network.md' = @('同一资源多路并发传输时出现丢包的 HTTP/2 与 HTTP/3 场景。', '说明 TCP 队头阻塞、QUIC 流隔离和迁移能力差异。', 'HTTP/2 一个 TCP 包丢失会等待重传并阻塞多个流；HTTP/3 某个 QUIC 流丢包通常不阻塞其他流。', '应用层优先级和服务器实现仍影响结果；QUIC 基于 UDP 但自己提供可靠性。')
  '2026-10-02/04-engineering.js' = @('任务列表及每项 id/status/order。', 'pending/running/success/error 数量和按队列顺序展示的数据。', '任务状态 [pending,running,error] -> counters={pending:1,running:1,success:0,error:1}。', '未知状态应拒绝；状态变更需保持 id 与顺序稳定。')

  '2026-10-03/01-algorithm.js' = @('未排序数组 nums 与整数 k。', '按大小排序后的第 k 大元素。', '[3,2,1,5,6,4], k=2 -> 5。', 'k 必须在 1..n；不能把完整排序作为最终方案。')
  '2026-10-03/02-javascript.js' = @('异步任务 task、最大尝试次数、间隔策略。', '首次成功值；全失败时透传最后一次错误。', 'task 前两次 reject、第三次 resolve("ok")，maxAttempts=3 -> "ok"，共调用 3 次。', '次数含首次调用；等待可固定或指数；成功后不能再重试。')
  '2026-10-03/03-browser-network.md' = @('一个失败的 HTTP 请求，包含 method、状态码和可选业务幂等键。', '判断能否自动重试，并给出原因与保护措施。', 'GET /products 遇到 503 通常可重试；POST /orders 需幂等键，否则重复请求可能创建两笔订单。', '网络超时不代表服务端未处理；429 应结合 Retry-After。')
  '2026-10-03/04-engineering.js' = @('请求结果状态码、attempt、时间和取消信号。', '每次是否重试的决策及 {time,reason} 记录。', '503 -> 记录 SERVER_BUSY 并退避；400 -> 立即失败且不重试。', '最大次数、取消、幂等性和 Retry-After 都会影响决策。')

  '2026-10-04/01-algorithm.js' = @('整数数组 nums 与 k。', '出现频率最高的 k 个元素；并列规则需固定。', '[1,1,1,2,2,3], k=2 -> [1,2]。', 'k 等于不同元素数；频次相同按首次位置或数值排序并写清。')
  '2026-10-04/02-javascript.js' = @('等待毫秒 ms；异步任务 promise 与超时毫秒 timeout。', 'sleep 返回延迟完成 Promise；超时包装在期限内返回原值，否则 reject。', 'withTimeout(delayResolve("ok",20),50) -> "ok"；原任务 100ms 则约 50ms reject TimeoutError。', '清理定时器；晚到结果不能覆盖超时后的业务状态。')
  '2026-10-04/03-browser-network.md' = @('一个带 AbortSignal 的 fetch 与调用 controller.abort(reason) 的动作。', '说明 signal.aborted 如何传到 fetch、错误分支与 UI 状态。', '搜索页取消旧请求后 fetch reject AbortError，业务层识别为 cancelled，不显示“网络失败”。', '同一 signal 可通知多个消费者；完成后仍应移除自定义监听。')
  '2026-10-04/04-engineering.js' = @('快速变化的关键词与返回时长不同的搜索请求。', '只有最后一个关键词结果进入状态；旧请求取消或被版本号忽略。', '输入 a 后输入 ab；ab 先返回，之后 a 才返回 -> 页面仍显示 ab 结果。', '取消可能失败或过晚，所以写状态前仍需验证请求身份。')

  '2026-10-05/01-algorithm.js' = @('push/pop/top/getMin 操作序列。', '每次查询的栈顶或当前最小值，全部操作 O(1)。', 'push(3),push(1),push(2),getMin()->1,pop(),getMin()->1。', '空栈 pop/top/getMin 的行为要定义；重复最小值要正确保留。')
  '2026-10-05/02-javascript.js' = @('函数 fn 与多次调用参数。', '只执行 fn 一次，之后复用第一次结果或 Promise。', 'once(x=>x*2)(3) -> 6，之后调用参数 10 仍返回 6。', '第一次 throw/reject 后是否缓存失败必须明确；异步并发调用不能执行两次。')
  '2026-10-05/03-browser-network.md' = @('一个执行超过 50ms 的主线程任务与 PerformanceObserver 记录。', '解释输入延迟原因、Long Task 条目和拆分方案。', '同步处理 10 万项耗时 120ms -> 期间点击无法响应；拆成小批次可让出主线程。', 'Long Task 只反映主线程占用，仍需定位具体函数和验证改动。')
  '2026-10-05/04-engineering.js' = @('大数字数组、每帧预算、进度回调和 cancel。', '最终和、逐步进度；取消后停止处理并返回取消状态。', '10000 项每帧处理 500 项 -> 约 20 次调度，progress 从 0.05 增至 1。', '空数组立即完成；不能按固定帧率假设时间预算。')

  '2026-10-06/01-algorithm.js' = @('每日温度数组 temperatures。', '每个下标还需等待多少天出现更高温度；没有则 0。', '[73,74,75,71,69,72,76,73] -> [1,1,4,2,1,1,0,0]。', '单调栈保存尚未找到答案的下标，而不是温度值。')
  '2026-10-06/02-javascript.js' = @('函数 fn 与任意参数列表。', '相同缓存键复用结果的函数，并暴露 cache.clear()。', 'memoize((a,b)=>a+b)(1,2) 连续两次 -> fn 只执行一次并都返回 3。', '对象参数按引用还是序列化需说明；undefined 与参数个数不能混淆。')
  '2026-10-06/03-browser-network.md' = @('请求的 URL、method、body、headers 与用户身份。', '稳定且不会错误串用数据的缓存 key 设计。', 'GET /profile 对 userA 和 userB 必须生成不同 key；POST 搜索 body 不同也不能共用缓存。', '对象 body 要稳定序列化；Authorization/token 不宜直接明文写入日志。')
  '2026-10-06/04-engineering.js' = @('query key、fetcher、ttl、invalidate/refresh 操作。', '缓存值或进行中 Promise；支持过期、请求去重和强制刷新。', '两个组件同时 query("todos") -> 只发一次请求；refresh 后即使未过期也重新获取。', '失败不缓存；刷新期间旧值是否保留要定义；防止过期请求覆盖新值。')

  '2026-10-07/01-algorithm.js' = @('循环整数数组 nums。', '每项右侧循环查找的第一个更大值，没有则 -1。', '[1,2,1] -> [2,-1,2]。', '最多模拟两遍数组；第二遍只结算栈，不重复压入导致无限增长。')
  '2026-10-07/02-javascript.js' = @('Promise 任务函数、limit 与 30 分钟计时。', '独立写出的并发池及 index/running/results 状态说明。', '5 个任务、limit=2 -> 运行峰值为 2，结果仍按原下标排列。', '空任务、同步抛错、reject 后停止领取；不得查看旧实现。')
  '2026-10-07/03-browser-network.md' = @('一个“如何限制多个 Promise 并发”的面试问题。', '2 分钟内说明 Promise、async/await、微任务与 worker/并发池调度的关系。', '调用任务得到 Promise；await 暂停当前 worker，续段进入微任务；完成后 worker 再领取下一个任务。', '并发不是多线程；创建全部 Promise 后再 await 已无法限制启动数量。')
  '2026-10-07/04-engineering.js' = @('一段 while 循环直接调用所有 task() 的伪并发池代码。', '至少三个可通过日志/测试观察到的错误。', '记录 running 峰值会等于 tasks.length；结果下标可能错；reject 后仍有新任务已启动。', '每个问题都配可复现测试，不能只写“逻辑不对”。')

  '2026-10-08/01-algorithm.js' = @('整数数组 nums。', '最长严格递增子序列长度。', '[10,9,2,5,3,7,101,18] -> 4，例如 [2,3,7,101]。', '子序列不要求连续；空数组返回 0；先完成 O(n^2) DP。')
  '2026-10-08/02-javascript.js' = @('对象数组、多个 {key,direction} 排序规则。', '稳定排序后的新数组，空值放最后。', '按 dept asc、salary desc：同部门中工资高者在前；所有规则相同则保持原顺序。', '不修改输入；字符串、数字与 null 的比较规则明确。')
  '2026-10-08/03-browser-network.md' = @('一个状态只供组件自己用、跨一棵子树共享、或跨页面共享的需求。', '选择组件状态、Context 或外部 store，并说明边界与代价。', 'Modal 开关只在当前组件使用 -> 本地 state；主题跨树读取且更新不频繁 -> Context。', '避免所有状态都放全局；Context 高频变化可能扩大渲染范围。')
  '2026-10-08/04-engineering.js' = @('购物车 state 与 add/increment/decrement/remove/toggle/selectAll action。', '纯 reducer 返回的新 state，以及数量、选中和总价派生值。', '商品 A 单价 10 数量 2 且选中 -> subtotal 20；decrement 到 0 时按规则删除或夹到 1。', '未知 action 返回原 state；金额精度和不可变更新。')

  '2026-10-09/01-algorithm.js' = @('字符串 word1、word2。', '通过插入、删除、替换把 word1 变成 word2 的最少操作数。', '"horse" -> "ros" 的编辑距离是 3。', '空字符串与另一字符串的距离是其长度；清楚定义 dp[i][j]。')
  '2026-10-09/02-javascript.js' = @('从左到右执行的函数列表。', '组合函数，前一个输出作为后一个输入。', 'pipe(x=>x+1,x=>x*2)(3) -> 8。', '零个函数返回恒等函数；进阶 Promise 输出需要等待。')
  '2026-10-09/03-browser-network.md' = @('一个嵌套状态对象及一次更新，例如只修改 user.address.city。', '说明浅拷贝影响的层级、风险和正确不可变更新路径。', '{...state,user:{...state.user,address:{...state.user.address,city:"上海"}}} 才不会修改旧 address。', '浅拷贝只复制一层；共享嵌套引用可能让旧 state 被意外改变。')
  '2026-10-09/04-engineering.js' = @('评论树 state 与 add/reply/delete/like action。', '保持原树不变的新评论树。', 'reply(parentId=1,newComment) -> 只克隆从根到父评论的路径，并把回复加入 children。', '找不到 id 返回原状态；删除父评论时子树处理规则要明确。')

  '2026-10-10/01-algorithm.js' = @('字符串 text1、text2。', '最长公共子序列长度。', '"abcde" 与 "ace" -> 3，对应子序列 "ace"。', '子序列可不连续；任一字符串为空返回 0。')
  '2026-10-10/02-javascript.js' = @('数组 items 与返回分组键的 callback。', '按键分组的安全容器。', 'groupBy([1,2,3,4],n=>n%2?"odd":"even") -> {odd:[1,3],even:[2,4]}。', '键可能是 "__proto__"，应使用 Map 或 Object.create(null)。')
  '2026-10-10/03-browser-network.md' = @('旧列表、新列表及每项 key，包含插入、删除和重排。', '解释 key 如何帮助保持节点身份，以及 index key 的错误复用风险。', '在列表头插入新项时，稳定 id key 只新增一个节点；index key 会让后续输入框状态错位。', 'key 只需在同级兄弟中唯一；它不是传给组件的普通 prop。')
  '2026-10-10/04-engineering.js' = @('旧新列表，每项可有 key 与原下标。', '重复 key、缺失 key、疑似 index key 的诊断数组。', 'items=[{key:"a"},{key:"a"},{}] -> 报告 duplicate:a 与 missing:2。', '数字 key 不一定就是 index；需结合 key===index 和列表变化判断“疑似”。')

  '2026-10-11/01-algorithm.js' = @('整数数组 nums。', '最大连续子数组和及其起止下标。', '[-2,1,-3,4,-1,2,1,-5,4] -> {sum:6,start:3,end:6}。', '全负数组不能错误返回 0；并列区间规则需明确。')
  '2026-10-11/02-javascript.js' = @('数组 array 与正整数 size。', '按 size 切分的二维新数组。', 'chunk([1,2,3,4,5],2) -> [[1,2],[3,4],[5]]。', '空数组返回 []；size<=0 或非整数抛 RangeError。')
  '2026-10-11/03-browser-network.md' = @('数据规模、跳页需求和实时变化频率。', '在页码、游标、无限滚动中选择并说明取舍。', '后台表格需跳到第 20 页 -> 页码分页；时间流持续加载且数据会插入 -> 游标分页更稳定。', '无限滚动仍需可访问性、返回位置和加载失败处理。')
  '2026-10-11/04-engineering.js' = @('page、pageSize、total 和请求 loading 状态。', '合法页码、总页数、上一页/下一页可用性和请求参数。', 'page=5,pageSize=10,total=32 -> 总页数 4，当前页应夹到 4。', 'total=0；pageSize 非法；loading 时是否允许再次翻页。')

  '2026-10-12/01-algorithm.js' = @('非负柱高数组 height。', '可接雨水总量，使用双指针且不建辅助数组。', '[4,2,0,3,2,5] -> 9。', '由较小侧最大值确定当前可结算水量；少于 3 项返回 0。')
  '2026-10-12/02-javascript.js' = @('数组 items 与属性名或 selector。', '按键去重且保留第一次出现顺序的新数组。', 'uniqBy([{id:1,v:"a"},{id:1,v:"b"},{id:2}],"id") -> 保留第一项 id=1 和 id=2。', '键为 undefined 也算同一组；不修改输入。')
  '2026-10-12/03-browser-network.md' = @('一次点赞请求及成功/失败、重复点击场景。', '先更新 UI、失败回滚的状态流程和防重复策略。', '数量 10，点击后立即显示 11；接口失败恢复 10 并提示。', '回滚必须基于该次操作前状态；并发操作要用操作 id 防止旧响应覆盖。')
  '2026-10-12/04-engineering.js' = @('当前 liked/count 与快速点击产生的目标状态和请求。', '立即反馈、失败回滚；最后一次意图决定最终状态。', '未点赞连续点两次，最终意图为未点赞；即使第一次响应晚到也不能把状态改回已点赞。', '禁用连点或合并意图二选一并写清；错误只回滚对应操作。')

  '2026-10-13/01-algorithm.js' = @('信封数组 envelopes，每项 [width,height]。', '最多能嵌套的信封数量。', '[[5,4],[6,4],[6,7],[2,3]] -> 3，对应 [2,3]->[5,4]->[6,7]。', '宽度相同时高度逆序，防止相同宽度被 LIS 错选。')
  '2026-10-13/02-javascript.js' = @('源对象 object 与属性键列表 keys。', 'pick 返回只含 keys 的新对象；omit 返回排除 keys 的新对象。', 'pick({a:1,b:2},["a"]) -> {a:1}；omit 同输入 -> {b:2}。', '只处理自有可枚举属性；特殊键和 Symbol 是否支持要明确。')
  '2026-10-13/03-browser-network.md' = @('一个表单字段、默认值、校验与提交需求。', '选择受控/非受控方案并比较数据来源、渲染和校验。', '需要实时显示密码强度 -> 受控输入；简单文件 input 通常使用非受控并通过 ref 读取。', '不要把“非受控”等同于无法校验；大表单需关注更新范围。')
  '2026-10-13/04-engineering.js' = @('字段 schema、当前 values 与依赖/校验规则。', '可见字段、errors、重置值和最终提交对象。', 'country="CN" 时显示 province；改为 US 后隐藏并按规则清除 province。', '依赖循环、隐藏字段提交策略、默认值和不可变更新。')

  '2026-10-14/01-algorithm.js' = @('weights、values 与背包容量 capacity，每件物品最多一次。', '不超过容量的最大总价值。', 'weights=[1,3,4], values=[15,20,30], capacity=4 -> 35。', '一维 DP 必须倒序遍历容量，防止同件物品被重复使用。')
  '2026-10-14/02-javascript.js' = @('员工数组，含 department、salary 和原顺序。', '按部门分组，每组工资降序且相同工资保持稳定。', 'A 部门工资 [10(id1),20(id2),20(id3)] -> [id2,id3,id1]。', '空部门/空值规则明确；groupBy 安全键；不修改输入。')
  '2026-10-14/03-browser-network.md' = @('关键词 search、筛选 filter、页码 page 与请求状态。', '状态图及每个事件后的 page 重置规则。', '用户在 page=4 修改 search -> page 重置为 1 后请求新条件；仅翻页不清空筛选。', '防抖搜索的旧请求不能覆盖新状态；URL 同步要避免循环更新。')
  '2026-10-14/04-engineering.js' = @('本周任选一算法题和一手写题、45 分钟计时。', '两份独立实现、各自测试与复杂度/边界说明。', '选择最大子数组和与 chunk；分别测试全负数组、非法 size。', '不看旧代码；先分配时间，超时保留卡点。')

  '2026-10-15/01-algorithm.js' = @('二叉树 root；或 serialize 产生的字符串/数组数据。', '可逆编码，以及 deserialize 后结构和值相同的树。', '层序树 [1,2,3,null,null,4,5] 序列化含 null 标记，再反序列化得到同结构。', '空树；负数；尾部 null 是否裁剪必须与解码规则一致。')
  '2026-10-15/02-javascript.js' = @('对象 object、路径字符串如 a.b[0].c 与 defaultValue。', '路径存在时的值；任何一段缺失时返回默认值。', 'get({a:{b:[{c:3}]}},"a.b[0].c",0) -> 3；缺失路径 -> 0。', '值为 0/false/null 时不能误判为缺失；路径解析要限制范围。')
  '2026-10-15/03-browser-network.md' = @('旧虚拟节点、新虚拟节点与稳定 key。', '说明如何找到最小必要更新、key 如何帮助匹配及批量提交。', '同 key 文本从 A 变 B -> 更新文本；列表仅交换顺序时复用节点并移动，不应全部重建。', '这是一道概念题，不声称实现完整框架；真实算法还有组件边界和调度。')
  '2026-10-15/04-engineering.js' = @('根 DOM 节点 root 与其后代 target；或一条子下标路径。', 'root 到 target 的下标数组，以及由该数组反查到同一节点。', 'target 是 root.children[1].children[0] -> path=[1,0]；resolve(root,[1,0])===target。', 'target 不在 root 下时返回 null/错误；路径下标越界安全失败。')

  '2026-10-16/01-algorithm.js' = @('二叉树根节点 root。', '从上到下看到的每层最右节点值数组。', '树 [1,2,3,null,5,null,4] -> [1,3,4]。', '空树返回 []；层序时取每层最后一个实际节点。')
  '2026-10-16/02-javascript.js' = @('原对象、路径 a.b[0].c 与待设置 value。', '不可变更新后的新对象，路径不存在时创建对应对象/数组。', 'set({},"a.b[0].c",3) -> {a:{b:[{c:3}]}}。', '原对象不变；数字下标创建数组；未修改分支可复用引用。')
  '2026-10-16/03-browser-network.md' = @('观察目标节点、childList/attributes/subtree 配置和 DOM 变更。', 'MutationRecord 批次、回调时机和 disconnect 清理说明。', '观察 attributes 后 element.setAttribute("data-x","1")，同步代码结束后的微任务检查点收到 attributes 记录。', '配置必须至少启用一种观察；回调可能合并多次变更；销毁时 disconnect。')
  '2026-10-16/04-engineering.js' = @('MutationRecord 列表和节点标识生成器。', '可序列化的 add/remove/attribute 记录，不直接保存 DOM 引用。', '属性变化 -> {type:"attribute",nodeId:"n1",name:"class",oldValue:"a",newValue:"b"}。', '文本、循环引用和不可序列化对象要规范化；限制批次大小。')

  '2026-10-17/01-algorithm.js' = @('insert/search/startsWith 的字符串操作序列。', 'search 判断完整单词，startsWith 判断前缀。', 'insert("apple") 后 search("apple")->true、search("app")->false、startsWith("app")->true。', '空字符串规则要定义；节点需区分“路径存在”和“单词结束”。')
  '2026-10-17/02-javascript.js' = @('模板字符串与只读数据对象。', '替换 {{ path }} 后的字符串；缺失路径替换为空串。', 'render("Hi {{ user.name }}!",{user:{name:"Ada"}}) -> "Hi Ada!"。', '只解析安全属性路径，不能 eval；原型链危险键要拒绝。')
  '2026-10-17/03-browser-network.md' = @('待复制文本、HTTPS 页面、clipboard 权限和降级能力。', '成功/失败结果及使用 Clipboard API 或降级方案的流程。', 'await navigator.clipboard.writeText("订单号") 成功后显示提示；拒绝权限时选择文本并提示用户手动复制。', '非安全上下文 API 可能不可用；不能把敏感数据写日志。')
  '2026-10-17/04-engineering.js' = @('复制函数、文本、提示持续时间和连续点击。', 'idle/success/error 提示状态；新点击替换旧提示定时器。', '首次复制成功显示“已复制”，1s 内再次点击后重新计时，不让首次定时器提前清除新提示。', '失败提示也需恢复；销毁时清理定时器。')

  '2026-10-18/01-algorithm.js' = @('字符网格 board 与目标单词 word。', '能否通过上下左右相邻且不重复使用单元格拼出 word。', 'board=[["A","B"],["C","D"]], word="ABD" -> true。', '同一格在一条路径中不可复用；回溯后恢复访问状态。')
  '2026-10-18/02-javascript.js' = @('受限模板文本、数据和允许的变量/条件语法。', '安全渲染字符串，不执行任意 JavaScript。', '模板 "{{#if vip}}VIP {{name}}{{/if}}" 与 {vip:true,name:"Ada"} -> "VIP Ada"。', '缺失变量、嵌套条件和 HTML 转义规则要明确；禁止 eval/new Function。')
  '2026-10-18/03-browser-network.md' = @('一个需要样式隔离、可复用插槽的自定义组件。', '说明 Custom Elements、Shadow DOM、slot 各自职责。', '<user-card><span slot="name">Ada</span></user-card>：自定义元素管生命周期，Shadow DOM 隔离内部，slot 接收外部内容。', 'Shadow DOM 不是安全边界；可访问性和表单关联仍需额外处理。')
  '2026-10-18/04-engineering.js' = @('tabs 列表、activeId、disabled 和 ArrowLeft/Right/Home/End 键。', '新的激活项、焦点项与 aria-selected/tabindex 属性。', '当前 tab A，B disabled，按右键 -> 跳到 C；C aria-selected=true、tabindex=0。', '首尾循环、全部禁用、受控模式只发事件不私自改值。')

  '2026-10-19/01-algorithm.js' = @('数组 nums 与窗口大小 k。', '每个长度 k 窗口的最大值数组，目标 O(n)。', 'nums=[1,3,-1,-3,5,3,6,7], k=3 -> [3,3,5,5,6,7]。', '单调队列保存下标；移除过期下标和被新值支配的尾部。')
  '2026-10-19/02-javascript.js' = @('字符串、嵌套数组和 {className:boolean} 对象的任意组合。', '以单空格连接的 class 字符串，忽略 falsy。', 'classnames("btn",["large",null],{active:true,disabled:false}) -> "btn large active"。', '数组可嵌套；数字 0 是否忽略需与题目规则一致；不展开对象原型属性。')
  '2026-10-19/03-browser-network.md' = @('某个会因容器布局变化而变宽的元素。', '选择 ResizeObserver 的原因和尺寸变化处理流程。', '侧栏展开导致 card 宽度改变但 window 未 resize；ResizeObserver 仍能通知 card 的 contentRect。', '回调中反复改尺寸可能形成循环；组件销毁要 disconnect。')
  '2026-10-19/04-engineering.js' = @('容器宽度、最小卡片宽、gap 和 resize 事件。', '列数与卡片布局状态，尺寸更新经过防抖。', 'width=650,min=200,gap=16 -> floor((650+16)/(200+16))=3 列。', '初始宽度 0、最少 1 列、快速 resize 和销毁清理。')

  '2026-10-20/01-algorithm.js' = @('形如 k[encoded] 的字符串 s，支持嵌套与多位次数。', '完全展开后的字符串。', '"3[a2[c]]" -> "accaccacc"；"12[a]" 产生 12 个 a。', '数字可能多位；栈需保存外层字符串和次数；括号必须匹配。')
  '2026-10-20/02-javascript.js' = @('不可信文本字符串。', '把 & < > " 和 单引号替换为 HTML 实体的安全文本。', 'escapeHtml("<img title=\"x\">") -> "&lt;img title=&quot;x&quot;&gt;"。', '& 必须先转义避免二次处理；这只适合 HTML 文本上下文，不等于完整 XSS 防护。')
  '2026-10-20/03-browser-network.md' = @('一个页面要加载自家脚本和带 nonce 的内联脚本。', '一条 CSP 策略及 nonce/hash 如何允许特定脚本。', 'script-src self nonce-abc 只允许同源和 nonce="abc" 的脚本，阻止其他内联脚本。', 'nonce 每次响应应随机；CSP 是纵深防御，不能替代转义和输入处理。')
  '2026-10-20/04-engineering.js' = @('用户提供的 HTML 和允许标签/属性白名单。', '移除危险节点/属性后的预览 HTML 与风险说明。', '<p onclick="steal()">Hi<script>x()</script></p> -> <p>Hi</p>。', '生产使用成熟 sanitizer；URL 协议、style、SVG 等都有额外风险。')

  '2026-10-21/01-algorithm.js' = @('含静态段和 :param 动态段的路由路径数组，以及待匹配 URL。', '路由树与匹配结果 params。', '路由 /user/:id/profile 匹配 /user/42/profile -> params={id:"42"}。', '静态段通常优先于动态段；URL 解码、尾斜杠和多个动态段。')
  '2026-10-21/02-javascript.js' = @('eventName、listener 与 emit 参数。', 'on/once/off 行为；emit 同步转发参数。', 'once("ready",fn) 后 emit("ready",1,2) 调用 fn(1,2)，第二次 emit 不再调用。', 'emit 中 off 不破坏本轮快照；空事件集合及时删除。')
  '2026-10-21/03-browser-network.md' = @('嵌套菜单 DOM 和一次来自图标/文字子元素的 click。', '使用 closest 找菜单项，并排除容器外或不可操作项。', '点击 button[data-id="x"] 内 svg 时 closest 得到 button，读取 x；点击菜单空白不处理。', 'closest 可能越过预期容器，必须 contains 校验；disabled 项忽略。')
  '2026-10-21/04-engineering.js' = @('通知 add/remove、自动消失毫秒和最大条数。', '通知数组；支持手动关闭、定时关闭和超量淘汰。', 'max=3 时加入第 4 条 -> 淘汰最旧；手动关闭后清理它的自动消失定时器。', '同 id、连续加入、销毁清理和旧定时器不能删除新通知。')

  '2026-10-22/01-algorithm.js' = @('由 0/1 组成的网格。', '所有岛屿中的最大面积；没有陆地返回 0。', '[[1,1,0],[1,0,0],[0,1,1]] -> 3。', '边界检查；是否修改网格；DFS 深度过大时可改 BFS。')
  '2026-10-22/02-javascript.js' = @('查询参数对象及 null/undefined、数组的编码规则。', '编码后的查询字符串。', '{tag:["js","ts"],empty:null,skip:undefined} -> "tag=js&tag=ts&empty="，undefined 被忽略。', '键和值都需 encodeURIComponent；空数组、空键和属性顺序规则。')
  '2026-10-22/03-browser-network.md' = @('Web 登录需求，包括凭证保存、续期和跨站攻击风险。', 'Cookie Session、JWT/刷新令牌的流程对比和安全选择。', 'HttpOnly+Secure+SameSite Cookie 可降低 token 被 JS 读取风险，但状态变更请求仍考虑 CSRF。', 'localStorage 中 bearer token 暴露给 XSS；刷新令牌需轮换和撤销策略。')
  '2026-10-22/04-engineering.js' = @('多个同时收到 401 的请求和 refreshToken 函数。', '只执行一次刷新；等待者在成功后重放，失败时统一退出登录。', 'A/B/C 同时 401 -> refresh 调用 1 次，成功后依次用新 token 重放三请求。', '刷新请求自身 401 不能再次刷新；重放次数要限制。')

  '2026-10-23/01-algorithm.js' = @('网格中 0 空格、1 新鲜橘子、2 腐烂橘子。', '全部腐烂的最少分钟；不可能返回 -1。', '[[2,1,1],[1,1,0],[0,1,1]] -> 4。', '所有初始腐烂点同时作为 BFS 起点；没有新鲜橘子返回 0。')
  '2026-10-23/02-javascript.js' = @('请求配置、响应值及按顺序注册的异步拦截器。', 'request 拦截器正序处理、response 拦截器逆序处理后的结果。', '注册 A 再 B：请求经过 A->B；响应经过 B->A。', '拦截器 throw/reject 要进入错误链；支持 eject。')
  '2026-10-23/03-browser-network.md' = @('浏览器连接 https://example.com 与服务端证书。', '说明证书校验、密钥协商、内容加密分别解决身份和机密性问题。', '浏览器验证证书域名和信任链，再协商会话密钥，用对称加密保护后续 HTTP 数据。', 'HTTPS 不保证网站业务可信；证书过期/域名不匹配应阻断。')
  '2026-10-23/04-engineering.js' = @('baseURL、path、options、timeout、requestId 和 AbortSignal。', '统一成功数据或结构化错误，支持取消与响应解析。', 'get("/users") -> 请求 baseURL+/users，响应 404 -> {type:"HTTP",status:404,requestId}。', '204 无 JSON、超时/主动取消区分、路径拼接和敏感头脱敏。')

  '2026-10-24/01-algorithm.js' = @('deadends 字符串数组和 target 四位密码。', '从 0000 到 target 的最少旋转次数；不可达返回 -1。', 'deadends=[], target="0001" -> 1；target="0000" -> 0。', '起点在死亡集合时立即 -1；BFS 访问去重。')
  '2026-10-24/02-javascript.js' = @('中间件函数列表和最终 context。', '按洋葱模型进入与退出的执行顺序。', 'A 前、await next、A 后；B 同理 -> 顺序 A前、B前、B后、A后。', 'next 不能重复调用；同步/异步错误都要传播。')
  '2026-10-24/03-browser-network.md' = @('一条含 password、token、手机号、身份证和普通字段的日志。', '字段级删除/掩码/哈希规则及处理后的日志。', '{phone:"13800138000",token:"abc"} -> {phone:"138****8000",token:"[REDACTED]"}。', '嵌套字段、大小写变体、URL 查询参数和错误堆栈也可能泄密。')
  '2026-10-24/04-engineering.js' = @('任意嵌套日志对象、敏感键集合和 maxDepth。', '递归脱敏后的新对象；循环或超深处安全占位。', '对象 self 指向自身 -> 输出 self:"[Circular]"；password -> "[REDACTED]"。', '不修改输入；数组、Error、Date 处理规则；限制输出大小。')

  '2026-10-25/01-algorithm.js' = @('enqueue/dequeue/peek/empty 操作序列。', '符合 FIFO 的队头值和空状态，使用两个栈。', 'enqueue(1),enqueue(2),peek()->1,dequeue()->1,empty()->false。', '输出栈为空时才批量倒入；空队列操作规则明确。')
  '2026-10-25/02-javascript.js' = @('actual、expected 和可选错误消息。', '相等时无返回/true；不等时抛含可读差异的 AssertionError。', 'equal(1,2) 报 expected 2 but received 1；deepEqual({a:[1]},{a:[1]}) 通过。', 'NaN、+0/-0、循环引用和支持类型范围要明确。')
  '2026-10-25/03-browser-network.md' = @('一个待测试函数和若干正常/边界场景。', '按 Arrange-Act-Assert 组织、可重复且关注行为的测试。', '测试 removeTodo：Arrange 两项；Act 删除 id=1；Assert 新数组只剩 id=2 且原数组不变。', '避免依赖时间、网络和内部私有变量；每个失败应指向单一行为。')
  '2026-10-25/04-engineering.js' = @('Todo reducer、初始 state 与 action。', '覆盖新增、删除、切换、空列表、未知 action 的断言。', 'reducer([], {type:"add",todo:{id:1}}) -> [{id:1}]，并断言原 state 未改变。', '重复 id、找不到 id 和未知 action 应有明确行为。')

  '2026-10-26/01-algorithm.js' = @('push/pop/top/getMin 操作序列。', '所有操作 O(1) 的栈查询结果。', 'push(2),push(1),push(1),pop(),getMin()->1，重复最小值仍保留。', '空栈行为；辅助最小栈与主栈同步。')
  '2026-10-26/02-javascript.js' = @('待测逻辑与注入的 now/setTimeout/clearTimeout 接口。', '可手动推进时间并确定执行顺序的 fake timer 设计。', 'schedule(fn,100)，advanceBy(99) 不执行，advanceBy(1) 执行一次。', '相同触发时间顺序、取消、回调中新建 timer 和无限循环保护。')
  '2026-10-26/03-browser-network.md' = @('一次提交及 lint/test/build/preview/production 阶段。', '推荐流水线顺序与每阶段失败是否阻断。', 'lint 失败立即停止；test 通过后 build；preview 验证产物后才 production。', '并行化不能破坏依赖；密钥和环境配置按阶段隔离。')
  '2026-10-26/04-engineering.js' = @('格式化、类型检查、测试三个命令执行器。', '每步状态、合并结果和失败时阻断提交。', 'format 成功、typecheck 失败 -> 不运行后续提交，并输出失败命令与摘要。', '进程退出码、超时、输出截断和跨平台命令。')

  '2026-10-27/01-algorithm.js' = @('m x n 矩阵 matrix。', '若某元素为 0，则其整行整列置 0；原地完成且额外空间 O(1)。', '[[1,1,1],[1,0,1],[1,1,1]] -> [[1,0,1],[0,0,0],[1,0,1]]。', '首行首列需要独立标记，避免标记阶段丢失原始信息。')
  '2026-10-27/02-javascript.js' = @('可能含嵌套和循环引用的对象 value。', '递归 Object.freeze 后的同一对象引用。', 'obj={child:{x:1}}，deepFreeze(obj) 后 Object.isFrozen(obj) 和 child 都为 true。', '用 WeakSet 防循环；函数/数组是否递归；它不创建副本。')
  '2026-10-27/03-browser-network.md' = @('构建时环境变量与浏览器打包后的客户端代码。', '说明何时注入、谁能看到及哪些值绝不能放入。', 'PUBLIC_API_BASE 可进入客户端包；数据库密码即使叫 SECRET 也不能打进前端，因为用户可查看 bundle。', '不同工具暴露前缀不同；不要把变量名当安全边界。')
  '2026-10-27/04-engineering.js' = @('default、environment、runtime 三层配置和必填 schema。', '按优先级合并且校验后的配置，或可读错误列表。', 'default.api=/api，environment.api=/staging，runtime 未给 -> 最终 /staging。', '只合并允许字段；类型错误、空必填值和秘密字段不能泄露。')

  '2026-10-28/01-algorithm.js' = @('滑动窗口最大值或腐烂橘子原题与 25 分钟计时。', '独立实现、通过测试、复杂度和状态说明。', '选滑动窗口最大值：[1,3,-1,-3,5], k=3 -> [3,3,5]。', '不得看旧代码；超时保留当前实现和具体卡点。')
  '2026-10-28/02-javascript.js' = @('retry 或查询字符串 stringify 原题与 25 分钟计时。', '独立实现、至少三个边界测试。', '选 stringify：{tag:["js","ts"],empty:null} -> "tag=js&tag=ts&empty="。', '编码、undefined、空数组；不得复制旧实现。')
  '2026-10-28/03-browser-network.md' = @('缓存、CORS、HTTPS 三题中任选一题及 3 分钟计时。', '结构化口述：定义、流程、边界、真实例子。', '选 CORS：先说明同源策略，再讲简单/预检、响应头、credentials，最后举 JSON POST 例子。', '术语要准确；控制在 3 分钟；不知道处明确标注。')
  '2026-10-28/04-engineering.js' = @('“401 后无限刷新 token”的代码、日志和请求序列。', '复现、根因、修复与回归测试报告。', '刷新接口自身也被 401 拦截器再次刷新 -> 无限循环；修复为跳过 refresh URL 并限制每请求重放一次。', '同时 401 的单飞刷新、刷新失败退出和旧 token 请求。')

  '2026-10-29/01-algorithm.js' = @('有序且互不重叠的 intervals 与 newInterval。', '插入并合并后的有序区间数组。', '[[1,3],[6,9]] 插入 [2,5] -> [[1,5],[6,9]]。', '新区间在最前/最后；覆盖多个区间；不修改输入。')
  '2026-10-29/02-javascript.js' = @('任意 value 和一个长期稳定的 ref 对象。', '每次 update 后 ref.current 保存最新值，读取函数始终看到最新值。', 'ref.current 从 1 更新为 2；旧闭包读取 ref.current 时得到 2，而不是捕获的 1。', '这是框架无关模型；更新对象引用本身会失去稳定性。')
  '2026-10-29/03-browser-network.md' = @('快速输入、慢接口、大结果列表和重复查询场景。', '防抖、取消、缓存、虚拟列表的协作流程。', '输入 react 后 300ms 才请求；新输入 vue 取消 react；命中 vue 缓存不发请求；仅渲染可视行。', '缓存 key、过期、旧响应和空关键词都需定义。')
  '2026-10-29/04-engineering.js' = @('关键词、page、fetcher、缓存和取消信号。', '去重后的分页结果及 loading/error/hasMore 状态。', 'search("js") page1 返回 id1,id2，page2 返回 id2,id3 -> 合并为 id1,id2,id3。', '关键词变化重置分页；旧请求不落状态；失败重试不能重复追加。')

  '2026-10-30/01-algorithm.js' = @('两个只含数字和点号的超长版本字符串。', 'version1 大返回 1，小返回 -1，等价返回 0。', '"1.0000000000000000002" 与 "1.2" -> 0；"1.10" 与 "1.2" -> 1。', '不用 BigInt；去前导零后先比有效长度，再比字典序；缺失段按 0。')
  '2026-10-30/02-javascript.js' = @('两个原始值、数组、普通对象或 Date，可含循环引用。', '在支持范围内深度相等的布尔值。', 'a={};a.self=a，b={};b.self=b -> true；两个 Date 时间戳相同 -> true。', '用成对引用缓存防循环；键数量、数组顺序和 NaN 规则。')
  '2026-10-30/03-browser-network.md' = @('一个有列表、搜索、编辑和请求的中等页面需求。', 'API、状态、组件、工具、测试五层职责与依赖方向。', 'API 层只请求；状态层处理竞态；组件渲染；工具做纯转换；测试分别覆盖 reducer 和请求边界。', '避免组件直接散落 fetch；也不要为小页面过度分层。')
  '2026-10-30/04-engineering.js' = @('一个同时请求、格式化数据、切换 loading、拼接 UI 文案的函数。', '副作用协调层、纯格式化函数、状态转换及测试点。', 'formatUsers(response) 独立纯函数；loadUsers 只编排 api 与状态，测试可分别注入假 api。', '错误/finally、取消、旧响应和纯函数不修改输入。')

  '2026-10-31/01-algorithm.js' = @('从滑动窗口、树、图、DP 题库抽出的四题，任选两题各 30 分钟。', '两份独立实现、测试、复杂度和时间记录。', '选最短子数组与课程表：分别测试无解返回 0、课程依赖成环返回 false。', '随机抽题后不得换简单题；超时保留卡点。')
  '2026-10-31/02-javascript.js' = @('Promise 并发池或深拷贝题目与 30 分钟计时。', '独立实现、边界测试和复杂度/状态解释。', '选并发池：3 个任务 limit=2，断言峰值<=2、结果顺序、reject 停止领取。', '不看旧代码；同步抛错、空任务或循环引用等关键边界。')
  '2026-10-31/03-browser-network.md' = @('一次真实或训练中的性能/请求异常经历。', '按 STAR 给出 Situation、Task、Action、Result 的完整叙述。', 'S：列表卡顿；T：定位并降到可交互；A：录制性能、发现全量渲染、改虚拟列表；R：长任务由 120ms 降到 30ms。', '结果尽量量化；不能只说“用了优化技术”而缺少定位证据。')
  '2026-10-31/04-engineering.js' = @('本月代码、测试和能力评估证据。', '已稳定/仍需加强/下月目标各三项，并为薄弱点配验证题。', '薄弱点“异步竞态” -> 下月变式：两个可控 Promise 逆序完成，断言只写入最新结果。', '每项必须引用证据；不要把“做过”直接写成“已掌握”。')
}

function Add-ExampleBlock {
  param(
    [string]$RelativePath,
    [string[]]$Details
  )

  $nativeRelativePath = $RelativePath.Replace('/', [IO.Path]::DirectorySeparatorChar)
  $path = Join-Path $daysRoot $nativeRelativePath
  if (-not (Test-Path -LiteralPath $path)) {
    throw "找不到练习文件：$path"
  }

  $content = [IO.File]::ReadAllText($path)
  if ($content.Contains('中文解释（已给出）')) {
    return
  }

  if ([IO.Path]::GetExtension($path) -eq '.js') {
    $match = [regex]::Match($content, '(?m)^ \* 题目要求：.+$')
    if (-not $match.Success) {
      throw "找不到 JavaScript 题目要求锚点：$path"
    }
    $requirement = $match.Value.Substring(' * 题目要求：'.Length)
    $block = @(
      $match.Value
      ' *'
      " * 中文解释（已给出）：这道题要你完成：$requirement"
      " * 输入：$($Details[0])"
      " * 输出：$($Details[1])"
      " * 具体例子：$($Details[2])"
      " * 关键边界：$($Details[3])"
    ) -join "`n"
    $updated = $content.Replace($match.Value, $block)
    $updated = $updated.Replace(' * 编码前请用中文补充：', ' * 编码前请先复述并画出关键状态：')
  }
  else {
    $match = [regex]::Match($content, '(?ms)(## 题目要求\r?\n\r?\n)([^\r\n]+)')
    if (-not $match.Success) {
      throw "找不到 Markdown 题目要求锚点：$path"
    }
    $requirement = $match.Groups[2].Value
    $block = @(
      $match.Value
      ''
      '## 中文解释（已给出）'
      ''
      "- 意思：这道题要你分析或完成：$requirement"
      "- 输入/场景：$($Details[0])"
      "- 输出/作答：$($Details[1])"
      "- 具体例子：$($Details[2])"
      "- 关键边界：$($Details[3])"
    ) -join "`n"
    $updated = $content.Replace($match.Value, $block)
  }

  [IO.File]::WriteAllText($path, $updated, [Text.UTF8Encoding]::new($false))
}

foreach ($entry in $examples.GetEnumerator()) {
  Add-ExampleBlock -RelativePath $entry.Key -Details $entry.Value
}

$oldDailyInstruction = '- 每题先用中文注释写清：输入输出、核心状态或数据结构、至少一个边界。'
$newDailyInstruction = '- 每个题目文件已直接给出中文题意、输入、输出、具体例子和关键边界；编码前先用自己的话复述并画状态变化。'
Get-ChildItem -LiteralPath $daysRoot -Recurse -Filter 'questions.md' | ForEach-Object {
  $content = [IO.File]::ReadAllText($_.FullName)
  if ($content.Contains($oldDailyInstruction)) {
    $updated = $content.Replace($oldDailyInstruction, $newDailyInstruction).Replace("`r`n", "`n").Replace("`r", "`n")
    [IO.File]::WriteAllText($_.FullName, $updated, [Text.UTF8Encoding]::new($false))
  }
}

# 这些排期文件原本使用 LF；统一行尾，避免插入块造成混合换行。
foreach ($entry in $examples.GetEnumerator()) {
  $nativeRelativePath = $entry.Key.Replace('/', [IO.Path]::DirectorySeparatorChar)
  $path = Join-Path $daysRoot $nativeRelativePath
  $content = [IO.File]::ReadAllText($path)
  $content = $content.Replace(' * 请补充：输入、输出、核心状态、边界与复杂度。', ' * 编码前请先复述以上输入输出，再补充核心状态与复杂度。')
  $content = $content.Replace(' * 1. 输入与输出是什么？', ' * 1. 用自己的话复述上面的输入与输出。')
  $content = $content.Replace("`r`n", "`n").Replace("`r", "`n")
  [IO.File]::WriteAllText($path, $content, [Text.UTF8Encoding]::new($false))
}

Write-Output "已为 $($examples.Count) 个练习模块补充中文解释、输入、输出、例子和边界。"
