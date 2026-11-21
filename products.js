const SMARTPICK_CATEGORIES=[
{n:'Phones & accessories',i:'📱',d:'Phone essentials and practical accessories',q:['USB-C fast charger','wireless earbuds','phone stand','power bank','phone case']},
{n:'Computers & desk',i:'💻',d:'Tools for work, study and home offices',q:['laptop stand','wireless keyboard mouse combo','USB-C hub','monitor light bar','webcam']},
{n:'Smart home',i:'🏠',d:'Simple upgrades for connected homes',q:['smart plug','smart LED bulbs','WiFi security camera','motion sensor light','smart speaker']},
{n:'Kitchen essentials',i:'🍳',d:'Helpful everyday kitchen tools',q:['air fryer','digital kitchen scale','electric kettle','food storage containers','vegetable chopper']},
{n:'Home organization',i:'🧺',d:'Make everyday spaces work better',q:['drawer organizers','under sink organizer','closet storage bins','cable organizer','shoe rack']},
{n:'Cleaning',i:'🧹',d:'Practical cleaning tools and supplies',q:['robot vacuum','cordless vacuum','microfiber mop','handheld steam cleaner','electric scrubber']},
{n:'Travel',i:'🧳',d:'Travel gear for smoother trips',q:['packing cubes','travel backpack','universal travel adapter','luggage scale','neck pillow']},
{n:'Fitness & wellness',i:'🏃',d:'Gear for movement and everyday wellbeing',q:['resistance bands','yoga mat','adjustable dumbbells','fitness tracker','massage gun']},
{n:'Lighting',i:'💡',d:'Lighting for work, rooms and outdoor spaces',q:['desk lamp','LED strip lights','solar garden lights','rechargeable flashlight','motion sensor night light']},
{n:'Everyday tools',i:'🛠️',d:'Handy tools for small jobs',q:['precision screwdriver set','digital multimeter','laser measure','tool kit','cordless drill']},
{n:'Audio & entertainment',i:'🎧',d:'Enjoy music, movies and entertainment',q:['Bluetooth speaker','noise cancelling headphones','streaming device','portable projector','gaming headset']},
{n:'Personal care',i:'🧴',d:'Useful everyday personal care gear',q:['electric toothbrush','hair trimmer','hair dryer','electric shaver','travel toiletry organizer']}
];
const SMARTPICK_PRODUCTS=SMARTPICK_CATEGORIES.flatMap(c=>c.q.map(q=>({name:q.charAt(0).toUpperCase()+q.slice(1),cat:c.n,icon:c.i,query:q})));
