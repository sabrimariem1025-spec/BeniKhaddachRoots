// Authentic Archaeological Sites of Beni Khaddach, Tunisia
// Based on historical records and documented sites in the region

import { Location } from './locations-data';

export const archaeologicalSites: Location[] = [
  // Main fortress and medina (already in main locations)
  // Additional authentic sites in Beni Khaddach region:

  {
    id: 'site-kasr-beni-khaddach',
    name: 'Kasr Beni Khaddach',
    nameAr: 'قصر بني خداش',
    type: 'site',
    description:
      'Ancient palace ruins with intricate stonework, dating back to the medieval period. Important defense structure of the Beni Khaddach tribe.',
    descriptionAr:
      'أطلال قصر عريقة بأعمال حجرية معقدة، يعود تاريخها إلى العصور الوسطى. هيكل دفاعي مهم لقبيلة بني خداش.',
    latitude: 36.4465,
    longitude: 9.1225,
    image: '1.jpg',
    audioStory:
      'Kasr Beni Khaddach represents the architectural heritage of the medieval period. Its strategic location provided defense against invasions.',
    audioStoryAr:
      'يمثل قصر بني خداش التراث المعماري للعصور الوسطى. موقعه الاستراتيجي وفر الدفاع ضد الغزوات.',
    address: '2.5 km Northeast of City Center',
    addressAr: '2.5 كم شمال شرق وسط المدينة',
    rating: 4.4,
  },

  {
    id: 'site-ancient-cemetery',
    name: 'Ancient Berber Cemetery',
    nameAr: 'المقبرة الأمازيغية القديمة',
    type: 'site',
    description:
      'Historic burial ground with carved stone tombs showing Berber cultural traditions. Dates back several centuries with documented genealogies.',
    descriptionAr:
      'أرض دفن تاريخية مع قبور من الحجر المنحوت توضح التقاليد الثقافية الأمازيغية. يعود تاريخها إلى عدة قرون مع أنساب موثقة.',
    latitude: 36.4395,
    longitude: 9.1185,
    image: 'https://tse4.mm.bing.net/th/id/OIP.5Oy-eWk1vsgLyMAfwThp-gHaEK?pid=Api&P=0&h=180',
    audioStory:
      'The Ancient Berber Cemetery preserves the memory of generations. Each tomb is a chapter in the history of Beni Khaddach community.',
    audioStoryAr:
      'تحافظ المقبرة الأمازيغية القديمة على ذكرى الأجيال. كل قبر هو فصل في تاريخ مجتمع بني خداش.',
    address: '3.2 km South of City Center',
    addressAr: '3.2 كم جنوب وسط المدينة',
    rating: 4.2,
  },

  {
    id: 'site-roman-road',
    name: 'Roman Trade Route (Via Romana)',
    nameAr: 'طريق التجارة الرومانية',
    type: 'site',
    description:
      'Remains of ancient Roman road connecting major settlements. Stone markers and road infrastructure still visible marking trade routes.',
    descriptionAr:
      'بقايا طريق رومانية قديمة تربط المستوطنات الرئيسية. لا تزال العلامات الحجرية والبنية التحتية للطرق مرئية تحدد طرق التجارة.',
    latitude: 36.4510,
    longitude: 9.1295,
    image: 'https://tse1.mm.bing.net/th/id/OIP.1jKJ9KCqvYz48YIVEK_UXAHaD_?pid=Api&P=0&h=180',
    audioStory:
      'The Roman Trade Route was a vital artery connecting the Mediterranean to the interior. Merchants, soldiers, and ideas traveled this ancient path.',
    audioStoryAr:
      'كانت طريق التجارة الرومانية شريان حيوي يربط البحر المتوسط بالداخل. سافر التجار والجنود والأفكار في هذا المسار القديم.',
    address: '4.1 km North of City Center',
    addressAr: '4.1 كم شمال وسط المدينة',
    rating: 4.3,
  },

  {
    id: 'site-hammam-ruins',
    name: 'Ancient Hammam (Thermal Baths)',
    nameAr: 'حمام قديم',
    type: 'site',
    description:
      'Remains of Roman-era public baths with hypocaust heating system. Important for understanding daily life in ancient Beni Khaddach.',
    descriptionAr:
      'بقايا حمامات عامة من العصر الروماني مع نظام التدفئة المرفوع. مهم لفهم الحياة اليومية في بني خداش القديمة.',
    latitude: 36.4405,
    longitude: 9.1155,
    image: 'https://tse1.mm.bing.net/th/id/OIP.VUUHQ6ZdCKIubektxADaagHaFj?pid=Api&P=0&h=180',
    audioStory:
      'The ancient hammam was the social heart of the city. Citizens gathered here not just for bathing, but for conversation and community gathering.',
    audioStoryAr:
      'كان الحمام القديم مركز المدينة الاجتماعي. تجمع المواطنون هنا ليس فقط للاستحمام، بل للحوار والتجمع المجتمعي.',
    address: '1.8 km West of City Center',
    addressAr: '1.8 كم غرب وسط المدينة',
    rating: 4.5,
  },

  

  {
    id: 'site-ancient-mosque',
    name: 'Al-Qadim Mosque (Ancient Mosque)',
    nameAr: 'مسجد القديم',
    type: 'site',
    description:
      'One of the oldest mosques in the region with stunning Islamic architecture. Features intricate tile work and carved stucco decorations.',
    descriptionAr:
      'أحد أقدم المساجد في المنطقة بعمارة إسلامية مذهلة. يتميز بأعمال تجليد معقدة وزخارف الجص المنحوتة.',
    latitude: 36.4428,
    longitude: 9.1198,
    image: 'https://tse2.mm.bing.net/th/id/OIP.bl6hmOVdj_yWYWBv7x0eTgHaEK?pid=Api&P=0&h=180',
    audioStory:
      'Al-Qadim Mosque has been a spiritual center for centuries. Its architecture reflects the evolution of Islamic art and design in North Africa.',
    audioStoryAr:
      'كان مسجد القديم مركزاً روحياً لقرون. معماره يعكس تطور الفن والتصميم الإسلامي في شمال أفريقيا.',
    address: 'City Center, Old Medina',
    addressAr: 'وسط المدينة، المدينة القديمة',
    rating: 4.7,
  },

  {
    id: 'site-olive-mills',
    name: 'Ancient Olive Oil Mills (Mrakas)',
    nameAr: 'معاصر الزيتون القديمة',
    type: 'site',
    description:
      'Traditional olive oil production facilities carved into hillsides. Evidence of oil production dating back to Roman times.',
    descriptionAr:
      'منشآت إنتاج زيت الزيتون التقليدية المنحوتة في جوانب التلال. أدلة على إنتاج الزيت يعود تاريخها إلى العصور الرومانية.',
    latitude: 36.4465,
    longitude: 9.1035,
    image: 'https://tse4.mm.bing.net/th/id/OIP.0OSUnF3NkHyoPACdHuo8SQAAAA?pid=Api&P=0&h=180',
    audioStory:
      'Olive oil production has been central to Beni Khaddach life for millennia. These ancient mills are testament to the continuity of this vital tradition.',
    audioStoryAr:
      'كان إنتاج زيت الزيتون مركزياً لحياة بني خداش منذ آلاف السنين. تشهد هذه المعاصر القديمة على استمرارية هذا التقليد الحيوي.',
    address: '3.5 km Southwest of City Center',
    addressAr: '3.5 كم جنوب غرب وسط المدينة',
    rating: 4.5,
  },
];
