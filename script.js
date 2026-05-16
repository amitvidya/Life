const questionPools = [
  {
    category: "आध्यात्म",
    questions: [
      {
        text: "जब मन बहुत बेचैन हो, तब आप क्या करना उचित मानते हैं?",
        options: [
          { title: "शांत ध्यान", text: "कुछ समय मौन रहकर श्वास पर ध्यान देना।", type: "spiritual" },
          { title: "सही विचार", text: "देखना कि कौन-सा कदम धर्म और नीति के अनुकूल है।", type: "niti" },
          { title: "तुरंत समाधान", text: "कारण पहचानकर सीधे सुधार की योजना बनाना।", type: "practical" }
        ]
      },
      {
        text: "आपके लिए आत्मिक शांति पाने का सबसे सरल मार्ग क्या है?",
        options: [
          { title: "प्रार्थना", text: "ईश्वर स्मरण और अंतर्मन से जुड़ना।", type: "spiritual" },
          { title: "सदाचार", text: "सही आचरण से मन को हल्का रखना।", type: "niti" },
          { title: "दिनचर्या", text: "संतुलित दिनचर्या और आराम से मन को स्थिर करना।", type: "practical" }
        ]
      },
      {
        text: "दिन की शुरुआत किस भावना से करना आपको सही लगता है?",
        options: [
          { title: "कृतज्ञता", text: "ईश्वर और जीवन के प्रति धन्यवाद से शुरुआत करना।", type: "spiritual" },
          { title: "संकल्प", text: "आज सही और न्यायपूर्ण व्यवहार करने का प्रण लेना।", type: "niti" },
          { title: "योजना", text: "दिन के कामों की साफ सूची बनाना।", type: "practical" }
        ]
      },
      {
        text: "कठिन समय में आप भीतर की शक्ति कैसे खोजते हैं?",
        options: [
          { title: "अंतर-चिंतन", text: "खुद के भीतर धैर्य और विश्वास को याद करना।", type: "spiritual" },
          { title: "आदर्श स्मरण", text: "सत्य और कर्तव्य को याद रखकर टिके रहना।", type: "niti" },
          { title: "चरणबद्ध काम", text: "समस्या को छोटे हिस्सों में बांटकर आगे बढ़ना।", type: "practical" }
        ]
      },
      {
        text: "आपके अनुसार प्रार्थना का सबसे बड़ा लाभ क्या है?",
        options: [
          { title: "मन की शांति", text: "अंतर में स्थिरता और करुणा बढ़ती है।", type: "spiritual" },
          { title: "विवेक", text: "सही-गलत को समझने की स्पष्टता मिलती है।", type: "niti" },
          { title: "साहस", text: "चुनौतियों का सामना करने की शक्ति मिलती है।", type: "practical" }
        ]
      },
      {
        text: "यदि आपको कुछ समय अकेले मिले, तो आप क्या चुनेंगे?",
        options: [
          { title: "मौन साधना", text: "शांत बैठकर भीतर की आवाज़ सुनना।", type: "spiritual" },
          { title: "स्वयं समीक्षा", text: "अपने व्यवहार और निर्णयों की जांच करना।", type: "niti" },
          { title: "लक्ष्य देखना", text: "आने वाले कामों और प्राथमिकताओं को तय करना।", type: "practical" }
        ]
      },
      {
        text: "आध्यात्मिक अभ्यास का असली उद्देश्य आप क्या मानते हैं?",
        options: [
          { title: "आत्मिक जागरूकता", text: "स्वयं को गहराई से जानना और शांत होना।", type: "spiritual" },
          { title: "चरित्र शुद्धि", text: "आचरण को अधिक सत्य और नैतिक बनाना।", type: "niti" },
          { title: "जीवन संतुलन", text: "मन और काम के बीच बेहतर तालमेल बनाना।", type: "practical" }
        ]
      }
    ]
  },
  {
    category: "नीति शास्त्र",
    questions: [
      {
        text: "यदि किसी लाभ के लिए असत्य बोलना पड़े, तो आप क्या चुनेंगे?",
        options: [
          { title: "सत्य", text: "सत्य ही मन को शांति देता है।", type: "spiritual" },
          { title: "असत्य से इनकार", text: "गलत लाभ की जगह नीति को चुनना।", type: "niti" },
          { title: "दूसरा रास्ता", text: "ऐसा समाधान ढूंढना जिसमें झूठ न बोलना पड़े।", type: "practical" }
        ]
      },
      {
        text: "आपके अनुसार सही आचरण की पहचान कैसे होती है?",
        options: [
          { title: "अंतर की शांति", text: "जिससे मन शांत रहे, वह सही है।", type: "spiritual" },
          { title: "धर्म के अनुसार", text: "जो न्याय, सत्य और मर्यादा से मेल खाए।", type: "niti" },
          { title: "परिणाम से", text: "जो सबके लिए उपयोगी और स्थिर परिणाम दे।", type: "practical" }
        ]
      },
      {
        text: "जब कोई व्यक्ति गलती करे, तो न्यायपूर्ण प्रतिक्रिया क्या होनी चाहिए?",
        options: [
          { title: "करुणा", text: "पहले उसे समझने और सुधारने का अवसर देना।", type: "spiritual" },
          { title: "उचित अनुशासन", text: "गलती के अनुसार स्पष्ट और न्यायपूर्ण प्रतिक्रिया देना।", type: "niti" },
          { title: "सुधार योजना", text: "ऐसा रास्ता बनाना कि गलती दोबारा न हो।", type: "practical" }
        ]
      },
      {
        text: "यदि मित्र गलत रास्ते पर जा रहा हो, तो आप क्या करेंगे?",
        options: [
          { title: "शांत समझाना", text: "प्रेम और धैर्य से उसे समझाना।", type: "spiritual" },
          { title: "साफ चेतावनी", text: "उसे स्पष्ट बताना कि यह मार्ग अनुचित है।", type: "niti" },
          { title: "विकल्प देना", text: "उसके लिए बेहतर रास्ता सुझाना।", type: "practical" }
        ]
      },
      {
        text: "आपके लिए सत्य का मूल्य किस बात में सबसे अधिक है?",
        options: [
          { title: "मन की शुद्धि", text: "सत्य से भीतर हल्कापन और शांति मिलती है।", type: "spiritual" },
          { title: "चरित्र", text: "सत्यनिष्ठा ही व्यक्ति की असली पहचान है।", type: "niti" },
          { title: "विश्वास", text: "सत्य से रिश्ते और काम दोनों मजबूत होते हैं।", type: "practical" }
        ]
      },
      {
        text: "एक कठिन निर्णय में नीति का पालन कैसे किया जाना चाहिए?",
        options: [
          { title: "धैर्य से", text: "जल्दबाज़ी छोड़कर विवेक से सोचना।", type: "spiritual" },
          { title: "सिद्धांत से", text: "फायदे के बजाय सिद्धांत के आधार पर फैसला करना।", type: "niti" },
          { title: "प्रभाव देखकर", text: "निर्णय का असर सब पर क्या होगा, यह देखना।", type: "practical" }
        ]
      },
      {
        text: "जब सही मार्ग कठिन हो और गलत आसान, तब आप क्या चुनेंगे?",
        options: [
          { title: "धर्म का सहारा", text: "कठिन होने पर भी सही मार्ग पर टिकना।", type: "spiritual" },
          { title: "नीति का पथ", text: "सुविधा के बजाय सिद्धांत को चुनना।", type: "niti" },
          { title: "सहनशील कदम", text: "कठिन सही मार्ग को चरणबद्ध तरीके से अपनाना।", type: "practical" }
        ]
      }
    ]
  },
  {
    category: "जीवन मूल्य",
    questions: [
      {
        text: "किस गुण को आप जीवन का मूल आधार मानते हैं?",
        options: [
          { title: "करुणा", text: "दूसरों के सुख-दुख को महसूस करना।", type: "spiritual" },
          { title: "सत्यनिष्ठा", text: "हर परिस्थिति में ईमानदारी बनाए रखना।", type: "niti" },
          { title: "जिम्मेदारी", text: "अपनी भूमिका को भरोसे के साथ निभाना।", type: "practical" }
        ]
      },
      {
        text: "एक अच्छा इंसान बनने के लिए सबसे ज़रूरी क्या है?",
        options: [
          { title: "दया", text: "मन में नम्रता और सहानुभूति रखना।", type: "spiritual" },
          { title: "सदाचार", text: "आचरण को धर्म और सत्य से जोड़ना।", type: "niti" },
          { title: "व्यवहार", text: "लोगों के साथ संतुलित और उपयोगी रहना।", type: "practical" }
        ]
      },
      {
        text: "आपके लिए सम्मान किस चीज़ से कमाया जाता है?",
        options: [
          { title: "विनम्रता", text: "शांत और सच्चे स्वभाव से।", type: "spiritual" },
          { title: "चरित्र", text: "सही और नैतिक आचरण से।", type: "niti" },
          { title: "कार्य", text: "जिम्मेदारी से काम पूरा करने से।", type: "practical" }
        ]
      },
      {
        text: "यदि आपको एक जीवन-मूल्य हमेशा निभाना हो, तो आप क्या चुनेंगे?",
        options: [
          { title: "आत्म-करुणा", text: "अपने और दूसरों के लिए दयालु रहना।", type: "spiritual" },
          { title: "सत्य", text: "किसी भी स्थिति में सच्चाई से न हटना।", type: "niti" },
          { title: "कर्तव्य", text: "हर हाल में जिम्मेदारी निभाना।", type: "practical" }
        ]
      },
      {
        text: "आपके अनुसार सच्ची महानता किसमें है?",
        options: [
          { title: "अहंकार त्याग", text: "विनम्र और शांत बने रहने में।", type: "spiritual" },
          { title: "उच्च चरित्र", text: "न्यायपूर्ण और नीति से भरे जीवन में।", type: "niti" },
          { title: "उपयोगी कर्म", text: "दूसरों के जीवन में अच्छा असर डालने में।", type: "practical" }
        ]
      },
      {
        text: "लोगों के साथ व्यवहार करते समय कौन-सा मूल्य सबसे आगे होना चाहिए?",
        options: [
          { title: "संवेदना", text: "दूसरे के मन को समझना।", type: "spiritual" },
          { title: "निष्पक्षता", text: "सबके साथ न्यायपूर्ण रहना।", type: "niti" },
          { title: "संतुलन", text: "स्थिति के अनुसार समझदारी से पेश आना।", type: "practical" }
        ]
      },
      {
        text: "कठिन परिस्थितियों में कौन-सा मूल्य इंसान को संभालता है?",
        options: [
          { title: "विश्वास", text: "भीतर भरोसा बनाए रखना।", type: "spiritual" },
          { title: "धर्म", text: "सही और गलत का बोध न छोड़ना।", type: "niti" },
          { title: "धैर्य", text: "घबराए बिना धीरे-धीरे आगे बढ़ना।", type: "practical" }
        ]
      }
    ]
  },
  {
    category: "व्यवहार ज्ञान",
    questions: [
      {
        text: "यदि दो लोगों में विवाद हो जाए, तो आप क्या करेंगे?",
        options: [
          { title: "शांत करवाना", text: "पहले दोनों को शांत करने की कोशिश करूंगा।", type: "spiritual" },
          { title: "न्याय देखना", text: "समझूंगा कि सही कौन है और गलत कौन।", type: "niti" },
          { title: "समाधान देना", text: "झगड़ा खत्म करने का व्यावहारिक रास्ता सुझाऊंगा।", type: "practical" }
        ]
      },
      {
        text: "कार्यस्थल या परिवार में तनाव होने पर आपकी सोच क्या रहती है?",
        options: [
          { title: "धैर्य रखना", text: "भावनाओं को शांत करके बात सुनना।", type: "spiritual" },
          { title: "मर्यादा रखना", text: "बातचीत में सीमा और सम्मान बनाए रखना।", type: "niti" },
          { title: "समय पर हल", text: "तनाव को जल्दी और साफ तरीके से सुलझाना।", type: "practical" }
        ]
      },
      {
        text: "यदि किसी ने आपकी बात गलत समझ ली हो, तो आप क्या करेंगे?",
        options: [
          { title: "शांत स्पष्टता", text: "गुस्सा किए बिना समझाने की कोशिश करूंगा।", type: "spiritual" },
          { title: "सही बात रखना", text: "साफ और सच्चाई से अपनी बात दोबारा कहूंगा।", type: "niti" },
          { title: "उदाहरण दूंगा", text: "ऐसा उदाहरण दूंगा जिससे बात तुरंत समझ आए।", type: "practical" }
        ]
      },
      {
        text: "आपके अनुसार समझदारी से बातचीत करने का सबसे अच्छा तरीका क्या है?",
        options: [
          { title: "सुनना", text: "पहले सामने वाले की भावना समझना।", type: "spiritual" },
          { title: "सच बोलना", text: "स्पष्ट और ईमानदार संवाद रखना।", type: "niti" },
          { title: "सीधी बात", text: "कम शब्दों में उपयोगी बात करना।", type: "practical" }
        ]
      },
      {
        text: "जब निर्णय जल्दी लेना हो, तब आप किस बात पर भरोसा करते हैं?",
        options: [
          { title: "अंतर-बोध", text: "भीतर की शांति और संकेत पर।", type: "spiritual" },
          { title: "सिद्धांत", text: "सही-गलत के स्पष्ट बोध पर।", type: "niti" },
          { title: "तथ्य", text: "उपलब्ध जानकारी और असर पर।", type: "practical" }
        ]
      },
      {
        text: "यदि कोई व्यक्ति क्रोधित हो, तो सबसे उचित प्रतिक्रिया क्या होगी?",
        options: [
          { title: "शांत रहना", text: "उसकी आग में अपनी आग न जोड़ना।", type: "spiritual" },
          { title: "मर्यादित जवाब", text: "शांत लेकिन दृढ़ भाषा में जवाब देना।", type: "niti" },
          { title: "विराम लेना", text: "समय देकर बाद में हल निकालना।", type: "practical" }
        ]
      },
      {
        text: "समूह में मतभेद होने पर आपकी भूमिका क्या होती है?",
        options: [
          { title: "माहौल हल्का करना", text: "तनाव कम करके सबको साथ लाना।", type: "spiritual" },
          { title: "सही पक्ष रखना", text: "जो उचित हो, उसका समर्थन करना।", type: "niti" },
          { title: "योजना बनाना", text: "काम आगे बढ़ाने लायक निर्णय बनाना।", type: "practical" }
        ]
      }
    ]
  },
  {
    category: "आत्म-चिंतन",
    questions: [
      {
        text: "जब आप कोई गलती करते हैं, तो सबसे पहले क्या सोचते हैं?",
        options: [
          { title: "सीख क्या है", text: "इस अनुभव से भीतर क्या सीख मिली।", type: "spiritual" },
          { title: "गलती कहाँ थी", text: "कौन-सा निर्णय नैतिक रूप से गलत था।", type: "niti" },
          { title: "अब क्या करूं", text: "अगली बार सुधार के लिए क्या कदम होंगे।", type: "practical" }
        ]
      },
      {
        text: "अपने स्वभाव को समझने के लिए आप क्या तरीका सही मानते हैं?",
        options: [
          { title: "मौन और ध्यान", text: "शांत रहकर अपने मन को देखना।", type: "spiritual" },
          { title: "आचरण परखना", text: "अपने निर्णयों और व्यवहार का मूल्यांकन करना।", type: "niti" },
          { title: "आदतें देखना", text: "रोज़मर्रा की आदतों और प्रतिक्रियाओं पर ध्यान देना।", type: "practical" }
        ]
      },
      {
        text: "दिन के अंत में आप खुद को कैसे परखना पसंद करेंगे?",
        options: [
          { title: "मन की स्थिति", text: "देखना कि मन कितना शांत और संतुलित रहा।", type: "spiritual" },
          { title: "कर्म की शुद्धता", text: "देखना कि आज का आचरण कितना सही था।", type: "niti" },
          { title: "काम की प्रगति", text: "जांचना कि क्या जरूरी कार्य पूरे हुए।", type: "practical" }
        ]
      },
      {
        text: "आपके अनुसार आत्म-चिंतन का असली लाभ क्या है?",
        options: [
          { title: "स्वयं से जुड़ाव", text: "अपने भीतर की आवाज़ को समझना।", type: "spiritual" },
          { title: "सुधरा चरित्र", text: "गलतियों को पहचानकर सही बनना।", type: "niti" },
          { title: "बेहतर निर्णय", text: "अगली बार अधिक समझदारी से काम लेना।", type: "practical" }
        ]
      },
      {
        text: "यदि कोई कमी अपने भीतर दिखे, तो आपका पहला कदम क्या होगा?",
        options: [
          { title: "स्वीकार करना", text: "बिना दोष दिए उसे शांत मन से मानना।", type: "spiritual" },
          { title: "नैतिक सुधार", text: "देखना कि इसे सही आचरण से कैसे बदला जाए।", type: "niti" },
          { title: "आदत बदलना", text: "व्यवहारिक रूप से नई आदत बनाना।", type: "practical" }
        ]
      },
      {
        text: "जब आप भ्रमित हों, तो अपने भीतर स्पष्टता कैसे लाते हैं?",
        options: [
          { title: "शांत बैठना", text: "मौन से मन को साफ करना।", type: "spiritual" },
          { title: "सही-गलत तौलना", text: "धर्म और नीति के आधार पर देखना।", type: "niti" },
          { title: "सूची बनाना", text: "विकल्प और परिणाम लिखकर देखना।", type: "practical" }
        ]
      },
      {
        text: "जीवन के अनुभवों से सीख लेने का सबसे अच्छा तरीका क्या है?",
        options: [
          { title: "भीतर उतारना", text: "अनुभवों को आत्म-बोध में बदलना।", type: "spiritual" },
          { title: "आचरण सुधारना", text: "उन्हें चरित्र और नीति से जोड़ना।", type: "niti" },
          { title: "अगली रणनीति", text: "उन्हें भविष्य के बेहतर कदमों में बदलना।", type: "practical" }
        ]
      }
    ]
  },
  {
    category: "निर्णय शक्ति",
    questions: [
      {
        text: "जब दो रास्तों में चयन करना हो, तो आप क्या देखेंगे?",
        options: [
          { title: "मन की शांति", text: "कौन-सा रास्ता भीतर शांति देता है।", type: "spiritual" },
          { title: "सही मार्ग", text: "कौन-सा रास्ता धर्म और नीति के निकट है।", type: "niti" },
          { title: "दीर्घ लाभ", text: "कौन-सा रास्ता बेहतर परिणाम देगा।", type: "practical" }
        ]
      },
      {
        text: "एक बड़े निर्णय से पहले आपकी प्राथमिकता क्या होती है?",
        options: [
          { title: "स्थिर मन", text: "पहले मन को शांत करना।", type: "spiritual" },
          { title: "नैतिक स्पष्टता", text: "देखना कि निर्णय कितना उचित है।", type: "niti" },
          { title: "यथार्थ जांच", text: "तथ्यों और असर को समझना।", type: "practical" }
        ]
      },
      {
        text: "आपके अनुसार सही निर्णय में सबसे ज़रूरी तत्व क्या है?",
        options: [
          { title: "विवेक", text: "भीतर की सजगता और संतुलन।", type: "spiritual" },
          { title: "न्याय", text: "सही-गलत का स्पष्ट बोध।", type: "niti" },
          { title: "उपयोगिता", text: "परिणाम और व्यवहारिक असर।", type: "practical" }
        ]
      },
      {
        text: "यदि भावना और तर्क अलग दिशा में हों, तो आप क्या करेंगे?",
        options: [
          { title: "भीतर सुनूंगा", text: "शांत होकर भाव और विवेक दोनों को देखूंगा।", type: "spiritual" },
          { title: "सिद्धांत चुनूंगा", text: "जो नैतिक रूप से सही हो, उसे चुनूंगा।", type: "niti" },
          { title: "संतुलन बनाऊंगा", text: "दोनों का व्यावहारिक संतुलन खोजूंगा।", type: "practical" }
        ]
      },
      {
        text: "निर्णय लेते समय दीर्घकालिक परिणामों को आप कितना महत्व देते हैं?",
        options: [
          { title: "जीवन दिशा", text: "निर्णय आत्मिक यात्रा को कहाँ ले जाएगा, यह देखता हूं।", type: "spiritual" },
          { title: "चरित्र प्रभाव", text: "यह निर्णय मेरे मूल्यों को कैसे प्रभावित करेगा।", type: "niti" },
          { title: "भविष्य असर", text: "आगे के परिणामों को बहुत महत्व देता हूं।", type: "practical" }
        ]
      },
      {
        text: "अगर समय कम हो और निर्णय कठिन, तब आपका तरीका क्या होगा?",
        options: [
          { title: "शांत केंद्र", text: "जल्दी में भी मन को स्थिर रखने की कोशिश करूंगा।", type: "spiritual" },
          { title: "सही पक्ष", text: "कम से कम इतना देखूंगा कि निर्णय अनुचित न हो।", type: "niti" },
          { title: "मुख्य बिंदु", text: "ज़रूरी तथ्य पकड़कर तेज निर्णय लूंगा।", type: "practical" }
        ]
      },
      {
        text: "यदि किसी निर्णय पर संदेह हो, तो आप कैसे आगे बढ़ेंगे?",
        options: [
          { title: "ध्यान करूँगा", text: "भीतर से स्पष्टता पाने की कोशिश करूंगा।", type: "spiritual" },
          { title: "मानदंड देखूंगा", text: "सही-गलत के सिद्धांतों से मिलान करूंगा।", type: "niti" },
          { title: "सलाह और तथ्य", text: "जानकारी लेकर व्यावहारिक फैसला करूंगा।", type: "practical" }
        ]
      }
    ]
  },
  {
    category: "दैनिक जीवन दृष्टि",
    questions: [
      {
        text: "आपके अनुसार सफल दिन की शुरुआत कैसे होनी चाहिए?",
        options: [
          { title: "शांत मन", text: "प्रार्थना, ध्यान या कृतज्ञता से।", type: "spiritual" },
          { title: "सही संकल्प", text: "आज का दिन ईमानदारी और मर्यादा से जीने के संकल्प से।", type: "niti" },
          { title: "स्पष्ट योजना", text: "दिन की प्राथमिकताएं तय करके।", type: "practical" }
        ]
      },
      {
        text: "रोज़मर्रा के जीवन में संतुलन बनाए रखने का सबसे अच्छा तरीका क्या है?",
        options: [
          { title: "आंतरिक शांति", text: "मन को नियमित रूप से शांत करना।", type: "spiritual" },
          { title: "अनुशासित जीवन", text: "आचरण और आदतों में मर्यादा रखना।", type: "niti" },
          { title: "समय प्रबंधन", text: "काम, परिवार और विश्राम में तालमेल रखना।", type: "practical" }
        ]
      },
      {
        text: "यदि बहुत काम हो और समय कम हो, तो आप क्या करेंगे?",
        options: [
          { title: "घबराऊंगा नहीं", text: "पहले मन को शांत रखूंगा।", type: "spiritual" },
          { title: "कर्तव्य क्रम", text: "जो सबसे जरूरी और सही है, उसे पहले करूंगा।", type: "niti" },
          { title: "प्राथमिकता तय", text: "कामों को क्रम से बांटकर शुरू करूंगा।", type: "practical" }
        ]
      },
      {
        text: "आपके लिए जीवन को अर्थपूर्ण बनाने वाली बात क्या है?",
        options: [
          { title: "भीतर का विकास", text: "आत्मा, शांति और चेतना का विस्तार।", type: "spiritual" },
          { title: "सही जीवन", text: "सत्य, न्याय और मूल्यों के साथ जीना।", type: "niti" },
          { title: "उपयोगी कर्म", text: "अपने और दूसरों के लिए अच्छा प्रभाव छोड़ना।", type: "practical" }
        ]
      },
      {
        text: "दैनिक जीवन में खुशी किस चीज़ से सबसे अधिक बढ़ती है?",
        options: [
          { title: "संतोष", text: "छोटी बातों में भी कृतज्ञता महसूस करना।", type: "spiritual" },
          { title: "निर्दोष मन", text: "गलत काम न करने से हल्कापन रहना।", type: "niti" },
          { title: "संतुलित दिन", text: "काम और आराम का सही तालमेल।", type: "practical" }
        ]
      },
      {
        text: "अगर दिन योजना के अनुसार न चले, तो आपकी सोच क्या रहती है?",
        options: [
          { title: "स्वीकार", text: "जो हुआ उसे शांति से स्वीकार कर आगे बढ़ना।", type: "spiritual" },
          { title: "स्थिर सिद्धांत", text: "परिस्थिति बदले पर सही आचरण न बदले।", type: "niti" },
          { title: "नई योजना", text: "स्थिति के अनुसार योजना बदल लेना।", type: "practical" }
        ]
      },
      {
        text: "एक अच्छे जीवन की पहचान आप किसमें देखते हैं?",
        options: [
          { title: "शांत अंतर्मन", text: "भीतर संतुलन और करुणा हो।", type: "spiritual" },
          { title: "उच्च चरित्र", text: "व्यक्ति का आचरण सच्चा और न्यायपूर्ण हो।", type: "niti" },
          { title: "सार्थक जीवन", text: "जीवन जिम्मेदार और उपयोगी हो।", type: "practical" }
        ]
      }
    ]
  }
];

