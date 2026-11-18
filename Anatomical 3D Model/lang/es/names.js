// Spanish (Español) labels. Every structure name, group heading, system and layer shows its Spanish name beside the English one.
// Add or fix a term by editing the TERMS list below: one "English name|nombre en español" per line. Names that are not listed are built from their parts,
// so "Biceps brachii, long head (left)" becomes Bíceps braquial, cabeza larga (izq.). A name with no match shows in English only.
(function () {
  const TERMS = `
Head|Cabeza
Torso|Tronco
Arms and hands|Brazos y manos
Legs and feet|Piernas y pies
Genitals|Genitales
Subcutaneous fat|Grasa subcutánea
Skull|Cráneo
Frontal bone|Hueso frontal
Parietal bone|Hueso parietal
Occipital bone|Hueso occipital
Temporal bone|Hueso temporal
Sphenoid bone|Hueso esfenoides
Zygomatic bone|Hueso cigomático
Zygomatic arch|Arco cigomático
Maxilla|Maxilar
Nasal bone|Hueso nasal
Inferior nasal concha|Cornete nasal inferior
Vomer|Vómer
Hard palate|Paladar duro
Pterygoid process|Apófisis pterigoides
Mandible|Mandíbula
Teeth|Dientes
Hyoid|Hioides
Sutures and landmarks|Suturas y puntos de referencia
Coronal suture|Sutura coronal
Sagittal suture|Sutura sagital
Lambdoid suture|Sutura lambdoidea
Squamous suture|Sutura escamosa
Bregma|Bregma
Lambda|Lambda
Pterion|Pterion
Asterion|Asterion
Glabella|Glabela
Superciliary arch|Arco superciliar
Orbit|Órbita
External occipital protuberance|Protuberancia occipital externa
Superior nuchal line|Línea nucal superior
Inferior nuchal line|Línea nucal inferior
Mastoid process|Apófisis mastoides
Skull base|Base del cráneo
Foramen magnum|Agujero magno
Occipital condyle|Cóndilo occipital
Pharyngeal tubercle|Tubérculo faríngeo
Hypoglossal canal|Conducto del hipogloso
Jugular foramen|Agujero yugular
Carotid canal|Conducto carotídeo
Foramen lacerum|Agujero lacerado
Foramen ovale|Agujero oval
Foramen spinosum|Agujero espinoso
Stylomastoid foramen|Agujero estilomastoideo
Styloid process|Apófisis estiloides
Mandibular fossa|Fosa mandibular
Articular tubercle|Tubérculo articular
Choana|Coana
Incisive fossa|Fosa incisiva
Greater palatine foramen|Agujero palatino mayor
Axial skeleton|Esqueleto axial
Vertebrae C1–L5|Vértebras C1–L5
Intervertebral discs|Discos intervertebrales
Sacrum and coccyx|Sacro y cóccix
Ribs 1–12|Costillas 1–12
Costal cartilage|Cartílago costal
Sternum|Esternón
Shoulder and upper limb|Hombro y miembro superior
Clavicle|Clavícula
Scapula|Escápula
Glenoid cavity|Cavidad glenoidea
Superior transverse ligament of scapula|Ligamento transverso superior de la escápula
Inferior transverse ligament of scapula|Ligamento transverso inferior de la escápula
Acromioclavicular joint|Articulación acromioclavicular
Humerus|Húmero
Radius and ulna|Radio y cúbito
Scaphoid|Escafoides
Lunate|Semilunar
Triquetrum|Piramidal
Pisiform|Pisiforme
Trapezium|Trapecio
Trapezoid|Trapezoide
Capitate|Hueso grande
Hamate|Ganchoso
Metacarpal|Metacarpiano
Finger phalanx|Falange de la mano
Pelvis and lower limb|Pelvis y miembro inferior
Pelvis|Pelvis
Femur|Fémur
Patella|Rótula
Tibia and fibula|Tibia y peroné
Talus|Astrágalo
Calcaneus|Calcáneo
Navicular|Escafoides tarsiano
Medial cuneiform|Cuneiforme medial
Intermediate cuneiform|Cuneiforme intermedio
Lateral cuneiform|Cuneiforme lateral
Cuboid|Cuboides
Metatarsal|Metatarsiano
Toe phalanx|Falange del pie
Sesamoid bones|Huesos sesamoideos
Joint ligaments and menisci|Ligamentos articulares y meniscos
Medial collateral ligament|Ligamento colateral medial
Lateral collateral ligament|Ligamento colateral lateral
Anterior cruciate ligament|Ligamento cruzado anterior
Posterior cruciate ligament|Ligamento cruzado posterior
Medial meniscus|Menisco medial
Lateral meniscus|Menisco lateral
Anterior longitudinal ligament|Ligamento longitudinal anterior
Posterior longitudinal ligament|Ligamento longitudinal posterior
Ligamentum flavum|Ligamento amarillo
Glenoid labrum|Labrum glenoideo
Superior glenohumeral ligament|Ligamento glenohumeral superior
Middle glenohumeral ligament|Ligamento glenohumeral medio
Inferior glenohumeral ligament|Ligamento glenohumeral inferior
Iliofemoral ligament, lateral band|Ligamento iliofemoral, banda lateral
Iliofemoral ligament, medial band|Ligamento iliofemoral, banda medial
Head and face|Cabeza y cara
Orbicularis oculi|Orbicular de los ojos
Orbicularis oris|Orbicular de la boca
Zygomaticus major|Cigomático mayor
Depressor anguli oris|Depresor del ángulo de la boca
Buccinator|Buccinador
Procerus|Prócer
Masseter|Masetero
Temporalis|Temporal
Lateral pterygoid|Pterigoideo lateral
Medial pterygoid|Pterigoideo medial
Superior rectus|Recto superior
Inferior rectus|Recto inferior
Medial rectus|Recto medial
Lateral rectus|Recto lateral
Superior oblique|Oblicuo superior
Inferior oblique|Oblicuo inferior
Levator palpebrae superioris|Elevador del párpado superior
Floor of mouth, tongue and pharynx|Suelo de la boca, lengua y faringe
Digastric|Digástrico
Stylohyoid|Estilohioideo
Mylohyoid|Milohioideo
Geniohyoid|Genihioideo
Genioglossus|Geniogloso
Hyoglossus|Hiogloso
Styloglossus|Estilogloso
Levator veli palatini|Elevador del velo del paladar
Tensor veli palatini|Tensor del velo del paladar
Palatoglossus|Palatogloso
Palatopharyngeus|Palatofaríngeo
Salpingopharyngeus|Salpingofaríngeo
Musculus uvulae|Músculo de la úvula
Pterygomandibular raphe|Rafe pterigomandibular
Superior longitudinal muscle of the tongue|Músculo longitudinal superior de la lengua
Transverse muscle of the tongue|Músculo transverso de la lengua
Vertical muscle of the tongue|Músculo vertical de la lengua
Inferior longitudinal muscle of the tongue|Músculo longitudinal inferior de la lengua
Superior pharyngeal constrictor|Constrictor superior de la faringe
Middle pharyngeal constrictor|Constrictor medio de la faringe
Inferior pharyngeal constrictor|Constrictor inferior de la faringe
Larynx|Laringe
Cricothyroid|Cricotiroideo
Posterior cricoarytenoid|Cricoaritenoideo posterior
Lateral cricoarytenoid|Cricoaritenoideo lateral
Thyroarytenoid|Tiroaritenoideo
Vocalis|Vocal
Transverse arytenoid|Aritenoideo transverso
Oblique arytenoid|Aritenoideo oblicuo
Neck, trunk and shoulder|Cuello, tronco y hombro
Platysma|Platisma
Thyrohyoid|Tirohioideo
Sternothyroid|Esternotiroideo
Splenius capitis|Esplenio de la cabeza
Splenius cervicis|Esplenio del cuello
Nuchal ligament|Ligamento nucal
Semispinalis capitis|Semiespinoso de la cabeza
Rectus capitis posterior major|Recto posterior mayor de la cabeza
Obliquus capitis inferior|Oblicuo inferior de la cabeza
Rectus capitis anterior|Recto anterior de la cabeza
Rectus capitis lateralis|Recto lateral de la cabeza
Longus capitis|Largo de la cabeza
Longus colli|Largo del cuello
Scalenus anterior|Escaleno anterior
Scalenus medius|Escaleno medio
Scalenus posterior|Escaleno posterior
Sternocleidomastoid|Esternocleidomastoideo
Sternohyoid|Esternohioideo
Omohyoid|Omohioideo
Levator scapulae|Elevador de la escápula
Trapezius|Trapecio
Rhomboid minor|Romboides menor
Rhomboid major|Romboides mayor
Pectoralis major|Pectoral mayor
Pectoralis minor|Pectoral menor
Subclavius|Subclavio
Serratus anterior|Serrato anterior
External intercostal|Intercostal externo
Internal intercostal|Intercostal interno
Latissimus dorsi|Dorsal ancho
Teres major|Redondo mayor
Teres minor|Redondo menor
Supraspinatus|Supraespinoso
Infraspinatus|Infraespinoso
Subscapularis|Subescapular
Erector spinae|Erector de la columna
Rectus abdominis|Recto del abdomen
External oblique|Oblicuo externo
External oblique, aponeurosis|Oblicuo externo, aponeurosis
Internal oblique|Oblicuo interno
Transversus abdominis|Transverso del abdomen
Inguinal ligament|Ligamento inguinal
Thoracolumbar fascia|Fascia toracolumbar
Arm|Brazo
Deltoid|Deltoides
Coracobrachialis|Coracobraquial
Biceps brachii|Bíceps braquial
Biceps brachii, tendon|Bíceps braquial, tendón
Bicipital aponeurosis|Aponeurosis bicipital
Brachialis|Braquial
Triceps brachii|Tríceps braquial
Triceps brachii, tendon|Tríceps braquial, tendón
Forearm and hand|Antebrazo y mano
Brachioradialis|Braquiorradial
Pronator teres|Pronador redondo
Flexor carpi radialis|Flexor radial del carpo
Palmaris longus|Palmar largo
Flexor carpi ulnaris|Flexor cubital del carpo
Flexor digitorum superficialis|Flexor superficial de los dedos
Flexor digitorum profundus|Flexor profundo de los dedos
Flexor pollicis longus|Flexor largo del pulgar
Abductor pollicis longus|Abductor largo del pulgar
Extensor carpi radialis longus|Extensor radial largo del carpo
Extensor carpi radialis brevis|Extensor radial corto del carpo
Extensor digitorum (forearm)|Extensor de los dedos (antebrazo)
Flexor retinaculum|Retináculo flexor
Palmar aponeurosis|Aponeurosis palmar
Thenar muscles|Músculos tenares
Supinator|Supinador
Pronator quadratus|Pronador cuadrado
Hip and thigh|Cadera y muslo
Gluteus maximus|Glúteo mayor
Gluteus medius|Glúteo medio
Gluteus minimus|Glúteo menor
Piriformis|Piriforme
Obturator internus|Obturador interno
Gemellus superior|Gemelo superior
Gemellus inferior|Gemelo inferior
Quadratus femoris|Cuadrado femoral
Tensor fasciae latae|Tensor de la fascia lata
Iliotibial tract|Tracto iliotibial
Rectus femoris|Recto femoral
Vastus lateralis|Vasto lateral
Vastus medialis|Vasto medial
Vastus intermedius|Vasto intermedio
Quadriceps tendon|Tendón del cuádriceps
Patellar ligament|Ligamento rotuliano
Sartorius|Sartorio
Gracilis|Grácil
Pectineus|Pectíneo
Adductor longus|Aductor largo
Adductor brevis|Aductor corto
Adductor magnus|Aductor mayor
Biceps femoris, long head|Bíceps femoral, cabeza larga
Biceps femoris, short head|Bíceps femoral, cabeza corta
Semitendinosus|Semitendinoso
Semimembranosus|Semimembranoso
Pes anserinus|Pata de ganso
Leg and foot|Pierna y pie
Gastrocnemius|Gastrocnemio
Soleus|Sóleo
Plantaris|Plantar delgado
Calcaneal (Achilles) tendon|Tendón calcáneo (de Aquiles)
Tibialis anterior|Tibial anterior
Extensor digitorum longus|Extensor largo de los dedos
Extensor hallucis longus|Extensor largo del dedo gordo
Fibularis longus|Peroneo largo
Fibularis brevis|Peroneo corto
Fibularis tertius|Peroneo tercero
Extensor digitorum brevis|Extensor corto de los dedos
Popliteus|Poplíteo
Tibialis posterior|Tibial posterior
Flexor digitorum longus|Flexor largo de los dedos
Flexor hallucis longus|Flexor largo del dedo gordo
Deep fasciae|Fascias profundas
Fascia lata (thigh)|Fascia lata (muslo)
Crural fascia (leg)|Fascia crural (pierna)
Brachial fascia (arm)|Fascia braquial (brazo)
Antebrachial fascia (forearm)|Fascia antebraquial (antebrazo)
Deep cervical fascia (investing layer)|Fascia cervical profunda (lámina de revestimiento)
Pretracheal fascia|Fascia pretraqueal
Prevertebral fascia|Fascia prevertebral
Carotid sheath|Vaina carotídea
Transversalis fascia|Fascia transversal
Rectus sheath, anterior lamina|Vaina del recto, lámina anterior
Rectus sheath, posterior lamina|Vaina del recto, lámina posterior
Posterior abdominal wall, back and pelvic floor|Pared abdominal posterior, espalda y suelo pélvico
Psoas major|Psoas mayor
Iliacus|Ilíaco
Quadratus lumborum|Cuadrado lumbar
Multifidus|Multífido
Transversus thoracis|Transverso del tórax
Pubococcygeus|Pubococcígeo
Iliococcygeus|Iliococcígeo
Head and neck vessels|Vasos de la cabeza y el cuello
Superior thyroid artery|Arteria tiroidea superior
Superior laryngeal artery|Arteria laríngea superior
Lingual artery|Arteria lingual
Facial artery|Arteria facial
Occipital artery|Arteria occipital
Posterior auricular artery|Arteria auricular posterior
Superficial temporal artery|Arteria temporal superficial
Maxillary artery|Arteria maxilar
Middle meningeal artery|Arteria meníngea media
Deep temporal arteries|Arterias temporales profundas
Masseteric artery|Arteria maseterina
Buccal artery|Arteria bucal
Inferior alveolar artery|Arteria alveolar inferior
Posterior superior alveolar artery|Arteria alveolar superior posterior
Infraorbital artery|Arteria infraorbitaria
Sphenopalatine artery|Arteria esfenopalatina
Facial vein|Vena facial
Angular vein|Vena angular
Supraorbital vein|Vena supraorbitaria
Supratrochlear vein|Vena supratroclear
Superior ophthalmic vein|Vena oftálmica superior
Inferior ophthalmic vein|Vena oftálmica inferior
Cavernous sinus|Seno cavernoso
Deep facial vein|Vena facial profunda
Pterygoid plexus|Plexo pterigoideo
Maxillary vein|Vena maxilar
Superficial temporal vein|Vena temporal superficial
Retromandibular vein|Vena retromandibular
External jugular vein|Vena yugular externa
Common facial vein|Vena facial común
Lingual vein|Vena lingual
Inferior alveolar vein|Vena alveolar inferior
Superior thyroid vein|Vena tiroidea superior
Middle thyroid vein|Vena tiroidea media
Inferior thyroid vein|Vena tiroidea inferior
Heart|Corazón
Fibrous pericardium|Pericardio fibroso
Epicardial fat|Grasa epicárdica
Myocardium|Miocardio
Right atrium|Aurícula derecha
Right auricle|Orejuela derecha
Right ventricle|Ventrículo derecho
Left atrium|Aurícula izquierda
Left auricle|Orejuela izquierda
Left ventricle|Ventrículo izquierdo
Interatrial septum|Tabique interauricular
Interventricular septum|Tabique interventricular
Fossa ovalis|Fosa oval
Crista terminalis|Cresta terminal
Musculi pectinati|Músculos pectíneos
Trabeculae carneae|Trabéculas carnosas
Papillary muscle|Músculo papilar
Chordae tendineae|Cuerdas tendinosas
Tricuspid valve|Válvula tricúspide
Mitral valve|Válvula mitral
Aortic valve|Válvula aórtica
Pulmonary valve|Válvula pulmonar
Conus arteriosus|Cono arterioso
Aortic vestibule|Vestíbulo aórtico
Coronary sinus|Seno coronario
Coronary vessels|Vasos coronarios
Right coronary artery|Arteria coronaria derecha
Left coronary artery|Arteria coronaria izquierda
Left anterior descending artery|Arteria descendente anterior izquierda
Circumflex artery|Arteria circunfleja
Great cardiac vein|Vena cardíaca magna
Middle cardiac vein|Vena cardíaca media
Great vessels|Grandes vasos
Ascending aorta|Aorta ascendente
Aortic arch|Arco aórtico
Descending thoracic aorta|Aorta torácica descendente
Abdominal aorta|Aorta abdominal
Brachiocephalic trunk|Tronco braquiocefálico
Pulmonary trunk|Tronco pulmonar
Pulmonary artery|Arteria pulmonar
Ligamentum arteriosum|Ligamento arterioso
Superior pulmonary vein|Vena pulmonar superior
Inferior pulmonary vein|Vena pulmonar inferior
Superior vena cava|Vena cava superior
Inferior vena cava|Vena cava inferior
Left brachiocephalic vein|Vena braquiocefálica izquierda
Right brachiocephalic vein|Vena braquiocefálica derecha
Head, neck and limbs|Cabeza, cuello y extremidades
Common carotid artery|Arteria carótida común
Internal carotid artery|Arteria carótida interna
External carotid artery|Arteria carótida externa
Ascending pharyngeal artery|Arteria faríngea ascendente
Carotid sinus|Seno carotídeo
Carotid body|Glomo carotídeo
Vertebral artery|Arteria vertebral
Subclavian artery|Arteria subclavia
Subclavian vein|Vena subclavia
Internal jugular vein|Vena yugular interna
Upper limb arteries|Arterias del miembro superior
Thyrocervical trunk|Tronco tirocervical
Inferior thyroid artery|Arteria tiroidea inferior
Suprascapular artery|Arteria supraescapular
Transverse cervical artery|Arteria cervical transversa
Dorsal scapular artery|Arteria escapular dorsal
Axillary artery|Arteria axilar
Superior thoracic artery|Arteria torácica superior
Thoracoacromial artery|Arteria toracoacromial
Acromial branch|Rama acromial
Deltoid branch|Rama deltoidea
Pectoral branches|Ramas pectorales
Lateral thoracic artery|Arteria torácica lateral
Subscapular artery|Arteria subescapular
Circumflex scapular artery|Arteria circunfleja escapular
Thoracodorsal artery|Arteria toracodorsal
Anterior circumflex humeral artery|Arteria circunfleja humeral anterior
Posterior circumflex humeral artery|Arteria circunfleja humeral posterior
Brachial artery|Arteria braquial
Deep artery of arm|Arteria braquial profunda
Radial collateral artery|Arteria colateral radial
Middle collateral artery|Arteria colateral media
Superior ulnar collateral artery|Arteria colateral cubital superior
Inferior ulnar collateral artery|Arteria colateral cubital inferior
Radial recurrent artery|Arteria recurrente radial
Ulnar recurrent artery|Arteria recurrente cubital
Radial artery|Arteria radial
Ulnar artery|Arteria cubital
Common interosseous artery|Arteria interósea común
Anterior interosseous artery|Arteria interósea anterior
Posterior interosseous artery|Arteria interósea posterior
Interosseous recurrent artery|Arteria interósea recurrente
Palmar carpal branches|Ramas carpianas palmares
Dorsal carpal network|Red carpiana dorsal
Superficial palmar branch of radial artery|Rama palmar superficial de la arteria radial
Superficial palmar arch|Arco palmar superficial
Deep palmar arch|Arco palmar profundo
Deep palmar branch of ulnar artery|Rama palmar profunda de la arteria cubital
Princeps pollicis artery|Arteria principal del pulgar
Radialis indicis artery|Arteria radial del índice
Common palmar digital artery|Arteria digital palmar común
Proper palmar digital artery|Arteria digital palmar propia
Dorsal metacarpal artery|Arteria metacarpiana dorsal
Dorsal digital artery|Arteria digital dorsal
Upper limb veins|Venas del miembro superior
Axillary vein|Vena axilar
Brachial vein|Vena braquial
Radial veins|Venas radiales
Ulnar veins|Venas cubitales
Cephalic vein|Vena cefálica
Basilic vein|Vena basílica
Median cubital vein|Vena mediana del codo
Median antebrachial vein|Vena mediana del antebrazo
Dorsal venous network of hand|Red venosa dorsal de la mano
Lower limb vessels|Vasos del miembro inferior
Femoral artery|Arteria femoral
Femoral vein|Vena femoral
Azygos vein|Vena ácigos
Cerebral vessels|Vasos cerebrales
Basilar artery|Arteria basilar
Anterior cerebral artery|Arteria cerebral anterior
Middle cerebral artery|Arteria cerebral media
Posterior cerebral artery|Arteria cerebral posterior
Anterior communicating artery|Arteria comunicante anterior
Posterior communicating artery|Arteria comunicante posterior
Superior sagittal sinus|Seno sagital superior
Straight sinus|Seno recto
Transverse sinus|Seno transverso
Sigmoid sinus|Seno sigmoideo
Iliac, popliteal and saphenous vessels|Vasos ilíacos, poplíteos y safenos
Common iliac artery|Arteria ilíaca común
External iliac artery|Arteria ilíaca externa
Internal iliac artery|Arteria ilíaca interna
Common iliac vein|Vena ilíaca común
External iliac vein|Vena ilíaca externa
Internal iliac vein|Vena ilíaca interna
Popliteal artery|Arteria poplítea
Popliteal vein|Vena poplítea
Great saphenous vein|Vena safena magna
Small saphenous vein|Vena safena parva
Lymphatic|Linfático
Thoracic duct|Conducto torácico
Cisterna chyli|Cisterna del quilo
Nose and paranasal sinuses|Nariz y senos paranasales
Nasal septum, perpendicular plate of ethmoid|Tabique nasal, lámina perpendicular del etmoides
Septal cartilage|Cartílago septal
Crista galli|Crista galli
Superior nasal concha|Cornete nasal superior
Middle nasal concha|Cornete nasal medio
Inferior nasal concha (mucosa)|Cornete nasal inferior (mucosa)
Ethmoid air cells|Celdillas etmoidales
Ethmoid bulla|Bulla etmoidal
Frontal sinus|Seno frontal
Maxillary sinus|Seno maxilar
Sphenoid sinus|Seno esfenoidal
Aryepiglottic fold|Pliegue ariepiglótico
Thyroid cartilage|Cartílago tiroides
Cricoid cartilage|Cartílago cricoides
Arytenoid cartilage|Cartílago aritenoides
Epiglottis|Epiglotis
Vocal fold|Pliegue vocal
Vestibular fold|Pliegue vestibular
Thyrohyoid ligament|Ligamento tirohioideo
Cricothyroid ligament|Ligamento cricotiroideo
Trachea and bronchi|Tráquea y bronquios
Trachea|Tráquea
Tracheal cartilage ring|Anillo cartilaginoso traqueal
Trachealis muscle|Músculo traqueal
Carina|Carina
Main bronchus|Bronquio principal
Bronchial cartilage|Cartílago bronquial
Superior lobar bronchus|Bronquio lobar superior
Middle lobar bronchus|Bronquio lobar medio
Lingular bronchus|Bronquio lingular
Inferior lobar bronchus|Bronquio lobar inferior
Lungs|Pulmones
Right superior lobe|Lóbulo superior derecho
Right middle lobe|Lóbulo medio derecho
Right inferior lobe|Lóbulo inferior derecho
Left superior lobe|Lóbulo superior izquierdo
Lingula|Língula
Left inferior lobe|Lóbulo inferior izquierdo
Pleura|Pleura
Pulmonary arteries, intrapulmonary|Arterias pulmonares, intrapulmonares
Pulmonary veins, intrapulmonary|Venas pulmonares, intrapulmonares
Alveoli|Alvéolos
Hilar lymph node|Ganglio linfático hiliar
Pulmonary ligament|Ligamento pulmonar
Diaphragm|Diafragma
Central tendon|Centro tendinoso
Right crus|Pilar derecho
Left crus|Pilar izquierdo
Medial arcuate ligament|Ligamento arqueado medial
Lateral arcuate ligament|Ligamento arqueado lateral
Median arcuate ligament|Ligamento arqueado mediano
Caval opening|Orificio de la vena cava
Aortic hiatus|Hiato aórtico
Esophageal hiatus|Hiato esofágico
Phrenic nerve|Nervio frénico
Single alveolar unit (magnified)|Unidad alveolar individual (ampliada)
Terminal bronchiole|Bronquiolo terminal
Ciliated epithelium|Epitelio ciliado
Smooth muscle|Músculo liso
Cartilage (ends before the terminal bronchiole)|Cartílago (termina antes del bronquiolo terminal)
Respiratory bronchiole|Bronquiolo respiratorio
Alveolar duct|Conducto alveolar
Alveolar sac|Saco alveolar
Alveolus|Alvéolo
Pore of Kohn|Poro de Kohn
Pulmonary arteriole|Arteriola pulmonar
Pulmonary venule|Vénula pulmonar
Pulmonary capillary network|Red capilar pulmonar
Elastic fibres|Fibras elásticas
Surfactant layer|Capa de surfactante
Type I pneumocyte|Neumocito tipo I
Type II pneumocyte|Neumocito tipo II
Lamellar bodies|Cuerpos laminares
Basement membrane|Membrana basal
Capillary endothelium|Endotelio capilar
Alveolar macrophage|Macrófago alveolar
Red blood cell|Glóbulo rojo
Oxygen diffuses|El oxígeno se difunde
Carbon dioxide diffuses|El dióxido de carbono se difunde
Lips and vestibule|Labios y vestíbulo
Upper lip|Labio superior
Lower lip|Labio inferior
Labial frenulum|Frenillo labial
Labial and buccal mucosa|Mucosa labial y bucal
Alveolar mucosa|Mucosa alveolar
Parotid papilla|Papila parotídea
Retromolar trigone|Trígono retromolar
Oral cavity|Cavidad oral
Central incisor|Incisivo central
Lateral incisor|Incisivo lateral
Canine|Canino
First premolar|Primer premolar
Second premolar|Segundo premolar
First molar|Primer molar
Second molar|Segundo molar
Third molar|Tercer molar
Gingiva|Encía
Floor of the mouth|Suelo de la boca
Hard palate mucosa|Mucosa del paladar duro
Median palatine raphe|Rafe palatino medio
Incisive papilla|Papila incisiva
Transverse palatine folds (rugae)|Pliegues palatinos transversos (rugas)
Soft palate|Paladar blando
Palatine aponeurosis|Aponeurosis palatina
Uvula|Úvula
Fauces and tonsils (Waldeyer's ring)|Fauces y amígdalas (anillo de Waldeyer)
Palatoglossal arch|Arco palatogloso
Palatopharyngeal arch|Arco palatofaríngeo
Palatine tonsil|Amígdala palatina
Tonsillar crypts|Criptas amigdalinas
Tonsillar capsule and fossa|Cápsula y fosa amigdalinas
Supratonsillar fossa|Fosa supraamigdalina
Triangular fold|Pliegue triangular
Semilunar fold|Pliegue semilunar
Lingual tonsil|Amígdala lingual
Pharyngeal tonsil|Amígdala faríngea
Pharyngeal bursa|Bolsa faríngea
Tubal tonsil|Amígdala tubárica
Torus tubarius|Torus tubárico
Pharyngeal opening of the auditory tube|Orificio faríngeo de la trompa auditiva
Pharyngeal recess|Receso faríngeo
Salpingopharyngeal fold|Pliegue salpingofaríngeo
Tongue|Lengua
Tongue, oral part|Lengua, porción oral
Tongue, pharyngeal part|Lengua, porción faríngea
Fungiform papillae|Papilas fungiformes
Vallate papillae|Papilas caliciformes
Foliate papillae|Papilas foliadas
Sulcus terminalis|Surco terminal
Foramen cecum|Foramen ciego
Median sulcus of the tongue|Surco medio de la lengua
Lingual septum|Tabique lingual
Median glossoepiglottic fold|Pliegue gloso-epiglótico medio
Lateral glossoepiglottic fold|Pliegue gloso-epiglótico lateral
Epiglottic vallecula|Vallécula epiglótica
Lingual frenulum|Frenillo lingual
Plica fimbriata|Pliegue fimbriado
Deep lingual vein|Vena lingual profunda
Sublingual caruncle|Carúncula sublingual
Sublingual fold|Pliegue sublingual
Salivary glands|Glándulas salivales
Parotid gland|Glándula parótida
Parotid duct|Conducto parotídeo
Submandibular gland|Glándula submandibular
Submandibular duct|Conducto submandibular
Sublingual gland|Glándula sublingual
Pharynx and oesophagus|Faringe y esófago
Pharynx|Faringe
Esophagus, cervical part|Esófago, porción cervical
Esophagus, upper thoracic part|Esófago, porción torácica superior
Esophagus, mid-thoracic part|Esófago, porción torácica media
Esophagus, lower thoracic part|Esófago, porción torácica inferior
Esophagus, abdominal part|Esófago, porción abdominal
Esophageal mucosa (longitudinal folds)|Mucosa esofágica (pliegues longitudinales)
Esophagus, tunica adventitia|Esófago, túnica adventicia
Esophagus, abdominal serosa|Esófago, serosa abdominal
Esophagus, longitudinal muscle layer|Esófago, capa muscular longitudinal
Esophagus, circular muscle layer|Esófago, capa muscular circular
Z-line|Línea Z
Lower oesophageal sphincter|Esfínter esofágico inferior
Stomach|Estómago
Stomach, cardia|Estómago, cardias
Stomach, fundus|Estómago, fundus
Stomach, body|Estómago, cuerpo
Stomach, pyloric antrum|Estómago, antro pilórico
Stomach, pyloric canal|Estómago, canal pilórico
Pyloric sphincter|Esfínter pilórico
Cardiac notch|Escotadura cardíaca
Angular incisure|Incisura angular
Lesser curvature|Curvatura menor
Greater curvature|Curvatura mayor
Stomach serosa|Serosa del estómago
Stomach, longitudinal muscle layer|Estómago, capa muscular longitudinal
Stomach, circular muscle layer|Estómago, capa muscular circular
Stomach, oblique muscle layer|Estómago, capa muscular oblicua
Gastric mucosa (rugae)|Mucosa gástrica (rugas)
Left gastric artery|Arteria gástrica izquierda
Right gastric artery|Arteria gástrica derecha
Left gastro-omental artery|Arteria gastroomental izquierda
Right gastro-omental artery|Arteria gastroomental derecha
Short gastric arteries|Arterias gástricas cortas
Lesser omentum|Omento menor
Gastrosplenic ligament|Ligamento gastroesplénico
Greater omentum|Omento mayor
Liver, biliary tree, pancreas, spleen|Hígado, vías biliares, páncreas, bazo
Liver|Hígado
Gallbladder|Vesícula biliar
Cystic duct|Conducto cístico
Common hepatic duct|Conducto hepático común
Common bile duct|Conducto colédoco
Pancreas|Páncreas
Uncinate process|Proceso uncinado
Pancreatic duct|Conducto pancreático
Accessory pancreatic duct|Conducto pancreático accesorio
Spleen|Bazo
Duodenum|Duodeno
Duodenum, superior part (bulb)|Duodeno, porción superior (bulbo)
Duodenum, descending part|Duodeno, porción descendente
Duodenum, horizontal part|Duodeno, porción horizontal
Duodenum, ascending part|Duodeno, porción ascendente
Duodenal mucosa|Mucosa duodenal
Major duodenal papilla|Papila duodenal mayor
Minor duodenal papilla|Papila duodenal menor
Suspensory muscle of duodenum (ligament of Treitz)|Músculo suspensorio del duodeno (ligamento de Treitz)
Jejunum and ileum|Yeyuno e íleon
Jejunum|Yeyuno
Jejunum mucosa (plicae circulares)|Mucosa del yeyuno (pliegues circulares)
Ileum|Íleon
Ileum mucosa|Mucosa del íleon
Peyer's patch|Placa de Peyer
Ileocecal valve|Válvula ileocecal
Root of mesentery|Raíz del mesenterio
Jejunal arteries (simple arcades, long vasa recta)|Arterias yeyunales (arcadas simples, vasos rectos largos)
Ileal arteries (multi-tier arcades, short vasa recta)|Arterias ileales (arcadas de varios niveles, vasos rectos cortos)
Mesenteric fat|Grasa mesentérica
Large intestine|Intestino grueso
Cecum|Ciego
Vermiform appendix|Apéndice vermiforme
Ascending colon|Colon ascendente
Transverse colon|Colon transverso
Descending colon|Colon descendente
Sigmoid colon|Colon sigmoide
Taenia mesocolica|Tenia mesocólica
Taenia omentalis|Tenia omental
Taenia libera|Tenia libre
Omental appendices|Apéndices omentales
Phrenicocolic ligament|Ligamento frenocólico
Rectum and anal canal|Recto y conducto anal
Rectum|Recto
Rectal mucosa|Mucosa rectal
Transverse rectal fold (valves of Houston)|Pliegue rectal transverso (válvulas de Houston)
Anal canal|Conducto anal
Anal columns|Columnas anales
Pectinate line|Línea pectínea
Anal pecten|Pecten anal
Anocutaneous line|Línea anocutánea
Anal verge|Margen anal
Internal anal sphincter|Esfínter anal interno
External anal sphincter|Esfínter anal externo
Puborectalis|Puborrectal
Single tooth (magnified canine, cut lengthwise)|Diente individual (canino ampliado, corte longitudinal)
Enamel|Esmalte
Dentin|Dentina
Dentinal tubules|Túbulos dentinarios
Pulp chamber|Cámara pulpar
Root canal|Conducto radicular
Cementum|Cemento
Periodontal ligament|Ligamento periodontal
Alveolar bone|Hueso alveolar
Cementoenamel junction|Unión amelocementaria
Apical foramen|Foramen apical
Pulp nerve|Nervio pulpar
Pulp artery|Arteria pulpar
Pulp vein|Vena pulpar
Kidneys|Riñones
Renal capsule|Cápsula renal
Renal cortex|Corteza renal
Renal pyramid (medulla)|Pirámide renal (médula)
Renal papilla|Papila renal
Minor calyx|Cáliz menor
Major calyx|Cáliz mayor
Renal pelvis|Pelvis renal
Renal sinus fat|Grasa del seno renal
Renal vessels|Vasos renales
Renal artery|Arteria renal
Segmental artery|Arteria segmentaria
Interlobar artery|Arteria interlobular
Arcuate artery|Arteria arqueada
Renal vein|Vena renal
Interlobar vein|Vena interlobular
Suprarenal glands|Glándulas suprarrenales
Suprarenal gland|Glándula suprarrenal
Ureters|Uréteres
Ureter, abdominal part|Uréter, porción abdominal
Ureter, pelvic part|Uréter, porción pélvica
Ureter, intramural part|Uréter, porción intramural
Ureteric orifice|Orificio ureteral
Bladder|Vejiga
Urinary bladder|Vejiga urinaria
Detrusor muscle|Músculo detrusor
Bladder mucosa (rugae)|Mucosa vesical (rugas)
Trigone|Trígono vesical
Internal urethral orifice|Orificio uretral interno
Internal urethral sphincter|Esfínter uretral interno
Median umbilical ligament (urachus)|Ligamento umbilical medio (uraco)
Urethra|Uretra
Urethra, prostatic part|Uretra, porción prostática
Urethra, membranous part|Uretra, porción membranosa
External urethral sphincter|Esfínter uretral externo
Scrotum and testis|Escroto y testículo
Scrotum|Escroto
Median raphe|Rafe medio
Dartos fascia|Fascia dartos
External spermatic fascia|Fascia espermática externa
Cremaster muscle|Músculo cremáster
Internal spermatic fascia|Fascia espermática interna
Tunica vaginalis (parietal layer)|Túnica vaginal (capa parietal)
Tunica vaginalis (visceral layer)|Túnica vaginal (capa visceral)
Tunica albuginea|Túnica albugínea
Testis, parenchyma|Testículo, parénquima
Septula testis|Tabiques del testículo
Mediastinum testis|Mediastino testicular
Seminiferous tubules|Túbulos seminíferos
Rete testis|Red testicular
Efferent ductules|Conductillos eferentes
Epididymis and spermatic cord|Epidídimo y cordón espermático
Epididymis, head|Epidídimo, cabeza
Epididymis, body|Epidídimo, cuerpo
Epididymis, tail|Epidídimo, cola
Spermatic cord|Cordón espermático
Testicular artery|Arteria testicular
Pampiniform venous plexus|Plexo venoso pampiniforme
Testicular vein|Vena testicular
Superficial inguinal ring|Anillo inguinal superficial
Deep inguinal ring|Anillo inguinal profundo
Inferior epigastric artery|Arteria epigástrica inferior
Ductus deferens and seminal vesicles|Conducto deferente y vesículas seminales
Ductus deferens|Conducto deferente
Ampulla of ductus deferens|Ampolla del conducto deferente
Seminal vesicle|Vesícula seminal
Ejaculatory duct|Conducto eyaculador
Rectoprostatic fascia (Denonvilliers)|Fascia rectoprostática (Denonvilliers)
Prostate|Próstata
Prostate, capsule|Próstata, cápsula
Prostate, peripheral zone|Próstata, zona periférica
Prostate, central zone|Próstata, zona central
Prostate, transition zone|Próstata, zona de transición
Anterior fibromuscular stroma|Estroma fibromuscular anterior
Urethral crest|Cresta uretral
Seminal colliculus|Colículo seminal
Prostatic utricle|Utrículo prostático
Ejaculatory duct opening|Abertura del conducto eyaculador
Prostatic ductule openings|Aberturas de los conductillos prostáticos
Perineum|Periné
Perineal membrane|Membrana perineal
Bulbourethral gland|Glándula bulbouretral
Bulbourethral duct|Conducto bulbouretral
Ischiocavernosus|Isquiocavernoso
Bulbospongiosus|Bulboesponjoso
Penis|Pene
Crus of penis|Pilar del pene
Bulb of penis|Bulbo del pene
Corpus cavernosum|Cuerpo cavernoso
Corpus spongiosum|Cuerpo esponjoso
Septum pectiniforme|Tabique del pene
Deep artery of penis|Arteria profunda del pene
Buck's fascia|Fascia de Buck
Deep dorsal vein of penis|Vena dorsal profunda del pene
Dorsal artery of penis|Arteria dorsal del pene
Dorsal nerve of penis|Nervio dorsal del pene
Glans penis|Glande del pene
Corona glandis|Corona del glande
Neck of glans|Cuello del glande
External urethral orifice|Orificio uretral externo
Penile skin|Piel del pene
Prepuce (foreskin)|Prepucio
Male urethra|Uretra masculina
Urethra, spongy part (bulbar)|Uretra, porción esponjosa (bulbar)
Urethra, spongy part (penile)|Uretra, porción esponjosa (peniana)
Navicular fossa|Fosa navicular
Eye|Ojo
Sclera (eyeball)|Esclera (globo ocular)
Choroid|Coroides
Retina|Retina
Cornea|Córnea
Iris|Iris
Pupil|Pupila
Lens|Cristalino
Suspensory ligament of lens|Ligamento suspensorio del cristalino
Vitreous body|Cuerpo vítreo
Lacrimal gland|Glándula lagrimal
Common tendinous ring|Anillo tendinoso común
Trochlea|Tróclea
Ear|Oído
Auricle|Pabellón auricular
External acoustic meatus|Meato acústico externo
Tympanic membrane|Membrana timpánica
Tympanic cavity|Cavidad timpánica
Malleus|Martillo
Incus|Yunque
Stapes|Estribo
Vestibule|Vestíbulo
Anterior semicircular canal|Conducto semicircular anterior
Posterior semicircular canal|Conducto semicircular posterior
Lateral semicircular canal|Conducto semicircular lateral
Cochlea|Cóclea
Pharyngotympanic (auditory) tube|Trompa faringotimpánica (auditiva)
Thyroid gland, right lobe|Glándula tiroides, lóbulo derecho
Thyroid gland, left lobe|Glándula tiroides, lóbulo izquierdo
Isthmus of thyroid gland|Istmo de la glándula tiroides
Pyramidal lobe|Lóbulo piramidal
Parathyroid glands, superior pair|Glándulas paratiroides, par superior
Parathyroid glands, inferior pair|Glándulas paratiroides, par inferior
Thymus|Timo
Face, jaw, orbit and larynx|Cara, mandíbula, órbita y laringe
Infraorbital nerve|Nervio infraorbitario
Zygomatic nerve|Nervio cigomático
Superior alveolar nerves|Nervios alveolares superiores
Pterygopalatine ganglion|Ganglio pterigopalatino
Inferior alveolar nerve|Nervio alveolar inferior
Mental nerve|Nervio mentoniano
Lingual nerve|Nervio lingual
Buccal nerve|Nervio bucal
Auriculotemporal nerve|Nervio auriculotemporal
Masseteric nerve|Nervio masetérico
Mylohyoid nerve|Nervio milohioideo
Deep temporal nerves|Nervios temporales profundos
Frontal nerve|Nervio frontal
Lacrimal nerve|Nervio lagrimal
Ciliary ganglion|Ganglio ciliar
Short ciliary nerves|Nervios ciliares cortos
Superior laryngeal nerve|Nervio laríngeo superior
Recurrent laryngeal nerve|Nervio laríngeo recurrente
Ansa cervicalis|Asa cervical
Lesser occipital nerve|Nervio occipital menor
Great auricular nerve|Nervio auricular mayor
Transverse cervical nerve|Nervio cervical transverso
Supraclavicular nerves|Nervios supraclaviculares
Cochlear root (CN VIII)|Raíz coclear (NC VIII)
Vestibular root (CN VIII)|Raíz vestibular (NC VIII)
Cerebrum|Cerebro
Cerebral cortex|Corteza cerebral
Cerebral white matter|Sustancia blanca cerebral
Deep structures|Estructuras profundas
Corpus callosum|Cuerpo calloso
Septum pellucidum|Septum pelúcido
Fornix|Fórnix
Anterior commissure|Comisura anterior
Thalamus|Tálamo
Pulvinar|Pulvinar
Lateral geniculate body|Cuerpo geniculado lateral
Interthalamic adhesion|Adherencia intertalámica
Hypothalamus|Hipotálamo
Mammillary body|Cuerpo mamilar
Subthalamic nucleus|Núcleo subtalámico
Pineal gland|Glándula pineal
Infundibulum|Infundíbulo
Adenohypophysis|Adenohipófisis
Neurohypophysis|Neurohipófisis
Optic chiasm|Quiasma óptico
Optic tract|Tracto óptico
Caudate nucleus|Núcleo caudado
Putamen|Putamen
Globus pallidus|Globo pálido
Amygdala|Amígdala (cerebral)
Hippocampus|Hipocampo
Internal capsule|Cápsula interna
Ventricular system|Sistema ventricular
Lateral ventricle|Ventrículo lateral
3rd ventricle|Tercer ventrículo
Interventricular foramen|Foramen interventricular
Cerebral aqueduct|Acueducto cerebral
4th ventricle|Cuarto ventrículo
Choroid plexus|Plexo coroideo
Central canal|Conducto central
Brainstem and cerebellum|Tronco encefálico y cerebelo
Midbrain|Mesencéfalo
Cerebral peduncle|Pedúnculo cerebral
Superior colliculus|Colículo superior
Inferior colliculus|Colículo inferior
Brachium of inferior colliculus|Brazo del colículo inferior
Pons|Protuberancia
Medulla oblongata|Bulbo raquídeo
Pyramid|Pirámide
Cerebellum|Cerebelo
Cranial nerves|Nervios craneales
Olfactory nerve (CN I)|Nervio olfatorio (NC I)
Optic nerve (CN II)|Nervio óptico (NC II)
Oculomotor nerve (CN III)|Nervio oculomotor (NC III)
Trochlear nerve (CN IV)|Nervio troclear (NC IV)
Trigeminal nerve (CN V)|Nervio trigémino (NC V)
Abducens nerve (CN VI)|Nervio abducens (NC VI)
Facial nerve (CN VII)|Nervio facial (NC VII)
Vestibulocochlear nerve (CN VIII)|Nervio vestibulococlear (NC VIII)
Glossopharyngeal nerve (CN IX)|Nervio glosofaríngeo (NC IX)
Vagus nerve (CN X)|Nervio vago (NC X)
Accessory nerve (CN XI)|Nervio accesorio (NC XI)
Hypoglossal nerve (CN XII)|Nervio hipogloso (NC XII)
Spinal cord and spinal nerves|Médula espinal y nervios espinales
Spinal cord|Médula espinal
Dura mater|Duramadre
Filum terminale|Filum terminal
Cauda equina|Cola de caballo
Dorsal root ganglion|Ganglio de la raíz dorsal
Spinal nerve|Nervio espinal
Intercostal nerve|Nervio intercostal
Brachial plexus and arm|Plexo braquial y brazo
Brachial plexus, C5 root|Plexo braquial, raíz C5
Upper trunk|Tronco superior
Middle trunk|Tronco medio
Lower trunk|Tronco inferior
Anterior division|División anterior
Posterior division|División posterior
Lateral cord|Fascículo lateral
Medial cord|Fascículo medial
Posterior cord|Fascículo posterior
Musculocutaneous nerve|Nervio musculocutáneo
Axillary nerve|Nervio axilar
Radial nerve|Nervio radial
Median nerve|Nervio mediano
Ulnar nerve|Nervio cubital
Dorsal scapular nerve|Nervio escapular dorsal
Long thoracic nerve|Nervio torácico largo
Suprascapular nerve|Nervio supraescapular
Nerve to subclavius|Nervio del subclavio
Lateral pectoral nerve|Nervio pectoral lateral
Medial pectoral nerve|Nervio pectoral medial
Superior subscapular nerve|Nervio subescapular superior
Thoracodorsal nerve|Nervio toracodorsal
Inferior subscapular nerve|Nervio subescapular inferior
Medial cutaneous nerve of arm|Nervio cutáneo medial del brazo
Medial cutaneous nerve of forearm|Nervio cutáneo medial del antebrazo
Intercostobrachial nerve|Nervio intercostobraquial
Posterior cutaneous nerve of arm|Nervio cutáneo posterior del brazo
Inferior lateral cutaneous nerve of arm|Nervio cutáneo lateral inferior del brazo
Posterior cutaneous nerve of forearm|Nervio cutáneo posterior del antebrazo
Forearm and hand nerves|Nervios del antebrazo y la mano
Superficial branch of radial nerve|Rama superficial del nervio radial
Deep branch of radial nerve|Rama profunda del nervio radial
Anterior interosseous nerve|Nervio interóseo anterior
Palmar branch of median nerve|Rama palmar del nervio mediano
Dorsal branch of ulnar nerve|Rama dorsal del nervio cubital
Palmar branch of ulnar nerve|Rama palmar del nervio cubital
Leg|Pierna
Lumbosacral plexus|Plexo lumbosacro
Femoral nerve|Nervio femoral
Saphenous nerve|Nervio safeno
Sciatic nerve|Nervio ciático
Tibial nerve|Nervio tibial
Common fibular nerve|Nervio peroneo común
Deep fibular nerve|Nervio peroneo profundo
Superficial fibular nerve|Nervio peroneo superficial
Medial sural cutaneous nerve|Nervio cutáneo sural medial
Lateral sural cutaneous nerve|Nervio cutáneo sural lateral
Sural communicating nerve|Nervio comunicante sural
Sural nerve|Nervio sural
Head and neck nodes|Ganglios de cabeza y cuello
Occipital lymph nodes|Ganglios linfáticos occipitales
Post-auricular (mastoid) lymph nodes|Ganglios linfáticos retroauriculares (mastoideos)
Pre-auricular and parotid lymph nodes|Ganglios linfáticos preauriculares y parotídeos
Submental lymph nodes|Ganglios linfáticos submentonianos
Submandibular lymph nodes|Ganglios linfáticos submandibulares
Superficial cervical lymph nodes|Ganglios linfáticos cervicales superficiales
Deep cervical lymph nodes|Ganglios linfáticos cervicales profundos
Posterior triangle (accessory) lymph nodes|Ganglios linfáticos del triángulo posterior (accesorios)
Supraclavicular lymph nodes|Ganglios linfáticos supraclaviculares
Pretracheal and paratracheal lymph nodes|Ganglios linfáticos pretraqueales y paratraqueales
Thorax and upper limb nodes|Ganglios del tórax y del miembro superior
Parasternal (internal thoracic) lymph nodes|Ganglios linfáticos paraesternales (torácicos internos)
Anterior mediastinal lymph nodes|Ganglios linfáticos mediastínicos anteriores
Tracheobronchial lymph nodes|Ganglios linfáticos traqueobronquiales
Subcarinal lymph nodes|Ganglios linfáticos subcarinales
Axillary lymph nodes, pectoral, central and apical groups|Ganglios linfáticos axilares, grupos pectoral, central y apical
Epitrochlear lymph nodes|Ganglios linfáticos epitrocleares
Abdominal and pelvic nodes|Ganglios del abdomen y la pelvis
Para-aortic (lumbar) lymph nodes|Ganglios linfáticos paraaórticos (lumbares)
Coeliac lymph nodes|Ganglios linfáticos celíacos
Superior mesenteric lymph nodes|Ganglios linfáticos mesentéricos superiores
Inferior mesenteric lymph nodes|Ganglios linfáticos mesentéricos inferiores
Mesenteric lymph nodes (jejunal and ileal)|Ganglios linfáticos mesentéricos (yeyunales e ileales)
Colic lymph nodes|Ganglios linfáticos cólicos
Gastric lymph nodes|Ganglios linfáticos gástricos
Hepatic lymph nodes (porta hepatis)|Ganglios linfáticos hepáticos (hilio hepático)
Splenic hilar lymph nodes|Ganglios linfáticos del hilio esplénico
Common iliac lymph nodes|Ganglios linfáticos ilíacos comunes
External iliac lymph nodes|Ganglios linfáticos ilíacos externos
Internal iliac lymph nodes|Ganglios linfáticos ilíacos internos
Lower limb nodes|Ganglios del miembro inferior
Superficial inguinal lymph nodes|Ganglios linfáticos inguinales superficiales
Deep inguinal lymph nodes|Ganglios linfáticos inguinales profundos
Popliteal lymph nodes|Ganglios linfáticos poplíteos
Lymphatic vessels, trunks and ducts|Vasos, troncos y conductos linfáticos
Lymphatic vessels, deep cervical chain|Vasos linfáticos, cadena cervical profunda
Jugular trunk|Tronco yugular
Subclavian trunk|Tronco subclavio
Bronchomediastinal trunk|Tronco broncomediastínico
Right lymphatic duct|Conducto linfático derecho
Lumbar trunk|Tronco lumbar
Intestinal trunk|Tronco intestinal
Lymphatic vessels, iliac and inguinal chain|Vasos linfáticos, cadena ilíaca e inguinal
Lymphatic vessels, mesenteric (lacteals)|Vasos linfáticos, mesentéricos (quilíferos)
Lymphatic vessels, collecting vessels of the arm|Vasos linfáticos, vasos colectores del brazo
Lymphatic vessels, collecting vessels of the leg|Vasos linfáticos, vasos colectores de la pierna
Vertebra|Vértebra
Intervertebral disc|Disco intervertebral
Rib|Costilla
Sacrum|Sacro
Coccyx|Cóccix
Magnified|Ampliado
Magnified tooth|Diente ampliado
Xiphoid process|Apófisis xifoides
Sternoclavicular joint|Articulación esternoclavicular
Sphenosquamous suture|Sutura esfenoescamosa
Occipitomastoid suture|Sutura occipitomastoidea
External occipital crest|Cresta occipital externa
basilar part|porción basilar
body|cuerpo
petrous part|porción petrosa
Occipital bone|Hueso occipital
Parietal foramen|Agujero parietal
Mastoid notch|Escotadura mastoidea
Supra-orbital notch (foramen)|Escotadura (agujero) supraorbitaria
Zygomatic process of frontal bone|Apófisis cigomática del hueso frontal
Zygomaticofacial foramen|Agujero cigomaticofacial
zygomatic process of temporal bone|apófisis cigomática del hueso temporal
temporal process of zygomatic bone|apófisis temporal del hueso cigomático
frontal process|apófisis frontal
Infra-orbital foramen|Agujero infraorbitario
Posterior nasal aperture (choana)|Abertura nasal posterior (coana)
medial plate|lámina medial
lateral plate|lámina lateral
Pterygoid hamulus|Hámulo pterigoideo
ramus|rama
condylar process|apófisis condílea
coronoid process|apófisis coronoides
angle|ángulo
Mental foramen|Agujero mentoniano
mental tubercle|tubérculo mentoniano
mental protuberance|protuberancia mentoniana
Piriform (nasal) aperture|Abertura piriforme (nasal)
anterior nasal spine|espina nasal anterior
maxillary|maxilar
mandibular|mandibular
Hyoid bone|Hueso hioides
supraspinous fossa|fosa supraespinosa
infraspinous fossa (subscapular fossa in front)|fosa infraespinosa (fosa subescapular por delante)
lateral border|borde lateral
medial border|borde medial
superior border|borde superior
superior angle|ángulo superior
inferior angle|ángulo inferior
suprascapular notch|escotadura supraescapular
supraglenoid tubercle|tubérculo supraglenoideo
infraglenoid tubercle|tubérculo infraglenoideo
greater scapular (spinoglenoid) notch|escotadura escapular mayor (espinoglenoidea)
Elbow joint|Articulación del codo
Ulna|Cúbito
Radius|Radio
Hamate, hook|Ganchoso, gancho
hook|gancho
tubercle|tubérculo
Wrist (radiocarpal) joint|Articulación de la muñeca (radiocarpiana)
Metacarpal I|Metacarpiano I
Metacarpal II|Metacarpiano II
Metacarpal III|Metacarpiano III
Metacarpal IV|Metacarpiano IV
Metacarpal V|Metacarpiano V
proximal|proximal
middle|media
distal|distal
thumb|pulgar
index|índice
ring|anular
little|meñique
great toe|dedo gordo
second toe|segundo dedo
third toe|tercer dedo
fourth toe|cuarto dedo
little toe|dedo pequeño
Pubic symphysis|Sínfisis del pubis
Knee cartilage|Cartílago de la rodilla
Tibia|Tibia
Fibula|Peroné
Ankle cartilage|Cartílago del tobillo
posterior process|apófisis posterior
sustentaculum tali|sustentáculo del astrágalo
fibular trochlea|tróclea peronea
medial tubercle|tubérculo medial
lateral tubercle|tubérculo lateral
tuberosity|tuberosidad
Metatarsal I|Metatarsiano I
Metatarsal II|Metatarsiano II
Metatarsal III|Metatarsiano III
Metatarsal IV|Metatarsiano IV
Metatarsal V|Metatarsiano V
Cribriform plate of ethmoid|Lámina cribosa del etmoides
Greater alar cartilage|Cartílago alar mayor
Lateral nasal cartilage|Cartílago nasal lateral
clavicular part|porción clavicular
acromial part|porción acromial
spinal part|porción espinal
long head|cabeza larga
short head|cabeza corta
lateral head|cabeza lateral
medial head|cabeza medial
tendon|tendón
tendon of long head|tendón de la cabeza larga
tendon of insertion|tendón de inserción
Sartorius, gracilis and semitendinosus (pes anserinus)|Sartorio, grácil y semitendinoso (pata de ganso)
tendon (behind medial malleolus to navicular tuberosity)|tendón (por detrás del maléolo medial hasta la tuberosidad del escafoides)
tendon (groove on talus, under sustentaculum tali)|tendón (surco del astrágalo, bajo el sustentáculo del astrágalo)
tendon (hooks round the pterygoid hamulus)|tendón (se curva alrededor del hámulo pterigoideo)
tendinous intersection|intersección tendinosa
Linea alba|Línea alba
descending part|porción descendente
transverse part|porción transversa
ascending part|porción ascendente
sternocostal part|porción esternocostal
abdominal part|porción abdominal
iliocostalis|iliocostal
longissimus|longísimo
spinalis|espinoso
anterior belly|vientre anterior
posterior belly|vientre posterior
inferior belly|vientre inferior
superior belly|vientre superior
intermediate tendon|tendón intermedio
sternal head|cabeza esternal
clavicular head|cabeza clavicular
vertical part|porción vertical
superior oblique part|porción oblicua superior
inferior oblique part|porción oblicua inferior
Anterior papillary muscle|Músculo papilar anterior
Posterior papillary muscle|Músculo papilar posterior
left ventricle|ventrículo izquierdo
right ventricle|ventrículo derecho
Sinoatrial (SA) node, primary pacemaker|Nódulo sinoauricular (SA), marcapasos principal
Internodal pathways|Vías internodales
Atrioventricular (AV) node|Nódulo auriculoventricular (AV)
Atrioventricular bundle (bundle of His)|Fascículo auriculoventricular (haz de His)
Bundle branch|Rama del fascículo
Purkinje fibres|Fibras de Purkinje
dorsal carpal branch|rama carpiana dorsal
Esophageal artery (from aorta)|Arteria esofágica (de la aorta)
Celiac trunk|Tronco celíaco
Splenic artery|Arteria esplénica
Hepatic artery|Arteria hepática
Superior mesenteric artery|Arteria mesentérica superior
Superior mesenteric vein|Vena mesentérica superior
Splenic vein|Vena esplénica
Portal vein|Vena porta
Ileocolic artery|Arteria ileocólica
Appendicular artery|Arteria apendicular
Middle colic artery|Arteria cólica media
Colic artery|Arteria cólica
Inferior mesenteric artery|Arteria mesentérica inferior
Sigmoid arteries|Arterias sigmoideas
Superior rectal artery|Arteria rectal superior
cricothyroid branch|rama cricotiroidea
parietal branch|rama parietal
Superior lobar bronchus and segmental bronchi|Bronquio lobar superior y bronquios segmentarios
Middle lobar bronchus and segmental bronchi|Bronquio lobar medio y bronquios segmentarios
Inferior lobar bronchus and segmental bronchi|Bronquio lobar inferior y bronquios segmentarios
Lingular bronchus and segmental bronchi|Bronquio lingular y bronquios segmentarios
Lateral nasal wall (mucosa)|Pared lateral de la nariz (mucosa)
Superior meatus (posterior ethmoid cells open here)|Meato superior (aquí se abren las celdillas etmoidales posteriores)
Middle meatus (frontal, maxillary and anterior ethmoid sinuses open here)|Meato medio (aquí se abren los senos frontal, maxilar y etmoidales anteriores)
Inferior meatus (nasolacrimal duct opens here)|Meato inferior (aquí se abre el conducto nasolagrimal)
Opening of the nasolacrimal duct|Abertura del conducto nasolagrimal
Maxillary sinus opening (ostium)|Abertura del seno maxilar (ostium)
Sphenoethmoidal recess (sphenoid sinus opens here)|Receso esfenoetmoidal (aquí se abre el seno esfenoidal)
Olfactory region (olfactory epithelium on the roof)|Región olfatoria (epitelio olfatorio en el techo)
Floor of the nasal cavity (mucosa over the hard palate)|Suelo de la cavidad nasal (mucosa sobre el paladar duro)
Nasal vestibule (skin-lined entrance)|Vestíbulo nasal (entrada revestida de piel)
Vibrissae (nasal hairs that filter dust)|Vibrisas (pelos nasales que filtran el polvo)
Vocal process of the arytenoid|Apófisis vocal del aritenoides
Muscular process of the arytenoid|Apófisis muscular del aritenoides
Corniculate cartilage|Cartílago corniculado
Laryngeal ventricle|Ventrículo laríngeo
Vallate (circumvallate) papillae|Papilas caliciformes
Lower oesophageal (gastro-oesophageal) sphincter|Esfínter esofágico inferior (gastroesofágico)
Gastric mucosa (rugae; Magenstrasse along the lesser curvature)|Mucosa gástrica (rugas; Magenstrasse a lo largo de la curvatura menor)
Gastro-omental (gastroepiploic) artery|Arteria gastroomental (gastroepiploica)
Gastro-omental (gastroepiploic) veins|Venas gastroomentales (gastroepiploicas)
hooding fold|pliegue en capucha
longitudinal fold|pliegue longitudinal
Transverse rectal fold (valve of Houston, upper)|Pliegue rectal transverso (válvula de Houston, superior)
Transverse rectal fold (valve of Houston, middle)|Pliegue rectal transverso (válvula de Houston, medio)
Transverse rectal fold (valve of Houston, lower)|Pliegue rectal transverso (válvula de Houston, inferior)
Pectinate (dentate) line with anal valves and crypts|Línea pectínea (dentada) con válvulas y criptas anales
Anal verge and perianal skin|Margen anal y piel perianal
deep part (voluntary)|porción profunda (voluntaria)
superficial part (voluntary)|porción superficial (voluntaria)
subcutaneous part (voluntary)|porción subcutánea (voluntaria)
Nasopharynx (behind the nose, above the soft palate; holds the pharyngeal tonsil and the auditory tube openings)|Nasofaringe (detrás de la nariz, por encima del paladar blando; contiene la amígdala faríngea y las aberturas de las trompas auditivas)
Oropharynx (behind the mouth, from the soft palate to the tip of the epiglottis; holds the palatine tonsils)|Orofaringe (detrás de la boca, desde el paladar blando hasta la punta de la epiglotis; contiene las amígdalas palatinas)
Laryngopharynx (hypopharynx, from the epiglottis to the cricoid cartilage; the piriform recesses lie beside the larynx)|Laringofaringe (hipofaringe, desde la epiglotis hasta el cartílago cricoides; los recesos piriformes quedan junto a la laringe)
superficial part|porción superficial
deep part|porción profunda
deep part (behind the mandibular ramus)|porción profunda (detrás de la rama de la mandíbula)
upper|superior
lower|inferior
Uterus (womb)|Útero (matriz)
Endometrium|Endometrio
Myometrium|Miometrio
Perimetrium|Perimetrio
Cervix|Cuello uterino
Cervical canal|Conducto cervical
Vagina|Vagina
Vaginal opening|Orificio vaginal
Ovary|Ovario
Fallopian tube|Trompa uterina
Fimbriae|Fimbrias
Ovarian follicle|Folículo ovárico
Ovarian vessels|Vasos ováricos
Dominant (Graafian) follicle|Folículo dominante (de Graaf)
Corpus luteum|Cuerpo lúteo
Released oocyte|Ovocito liberado
Labia majora|Labios mayores
Labia minora|Labios menores
Clitoris|Clítoris
Urethral opening (female)|Orificio uretral (femenino)
Breast adipose tissue|Tejido adiposo de la mama
Lactiferous ducts|Conductos galactóforos
Breast lobe and lobule|Lóbulo y lobulillo mamario
Acini (milk-producing alveoli)|Ácinos (alvéolos productores de leche)
Fibrous connective tissue (breast, right)|Tejido conectivo fibroso (mama derecha)
Fibrous connective tissue (breast, left)|Tejido conectivo fibroso (mama izquierda)
Retromammary space and pectoral fascia|Espacio retromamario y fascia pectoral
Montgomery's glands|Glándulas de Montgomery
Internal thoracic artery branches|Ramas de la arteria torácica interna
Lateral thoracic artery branches|Ramas de la arteria torácica lateral
Intercostal nerve branches|Ramas del nervio intercostal
Axillary lymph nodes|Ganglios linfáticos axilares
Nipple|Pezón
Areola|Areola
Cooper's ligaments|Ligamentos de Cooper
Axillary tail of breast|Cola axilar de la mama
Breast lymphatic vessel|Vaso linfático de la mama
Sympathetic trunk|Tronco simpático
Sympathetic ganglion|Ganglio simpático
inferior horn|asta inferior
Olfactory nerve (CN I)|Nervio olfatorio (NC I)
ganglion|ganglio
ophthalmic division V1|división oftálmica V1
maxillary division V2|división maxilar V2
mandibular division V3|división mandibular V3
Trigeminal nerve (CN V, ganglion)|Nervio trigémino (NC V, ganglio)
Spinal cord, white matter|Médula espinal, sustancia blanca
Spinal cord, grey matter (butterfly)|Médula espinal, sustancia gris (mariposa)
white matter|sustancia blanca
grey matter (butterfly)|sustancia gris (mariposa)
Cauda equina, spinal nerve Co1|Cola de caballo, nervio espinal Co1
Dorsal root ganglion Co1|Ganglio de la raíz dorsal Co1
root|raíz
medial root|raíz medial
digital branch to thumb|rama digital al pulgar
digital branch to index finger|rama digital al dedo índice
digital branch to middle finger|rama digital al dedo medio
digital branch to ring finger (lateral half)|rama digital al dedo anular (mitad lateral)
digital branch to ring finger (medial half)|rama digital al dedo anular (mitad medial)
digital branch to little finger|rama digital al dedo meñique
L4–L5 roots|raíces L4–L5
S1–S3 roots|raíces S1–S3
inferior dental branches|ramas dentales inferiores
internal branch (sensory)|rama interna (sensitiva)
external branch (motor to cricothyroid)|rama externa (motora al cricotiroideo)
superior root (C1)|raíz superior (C1)
inferior root (C2–C3)|raíz inferior (C2–C3)
branch to infrahyoid muscles|rama a los músculos infrahioideos
collecting vessels of the leg, deep|vasos colectores de la pierna, profundos
Lymphatic vessels, collecting vessels of the leg, deep|Vasos linfáticos, vasos colectores de la pierna, profundos
Trigeminal nerve (CN V, ophthalmic division V1)|Nervio trigémino (NC V, división oftálmica V1)
Trigeminal nerve (CN V, maxillary division V2)|Nervio trigémino (NC V, división maxilar V2)
Trigeminal nerve (CN V, mandibular division V3)|Nervio trigémino (NC V, división mandibular V3)
Trigeminal nerve (CN V, ganglion)|Nervio trigémino (NC V, ganglio)
Brachial plexus|Plexo braquial
Magnified: Oxygen diffuses from the alveolus into the blood|Ampliado: el oxígeno se difunde desde el alvéolo hacia la sangre
Magnified: Carbon dioxide diffuses from the blood into the alveolus|Ampliado: el dióxido de carbono se difunde desde la sangre hacia el alvéolo
Magnified tooth: Gingiva (gum), with the gingival sulcus at the neck|Diente ampliado: encía (gingiva), con el surco gingival en el cuello
Skin|Piel
Skeletal|Sistema esquelético
Muscular|Sistema muscular
Circulatory|Sistema circulatorio
Respiratory|Sistema respiratorio
Digestive|Sistema digestivo
Urinary|Sistema urinario
Reproductive|Sistema reproductor
Eye and ear|Ojo y oído
Thyroid and parathyroid|Tiroides y paratiroides
Nervous|Sistema nervioso
Lymphatic|Sistema linfático
Endocrine|Sistema endocrino
Special senses|Sentidos especiales
Superficial veins|Venas superficiales
Investing fascia|Fascia de revestimiento
Superficial muscles|Músculos superficiales
Second muscle group|Segundo grupo muscular
Intermediate muscles|Músculos intermedios
Deep muscles|Músculos profundos
Deepest muscles|Músculos más profundos
Visceral coverings|Cubiertas viscerales
Anterior organs|Órganos anteriores
Deep organs|Órganos profundos
Deep nerves and vessels|Nervios y vasos profundos
Capsules and ligaments|Cápsulas y ligamentos
Bones and cartilage|Huesos y cartílago
`;

  const exact = new Map(), low = new Map();
  TERMS.split('\n').forEach(l => {
    l = l.trim(); const i = l.indexOf('|'); if (i < 1) return;
    const e = l.slice(0, i).trim(), z = l.slice(i + 1).trim(); exact.set(e, z); low.set(e.toLowerCase(), z);
  });
  const get = s => exact.get(s) || low.get(s.toLowerCase());
  const SIDE = { left: 'izq.', right: 'der.' };
  const sd = (b, k) => b + ' (' + SIDE[k.toLowerCase()] + ')';

  function tr(s) {
    s = s.trim(); if (!s) return null;
    let z = get(s); if (z) return z;
    let m;
    // "Magnified: X" and "Magnified tooth: X"
    m = s.match(/^Magnified(?: tooth)?:\s+(.+)$/); if (m) { const b = tr(m[1]); if (b) return 'Ampliado: ' + b; }
    // nerve roots such as "C6 root"
    m = s.match(/^([CTLS]\d+)\s+root$/); if (m) return 'Raíz ' + m[1];
    // tooth position: "Canine, maxillary (right, #13)"
    m = s.match(/^(.+?)\s+\((left|right),\s*#(\d+)\)$/i); if (m) { const b = tr(m[1]); if (b) return sd(b, m[2]) + ' #' + m[3]; }
    // side inside the parentheses: "Vagus nerve (CN X, left)"
    m = s.match(/^(.+?)\s+\((.+?),\s*(left|right)\)$/i); if (m) { const b = tr(m[1] + ' (' + m[2] + ')') || tr(m[1]); if (b) return sd(b, m[3]); }
    // numbers and codes at the end: "Rib 1", "Vertebra L5", "Intervertebral disc L5/S1"
    m = s.match(/^(.*?)\s+((?:[CTLS]\d+(?:\/[CTLS]\d+)?)|\d+(?:[–-]\d+)?)$/); if (m) { const b = tr(m[1]); if (b) return b + ' ' + m[2]; }
    // side markers: "Left X", "X (left)", "X, left"
    m = s.match(/^(Left|Right)\s+(.+)$/i); if (m) { const b = tr(m[2]); if (b) return sd(b, m[1]); }
    m = s.match(/^(.+?),?\s+\((left|right)\)$/i) || s.match(/^(.+?),\s+(left|right)$/i); if (m) { const b = tr(m[1]); if (b) return sd(b, m[2]); }
    // trailing parenthetical: "X (Y)" keeps X alone when Y has no entry
    m = s.match(/^(.+?)\s+\((.+)\)$/); if (m) { const b = tr(m[1]), q = tr(m[2]); if (b && q) return b + ' (' + q + ')'; if (b) return b; }
    // "Base, qualifier"
    const i = s.indexOf(', ');
    if (i > 0) { const b = tr(s.slice(0, i)), q = tr(s.slice(i + 2)); if (b && q) return b + ', ' + q; }
    return null;
  }

  const cache = new Map();
  const zh = en => { if (!en) return null; if (!cache.has(en)) cache.set(en, tr(en)); return cache.get(en); };
  const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // PACK is this pack's id. KEY holds the chosen language: 'zh-Hant', 'zh-Hans' or 'en'. Chinese labels are on only when the choice is this pack.
  const PACK = 'es', KEY = 'anatomy-lang';
  let on = true;
  try { const s = localStorage.getItem(KEY); on = s ? s === PACK : localStorage.getItem('anatomy-zh-hant') !== 'off'; } catch (e) { }

  const style = document.createElement('style');
  style.textContent = `
  .zh{display:none;margin-left:.4em;font-family:inherit;font-size:.94em;font-weight:400;letter-spacing:.02em;color:var(--color-neutral-700,#6b6458)}
  body.zh-on .zh{display:inline}
  body.zh-on [data-zh]::after{content:" " attr(data-zh);font-family:inherit;font-weight:400;font-size:.94em;letter-spacing:.02em;opacity:.85}
  #tip[data-zh]::after{display:block;margin-top:2px}
  #langsw{position:fixed;right:24px;top:24px;z-index:3;width:264px;margin:0;padding:6px;background:color-mix(in oklab,var(--color-bg) 94%,transparent);border:1px solid var(--color-divider);border-radius:var(--radius-md,4px);box-shadow:var(--shadow-sm)}
  body.present #langsw{display:none}
  #langsw .lh{font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--color-neutral-700,#6b6458);margin-bottom:4px}
  #langsw [role=radiogroup]{display:flex;flex-direction:column;border:1px solid var(--color-accent-500);border-radius:var(--radius-md,4px);overflow:hidden}
  #langsw .lo{display:flex;align-items:baseline;gap:8px;width:100%;text-align:left;font:inherit;font-size:13px;color:var(--color-accent-700);background:transparent;border:0;padding:6px 10px 6px 26px;cursor:pointer;position:relative}
  #langsw .lo+.lo{border-top:1px solid var(--color-accent-200)}
  #langsw .lo::before{content:"";position:absolute;left:9px;top:50%;width:9px;height:9px;margin-top:-5px;border:1px solid var(--color-accent-500);border-radius:50%;box-sizing:border-box}
  #langsw .lo:hover:not(:disabled){background:var(--color-accent-100)}
  #langsw .lo.on{background:var(--color-accent-200);font-weight:600}
  #langsw .lo.on::before{background:var(--color-accent-700);border-color:var(--color-accent-700)}
  #langsw .lo:disabled{cursor:not-allowed;color:var(--color-neutral-700,#6b6458);opacity:.6}
  #langsw .lz{font-family:inherit;font-size:.94em}
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
      { id: 'la', label: 'Latin', native: 'Latina' },
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
    paint(); document.body.appendChild(box);
  }
})();
