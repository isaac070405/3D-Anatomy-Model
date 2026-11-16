// Simplified Chinese (简体中文) labels. Every structure name, group heading, system and layer shows its Chinese name beside the English one.
// Add or fix a term by editing the TERMS list below: one "English name|中文名" per line. Names that are not listed are built from their parts,
// so "Biceps brachii, long head (left)" becomes 左肱二头肌，长头. A name with no match shows in English only.
(function () {
  const TERMS = `
Head|头部
Torso|躯干
Arms and hands|上肢及手
Legs and feet|下肢及足
Genitals|外生殖器
Subcutaneous fat|皮下脂肪
Skull|颅骨
Frontal bone|额骨
Parietal bone|顶骨
Occipital bone|枕骨
Temporal bone|颞骨
Sphenoid bone|蝶骨
Zygomatic bone|颧骨
Zygomatic arch|颧弓
Maxilla|上颌骨
Nasal bone|鼻骨
Inferior nasal concha|下鼻甲
Vomer|犁骨
Hard palate|硬腭
Pterygoid process|翼突
Mandible|下颌骨
Teeth|牙齿
Hyoid|舌骨
Sutures and landmarks|骨缝及标志
Coronal suture|冠状缝
Sagittal suture|矢状缝
Lambdoid suture|人字缝
Squamous suture|鳞缝
Bregma|前囟点
Lambda|人字点
Pterion|翼点
Asterion|星点
Glabella|眉间
Superciliary arch|眉弓
Orbit|眼眶
External occipital protuberance|枕外隆凸
Superior nuchal line|上项线
Inferior nuchal line|下项线
Mastoid process|乳突
Skull base|颅底
Foramen magnum|枕骨大孔
Occipital condyle|枕髁
Pharyngeal tubercle|咽结节
Hypoglossal canal|舌下神经管
Jugular foramen|颈静脉孔
Carotid canal|颈动脉管
Foramen lacerum|破裂孔
Foramen ovale|卵圆孔
Foramen spinosum|棘孔
Stylomastoid foramen|茎乳孔
Styloid process|茎突
Mandibular fossa|下颌窝
Articular tubercle|关节结节
Choana|后鼻孔
Incisive fossa|切牙窝
Greater palatine foramen|腭大孔
Axial skeleton|中轴骨骼
Vertebrae C1–L5|椎骨 C1–L5
Intervertebral discs|椎间盘
Sacrum and coccyx|骶骨及尾骨
Ribs 1–12|肋骨 1–12
Costal cartilage|肋软骨
Sternum|胸骨
Shoulder and upper limb|肩及上肢
Clavicle|锁骨
Scapula|肩胛骨
Glenoid cavity|关节盂
Superior transverse ligament of scapula|肩胛上横韧带
Inferior transverse ligament of scapula|肩胛下横韧带
Acromioclavicular joint|肩锁关节
Humerus|肱骨
Radius and ulna|桡骨及尺骨
Scaphoid|舟骨
Lunate|月骨
Triquetrum|三角骨
Pisiform|豆状骨
Trapezium|大多角骨
Trapezoid|小多角骨
Capitate|头状骨
Hamate|钩骨
Metacarpal|掌骨
Finger phalanx|指骨
Pelvis and lower limb|骨盆及下肢
Pelvis|骨盆
Femur|股骨
Patella|髌骨
Tibia and fibula|胫骨及腓骨
Talus|距骨
Calcaneus|跟骨
Navicular|足舟骨
Medial cuneiform|内侧楔骨
Intermediate cuneiform|中间楔骨
Lateral cuneiform|外侧楔骨
Cuboid|骰骨
Metatarsal|跖骨
Toe phalanx|趾骨
Sesamoid bones|籽骨
Joint ligaments and menisci|关节韧带及半月板
Medial collateral ligament|内侧副韧带
Lateral collateral ligament|外侧副韧带
Anterior cruciate ligament|前十字韧带
Posterior cruciate ligament|后十字韧带
Medial meniscus|内侧半月板
Lateral meniscus|外侧半月板
Anterior longitudinal ligament|前纵韧带
Posterior longitudinal ligament|后纵韧带
Ligamentum flavum|黄韧带
Glenoid labrum|盂唇
Superior glenohumeral ligament|盂肱上韧带
Middle glenohumeral ligament|盂肱中韧带
Inferior glenohumeral ligament|盂肱下韧带
Iliofemoral ligament, lateral band|髂股韧带外侧束
Iliofemoral ligament, medial band|髂股韧带内侧束
Head and face|头面部
Orbicularis oculi|眼轮匝肌
Orbicularis oris|口轮匝肌
Zygomaticus major|颧大肌
Depressor anguli oris|降口角肌
Buccinator|颊肌
Procerus|降眉间肌
Masseter|咬肌
Temporalis|颞肌
Lateral pterygoid|翼外肌
Medial pterygoid|翼内肌
Superior rectus|上直肌
Inferior rectus|下直肌
Medial rectus|内直肌
Lateral rectus|外直肌
Superior oblique|上斜肌
Inferior oblique|下斜肌
Levator palpebrae superioris|提上睑肌
Floor of mouth, tongue and pharynx|口底、舌及咽
Digastric|二腹肌
Stylohyoid|茎突舌骨肌
Mylohyoid|下颌舌骨肌
Geniohyoid|颏舌骨肌
Genioglossus|颏舌肌
Hyoglossus|舌骨舌肌
Styloglossus|茎突舌肌
Levator veli palatini|提腭帆肌
Tensor veli palatini|张腭帆肌
Palatoglossus|腭舌肌
Palatopharyngeus|腭咽肌
Salpingopharyngeus|咽鼓管咽肌
Musculus uvulae|腭垂肌
Pterygomandibular raphe|翼下颌缝
Superior longitudinal muscle of the tongue|舌上纵肌
Transverse muscle of the tongue|舌横肌
Vertical muscle of the tongue|舌垂直肌
Inferior longitudinal muscle of the tongue|舌下纵肌
Superior pharyngeal constrictor|咽上缩肌
Middle pharyngeal constrictor|咽中缩肌
Inferior pharyngeal constrictor|咽下缩肌
Larynx|喉
Cricothyroid|环甲肌
Posterior cricoarytenoid|环杓后肌
Lateral cricoarytenoid|环杓侧肌
Thyroarytenoid|甲杓肌
Vocalis|声带肌
Transverse arytenoid|杓横肌
Oblique arytenoid|杓斜肌
Neck, trunk and shoulder|颈、躯干及肩
Platysma|颈阔肌
Thyrohyoid|甲状舌骨肌
Sternothyroid|胸骨甲状肌
Splenius capitis|头夹肌
Splenius cervicis|颈夹肌
Nuchal ligament|项韧带
Semispinalis capitis|头半棘肌
Rectus capitis posterior major|头后大直肌
Obliquus capitis inferior|头下斜肌
Rectus capitis anterior|头前直肌
Rectus capitis lateralis|头外侧直肌
Longus capitis|头长肌
Longus colli|颈长肌
Scalenus anterior|前斜角肌
Scalenus medius|中斜角肌
Scalenus posterior|后斜角肌
Sternocleidomastoid|胸锁乳突肌
Sternohyoid|胸骨舌骨肌
Omohyoid|肩胛舌骨肌
Levator scapulae|肩胛提肌
Trapezius|斜方肌
Rhomboid minor|小菱形肌
Rhomboid major|大菱形肌
Pectoralis major|胸大肌
Pectoralis minor|胸小肌
Subclavius|锁骨下肌
Serratus anterior|前锯肌
External intercostal|肋间外肌
Internal intercostal|肋间内肌
Latissimus dorsi|背阔肌
Teres major|大圆肌
Teres minor|小圆肌
Supraspinatus|棘上肌
Infraspinatus|棘下肌
Subscapularis|肩胛下肌
Erector spinae|竖脊肌
Rectus abdominis|腹直肌
External oblique|腹外斜肌
External oblique, aponeurosis|腹外斜肌腱膜
Internal oblique|腹内斜肌
Transversus abdominis|腹横肌
Inguinal ligament|腹股沟韧带
Thoracolumbar fascia|胸腰筋膜
Arm|上臂
Deltoid|三角肌
Coracobrachialis|喙肱肌
Biceps brachii|肱二头肌
Biceps brachii, tendon|肱二头肌腱
Bicipital aponeurosis|肱二头肌腱膜
Brachialis|肱肌
Triceps brachii|肱三头肌
Triceps brachii, tendon|肱三头肌腱
Forearm and hand|前臂及手
Brachioradialis|肱桡肌
Pronator teres|旋前圆肌
Flexor carpi radialis|桡侧腕屈肌
Palmaris longus|掌长肌
Flexor carpi ulnaris|尺侧腕屈肌
Flexor digitorum superficialis|指浅屈肌
Flexor digitorum profundus|指深屈肌
Flexor pollicis longus|拇长屈肌
Abductor pollicis longus|拇长展肌
Extensor carpi radialis longus|桡侧腕长伸肌
Extensor carpi radialis brevis|桡侧腕短伸肌
Extensor digitorum (forearm)|指伸肌（前臂）
Flexor retinaculum|屈肌支持带
Palmar aponeurosis|掌腱膜
Thenar muscles|大鱼际肌
Supinator|旋后肌
Pronator quadratus|旋前方肌
Hip and thigh|髋及大腿
Gluteus maximus|臀大肌
Gluteus medius|臀中肌
Gluteus minimus|臀小肌
Piriformis|梨状肌
Obturator internus|闭孔内肌
Gemellus superior|上孖肌
Gemellus inferior|下孖肌
Quadratus femoris|股方肌
Tensor fasciae latae|阔筋膜张肌
Iliotibial tract|髂胫束
Rectus femoris|股直肌
Vastus lateralis|股外侧肌
Vastus medialis|股内侧肌
Vastus intermedius|股中间肌
Quadriceps tendon|股四头肌腱
Patellar ligament|髌韧带
Sartorius|缝匠肌
Gracilis|股薄肌
Pectineus|耻骨肌
Adductor longus|长收肌
Adductor brevis|短收肌
Adductor magnus|大收肌
Biceps femoris, long head|股二头肌长头
Biceps femoris, short head|股二头肌短头
Semitendinosus|半腱肌
Semimembranosus|半膜肌
Pes anserinus|鹅足
Leg and foot|小腿及足
Gastrocnemius|腓肠肌
Soleus|比目鱼肌
Plantaris|跖肌
Calcaneal (Achilles) tendon|跟腱（阿基里斯腱）
Tibialis anterior|胫骨前肌
Extensor digitorum longus|趾长伸肌
Extensor hallucis longus|拇长伸肌
Fibularis longus|腓骨长肌
Fibularis brevis|腓骨短肌
Fibularis tertius|第三腓骨肌
Extensor digitorum brevis|趾短伸肌
Popliteus|腘肌
Tibialis posterior|胫骨后肌
Flexor digitorum longus|趾长屈肌
Flexor hallucis longus|拇长屈肌（足）
Deep fasciae|深筋膜
Fascia lata (thigh)|阔筋膜（大腿）
Crural fascia (leg)|小腿筋膜
Brachial fascia (arm)|臂筋膜（上臂）
Antebrachial fascia (forearm)|前臂筋膜
Deep cervical fascia (investing layer)|颈深筋膜（浅层）
Pretracheal fascia|气管前筋膜
Prevertebral fascia|椎前筋膜
Carotid sheath|颈动脉鞘
Transversalis fascia|腹横筋膜
Rectus sheath, anterior lamina|腹直肌鞘前层
Rectus sheath, posterior lamina|腹直肌鞘后层
Posterior abdominal wall, back and pelvic floor|腹后壁、背部及盆底
Psoas major|腰大肌
Iliacus|髂肌
Quadratus lumborum|腰方肌
Multifidus|多裂肌
Transversus thoracis|胸横肌
Pubococcygeus|耻骨尾骨肌
Iliococcygeus|髂骨尾骨肌
Head and neck vessels|头颈部血管
Superior thyroid artery|甲状腺上动脉
Superior laryngeal artery|喉上动脉
Lingual artery|舌动脉
Facial artery|面动脉
Occipital artery|枕动脉
Posterior auricular artery|耳后动脉
Superficial temporal artery|颞浅动脉
Maxillary artery|上颌动脉
Middle meningeal artery|脑膜中动脉
Deep temporal arteries|颞深动脉
Masseteric artery|咬肌动脉
Buccal artery|颊动脉
Inferior alveolar artery|下牙槽动脉
Posterior superior alveolar artery|上牙槽后动脉
Infraorbital artery|眶下动脉
Sphenopalatine artery|蝶腭动脉
Facial vein|面静脉
Angular vein|内眦静脉
Supraorbital vein|眶上静脉
Supratrochlear vein|滑车上静脉
Superior ophthalmic vein|眼上静脉
Inferior ophthalmic vein|眼下静脉
Cavernous sinus|海绵窦
Deep facial vein|面深静脉
Pterygoid plexus|翼静脉丛
Maxillary vein|上颌静脉
Superficial temporal vein|颞浅静脉
Retromandibular vein|下颌后静脉
External jugular vein|颈外静脉
Common facial vein|面总静脉
Lingual vein|舌静脉
Inferior alveolar vein|下牙槽静脉
Superior thyroid vein|甲状腺上静脉
Middle thyroid vein|甲状腺中静脉
Inferior thyroid vein|甲状腺下静脉
Heart|心脏
Fibrous pericardium|纤维心包
Epicardial fat|心外膜脂肪
Myocardium|心肌
Right atrium|右心房
Right auricle|右心耳
Right ventricle|右心室
Left atrium|左心房
Left auricle|左心耳
Left ventricle|左心室
Interatrial septum|房间隔
Interventricular septum|室间隔
Fossa ovalis|卵圆窝
Crista terminalis|界嵴
Musculi pectinati|梳状肌
Trabeculae carneae|肉柱
Papillary muscle|乳头肌
Chordae tendineae|腱索
Tricuspid valve|三尖瓣
Mitral valve|二尖瓣
Aortic valve|主动脉瓣
Pulmonary valve|肺动脉瓣
Conus arteriosus|动脉圆锥
Aortic vestibule|主动脉前庭
Coronary sinus|冠状窦
Coronary vessels|冠状血管
Right coronary artery|右冠状动脉
Left coronary artery|左冠状动脉
Left anterior descending artery|左前降支
Circumflex artery|回旋支
Great cardiac vein|心大静脉
Middle cardiac vein|心中静脉
Great vessels|大血管
Ascending aorta|升主动脉
Aortic arch|主动脉弓
Descending thoracic aorta|胸降主动脉
Abdominal aorta|腹主动脉
Brachiocephalic trunk|头臂干
Pulmonary trunk|肺动脉干
Pulmonary artery|肺动脉
Ligamentum arteriosum|动脉韧带
Superior pulmonary vein|上肺静脉
Inferior pulmonary vein|下肺静脉
Superior vena cava|上腔静脉
Inferior vena cava|下腔静脉
Left brachiocephalic vein|左头臂静脉
Right brachiocephalic vein|右头臂静脉
Head, neck and limbs|头、颈及四肢
Common carotid artery|颈总动脉
Internal carotid artery|颈内动脉
External carotid artery|颈外动脉
Ascending pharyngeal artery|咽升动脉
Carotid sinus|颈动脉窦
Carotid body|颈动脉体
Vertebral artery|椎动脉
Subclavian artery|锁骨下动脉
Subclavian vein|锁骨下静脉
Internal jugular vein|颈内静脉
Upper limb arteries|上肢动脉
Thyrocervical trunk|甲状颈干
Inferior thyroid artery|甲状腺下动脉
Suprascapular artery|肩胛上动脉
Transverse cervical artery|颈横动脉
Dorsal scapular artery|肩胛背动脉
Axillary artery|腋动脉
Superior thoracic artery|胸上动脉
Thoracoacromial artery|胸肩峰动脉
Acromial branch|肩峰支
Deltoid branch|三角肌支
Pectoral branches|胸肌支
Lateral thoracic artery|胸外侧动脉
Subscapular artery|肩胛下动脉
Circumflex scapular artery|旋肩胛动脉
Thoracodorsal artery|胸背动脉
Anterior circumflex humeral artery|旋肱前动脉
Posterior circumflex humeral artery|旋肱后动脉
Brachial artery|肱动脉
Deep artery of arm|肱深动脉
Radial collateral artery|桡侧副动脉
Middle collateral artery|中副动脉
Superior ulnar collateral artery|尺侧上副动脉
Inferior ulnar collateral artery|尺侧下副动脉
Radial recurrent artery|桡侧返动脉
Ulnar recurrent artery|尺侧返动脉
Radial artery|桡动脉
Ulnar artery|尺动脉
Common interosseous artery|骨间总动脉
Anterior interosseous artery|骨间前动脉
Posterior interosseous artery|骨间后动脉
Interosseous recurrent artery|骨间返动脉
Palmar carpal branches|腕掌侧支
Dorsal carpal network|腕背网
Superficial palmar branch of radial artery|桡动脉掌浅支
Superficial palmar arch|掌浅弓
Deep palmar arch|掌深弓
Deep palmar branch of ulnar artery|尺动脉掌深支
Princeps pollicis artery|拇主要动脉
Radialis indicis artery|示指桡侧动脉
Common palmar digital artery|指掌侧总动脉
Proper palmar digital artery|指掌侧固有动脉
Dorsal metacarpal artery|掌背动脉
Dorsal digital artery|指背动脉
Upper limb veins|上肢静脉
Axillary vein|腋静脉
Brachial vein|肱静脉
Radial veins|桡静脉
Ulnar veins|尺静脉
Cephalic vein|头静脉
Basilic vein|贵要静脉
Median cubital vein|肘正中静脉
Median antebrachial vein|前臂正中静脉
Dorsal venous network of hand|手背静脉网
Lower limb vessels|下肢血管
Femoral artery|股动脉
Femoral vein|股静脉
Azygos vein|奇静脉
Cerebral vessels|脑血管
Basilar artery|基底动脉
Anterior cerebral artery|大脑前动脉
Middle cerebral artery|大脑中动脉
Posterior cerebral artery|大脑后动脉
Anterior communicating artery|前交通动脉
Posterior communicating artery|后交通动脉
Superior sagittal sinus|上矢状窦
Straight sinus|直窦
Transverse sinus|横窦
Sigmoid sinus|乙状窦
Iliac, popliteal and saphenous vessels|髂、腘及隐静脉血管
Common iliac artery|髂总动脉
External iliac artery|髂外动脉
Internal iliac artery|髂内动脉
Common iliac vein|髂总静脉
External iliac vein|髂外静脉
Internal iliac vein|髂内静脉
Popliteal artery|腘动脉
Popliteal vein|腘静脉
Great saphenous vein|大隐静脉
Small saphenous vein|小隐静脉
Lymphatic|淋巴
Thoracic duct|胸导管
Cisterna chyli|乳糜池
Nose and paranasal sinuses|鼻及鼻窦
Nasal septum, perpendicular plate of ethmoid|鼻中隔（筛骨垂直板）
Septal cartilage|鼻中隔软骨
Crista galli|鸡冠
Superior nasal concha|上鼻甲
Middle nasal concha|中鼻甲
Inferior nasal concha (mucosa)|下鼻甲（黏膜）
Ethmoid air cells|筛窦气房
Ethmoid bulla|筛泡
Frontal sinus|额窦
Maxillary sinus|上颌窦
Sphenoid sinus|蝶窦
Aryepiglottic fold|杓会厌襞
Thyroid cartilage|甲状软骨
Cricoid cartilage|环状软骨
Arytenoid cartilage|杓状软骨
Epiglottis|会厌
Vocal fold|声襞（声带）
Vestibular fold|前庭襞
Thyrohyoid ligament|甲状舌骨韧带
Cricothyroid ligament|环甲韧带
Trachea and bronchi|气管及支气管
Trachea|气管
Tracheal cartilage ring|气管软骨环
Trachealis muscle|气管肌
Carina|气管隆嵴
Main bronchus|主支气管
Bronchial cartilage|支气管软骨
Superior lobar bronchus|上叶支气管
Middle lobar bronchus|中叶支气管
Lingular bronchus|舌段支气管
Inferior lobar bronchus|下叶支气管
Lungs|肺
Right superior lobe|右上叶
Right middle lobe|右中叶
Right inferior lobe|右下叶
Left superior lobe|左上叶
Lingula|舌叶
Left inferior lobe|左下叶
Pleura|胸膜
Pulmonary arteries, intrapulmonary|肺内肺动脉
Pulmonary veins, intrapulmonary|肺内肺静脉
Alveoli|肺泡
Hilar lymph node|肺门淋巴结
Pulmonary ligament|肺韧带
Diaphragm|横膈膜
Central tendon|中心腱
Right crus|右膈脚
Left crus|左膈脚
Medial arcuate ligament|内侧弓状韧带
Lateral arcuate ligament|外侧弓状韧带
Median arcuate ligament|正中弓状韧带
Caval opening|腔静脉孔
Aortic hiatus|主动脉裂孔
Esophageal hiatus|食管裂孔
Phrenic nerve|膈神经
Single alveolar unit (magnified)|单一肺泡单位（放大）
Terminal bronchiole|终末细支气管
Ciliated epithelium|纤毛上皮
Smooth muscle|平滑肌
Cartilage (ends before the terminal bronchiole)|软骨（止于终末细支气管前）
Respiratory bronchiole|呼吸性细支气管
Alveolar duct|肺泡管
Alveolar sac|肺泡囊
Alveolus|肺泡
Pore of Kohn|肺泡孔（科恩孔）
Pulmonary arteriole|肺小动脉
Pulmonary venule|肺小静脉
Pulmonary capillary network|肺微血管网
Elastic fibres|弹性纤维
Surfactant layer|表面活性物质层
Type I pneumocyte|第一型肺泡细胞
Type II pneumocyte|第二型肺泡细胞
Lamellar bodies|板层小体
Basement membrane|基底膜
Capillary endothelium|微血管内皮
Alveolar macrophage|肺泡巨噬细胞
Red blood cell|红血球
Oxygen diffuses|氧气扩散
Carbon dioxide diffuses|二氧化碳扩散
Lips and vestibule|唇及口腔前庭
Upper lip|上唇
Lower lip|下唇
Labial frenulum|唇系带
Labial and buccal mucosa|唇及颊黏膜
Alveolar mucosa|牙槽黏膜
Parotid papilla|腮腺乳头
Retromolar trigone|磨牙后三角
Oral cavity|口腔
Central incisor|中切牙
Lateral incisor|侧切牙
Canine|犬齿
First premolar|第一前磨牙
Second premolar|第二前磨牙
First molar|第一磨牙
Second molar|第二磨牙
Third molar|第三磨牙（智齿）
Gingiva|牙龈
Floor of the mouth|口底
Hard palate mucosa|硬腭黏膜
Median palatine raphe|腭正中缝
Incisive papilla|切牙乳头
Transverse palatine folds (rugae)|腭横襞（腭皱）
Soft palate|软腭
Palatine aponeurosis|腭腱膜
Uvula|悬雍垂
Fauces and tonsils (Waldeyer's ring)|咽峡及扁桃体（咽淋巴环）
Palatoglossal arch|腭舌弓
Palatopharyngeal arch|腭咽弓
Palatine tonsil|腭扁桃体
Tonsillar crypts|扁桃体隐窝
Tonsillar capsule and fossa|扁桃体被膜及窝
Supratonsillar fossa|扁桃体上窝
Triangular fold|三角襞
Semilunar fold|半月襞
Lingual tonsil|舌扁桃体
Pharyngeal tonsil|咽扁桃体（腺样体）
Pharyngeal bursa|咽囊
Tubal tonsil|咽鼓管扁桃体
Torus tubarius|咽鼓管圆枕
Pharyngeal opening of the auditory tube|咽鼓管咽口
Pharyngeal recess|咽隐窝
Salpingopharyngeal fold|咽鼓管咽襞
Tongue|舌
Tongue, oral part|舌口腔部
Tongue, pharyngeal part|舌咽部
Fungiform papillae|菌状乳头
Vallate papillae|轮廓乳头
Foliate papillae|叶状乳头
Sulcus terminalis|界沟
Foramen cecum|盲孔
Median sulcus of the tongue|舌正中沟
Lingual septum|舌中隔
Median glossoepiglottic fold|舌会厌正中襞
Lateral glossoepiglottic fold|舌会厌外侧襞
Epiglottic vallecula|会厌谷
Lingual frenulum|舌系带
Plica fimbriata|伞襞
Deep lingual vein|舌深静脉
Sublingual caruncle|舌下肉阜
Sublingual fold|舌下襞
Salivary glands|唾液腺
Parotid gland|腮腺
Parotid duct|腮腺管
Submandibular gland|下颌下腺
Submandibular duct|下颌下腺管
Sublingual gland|舌下腺
Pharynx and oesophagus|咽及食管
Pharynx|咽
Esophagus, cervical part|食管颈段
Esophagus, upper thoracic part|食管胸上段
Esophagus, mid-thoracic part|食管胸中段
Esophagus, lower thoracic part|食管胸下段
Esophagus, abdominal part|食管腹段
Esophageal mucosa (longitudinal folds)|食管黏膜（纵襞）
Esophagus, tunica adventitia|食管外膜
Esophagus, abdominal serosa|食管腹段浆膜
Esophagus, longitudinal muscle layer|食管纵行肌层
Esophagus, circular muscle layer|食管环行肌层
Z-line|Z线（食管胃交界线）
Lower oesophageal sphincter|下食管括约肌
Stomach|胃
Stomach, cardia|胃贲门
Stomach, fundus|胃底
Stomach, body|胃体
Stomach, pyloric antrum|胃幽门窦
Stomach, pyloric canal|胃幽门管
Pyloric sphincter|幽门括约肌
Cardiac notch|贲门切迹
Angular incisure|角切迹
Lesser curvature|胃小弯
Greater curvature|胃大弯
Stomach serosa|胃浆膜
Stomach, longitudinal muscle layer|胃纵行肌层
Stomach, circular muscle layer|胃环行肌层
Stomach, oblique muscle layer|胃斜行肌层
Gastric mucosa (rugae)|胃黏膜（胃皱襞）
Left gastric artery|胃左动脉
Right gastric artery|胃右动脉
Left gastro-omental artery|胃网膜左动脉
Right gastro-omental artery|胃网膜右动脉
Short gastric arteries|胃短动脉
Lesser omentum|小网膜
Gastrosplenic ligament|胃脾韧带
Greater omentum|大网膜
Liver, biliary tree, pancreas, spleen|肝、胆道、胰及脾
Liver|肝脏
Gallbladder|胆囊
Cystic duct|胆囊管
Common hepatic duct|肝总管
Common bile duct|胆总管
Pancreas|胰脏
Uncinate process|钩突
Pancreatic duct|胰管
Accessory pancreatic duct|副胰管
Spleen|脾脏
Duodenum|十二指肠
Duodenum, superior part (bulb)|十二指肠上部（球部）
Duodenum, descending part|十二指肠降部
Duodenum, horizontal part|十二指肠水平部
Duodenum, ascending part|十二指肠升部
Duodenal mucosa|十二指肠黏膜
Major duodenal papilla|十二指肠大乳头
Minor duodenal papilla|十二指肠小乳头
Suspensory muscle of duodenum (ligament of Treitz)|十二指肠悬肌（特赖茨韧带）
Jejunum and ileum|空肠及回肠
Jejunum|空肠
Jejunum mucosa (plicae circulares)|空肠黏膜（环状襞）
Ileum|回肠
Ileum mucosa|回肠黏膜
Peyer's patch|培氏斑（集合淋巴小结）
Ileocecal valve|回盲瓣
Root of mesentery|肠系膜根
Jejunal arteries (simple arcades, long vasa recta)|空肠动脉（单层动脉弓，长直血管）
Ileal arteries (multi-tier arcades, short vasa recta)|回肠动脉（多层动脉弓，短直血管）
Mesenteric fat|肠系膜脂肪
Large intestine|大肠
Cecum|盲肠
Vermiform appendix|阑尾
Ascending colon|升结肠
Transverse colon|横结肠
Descending colon|降结肠
Sigmoid colon|乙状结肠
Taenia mesocolica|结肠系膜带
Taenia omentalis|结肠网膜带
Taenia libera|结肠独立带
Omental appendices|肠脂垂
Phrenicocolic ligament|膈结肠韧带
Rectum and anal canal|直肠及肛管
Rectum|直肠
Rectal mucosa|直肠黏膜
Transverse rectal fold (valves of Houston)|直肠横襞（霍斯顿瓣）
Anal canal|肛管
Anal columns|肛柱
Pectinate line|齿状线
Anal pecten|肛梳
Anocutaneous line|肛皮线
Anal verge|肛缘
Internal anal sphincter|肛门内括约肌
External anal sphincter|肛门外括约肌
Puborectalis|耻骨直肠肌
Single tooth (magnified canine, cut lengthwise)|单颗牙齿（放大犬齿纵切）
Enamel|牙釉质
Dentin|牙本质
Dentinal tubules|牙本质小管
Pulp chamber|牙髓腔
Root canal|根管
Cementum|牙骨质
Periodontal ligament|牙周韧带
Alveolar bone|牙槽骨
Cementoenamel junction|牙骨质釉质交界
Apical foramen|根尖孔
Pulp nerve|牙髓神经
Pulp artery|牙髓动脉
Pulp vein|牙髓静脉
Kidneys|肾脏
Renal capsule|肾被膜
Renal cortex|肾皮质
Renal pyramid (medulla)|肾锥体（髓质）
Renal papilla|肾乳头
Minor calyx|肾小盏
Major calyx|肾大盏
Renal pelvis|肾盂
Renal sinus fat|肾窦脂肪
Renal vessels|肾血管
Renal artery|肾动脉
Segmental artery|段动脉
Interlobar artery|叶间动脉
Arcuate artery|弓状动脉
Renal vein|肾静脉
Interlobar vein|叶间静脉
Suprarenal glands|肾上腺
Suprarenal gland|肾上腺
Ureters|输尿管
Ureter, abdominal part|输尿管腹段
Ureter, pelvic part|输尿管盆段
Ureter, intramural part|输尿管壁内段
Ureteric orifice|输尿管口
Bladder|膀胱
Urinary bladder|膀胱
Detrusor muscle|逼尿肌
Bladder mucosa (rugae)|膀胱黏膜（皱襞）
Trigone|膀胱三角
Internal urethral orifice|尿道内口
Internal urethral sphincter|尿道内括约肌
Median umbilical ligament (urachus)|脐正中韧带（脐尿管）
Urethra|尿道
Urethra, prostatic part|尿道前列腺部
Urethra, membranous part|尿道膜部
External urethral sphincter|尿道外括约肌
Scrotum and testis|阴囊及睾丸
Scrotum|阴囊
Median raphe|正中缝
Dartos fascia|肉膜
External spermatic fascia|精索外筋膜
Cremaster muscle|提睾肌
Internal spermatic fascia|精索内筋膜
Tunica vaginalis (parietal layer)|鞘膜（壁层）
Tunica vaginalis (visceral layer)|鞘膜（脏层）
Tunica albuginea|白膜
Testis, parenchyma|睾丸实质
Septula testis|睾丸小隔
Mediastinum testis|睾丸纵隔
Seminiferous tubules|曲细精管
Rete testis|睾丸网
Efferent ductules|输出小管
Epididymis and spermatic cord|副睾及精索
Epididymis, head|副睾头
Epididymis, body|副睾体
Epididymis, tail|副睾尾
Spermatic cord|精索
Testicular artery|睾丸动脉
Pampiniform venous plexus|蔓状静脉丛
Testicular vein|睾丸静脉
Superficial inguinal ring|腹股沟浅环
Deep inguinal ring|腹股沟深环
Inferior epigastric artery|腹壁下动脉
Ductus deferens and seminal vesicles|输精管及精囊
Ductus deferens|输精管
Ampulla of ductus deferens|输精管壶腹
Seminal vesicle|精囊
Ejaculatory duct|射精管
Rectoprostatic fascia (Denonvilliers)|直肠前列腺筋膜（德农维利埃筋膜）
Prostate|前列腺
Prostate, capsule|前列腺被膜
Prostate, peripheral zone|前列腺周边区
Prostate, central zone|前列腺中央区
Prostate, transition zone|前列腺移行区
Anterior fibromuscular stroma|前纤维肌基质
Urethral crest|尿道嵴
Seminal colliculus|精阜
Prostatic utricle|前列腺小囊
Ejaculatory duct opening|射精管开口
Prostatic ductule openings|前列腺小管开口
Perineum|会阴
Perineal membrane|会阴膜
Bulbourethral gland|尿道球腺
Bulbourethral duct|尿道球腺管
Ischiocavernosus|坐骨海绵体肌
Bulbospongiosus|球海绵体肌
Penis|阴茎
Crus of penis|阴茎脚
Bulb of penis|阴茎球
Corpus cavernosum|阴茎海绵体
Corpus spongiosum|尿道海绵体
Septum pectiniforme|梳状中隔
Deep artery of penis|阴茎深动脉
Buck's fascia|阴茎深筋膜（巴克筋膜）
Deep dorsal vein of penis|阴茎背深静脉
Dorsal artery of penis|阴茎背动脉
Dorsal nerve of penis|阴茎背神经
Glans penis|龟头
Corona glandis|冠状沟
Neck of glans|龟头颈
External urethral orifice|尿道外口
Penile skin|阴茎皮肤
Prepuce (foreskin)|包皮
Male urethra|男性尿道
Urethra, spongy part (bulbar)|尿道海绵体部（球部）
Urethra, spongy part (penile)|尿道海绵体部（阴茎部）
Navicular fossa|舟状窝
Eye|眼
Sclera (eyeball)|巩膜（眼球）
Choroid|脉络膜
Retina|视网膜
Cornea|角膜
Iris|虹膜
Pupil|瞳孔
Lens|晶状体
Suspensory ligament of lens|晶状体悬韧带
Vitreous body|玻璃体
Lacrimal gland|泪腺
Common tendinous ring|总腱环
Trochlea|滑车
Ear|耳
Auricle|耳廓
External acoustic meatus|外耳道
Tympanic membrane|鼓膜
Tympanic cavity|鼓室
Malleus|锤骨
Incus|砧骨
Stapes|镫骨
Vestibule|前庭
Anterior semicircular canal|前半规管
Posterior semicircular canal|后半规管
Lateral semicircular canal|外侧半规管
Cochlea|耳蜗
Pharyngotympanic (auditory) tube|咽鼓管（耳咽管）
Thyroid gland, right lobe|甲状腺右叶
Thyroid gland, left lobe|甲状腺左叶
Isthmus of thyroid gland|甲状腺峡部
Pyramidal lobe|锥状叶
Parathyroid glands, superior pair|上副甲状腺
Parathyroid glands, inferior pair|下副甲状腺
Thymus|胸腺
Face, jaw, orbit and larynx|面、颌、眼眶及喉
Infraorbital nerve|眶下神经
Zygomatic nerve|颧神经
Superior alveolar nerves|上牙槽神经
Pterygopalatine ganglion|翼腭神经节
Inferior alveolar nerve|下牙槽神经
Mental nerve|颏神经
Lingual nerve|舌神经
Buccal nerve|颊神经
Auriculotemporal nerve|耳颞神经
Masseteric nerve|咬肌神经
Mylohyoid nerve|下颌舌骨肌神经
Deep temporal nerves|颞深神经
Frontal nerve|额神经
Lacrimal nerve|泪腺神经
Ciliary ganglion|睫状神经节
Short ciliary nerves|睫状短神经
Superior laryngeal nerve|喉上神经
Recurrent laryngeal nerve|喉返神经
Ansa cervicalis|颈襻
Lesser occipital nerve|枕小神经
Great auricular nerve|耳大神经
Transverse cervical nerve|颈横神经
Supraclavicular nerves|锁骨上神经
Cochlear root (CN VIII)|蜗神经根（第八对脑神经）
Vestibular root (CN VIII)|前庭神经根（第八对脑神经）
Cerebrum|大脑
Cerebral cortex|大脑皮质
Cerebral white matter|大脑白质
Deep structures|深部结构
Corpus callosum|胼胝体
Septum pellucidum|透明隔
Fornix|穹窿
Anterior commissure|前连合
Thalamus|丘脑
Pulvinar|丘脑枕
Lateral geniculate body|外侧膝状体
Interthalamic adhesion|丘脑间联合
Hypothalamus|下丘脑
Mammillary body|乳头体
Subthalamic nucleus|丘脑底核
Pineal gland|松果体
Infundibulum|漏斗
Adenohypophysis|腺垂体
Neurohypophysis|神经垂体
Optic chiasm|视交叉
Optic tract|视束
Caudate nucleus|尾状核
Putamen|壳核
Globus pallidus|苍白球
Amygdala|杏仁核
Hippocampus|海马体
Internal capsule|内囊
Ventricular system|脑室系统
Lateral ventricle|侧脑室
3rd ventricle|第三脑室
Interventricular foramen|室间孔
Cerebral aqueduct|中脑导水管
4th ventricle|第四脑室
Choroid plexus|脉络丛
Central canal|中央管
Brainstem and cerebellum|脑干及小脑
Midbrain|中脑
Cerebral peduncle|大脑脚
Superior colliculus|上丘
Inferior colliculus|下丘
Brachium of inferior colliculus|下丘臂
Pons|脑桥
Medulla oblongata|延髓
Pyramid|锥体
Cerebellum|小脑
Cranial nerves|脑神经
Olfactory nerve (CN I)|嗅神经（第一对脑神经）
Optic nerve (CN II)|视神经（第二对脑神经）
Oculomotor nerve (CN III)|动眼神经（第三对脑神经）
Trochlear nerve (CN IV)|滑车神经（第四对脑神经）
Trigeminal nerve (CN V)|三叉神经（第五对脑神经）
Abducens nerve (CN VI)|外展神经（第六对脑神经）
Facial nerve (CN VII)|面神经（第七对脑神经）
Vestibulocochlear nerve (CN VIII)|前庭蜗神经（第八对脑神经）
Glossopharyngeal nerve (CN IX)|舌咽神经（第九对脑神经）
Vagus nerve (CN X)|迷走神经（第十对脑神经）
Accessory nerve (CN XI)|副神经（第十一对脑神经）
Hypoglossal nerve (CN XII)|舌下神经（第十二对脑神经）
Spinal cord and spinal nerves|脊髓及脊神经
Spinal cord|脊髓
Dura mater|硬脑膜
Filum terminale|终丝
Cauda equina|马尾
Dorsal root ganglion|背根神经节
Spinal nerve|脊神经
Intercostal nerve|肋间神经
Brachial plexus and arm|臂丛及上臂
Brachial plexus, C5 root|臂丛（C5 神经根）
Upper trunk|上干
Middle trunk|中干
Lower trunk|下干
Anterior division|前股
Posterior division|后股
Lateral cord|外侧束
Medial cord|内侧束
Posterior cord|后束
Musculocutaneous nerve|肌皮神经
Axillary nerve|腋神经
Radial nerve|桡神经
Median nerve|正中神经
Ulnar nerve|尺神经
Dorsal scapular nerve|肩胛背神经
Long thoracic nerve|胸长神经
Suprascapular nerve|肩胛上神经
Nerve to subclavius|锁骨下肌神经
Lateral pectoral nerve|胸外侧神经
Medial pectoral nerve|胸内侧神经
Superior subscapular nerve|肩胛下上神经
Thoracodorsal nerve|胸背神经
Inferior subscapular nerve|肩胛下下神经
Medial cutaneous nerve of arm|臂内侧皮神经
Medial cutaneous nerve of forearm|前臂内侧皮神经
Intercostobrachial nerve|肋间臂神经
Posterior cutaneous nerve of arm|臂后皮神经
Inferior lateral cutaneous nerve of arm|臂下外侧皮神经
Posterior cutaneous nerve of forearm|前臂后皮神经
Forearm and hand nerves|前臂及手的神经
Superficial branch of radial nerve|桡神经浅支
Deep branch of radial nerve|桡神经深支
Anterior interosseous nerve|骨间前神经
Palmar branch of median nerve|正中神经掌支
Dorsal branch of ulnar nerve|尺神经背支
Palmar branch of ulnar nerve|尺神经掌支
Leg|下肢
Lumbosacral plexus|腰骶丛
Femoral nerve|股神经
Saphenous nerve|隐神经
Sciatic nerve|坐骨神经
Tibial nerve|胫神经
Common fibular nerve|腓总神经
Deep fibular nerve|腓深神经
Superficial fibular nerve|腓浅神经
Medial sural cutaneous nerve|腓肠内侧皮神经
Lateral sural cutaneous nerve|腓肠外侧皮神经
Sural communicating nerve|腓肠交通神经
Sural nerve|腓肠神经
Head and neck nodes|头颈部淋巴结
Occipital lymph nodes|枕淋巴结
Post-auricular (mastoid) lymph nodes|耳后（乳突）淋巴结
Pre-auricular and parotid lymph nodes|耳前及腮腺淋巴结
Submental lymph nodes|颏下淋巴结
Submandibular lymph nodes|下颌下淋巴结
Superficial cervical lymph nodes|颈浅淋巴结
Deep cervical lymph nodes|颈深淋巴结
Posterior triangle (accessory) lymph nodes|颈后三角（副神经）淋巴结
Supraclavicular lymph nodes|锁骨上淋巴结
Pretracheal and paratracheal lymph nodes|气管前及气管旁淋巴结
Thorax and upper limb nodes|胸部及上肢淋巴结
Parasternal (internal thoracic) lymph nodes|胸骨旁（胸廓内）淋巴结
Anterior mediastinal lymph nodes|纵隔前淋巴结
Tracheobronchial lymph nodes|气管支气管淋巴结
Subcarinal lymph nodes|隆嵴下淋巴结
Axillary lymph nodes, pectoral, central and apical groups|腋淋巴结（胸肌群、中央群及尖群）
Epitrochlear lymph nodes|滑车上淋巴结
Abdominal and pelvic nodes|腹部及盆腔淋巴结
Para-aortic (lumbar) lymph nodes|主动脉旁（腰）淋巴结
Coeliac lymph nodes|腹腔淋巴结
Superior mesenteric lymph nodes|肠系膜上淋巴结
Inferior mesenteric lymph nodes|肠系膜下淋巴结
Mesenteric lymph nodes (jejunal and ileal)|肠系膜淋巴结（空肠及回肠）
Colic lymph nodes|结肠淋巴结
Gastric lymph nodes|胃淋巴结
Hepatic lymph nodes (porta hepatis)|肝淋巴结（肝门）
Splenic hilar lymph nodes|脾门淋巴结
Common iliac lymph nodes|髂总淋巴结
External iliac lymph nodes|髂外淋巴结
Internal iliac lymph nodes|髂内淋巴结
Lower limb nodes|下肢淋巴结
Superficial inguinal lymph nodes|腹股沟浅淋巴结
Deep inguinal lymph nodes|腹股沟深淋巴结
Popliteal lymph nodes|腘淋巴结
Lymphatic vessels, trunks and ducts|淋巴管、淋巴干及淋巴导管
Lymphatic vessels, deep cervical chain|淋巴管（颈深链）
Jugular trunk|颈干
Subclavian trunk|锁骨下干
Bronchomediastinal trunk|支气管纵隔干
Right lymphatic duct|右淋巴导管
Lumbar trunk|腰干
Intestinal trunk|肠干
Lymphatic vessels, iliac and inguinal chain|淋巴管（髂及腹股沟链）
Lymphatic vessels, mesenteric (lacteals)|淋巴管（肠系膜，乳糜管）
Lymphatic vessels, collecting vessels of the arm|淋巴管（上肢收集管）
Lymphatic vessels, collecting vessels of the leg|淋巴管（下肢收集管）
Vertebra|椎骨
Intervertebral disc|椎间盘
Rib|肋骨
Sacrum|骶骨
Coccyx|尾骨
Magnified|放大
Magnified tooth|放大牙齿
Xiphoid process|剑突
Sternoclavicular joint|胸锁关节
Sphenosquamous suture|蝶鳞缝
Occipitomastoid suture|枕乳缝
External occipital crest|枕外嵴
basilar part|基底部
body|体
petrous part|岩部
Occipital bone|枕骨
Parietal foramen|顶孔
Mastoid notch|乳突切迹
Supra-orbital notch (foramen)|眶上切迹（孔）
Zygomatic process of frontal bone|额骨颧突
Zygomaticofacial foramen|颧面孔
zygomatic process of temporal bone|颞骨颧突
temporal process of zygomatic bone|颧骨颞突
frontal process|额突
Infra-orbital foramen|眶下孔
Posterior nasal aperture (choana)|后鼻孔
medial plate|内侧板
lateral plate|外侧板
Pterygoid hamulus|翼钩
ramus|下颌支
condylar process|髁突
coronoid process|冠突
angle|角
Mental foramen|颏孔
mental tubercle|颏结节
mental protuberance|颏隆凸
Piriform (nasal) aperture|梨状孔（鼻前孔）
anterior nasal spine|前鼻棘
maxillary|上颌
mandibular|下颌
Hyoid bone|舌骨
supraspinous fossa|冈上窝
infraspinous fossa (subscapular fossa in front)|冈下窝（前方为肩胛下窝）
lateral border|外侧缘
medial border|内侧缘
superior border|上缘
superior angle|上角
inferior angle|下角
suprascapular notch|肩胛上切迹
supraglenoid tubercle|盂上结节
infraglenoid tubercle|盂下结节
greater scapular (spinoglenoid) notch|肩胛大切迹（冈盂切迹）
Elbow joint|肘关节
Ulna|尺骨
Radius|桡骨
Hamate, hook|钩骨钩
hook|钩
tubercle|结节
Wrist (radiocarpal) joint|腕（桡腕）关节
Metacarpal I|第一掌骨
Metacarpal II|第二掌骨
Metacarpal III|第三掌骨
Metacarpal IV|第四掌骨
Metacarpal V|第五掌骨
proximal|近节
middle|中节
distal|远节
thumb|拇指
index|食指
ring|无名指
little|小指
great toe|大趾
second toe|第二趾
third toe|第三趾
fourth toe|第四趾
little toe|小趾
Pubic symphysis|耻骨联合
Knee cartilage|膝关节软骨
Tibia|胫骨
Fibula|腓骨
Ankle cartilage|踝关节软骨
posterior process|后突
sustentaculum tali|载距突
fibular trochlea|腓骨滑车
medial tubercle|内侧结节
lateral tubercle|外侧结节
tuberosity|粗隆
Metatarsal I|第一跖骨
Metatarsal II|第二跖骨
Metatarsal III|第三跖骨
Metatarsal IV|第四跖骨
Metatarsal V|第五跖骨
Cribriform plate of ethmoid|筛骨筛板
Greater alar cartilage|鼻翼大软骨
Lateral nasal cartilage|鼻外侧软骨
clavicular part|锁骨部
acromial part|肩峰部
spinal part|脊柱部
long head|长头
short head|短头
lateral head|外侧头
medial head|内侧头
tendon|肌腱
tendon of long head|长头腱
tendon of insertion|止点腱
Sartorius, gracilis and semitendinosus (pes anserinus)|缝匠肌、股薄肌及半腱肌（鹅足）
tendon (behind medial malleolus to navicular tuberosity)|肌腱（经内踝后方至舟骨粗隆）
tendon (groove on talus, under sustentaculum tali)|肌腱（经距骨沟及载距突下方）
tendon (hooks round the pterygoid hamulus)|肌腱（绕过翼钩）
tendinous intersection|腱划
Linea alba|白线
descending part|降部
transverse part|横部
ascending part|升部
sternocostal part|胸肋部
abdominal part|腹部
iliocostalis|髂肋肌
longissimus|最长肌
spinalis|棘肌
anterior belly|前腹
posterior belly|后腹
inferior belly|下腹
superior belly|上腹
intermediate tendon|中间腱
sternal head|胸骨头
clavicular head|锁骨头
vertical part|垂直部
superior oblique part|上斜部
inferior oblique part|下斜部
Anterior papillary muscle|前乳头肌
Posterior papillary muscle|后乳头肌
left ventricle|左心室
right ventricle|右心室
Sinoatrial (SA) node, primary pacemaker|窦房结（主要起搏点）
Internodal pathways|结间束
Atrioventricular (AV) node|房室结
Atrioventricular bundle (bundle of His)|房室束（希氏束）
Bundle branch|束支
Purkinje fibres|浦肯野纤维
dorsal carpal branch|腕背支
Esophageal artery (from aorta)|食管动脉（源自主动脉）
Celiac trunk|腹腔干
Splenic artery|脾动脉
Hepatic artery|肝动脉
Superior mesenteric artery|肠系膜上动脉
Superior mesenteric vein|肠系膜上静脉
Splenic vein|脾静脉
Portal vein|门静脉
Ileocolic artery|回结肠动脉
Appendicular artery|阑尾动脉
Middle colic artery|中结肠动脉
Colic artery|结肠动脉
Inferior mesenteric artery|肠系膜下动脉
Sigmoid arteries|乙状结肠动脉
Superior rectal artery|直肠上动脉
cricothyroid branch|环甲支
parietal branch|顶支
Superior lobar bronchus and segmental bronchi|上叶支气管及肺段支气管
Middle lobar bronchus and segmental bronchi|中叶支气管及肺段支气管
Inferior lobar bronchus and segmental bronchi|下叶支气管及肺段支气管
Lingular bronchus and segmental bronchi|舌段支气管及肺段支气管
Lateral nasal wall (mucosa)|鼻腔外侧壁（黏膜）
Superior meatus (posterior ethmoid cells open here)|上鼻道（后筛窦开口于此）
Middle meatus (frontal, maxillary and anterior ethmoid sinuses open here)|中鼻道（额窦、上颌窦及前筛窦开口于此）
Inferior meatus (nasolacrimal duct opens here)|下鼻道（鼻泪管开口于此）
Opening of the nasolacrimal duct|鼻泪管开口
Maxillary sinus opening (ostium)|上颌窦开口
Sphenoethmoidal recess (sphenoid sinus opens here)|蝶筛隐窝（蝶窦开口于此）
Olfactory region (olfactory epithelium on the roof)|嗅区（顶部的嗅上皮）
Floor of the nasal cavity (mucosa over the hard palate)|鼻腔底（硬腭上的黏膜）
Nasal vestibule (skin-lined entrance)|鼻前庭（皮肤覆盖的入口）
Vibrissae (nasal hairs that filter dust)|鼻毛（过滤尘埃）
Vocal process of the arytenoid|杓状软骨声带突
Muscular process of the arytenoid|杓状软骨肌突
Corniculate cartilage|小角软骨
Laryngeal ventricle|喉室
Vallate (circumvallate) papillae|轮廓乳头
Lower oesophageal (gastro-oesophageal) sphincter|下食管（胃食管）括约肌
Gastric mucosa (rugae; Magenstrasse along the lesser curvature)|胃黏膜（胃皱襞；沿胃小弯的胃道）
Gastro-omental (gastroepiploic) artery|胃网膜动脉
Gastro-omental (gastroepiploic) veins|胃网膜静脉
hooding fold|罩襞
longitudinal fold|纵襞
Transverse rectal fold (valve of Houston, upper)|直肠横襞（霍斯顿瓣，上）
Transverse rectal fold (valve of Houston, middle)|直肠横襞（霍斯顿瓣，中）
Transverse rectal fold (valve of Houston, lower)|直肠横襞（霍斯顿瓣，下）
Pectinate (dentate) line with anal valves and crypts|齿状线（连肛瓣及肛隐窝）
Anal verge and perianal skin|肛缘及肛周皮肤
deep part (voluntary)|深部（随意肌）
superficial part (voluntary)|浅部（随意肌）
subcutaneous part (voluntary)|皮下部（随意肌）
Nasopharynx (behind the nose, above the soft palate; holds the pharyngeal tonsil and the auditory tube openings)|鼻咽（位于鼻后、软腭之上，含咽扁桃体及咽鼓管开口）
Oropharynx (behind the mouth, from the soft palate to the tip of the epiglottis; holds the palatine tonsils)|口咽（位于口后，由软腭至会厌尖，含腭扁桃体）
Laryngopharynx (hypopharynx, from the epiglottis to the cricoid cartilage; the piriform recesses lie beside the larynx)|喉咽（下咽，由会厌至环状软骨，梨状隐窝位于喉两侧）
superficial part|浅部
deep part|深部
deep part (behind the mandibular ramus)|深部（位于下颌支后方）
upper|上
lower|下
Uterus (womb)|子宫
Endometrium|子宫内膜
Myometrium|子宫肌层
Perimetrium|子宫外膜
Cervix|子宫颈
Cervical canal|子宫颈管
Vagina|阴道
Vaginal opening|阴道口
Ovary|卵巢
Fallopian tube|输卵管
Fimbriae|输卵管伞
Ovarian follicle|卵巢滤泡
Ovarian vessels|卵巢血管
Dominant (Graafian) follicle|优势（格拉夫）滤泡
Corpus luteum|黄体
Released oocyte|排出的卵母细胞
Labia majora|大阴唇
Labia minora|小阴唇
Clitoris|阴蒂
Urethral opening (female)|尿道口（女性）
Breast adipose tissue|乳房脂肪组织
Lactiferous ducts|输乳管
Breast lobe and lobule|乳腺叶及小叶
Acini (milk-producing alveoli)|腺泡（分泌乳汁的肺泡）
Fibrous connective tissue (breast, right)|纤维结缔组织（右乳）
Fibrous connective tissue (breast, left)|纤维结缔组织（左乳）
Retromammary space and pectoral fascia|乳房后间隙及胸筋膜
Montgomery's glands|蒙哥马利腺
Internal thoracic artery branches|胸廓内动脉分支
Lateral thoracic artery branches|胸外侧动脉分支
Intercostal nerve branches|肋间神经分支
Axillary lymph nodes|腋淋巴结
Nipple|乳头
Areola|乳晕
Cooper's ligaments|库珀韧带（乳房悬韧带）
Axillary tail of breast|乳房腋尾
Breast lymphatic vessel|乳房淋巴管
Sympathetic trunk|交感神经干
Sympathetic ganglion|交感神经节
inferior horn|下角
Olfactory nerve (CN I)|嗅神经（第一对脑神经）
ganglion|神经节
ophthalmic division V1|眼支（V1）
maxillary division V2|上颌支（V2）
mandibular division V3|下颌支（V3）
Trigeminal nerve (CN V, ganglion)|三叉神经节
Spinal cord, white matter|脊髓白质
Spinal cord, grey matter (butterfly)|脊髓灰质（蝶形）
white matter|白质
grey matter (butterfly)|灰质（蝶形）
Cauda equina, spinal nerve Co1|马尾（尾神经 Co1）
Dorsal root ganglion Co1|背根神经节 Co1
root|神经根
medial root|内侧根
digital branch to thumb|拇指指支
digital branch to index finger|食指指支
digital branch to middle finger|中指指支
digital branch to ring finger (lateral half)|无名指指支（外侧半）
digital branch to ring finger (medial half)|无名指指支（内侧半）
digital branch to little finger|小指指支
L4–L5 roots|L4–L5 神经根
S1–S3 roots|S1–S3 神经根
inferior dental branches|下牙支
internal branch (sensory)|内支（感觉）
external branch (motor to cricothyroid)|外支（运动，支配环甲肌）
superior root (C1)|上根（C1）
inferior root (C2–C3)|下根（C2–C3）
branch to infrahyoid muscles|舌骨下肌群支
collecting vessels of the leg, deep|下肢深层收集管
Lymphatic vessels, collecting vessels of the leg, deep|淋巴管（下肢深层收集管）
Trigeminal nerve (CN V, ophthalmic division V1)|三叉神经眼支（V1）
Trigeminal nerve (CN V, maxillary division V2)|三叉神经上颌支（V2）
Trigeminal nerve (CN V, mandibular division V3)|三叉神经下颌支（V3）
Trigeminal nerve (CN V, ganglion)|三叉神经节（第五对脑神经）
Brachial plexus|臂丛
Magnified: Oxygen diffuses from the alveolus into the blood|放大：氧气由肺泡扩散入血液
Magnified: Carbon dioxide diffuses from the blood into the alveolus|放大：二氧化碳由血液扩散入肺泡
Magnified tooth: Gingiva (gum), with the gingival sulcus at the neck|放大：牙龈（连牙颈处龈沟）
Skin|皮肤
Skeletal|骨骼系统
Muscular|肌肉系统
Circulatory|循环系统
Respiratory|呼吸系统
Digestive|消化系统
Urinary|泌尿系统
Reproductive|生殖系统
Eye and ear|眼及耳
Thyroid and parathyroid|甲状腺及副甲状腺
Nervous|神经系统
Lymphatic|淋巴系统
Endocrine|内分泌系统
Special senses|特殊感觉
Superficial veins|浅静脉
Investing fascia|包被筋膜
Superficial muscles|浅层肌肉
Second muscle group|第二肌群
Intermediate muscles|中层肌肉
Deep muscles|深层肌肉
Deepest muscles|最深层肌肉
Visceral coverings|内脏被覆
Anterior organs|前部器官
Deep organs|深部器官
Deep nerves and vessels|深部神经及血管
Capsules and ligaments|被膜及韧带
Bones and cartilage|骨骼及软骨
`;

  const exact = new Map(), low = new Map();
  TERMS.split('\n').forEach(l => {
    l = l.trim(); const i = l.indexOf('|'); if (i < 1) return;
    const e = l.slice(0, i).trim(), z = l.slice(i + 1).trim(); exact.set(e, z); low.set(e.toLowerCase(), z);
  });
  const get = s => exact.get(s) || low.get(s.toLowerCase());
  const SIDE = { left: '左', right: '右' };

  function tr(s) {
    s = s.trim(); if (!s) return null;
    let z = get(s); if (z) return z;
    let m;
    // "Magnified: X" and "Magnified tooth: X"
    m = s.match(/^Magnified(?: tooth)?:\s+(.+)$/); if (m) { const b = tr(m[1]); if (b) return '放大：' + b; }
    // nerve roots such as "C6 root"
    m = s.match(/^([CTLS]\d+)\s+root$/); if (m) return m[1] + ' 神经根';
    // tooth position: "Canine, maxillary (right, #13)"
    m = s.match(/^(.+?)\s+\((left|right),\s*#(\d+)\)$/i); if (m) { const b = tr(m[1]); if (b) return SIDE[m[2].toLowerCase()] + b + ' #' + m[3]; }
    // side inside the parentheses: "Vagus nerve (CN X, left)"
    m = s.match(/^(.+?)\s+\((.+?),\s*(left|right)\)$/i); if (m) { const b = tr(m[1] + ' (' + m[2] + ')') || tr(m[1]); if (b) return SIDE[m[3].toLowerCase()] + b; }
    // numbers and codes at the end: "Rib 1", "Vertebra L5", "Intervertebral disc L5/S1"
    m = s.match(/^(.*?)\s+((?:[CTLS]\d+(?:\/[CTLS]\d+)?)|\d+(?:[–-]\d+)?)$/); if (m) { const b = tr(m[1]); if (b) return b + ' ' + m[2]; }
    // side markers: "Left X", "X (left)", "X, left"
    m = s.match(/^(Left|Right)\s+(.+)$/i); if (m) { const b = tr(m[2]); if (b) return SIDE[m[1].toLowerCase()] + b; }
    m = s.match(/^(.+?),?\s+\((left|right)\)$/i) || s.match(/^(.+?),\s+(left|right)$/i); if (m) { const b = tr(m[1]); if (b) return SIDE[m[2].toLowerCase()] + b; }
    // trailing parenthetical: "X (Y)" keeps X alone when Y has no entry
    m = s.match(/^(.+?)\s+\((.+)\)$/); if (m) { const b = tr(m[1]), q = tr(m[2]); if (b && q) return b + '（' + q + '）'; if (b) return b; }
    // "Base, qualifier"
    const i = s.indexOf(', ');
    if (i > 0) { const b = tr(s.slice(0, i)), q = tr(s.slice(i + 2)); if (b && q) return b + '，' + q; }
    return null;
  }

  const cache = new Map();
  const zh = en => { if (!en) return null; if (!cache.has(en)) cache.set(en, tr(en)); return cache.get(en); };
  const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // PACK is this pack's id. KEY holds the chosen language: 'zh-Hant', 'zh-Hans' or 'en'. Chinese labels are on only when the choice is this pack.
  const PACK = 'zh-Hans', KEY = 'anatomy-lang';
  let on = true;
  try { const s = localStorage.getItem(KEY); on = s ? s === PACK : localStorage.getItem('anatomy-zh-hant') !== 'off'; } catch (e) { }

  const style = document.createElement('style');
  style.textContent = `
  .zh{display:none;margin-left:.4em;font-family:"PingFang SC","Microsoft YaHei","Noto Sans SC","Noto Sans HK",sans-serif;font-size:.94em;font-weight:400;letter-spacing:.02em;color:var(--color-neutral-700,#6b6458)}
  body.zh-on .zh{display:inline}
  body.zh-on [data-zh]::after{content:" " attr(data-zh);font-family:"PingFang SC","Microsoft YaHei","Noto Sans SC","Noto Sans HK",sans-serif;font-weight:400;font-size:.94em;letter-spacing:.02em;opacity:.85}
  #tip[data-zh]::after{display:block;margin-top:2px}
  #langsw{margin:12px 0 10px}
  #langsw .lh{font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--color-neutral-700,#6b6458);margin-bottom:4px}
  #langsw [role=radiogroup]{display:flex;flex-direction:column;border:1px solid var(--color-accent-500);border-radius:var(--radius-md,4px);overflow:hidden}
  #langsw .lo{display:flex;align-items:baseline;gap:8px;width:100%;text-align:left;font:inherit;font-size:13px;color:var(--color-accent-700);background:transparent;border:0;padding:6px 10px 6px 26px;cursor:pointer;position:relative}
  #langsw .lo+.lo{border-top:1px solid var(--color-accent-200)}
  #langsw .lo::before{content:"";position:absolute;left:9px;top:50%;width:9px;height:9px;margin-top:-5px;border:1px solid var(--color-accent-500);border-radius:50%;box-sizing:border-box}
  #langsw .lo:hover:not(:disabled){background:var(--color-accent-100)}
  #langsw .lo.on{background:var(--color-accent-200);font-weight:600}
  #langsw .lo.on::before{background:var(--color-accent-700);border-color:var(--color-accent-700)}
  #langsw .lo:disabled{cursor:not-allowed;color:var(--color-neutral-700,#6b6458);opacity:.6}
  #langsw .lz{font-family:"PingFang SC","Microsoft YaHei","Noto Sans SC","Noto Sans HK",sans-serif;font-size:.94em}
  #langsw .lp{margin-left:auto;font-size:10px;letter-spacing:.08em;text-transform:uppercase}`;
  document.head.appendChild(style);
  document.body.classList.toggle('zh-on', on);

  window.__zh = {
    pack: PACK,
    zh,
    // html to place after a name that is built with innerHTML; empty when there is no Chinese name
    tag: en => { const z = zh(en); return z ? ' <span class="zh" lang="' + PACK + '">' + esc(z) + '</span>' : ''; },
    // for an element whose text is set with textContent: the Chinese name is drawn by CSS and never enters textContent
    set: (el, en) => { const z = zh(en); if (z) { el.dataset.zh = z; el.lang = 'en'; } else delete el.dataset.zh; },
    get on() { return document.body.classList.contains('zh-on'); },
  };

  const lede = document.querySelector('.panel .lede');
  if (lede) {
    // language switch. Choosing the other Chinese pack saves the choice and reloads, because the loader picks one pack per page.
    // LANGS-BEGIN
    const LANGS = [
      { id: 'zh-Hant', label: 'Traditional Chinese', native: '繁體中文' },
      { id: 'en', label: 'English' },
      { id: 'zh-Hans', label: 'Simplified Chinese', native: '简体中文' },
      { id: 'es', label: 'Spanish', native: 'Español' },
      { id: 'la', label: 'Latin', planning: true },
    ];
    // LANGS-END
    const box = document.createElement('div'); box.id = 'langsw';
    box.innerHTML = '<div class="lh" id="langsw-h">Language</div><div role="radiogroup" aria-labelledby="langsw-h">' +
      LANGS.map(l => '<button type="button" role="radio" class="lo" data-l="' + l.id + '" aria-checked="false"' + (l.planning ? ' disabled' : '') + '>' +
        '<span class="ln">' + l.label + '</span>' +
        (l.native ? '<span class="lz" lang="' + l.id + '">' + l.native + '</span>' : '') +
        (l.planning ? '<span class="lp">Planning</span>' : '') + '</button>').join('') + '</div>';
    const paint = () => { const cur = document.body.classList.contains('zh-on') ? PACK : 'en'; box.querySelectorAll('.lo').forEach(o => { const v = o.dataset.l === cur; o.classList.toggle('on', v); o.setAttribute('aria-checked', v); }); };
    box.addEventListener('click', e => {
      const o = e.target.closest('.lo'); if (!o || o.disabled) return;
      const id = o.dataset.l;
      try { localStorage.setItem(KEY, id); } catch (err) { }
      if (id !== 'en' && id !== PACK) { location.reload(); return; }
      document.body.classList.toggle('zh-on', id === PACK); paint();
    });
    paint(); const dsec = document.getElementById('p-tone'), anchor = dsec && dsec.closest('.sec'); (anchor || lede).insertAdjacentElement('afterend', box);
  }
})();