const resultContent = {
  spiritual: {
    title: "आपकी प्रमुख दिशा: आध्यात्मिक चिंतन",
    summary:
      "आपका मन भीतर की शांति, करुणा, आत्म-चिंतन और गहरे अर्थ की ओर स्वाभाविक रूप से आकर्षित होता है।",
    note:
      "आप कठिन परिस्थितियों में भी उत्तर बाहर से कम और भीतर से अधिक खोजते हैं। आपके लिए ध्यान, धैर्य और भावनात्मक संतुलन बड़ी शक्ति हैं।"
  },
  niti: {
    title: "आपकी प्रमुख दिशा: नीतिपरक बुद्धि",
    summary:
      "आपके निर्णयों में सही-गलत का स्पष्ट बोध, सत्य के प्रति सम्मान और उचित आचरण की गहरी जगह दिखाई देती है।",
    note:
      "आप किसी भी स्थिति को केवल लाभ से नहीं, बल्कि न्याय, धर्म और चरित्र की दृष्टि से भी देखते हैं। यही आपकी सबसे बड़ी पहचान है।"
  },
  practical: {
    title: "आपकी प्रमुख दिशा: व्यावहारिक जीवन दृष्टि",
    summary:
      "आप सोच को केवल विचार तक सीमित नहीं रखते, बल्कि उसे समाधान, जिम्मेदारी और कार्य में बदलने की क्षमता रखते हैं।",
    note:
      "आप जीवन के निर्णयों में संतुलन, परिणाम और उपयोगिता को महत्व देते हैं। यही गुण आपको स्थिर और प्रभावी बनाता है।"
  }
};

