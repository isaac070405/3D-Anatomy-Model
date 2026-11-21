// Simplified Chinese (简体中文) interface text. With the Chinese button on, this replaces English interface text with Chinese.
// Structure names stay English with the Chinese name beside them (zh-hant.js). Add or fix a line below: "English|中文".
// worksheet.txt in this folder is the list these lines came from.
(function () {
  const TEXT = `
1. Brain and spine views|1. 脑与脊柱视图
2. Head: eye, ear, nose, mouth, skull|2. 头部：眼、耳、鼻、口、颅骨
3. Neck|3. 颈部
4. Thoracic and abdominal cavity|4. 胸腔和腹腔
5. Upper limb|5. 上肢
6. Lower limb|6. 下肢
Transverse plane|横切面（水平面）
Coronal plane|冠状面（额状面）
Sagittal plane|矢状面
Limbs|四肢
Depth|深度
Nerve signals|神经信号
splits top from bottom|将身体分为上下
splits front from back|将身体分为前后
splits right from left|将身体分为左右
Hide private parts|隐藏私密部位
Before you begin|开始之前
This atlas shows the whole body, including the external genitalia and the breast. Choose whether to show these regions.|本图谱显示整个身体，包括外生殖器和乳房。请选择是否显示这些部位。
Treated as private parts:|视为私密部位：
The external genitalia (penis and scrotum, or vulva) and the buttocks.|外生殖器（阴茎和阴囊，或外阴）以及臀部。
The female breast, including nipple and areola. The male chest is not treated as private.|女性乳房，包括乳头和乳晕。男性胸部不视为私密部位。
Hidden regions are covered by a neutral swimwear shape. The internal organs, such as the uterus, ovaries and prostate, stay available.|被隐藏的部位会以中性的泳装形状遮盖。子宫、卵巢和前列腺等内部器官仍可查看。
Show everything|显示全部
You can change this later under Body.|之后可在「身体」区段更改。
Blue|蓝色
vein, carries deoxygenated blood.|静脉，携带缺氧血。
Red|红色
artery, carries oxygenated blood.|动脉，携带含氧血。
Purple|紫色
special case: pulmonary artery and vein, and the umbilical vessels. Their oxygen content is the reverse of the usual rule.|特殊情况：肺动脉和肺静脉，以及脐带血管。其含氧情况与一般规则相反。
Distal|远端
Proximal|近端
Afferent (toward CNS)|传入（朝向中枢神经系统）
Efferent (away from CNS)|传出（离开中枢神经系统）
Median (sagittal) plane|正中（矢状）面
toward a centre, such as sensory nerves to the CNS.|朝向中枢，例如感觉神经传向中枢神经系统。
away from it, such as motor nerves.|离开中枢，例如运动神经。
Vessel colour key|血管颜色说明
Afferent|传入（向心）
All digestive|全部消化系统
Anatomical directions|解剖学方位
Anatomy by system, group and part|按系统、组别及部位划分的解剖结构
Anatomy mode|解剖模式
Anatomy, exploded|解剖分解图
Anterior|前侧
Anterior / Ventral|前侧／腹侧
Anterior up · patient's right on the left|前侧朝上 · 患者右侧在画面左方
Anterior view|前视图
Appendix|阑尾
Artery|动脉
Assemble anatomy|还原解剖结构
Assembled|已组合
Atlas|图谱
Axial brain section|脑部横切面
Axial level|横切面层级
Bladder and pelvis|膀胱与骨盆
Body layers, skin to bone|身体层次，由皮肤至骨骼
Body region|身体区域
Bone|骨骼
Brain and cord|脑与脊髓
Brain axial|脑部横切面
Brain axial series|脑部横切面系列
Breast (female)|乳房（女性）
Breast from the side (female)|乳房侧面（女性）
Breast: glandular|乳房：腺体
Breast: supportive|乳房：支持结构
Breast: surface|乳房：表面
Breast: vessels, nerves, lymph|乳房：血管、神经、淋巴
Bronchi|支气管树
Bronchus|支气管
Browse by system|按系统浏览
Camera views|镜头视角
Center selected structure|置中所选结构
Cervical nodes|颈部淋巴结
Chambers and valves|心腔与瓣膜
Clear|清除
Clear pin|清除标注
Click a colour to select it, drag to move, scroll to zoom|点击颜色以选取，拖曳以移动，卷动以缩放
Click anatomy for names · choose a system below|点击结构查看名称 · 在下方选择系统
Close|关闭
Close brain axial series|关闭脑部横切面系列
Close cross-section|关闭剖面
Close tweaks|关闭调整面板
Coronal|冠状面
Coronary arteries and veins|冠状动脉与静脉
Cortex opacity|皮质不透明度
Cross-section|剖面
Cross-section colour map|剖面颜色图
Cut axis|切割轴向
Cut depth|切割深度
Cut position|切割位置
Deep|深层
Deep neck muscles|深层颈部肌肉
Dissect|解剖
Ear: all|耳：全部
Ear: inner|耳：内耳
Ear: middle|耳：中耳
Ear: outer|耳：外耳
Efferent|传出（离心）
Eight great vessels|八条大血管
Enlarge|放大
Enlarge cross-section|放大剖面
Epidermis, dermis and the fat layer beneath.|表皮、真皮及其下的脂肪层。
Explode anatomy|分解解剖结构
Exploded view|分解图
Exploded view amount|分解程度
Explore|探索
Fat|脂肪
Female|女性
Female reproductive system|女性生殖系统
Fibrous connective tissue (breast)|纤维结缔组织（乳房）
Find a part|寻找部位
Fit|适合窗口
Frontal|额叶
Head & neck|头颈部
Heart cut depth|心脏切割深度
Heart cutaway (open the chambers)|心脏剖开（打开心腔）
Hide selected structure|隐藏所选结构
Human anatomy|人体解剖
Inferior|下侧
Inferior / Caudal|下侧／尾侧
Inferior view|下视图
Insula|脑岛
Keys:|按键：
Kidney|肾脏
Kidney from behind|肾脏后面观
Lateral|外侧
Left|左
Left lateral view|左侧视图
Limbic|边缘叶
Liver, gallbladder, bile duct|肝脏、胆囊、胆管
Lower extremity|下肢
Lung|肺
Lung opacity|肺部不透明度
Lungs and diaphragm|肺与膈
Lymph nodes|淋巴结
Lymphatic system|淋巴系统
Lymphatic vessels|淋巴管
MNI template T1, 1 mm slices|MNI 标准脑模板 T1，1 毫米切片
MRI|磁力共振
Male|男性
Medial|内侧
Menstrual cycle day|月经周期日数
Menstrual cycle, day|月经周期，第
Menstruation|月经期
Menu|菜单
Minimise|最小化
Minimise cross-section|最小化剖面
Muscle|肌肉
Muscles|肌肉
Nasal cavity|鼻腔
Nasopharynx|鼻咽
Neck muscles|颈部肌肉
Neck: organs, vessels, nerves|颈部：器官、血管、神经
Nerve|神经
Nose and mouth|鼻与口
Notes on the model|模型注记
Nothing removed|未移除任何结构
Nothing selected|未选取任何结构
Occipital|枕叶
Oesophagus|食管
Oral cavity with teeth|口腔（连牙齿）
Organs|器官
Oropharynx|口咽
Outermost visible: Skin|最外层可见：皮肤
Ovaries and uterus close-up (female)|卵巢与子宫特写（女性）
Pancreas and pancreatic duct|胰脏与胰管
Panels|面板
Parietal|顶叶
Peel body layers from skin to bone|由皮肤至骨骼逐层剥离身体
Peel layers|剥离层次
Peel layers from skin to bone|由皮肤至骨骼逐层剥离
Peyer's patches|派尔斑
Plate (atlas)|图谱色板
Plate II · Systems of the body|图版二 · 人体系统
Posterior|后侧
Posterior / Dorsal|后侧／背侧
Posterior view|后视图
Presentation|展示
Put all back|全部还原
Renal|肾脏
Rendering|显示方式
Reproductive organs|生殖器官
Reproductive pelvis from the side|生殖系统骨盆侧面
Reset|重置
Right|右
Right lateral view|右侧视图
Sagittal|矢状面
Search|搜索
Search a part|搜索部位
Selected|已选取
Sex of the body|身体性别
Shoulder and arm|肩与上臂
Show Anterior organs|显示前部器官
Show Bones and cartilage|显示骨骼及软骨
Show Capsules and ligaments|显示被膜及韧带
Show Circulatory|显示循环系统
Show Deep muscles|显示深层肌肉
Show Deep nerves and vessels|显示深层神经及血管
Show Deep organs|显示深部器官
Show Deepest muscles|显示最深层肌肉
Show Digestive|显示消化系统
Show Eye and ear|显示眼及耳
Show Intermediate muscles|显示中层肌肉
Show Investing fascia|显示包被筋膜
Show Lymphatic|显示淋巴系统
Show Muscular|显示肌肉系统
Show Nervous|显示神经系统
Show Reproductive|显示生殖系统
Show Reproductive (female and breast)|显示生殖系统（女性及乳房）
Show Respiratory|显示呼吸系统
Show Second muscle group|显示第二肌群
Show Skeletal|显示骨骼系统
Show Skin|显示皮肤
Show Subcutaneous fat|显示皮下脂肪
Show Superficial muscles|显示浅层肌肉
Show Superficial veins|显示浅静脉
Show Thyroid and parathyroid|显示甲状腺及副甲状腺
Show Urinary|显示泌尿系统
Show Visceral coverings|显示内脏被覆
Show all|全部显示
Show all layers|显示所有层次
Show cutting plane in the model|在模型中显示切割平面
Show direction arrows on the body|在身体上显示方向箭头
Show only this system|只显示此系统
Show selected structure only|只显示所选结构
Single alveolar unit|单一肺泡单位
Single tooth|单颗牙齿
Skin opacity|皮肤不透明度
Skin tone|肤色
Skin tone 1, darkest|肤色 1（最深）
Skin tone 2|肤色 2
Skin tone 3|肤色 3
Skin tone 4|肤色 4
Skin tone 5|肤色 5
Skin tone 6, lightest|肤色 6（最浅）
Skull and teeth|颅骨及牙齿
Small intestine|小肠
Spine|脊柱
Spread|展开
Spread parts apart|将各部分分开
Superficial|浅层
Superior|上侧
Superior / Cranial|上侧／头侧
Superior view|上视图
Surface roughness|表面粗糙度
Surrounding anatomy|周围结构
Surrounding anatomy, filled to transparent|周围结构（填充至透明）
Systems|系统
Temporal|颞叶
The airway tubes|气道管道
Tonsils|扁桃体
Tonsils and lymphatic system|扁桃体与淋巴系统
Torso & pelvis|躯干与骨盆
Transverse|横切面
Turntable|旋转展示
Turntable hides the panels and slowly rotates the body.|旋转展示会隐藏面板，并缓慢转动身体。
Tweaks|调整
Undo|复原
Upper extremity|上肢
Vein|静脉
Vulva (external)|外阴（外部）
White background for snapshots|快照使用白色背景
Whole body|全身
X-ray|X 光
Zoom in|放大
Zoom out|缩小
Zoom to a structure when clicked|点击结构时自动放大
a few positional or displacement errors|少量位置或移位错误
away from the midline.|远离中线。
away from the surface.|远离表面。
carried away from it, such as motor nerves.|传离中枢，例如运动神经。
carried toward a centre, such as sensory nerves to the CNS.|传向中枢，例如通向中枢神经系统的感觉神经。
farther from it.|离该处较远。
may exist.|可能存在。
nearer the limb's attachment.|较接近肢体连接处。
of 28:|天，共 28 天：
toward the back.|朝向后方。
toward the feet.|朝向足部。
toward the front.|朝向前方。
toward the head.|朝向头部。
toward the midline.|朝向中线。
toward the surface.|朝向表面。
This model does not exactly reflect the real body arrangement;|此模型未能完全反映真实的人体结构排列；
Veins in the subcutaneous fat: external jugular, facial, forearm veins.|皮下脂肪内的静脉：颈外静脉、面静脉、前臂静脉。
Atlas keeps the plate colours, X-ray shows every system through the others.|图谱模式保留图版颜色，X 光模式让各系统透视显示。
Estrogen and progesterone are low, so the uterine lining sheds through the vagina.|雌激素及黄体酮水平偏低，子宫内膜经阴道脱落。
Skull, spine, ribs, limb bones, teeth, costal cartilage and airway cartilage rings.|颅骨、脊柱、肋骨、四肢骨、牙齿、肋软骨及气道软骨环。
Muscles just under the fascia: trapezius, deltoid, pectoralis major, gluteus maximus.|位于筋膜正下方的肌肉：斜方肌、三角肌、胸大肌、臀大肌。
Click any structure to select it. Its tab can hide it, and Undo brings hidden structures back.|点击任何结构即可选取。其标签可将它隐藏，按「复原」可还原已隐藏的结构。
Deep fascia, aponeuroses, spermatic fasciae, Buck fascia, iliotibial tract, flexor retinaculum.|深筋膜、腱膜、精索筋膜、阴茎深筋膜（巴克筋膜）、髂胫束、屈肌支持带。
Brachialis, serratus anterior, infraspinatus, teres major, piriformis, vastus intermedius, semimembranosus.|肱肌、前锯肌、棘下肌、大圆肌、梨状肌、股中间肌、半膜肌。
Cranial and spinal nerves, spinal cord, plexuses, great arteries, cerebral arteries, sinuses and deep veins.|脑神经及脊神经、脊髓、神经丛、大动脉、脑动脉、静脉窦及深静脉。
Brain, mouth and pharynx, trachea and lungs, oesophagus, pancreas, spleen, bowel, kidneys, prostate, urethra.|脑、口腔及咽、气管及肺、食管、胰脏、脾脏、肠、肾脏、前列腺、尿道。
Cranial sutures, acromioclavicular joint, intervertebral discs, and skeletal, laryngeal and visceral ligaments.|颅缝、肩锁关节、椎间盘，以及骨骼、喉部和内脏的韧带。
Supraspinatus, subscapularis, gluteus minimus, adductor magnus, tibialis posterior, thenar muscles, puborectalis.|棘上肌、肩胛下肌、臀小肌、大收肌、胫骨后肌、大鱼际肌、耻骨直肠肌。
Dura mater, pericardium, pleura, omenta and mesenteries, serosae, renal and prostate capsules, testicular tunics.|硬脑膜、心包、胸膜、网膜及肠系膜、浆膜、肾及前列腺被膜、睾丸鞘膜。
Heart chambers and valves, larynx, liver, gallbladder, stomach, transverse colon, caecum, bladder, testis, penis.|心腔及瓣膜、喉、肝脏、胆囊、胃、横结肠、盲肠、膀胱、睾丸、阴茎。
The body surface, shown as a translucent shell so the systems beneath stay visible. Adjust it with the opacity slider.|身体表面以半透明外壳显示，使下方的系统仍然可见。可用不透明度滑块调整。
Triceps brachii, gluteus medius, vastus lateralis and medialis, adductor longus, soleus, flexor digitorum superficialis.|肱三头肌、臀中肌、股外侧肌及股内侧肌、长收肌、比目鱼肌、指浅屈肌。
Diaphragm, supinator, pronator quadratus, sphincters, trachealis, detrusor, and the wall muscle of stomach and oesophagus.|膈、旋后肌、旋前方肌、括约肌、气管肌、逼尿肌，以及胃和食管的壁肌。
Left and right are the figure's own. Drag to turn, scroll to zoom. Downloads include the systems currently shown, minus removed parts.|左右以人体本身为准。拖曳以转动，卷动以缩放。下载内容包括目前显示的系统，但不含已移除的部分。
Every structure moves away from the midline in proportion to its distance from it, and from front to back as well. Skin and fat stay in place.|每个结构会按其与中线的距离成比例地远离中线，并同时由前向后分开。皮肤及脂肪保持原位。
The reproductive panel supports male and female anatomy. Use the Sex control to switch model variants and view the available reproductive structures.|生殖系统面板支持男性和女性解剖。使用「性别」控制切换模型版本，查看可用的生殖结构。
The female body mesh is not loaded, so the generic body surface is shown with the female reproductive and breast structures. Peel the skin layer to see them.|未加载女性身体网格，因此以通用身体表面配合女性生殖及乳房结构显示。剥离皮肤层即可看到它们。
Supports the body, protects organs and anchors muscle. Bone is shown in ivory and cartilage (discs, costal cartilage, joint surfaces) in blue-grey. Hover any bone to name it.|支撑身体、保护器官并为肌肉提供附着点。骨骼以象牙色显示，软骨（椎间盘、肋软骨、关节面）以蓝灰色显示。将指针移到任何骨骼上即可显示名称。
Space resets the view, H hides the selected part, U undoes, X toggles X-ray, 1 2 3 set the cut to transverse, coronal or sagittal. Double-click a surface to leave a note on it.|空白键重置视角，H 隐藏所选部位，U 复原，X 切换 X 光，1、2、3 分别将切割设为横切面、冠状面或矢状面。双击表面可在其上留下注记。
A simplified model in anatomical position. Search for a part, peel the layers from skin to bone, explode the body into systems, click a structure to isolate it, and cut through the body with the slice view.|以解剖学姿势呈现的简化模型。可搜索部位、由皮肤至骨骼逐层剥离、将身体按系统分解、点击结构以单独显示，并用切面视图剖开身体。
Skeletal muscle produces movement and holds posture, attaching to bone through tendons (white) and aponeuroses. Superficial muscles are the lighter red, deeper layers darker. The arm, forearm, hand, hip, thigh and leg follow anatomical atlas plates.|骨骼肌产生动作并维持姿势，通过肌腱（白色）和腱膜附着于骨骼。浅层肌肉为较浅的红色，深层则较深。上臂、前臂、手、髋、大腿及小腿依据解剖图谱的图版绘制。
The hypodermis: fat and loose connective tissue between the dermis and the deep fascia over muscle. Its depth is set by region, from about 1 mm over the front of the shin and the scalp to 3 cm over the abdomen, buttocks and thighs, with more over the hips, thighs and breasts in the female body. The skin above it is about 2.5 mm thick, up to 6 mm on the back.|皮下组织：位于真皮与肌肉表面深筋膜之间的脂肪和疏松结缔组织。厚度因部位而异，由小腿前面和头皮约 1 毫米，至腹部、臀部和大腿约 3 厘米；女性身体的髋部、大腿和乳房处更厚。其上的皮肤约厚 2.5 毫米，背部可达 6 毫米。
The thyroid gland wraps the front of the trachea below the larynx: two lobes joined by an isthmus over the second to fourth tracheal rings, often with a pyramidal lobe rising toward the hyoid. Four parathyroid glands sit on the back of the lobes. Blood comes from the superior thyroid artery (external carotid) and the inferior thyroid artery (thyrocervical trunk).|甲状腺包绕喉下方气管的前面：两个侧叶由峡部连接，峡部位于第二至第四气管环之上，常有一个锥状叶向舌骨上升。四个副甲状腺位于侧叶后面。血液来自甲状腺上动脉（颈外动脉）及甲状腺下动脉（甲状颈干）。
Senses, integrates and responds. The central nervous system is the brain and spinal cord; cranial and spinal nerves form the peripheral system. The cerebral cortex is coloured by lobe: frontal (green), parietal (yellow), temporal (blue), occipital (pink), limbic (tan) and insula (purple). Use the view buttons for lateral, medial and inferior views of the brain, or the whole spine.|负责感知、整合及作出反应。中枢神经系统包括脑和脊髓；脑神经及脊神经组成周围神经系统。大脑皮质按脑叶着色：额叶（绿）、顶叶（黄）、颞叶（蓝）、枕叶（粉红）、边缘叶（浅褐）及脑岛（紫）。可使用视角按钮查看脑的外侧、内侧和下面观，或整条脊柱。
The heart pumps blood through a closed circuit. Deoxygenated blood (blue) returns through the venae cavae to the right heart and goes to the lungs through the pulmonary trunk (purple). Oxygenated blood (red) returns through the pulmonary veins to the left heart and leaves through the aorta. Use Heart cutaway to open the four chambers and see the valves, chordae and papillary muscles.|心脏推动血液在封闭的循环中流动。缺氧血（蓝色）经腔静脉回流至右心，再经肺动脉干（紫色）送往肺部。含氧血（红色）经肺静脉回流至左心，再经主动脉离开。使用「心脏剖开」可打开四个心腔，查看瓣膜、腱索和乳头肌。
Air passes the larynx, the trachea (C-shaped cartilage rings with a muscular back wall) and the bronchial tree to the alveoli, where gas exchange happens across the thin alveolar wall into the capillaries. The right lung has three lobes and the left two, with a cardiac notch. The diaphragm drives breathing, and a magnified alveolar unit can be shown beside the figure (Heart, lungs and diaphragm panel).|空气经过喉、气管（C 形软骨环，后壁为肌肉）和支气管树到达肺泡，并在肺泡薄壁处与毛细血管进行气体交换。右肺有三叶，左肺有两叶，并有心切迹。膈驱动呼吸，人体旁可显示放大的肺泡单位（心、肺和膈面板）。
The eyeball sits in the orbit, moved by four recti and two obliques that arise around the optic canal; the levator palpebrae superioris lifts the upper lid and the lacrimal gland lies above and lateral. The ear runs from the auricle and external acoustic meatus to the tympanic membrane, the three ossicles in the tympanic cavity, and the cochlea and semicircular canals in the petrous temporal bone. The pharyngotympanic tube links the middle ear to the nasopharynx.|眼球位于眼眶内，由四条直肌和两条斜肌转动，这些肌肉起自视神经管周围；提上睑肌提起上眼睑，泪腺位于其上方及外侧。耳由耳廓和外耳道延伸至鼓膜、鼓室内的三块听小骨，以及颞骨岩部内的耳蜗和半规管。咽鼓管连接中耳与鼻咽。
Female reproductive organs include the ovaries, fallopian tubes, uterus, cervix and vagina, with the vulva externally. Move the menstrual cycle slider (day 1 to 28) to see the lining thicken, a follicle mature, ovulation and the corpus luteum. The breast model has 16 radial lobes, each with a lactiferous duct, a lobule and acini, set in fat and fibrous tissue held by the suspensory ligaments of Cooper, with the nipple-areola complex, axillary tail, lymph nodes, vessels and nerves.|女性生殖器官包括卵巢、输卵管、子宫、子宫颈和阴道，外部为外阴。移动月经周期滑块（第 1 至 28 天），可看到内膜增厚、卵泡成熟、排卵及黄体。乳房模型有 16 个放射状乳腺叶，每叶有一条输乳管、一个小叶和腺泡，位于脂肪和纤维组织中，由库珀悬韧带固定，并包括乳头乳晕复合体、腋尾、淋巴结、血管及神经。
Lymph drains the fluid that leaks from capillaries back to the blood. Lymph nodes (lime) filter it along collecting vessels (pale green) that join into trunks: the jugular, subclavian and bronchomediastinal trunks on each side, and the lumbar and intestinal trunks below. The right lymphatic duct drains the right head, neck, arm and chest into the right venous angle. The thoracic duct, which starts at the cisterna chyli, drains everything else into the left venous angle. The tonsils, spleen, thymus, Peyer's patches and appendix are lymphoid tissue held in other systems and shown together in the lymphatic views.|淋巴将从毛细血管渗出的液体引流回血液。淋巴结（青绿色）沿收集管（淡绿色）过滤淋巴液，收集管汇合成淋巴干：每侧的颈干、锁骨下干和支气管纵隔干，以及下方的腰干和肠干。右淋巴导管将右侧头、颈、手臂和胸部的淋巴引流至右静脉角。胸导管起自乳糜池，将其余部分引流至左静脉角。扁桃体、脾脏、胸腺、派尔斑和阑尾属于其他系统内的淋巴组织，在淋巴视图中一并显示。
The kidneys filter blood and form urine, which drains from the renal papillae into the minor and major calyces and the renal pelvis, then down the ureters to the bladder. The renal cortex is shown translucent so the medullary pyramids and collecting system are visible inside. At the hilum the renal vein lies in front, the artery in the middle and the pelvis behind. Each ureter narrows at the pelviureteric junction, at the pelvic brim and where it passes obliquely through the bladder wall. The trigone, between the two ureteric orifices and the internal urethral orifice, is the smooth area of the otherwise folded bladder lining.|肾脏过滤血液并形成尿液，尿液由肾乳头流入小肾盏、大肾盏和肾盂，再经输尿管流向膀胱。肾皮质以半透明显示，因此可看到内部的髓质锥体和集合系统。在肾门处，肾静脉在前，肾动脉居中，肾盂在后。每条输尿管在肾盂输尿管交界处、骨盆缘，以及斜行穿过膀胱壁处变窄。膀胱三角位于两个输尿管口与尿道内口之间，是膀胱内壁其余皱褶部分中平滑的区域。
Breaks down food, absorbs nutrients and water, and eliminates waste. The mouth holds 32 permanent teeth and a tongue with papillae in front of the V-shaped sulcus terminalis and the lingual tonsil behind it. The lips and cheeks line a vestibule outside the teeth, the hard and soft palate roof the mouth, and a palatine tonsil lies in each tonsillar fossa between the faucial arches, with the pharyngeal, tubal and lingual tonsils completing Waldeyer's ring. The parotid, submandibular and sublingual glands empty into the mouth through their ducts. The oesophagus narrows at four points and changes from striated to smooth muscle down its length. The J-shaped stomach has a fundus above the cardia, an angular incisure on the lesser curvature and a thick-walled pyloric canal; its translucent wall shows three muscle layers over red, folded mucosa. The duodenum curves around the pancreatic head. The jejunum (upper left, wider, redder, tall folds, long vasa recta) gives way to the ileum (lower right, narrower, fatty mesentery, Peyer’s patches). The colon carries haustra, three taeniae and fatty appendices; the rectum follows the sacrum and bends at the puborectalis sling into the anal canal.|分解食物、吸收营养和水分，并排出废物。口腔有 32 颗恒牙，以及舌：舌乳头位于 V 形界沟前方，舌扁桃体位于界沟后方。唇和颊在牙齿外侧围成口腔前庭，硬腭和软腭构成口腔顶部；每个扁桃体窝内有一个腭扁桃体，位于咽门弓之间，咽扁桃体、咽鼓管扁桃体和舌扁桃体共同组成华氏环（咽淋巴环）。腮腺、颌下腺和舌下腺经各自的导管通入口腔。食管有四处狭窄，肌肉由上而下由横纹肌转为平滑肌。J 形的胃在贲门上方有胃底，小弯有角切迹，幽门管壁较厚；半透明的胃壁显示红色皱褶黏膜之上的三层肌肉。十二指肠环绕胰头弯曲。空肠（左上方，较宽、较红、皱襞高、直血管长）移行为回肠（右下方，较窄、肠系膜多脂肪、有派尔斑）。结肠有结肠袋、三条结肠带和肠脂垂；直肠沿骶骨下行，并在耻骨直肠肌吊带处弯向肛管。
Appendix and caecum|阑尾及盲肠
Bronchial tree|支气管树
Cervical lymph nodes|颈部淋巴结
Cisterna chyli and thoracic duct|乳糜池及胸导管
Deep neck: scalenes and prevertebral muscles|颈深部：斜角肌及椎前肌
Digestive system|消化系统
Eye (right)|右眼
Great vessels|大血管
Heart: chambers and valves (cut open)|心脏：心腔及瓣膜（剖开）
Inner ear (right)|右内耳
Large intestine|大肠
Larynx (muscles and nerves omitted)|喉（未显示肌肉及神经）
Liver, gallbladder and bile ducts|肝脏、胆囊及胆管
Main bronchi|主支气管
Middle ear (right)|右中耳
Nasal cavity (right half, septum omitted)|鼻腔（右半，未显示鼻中隔）
Nasopharynx (right half)|鼻咽（右半）
Neck: organs, vessels and nerves|颈部：器官、血管及神经
Oral cavity (right half)|口腔（右半）
Oral cavity with teeth (right half)|口腔连牙齿（右半）
Oropharynx (right half)|口咽（右半）
Outer ear (right)|右外耳
Pancreas and pancreatic ducts|胰脏及胰管
Pharynx (right half): nasopharynx, oropharynx, laryngopharynx|咽（右半）：鼻咽、口咽、喉咽
Salivary glands and ducts|唾液腺及导管
Single tooth (magnified, cut lengthwise)|单颗牙齿（放大，纵切）
Stomach|胃
Teeth|牙齿
Thyroid and parathyroid glands|甲状腺及副甲状腺
Trachea|气管
Whole ear (right)|右耳（整体）
Follicular phase|卵泡期
Ovulation|排卵
Luteal phase|黄体期
FSH matures a follicle that secretes estrogen, and the uterine lining thickens.|促卵泡激素（FSH）使分泌雌激素的卵泡成熟，子宫内膜增厚。
A surge in luteinizing hormone (LH) releases the mature egg into the fallopian tube.|黄体生成素（LH）激增，使成熟卵子排入输卵管。
The corpus luteum secretes progesterone. If fertilization does not happen, the lining sheds at the end of the cycle.|黄体分泌黄体酮。若没有受精，内膜会在周期末脱落。
Female body surface is shown with dedicated female reproductive and breast structures.|女性身体表面连同专用的女性生殖及乳房结构一并显示。
Snapshot PNG|保存 PNG 快照
Save this view as a high-resolution PNG|将此视图保存为高分辨率 PNG
Expand|展开
Expand cross-section|展开剖面
Make smaller|缩小
Camera reset to the opening view|镜头已重置至起始视角
Nothing selected to hide|没有可隐藏的已选结构
Nothing to undo|没有可复原的操作
Search a part, e.g. femur|搜索部位，例如 femur 或 股骨
Parts|部位
All layers hidden|所有层次已隐藏
Accessibility|无障碍
Changelog|更新纪录
Cite|引用
Code of conduct|行为准则
Contributing|参与贡献
Licence|授权条款
Security|安全政策
Support|支持
Third-party notices|第三方声明
Drag to orbit · scroll to zoom · right-drag to pan|拖曳以旋转 · 卷动以缩放 · 右键拖曳以平移
Download OBJ + MTL|下载 OBJ + MTL
Download GLB|下载 GLB
Body|身体
Bones|骨骼
Nerves|神经
Brain & nerves|脑与神经
Arteries|动脉
Veins|静脉
Organs & airway|器官与气道
Lymphatics|淋巴系统
Project documents|项目文档
No match. Try a common name, a Latin name or fewer letters.|找不到符合项目。请试用常用名称、拉丁名称或较少字母。
Showing: single alveolar unit (magnified). Press the button again or Reset to leave it.|正在显示：单一肺泡单位（放大）。再按一次按钮或按「重置」即可离开。
close match|相近结果
Type a note|输入注记
Note|注记
Delete note|删除注记
Anatomy, assembled|解剖结构（已组合）
← All systems|← 所有系统
Snapshot saved|快照已保存
No match|找不到符合项目
Not available in Explode anatomy mode.|分解解剖模式下无法使用。
Special senses|特殊感官
Endocrine|内分泌
three.js failed to load.|three.js 加载失败。
View|视角
`;
  const map = new Map();
  TEXT.split('\n').forEach(l => { const i = l.indexOf('|'); if (i > 0) map.set(l.slice(0, i).trim(), l.slice(i + 1).trim()); });
  const Z = () => window.__zh;
  const name = s => { const z = Z() && Z().zh(s); return z || map.get(s) || s; };
  // text built by code, with numbers or names inside
  const RULES = [
    [/^Showing (.+)$/, (m) => '正在显示：' + name(m[1])],
    [/^([+−-]\d+) mm from mid-brain · level ([\d.]+) m$/, (m) => '距脑中部 ' + m[1] + ' 毫米 · 高度 ' + m[2] + ' 米'],
    [/^(.+) ↗$/, (m) => name(m[1]) + ' ↗'],
    [/^Parts · (\d+)$/, (m) => '部位 · ' + m[1]],
    [/^(\d+) removed · last: (.+)$/, (m) => '已移除 ' + m[1] + ' 项 · 最后：' + name(m[2])],
    [/^Outermost visible: (.+)$/, (m) => '最外层可见：' + name(m[1])],
    [/^Showing: (.+)\. Choose Reset to bring everything back\.$/, (m) => '正在显示：' + name(m[1]) + '。按「重置」可还原全部。'],
    [/^(.+): no structures found for this view\.$/, (m) => name(m[1]) + '：此视图找不到任何结构。'],
    [/^(.+) has no structures in this model yet$/, (m) => '此模型尚未有' + name(m[1]) + '的结构'],
    [/^Undone\. (.+)$/, (m) => '已复原。' + tr(m[1])],
    [/^Cross-section axis: (.+)$/, (m) => '横切面轴向：' + tr(m[1])],
    [/^Show (.+)$/, (m) => '显示' + name(m[1])],
    [/^(.+) system$/, (m) => { const z = name(m[1]); return /系统$/.test(z) ? z : z + '系统'; }],
    [/^Skin tone (\d+)$/, (m) => '肤色 ' + m[1]],
    [/^([^·]+) · (.+)$/, (m) => { const a = tr(m[1]), b = tr(m[2]); return (a || b) ? (a || m[1].trim()) + ' · ' + (b || m[2].trim()) : null; }],
  ];
  function tr(s) {
    const t = s.trim(); if (!t) return null;
    if (map.has(t)) return map.get(t);
    for (const [re, f] of RULES) { const m = t.match(re); if (m) return f(m); }
    return (Z() && Z().zh(t)) || null;
  }
  const orig = new WeakMap();      // node or element+attribute -> original English
  const ATTRS = ['placeholder', 'title', 'aria-label'];
  const on = () => document.body.classList.contains('zh-on');
  const nextEl = x => { let y = x.nextSibling; while (y && y.nodeType === 3 && !y.data.trim()) y = y.nextSibling; return y; };
  const tagged = y => !!(y && y.nodeType === 1 && y.classList && y.classList.contains('zh'));
  const skip = n => {
    const p = n.parentElement; if (!p) return true;
    if (/^(SCRIPT|STYLE|TEXTAREA)$/.test(p.tagName)) return true;
    if (p.closest('[data-zh]')) return true;          // the Chinese name is drawn by CSS beside it
    return tagged(nextEl(n)) || tagged(nextEl(p));     // zh-hant.js already put the Chinese name next to it
  };
  function text(n) {
    if (skip(n)) return;
    const cur = n.data, lead = cur.match(/^\s*/)[0], trail = cur.match(/\s*$/)[0];
    const o = orig.get(n);
    if (o && o.zh === cur) return;               // already translated by us
    const z = tr(cur); if (!z) return;
    orig.set(n, { en: cur, zh: lead + z + trail }); n.data = lead + z + trail;
  }
  function attrs(el) {
    for (const a of ATTRS) {
      const v = el.getAttribute && el.getAttribute(a); if (!v) continue;
      const key = el, rec = (orig.get(key) || {})[a];
      if (rec && rec.zh === v) continue;
      const z = tr(v); if (!z) continue;
      const all = orig.get(key) || {}; all[a] = { en: v, zh: z }; orig.set(key, all); el.setAttribute(a, z);
    }
  }
  function walk(root) {
    if (root.nodeType === 3) { text(root); return; }
    if (root.nodeType !== 1 && root.nodeType !== 11) return;
    if (root.nodeType === 1) attrs(root);
    const w = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    let n; while ((n = w.nextNode())) { if (n.nodeType === 3) text(n); else attrs(n); }
  }
  function restore(root) {
    const w = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    let n; while ((n = w.nextNode())) {
      if (n.nodeType === 3) { const o = orig.get(n); if (o && n.data === o.zh) n.data = o.en; orig.delete(n); }
      else { const all = orig.get(n); if (all) { for (const a in all) if (n.getAttribute(a) === all[a].zh) n.setAttribute(a, all[a].en); orig.delete(n); } }
    }
  }
  const roots = () => { const r = [document.body]; const st = document.querySelector('three-d-stage'); if (st && st.shadowRoot) r.push(st.shadowRoot); return r; };
  let busy = false;
  const mo = new MutationObserver(list => {
    if (!on() || busy) return; busy = true;
    try { for (const m of list) { if (m.type === 'childList') m.addedNodes.forEach(walk); else if (m.type === 'characterData') text(m.target); else if (m.type === 'attributes') attrs(m.target); } }
    finally { busy = false; mo.takeRecords(); }
  });
  function apply() {
    const v = on(); document.documentElement.lang = v ? ((Z() && Z().pack) || 'zh-Hans') : 'en';
    busy = true; try { for (const r of roots()) { if (v) walk(r); else restore(r); } } finally { busy = false; mo.takeRecords(); }
  }
  const watched = new Set();
  const watch = () => roots().forEach(r => { if (!watched.has(r)) { watched.add(r); mo.observe(r, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS }); } });
  watch();
  let last = null; new MutationObserver(() => { if (on() !== last) { last = on(); apply(); } }).observe(document.body, { attributes: true, attributeFilter: ['class'] });
  window.__zhUi = { tr, apply };
  // the button label itself is already bilingual; run once after the page scripts have built the interface
  const kick = () => apply();
  window.addEventListener('load', () => { watch(); kick(); setTimeout(() => { watch(); kick(); }, 1500); });
})();
