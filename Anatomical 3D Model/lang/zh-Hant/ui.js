// Traditional Chinese (繁體中文) interface text. With the Chinese button on, this replaces English interface text with Chinese.
// Structure names stay English with the Chinese name beside them (zh-hant.js). Add or fix a line below: "English|中文".
// worksheet.txt in this folder is the list these lines came from.
(function () {
  const TEXT = `
1. Brain and spine views|1. 腦與脊柱視圖
2. Head: eye, ear, nose, mouth, skull|2. 頭部：眼、耳、鼻、口、顱骨
3. Neck|3. 頸部
4. Thoracic and abdominal cavity|4. 胸腔和腹腔
5. Upper limb|5. 上肢
6. Lower limb|6. 下肢
Afferent|傳入（向心）
All digestive|全部消化系統
Anatomical directions|解剖學方位
Anatomy by system, group and part|按系統、組別及部位劃分的解剖結構
Anatomy mode|解剖模式
Anatomy, exploded|解剖分解圖
Anterior|前側
Anterior / Ventral|前側／腹側
Anterior up · patient's right on the left|前側朝上 · 患者右側在畫面左方
Anterior view|前視圖
Appendix|闌尾
Artery|動脈
Assemble anatomy|還原解剖結構
Assembled|已組合
Atlas|圖譜
Axial brain section|腦部橫切面
Axial level|橫切面層級
Bladder and pelvis|膀胱與骨盆
Body layers, skin to bone|身體層次，由皮膚至骨骼
Body region|身體區域
Bone|骨骼
Brain and cord|腦與脊髓
Brain axial|腦部橫切面
Brain axial series|腦部橫切面系列
Breast (female)|乳房（女性）
Breast from the side (female)|乳房側面（女性）
Breast: glandular|乳房：腺體
Breast: supportive|乳房：支持結構
Breast: surface|乳房：表面
Breast: vessels, nerves, lymph|乳房：血管、神經、淋巴
Bronchi|支氣管樹
Bronchus|支氣管
Browse by system|按系統瀏覽
Camera views|鏡頭視角
Center selected structure|置中所選結構
Cervical nodes|頸部淋巴結
Chambers and valves|心腔與瓣膜
Clear|清除
Clear pin|清除標註
Click a colour to select it, drag to move, scroll to zoom|點擊顏色以選取，拖曳以移動，捲動以縮放
Click anatomy for names · choose a system below|點擊結構查看名稱 · 在下方選擇系統
Close|關閉
Close brain axial series|關閉腦部橫切面系列
Close cross-section|關閉剖面
Close tweaks|關閉調整面板
Coronal|冠狀面
Coronary arteries and veins|冠狀動脈與靜脈
Cortex opacity|皮質不透明度
Cross-section|剖面
Cross-section colour map|剖面顏色圖
Cut axis|切割軸向
Cut depth|切割深度
Cut position|切割位置
Deep|深層
Deep neck muscles|深層頸部肌肉
Dissect|解剖
Ear: all|耳：全部
Ear: inner|耳：內耳
Ear: middle|耳：中耳
Ear: outer|耳：外耳
Efferent|傳出（離心）
Eight great vessels|八條大血管
Enlarge|放大
Enlarge cross-section|放大剖面
Epidermis, dermis and the fat layer beneath.|表皮、真皮及其下的脂肪層。
Explode anatomy|分解解剖結構
Exploded view|分解圖
Exploded view amount|分解程度
Explore|探索
Fat|脂肪
Female|女性
Female reproductive system|女性生殖系統
Fibrous connective tissue (breast)|纖維結締組織（乳房）
Find a part|尋找部位
Fit|適合視窗
Frontal|額葉
Head & neck|頭頸部
Heart cut depth|心臟切割深度
Heart cutaway (open the chambers)|心臟剖開（打開心腔）
Hide selected structure|隱藏所選結構
Human anatomy|人體解剖
Inferior|下側
Inferior / Caudal|下側／尾側
Inferior view|下視圖
Insula|腦島
Keys:|按鍵：
Kidney|腎臟
Kidney from behind|腎臟後面觀
Lateral|外側
Left|左
Left lateral view|左側視圖
Limbic|邊緣葉
Liver, gallbladder, bile duct|肝臟、膽囊、膽管
Lower extremity|下肢
Lung|肺
Lung opacity|肺部不透明度
Lungs and diaphragm|肺與橫膈膜
Lymph nodes|淋巴結
Lymphatic system|淋巴系統
Lymphatic vessels|淋巴管
MNI template T1, 1 mm slices|MNI 標準腦模板 T1，1 毫米切片
MRI|磁力共振
Male|男性
Medial|內側
Menstrual cycle day|月經週期日數
Menstrual cycle, day|月經週期，第
Menstruation|月經期
Menu|選單
Minimise|最小化
Minimise cross-section|最小化剖面
Muscle|肌肉
Muscles|肌肉
Nasal cavity|鼻腔
Nasopharynx|鼻咽
Neck muscles|頸部肌肉
Neck: organs, vessels, nerves|頸部：器官、血管、神經
Nerve|神經
Nose and mouth|鼻與口
Notes on the model|模型註記
Nothing removed|未移除任何結構
Nothing selected|未選取任何結構
Occipital|枕葉
Oesophagus|食道
Oral cavity with teeth|口腔（連牙齒）
Organs|器官
Oropharynx|口咽
Outermost visible: Skin|最外層可見：皮膚
Ovaries and uterus close-up (female)|卵巢與子宮特寫（女性）
Pancreas and pancreatic duct|胰臟與胰管
Panels|面板
Parietal|頂葉
Peel body layers from skin to bone|由皮膚至骨骼逐層剝離身體
Peel layers|剝離層次
Peel layers from skin to bone|由皮膚至骨骼逐層剝離
Peyer's patches|培氏斑
Plate (atlas)|圖譜色板
Plate II · Systems of the body|圖版二 · 人體系統
Posterior|後側
Posterior / Dorsal|後側／背側
Posterior view|後視圖
Presentation|展示
Put all back|全部還原
Renal|腎臟
Rendering|顯示方式
Reproductive organs|生殖器官
Reproductive pelvis from the side|生殖系統骨盆側面
Reset|重設
Right|右
Right lateral view|右側視圖
Sagittal|矢狀面
Search|搜尋
Search a part|搜尋部位
Selected|已選取
Sex of the body|身體性別
Shoulder and arm|肩與上臂
Show Anterior organs|顯示前部器官
Show Bones and cartilage|顯示骨骼及軟骨
Show Capsules and ligaments|顯示被膜及韌帶
Show Circulatory|顯示循環系統
Show Deep muscles|顯示深層肌肉
Show Deep nerves and vessels|顯示深層神經及血管
Show Deep organs|顯示深部器官
Show Deepest muscles|顯示最深層肌肉
Show Digestive|顯示消化系統
Show Eye and ear|顯示眼及耳
Show Intermediate muscles|顯示中層肌肉
Show Investing fascia|顯示包被筋膜
Show Lymphatic|顯示淋巴系統
Show Muscular|顯示肌肉系統
Show Nervous|顯示神經系統
Show Reproductive|顯示生殖系統
Show Reproductive (female and breast)|顯示生殖系統（女性及乳房）
Show Respiratory|顯示呼吸系統
Show Second muscle group|顯示第二肌群
Show Skeletal|顯示骨骼系統
Show Skin|顯示皮膚
Show Subcutaneous fat|顯示皮下脂肪
Show Superficial muscles|顯示淺層肌肉
Show Superficial veins|顯示淺靜脈
Show Thyroid and parathyroid|顯示甲狀腺及副甲狀腺
Show Urinary|顯示泌尿系統
Show Visceral coverings|顯示內臟被覆
Show all|全部顯示
Show all layers|顯示所有層次
Show cutting plane in the model|在模型中顯示切割平面
Show direction arrows on the body|在身體上顯示方向箭頭
Show only this system|只顯示此系統
Show selected structure only|只顯示所選結構
Single alveolar unit|單一肺泡單位
Single tooth|單顆牙齒
Skin opacity|皮膚不透明度
Skin tone|膚色
Skin tone 1, darkest|膚色 1（最深）
Skin tone 2|膚色 2
Skin tone 3|膚色 3
Skin tone 4|膚色 4
Skin tone 5|膚色 5
Skin tone 6, lightest|膚色 6（最淺）
Skull and teeth|顱骨及牙齒
Small intestine|小腸
Spine|脊柱
Spread|展開
Spread parts apart|將各部分分開
Superficial|淺層
Superior|上側
Superior / Cranial|上側／頭側
Superior view|上視圖
Surface roughness|表面粗糙度
Surrounding anatomy|周圍結構
Surrounding anatomy, filled to transparent|周圍結構（填充至透明）
Systems|系統
Temporal|顳葉
The airway tubes|氣道管道
Tonsils|扁桃體
Tonsils and lymphatic system|扁桃體與淋巴系統
Torso & pelvis|軀幹與骨盆
Transverse|橫切面
Turntable|旋轉展示
Turntable hides the panels and slowly rotates the body.|旋轉展示會隱藏面板，並緩慢轉動身體。
Tweaks|調整
Undo|復原
Upper extremity|上肢
Vein|靜脈
Vulva (external)|外陰（外部）
White background for snapshots|快照使用白色背景
Whole body|全身
X-ray|X 光
Zoom in|放大
Zoom out|縮小
Zoom to a structure when clicked|點擊結構時自動放大
a few positional or displacement errors|少量位置或移位錯誤
away from the midline.|遠離中線。
away from the surface.|遠離表面。
carried away from it, such as motor nerves.|傳離中樞，例如運動神經。
carried toward a centre, such as sensory nerves to the CNS.|傳向中樞，例如通向中樞神經系統的感覺神經。
farther from it.|離該處較遠。
may exist.|可能存在。
nearer the limb's attachment.|較接近肢體連接處。
of 28:|天，共 28 天：
toward the back.|朝向後方。
toward the feet.|朝向足部。
toward the front.|朝向前方。
toward the head.|朝向頭部。
toward the midline.|朝向中線。
toward the surface.|朝向表面。
This model does not exactly reflect the real body arrangement;|此模型未能完全反映真實的人體結構排列；
Veins in the subcutaneous fat: external jugular, facial, forearm veins.|皮下脂肪內的靜脈：頸外靜脈、面靜脈、前臂靜脈。
Atlas keeps the plate colours, X-ray shows every system through the others.|圖譜模式保留圖版顏色，X 光模式讓各系統透視顯示。
Estrogen and progesterone are low, so the uterine lining sheds through the vagina.|雌激素及黃體酮水平偏低，子宮內膜經陰道脫落。
Skull, spine, ribs, limb bones, teeth, costal cartilage and airway cartilage rings.|顱骨、脊柱、肋骨、四肢骨、牙齒、肋軟骨及氣道軟骨環。
Muscles just under the fascia: trapezius, deltoid, pectoralis major, gluteus maximus.|位於筋膜正下方的肌肉：斜方肌、三角肌、胸大肌、臀大肌。
Click any structure to select it. Its tab can hide it, and Undo brings hidden structures back.|點擊任何結構即可選取。其標籤可將它隱藏，按「復原」可還原已隱藏的結構。
Deep fascia, aponeuroses, spermatic fasciae, Buck fascia, iliotibial tract, flexor retinaculum.|深筋膜、腱膜、精索筋膜、陰莖深筋膜（巴克筋膜）、髂脛束、屈肌支持帶。
Brachialis, serratus anterior, infraspinatus, teres major, piriformis, vastus intermedius, semimembranosus.|肱肌、前鋸肌、棘下肌、大圓肌、梨狀肌、股中間肌、半膜肌。
Cranial and spinal nerves, spinal cord, plexuses, great arteries, cerebral arteries, sinuses and deep veins.|腦神經及脊神經、脊髓、神經叢、大動脈、腦動脈、靜脈竇及深靜脈。
Brain, mouth and pharynx, trachea and lungs, oesophagus, pancreas, spleen, bowel, kidneys, prostate, urethra.|腦、口腔及咽、氣管及肺、食道、胰臟、脾臟、腸、腎臟、前列腺、尿道。
Cranial sutures, acromioclavicular joint, intervertebral discs, and skeletal, laryngeal and visceral ligaments.|顱縫、肩鎖關節、椎間盤，以及骨骼、喉部和內臟的韌帶。
Supraspinatus, subscapularis, gluteus minimus, adductor magnus, tibialis posterior, thenar muscles, puborectalis.|棘上肌、肩胛下肌、臀小肌、大收肌、脛骨後肌、大魚際肌、恥骨直腸肌。
Dura mater, pericardium, pleura, omenta and mesenteries, serosae, renal and prostate capsules, testicular tunics.|硬腦膜、心包、胸膜、網膜及腸繫膜、漿膜、腎及前列腺被膜、睪丸鞘膜。
Heart chambers and valves, larynx, liver, gallbladder, stomach, transverse colon, caecum, bladder, testis, penis.|心腔及瓣膜、喉、肝臟、膽囊、胃、橫結腸、盲腸、膀胱、睪丸、陰莖。
The body surface, shown as a translucent shell so the systems beneath stay visible. Adjust it with the opacity slider.|身體表面以半透明外殼顯示，使下方的系統仍然可見。可用不透明度滑桿調整。
Triceps brachii, gluteus medius, vastus lateralis and medialis, adductor longus, soleus, flexor digitorum superficialis.|肱三頭肌、臀中肌、股外側肌及股內側肌、長收肌、比目魚肌、指淺屈肌。
Diaphragm, supinator, pronator quadratus, sphincters, trachealis, detrusor, and the wall muscle of stomach and oesophagus.|橫膈膜、旋後肌、旋前方肌、括約肌、氣管肌、逼尿肌，以及胃和食道的壁肌。
Left and right are the figure's own. Drag to turn, scroll to zoom. Downloads include the systems currently shown, minus removed parts.|左右以人體本身為準。拖曳以轉動，捲動以縮放。下載內容包括目前顯示的系統，但不含已移除的部分。
Every structure moves away from the midline in proportion to its distance from it, and from front to back as well. Skin and fat stay in place.|每個結構會按其與中線的距離成比例地遠離中線，並同時由前向後分開。皮膚及脂肪保持原位。
The reproductive panel supports male and female anatomy. Use the Sex control to switch model variants and view the available reproductive structures.|生殖系統面板支援男性和女性解剖。使用「性別」控制切換模型版本，查看可用的生殖結構。
The female body mesh is not loaded, so the generic body surface is shown with the female reproductive and breast structures. Peel the skin layer to see them.|未載入女性身體網格，因此以通用身體表面配合女性生殖及乳房結構顯示。剝離皮膚層即可看到它們。
Supports the body, protects organs and anchors muscle. Bone is shown in ivory and cartilage (discs, costal cartilage, joint surfaces) in blue-grey. Hover any bone to name it.|支撐身體、保護器官並為肌肉提供附著點。骨骼以象牙色顯示，軟骨（椎間盤、肋軟骨、關節面）以藍灰色顯示。將指標移到任何骨骼上即可顯示名稱。
Space resets the view, H hides the selected part, U undoes, X toggles X-ray, 1 2 3 set the cut to transverse, coronal or sagittal. Double-click a surface to leave a note on it.|空白鍵重設視角，H 隱藏所選部位，U 復原，X 切換 X 光，1、2、3 分別將切割設為橫切面、冠狀面或矢狀面。雙擊表面可在其上留下註記。
A simplified model in anatomical position. Search for a part, peel the layers from skin to bone, explode the body into systems, click a structure to isolate it, and cut through the body with the slice view.|以解剖學姿勢呈現的簡化模型。可搜尋部位、由皮膚至骨骼逐層剝離、將身體按系統分解、點擊結構以單獨顯示，並用切面視圖剖開身體。
Skeletal muscle produces movement and holds posture, attaching to bone through tendons (white) and aponeuroses. Superficial muscles are the lighter red, deeper layers darker. The arm, forearm, hand, hip, thigh and leg follow anatomical atlas plates.|骨骼肌產生動作並維持姿勢，透過肌腱（白色）和腱膜附著於骨骼。淺層肌肉為較淺的紅色，深層則較深。上臂、前臂、手、髖、大腿及小腿依據解剖圖譜的圖版繪製。
The hypodermis: fat and loose connective tissue between the dermis and the deep fascia over muscle. Its depth is set by region, from about 1 mm over the front of the shin and the scalp to 3 cm over the abdomen, buttocks and thighs, with more over the hips, thighs and breasts in the female body. The skin above it is about 2.5 mm thick, up to 6 mm on the back.|皮下組織：位於真皮與肌肉表面深筋膜之間的脂肪和疏鬆結締組織。厚度因部位而異，由小腿前面和頭皮約 1 毫米，至腹部、臀部和大腿約 3 厘米；女性身體的髖部、大腿和乳房處更厚。其上的皮膚約厚 2.5 毫米，背部可達 6 毫米。
The thyroid gland wraps the front of the trachea below the larynx: two lobes joined by an isthmus over the second to fourth tracheal rings, often with a pyramidal lobe rising toward the hyoid. Four parathyroid glands sit on the back of the lobes. Blood comes from the superior thyroid artery (external carotid) and the inferior thyroid artery (thyrocervical trunk).|甲狀腺包繞喉下方氣管的前面：兩個側葉由峽部連接，峽部位於第二至第四氣管環之上，常有一個錐狀葉向舌骨上升。四個副甲狀腺位於側葉後面。血液來自甲狀腺上動脈（頸外動脈）及甲狀腺下動脈（甲狀頸幹）。
Senses, integrates and responds. The central nervous system is the brain and spinal cord; cranial and spinal nerves form the peripheral system. The cerebral cortex is coloured by lobe: frontal (green), parietal (yellow), temporal (blue), occipital (pink), limbic (tan) and insula (purple). Use the view buttons for lateral, medial and inferior views of the brain, or the whole spine.|負責感知、整合及作出反應。中樞神經系統包括腦和脊髓；腦神經及脊神經組成周圍神經系統。大腦皮質按腦葉著色：額葉（綠）、頂葉（黃）、顳葉（藍）、枕葉（粉紅）、邊緣葉（淺褐）及腦島（紫）。可使用視角按鈕查看腦的外側、內側和下面觀，或整條脊柱。
The heart pumps blood through a closed circuit. Deoxygenated blood (blue) returns through the venae cavae to the right heart and goes to the lungs through the pulmonary trunk (purple). Oxygenated blood (red) returns through the pulmonary veins to the left heart and leaves through the aorta. Use Heart cutaway to open the four chambers and see the valves, chordae and papillary muscles.|心臟推動血液在封閉的循環中流動。缺氧血（藍色）經腔靜脈回流至右心，再經肺動脈幹（紫色）送往肺部。含氧血（紅色）經肺靜脈回流至左心，再經主動脈離開。使用「心臟剖開」可打開四個心腔，查看瓣膜、腱索和乳頭肌。
Air passes the larynx, the trachea (C-shaped cartilage rings with a muscular back wall) and the bronchial tree to the alveoli, where gas exchange happens across the thin alveolar wall into the capillaries. The right lung has three lobes and the left two, with a cardiac notch. The diaphragm drives breathing, and a magnified alveolar unit can be shown beside the figure (Heart, lungs and diaphragm panel).|空氣經過喉、氣管（C 形軟骨環，後壁為肌肉）和支氣管樹到達肺泡，並在肺泡薄壁處與毛細血管進行氣體交換。右肺有三葉，左肺有兩葉，並有心切跡。橫膈膜驅動呼吸，人體旁可顯示放大的肺泡單位（心、肺和橫膈膜面板）。
The eyeball sits in the orbit, moved by four recti and two obliques that arise around the optic canal; the levator palpebrae superioris lifts the upper lid and the lacrimal gland lies above and lateral. The ear runs from the auricle and external acoustic meatus to the tympanic membrane, the three ossicles in the tympanic cavity, and the cochlea and semicircular canals in the petrous temporal bone. The pharyngotympanic tube links the middle ear to the nasopharynx.|眼球位於眼眶內，由四條直肌和兩條斜肌轉動，這些肌肉起自視神經管周圍；提上瞼肌提起上眼瞼，淚腺位於其上方及外側。耳由耳廓和外耳道延伸至鼓膜、鼓室內的三塊聽小骨，以及顳骨岩部內的耳蝸和半規管。咽鼓管連接中耳與鼻咽。
Female reproductive organs include the ovaries, fallopian tubes, uterus, cervix and vagina, with the vulva externally. Move the menstrual cycle slider (day 1 to 28) to see the lining thicken, a follicle mature, ovulation and the corpus luteum. The breast model has 16 radial lobes, each with a lactiferous duct, a lobule and acini, set in fat and fibrous tissue held by the suspensory ligaments of Cooper, with the nipple-areola complex, axillary tail, lymph nodes, vessels and nerves.|女性生殖器官包括卵巢、輸卵管、子宮、子宮頸和陰道，外部為外陰。移動月經週期滑桿（第 1 至 28 天），可看到內膜增厚、濾泡成熟、排卵及黃體。乳房模型有 16 個放射狀乳腺葉，每葉有一條輸乳管、一個小葉和腺泡，位於脂肪和纖維組織中，由庫珀懸韌帶固定，並包括乳頭乳暈複合體、腋尾、淋巴結、血管及神經。
Lymph drains the fluid that leaks from capillaries back to the blood. Lymph nodes (lime) filter it along collecting vessels (pale green) that join into trunks: the jugular, subclavian and bronchomediastinal trunks on each side, and the lumbar and intestinal trunks below. The right lymphatic duct drains the right head, neck, arm and chest into the right venous angle. The thoracic duct, which starts at the cisterna chyli, drains everything else into the left venous angle. The tonsils, spleen, thymus, Peyer's patches and appendix are lymphoid tissue held in other systems and shown together in the lymphatic views.|淋巴將從毛細血管滲出的液體引流回血液。淋巴結（青綠色）沿收集管（淡綠色）過濾淋巴液，收集管匯合成淋巴幹：每側的頸幹、鎖骨下幹和支氣管縱隔幹，以及下方的腰幹和腸幹。右淋巴導管將右側頭、頸、手臂和胸部的淋巴引流至右靜脈角。胸導管起自乳糜池，將其餘部分引流至左靜脈角。扁桃體、脾臟、胸腺、培氏斑和闌尾屬於其他系統內的淋巴組織，在淋巴視圖中一併顯示。
The kidneys filter blood and form urine, which drains from the renal papillae into the minor and major calyces and the renal pelvis, then down the ureters to the bladder. The renal cortex is shown translucent so the medullary pyramids and collecting system are visible inside. At the hilum the renal vein lies in front, the artery in the middle and the pelvis behind. Each ureter narrows at the pelviureteric junction, at the pelvic brim and where it passes obliquely through the bladder wall. The trigone, between the two ureteric orifices and the internal urethral orifice, is the smooth area of the otherwise folded bladder lining.|腎臟過濾血液並形成尿液，尿液由腎乳頭流入小腎盞、大腎盞和腎盂，再經輸尿管流向膀胱。腎皮質以半透明顯示，因此可看到內部的髓質錐體和集合系統。在腎門處，腎靜脈在前，腎動脈居中，腎盂在後。每條輸尿管在腎盂輸尿管交界處、骨盆緣，以及斜行穿過膀胱壁處變窄。膀胱三角位於兩個輸尿管口與尿道內口之間，是膀胱內壁其餘皺褶部分中平滑的區域。
Breaks down food, absorbs nutrients and water, and eliminates waste. The mouth holds 32 permanent teeth and a tongue with papillae in front of the V-shaped sulcus terminalis and the lingual tonsil behind it. The lips and cheeks line a vestibule outside the teeth, the hard and soft palate roof the mouth, and a palatine tonsil lies in each tonsillar fossa between the faucial arches, with the pharyngeal, tubal and lingual tonsils completing Waldeyer's ring. The parotid, submandibular and sublingual glands empty into the mouth through their ducts. The oesophagus narrows at four points and changes from striated to smooth muscle down its length. The J-shaped stomach has a fundus above the cardia, an angular incisure on the lesser curvature and a thick-walled pyloric canal; its translucent wall shows three muscle layers over red, folded mucosa. The duodenum curves around the pancreatic head. The jejunum (upper left, wider, redder, tall folds, long vasa recta) gives way to the ileum (lower right, narrower, fatty mesentery, Peyer’s patches). The colon carries haustra, three taeniae and fatty appendices; the rectum follows the sacrum and bends at the puborectalis sling into the anal canal.|分解食物、吸收營養和水分，並排出廢物。口腔有 32 顆恆牙，以及舌：舌乳頭位於 V 形界溝前方，舌扁桃體位於界溝後方。唇和頰在牙齒外側圍成口腔前庭，硬顎和軟顎構成口腔頂部；每個扁桃體窩內有一個腭扁桃體，位於咽門弓之間，咽扁桃體、咽鼓管扁桃體和舌扁桃體共同組成華氏環（咽淋巴環）。腮腺、頜下腺和舌下腺經各自的導管通入口腔。食道有四處狹窄，肌肉由上而下由橫紋肌轉為平滑肌。J 形的胃在賁門上方有胃底，小彎有角切跡，幽門管壁較厚；半透明的胃壁顯示紅色皺褶黏膜之上的三層肌肉。十二指腸環繞胰頭彎曲。空腸（左上方，較寬、較紅、皺襞高、直血管長）移行為迴腸（右下方，較窄、腸繫膜多脂肪、有培氏斑）。結腸有結腸袋、三條結腸帶和腸脂垂；直腸沿骶骨下行，並在恥骨直腸肌吊帶處彎向肛管。
Appendix and caecum|闌尾及盲腸
Bronchial tree|支氣管樹
Cervical lymph nodes|頸部淋巴結
Cisterna chyli and thoracic duct|乳糜池及胸導管
Deep neck: scalenes and prevertebral muscles|頸深部：斜角肌及椎前肌
Digestive system|消化系統
Eye (right)|右眼
Great vessels|大血管
Heart: chambers and valves (cut open)|心臟：心腔及瓣膜（剖開）
Inner ear (right)|右內耳
Large intestine|大腸
Larynx (muscles and nerves omitted)|喉（未顯示肌肉及神經）
Liver, gallbladder and bile ducts|肝臟、膽囊及膽管
Main bronchi|主支氣管
Middle ear (right)|右中耳
Nasal cavity (right half, septum omitted)|鼻腔（右半，未顯示鼻中隔）
Nasopharynx (right half)|鼻咽（右半）
Neck: organs, vessels and nerves|頸部：器官、血管及神經
Oral cavity (right half)|口腔（右半）
Oral cavity with teeth (right half)|口腔連牙齒（右半）
Oropharynx (right half)|口咽（右半）
Outer ear (right)|右外耳
Pancreas and pancreatic ducts|胰臟及胰管
Pharynx (right half): nasopharynx, oropharynx, laryngopharynx|咽（右半）：鼻咽、口咽、喉咽
Salivary glands and ducts|唾液腺及導管
Single tooth (magnified, cut lengthwise)|單顆牙齒（放大，縱切）
Stomach|胃
Teeth|牙齒
Thyroid and parathyroid glands|甲狀腺及副甲狀腺
Trachea|氣管
Whole ear (right)|右耳（整體）
Follicular phase|濾泡期
Ovulation|排卵
Luteal phase|黃體期
FSH matures a follicle that secretes estrogen, and the uterine lining thickens.|促卵泡激素（FSH）使分泌雌激素的濾泡成熟，子宮內膜增厚。
A surge in luteinizing hormone (LH) releases the mature egg into the fallopian tube.|黃體生成素（LH）激增，使成熟卵子排入輸卵管。
The corpus luteum secretes progesterone. If fertilization does not happen, the lining sheds at the end of the cycle.|黃體分泌黃體酮。若沒有受精，內膜會在週期末脫落。
Female body surface is shown with dedicated female reproductive and breast structures.|女性身體表面連同專用的女性生殖及乳房結構一併顯示。
Snapshot PNG|儲存 PNG 快照
Save this view as a high-resolution PNG|將此視圖儲存為高解像度 PNG
Expand|展開
Expand cross-section|展開剖面
Make smaller|縮小
Camera reset to the opening view|鏡頭已重設至起始視角
Nothing selected to hide|沒有可隱藏的已選結構
Nothing to undo|沒有可復原的操作
Search a part, e.g. femur|搜尋部位，例如 femur 或 股骨
Parts|部位
All layers hidden|所有層次已隱藏
Accessibility|無障礙
Changelog|更新紀錄
Cite|引用
Code of conduct|行為準則
Contributing|參與貢獻
Licence|授權條款
Security|安全政策
Support|支援
Third-party notices|第三方聲明
Drag to orbit · scroll to zoom · right-drag to pan|拖曳以旋轉 · 捲動以縮放 · 右鍵拖曳以平移
Download OBJ + MTL|下載 OBJ + MTL
Download GLB|下載 GLB
Body|身體
Bones|骨骼
Nerves|神經
Brain & nerves|腦與神經
Arteries|動脈
Veins|靜脈
Organs & airway|器官與氣道
Lymphatics|淋巴系統
Project documents|專案文件
No match. Try a common name, a Latin name or fewer letters.|找不到符合項目。請試用常用名稱、拉丁名稱或較少字母。
Showing: single alveolar unit (magnified). Press the button again or Reset to leave it.|正在顯示：單一肺泡單位（放大）。再按一次按鈕或按「重設」即可離開。
close match|相近結果
Type a note|輸入註記
Note|註記
Delete note|刪除註記
Anatomy, assembled|解剖結構（已組合）
← All systems|← 所有系統
Snapshot saved|快照已儲存
No match|找不到符合項目
Not available in Explode anatomy mode.|分解解剖模式下無法使用。
Special senses|特殊感官
Endocrine|內分泌
three.js failed to load.|three.js 載入失敗。
View|視角
`;
  const map = new Map();
  TEXT.split('\n').forEach(l => { const i = l.indexOf('|'); if (i > 0) map.set(l.slice(0, i).trim(), l.slice(i + 1).trim()); });
  const Z = () => window.__zh;
  const name = s => { const z = Z() && Z().zh(s); return z || map.get(s) || s; };
  // text built by code, with numbers or names inside
  const RULES = [
    [/^Showing (.+)$/, (m) => '正在顯示：' + name(m[1])],
    [/^([+−-]\d+) mm from mid-brain · level ([\d.]+) m$/, (m) => '距腦中部 ' + m[1] + ' 毫米 · 高度 ' + m[2] + ' 米'],
    [/^(.+) ↗$/, (m) => name(m[1]) + ' ↗'],
    [/^Parts · (\d+)$/, (m) => '部位 · ' + m[1]],
    [/^(\d+) removed · last: (.+)$/, (m) => '已移除 ' + m[1] + ' 項 · 最後：' + name(m[2])],
    [/^Outermost visible: (.+)$/, (m) => '最外層可見：' + name(m[1])],
    [/^Showing: (.+)\. Choose Reset to bring everything back\.$/, (m) => '正在顯示：' + name(m[1]) + '。按「重設」可還原全部。'],
    [/^(.+): no structures found for this view\.$/, (m) => name(m[1]) + '：此視圖找不到任何結構。'],
    [/^(.+) has no structures in this model yet$/, (m) => '此模型尚未有' + name(m[1]) + '的結構'],
    [/^Undone\. (.+)$/, (m) => '已復原。' + tr(m[1])],
    [/^Cross-section axis: (.+)$/, (m) => '橫切面軸向：' + tr(m[1])],
    [/^Show (.+)$/, (m) => '顯示' + name(m[1])],
    [/^(.+) system$/, (m) => { const z = name(m[1]); return /系統$/.test(z) ? z : z + '系統'; }],
    [/^Skin tone (\d+)$/, (m) => '膚色 ' + m[1]],
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
    const v = on(); document.documentElement.lang = v ? ((Z() && Z().pack) || 'zh-Hant') : 'en';
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
