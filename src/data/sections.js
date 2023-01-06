const sections = [
  {
    "char": "a",
    "id": "sec1",
    "imgSrc": require("../imgs/asprinprotect100.jpg"),
    "title": "ASPIRIN PROTECT 100mg",
    "payAttention": "المعلومات الواردة عن الدواء مبنية على النشرات الطبية للدواء، مع هذا فإنها لا تشكل بديلا عن استشارة الطبيب.",
    "content": {
      name: "اسبرين بروتيكت 100",
      formation: `
      أسيتيل ساليسيلك أسيد (الأسبرين) ينتمي إلى عائلة مضادات الالتهاب غير الستيرويدية، التي تعمل على تثبيط عمل إنزيم يسمى إنزيم الأكسدة الحلقي، المسؤول عن تصنيع مواد في الجسم تسبب الالتهاب والألم، ويمنع تراكم الصفائح الدموية في الدم مما يمنع عملية التجلط.
      `,
      aboutItem: `انتشر استخدام الأسبرين منذ أكثر من 80 عامًا وهو مضاد غير استرويدي للالتهاب يُستخدم لتسكين الآلام، وخفيض درجة الحرارة، وتقليل أعراض التهاب المفاصل، كما أنه يُساهم إذا اُستخدم بكمية قليلة بمنع تكوُّن خَثَرات دموية.
      هناك عدة استعمالات للأسبرين كدواء لعلاج الرشح، وآلام الدورة الشهرية، وآلام الرأس وكذلك آلام العضلات والمفاصل.
      إحدى أبرز الآثار الجانبية للأسبرين هي تسببه بتهييج المعدة، وبالنزيف، كما أنه من الممكن أن يُسبب داء رِيِّي (Reyes) وهو مرض نادر يُصيب الدماغ والكبد ويظهر بشكل عام لدى الأطفال.`,
      pharmacistForm: "أقراص - أقراص مغلفة - كبسولات",
      doses: "أستشر الصيدلي",
      storage_preservation: "يجب حفظ الدواء في عبوة محكمة الإغلاق بعيدًا عن متناول أيدي الأطفال.",
      forgettingAdose: "يجب أخذ الجرعة المنسية عند تذكرها فورًا أما إذا كان موعد الجرعة التالية خلال ساعتين فيتم أخذ جرعة واحدة فورًا مع ترك الجرعة التالية.",
      overdose: "يجب التوجه فورًا لغرفة الطوارئ في أقرب مستشفى."
    },
    "warnings": {
      pregnancy: ` يجب استشارة الطبيب حول استخدامه إذ يُستخدم الأسبرين في الثلث الأول والثاني بحذر ولكن لا يُنصح باستخدام دواء الأسبرين خلال الثلث الثالث من الحمل.
      درجة الخطورة: B.`,
      breastfeeding: `ينتقل الدواء لحليب الأم لذا يجب استشارة الطبيب قبل تناوله.
      درجة الخطورة: غير مُحددة.`,
      babies: "لا يُنصح باستخدامه للأطفال دون عمر 12 عامًا.",
      eldery: "ليست هنالك مشكلات خاصة."
    },
    "price": 50,
    "category": "one"
  },
  {
    "char": "b",
    "id": "sec2",
    "imgSrc": require("../imgs/brufen400tab.jpg"),
    "title": "BRUFEN 400 MG TAB",
    "payAttention": "المعلومات الواردة عن الدواء مبنية على النشرات الطبية للدواء، مع هذا فإنها لا تشكل بديلا عن استشارة الطبيب.",
    "content": {
      name: "بروفين 400 أقراص",
      formation: "أيبوبروفين",
      aboutItem: `أيبوبروفين (Ibuprofen) هو دواء مضاد للالتهاب غير الاسترويدي (Nonsteroidal anti-inflammatory drug).
      يُستخدم الأيبوبروفين في الآتي:
تسكين الأوجاع والتخفيف من الألم والتصلب عند الإصابة بالتهاب المفاصل.
علاج أعراض التهاب المفاصل الروماتويدي (Rheumatoid arthritis) والفُصال العظمي (Osteoarthritis).
تخفيف أعراض مرض النقرس (Gout).
تسكين وجع الرأس الخفيف إلى المتوسط.
تسكين الآلام والانقباضات المرافقة للدورة الشهرية.
تخفيف آلام الأسنان.
خفض الحرارة.
`,
      pharmacistForm: "أقراص - كبسولات - جل أو كريم - شراب - لبوس - حقن",
      doses: "تختلف الجرعة باختلاف دواعي الاستخدام، ولكن بشكل عام تكون الجرعة للبالغين بين 200 - 400 ملليغرام.",
      storage_preservation: "يجب حفظ الدواء في علبة مغلقة على درجة حرارة الغرفة، وبعيدًا عن متناول أيدي الأطفال.",
      forgettingAdose: "بشكل عام يُعطى الأيبوبروفين عند الحاجة، ولكن في حال طلب الطبيب تناوله بشكل متتابع يجب أخذ الجرعة عند تذكرها، وتجنب مضاعفة الجرعة.",
      overdose: "يجب الاتصال على الطوارئ فورًا عند تناول جرعة زائدة منه"
    },
    "warnings": {
      pregnancy: "يُمكن استخدام دواء الأيبوبروفين بين الأسبوع 10 - 20 من الحمل في حال كانت فائدته تفوق مخاطره، ولكن يُمنع استخدامه في الثلث الأخير من الحمل؛ لأنه يُسبب الإغلاق المبكر لقناة الجنين.  تصنيف الدواء للحامل: فئة (C).",
      breastfeeding: "ينتقل هذا الدواء إلى حليب الأم، لكن عند تناوله بالجرعات العادية فمن غير المحتمل أن يكون له أي تأثير أو مضاعفات سلبية على الرضيع.",
      babies: "يجب عدم إعطاؤه تحت سن 6 أشهر.",
      eldery: "هنالك حاجة لتقليل الجرعة الدوائية اعتمادًا على وظائف الكلى."
    },
    "price": 50,
    "category": "one"
  },
  {
    "char": "c",
    "id": "sec3",
    "imgSrc": "https://picsum.photos/id/3/720/480",
    "title": "منتج3",
    "content": "شرح تفصيلي للمنتج",
    "price": 50,
    "category": "one"
  },
  {
    "char": "d",
    "id": "sec4",
    "imgSrc": "https://picsum.photos/id/4/720/480",
    "title": "منتج4",
    "content": "شرح تفصيلي للمنتج",
    "price": 50,
    "category": "two"
  },
  {
    "char": "e",
    "id": "sec5",
    "imgSrc": "https://picsum.photos/id/5/720/480",
    "title": "منتج5",
    "content": "شرح تفصيلي للمنتج",
    "price": 50,
    "category": "two"
  },
  {
    "char": "f",
    "id": "sec6",
    "imgSrc": "https://picsum.photos/id/6/720/480",
    "title": "منتج6",
    "content": "شرح تفصيلي للمنتج",
    "price": 50,
    "category": "three"
  },
  {
    "char": "g",
    "id": "sec7",
    "imgSrc": "https://picsum.photos/id/7/720/480",
    "title": "منتج7",
    "content": "شرح تفصيلي للمنتج",
    "price": 50,
    "category": "four"
  },
  {
    "char": "h",
    "id": "sec8",
    "imgSrc": "https://picsum.photos/id/8/720/480",
    "title": "منتج8",
    "content": "شرح تفصيلي للمنتج",
    "price": 50,
    "category": "four"
  },
  {
    "char": "i",
    "id": "sec9",
    "imgSrc": "https://picsum.photos/id/9/720/480",
    "title": "منتج9",
    "content": "شرح تفصيلي للمنتج",
    "price": 50,
    "category": "four"
  },
  {
    "char": "j",
    "id": "sec10",
    "imgSrc": "https://picsum.photos/id/10/720/480",
    "title": "منتج10",
    "content": "شرح تفصيلي للمنتج",
    "price": 50,
    "category": "five"
  },
  {
    "char": "k",
    "id": "sec11",
    "imgSrc": "https://picsum.photos/id/11/720/480",
    "title": "منتج11",
    "content": "شرح تفصيلي للمنتج",
    "price": 50,
    "category": "six"
  },
  {
    "char": "l",
    "id": "sec12",
    "imgSrc": "https://picsum.photos/id/12/720/480",
    "title": "منتج12",
    "content": "شرح تفصيلي للمنتج",
    "price": 50,
    "category": "six"
  },
  {
    "char": "m",
    "id": "sec13",
    "imgSrc": "https://picsum.photos/id/13/720/480",
    "title": "منتج13",
    "content": "شرح تفصيلي للمنتج",
    "price": 50,
    "category": "seven"
  },
  {
    "char": "n",
    "id": "sec14",
    "imgSrc": "https://picsum.photos/id/14/720/480",
    "title": "منتج14",
    "content": "شرح تفصيلي للمنتج",
    "price": 50,
    "category": "eight"
  },
  {
    "char": "o",
    "id": "sec15",
    "imgSrc": "https://picsum.photos/id/15/720/480",
    "title": "منتج15",
    "content": "شرح تفصيلي للمنتج",
    "price": 50,
    "category": "eight"
  },
  {
    "char": "p",
    "id": "sec16",
    "imgSrc": "https://picsum.photos/id/16/720/480",
    "title": "منتج16",
    "content": "شرح تفصيلي للمنتج",
    "price": 50,
    "category": "eight"
  },
  {
    "char": "q",
    "id": "sec17",
    "imgSrc": "https://picsum.photos/id/17/720/480",
    "title": "منتج17",
    "content": "شرح تفصيلي للمنتج",
    "price": 50,
    "category": "eight"
  },
  {
    "char": "r",
    "id": "sec18",
    "imgSrc": "https://picsum.photos/id/18/720/480",
    "title": "منتج18",
    "content": "شرح تفصيلي للمنتج",
    "price": 50,
    "category": "eight"
  },
  {
    "char": "s",
    "id": "sec19",
    "imgSrc": "https://picsum.photos/id/18/720/480",
    "title": "منتج18",
    "content": "شرح تفصيلي للمنتج",
    "price": 50,
    "category": "eight"
  },
  {
    "char": "t",
    "id": "sec20",
    "imgSrc": "https://picsum.photos/id/18/720/480",
    "title": "منتج18",
    "content": "شرح تفصيلي للمنتج",
    "price": 50,
    "category": "eight"
  },
  {
    "char": "u",
    "id": "sec21",
    "imgSrc": "https://picsum.photos/id/18/720/480",
    "title": "منتج18",
    "content": "شرح تفصيلي للمنتج",
    "price": 50,
    "category": "eight"
  },
  {
    "char": "v",
    "id": "sec22",
    "imgSrc": "https://picsum.photos/id/18/720/480",
    "title": "منتج18",
    "content": "شرح تفصيلي للمنتج",
    "price": 50,
    "category": "eight"
  },
  {
    "char": "w",
    "id": "sec23",
    "imgSrc": "https://picsum.photos/id/18/720/480",
    "title": "منتج18",
    "content": "شرح تفصيلي للمنتج",
    "price": 50,
    "category": "eight"
  },
  {
    "char": "x",
    "id": "sec24",
    "imgSrc": "https://picsum.photos/id/18/720/480",
    "title": "منتج18",
    "content": "شرح تفصيلي للمنتج",
    "price": 50,
    "category": "eight"
  },
  {
    "char": "y",
    "id": "sec25",
    "imgSrc": "https://picsum.photos/id/18/720/480",
    "title": "منتج18",
    "content": "شرح تفصيلي للمنتج",
    "price": 50,
    "category": "eight"
  },
  {
    "char": "z",
    "id": "sec26",
    "imgSrc": "https://picsum.photos/id/18/720/480",
    "title": "منتج18",
    "content": "شرح تفصيلي للمنتج",
    "price": 50,
    "category": "eight"
  }
];

export default sections;