// Database for English Grade 4 - Global Success
// Contains detailed vocabulary, grammar patterns, example dialogues, and quiz questions for all 20 Units.

const unitsData = [
  {
    id: 1,
    title: "My Friends",
    translation: "Bạn bè của tôi",
    theme: "sky",
    color: "#4D96FF",
    emoji: "👫",
    vocabulary: [
      { word: "America", ipa: "/əˈmerɪkə/", meaning: "Nước Mỹ", example: "I am from America.", exampleMeaning: "Tớ đến từ nước Mỹ.", emoji: "🇺🇸" },
      { word: "Australia", ipa: "/ɒˈstreɪliə/", meaning: "Nước Úc", example: "He is from Australia.", exampleMeaning: "Cậu ấy đến từ nước Úc.", emoji: "🇦🇺" },
      { word: "Britain", ipa: "/ˈbitn/", meaning: "Nước Anh", example: "She is from Britain.", exampleMeaning: "Cô ấy đến từ nước Anh.", emoji: "🇬🇧" },
      { word: "Japan", ipa: "/dʒəˈpæn/", meaning: "Nước Nhật", example: "My friend is from Japan.", exampleMeaning: "Bạn của tớ đến từ nước Nhật.", emoji: "🇯🇵" },
      { word: "Malaysia", ipa: "/məˈleɪziə/", meaning: "Nước Ma-lay-xi-a", example: "Where is he from? - Malaysia.", exampleMeaning: "Cậu ấy đến từ đâu? - Malaysia.", emoji: "🇲🇾" },
      { word: "Singapore", ipa: "/ˌsɪŋəˈpɔː(r)/", meaning: "Nước Xin-ga-po", example: "Is she from Singapore?", exampleMeaning: "Cô ấy đến từ Singapore phải không?", emoji: "🇸🇬" },
      { word: "Thailand", ipa: "/ˈtaɪlænd/", meaning: "Nước Thái Lan", example: "We are from Thailand.", exampleMeaning: "Chúng tớ đến từ Thái Lan.", emoji: "🇹🇭" },
      { word: "Viet Nam", ipa: "/ˌviːetˈnɑːm/", meaning: "Nước Việt Nam", example: "I live in Viet Nam.", exampleMeaning: "Tớ sống ở Việt Nam.", emoji: "🇻🇳" }
    ],
    grammar: {
      structure: "Where are you from? ➔ I'm from + [Country].\nWhere is he/she from? ➔ He/She is from + [Country].",
      explanation: "Dùng để hỏi và trả lời về quê quán, xuất xứ của một ai đó.",
      dialog: [
        { speaker: "Toby", text: "Hello! I'm Toby. Where are you from?", translation: "Xin chào! Tớ là Toby. Bạn đến từ đâu?" },
        { speaker: "Hoa", text: "Hi Toby! I'm Hoa. I'm from Viet Nam. And you?", translation: "Chào Toby! Tớ là Hoa. Tớ đến từ Việt Nam. Còn bạn?" },
        { speaker: "Toby", text: "I'm from America. Nice to meet you!", translation: "Tớ đến từ nước Mỹ. Rất vui được gặp bạn!" }
      ]
    },
    quiz: [
      {
        question: "Where ______ you from?",
        options: ["am", "is", "are", "do"],
        answer: 2,
        hint: "Chủ ngữ 'you' đi với động từ tobe nào phù hợp?"
      },
      {
        question: "She is from ______.",
        options: ["Japan", "Japanese", "Vietnamese", "American"],
        answer: 0,
        hint: "Sau 'from' là một danh từ chỉ đất nước (Japan), không phải quốc tịch."
      },
      {
        question: "Where ______ he from? - He's from Singapore.",
        options: ["am", "is", "are", "does"],
        answer: 1,
        hint: "Chủ ngữ số ít 'he' đi với động từ tobe tương ứng."
      }
    ]
  },
  {
    id: 2,
    title: "Time and Daily Routines",
    translation: "Thời gian và thói quen hàng ngày",
    theme: "yellow",
    color: "#FFD93D",
    emoji: "⏰",
    vocabulary: [
      { word: "get up", ipa: "/ɡet ʌp/", meaning: "thức dậy", example: "I get up at six o'clock.", exampleMeaning: "Tớ thức dậy lúc 6 giờ.", emoji: "🛌" },
      { word: "have breakfast", ipa: "/hæv ˈbrekfəst/", meaning: "ăn sáng", example: "We have breakfast at 6:30.", exampleMeaning: "Chúng tớ ăn sáng lúc 6 giờ rưỡi.", emoji: "🍳" },
      { word: "go to school", ipa: "/ɡəʊ tə skuːl/", meaning: "đi học", example: "He goes to school at seven o'clock.", exampleMeaning: "Cậu ấy đi học lúc 7 giờ.", emoji: "🏫" },
      { word: "go to bed", ipa: "/ɡəʊ tə bed/", meaning: "đi ngủ", example: "I go to bed at nine forty-five.", exampleMeaning: "Tớ đi ngủ lúc 9 giờ 45 phút.", emoji: "🛏️" },
      { word: "o'clock", ipa: "/əˈklɒk/", meaning: "giờ đúng", example: "It is eight o'clock.", exampleMeaning: "Bây giờ là 8 giờ đúng.", emoji: "🕒" },
      { word: "fifteen", ipa: "/ˌfɪfˈtiːn/", meaning: "số 15 / phút thứ 15", example: "It's seven fifteen.", exampleMeaning: "Bây giờ là 7 giờ 15 phút.", emoji: "1️⃣5️⃣" },
      { word: "thirty", ipa: "/ˈθɜːti/", meaning: "số 30 / phút thứ 30", example: "It's six thirty.", exampleMeaning: "Bây giờ là 6 giờ 30 phút.", emoji: "3️⃣0️⃣" },
      { word: "forty-five", ipa: "/ˌfɔːtiˈfaɪv/", meaning: "số 45 / phút thứ 45", example: "It's eight forty-five.", exampleMeaning: "Bây giờ là 8 giờ 45 phút.", emoji: "4️⃣5️⃣" }
    ],
    grammar: {
      structure: "What time is it? ➔ It's + [Time].\nWhat time do you + [Action]? ➔ I + [Action] at + [Time].",
      explanation: "Dùng để hỏi giờ hiện tại và hỏi thời gian bạn làm các hoạt động thường ngày.",
      dialog: [
        { speaker: "Mom", text: "Wake up, Tony! What time do you get up?", translation: "Thức dậy thôi Tony! Con thức dậy lúc mấy giờ thế?" },
        { speaker: "Tony", text: "I get up at six o'clock, Mom. What time is it now?", translation: "Con thức dậy lúc 6 giờ mẹ ạ. Bây giờ là mấy giờ rồi ạ?" },
        { speaker: "Mom", text: "It's six fifteen. Have breakfast and go to school!", translation: "Bây giờ là 6 giờ 15. Con ăn sáng rồi đi học nhé!" }
      ]
    },
    quiz: [
      {
        question: "What ______ is it? - It's nine o'clock.",
        options: ["day", "time", "clock", "subject"],
        answer: 1,
        hint: "Để hỏi giờ, cấu trúc chuẩn là 'What time...'"
      },
      {
        question: "I go to bed ______ nine thirty.",
        options: ["on", "in", "at", "to"],
        answer: 2,
        hint: "Trước mốc giờ chính xác ta dùng giới từ 'at'."
      },
      {
        question: "What time ______ you go to school?",
        options: ["do", "does", "are", "is"],
        answer: 0,
        hint: "Chủ ngữ 'you' đi với trợ động từ 'do' trong câu hỏi của thì hiện tại đơn."
      }
    ]
  },
  {
    id: 3,
    title: "My Week",
    translation: "Tuần của tôi",
    theme: "pink",
    color: "#FF6B6B",
    emoji: "📅",
    vocabulary: [
      { word: "Monday", ipa: "/ˈmʌndeɪ/", meaning: "Thứ Hai", example: "I study English on Monday.", exampleMeaning: "Tớ học tiếng Anh vào thứ Hai.", emoji: "📅" },
      { word: "Tuesday", ipa: "/ˈtjuːzdeɪ/", meaning: "Thứ Ba", example: "We have science on Tuesday.", exampleMeaning: "Chúng tớ có môn khoa học vào thứ Ba.", emoji: "📅" },
      { word: "Wednesday", ipa: "/ˈwenzdeɪ/", meaning: "Thứ Tư", example: "Is it Wednesday today?", exampleMeaning: "Hôm nay là thứ Tư phải không?", emoji: "📅" },
      { word: "Thursday", ipa: "/ˈθɜːzdeɪ/", meaning: "Thứ Năm", example: "She does housework on Thursday.", exampleMeaning: "Cô ấy làm việc nhà vào thứ Năm.", emoji: "📅" },
      { word: "Friday", ipa: "/ˈfraɪdeɪ/", meaning: "Thứ Sáu", example: "I listen to music on Friday.", exampleMeaning: "Tớ nghe nhạc vào thứ Sáu.", emoji: "📅" },
      { word: "Saturday", ipa: "/ˈsætədeɪ/", meaning: "Thứ Bảy", example: "They play football on Saturday.", exampleMeaning: "Họ chơi bóng đá vào thứ Bảy.", emoji: "🏖️" },
      { word: "Sunday", ipa: "/ˈsʌndeɪ/", meaning: "Chủ Nhật", example: "I visit my grandparents on Sunday.", exampleMeaning: "Tớ đi thăm ông bà vào Chủ Nhật.", emoji: "🏡" },
      { word: "do housework", ipa: "/duː ˈhaʊswɜːk/", meaning: "làm việc nhà", example: "I do housework with my sister.", exampleMeaning: "Tớ làm việc nhà cùng chị gái.", emoji: "🧹" }
    ],
    grammar: {
      structure: "What day is it today? ➔ It's + [Day].\nWhat do you do on + [Day]? ➔ I + [Action] on + [Day].",
      explanation: "Dùng để hỏi thứ trong ngày và hỏi các hoạt động bạn thường làm vào các thứ đó.",
      dialog: [
        { speaker: "Mary", text: "What day is it today, Nam?", translation: "Hôm nay là thứ mấy vậy Nam?" },
        { speaker: "Nam", text: "It's Friday. What do you do on Fridays?", translation: "Là thứ Sáu đó. Cậu làm gì vào các ngày thứ Sáu?" },
        { speaker: "Mary", text: "I study at school in the morning and listen to music in the afternoon.", translation: "Tớ học ở trường vào buổi sáng và nghe nhạc vào buổi chiều." }
      ]
    },
    quiz: [
      {
        question: "What day ______ today? - It's Tuesday.",
        options: ["am", "is", "are", "do"],
        answer: 1,
        hint: "Hỏi thứ của ngày hôm nay sử dụng động từ tobe số ít 'is'."
      },
      {
        question: "What do you do ______ Saturdays?",
        options: ["in", "at", "on", "to"],
        answer: 2,
        hint: "Trước các ngày trong tuần ta sử dụng giới từ 'on'."
      },
      {
        question: "I study at school and ______ to music.",
        options: ["listen", "listens", "listening", "to listen"],
        answer: 0,
        hint: "Cấu trúc song hành với 'study' ở dạng nguyên thể với chủ ngữ 'I'."
      }
    ]
  },
  {
    id: 4,
    title: "My Birthday Party",
    translation: "Tiệc sinh nhật của tôi",
    theme: "green",
    color: "#6BCB77",
    emoji: "🎈",
    vocabulary: [
      { word: "January", ipa: "/ˈdʒænjuəri/", meaning: "Tháng Một", example: "My birthday is in January.", exampleMeaning: "Sinh nhật của tớ vào tháng Một.", emoji: "🗓️" },
      { word: "February", ipa: "/ˈfebruəri/", meaning: "Tháng Hai", example: "Is your birthday in February?", exampleMeaning: "Sinh nhật cậu vào tháng Hai hả?", emoji: "🗓️" },
      { word: "March", ipa: "/mɑːtʃ/", meaning: "Tháng Ba", example: "We have a party in March.", exampleMeaning: "Chúng ta có một bữa tiệc vào tháng Ba.", emoji: "🗓️" },
      { word: "October", ipa: "/ɒkˈtəʊbə(r)/", meaning: "Tháng Mười", example: "It's in October.", exampleMeaning: "Nó vào tháng Mười.", emoji: "🗓️" },
      { word: "December", ipa: "/dɪˈsembə(r)/", meaning: "Tháng Mười Hai", example: "Christmas is in December.", exampleMeaning: "Giáng sinh vào tháng Mười Hai.", emoji: "🗓️" },
      { word: "balloon", ipa: "/bəˈluːn/", meaning: "quả bóng bay", example: "I want some balloons.", exampleMeaning: "Tớ muốn một vài quả bóng bay.", emoji: "🎈" },
      { word: "chip", ipa: "/tʃɪp/", meaning: "khoai tây chiên", example: "Would you like some chips?", exampleMeaning: "Cậu có muốn ăn khoai tây chiên không?", emoji: "🍟" },
      { word: "sweet", ipa: "/swiːt/", meaning: "kẹo ngọt", example: "She likes eating sweets.", exampleMeaning: "Em ấy thích ăn kẹo.", emoji: "🍬" }
    ],
    grammar: {
      structure: "When is your birthday? ➔ It's in + [Month].\nWhat do you want to eat/drink? ➔ I want some + [Food/Drink].",
      explanation: "Dùng để hỏi ngày sinh nhật vào tháng mấy và hỏi mong muốn ăn uống trong tiệc sinh nhật.",
      dialog: [
        { speaker: "Linda", text: "When is your birthday, Phong?", translation: "Khi nào là sinh nhật của cậu thế Phong?" },
        { speaker: "Phong", text: "It's in October. What do you want to eat?", translation: "Nó vào tháng Mười. Cậu muốn ăn gì nào?" },
        { speaker: "Linda", text: "I want some chips and sweets. And some water, please!", translation: "Tớ muốn một ít khoai tây chiên và kẹo ngọt. Và cả nước lọc nữa nhé!" }
      ]
    },
    quiz: [
      {
        question: "When is your birthday? - It's ______ August.",
        options: ["at", "on", "in", "to"],
        answer: 2,
        hint: "Trước các tháng trong năm (không có ngày cụ thể) dùng giới từ 'in'."
      },
      {
        question: "What do you want to drink? - I want some ______.",
        options: ["chips", "sweets", "water", "cakes"],
        answer: 2,
        hint: "Câu hỏi yêu cầu đồ uống ('drink'), hãy chọn từ chỉ chất lỏng."
      },
      {
        question: "I want ______ balloons for my party.",
        options: ["some", "a", "an", "any"],
        answer: 0,
        hint: "Balloons ở dạng số nhiều và là câu khẳng định nên dùng 'some'."
      }
    ]
  },
  {
    id: 5,
    title: "Things We Can Do",
    translation: "Những việc chúng ta có thể làm",
    theme: "purple",
    color: "#B983FF",
    emoji: "🚲",
    vocabulary: [
      { word: "ride a bike", ipa: "/raɪd ə baɪk/", meaning: "đi xe đạp", example: "I can ride a bike.", exampleMeaning: "Tớ biết đi xe đạp.", emoji: "🚲" },
      { word: "ride a horse", ipa: "/raɪd ə hɔːs/", meaning: "cưỡi ngựa", example: "Can you ride a horse?", exampleMeaning: "Bạn biết cưỡi ngựa không?", emoji: "🐎" },
      { word: "play the piano", ipa: "/pleɪ ðə piˈænəʊ/", meaning: "chơi đàn piano", example: "She plays the piano very well.", exampleMeaning: "Cô ấy chơi piano rất giỏi.", emoji: "🎹" },
      { word: "play the guitar", ipa: "/pleɪ ðə ɡɪˈtɑː(r)/", meaning: "chơi đàn guitar", example: "He can't play the guitar.", exampleMeaning: "Cậu ấy không biết chơi đàn guitar.", emoji: "🎸" },
      { word: "swim", ipa: "/swɪm/", meaning: "bơi", example: "My brother can swim.", exampleMeaning: "Em trai tớ biết bơi.", emoji: "🏊" },
      { word: "skate", ipa: "/skeɪt/", meaning: "trượt patin/trượt ván", example: "Let's go skate!", exampleMeaning: "Cùng đi trượt ván nào!", emoji: "🛹" },
      { word: "cook", ipa: "/kʊk/", meaning: "nấu ăn", example: "Can you cook dinner?", exampleMeaning: "Bạn có thể nấu bữa tối không?", emoji: "🍳" },
      { word: "dance", ipa: "/dɑːns/", meaning: "nhảy múa", example: "She likes to dance.", exampleMeaning: "Cô ấy thích nhảy múa.", emoji: "💃" }
    ],
    grammar: {
      structure: "Can you + [Verb]? ➔ Yes, I can. / No, I can't.\nWhat can he/she do? ➔ He/She can + [Verb].",
      explanation: "Dùng để hỏi và trả lời về khả năng làm một việc gì đó của bản thân hoặc người khác.",
      dialog: [
        { speaker: "Ben", text: "Can you play the piano, Mai?", translation: "Cậu có biết chơi piano không Mai?" },
        { speaker: "Mai", text: "No, I can't. But I can play the guitar. What about you?", translation: "Không, tớ không biết. Nhưng tớ biết chơi guitar. Còn cậu thì sao?" },
        { speaker: "Ben", text: "I can't play instruments, but I can swim and skate!", translation: "Tớ không biết chơi nhạc cụ, nhưng tớ biết bơi và trượt ván!" }
      ]
    },
    quiz: [
      {
        question: "Can you play the guitar? - No, I ______.",
        options: ["can", "can't", "don't", "am not"],
        answer: 1,
        hint: "Với câu trả lời 'No', ta thêm 'not' sau can thành 'can't'."
      },
      {
        question: "My sister can ______ the piano.",
        options: ["play", "plays", "playing", "played"],
        answer: 0,
        hint: "Sau động từ khuyết thiếu 'can' là động từ nguyên thể không chia."
      },
      {
        question: "He can ride ______ horse.",
        options: ["a", "an", "the", "some"],
        answer: 0,
        hint: "Horse bắt đầu bằng phụ âm và là danh từ đếm được số ít, dùng mạo từ 'a'."
      }
    ]
  },
  {
    id: 6,
    title: "Our School Facilities",
    translation: "Cơ sở vật chất trường học",
    theme: "sky",
    color: "#4D96FF",
    emoji: "🏫",
    vocabulary: [
      { word: "school yard", ipa: "/skuːl jɑːd/", meaning: "sân trường", example: "We play in the school yard.", exampleMeaning: "Chúng tớ chơi ở sân trường.", emoji: "🏫" },
      { word: "computer room", ipa: "/kəmˈpjuːtə ruːm/", meaning: "phòng máy tính", example: "The computer room is big.", exampleMeaning: "Phòng máy tính rất lớn.", emoji: "💻" },
      { word: "art room", ipa: "/ɑːt ruːm/", meaning: "phòng mỹ thuật", example: "I draw pictures in the art room.", exampleMeaning: "Tớ vẽ tranh trong phòng mỹ thuật.", emoji: "🎨" },
      { word: "music room", ipa: "/ˈmjuːzɪk ruːm/", meaning: "phòng âm nhạc", example: "We sing in the music room.", exampleMeaning: "Chúng tớ hát ở phòng âm nhạc.", emoji: "🎵" },
      { word: "gym", ipa: "/dʒɪm/", meaning: "phòng thể chất/phòng tập", example: "Our school has a new gym.", exampleMeaning: "Trường chúng tớ có một phòng thể chất mới.", emoji: "🏋️" },
      { word: "library", ipa: "/ˈlaɪbrəri/", meaning: "thư viện", example: "There are many books in the library.", exampleMeaning: "Có rất nhiều sách trong thư viện.", emoji: "📚" },
      { word: "classroom", ipa: "/ˈklɑːsruːm/", meaning: "lớp học", example: "My classroom is clean.", exampleMeaning: "Lớp học của tớ thật sạch sẽ.", emoji: "🚪" },
      { word: "playground", ipa: "/ˈpleɪɡraʊnd/", meaning: "sân chơi", example: "Let's go to the playground.", exampleMeaning: "Chúng mình ra sân chơi đi.", emoji: "🛝" }
    ],
    grammar: {
      structure: "Is there a + [Facility] at your school? ➔ Yes, there is. / No, there isn't.\nWhat facilities does your school have? ➔ It has a + [Facility].",
      explanation: "Dùng để hỏi xem trường học có cơ sở vật chất nào đó hay không.",
      dialog: [
        { speaker: "Lucy", text: "Is there a computer room at your school, Nam?", translation: "Trường cậu có phòng máy tính không Nam?" },
        { speaker: "Nam", text: "Yes, there is. It is new and modern. Is there a gym at your school?", translation: "Có chứ. Nó rất mới và hiện đại. Trường cậu có phòng thể chất không?" },
        { speaker: "Lucy", text: "No, there isn't. But we have a very big library.", translation: "Không có. Nhưng tụi tớ có một thư viện rất to." }
      ]
    },
    quiz: [
      {
        question: "Is there ______ art room at your school?",
        options: ["a", "an", "the", "some"],
        answer: 1,
        hint: "'art' bắt đầu bằng nguyên âm 'a', nên dùng mạo từ 'an'."
      },
      {
        question: "We read books in the ______.",
        options: ["gym", "library", "school yard", "computer room"],
        answer: 1,
        hint: "Nơi để đọc sách chính là thư viện (library)."
      },
      {
        question: "Is there a gym at your school? - Yes, there ______.",
        options: ["is", "are", "isn't", "does"],
        answer: 0,
        hint: "Câu hỏi bắt đầu bằng 'Is there' nên trả lời khẳng định là 'Yes, there is'."
      }
    ]
  },
  {
    id: 7,
    title: "Our Timetables",
    translation: "Thời khóa biểu của chúng ta",
    theme: "yellow",
    color: "#FFD93D",
    emoji: "📅",
    vocabulary: [
      { word: "Art", ipa: "/ɑːt/", meaning: "Môn Mỹ thuật", example: "I have Art on Fridays.", exampleMeaning: "Tớ có môn Mỹ thuật vào các thứ Sáu.", emoji: "🎨" },
      { word: "Music", ipa: "/ˈmjuːzɪk/", meaning: "Môn Âm nhạc", example: "Do you like Music?", exampleMeaning: "Cậu có thích môn Âm nhạc không?", emoji: "🎵" },
      { word: "English", ipa: "/ˈɪŋɡlɪʃ/", meaning: "Môn Tiếng Anh", example: "English is my favourite subject.", exampleMeaning: "Tiếng Anh là môn học yêu thích của tớ.", emoji: "🇬🇧" },
      { word: "Maths", ipa: "/mæθs/", meaning: "Môn Toán", example: "We have Maths every day.", exampleMeaning: "Chúng tớ học Toán mỗi ngày.", emoji: "➕" },
      { word: "Science", ipa: "/ˈsaɪəns/", meaning: "Môn Khoa học", example: "I like doing experiments in Science.", exampleMeaning: "Tớ thích làm thí nghiệm trong môn Khoa học.", emoji: "🔬" },
      { word: "Vietnamese", ipa: "/ˌvjetnəˈmiːz/", meaning: "Môn Tiếng Việt", example: "We study Vietnamese on Mondays.", exampleMeaning: "Chúng tớ học môn Tiếng Việt vào thứ Hai.", emoji: "🇻🇳" },
      { word: "History", ipa: "/ˈhɪstri/", meaning: "Môn Lịch sử", example: "History is interesting.", exampleMeaning: "Môn Lịch sử rất thú vị.", emoji: "📜" },
      { word: "PE", ipa: "/ˌpiː ˈiː/", meaning: "Môn Thể dục", example: "We play sports in PE class.", exampleMeaning: "Chúng tớ chơi thể thao trong giờ Thể dục.", emoji: "🏃" }
    ],
    grammar: {
      structure: "What subjects do you have today? ➔ I have + [Subjects].\nWhen do you have + [Subject]? ➔ I have it on + [Days].",
      explanation: "Dùng để hỏi về các môn học bạn có trong ngày hôm nay hoặc lịch học của một môn học cụ thể.",
      dialog: [
        { speaker: "Bill", text: "What subjects do you have today, Minh?", translation: "Hôm nay cậu học những môn gì vậy Minh?" },
        { speaker: "Minh", text: "I have Maths, Vietnamese, and English. When do you have English?", translation: "Tớ học Toán, Tiếng Việt và Tiếng Anh. Khi nào cậu có môn Tiếng Anh?" },
        { speaker: "Bill", text: "I have it on Tuesdays and Thursdays.", translation: "Tớ có môn đó vào thứ Ba và thứ Năm." }
      ]
    },
    quiz: [
      {
        question: "What ______ do you have today? - I have Art and PE.",
        options: ["days", "time", "subjects", "rooms"],
        answer: 2,
        hint: "Art và PE là các môn học, ta dùng từ 'subjects'."
      },
      {
        question: "When do you have Maths? - I have it ______ Mondays.",
        options: ["at", "on", "in", "to"],
        answer: 1,
        hint: "Mondays là các ngày thứ Hai, dùng giới từ 'on'."
      },
      {
        question: "Do you have Science today? - No, I ______.",
        options: ["do", "don't", "have", "am not"],
        answer: 1,
        hint: "Câu hỏi bắt đầu bằng 'Do you' nên câu phủ nhận dùng 'No, I don't'."
      }
    ]
  },
  {
    id: 8,
    title: "My Favourite Subjects",
    translation: "Môn học yêu thích của tôi",
    theme: "pink",
    color: "#FF6B6B",
    emoji: "🥰",
    vocabulary: [
      { word: "favourite", ipa: "/ˈfeɪvərɪt/", meaning: "yêu thích nhất", example: "What is your favourite subject?", exampleMeaning: "Môn học yêu thích nhất của bạn là gì?", emoji: "❤️" },
      { word: "subject", ipa: "/ˈsʌbdʒɪkt/", meaning: "môn học", example: "I have five subjects today.", exampleMeaning: "Hôm nay tớ có 5 môn học.", emoji: "📚" },
      { word: "because", ipa: "/bɪˈkɒz/", meaning: "bởi vì", example: "I like English because I want to sing songs.", exampleMeaning: "Tớ thích tiếng Anh vì tớ muốn hát các bài hát.", emoji: "❓" },
      { word: "want to be", ipa: "/wɒnt tə biː/", meaning: "muốn trở thành", example: "I want to be a teacher.", exampleMeaning: "Tớ muốn trở thành giáo viên.", emoji: "🌟" },
      { word: "English teacher", ipa: "/ˈɪŋɡlɪʃ ˈtiːtʃə(r)/", meaning: "giáo viên tiếng Anh", example: "She is an English teacher.", exampleMeaning: "Cô ấy là một giáo viên tiếng Anh.", emoji: "👩‍🏫" },
      { word: "singer", ipa: "/ˈsɪŋə(r)/", meaning: "ca sĩ", example: "I like Music because I want to be a singer.", exampleMeaning: "Tớ thích môn Nhạc vì tớ muốn làm ca sĩ.", emoji: "🎤" },
      { word: "interesting", ipa: "/ˈɪntrəstɪŋ/", meaning: "thú vị", example: "Science is interesting.", exampleMeaning: "Khoa học rất thú vị.", emoji: "💡" },
      { word: "easy", ipa: "/ˈiːzi/", meaning: "dễ dàng", example: "Maths is not easy for me.", exampleMeaning: "Môn Toán không hề dễ đối với tớ.", emoji: "🧩" }
    ],
    grammar: {
      structure: "What is your favourite subject? ➔ It's + [Subject].\nWhy do you like + [Subject]? ➔ Because I want to be a + [Job] / Because it is + [Adjective].",
      explanation: "Dùng để hỏi về môn học yêu thích nhất và lý do tại sao lại thích môn học đó.",
      dialog: [
        { speaker: "Mary", text: "What is your favourite subject, Hoa?", translation: "Môn học yêu thích của cậu là gì hả Hoa?" },
        { speaker: "Hoa", text: "It's English. Why do you like Music?", translation: "Là tiếng Anh đó. Còn tại sao cậu lại thích môn Âm nhạc?" },
        { speaker: "Mary", text: "Because I want to be a singer in the future.", translation: "Bởi vì tớ muốn trở thành một ca sĩ trong tương lai." }
      ]
    },
    quiz: [
      {
        question: "______ do you like PE? - Because I want to play sports.",
        options: ["What", "Where", "When", "Why"],
        answer: 3,
        hint: "Câu trả lời bắt đầu bằng 'Because' nên câu hỏi phải dùng từ hỏi nguyên nhân 'Why'."
      },
      {
        question: "My favourite ______ is Art.",
        options: ["food", "subject", "day", "sport"],
        answer: 1,
        hint: "Art là một môn học nên chọn danh từ 'subject'."
      },
      {
        question: "I like Science because it ______ interesting.",
        options: ["is", "are", "am", "does"],
        answer: 0,
        hint: "Chủ ngữ số ít 'it' đi kèm với động từ tobe 'is'."
      }
    ]
  },
  {
    id: 9,
    title: "Our Sports Day",
    translation: "Ngày hội thể thao của chúng ta",
    theme: "green",
    color: "#6BCB77",
    emoji: "🏆",
    vocabulary: [
      { word: "sports day", ipa: "/spɔːts deɪ/", meaning: "ngày hội thể thao", example: "When is our sports day?", exampleMeaning: "Khi nào diễn ra ngày hội thể thao của chúng ta?", emoji: "🏆" },
      { word: "play badminton", ipa: "/pleɪ ˈbædmɪntən/", meaning: "chơi cầu lông", example: "I am going to play badminton.", exampleMeaning: "Tớ định chơi cầu lông.", emoji: "🏸" },
      { word: "play football", ipa: "/pleɪ ˈfʊtbɔːl/", meaning: "chơi bóng đá", example: "They play football in the yard.", exampleMeaning: "Họ chơi bóng đá ở sân.", emoji: "⚽" },
      { word: "play table tennis", ipa: "/pleɪ ˈteɪbl ˈtenɪs/", meaning: "chơi bóng bàn", example: "We play table tennis together.", exampleMeaning: "Chúng tớ chơi bóng bàn cùng nhau.", emoji: "🏓" },
      { word: "play basketball", ipa: "/pleɪ ˈbɑːskɪtbɔːl/", meaning: "chơi bóng rổ", example: "Can you play basketball?", exampleMeaning: "Cậu có biết chơi bóng rổ không?", emoji: "🏀" },
      { word: "run", ipa: "/rʌn/", meaning: "chạy", example: "I like to run on Sports Day.", exampleMeaning: "Tớ thích chạy vào Ngày hội thể thao.", emoji: "🏃" },
      { word: "jump", ipa: "/dʒʌmp/", meaning: "nhảy", example: "He can jump very high.", exampleMeaning: "Cậu ấy có thể nhảy rất cao.", emoji: "🦘" },
      { word: "take part in", ipa: "/teɪk pɑːt ɪn/", meaning: "tham gia vào", example: "Are you going to take part in it?", exampleMeaning: "Cậu có định tham gia vào đó không?", emoji: "🙋" }
    ],
    grammar: {
      structure: "When is Sports Day? ➔ It's in + [Month].\nWhat are you going to do on Sports Day? ➔ I'm going to + [Action].",
      explanation: "Dùng để hỏi thời gian diễn ra ngày hội thể thao và dự định tham gia hoạt động gì.",
      dialog: [
        { speaker: "Tony", text: "When is Sports Day, Mai?", translation: "Khi nào thì đến Ngày hội thể thao hả Mai?" },
        { speaker: "Mai", text: "It's in June. What are you going to do on Sports Day?", translation: "Vào tháng Sáu đó. Cậu dự định làm gì vào hôm ấy?" },
        { speaker: "Tony", text: "I'm going to play football. My friends are going to play basketball.", translation: "Tớ định chơi bóng đá. Các bạn của tớ thì định chơi bóng rổ." }
      ]
    },
    quiz: [
      {
        question: "When is Sports Day? - It's ______ May.",
        options: ["on", "at", "in", "to"],
        answer: 2,
        hint: "Trước từ chỉ tháng (May) ta dùng giới từ 'in'."
      },
      {
        question: "I am ______ to play table tennis on Sports Day.",
        options: ["go", "going", "goes", "went"],
        answer: 1,
        hint: "Cấu trúc tương lai gần: be (am/is/are) + going + to + verb."
      },
      {
        question: "What are they going to ______ on Sports Day?",
        options: ["do", "play", "see", "have"],
        answer: 0,
        hint: "Để hỏi về dự định hành động, ta dùng động từ 'do' (làm gì)."
      }
    ]
  },
  {
    id: 10,
    title: "Our Summer Holidays",
    translation: "Kỳ nghỉ hè của chúng ta",
    theme: "purple",
    color: "#B983FF",
    emoji: "🏖️",
    vocabulary: [
      { word: "countryside", ipa: "/ˈkʌntrisaɪd/", meaning: "vùng quê", example: "I was in the countryside.", exampleMeaning: "Tớ đã ở vùng quê.", emoji: "🏡" },
      { word: "beach", ipa: "/biːtʃ/", meaning: "bãi biển", example: "We went to the beach last summer.", exampleMeaning: "Chúng tớ đã đi biển vào mùa hè năm ngoái.", emoji: "🏖️" },
      { word: "visit London", ipa: "/ˈvɪzɪt ˈlʌndən/", meaning: "thăm Luân Đôn", example: "I want to visit London.", exampleMeaning: "Tớ muốn đi thăm thành phố Luân Đôn.", emoji: "🇬🇧" },
      { word: "visit Ha Long Bay", ipa: "/ˈvɪzɪt haː lɒŋ beɪ/", meaning: "thăm vịnh Hạ Long", example: "They visited Ha Long Bay last week.", exampleMeaning: "Họ đã đi thăm vịnh Hạ Long tuần trước.", emoji: "🇻🇳" },
      { word: "last summer", ipa: "/lɑːst ˈsʌmə(r)/", meaning: "mùa hè năm ngoái", example: "Where were you last summer?", exampleMeaning: "Cậu đã ở đâu vào mùa hè năm ngoái?", emoji: "🗓️" },
      { word: "camp", ipa: "/kæmp/", meaning: "cắm trại", example: "We camped in the forest.", exampleMeaning: "Chúng tớ đã cắm trại ở trong rừng.", emoji: "⛺" },
      { word: "swam", ipa: "/swæm/", meaning: "đã bơi (quá khứ của swim)", example: "I swam in the sea.", exampleMeaning: "Tớ đã bơi dưới biển.", emoji: "🏊" },
      { word: "city", ipa: "/ˈsɪti/", meaning: "thành phố", example: "I live in a busy city.", exampleMeaning: "Tớ sống ở một thành phố bận rộn.", emoji: "🏙️" }
    ],
    grammar: {
      structure: "Where were you last summer? ➔ I was + [Place].\nWhat did you do there? ➔ I + [Past Action] (e.g. visited / swam / played).",
      explanation: "Dùng để hỏi và trả lời về địa điểm và những hoạt động bạn đã thực hiện trong kỳ nghỉ hè năm ngoái.",
      dialog: [
        { speaker: "Linda", text: "Where were you last summer, Nam?", translation: "Mùa hè năm ngoái cậu ở đâu thế Nam?" },
        { speaker: "Nam", text: "I was in the countryside. I visited my grandparents.", translation: "Tớ ở quê. Tớ đã đi thăm ông bà." },
        { speaker: "Linda", text: "That sounds fun! I was at the beach and I swam in the sea.", translation: "Nghe vui quá! Còn tớ thì ở bãi biển và đã bơi ở biển." }
      ]
    },
    quiz: [
      {
        question: "Where ______ you last summer?",
        options: ["are", "was", "were", "did"],
        answer: 2,
        hint: "Với chủ ngữ 'you' ở thì quá khứ đơn, ta dùng tobe 'were'."
      },
      {
        question: "I ______ my grandparents last week.",
        options: ["visit", "visited", "visiting", "visits"],
        answer: 1,
        hint: "'last week' là mốc thời gian quá khứ, cần chia động từ ở dạng quá khứ phân từ 1 (visited)."
      },
      {
        question: "Where were you? - I ______ in Hue.",
        options: ["am", "was", "were", "is"],
        answer: 1,
        hint: "Chủ ngữ 'I' đi với tobe quá khứ số ít 'was'."
      }
    ]
  },
  {
    id: 11,
    title: "My Home",
    translation: "Nhà của tôi",
    theme: "sky",
    color: "#4D96FF",
    emoji: "🏠",
    vocabulary: [
      { word: "living room", ipa: "/ˈlɪvɪŋ ruːm/", meaning: "phòng khách", example: "We watch TV in the living room.", exampleMeaning: "Chúng tớ xem tivi ở phòng khách.", emoji: "🛋️" },
      { word: "bedroom", ipa: "/ˈbedruːm/", meaning: "phòng ngủ", example: "My bedroom has a small bed.", exampleMeaning: "Phòng ngủ của tớ có một chiếc giường nhỏ.", emoji: "🛏️" },
      { word: "kitchen", ipa: "/ˈkɪtʃɪn/", meaning: "phòng bếp", example: "My mother cooks in the kitchen.", exampleMeaning: "Mẹ tớ nấu ăn ở phòng bếp.", emoji: "🍳" },
      { word: "bathroom", ipa: "/ˈbɑːθruːm/", meaning: "phòng tắm", example: "I wash my hands in the bathroom.", exampleMeaning: "Tớ rửa tay ở phòng tắm.", emoji: "🚿" },
      { word: "garden", ipa: "/ˈɡɑːdn/", meaning: "khu vườn", example: "There are flowers in the garden.", exampleMeaning: "Có nhiều hoa trong vườn.", emoji: "🏡" },
      { word: "yard", ipa: "/jɑːd/", meaning: "sân", example: "We play in the front yard.", exampleMeaning: "Chúng tớ chơi ở sân trước nhà.", emoji: "🪵" },
      { word: "house", ipa: "/haʊs/", meaning: "ngôi nhà riêng", example: "I live in a house.", exampleMeaning: "Tớ sống trong một ngôi nhà riêng.", emoji: "🏠" },
      { word: "flat", ipa: "/flæt/", meaning: "căn hộ chung cư", example: "They live in a modern flat.", exampleMeaning: "Họ sống trong một căn hộ hiện đại.", emoji: "🏢" }
    ],
    grammar: {
      structure: "Where do you live? ➔ I live in a + [House/Flat] / I live at + [Address].\nWhat is your house/flat like? ➔ It's + [Adjectives] (e.g. big / small / beautiful).",
      explanation: "Dùng để hỏi xem ai đó sống ở đâu và miêu tả ngôi nhà/căn hộ đó trông như thế nào.",
      dialog: [
        { speaker: "Peter", text: "Where do you live, Hoa?", translation: "Cậu sống ở đâu thế Hoa?" },
        { speaker: "Hoa", text: "I live in a flat in Hanoi. What is your house like?", translation: "Tớ sống trong một căn hộ ở Hà Nội. Ngôi nhà của cậu như thế nào?" },
        { speaker: "Peter", text: "It's a big house with a beautiful garden.", translation: "Nó là một ngôi nhà lớn có một khu vườn rất đẹp." }
      ]
    },
    quiz: [
      {
        question: "Where ______ you live?",
        options: ["do", "does", "is", "are"],
        answer: 0,
        hint: "Với chủ ngữ 'you', dùng trợ động từ 'do' trong câu hỏi."
      },
      {
        question: "What is your house ______? - It's big and green.",
        options: ["look", "like", "see", "is"],
        answer: 1,
        hint: "Cấu trúc hỏi tính chất/miêu tả: 'What is ... like?'"
      },
      {
        question: "My flat ______ a nice living room.",
        options: ["have", "has", "is", "are"],
        answer: 1,
        hint: "'My flat' là danh từ số ít nên động từ 'have' chuyển thành 'has'."
      }
    ]
  },
  {
    id: 12,
    title: "Jobs",
    translation: "Nghề nghiệp",
    theme: "yellow",
    color: "#FFD93D",
    emoji: "🧑‍💼",
    vocabulary: [
      { word: "teacher", ipa: "/ˈtiːtʃə(r)/", meaning: "giáo viên", example: "My mother is a teacher.", exampleMeaning: "Mẹ tớ là một giáo viên.", emoji: "👩‍🏫" },
      { word: "doctor", ipa: "/ˈdɒktə(r)/", meaning: "bác sĩ", example: "He wants to be a doctor.", exampleMeaning: "Cậu ấy muốn trở thành bác sĩ.", emoji: "👨‍⚕️" },
      { word: "nurse", ipa: "/nɜːs/", meaning: "yá tá", example: "Nurses work in hospitals.", exampleMeaning: "Các y tá làm việc tại bệnh viện.", emoji: "👩‍⚕️" },
      { word: "driver", ipa: "/ˈdraɪvə(r)/", meaning: "tài xế lái xe", example: "My dad is a taxi driver.", exampleMeaning: "Bố tớ là tài xế taxi.", emoji: "👨‍✈️" },
      { word: "worker", ipa: "/ˈwɜːkə(r)/", meaning: "công nhân", example: "He works as a factory worker.", exampleMeaning: "Cậu ấy làm công nhân nhà máy.", emoji: "👷" },
      { word: "farmer", ipa: "/ˈfɑːmə(r)/", meaning: "nông dân", example: "Farmers grow rice.", exampleMeaning: "Nông dân trồng lúa.", emoji: "👨‍🌾" },
      { word: "pupil", ipa: "/ˈpjuːpl/", meaning: "học sinh tiểu học", example: "We are pupils in grade 4.", exampleMeaning: "Chúng tớ là học sinh lớp 4.", emoji: "🧑‍🎓" },
      { word: "clerk", ipa: "/klɑːk/", meaning: "nhân viên văn phòng", example: "She is an office clerk.", exampleMeaning: "Cô ấy là nhân viên văn phòng.", emoji: "🧑‍💼" }
    ],
    grammar: {
      structure: "What does your father/mother do? ➔ He/She is a/an + [Job].\nWhere does he/she work? ➔ He/She works in/at a + [Place].",
      explanation: "Dùng để hỏi về nghề nghiệp của các thành viên trong gia đình và nơi họ làm việc.",
      dialog: [
        { speaker: "John", text: "What does your father do, Quan?", translation: "Bố cậu làm nghề gì thế Quân?" },
        { speaker: "Quan", text: "He is a doctor. He works in a big hospital. What about your mother?", translation: "Bố tớ là bác sĩ. Bố làm việc ở một bệnh viện lớn. Còn mẹ cậu thì sao?" },
        { speaker: "John", text: "She is a teacher. She works at a primary school.", translation: "Mẹ tớ là giáo viên. Mẹ dạy học ở trường tiểu học." }
      ]
    },
    quiz: [
      {
        question: "What ______ your father do?",
        options: ["do", "does", "is", "are"],
        answer: 1,
        hint: "'your father' là ngôi thứ ba số ít (he) nên ta mượn trợ động từ 'does'."
      },
      {
        question: "A farmer works on a ______.",
        options: ["hospital", "school", "farm", "office"],
        answer: 2,
        hint: "Nông dân (farmer) làm việc trên trang trại (farm)."
      },
      {
        question: "My uncle is ______ driver.",
        options: ["a", "an", "the", "some"],
        answer: 0,
        hint: "'driver' bắt đầu bằng phụ âm 'd' số ít, ta dùng 'a'."
      }
    ]
  },
  {
    id: 13,
    title: "Appearance",
    translation: "Ngoại hình",
    theme: "pink",
    color: "#FF6B6B",
    emoji: "💃",
    vocabulary: [
      { word: "tall", ipa: "/tɔːl/", meaning: "cao", example: "He is very tall.", exampleMeaning: "Cậu ấy rất cao.", emoji: "🦒" },
      { word: "short", ipa: "/ʃɔːt/", meaning: "thấp / lùn", example: "My sister is short.", exampleMeaning: "Em gái tớ thấp.", emoji: "🐢" },
      { word: "slim", ipa: "/slɪm/", meaning: "mảnh khảnh / thon gọn", example: "She is tall and slim.", exampleMeaning: "Cô ấy cao và mảnh khảnh.", emoji: "🕺" },
      { word: "fat", ipa: "/fæt/", meaning: "mập / béo", example: "The bear is fat.", exampleMeaning: "Chú gấu béo mập.", emoji: "🐖" },
      { word: "big", ipa: "/bɪɡ/", meaning: "to / lớn", example: "The elephant is big.", exampleMeaning: "Con voi rất to.", emoji: "🐘" },
      { word: "small", ipa: "/smɔːl/", meaning: "nhỏ / bé", example: "The mouse is small.", exampleMeaning: "Con chuột bé tí.", emoji: "🐭" },
      { word: "old", ipa: "/əʊld/", meaning: "già", example: "My grandfather is old.", exampleMeaning: "Ông nội tớ đã già.", emoji: "👴" },
      { word: "young", ipa: "/jʌŋ/", meaning: "trẻ", example: "She is young and beautiful.", exampleMeaning: "Cô ấy trẻ trung và xinh đẹp.", emoji: "👶" }
    ],
    grammar: {
      structure: "What does he/she look like? ➔ He/She is + [Adjective].\nWho is taller/shorter, [Person A] or [Person B]? ➔ [Person] is + [Comparative Adjective].",
      explanation: "Dùng để miêu tả hình dáng bên ngoài của ai đó và so sánh hình dáng giữa hai người.",
      dialog: [
        { speaker: "David", text: "What does your brother look like, Phong?", translation: "Anh trai cậu trông thế nào hả Phong?" },
        { speaker: "Phong", text: "He is tall and slim. Who is taller, your brother or you?", translation: "Anh ấy cao và mảnh khảnh. Ai cao hơn, anh trai cậu hay cậu?" },
        { speaker: "David", text: "My brother is taller than me.", translation: "Anh trai tớ cao hơn tớ." }
      ]
    },
    quiz: [
      {
        question: "What does she look ______? - She is short and cute.",
        options: ["like", "love", "see", "at"],
        answer: 0,
        hint: "Cấu trúc hỏi hình dáng bên ngoài: 'look like'."
      },
      {
        question: "Who is ______, Tom or Bill? - Tom is taller.",
        options: ["tall", "taller", "short", "shorter"],
        answer: 1,
        hint: "Dựa vào câu trả lời 'taller' để chọn từ so sánh hơn thích hợp ở câu hỏi."
      },
      {
        question: "My grandfather is eighty years old. He is ______.",
        options: ["young", "old", "slim", "short"],
        answer: 1,
        hint: "Tám mươi tuổi là đã lớn tuổi, già (old)."
      }
    ]
  },
  {
    id: 14,
    title: "Daily Activities",
    translation: "Các hoạt động hàng ngày",
    theme: "green",
    color: "#6BCB77",
    emoji: "🧼",
    vocabulary: [
      { word: "wash my face", ipa: "/wɒʃ maɪ feɪs/", meaning: "rửa mặt", example: "I wash my face in the morning.", exampleMeaning: "Tớ rửa mặt vào buổi sáng.", emoji: "🧼" },
      { word: "brush my teeth", ipa: "/brʌʃ maɪ tiːθ/", meaning: "đánh răng", example: "I brush my teeth twice a day.", exampleMeaning: "Tớ đánh răng hai lần một ngày.", emoji: "🪥" },
      { word: "do homework", ipa: "/duː ˈhəʊmwɜːk/", meaning: "làm bài tập về nhà", example: "She is doing her homework.", exampleMeaning: "Cô ấy đang làm bài tập về nhà.", emoji: "📝" },
      { word: "clean the room", ipa: "/kliːn ðə ruːm/", meaning: "lau dọn phòng", example: "I clean my room on Saturdays.", exampleMeaning: "Tớ dọn phòng vào thứ Bảy.", emoji: "🧹" },
      { word: "watch TV", ipa: "/wɒtʃ ˌtiː ˈviː/", meaning: "xem tivi", example: "He is watching TV now.", exampleMeaning: "Hiện tại cậu ấy đang xem tivi.", emoji: "📺" },
      { word: "cook dinner", ipa: "/kʊk ˈdɪnə(r)/", meaning: "nấu bữa tối", example: "My mother is cooking dinner.", exampleMeaning: "Mẹ tớ đang nấu cơm tối.", emoji: "🍲" },
      { word: "wash clothes", ipa: "/wɒʃ kləʊðz/", meaning: "giặt quần áo", example: "We wash clothes together.", exampleMeaning: "Chúng tớ cùng nhau giặt quần áo.", emoji: "🧺" },
      { word: "listen to music", ipa: "/ˈlɪsn tə ˈmjuːzɪk/", meaning: "nghe nhạc", example: "They are listening to music.", exampleMeaning: "Họ đang nghe nhạc.", emoji: "🎧" }
    ],
    grammar: {
      structure: "What are you doing? ➔ I'm + [Verb-ing].\nWhat is he/she doing? ➔ He/She is + [Verb-ing].",
      explanation: "Dùng để hỏi và trả lời về hoạt động đang diễn ra ngay tại thời điểm nói (thì hiện tại tiếp diễn).",
      dialog: [
        { speaker: "Dad", text: "What are you doing, Toby?", translation: "Con đang làm gì thế Toby?" },
        { speaker: "Toby", text: "I'm brushing my teeth, Dad. Where is sister?", translation: "Con đang đánh răng ạ bố. Chị gái con đâu rồi ạ?" },
        { speaker: "Dad", text: "She is in her bedroom. She is doing her homework.", translation: "Chị ở trong phòng ngủ. Chị đang làm bài tập về nhà." }
      ]
    },
    quiz: [
      {
        question: "What are you ______? - I'm washing my face.",
        options: ["do", "doing", "does", "did"],
        answer: 1,
        hint: "Hỏi hành động đang làm dùng từ 'doing' trong thì hiện tại tiếp diễn."
      },
      {
        question: "She is ______ TV in the living room.",
        options: ["watch", "watches", "watching", "watched"],
        answer: 2,
        hint: "Sau 'is' và thể hiện hành động đang diễn ra, ta dùng 'verb-ing'."
      },
      {
        question: "What is he doing? - He ______ cleaning the room.",
        options: ["am", "is", "are", "does"],
        answer: 1,
        hint: "Chủ ngữ 'He' đi kèm với động từ tobe 'is'."
      }
    ]
  },
  {
    id: 15,
    title: "My Family's Weekends",
    translation: "Cuối tuần của gia đình tôi",
    theme: "purple",
    color: "#B983FF",
    emoji: "🧺",
    vocabulary: [
      { word: "go for a picnic", ipa: "/ɡəʊ fə(r) ə ˈpɪknɪk/", meaning: "đi dã ngoại", example: "We go for a picnic at weekends.", exampleMeaning: "Chúng tớ đi dã ngoại vào cuối tuần.", emoji: "🧺" },
      { word: "play chess", ipa: "/pleɪ tʃes/", meaning: "chơi cờ vua", example: "My brother and I play chess.", exampleMeaning: "Anh trai và tớ chơi cờ vua.", emoji: "♟️" },
      { word: "go shopping", ipa: "/ɡəʊ ˈʃɒpɪŋ/", meaning: "đi mua sắm", example: "She goes shopping with her mom.", exampleMeaning: "Cô ấy đi mua sắm cùng mẹ.", emoji: "🛍️" },
      { word: "clean the house", ipa: "/kliːn ðə haʊs/", meaning: "dọn dẹp nhà cửa", example: "We clean the house on Sundays.", exampleMeaning: "Chúng tớ dọn nhà vào Chủ Nhật.", emoji: "🧹" },
      { word: "visit my grandparents", ipa: "/ˈvɪzɪt maɪ ˈɡrænpeərənts/", meaning: "thăm ông bà", example: "I visit my grandparents on Saturdays.", exampleMeaning: "Tớ đi thăm ông bà vào các ngày thứ Bảy.", emoji: "👵" },
      { word: "garden", ipa: "/ˈɡɑːdn/", meaning: "làm vườn", example: "My dad likes to garden.", exampleMeaning: "Bố tớ thích làm vườn.", emoji: "🪴" },
      { word: "play sports", ipa: "/pleɪ spɔːts/", meaning: "chơi thể thao", example: "We play sports in the afternoon.", exampleMeaning: "Chúng tớ chơi thể thao vào buổi chiều.", emoji: "⚽" },
      { word: "watch cartoons", ipa: "/wɒtʃ kɑːˈtuːnz/", meaning: "xem hoạt hình", example: "The kids watch cartoons at weekends.", exampleMeaning: "Lũ trẻ xem phim hoạt hình vào cuối tuần.", emoji: "📺" }
    ],
    grammar: {
      structure: "What does your family do at weekends? ➔ We + [Action Verb].\nWhat does he/she do at weekends? ➔ He/She + [Verb-s/es].",
      explanation: "Dùng để hỏi và kể về các hoạt động lặp đi lặp lại vào ngày cuối tuần của gia đình hoặc của ai đó.",
      dialog: [
        { speaker: "Hoa", text: "What does your family do at weekends, Bill?", translation: "Gia đình cậu làm gì vào cuối tuần thế Bill?" },
        { speaker: "Bill", text: "We often go for a picnic. What about your family?", translation: "Nhà tớ hay đi dã ngoại. Còn nhà cậu thì sao?" },
        { speaker: "Hoa", text: "We clean the house together and then visit our grandparents.", translation: "Nhà tớ cùng nhau dọn dẹp nhà cửa rồi đi thăm ông bà." }
      ]
    },
    quiz: [
      {
        question: "What does your family do ______ weekends?",
        options: ["in", "at", "to", "with"],
        answer: 1,
        hint: "Cụm từ cố định chỉ thời điểm cuối tuần: 'at weekends'."
      },
      {
        question: "At weekends, she ______ shopping with her mother.",
        options: ["go", "goes", "going", "went"],
        answer: 1,
        hint: "Chủ ngữ 'she' (ngôi thứ ba số ít) yêu cầu động từ thêm đuôi -es ('goes')."
      },
      {
        question: "We visit our ______ at the weekend. We love them very much.",
        options: ["teachers", "doctors", "grandparents", "pupils"],
        answer: 2,
        hint: "Dựa vào nghĩa từ vựng: Chúng tớ yêu họ rất nhiều, ta chọn 'grandparents' (ông bà)."
      }
    ]
  },
  {
    id: 16,
    title: "Weather",
    translation: "Thời tiết",
    theme: "sky",
    color: "#4D96FF",
    emoji: "☀️",
    vocabulary: [
      { word: "sunny", ipa: "/ˈsʌni/", meaning: "nắng / có nắng", example: "It is sunny today.", exampleMeaning: "Hôm nay trời nắng.", emoji: "☀️" },
      { word: "rainy", ipa: "/ˈreɪni/", meaning: "mưa / có mưa", example: "I don't like rainy weather.", exampleMeaning: "Tớ không thích thời tiết mưa.", emoji: "🌧️" },
      { word: "windy", ipa: "/ˈwɪndi/", meaning: "lộng gió / có gió", example: "It is very windy.", exampleMeaning: "Trời rất nhiều gió.", emoji: "💨" },
      { word: "cloudy", ipa: "/ˈklaʊdi/", meaning: "nhiều mây", example: "Look at the cloudy sky.", exampleMeaning: "Hãy nhìn bầu trời đầy mây kìa.", emoji: "☁️" },
      { word: "snowy", ipa: "/ˈsnəʊi/", meaning: "có tuyết rơi", example: "It's snowy in winter.", exampleMeaning: "Trời có tuyết vào mùa đông.", emoji: "❄️" },
      { word: "hot", ipa: "/hɒt/", meaning: "nóng", example: "It's hot in summer.", exampleMeaning: "Trời nóng vào mùa hè.", emoji: "🥵" },
      { word: "cold", ipa: "/kəʊld/", meaning: "lạnh", example: "Wear a coat, it's cold.", exampleMeaning: "Mặc áo khoác vào đi, trời lạnh đó.", emoji: "🥶" },
      { word: "warm", ipa: "/wɔːm/", meaning: "ấm áp", example: "Spring is warm.", exampleMeaning: "Mùa xuân ấm áp.", emoji: "🌤️" }
    ],
    grammar: {
      structure: "What's the weather like today? ➔ It's + [Adjective].\nWhat do you do when it's + [Weather]? ➔ I + [Action] (e.g. swim / play at home).",
      explanation: "Dùng để hỏi về tình hình thời tiết trong ngày và hoạt động thường làm khi thời tiết như vậy.",
      dialog: [
        { speaker: "Mary", text: "What's the weather like today, Quan?", translation: "Thời tiết hôm nay thế nào hả Quân?" },
        { speaker: "Quan", text: "It's sunny and hot. What do you do when it's hot?", translation: "Trời nắng và nóng lắm. Cậu thường làm gì khi trời nóng?" },
        { speaker: "Mary", text: "I go to the pool and swim with my brother.", translation: "Tớ ra hồ bơi và đi bơi cùng em trai." }
      ]
    },
    quiz: [
      {
        question: "What's the weather ______ today? - It's cloudy.",
        options: ["like", "looks", "look", "is"],
        answer: 0,
        hint: "Cấu trúc chuẩn hỏi thời tiết: 'What is the weather like?'"
      },
      {
        question: "I stay at home when it is ______.",
        options: ["sunny", "rainy", "hot", "warm"],
        answer: 1,
        hint: "Khi trời mưa (rainy), người ta thường ở nhà."
      },
      {
        question: "It is very ______ today. We can fly a kite!",
        options: ["hot", "rainy", "windy", "snowy"],
        answer: 2,
        hint: "Trời có gió (windy) mới thích hợp để thả diều (fly a kite)."
      }
    ]
  },
  {
    id: 17,
    title: "In the City",
    translation: "Trong thành phố",
    theme: "yellow",
    color: "#FFD93D",
    emoji: "🏙️",
    vocabulary: [
      { word: "supermarket", ipa: "/ˈsuːpəmɑːkɪt/", meaning: "siêu thị", example: "We buy food at the supermarket.", exampleMeaning: "Chúng tớ mua thức ăn ở siêu thị.", emoji: "🛒" },
      { word: "zoo", ipa: "/zuː/", meaning: "vườn bách thú / sở thú", example: "Let's see animals at the zoo.", exampleMeaning: "Chúng mình đi xem thú ở sở thú đi.", emoji: "🦁" },
      { word: "cinema", ipa: "/ˈsɪnəmə/", meaning: "rạp chiếu phim", example: "We watch films at the cinema.", exampleMeaning: "Chúng tớ xem phim ở rạp.", emoji: "🍿" },
      { word: "bookshop", ipa: "/ˈbʊkʃɒp/", meaning: "hiệu sách", example: "I buy books at the bookshop.", exampleMeaning: "Tớ mua sách ở hiệu sách.", emoji: "📚" },
      { word: "bakery", ipa: "/ˈbeɪkəri/", meaning: "tiệm bánh mì/bánh ngọt", example: "The bakery smells nice.", exampleMeaning: "Tiệm bánh ngọt có mùi thơm quá.", emoji: "🍞" },
      { word: "pharmacy", ipa: "/ˈfɑːməsi/", meaning: "tiệm thuốc tây", example: "I need to buy medicine at the pharmacy.", exampleMeaning: "Tớ cần mua thuốc ở tiệm thuốc.", emoji: "💊" },
      { word: "clothes shop", ipa: "/kləʊðz ʃɒp/", meaning: "cửa hàng quần áo", example: "We go to the clothes shop.", exampleMeaning: "Chúng tớ đi tới cửa hàng quần áo.", emoji: "👕" },
      { word: "toy shop", ipa: "/tɔɪ ʃɒp/", meaning: "cửa hàng đồ chơi", example: "He buys a robot at the toy shop.", exampleMeaning: "Cậu ấy mua một chú robot ở cửa hàng đồ chơi.", emoji: "🧸" }
    ],
    grammar: {
      structure: "Where is the + [Place]? ➔ It's near/opposite/next to the + [Place].\nWhy do you want to go to the + [Place]? ➔ Because I want to + [Action].",
      explanation: "Dùng để hỏi vị trí của địa điểm trong thành phố và hỏi lý do tại sao muốn đến nơi đó.",
      dialog: [
        { speaker: "Linda", text: "Where is the bookshop, Nam?", translation: "Hiệu sách nằm ở đâu vậy Nam?" },
        { speaker: "Nam", text: "It's next to the bakery. Why do you want to go there?", translation: "Nó ở bên cạnh tiệm bánh. Tại sao cậu muốn tới đó?" },
        { speaker: "Linda", text: "Because I want to buy some new storybooks.", translation: "Bởi vì tớ muốn mua vài quyển truyện mới." }
      ]
    },
    quiz: [
      {
        question: "Why do you want to go to the pharmacy? - ______ I want to buy medicine.",
        options: ["Because", "So", "And", "But"],
        answer: 0,
        hint: "Câu trả lời giải thích lý do cho 'Why' bắt đầu bằng 'Because'."
      },
      {
        question: "The bookshop is ______ to the supermarket.",
        options: ["near", "next", "opposite", "behind"],
        answer: 1,
        hint: "Giới từ 'to' đi liền sau từ 'next' tạo thành cụm chỉ vị trí 'next to'."
      },
      {
        question: "I want to buy a teddy bear. Let's go to the ______.",
        options: ["pharmacy", "bakery", "toy shop", "cinema"],
        answer: 2,
        hint: "Mua gấu bông (teddy bear) thì phải tới cửa hàng đồ chơi (toy shop)."
      }
    ]
  },
  {
    id: 18,
    title: "At the Shopping Centre",
    translation: "Tại trung tâm mua sắm",
    theme: "pink",
    color: "#FF6B6B",
    emoji: "🛍️",
    vocabulary: [
      { word: "t-shirt", ipa: "/ˈtiː ʃɜːt/", meaning: "áo thun / áo phông", example: "How much is this T-shirt?", exampleMeaning: "Cái áo thun này giá bao nhiêu?", emoji: "👕" },
      { word: "skirt", ipa: "/skɜːt/", meaning: "chân váy", example: "She likes the pink skirt.", exampleMeaning: "Cô ấy thích chiếc chân váy màu hồng.", emoji: "👗" },
      { word: "trousers", ipa: "/ˈtraʊzəz/", meaning: "quần dài", example: "These trousers are blue.", exampleMeaning: "Chiếc quần dài này màu xanh dương.", emoji: "👖" },
      { word: "shoes", ipa: "/ʃuːz/", meaning: "đôi giày", example: "How much are these shoes?", exampleMeaning: "Đôi giày này giá bao nhiêu vậy?", emoji: "👟" },
      { word: "socks", ipa: "/sɒks/", meaning: "đôi tất / đôi vớ", example: "I have new yellow socks.", exampleMeaning: "Tớ có đôi tất màu vàng mới.", emoji: "🧦" },
      { word: "hat", ipa: "/hæt/", meaning: "mũ / nón", example: "Put on your hat.", exampleMeaning: "Đội mũ vào đi con.", emoji: "👒" },
      { word: "jacket", ipa: "/ˈdʒækɪt/", meaning: "áo khoác", example: "It is cold, wear a jacket.", exampleMeaning: "Trời lạnh rồi, hãy mặc áo khoác.", emoji: "🧥" },
      { word: "scarf", ipa: "/skɑːf/", meaning: "khăn quàng cổ", example: "The red scarf is beautiful.", exampleMeaning: "Chiếc khăn quàng đỏ thật đẹp.", emoji: "🧣" }
    ],
    grammar: {
      structure: "How much is this + [Singular Item]? ➔ It's + [Price].\nHow much are these + [Plural Item]? ➔ They're + [Price].",
      explanation: "Dùng để hỏi và trả lời về giá tiền của quần áo và đồ dùng cá nhân (dạng số ít hoặc số nhiều).",
      dialog: [
        { speaker: "Clerk", text: "Can I help you, kids?", translation: "Tôi có thể giúp gì cho các bé không?" },
        { speaker: "Mai", text: "How much is this blue jacket?", translation: "Chiếc áo khoác xanh này giá bao nhiêu tiền ạ?" },
        { speaker: "Clerk", text: "It's ninety thousand dong. And these socks are ten thousand dong.", translation: "Nó có giá 90,000 đồng. Còn đôi tất này có giá 10,000 đồng." }
      ]
    },
    quiz: [
      {
        question: "How much ______ this yellow skirt?",
        options: ["is", "are", "am", "do"],
        answer: 0,
        hint: "'skirt' là danh từ số ít nên dùng động từ 'is'."
      },
      {
        question: "How much are ______ shoes? - They're eighty thousand dong.",
        options: ["this", "that", "these", "it"],
        answer: 2,
        hint: "'shoes' ở dạng số nhiều nên ta dùng từ chỉ định số nhiều 'these'."
      },
      {
        question: "The trousers ______ ninety thousand dong.",
        options: ["is", "are", "am", "be"],
        answer: 1,
        hint: "'Trousers' luôn ở dạng số nhiều vì có hai ống quần, ta chọn 'are'."
      }
    ]
  },
  {
    id: 19,
    title: "The Animal World",
    translation: "Thế giới động vật",
    theme: "green",
    color: "#6BCB77",
    emoji: "🦁",
    vocabulary: [
      { word: "monkey", ipa: "/ˈmʌŋki/", meaning: "con khỉ", example: "Monkeys love bananas.", exampleMeaning: "Khỉ thích ăn chuối.", emoji: "🐒" },
      { word: "elephant", ipa: "/ˈelɪfənt/", meaning: "con voi", example: "The elephant has a long nose.", exampleMeaning: "Con voi có chiếc vòi dài.", emoji: "🐘" },
      { word: "tiger", ipa: "/ˈtaɪɡə(r)/", meaning: "con hổ / con cọp", example: "The tiger is very fast.", exampleMeaning: "Con hổ chạy rất nhanh.", emoji: "🐅" },
      { word: "crocodile", ipa: "/ˈkrɒkədaɪl/", meaning: "con cá sấu", example: "Crocodiles live in water.", exampleMeaning: "Cá sấu sống ở dưới nước.", emoji: "🐊" },
      { word: "kangaroo", ipa: "/ˌkæŋɡəˈruː/", meaning: "chuột túi / kangaroo", example: "The kangaroo can jump far.", exampleMeaning: "Chuột túi có thể nhảy rất xa.", emoji: "🦘" },
      { word: "zebra", ipa: "/ˈzebrə/", meaning: "con ngựa vằn", example: "Zebras have black and white stripes.", exampleMeaning: "Ngựa vằn có những đường kẻ sọc đen trắng.", emoji: "🦓" },
      { word: "peacock", ipa: "/ˈpiːkɒk/", meaning: "con chim công", example: "Look at the colorful peacock.", exampleMeaning: "Hãy nhìn chú chim công đầy màu sắc kìa.", emoji: "🦚" },
      { word: "bear", ipa: "/beə(r)/", meaning: "con gấu", example: "Bears like honey.", exampleMeaning: "Gấu thích mật ong.", emoji: "🐻" }
    ],
    grammar: {
      structure: "What animal do you want to see? ➔ I want to see + [Animals].\nWhy do you like + [Animals]? ➔ Because they are + [Adjectives] (e.g. funny / beautiful / fast).",
      explanation: "Dùng để hỏi và trả lời xem ai đó muốn đi xem loài vật nào và nêu lý do tại sao lại yêu thích loài vật đó.",
      dialog: [
        { speaker: "Tony", text: "What animal do you want to see at the zoo, Nam?", translation: "Cậu muốn đi xem loài vật nào ở sở thú thế Nam?" },
        { speaker: "Nam", text: "I want to see monkeys. Why do you like peacocks?", translation: "Tớ muốn xem khỉ. Còn tại sao cậu lại thích chim công?" },
        { speaker: "Tony", text: "Because they are very beautiful when they dance.", translation: "Bởi vì chúng trông rất đẹp khi chúng nhảy múa." }
      ]
    },
    quiz: [
      {
        question: "What animal do you want to ______? - I want to see bears.",
        options: ["see", "look", "like", "watch"],
        answer: 0,
        hint: "Cấu trúc hỏi mong muốn đi xem loài vật: 'want to see'."
      },
      {
        question: "I like monkeys because they are ______.",
        options: ["slow", "funny", "scary", "lazy"],
        answer: 1,
        hint: "Khỉ thường rất tinh nghịch và vui nhộn, chọn 'funny'."
      },
      {
        question: "Why ______ you like tigers? - Because they are strong.",
        options: ["do", "does", "are", "is"],
        answer: 0,
        hint: "Chủ ngữ 'you' đi kèm với trợ động từ 'do' trong câu hỏi của thì hiện tại đơn."
      }
    ]
  },
  {
    id: 20,
    title: "At Summer Camp",
    translation: "Tại trại hè",
    theme: "purple",
    color: "#B983FF",
    emoji: "⛺",
    vocabulary: [
      { word: "sing English songs", ipa: "/sɪŋ ˈɪŋɡlɪʃ sɒŋz/", meaning: "hát các bài hát tiếng Anh", example: "We sing English songs around the fire.", exampleMeaning: "Chúng tớ hát các bài hát tiếng Anh quanh đống lửa.", emoji: "🎤" },
      { word: "dance", ipa: "/dɑːns/", meaning: "nhảy múa", example: "They dance gracefully.", exampleMeaning: "Họ nhảy múa rất duyên dáng.", emoji: "💃" },
      { word: "play sports", ipa: "/pleɪ spɔːts/", meaning: "chơi thể thao", example: "We play sports in the morning.", exampleMeaning: "Chúng tớ chơi thể thao vào buổi sáng.", emoji: "⚽" },
      { word: "build a campfire", ipa: "/bɪld ə ˈkæmpfaɪə(r)/", meaning: "đốt lửa trại", example: "They build a campfire together.", exampleMeaning: "Họ cùng nhau dựng một đống lửa trại.", emoji: "🔥" },
      { word: "tell stories", ipa: "/tel ˈstɔːriz/", meaning: "kể chuyện", example: "Our teacher tells funny stories.", exampleMeaning: "Thầy giáo của chúng tớ kể những câu chuyện vui.", emoji: "📖" },
      { word: "draw pictures", ipa: "/drɔː ˈpɪktʃəz/", meaning: "vẽ tranh", example: "I draw pictures of nature.", exampleMeaning: "Tớ vẽ những bức tranh về thiên nhiên.", emoji: "🎨" },
      { word: "summer camp", ipa: "/ˈsʌmə(r) kæmp/", meaning: "trại hè", example: "We are at the summer camp.", exampleMeaning: "Chúng tớ đang tham gia trại hè.", emoji: "🏕️" },
      { word: "activities", ipa: "/ækˈtɪvətiz/", meaning: "các hoạt động", example: "We do many activities.", exampleMeaning: "Chúng tớ thực hiện rất nhiều hoạt động.", emoji: "🏃" }
    ],
    grammar: {
      structure: "What are you doing at the summer camp? ➔ I'm + [Verb-ing].\nWhat is he/she doing at the summer camp? ➔ He/She is + [Verb-ing].",
      explanation: "Dùng để hỏi và nói về những hoạt động mọi người đang tham gia thực hiện tại trại hè.",
      dialog: [
        { speaker: "Teacher", text: "What are you doing, kids?", translation: "Các con đang làm gì thế?" },
        { speaker: "Hoa", text: "I'm drawing a picture of our camp, teacher. Phong is building a campfire.", translation: "Con đang vẽ bức tranh về khu trại hè của chúng ta thưa cô. Bạn Phong thì đang dựng lửa trại ạ." },
        { speaker: "Teacher", text: "Great! Let's sing English songs together later.", translation: "Tuyệt vời! Lát nữa chúng ta cùng hát vang những bài hát tiếng Anh nhé." }
      ]
    },
    quiz: [
      {
        question: "What ______ they doing at the summer camp?",
        options: ["am", "is", "are", "does"],
        answer: 2,
        hint: "Chủ ngữ 'they' đi kèm với động từ tobe số nhiều 'are'."
      },
      {
        question: "He is ______ a campfire with his friends.",
        options: ["build", "building", "builds", "built"],
        answer: 1,
        hint: "Sau động từ tobe 'is' là động từ dạng đuôi -ing để thể hiện hành động đang xảy ra."
      },
      {
        question: "We are singing English ______.",
        options: ["pictures", "songs", "stories", "sports"],
        answer: 1,
        hint: "Động từ 'singing' (hát) đi liền với danh từ 'songs' (các bài hát)."
      }
    ]
  }
];

// Achievements badges configurations
const badgesData = [
  { id: "first_steps", title: "Khởi Đầu", desc: "Hoàn thành bài trắc nghiệm đầu tiên", icon: "⭐" },
  { id: "perfect_quiz", title: "Điểm 10 Đỏ Chói", desc: "Đạt 100% điểm trong bất kỳ bài Quiz nào", icon: "💯" },
  { id: "word_master", title: "Nhà Thông Thái", desc: "Đọc qua từ vựng của 5 bài học", icon: "📖" },
  { id: "memory_pro", title: "Trí Nhớ Siêu Phàm", desc: "Hoàn thành một màn chơi Memory Match", icon: "🧠" },
  { id: "speller_pro", title: "Thần Đồng Đánh Vần", desc: "Hoàn thành một màn chơi Word Builder", icon: "✏️" },
  { id: "diligent", title: "Học Giả Chăm Chỉ", desc: "Hoàn thành tất cả 20 bài học", icon: "👑" }
];

// Export to window object for browser access
window.unitsData = unitsData;
window.badgesData = badgesData;