const rotatingThoughts = [
  "मौन खाली नहीं होता, वह उत्तरों से भरा होता है।",
  "सही आचरण वही है जिसमें लाभ के साथ मर्यादा भी हो।",
  "ज्ञान वही है जो विचार को व्यवहार में बदल दे।",
  "जब मन शांत होता है, तब निर्णय अधिक स्पष्ट होते हैं।"
];

const TOTAL_QUESTIONS = questionPools.length;

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");
const restartTopButton = document.getElementById("restartTopButton");
const nextButton = document.getElementById("nextButton");
const panelTitle = document.getElementById("panelTitle");
const progressChip = document.getElementById("progressChip");
const progressFill = document.getElementById("progressFill");
const questionTag = document.getElementById("questionTag");
const questionCount = document.getElementById("questionCount");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const resultTitle = document.getElementById("resultTitle");
const resultSummary = document.getElementById("resultSummary");
const resultBars = document.getElementById("resultBars");
const resultNote = document.getElementById("resultNote");
const thoughtText = document.getElementById("thoughtText");

let currentQuestions = [];
let currentQuestionIndex = 0;
let selectedType = null;
let scores = {
  spiritual: 0,
  niti: 0,
  practical: 0
};

function showScreen(screenToShow) {
  [startScreen, quizScreen, resultScreen].forEach((screen) => {
    screen.classList.toggle("active", screen === screenToShow);
  });
}

function updateProgress() {
  progressChip.textContent = `${Math.min(currentQuestionIndex, TOTAL_QUESTIONS)} / ${TOTAL_QUESTIONS}`;
  progressFill.style.width = `${(Math.min(currentQuestionIndex, TOTAL_QUESTIONS) / TOTAL_QUESTIONS) * 100}%`;
}

function buildQuizSet() {
  return questionPools.map((pool) => {
    const randomIndex = Math.floor(Math.random() * pool.questions.length);
    return {
      category: pool.category,
      ...pool.questions[randomIndex]
    };
  });
}

function renderQuestion() {
  const question = currentQuestions[currentQuestionIndex];
  selectedType = null;
  nextButton.disabled = true;

  panelTitle.textContent = "प्रश्न पढ़िए और एक विकल्प चुनिए";
  questionTag.textContent = question.category;
  questionCount.textContent = `प्रश्न ${currentQuestionIndex + 1}`;
  questionText.textContent = question.text;
  progressChip.textContent = `${currentQuestionIndex + 1} / ${TOTAL_QUESTIONS}`;
  progressFill.style.width = `${(currentQuestionIndex / TOTAL_QUESTIONS) * 100}%`;
  optionsContainer.innerHTML = "";

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.innerHTML = `
      <span class="option-title">${option.title}</span>
      <span class="option-text">${option.text}</span>
    `;

    button.addEventListener("click", () => {
      selectedType = option.type;
      document.querySelectorAll(".option-button").forEach((item) => {
        item.classList.remove("selected");
      });
      button.classList.add("selected");
      nextButton.disabled = false;
    });

    optionsContainer.appendChild(button);
  });
}

function calculateResultType() {
  const entries = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  return entries[0][0];
}

function renderResult() {
  const winner = calculateResultType();
  const result = resultContent[winner];

  panelTitle.textContent = "आपकी ज्ञान यात्रा का सार";
  progressChip.textContent = `${TOTAL_QUESTIONS} / ${TOTAL_QUESTIONS}`;
  progressFill.style.width = "100%";
  resultTitle.textContent = result.title;
  resultSummary.textContent = result.summary;
  resultNote.textContent = result.note;
  resultBars.innerHTML = "";

  [
    ["आध्यात्म", scores.spiritual],
    ["नीति शास्त्र", scores.niti],
    ["जीवन व्यवहार", scores.practical]
  ].forEach(([label, value]) => {
    const percent = Math.round((value / TOTAL_QUESTIONS) * 100);
    const row = document.createElement("div");
    row.className = "result-row";
    row.innerHTML = `
      <div class="result-row-head">
        <span>${label}</span>
        <span>${percent}%</span>
      </div>
      <div class="result-row-track">
        <div class="result-row-fill" style="width: ${percent}%"></div>
      </div>
    `;
    resultBars.appendChild(row);
  });
}

function resetScores() {
  scores = {
    spiritual: 0,
    niti: 0,
    practical: 0
  };
}

function startQuiz() {
  currentQuestions = buildQuizSet();
  currentQuestionIndex = 0;
  selectedType = null;
  resetScores();
  showScreen(quizScreen);
  renderQuestion();
}

function restartQuiz() {
  currentQuestions = [];
  currentQuestionIndex = 0;
  selectedType = null;
  resetScores();
  panelTitle.textContent = "क्विज़ शुरू करने के लिए तैयार हैं?";
  updateProgress();
  showScreen(startScreen);
}

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);
restartTopButton.addEventListener("click", restartQuiz);

nextButton.addEventListener("click", () => {
  if (!selectedType) {
    return;
  }

  scores[selectedType] += 1;
  currentQuestionIndex += 1;

  if (currentQuestionIndex < currentQuestions.length) {
    renderQuestion();
    return;
  }

  showScreen(resultScreen);
  renderResult();
});

let thoughtIndex = 0;

if (thoughtText) {
  setInterval(() => {
    thoughtIndex = (thoughtIndex + 1) % rotatingThoughts.length;
    thoughtText.style.opacity = "0";

    setTimeout(() => {
      thoughtText.textContent = rotatingThoughts[thoughtIndex];
      thoughtText.style.opacity = "1";
    }, 220);
  }, 3200);
}

updateProgress();
