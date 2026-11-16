/*
 * NỀN VĂN MINH / CIVILIZATIONS
 * ------------------------------------------------------------
 * 20 Nền văn minh: 13 Đã sụp đổ (fallen) + 7 Quốc gia hiện tại (existing)
 * status: "fallen" | "existing"
 * sections: phần CANON (dựa trên nguồn trong game)
 * theories: phần GIẢ THUYẾT (luôn ghi nguồn bên ngoài)
 */
window.LORE = window.LORE || {};

LORE.civilizations = [
  /* ===================== ĐÃ SỤP ĐỔ / FALLEN (13) ===================== */
  {
    id: "unified-civilization",
    name: { vi: "Nền Văn Minh Thống Nhất (Cổ Quốc Loài Người Đầu Tiên)", en: "The Unified Civilization (The First Human Realm)" },
    status: "fallen",
    accent: "#f3dfb1",
    region: { vi: "Toàn cõi Teyvat (mặt đất & lòng đất: Enkanomiya, Vực Đá Sâu, Tsurumi, Sal Vindagnyr, Hyperborea)", en: "Across Teyvat (surface & underground: Enkanomiya, The Chasm, Tsurumi, Sal Vindagnyr, Hyperborea)" },
    period: { vi: "> 6.000 năm trước (Từ Năm Mở Cửa Phương Chu đến Năm Ánh Sáng Rực Cháy)", en: "> 6,000 years ago (From the Year of the Ark's Opening to the Funerary Year)" },
    ruler: { vi: "Đấng Nguyên Sơ (Phanes), Bốn Bóng Hình Rực Sáng & các Sứ Giả Tiên Linh (Seelie)", en: "The Primordial One (Phanes), the Four Shining Shades & the Seelie Envoys" },
    fate: { vi: "Sụp đổ và bị chia cắt sau cuộc chiến với Kẻ Đến Thứ Hai và các đợt phóng Đinh Trời", en: "Shattered and buried after the war with the Second Who Came and the Celestial Nails" },
    summary: {
      vi: "Nền văn minh loài người đầu tiên trên Teyvat được tạo dựng sau khi Đấng Nguyên Sơ đánh bại Bảy vị Long Vương – dùng chung một ngôn ngữ cổ, kiến trúc đá trắng chạm khắc nút thắt ba cánh Triquetra và nhận mặc khải trực tiếp từ thiên giới thông qua tộc Tiên Linh.",
      en: "The first human civilization on Teyvat established after the Primordial One vanquished the Seven Sovereigns – sharing a single ancient language, white-stone Triquetra architecture, and direct communion with the heavens through the Seelie race."
    },
    sections: [
      {
        title: { vi: "1. Khởi nguyên từ \"Năm Mở Cửa Phương Chu\" và Kiến trúc Đá Trắng Triquetra", en: "1. Genesis in the \"Year of the Ark's Opening\" and White-Stone Triquetra Architecture" },
        body: {
          vi: [
            "Theo cấm thư **[[before-sun-and-moon]]** (Quyển II, mục *Bốn Trăm Năm Sau Khi Giữ Cành Cây*), sau khi **Đấng Nguyên Sơ (Phanes)** cùng **Bốn Bóng Hình Rực Sáng** đánh bại Bảy vị Long Vương nguyên tố và cải tạo sinh quyển Teyvat suốt 400 năm, ngài đã tạo ra loài người từ chiếc \"Phương Chu\" (Ark) và lập giao ước thiêng liêng với họ.",
            "Trong kỷ nguyên đầu tiên này, toàn bộ nhân loại từ cực Bắc **[[hyperborea]]**, vùng núi **[[sal-vindagnyr]]**, mỏ ngầm **[[chasm-civilization|Vực Đá Sâu]]**, đảo **[[tsurumi-civilization|Tsurumi]]** cho tới **[[enkanomiya]]** đều thuộc về một **Nền Văn Minh Thống Nhất** duy nhất: họ nói chung một thứ tiếng (ngôn ngữ cổ xuất hiện trong các văn bia Enkanomiya và Tsurumi), xây dựng những đền đài cột đá trắng theo phong cách Hy Lạp – La Mã cổ đại và khắc biểu tượng **Nút Thắt Ba Cánh (Triquetra)** trên mọi cổng Bí Cảnh (Domain) nối với [[irminsul]]."
          ],
          en: [
            "According to **[[before-sun-and-moon]]**, 400 years after vanquishing the Seven Dragon Sovereigns, the **Primordial One (Phanes)** and the **Four Shining Shades** created humanity from the \"Ark\" and established a sacred covenant.",
            "Across this first golden age, all human settlements – from **[[hyperborea]]**, **[[sal-vindagnyr]]**, and **[[chasm-civilization|The Chasm]]** to **[[tsurumi-civilization|Tsurumi]]** and **[[enkanomiya]]** – belonged to a single **Unified Civilization** sharing one language, Greco-Roman white-stone colonnades, and the **Triquetra** motif found on every Domain gate connected to [[irminsul]]."
          ]
        }
      },
      {
        title: { vi: "2. Vai trò của tộc Tiên Linh (Seelie) và Ngọn Núi Vương Miện của các Tư Tế", en: "2. The Seelie Envoys and the Priests' Mountain of Crowns" },
        body: {
          vi: [
            "Cầu nối trực tiếp giữa Thiên Lý và loài người trong thời đại này là chủng tộc **Tiên Linh (Seelie / Thiên Sứ)** – những sinh linh có hình hài tuyệt mỹ, đôi cánh phát sáng và trí tuệ siêu việt (như **Koitar** tại [[hyperborea]], **Nabu Malikata** tại [[deshret-kingdom]], **Sybil** tại [[remuria]], và **Yohualtecuhtin** tại [[natlan]]). Họ xây dựng những cung điện Tiên Linh nguy nga trên mặt đất và truyền dạy văn minh, nghệ thuật, chữ viết cho con người.",
            "Theo chuỗi thánh di vật **[[prayers-tiaras|Bộ Nón Tế Lễ (Prayers Tiaras)]]**, các vị tư tế trưởng của nhân loại đội những chiếc vương miện kết từ cành cây trắng nguyên sơ để lắng nghe mặc khải từ bầu trời. Nhưng khi sự phồn vinh kéo dài khiến con người nảy sinh lòng kiêu ngạo, hoài nghi và tìm cách nhìn trộm vào bí mật của thiên giới, các sứ giả Tiên Linh đột ngột chìm vào im lặng. Vào cuối đời, mỗi vị tư tế trưởng đều mang chiếc vương miện của mình đi xuống tầng sâu thế giới, chất thành một \"ngọn núi vương miện\" dưới gốc cây cổ thụ khô héo ([[irminsul]])."
          ],
          en: [
            "The direct intermediaries between Celestia and mortals were the **Seelie (Angels)** – radiant beings of immense wisdom (such as **Koitar** in [[hyperborea]], **Nabu Malikata** in [[deshret-kingdom]], **Sybil** in [[remuria]], and **Yohualtecuhtin** in [[natlan]]). As chronicled in the **[[prayers-tiaras]]**, when human hubris prompted priests to question the heavens, revelations ceased and each generation's chief priest placed their white-branch crown atop a \"mountain of crowns\" beneath a withered [[irminsul]] tree."
          ]
        }
      },
      {
        title: { vi: "3. \"Năm Ánh Sáng Rực Cháy\", Lời nguyền Tiên Linh và Sự tan rã toàn diện", en: "3. \"The Funerary Year\", the Seelie Curse, and Total Collapse" },
        body: {
          vi: [
            "Nền Văn Minh Thống Nhất chấm dứt đột ngột vào **\"Năm Ánh Sáng Rực Cháy\" (The Funerary Year)**: khi **Ngai Vàng Thứ Hai của Bầu Trời (Kẻ Đến Thứ Hai)** và **Long Vương Nibelung** mang theo sức mạnh Vực Sâu tấn công Teyvat. Bầu trời nghiêng lệch, mặt đất nứt toác làm [[enkanomiya]] và [[chasm-civilization]] sụp xuống lòng đất sâu.",
            "Cùng thời điểm đó, cuộc nổi dậy của Thiên Sứ Đầu Tiên **Koitar** và **Seutervoinen** tại [[hyperborea]] đã khiến Thiên Lý giáng lời nguyền tàn khốc lên toàn bộ tộc **Tiên Linh**: bất kỳ Tiên Linh nào đem lòng yêu con người đều sẽ mất sạch hình hài và trí tuệ, teo nhỏ lại thành những linh hồn xanh lơ lửng chỉ còn biết dẫn người lữ hành về lại đài đá cũ (Seelie Court). Tiếp theo đó, hàng loạt **Đinh Trời** được phóng xuống để ghim chặt các lỗ hổng Vực Sâu đã chôn vùi vĩnh viễn các đô thị còn sót lại của Nền Văn Minh Thống Nhất."
          ],
          en: [
            "The Unified Civilization collapsed in **\"The Funerary Year\"** when the **Second Who Came** and **Dragon King Nibelung** warred against the Primordial One. Simultaneously, the rebellion of **Koitar** and **Seutervoinen** in [[hyperborea]] triggered the **Seelie Curse** (stripping Seelie of their bodies and minds into floating wisps), while descending **Celestial Nails** buried the remaining cities."
          ]
        }
      }
    ],
    theories: [
      {
        title: { vi: "Thuyết \"Chu kỳ bốn nguyên tố\" của nền văn minh", en: "The \"Four-Element Cycle\" theory of civilization" },
        body: {
          vi: "Dựa trên 4 chiếc nón [[prayers-tiaras]] (Hoả, Thuỷ, Lôi, Băng), cộng đồng đưa ra giả thuyết rằng lịch sử nhân loại trên Teyvat đã trải qua nhiều chu kỳ thanh lọc tương ứng với 4 nguyên tố trước khi bước vào kỷ nguyên hiện tại.",
          en: "Based on the four [[prayers-tiaras]] (Flame, Torrents, Thunder, Frost), the community theorizes that human history on Teyvat passed through four elemental cycles of cleansing before the current era."
        },
        sources: [{ label: "r/Genshin_Lore – Tiara Cycle Theory", url: "https://www.reddit.com/r/Genshin_Lore/search/?q=tiara%20cycle" }]
      }
    ],
    sources: [
      { label: "Fandom: Unified Civilization", url: "https://genshin-impact.fandom.com/wiki/Unified_Civilization" },
      { label: "Fandom: Before Sun and Moon", url: "https://genshin-impact.fandom.com/wiki/Before_Sun_and_Moon" }
    ],
    related: ["before-sun-and-moon", "prayers-tiaras", "enkanomiya", "chasm-civilization", "sal-vindagnyr", "tsurumi-civilization", "hyperborea"]
  },

  {
    id: "hyperborea",
    name: { vi: "Hyperborea (Thành Phố Hoàng Kim Phương Bắc)", en: "Hyperborea (The Northern Golden City)" },
    status: "fallen",
    accent: "#b8ecff",
    region: { vi: "Cực Bắc Teyvat (tiền thân của Snezhnaya & Nod-Krai)", en: "Far Northern Teyvat (precursor of Snezhnaya & Nod-Krai)" },
    period: { vi: "> 6.000 năm trước", en: "> 6,000 years ago" },
    ruler: { vi: "Thiên Sứ Đầu Tiên Koitar & Kẻ Du Hành Biển Sao Seutervoinen (Anacharsis)", en: "First Angel Koitar & Star Voyager Seutervoinen (Anacharsis)" },
    fate: { vi: "Bị Thiên Lý giáng Đinh Trời huỷ diệt và nhấn chìm vào Cõi Bóng Tối sau cuộc nổi dậy", en: "Destroyed by a Celestial Nail and sunk into the Shadow Realm after rebelling against Celestia" },
    summary: {
      vi: "Nền văn minh hoàng kim ở cực Bắc do Thiên Sứ Đầu Tiên Koitar và Kẻ Du Hành Seutervoinen dẫn dắt – nơi khai sinh ra chủng tộc Tiên Tuyết (Snowland Fae), nguyên mẫu của Bạch Sa Hoàng và Dự án Màn Trăng.",
      en: "The northern golden civilization led by First Angel Koitar and Voyager Seutervoinen – birthplace of the Snowland Fae, the Belyi Tsar's prototype, and the Lunar Veil Project."
    },
    sections: [
      {
        title: { vi: "Thiên Sứ Đầu Tiên Koitar, Kẻ Du Hành Seutervoinen và sự ra đời của Tiên Tuyết", en: "First Angel Koitar, Voyager Seutervoinen, and the Birth of the Snowland Fae" },
        body: {
          vi: [
            "Theo bộ sách **[[hymns-of-the-far-north|Thánh Ca Phương Bắc (Hymns of the Far North)]]** và sử liệu tại [[snezhnaya|Nod-Krai]], **Hyperborea** là kinh đô hoàng kim cực Bắc của [[unified-civilization]]. Tại đây, **Koitar** – \"con gái đầu tiên và đẹp nhất của Đấng Sáng Tạo\" (Thiên Sứ / Tiên Linh thuỷ tổ của Sao Mai) – đã gặp gỡ và đem lòng yêu **Seutervoinen (Anacharsis)**, một vị lữ khách từ biển sao ngoài vũ trụ nhập vào cơ thể một chàng trai phàm trần.",
            "Dưới sự dẫn dắt của Koitar và Seutervoinen, các nghệ nhân Hyperborea đã dùng ánh sáng nguyên sơ và quyền năng của **Sương Nguyệt (Frost Moon)** tạo ra chủng tộc **Tiên Tuyết (Snowland Fae**: *Vila, Domovoy, Volkodlak, Snegovic...*). Đồng thời, họ kết hợp máu thịt còn sót lại của **Băng Long Vương (Cryo Dragon Sovereign)** để tiến hành *Dự án Người Thừa Kế Thánh* – tìm cách đúc ra một **\"Con Người Nguyên Sơ\" (*Filii Adamici Evoluti*)** có sức mạnh sánh ngang Long Vương Nibelung nhằm giải phóng nhân loại khỏi chiếc lồng của Thiên Lý."
          ],
          en: [
            "According to **[[hymns-of-the-far-north|Hymns of the Far North]]** and records in [[snezhnaya|Nod-Krai]], **Hyperborea** was the northern golden metropolis of the [[unified-civilization]]. Here, **Koitar** – the \"first and fairest daughter of the creator god\" (the First Angel / Dawnstar Goddess) – fell in love with **Seutervoinen (Anacharsis)**, a cosmic voyager inhabiting a mortal youth's body.",
            "Guided by Koitar and Seutervoinen, Hyperborean artisans wove primordial light and **Frost Moon** power to create the **Snowland Fae** (*Vila, Domovoy, Volkodlak, Snegovics*). Simultaneously, they combined the flesh of the **Cryo Dragon Sovereign** to engineer a **\"Primordial Human\" (*Filii Adamici Evoluti*)** modeled after Nibelung to free humanity from Celestia's cage."
          ]
        }
      },
      {
        title: { vi: "Dự án Màn Trăng (Lunar Veil Project) và Khu Thí Nghiệm Lusalim", en: "The Lunar Veil Project and Lusalim's Laboratory" },
        body: {
          vi: [
            "Song song với việc chế tạo Con Người Nguyên Sơ, các học giả của Hyperborea (tiêu biểu là cô giáo Maagees và thầy Ungien tại **Khu Thí Nghiệm Màn Trăng của Lusalim**, kết nối với đề xuất của Hoả Long Vương Xiuhcoatl ở [[ochkanatlan]]) đã triển khai **Dự án Màn Trăng (Lunar Veil Project)** và **Kế Hoạch Kẻ Quan Sát Mặt Trăng (Lunar Observer Plan)**.",
            "Họ dung hợp *Năng Lượng Cổ Nguyệt (Kuuvahki)* với *Vật Chất Hắc Thể* để tạo ra các sinh mệnh mới (như Ungie) và phát tín hiệu xuyên thủng \"bầu trời giả\" nhằm liên lạc với **\"Tinh Tú Hắc Thể\"** ngoài vũ trụ thật. Khi cuộc nổi dậy của Koitar và Seutervoinen bị phát giác 30 ngày sau hôn lễ tại cung điện mặt trăng, Thiên Lý đã giáng **Đinh Trời** xuống huỷ diệt hoàn toàn Hyperborea, xoá ký ức của Koitar và nguyền rủa toàn tộc Tiên Linh."
          ],
          en: [
            "Alongside the Primordial Human project, Hyperborean researchers (such as Maagees and Ungien at **Lusalim's Lunar Veil Laboratory**, linked to Pyro Sovereign Xiuhcoatl's proposals in [[ochkanatlan]]) launched the **Lunar Veil Project** and **Lunar Observer Plan**.",
            "They fused *Ancient Lunar Energy (Kuuvahki)* with *Black-Body Matter* to create new lifeforms and transmit signals past the false sky to the outer cosmos. Thirty days after Koitar and Seutervoinen's marriage, Celestia dropped a **Celestial Nail** that obliterated Hyperborea, wiped Koitar's memories, and cursed the Seelie race."
          ]
        }
      },
      {
        title: { vi: "Hai di sản của Hyperborea: Bạch Sa Hoàng và Hậu Duệ Sương Nguyệt", en: "Hyperborea's Two Legacies: The Belyi Tsar and the Frostmoon Scions" },
        body: {
          vi: [
            "Từ đống tro tàn của Hyperborea, hai nhánh di sản lớn đã định hình toàn bộ lịch sử phương Bắc:\n  1. **Bạch Sa Hoàng – Belyi Tsar (Monomakh Snezhnyi):** Thức tỉnh từ lõi thí nghiệm Con Người Nguyên Sơ của Hyperborea, ông thống nhất các Tiên Tuyết sống sót để lập nên vương quốc **[[snezhnaya]]** và trở thành **Băng Thần Đời Đầu**.\n  2. **Hậu Duệ Sương Nguyệt (Frostmoon Scions):** Những cư dân từ bỏ thành thị rút vào rừng núi **Nod-Krai**, tiếp tục tôn thờ Sương Nguyệt và về sau tôn sùng **[[columbina|Columbina (Kuutar)]]** làm thần mặt trăng của họ."
          ],
          en: [
            "From Hyperborea's ashes emerged two defining northern legacies:\n  1. **The Belyi Tsar (Monomakh Snezhnyi):** Awakening from the core of Hyperborea's Primordial Human experiment, he united the surviving Snowland Fae to found **[[snezhnaya]]** as the **First Cryo Archon**.\n  2. **The Frostmoon Scions:** Survivors who retreated into the wilds of **Nod-Krai**, worshipping the Frost Moon and later revering **[[columbina|Columbina (Kuutar)]]** as their Moon Goddess."
          ]
        }
      }
    ],
    theories: [
      {
        title: { vi: "Mối liên hệ giữa Hyperborea và Vương quốc Rừng Ánh Trăng trong Công Chúa Bạc Màu", en: "Hyperborea as the Moonlight Forest in The Pale Princess" },
        body: {
          vi: "Mô tả về những cư dân mắt xanh tóc sáng sống dưới ánh trăng tại phương Bắc trong bộ sách cấm [[pale-princess]] trùng khớp trực tiếp với Hyperborea, cuộc hôn nhân của Koitar – Seutervoinen và bi kịch của Kẻ Đổ Bộ Thứ Ba Saarelainen.",
          en: "The fair-haired, blue-eyed inhabitants of the Moonlight Forest in [[pale-princess]] directly parallel Hyperborea, the union of Koitar and Seutervoinen, and the tragedy of the Third Descender Saarelainen."
        },
        sources: [{ label: "r/Genshin_Lore – Hyperborea & Hymns of the Far North", url: "https://www.reddit.com/r/Genshin_Lore/search/?q=Hyperborea" }]
      }
    ],
    sources: [
      { label: "Fandom: Hyperborea", url: "https://genshin-impact.fandom.com/wiki/Hyperborea" },
      { label: "Fandom: Hymns of the Far North", url: "https://genshin-impact.fandom.com/wiki/Hymns_of_the_Far_North" }
    ],
    related: ["unified-civilization", "snezhnaya", "tsaritsa", "columbina", "hymns-of-the-far-north", "moonlit-bamboo-forest", "pale-princess", "ochkanatlan"]
  },

  {
    id: "chasm-civilization",
    name: { vi: "Văn minh cổ dưới Vực Đá Sâu, Lang-Gan & Trầm Ngọc Cốc", en: "Ancient Civilization of The Chasm, Lang-Gan & Chenyu Vale" },
    status: "fallen",
    accent: "#7aa6e8",
    region: { vi: "Đáy Vực Đá Sâu (The Chasm) & Trầm Ngọc Cốc (Chenyu Vale), Liyue", en: "Depths of The Chasm & Chenyu Vale, Liyue" },
    period: { vi: "> 6.000 năm trước – Chiến tranh Ma Thần", en: "> 6,000 years ago – Archon War" },
    ruler: { vi: "Các tư tế Nền Văn Minh Thống Nhất → Sứ giả Zibai, Dược Quân (Herblord), Phù Cẩm & Linh Uyên", en: "Unified Civilization Priests → Envoy Zibai, the Herblord, Fujin & Lingyuan" },
    fate: { vi: "Thành phố dưới Vực Đá Sâu bị Đinh Trời nghiền nát; cư dân Lang-Gan di cư lên Trầm Ngọc Cốc rồi sáp nhập vào Liyue", en: "Chasm city shattered by a Celestial Nail; Lang-Gan survivors migrated to Chenyu Vale and later joined Liyue" },
    summary: {
      vi: "Thành phố cổ đại đảo ngược nằm sâu dưới đáy Vực Đá Sâu của Liyue và vùng đất cổ Lang-Gan – nơi chứng kiến Cỗ Xe Mặt Trời rơi xuống, Đinh Trời Lưu Minh Tinh Thạch của Celestia và cuộc di cư lịch sử lên Trầm Ngọc Cốc.",
      en: "The inverted ancient ruins deep beneath Liyue's Chasm and the ancient realm of Lang-Gan – witness to the crash of the Solar Chariot, Celestia's Lumenstone Nail, and the migration to Chenyu Vale."
    },
    sections: [
      {
        title: { vi: "1. Cỗ Xe Mặt Trời rơi xuống, Thành Phố Đảo Ngược và Đinh Trời Lưu Minh Tinh Thạch", en: "1. Crash of the Solar Chariot, the Inverted City, and the Lumenstone Nail" },
        body: {
          vi: [
            "Dưới tầng sâu nhất của khu mỏ **Vực Đá Sâu (The Chasm)** ở phía tây nam [[liyue]] là những phế tích cột đá trắng thuộc về **[[unified-civilization]]**, nổi bật với một **Toà Thành Đảo Ngược (Inverted City)** treo lơ lửng trên trần hang động tối tăm cùng một đài tế lễ cổ xưa.",
            "Theo *Thạch Thư Tập Lục* và ngọc ký tại Trầm Ngọc Cốc, cách đây hơn **6.000 năm** (trong cuộc đại chiến của Ngai Vàng Thứ Hai), một thiên thể rực cháy được gọi là **\"Cỗ Xe Mặt Trời\" (Solar Chariot)** đã lao xuống khu vực này tạo thành miệng hố Vực Đá Sâu và kết tinh thành khoáng thạch Lưu Ly Tinh (*Glaze Sand Crystal*), trước khi lại bay vút lên trời.",
            "Ngay sau đó, để trấn áp dòng bùn đen Vực Sâu trào lên từ vết thương địa mạch, [[celestia]] đã giáng một cây **Đinh Trời (Celestial Nail)** xuyên thẳng xuống trung tâm thành phố ngầm. Năng lượng thanh tẩy của cây đinh biến đổi đá xung quanh thành **Lưu Minh Tinh Thạch (Lumenstone)** màu xanh lam phát sáng, nhưng đồng thời nghiền nát hoàn toàn nền văn minh dưới đáy vực."
          ],
          en: [
            "In the deepest caverns of [[liyue]]'s **Chasm** lie white-stone ruins of the **[[unified-civilization]]**, featuring an **Inverted City** suspended from the cavern ceiling.",
            "Over **6,000 years ago**, a blazing celestial object called the **Solar Chariot** crashed here to form The Chasm, followed by a **Celestial Nail** dropped by [[celestia]] to suppress dark Abyssal mud – crystallizing the surrounding rock into glowing blue **Lumenstone** while obliterating the subterranean city."
          ]
        }
      },
      {
        title: { vi: "2. Cuộc di cư từ Lang-Gan lên Trầm Ngọc Cốc: Phù Cẩm, Linh Uyên và Dược Quân", en: "2. Migration from Lang-Gan to Chenyu Vale: Fujin, Lingyuan, and the Herblord" },
        body: {
          vi: [
            "Những cư dân sống sót của vùng đất cổ **Lang-Gan** gần Vực Đá Sâu đã được nữ sứ giả tiên nhân **Zibai** (Tiên Quân Bạch Mã – con gái của Chấp Chính Thời Gian Istaroth, xem [[moonlit-bamboo-forest]]) dẫn đường di cư về vùng núi phía bắc lập nên nền văn minh **Trầm Ngọc Cốc (Chenyu Vale)**.",
            "Tại Trầm Ngọc Cốc, người dân dựng đàn tế ngọc tại *Xích Vọng Đài* và sống dưới sự bảo hộ của vị Ma Thần nhân từ là **Dược Quân (Herblord – Chủ Nhân Lồng Thuốc)** cùng hai vị tiên nhân là **Phù Cẩm (Fujin – Tiên Cá Chép)** và **Linh Uyên (Lingyuan – Tiên Huyền Văn Thú)**. Tuy nhiên, khi Chiến tranh Ma Thần nổ ra, Dược Quân phát điên trong hình hài một con rắn trắng khổng lồ và sai Linh Uyên làm ngập lụt cả thung lũng để chống lại **[[zhongli|Morax]]**. Để cứu người dân, Phù Cẩm đã ném viên ngọc tế trời xuống *Cẩm Lạc Đình* rút cạn nước lũ, giúp Morax tiêu diệt Dược Quân và đón người dân Trầm Ngọc Cốc vào đại gia đình Liyue."
          ],
          en: [
            "Survivors from the ancient realm of **Lang-Gan** were guided north by the White Horse Adeptus **Zibai** ([[moonlit-bamboo-forest]]) to settle **Chenyu Vale** under the **Herblord** and his adepti **Fujin** and **Lingyuan**. When the Herblord went mad during the Archon War and flooded the valley, Fujin cast her sacred jade into the river vortex to drain the waters while **[[zhongli|Morax]]** slew the serpent."
          ]
        }
      },
      {
        title: { vi: "3. Trận huyết chiến Đại Thảm Hoạ 500 Năm Trước: Dạ Xoa Phù Xá (Bosacius), Boyang & Kỵ Sĩ Hắc Xà", en: "3. The Cataclysm Battle 500 Years Ago: Yaksha Bosacius, Boyang & the Black Serpent Knights" },
        body: {
          vi: [
            "Cách đây **500 năm**, khi [[khaenriah]] sụp đổ, thuỷ triều ma vật Vực Sâu lại một lần nữa trào lên từ đáy Vực Đá Sâu đe doạ trực tiếp tới [[liyue]]. Thủ lĩnh Ngũ Đại Dạ Xoa là **Phù Xá (Bosacius – Đằng Xà Thái Nguyên Soái)** dù đang mất dần ký ức vì nghiệp chướng vẫn dẫn đầu **Thiên Nham Quân** và pháp sư **Boyang** (tổ tiên của Yelan) dùng pháp bảo **Thái Uyên Chúc Minh Tinh Bàn (Fantastic Compass)** tự phong ấn tất cả trong một không gian hỗn mang dưới đáy vực suốt 500 năm cho đến khi **Xiao**, **Yelan** và Nhà Lữ Hành tìm thấy hài cốt của ông.",
            "Cũng tại thành phố đảo ngược dưới đáy Vực Đá Sâu, Đội trưởng Vệ binh Hoàng gia Khaenri'ah **[[dainsleif]]** và Nhà Lữ Hành đã phát hiện ra một hồ nước kỳ diệu có khả năng làm dịu nỗi đau của lời nguyền bất tử – nơi các **Kỵ Sĩ Hắc Xà (Black Serpent Knights)** dưới quyền chỉ huy của **Halfdan** đã chiến đấu bảo vệ dân thường cho tới hơi thở cuối cùng."
          ],
          en: [
            "During the Cataclysm **500 years ago**, the foremost Yaksha **Bosacius** and thaumaturge **Boyang** used the **Fantastic Compass** to seal themselves and the Abyssal horde at the bottom of The Chasm to save [[liyue]]. Deeper still inside the Inverted City, **[[dainsleif]]** and the Traveler encountered **Halfdan** and the **Black Serpent Knights** guarding a pool that eased the Curse of Immortality."
          ]
        }
      }
    ],
    theories: [],
    sources: [
      { label: "Fandom: The Chasm", url: "https://genshin-impact.fandom.com/wiki/The_Chasm" },
      { label: "Fandom: Chenyu Vale", url: "https://genshin-impact.fandom.com/wiki/Chenyu_Vale" }
    ],
    related: ["unified-civilization", "enkanomiya", "liyue", "zhongli", "moonlit-bamboo-forest", "dainsleif", "khaenriah"]
  },

  {
    id: "sal-vindagnyr",
    name: { vi: "Vương Quốc Cổ Sal Vindagnyr (Long Tích Tuyết Sơn)", en: "Ancient Kingdom of Sal Vindagnyr (Dragonspine)" },
    status: "fallen",
    accent: "#9fd4ff",
    region: { vi: "Đỉnh núi Long Tích Tuyết Sơn (Dragonspine), Mondstadt", en: "Dragonspine, Mondstadt" },
    period: { vi: "> 2.600 – 6.000 năm trước", en: "> 2,600 – 6,000 years ago" },
    ruler: { vi: "Tư Tế Trưởng Varuch & Công Chúa của Sal Vindagnyr", en: "Chief Priest Varuch & the Princess of Sal Vindagnyr" },
    fate: { vi: "Bị đóng băng vĩnh viễn bởi Đinh Băng Thiên Không (Skyfrost Nail); sau này trở thành mộ của rồng độc Durin", en: "Frozen by the Skyfrost Nail; later became the resting place of the poison dragon Durin" },
    summary: {
      vi: "Vương quốc núi xanh tươi nằm dưới tán Cây Bạc cổ thụ tại Mondstadt, nơi nàng Công Chúa có tài tiên tri đã vẽ lại cảnh Đinh Băng Thiên Không của Celestia giáng xuống làm vỡ vụn Địa Mạch và nhấn chìm cả vương quốc trong bão tuyết vĩnh cửu.",
      en: "A once-verdant mountain kingdom beneath a great silver tree in Mondstadt, where a prophetic Princess foresaw Celestia's Skyfrost Nail shattering the ley lines and burying the realm in eternal ice."
    },
    sections: [
      {
        title: { vi: "1. Vương quốc xanh tươi dưới gốc Cây Bạc Địa Mạch và Nàng Công Chúa Tiên Tri", en: "1. The Verdant Kingdom Beneath the Silver Tree and the Prophetic Princess" },
        body: {
          vi: [
            "Trước khi mang tên **Long Tích Tuyết Sơn (Dragonspine)**, ngọn núi ở phía nam [[mondstadt]] từng là một thảo nguyên xanh mướt quanh năm ấm áp nhờ một nhánh cây cổ thụ màu bạc nối liền trực tiếp với **[[irminsul]]** (ngày nay là **Cây Chịu Lạnh / Frostbearing Tree**). Những người tị nạn chạy trốn băng tuyết từ nơi khác đã tìm đến đây và xây dựng vương quốc **Sal Vindagnyr** mang kiến trúc đá trắng của [[unified-civilization]].",
            "Đứng đầu vương quốc là **Tư Tế Trưởng Varuch** (người đội chiếc vương miện cành trắng của bộ **[[prayers-tiaras|Lễ Tế Băng – Prayers to Springtime]]**) cùng con gái ông là **Nàng Công Chúa** chào đời ngay dưới tán cây bạc vào một đêm trăng tròn. Nhờ phước lành của cây cổ thụ, Công Chúa sở hữu khả năng nhìn thấy tương lai qua những giấc mơ và ghi lại chúng trên các bức bích hoạ trong mật thất."
          ],
          en: [
            "Before becoming **Dragonspine**, the mountain south of [[mondstadt]] was a lush, warm haven nourished by a great silver **[[irminsul]]** tree (today's **Frostbearing Tree**). Refugees built the white-stone kingdom of **Sal Vindagnyr**, led by **Chief Priest Varuch** ([[prayers-tiaras]]) and his daughter, the **Princess** gifted with prophetic dreams."
          ]
        }
      },
      {
        title: { vi: "2. Chiến binh ngoại bang Imunlaukr và Đinh Băng Thiên Không (Skyfrost Nail)", en: "2. The Outlander Imunlaukr and the Skyfrost Nail" },
        body: {
          vi: [
            "Một ngày kia, Công Chúa mơ thấy một con rồng đen khổng lồ chảy máu độc rơi xuống đỉnh núi và một chiếc đinh khổng lồ từ đảo thiên không [[celestia]] lao xuống xé rách bầu trời. Cùng lúc đó, chàng chiến binh ngoại bang **Imunlaukr** đến định cư tại Sal Vindagnyr và đem lòng yêu Công Chúa.",
            "Đúng như giấc mơ tiên tri, **Đinh Băng Thiên Không (Skyfrost Nail)** đột ngột giáng xuống từ bầu trời, đập vỡ làm ba mảnh viên ngọc phong ấn và đánh gãy gốc Cây Bạc Địa Mạch. Cơn bão tuyết kinh hoàng lập tức bao phủ toàn bộ ngọn núi. Trước khi lên đường đi khắp thế gian tìm câu trả lời cứu vương quốc, Imunlaukr được Công Chúa trao tặng thanh đại kiếm **Tuyết Vùi Tinh Ngân (*Snow-Tombed Starsilver*)**.",
            "Tại cố đô, Tư Tế Varuch đội vương miện trèo lên đỉnh núi cầu xin thiên giới nhưng chết cóng trong tuyệt vọng; còn Công Chúa cố gắng chiết lấy một cành của Cây Bạc đem đi trồng ở nơi khác nhưng cũng gục ngã bên bờ hồ trước khi kịp hoàn thành. Khi Imunlaukr quay trở về, toàn bộ Sal Vindagnyr chỉ còn là những bộ xương đóng băng. Đau đớn nghĩ rằng các vị thần trên trời chỉ thích nhìn cảnh chém giết đẫm máu để giải khuây, Imunlaukr bỏ đi chiến đấu khắp nơi và hậu duệ của ông sau này gia nhập thành một gia tộc chiến binh tại [[mondstadt]]."
          ],
          en: [
            "Fulfilling the Princess's dark prophecy, Celestia dropped the **Skyfrost Nail** onto the peak, shattering the silver tree and plunging Sal Vindagnyr into an unending blizzard. Entrusted with the greatsword *Snow-Tombed Starsilver*, the outlander warrior **Imunlaukr** ventured out to seek salvation, while Priest Varuch and the Princess froze to death trying to save a grafted branch of the silver tree."
          ]
        }
      },
      {
        title: { vi: "3. Xác rồng độc Durin 500 năm trước và Thanh kiếm Răng Nanh Rỉ Sét", en: "3. Corpse of the Poison Dragon Durin 500 Years Ago and Festering Desire" },
        body: {
          vi: [
            "Hàng nghìn năm sau, lời tiên tri còn lại của Công Chúa mới ứng nghiệm: trong Đại Thảm Hoạ **500 năm trước**, con rồng độc **Durin** (do đại giả kim thuật sư [[rhinedottir]] tạo ra tại [[khaenriah]]) bị Phong Thần [[venti|Barbatos]] và Phong Long **Dvalin** đánh bại, xác của nó rơi đúng xuống đỉnh núi Sal Vindagnyr – biến nơi đây thành **Long Tích Tuyết Sơn (Sống Lưng Rồng Tuyết)**.",
            "Máu đỏ ấm nóng đầy sức sống hỗn mang của Durin thấm xuống lòng đất, vừa làm ô nhiễm thanh kiếm **[[festering-desire|Răng Nanh Rỉ Sét (Festering Desire)]]** của thợ rèn 투쟁, vừa làm gốc Cây Bạc khô héo suốt hàng thiên niên kỷ bỗng nhiên hồi sinh thành một cây huyết ngọc đỏ rực!"
          ],
          en: [
            "Millennia later, the second half of the Princess's prophecy came to pass during the Cataclysm **500 years ago**: [[rhinedottir]]'s poison dragon **Durin** was slain by [[venti|Barbatos]] and **Dvalin**, its carcass crashing onto Sal Vindagnyr to give **Dragonspine** its name. Durin's vital abyssal blood infused **[[festering-desire|Festering Desire]]** and revived the withered silver tree in crimson."
          ]
        }
      }
    ],
    theories: [
      {
        title: { vi: "\"Đinh trời\" là vũ khí trừng phạt hay cột trấn áp Vực Sâu?", en: "Are Divine Nails weapons of punishment or Abyssal seals?" },
        body: {
          vi: "Qua các thông tin về sau ở [[chasm-civilization]], [[hyperborea]] và [[sumeru]] (Apep), cộng đồng nhận ra các Đinh Trời được Celestia thả xuống để trấn áp và làm sạch sự ô nhiễm của Tri Thức Cấm Kỵ / Vực Sâu – nhưng cái giá phải trả là huỷ hoại địa mạch và xoá sổ những nền văn minh vô tình nằm dưới chân chúng như Sal Vindagnyr.",
          en: "Later revelations in the [[chasm-civilization]], [[hyperborea]], and [[sumeru]] (Apep) led the community to realize Divine Nails were dropped by Celestia to pin and cleanse Abyssal / Forbidden Knowledge corruption – at the catastrophic cost of shattering local ley lines and wiping out civilizations beneath them like Sal Vindagnyr."
        },
        sources: [{ label: "r/Genshin_Lore – Purpose of Celestia Nails", url: "https://www.reddit.com/r/Genshin_Lore/search/?q=celestia%20nail%20purpose" }]
      }
    ],
    sources: [
      { label: "Fandom: Sal Vindagnyr", url: "https://genshin-impact.fandom.com/wiki/Sal_Vindagnyr" },
      { label: "Fandom: Dragonspine", url: "https://genshin-impact.fandom.com/wiki/Dragonspine" }
    ],
    related: ["festering-desire", "prayers-tiaras", "unified-civilization", "mondstadt", "venti", "rhinedottir"]
  },

  {
    id: "enkanomiya",
    name: { vi: "Enkanomiya (Bạch Dạ Quốc / Uyên Hạ Cung)", en: "Enkanomiya (Byakuyakoku)" },
    status: "fallen",
    accent: "#8fb8ff",
    region: { vi: "Vực biển sâu bên dưới Đảo Watatsumi, Inazuma", en: "Abyssal cavern beneath Watatsumi Island, Inazuma" },
    period: { vi: "Năm Ánh Sáng Rực Cháy (> 6.000 năm trước) – Thời Chiến tranh Ma Thần (~2.000 năm trước)", en: "The Funerary Year (> 6,000 years ago) – Archon War (~2,000 years ago)" },
    ruler: { vi: "Hiền nhân Aberaku → 7 đời Thái Dương Chi Tử (Sunchildren) → Thần Rắn Orobashi no Mikoto", en: "Sage Aberaku → 7 Generations of Sunchildren → Serpent God Orobashi no Mikoto" },
    fate: { vi: "Bị bỏ hoang và niêm phong sau khi người dân theo Orobashi di cư lên mặt biển lập đảo Watatsumi", en: "Abandoned and sealed after its people followed Orobashi to the surface to found Watatsumi Island" },
    summary: {
      vi: "Vương quốc cổ đại bị sụp xuống vực biển sâu từ cuộc đại chiến giữa Đấng Nguyên Sơ và Kẻ Đến Thứ Hai – nơi được Chấp Chính Thời Gian Istaroth ban phước chế tạo Mặt Trời Nhân Tạo Dainichi Mikoshi và lưu giữ cuốn cấm thư quan trọng nhất lịch sử Teyvat: Trước Khi Mặt Trời Và Mặt Trăng.",
      en: "An ancient kingdom that plunged into the sea depths during the war between the Primordial One and the Second Who Came – blessed by Istaroth to build the artificial sun Dainichi Mikoshi and preserving Teyvat's most pivotal forbidden chronicle, Before Sun and Moon."
    },
    sections: [
      {
        title: { vi: "1. Cú sụp đổ trong \"Năm Ánh Sáng Rực Cháy\", Rồng Biển Sâu và Phước lành của Istaroth", en: "1. Collapse in \"The Funerary Year\", the Bathysmal Vishaps, and Istaroth's Blessing" },
        body: {
          vi: [
            "Từng là một đô thị thuộc **[[unified-civilization]]** trên mặt đất, vào **\"Năm Ánh Sáng Rực Cháy\"** (khi **Kẻ Đến Thứ Hai** giao chiến với **Đấng Nguyên Sơ**), toàn bộ vùng đất **Enkanomiya (Bạch Dạ Quốc)** đã bị sụp lún rơi thẳng xuống một hang động khổng lồ nằm giữa đáy đại dương và Vực Sâu.",
            "Trong bóng tối vĩnh cửu dưới đáy biển, những người sống sót bị đàn **Rồng Biển Sâu (Bathysmal Vishaps – hậu duệ của Thuỷ Long Vương)** săn đuổi tàn khốc vì ánh sáng từ những ngọn đuốc của con người thu hút chúng. Khi người dân tuyệt vọng cầu cứu lên bầu trời, Đấng Nguyên Sơ và ba Bóng Hình khác hoàn toàn im lặng; **chỉ có duy nhất Chấp Chính Thời Gian Istaroth (được người Bạch Dạ Quốc gọi là Kairos hay Tokoyo Ookami – \"Ngàn Ngọn Gió và Thời Gian\")** đã đáp lời cầu nguyện của họ ([[before-sun-and-moon]])."
          ],
          en: [
            "Once a surface city of the **[[unified-civilization]]**, **Enkanomiya (Byakuyakoku)** plunged into an abyssal cavern during **\"The Funerary Year\"** war between the Primordial One and the Second Who Came.",
            "Hunted in the dark by **Bathysmal Vishaps**, the survivors prayed to the heavens; only **Istaroth, Shade of Time (Kairos / Tokoyo Ookami)** answered their cries ([[before-sun-and-moon]])."
          ]
        }
      },
      {
        title: { vi: "2. Hiền nhân Aberaku, Mặt Trời Nhân Tạo Dainichi Mikoshi và Bi kịch 7 Đời Thái Dương Chi Tử", en: "2. Sage Aberaku, the Artificial Sun Dainichi Mikoshi, and the Seven Sunchildren" },
        body: {
          vi: [
            "Được Istaroth khai sáng trí tuệ, hiền nhân **Aberaku (Abrax)** đã thiết kế và xây dựng ngọn tháp mặt trời nhân tạo khổng lồ **Dainichi Mikoshi (Helios)** ở trung tâm Bạch Dạ Quốc. Ánh sáng rực rỡ của **Đêm Trắng (Whitenight)** từ Dainichi Mikoshi đã xua đuổi hoàn toàn lũ Rồng Biển Sâu vào bóng tối và mang lại hoà bình cho Enkanomiya.",
            "Tuy nhiên, khi cố gắng tìm đường quay lại mặt đất vào năm thứ hai sau khi dựng tháp, người dân phát hiện ra Thiên Lý đã đặt một **lệnh cấm niêm phong** không cho họ trở lên – từ đó các sử quan suy luận rằng **Đấng Nguyên Sơ đã đánh bại Kẻ Đến Thứ Hai**.",
            "Nắm lấy cơ hội này, nhóm quý tộc tham quyền lực đã vu cáo và tống giam chính ân nhân **Aberaku** vào ngục tối dưới chân tháp cho đến chết. Thay vì tự cầm quyền, giới quý tộc thao túng tín ngưỡng bằng cách chọn ra những đứa trẻ ngây thơ tôn làm **\"Thái Dương Chi Tử\" (Sunchildren – tổng cộng 7 đời: Piramumon, Риkoru, Risutaiosu, Isumenasu, शैतान...)** để làm vua bù nhìn. Tàn nhẫn hơn, để không một Thái Dương Chi Tử nào đủ lớn để hiểu chuyện và giành lại quyền lực, mỗi khi các em sắp đến tuổi trưởng thành, giới quý tộc lại tổ chức \"Nghi Lễ Ngày Mặt Trời\" – dẫn các em đi vào lõi lò luyện của Dainichi Mikoshi và **thiêu sống các em thành tro**!"
          ],
          en: [
            "Guided by Istaroth, the sage **Aberaku (Abrax)** built the artificial sun tower **Dainichi Mikoshi (Helios)**, creating **Whitenight** to drive back the Vishaps. Discovering that the heavens had sealed their return to the surface, Enkanomiya's scribes deduced the Primordial One had defeated the Second Who Came.",
            "Corrupt nobles imprisoned Aberaku to death and installed seven generations of child puppet rulers called **Sunchildren**, ritually burning each child alive inside Dainichi Mikoshi before they could reach adulthood and challenge the nobility."
          ]
        }
      },
      {
        title: { vi: "3. Thần Rắn Orobashi, Thí nghiệm Rồng Biển Sâu (Tiên tri về Neuvillette) và Bản án của Celestia", en: "3. Serpent God Orobashi, the Vishap Experiments (Prophecy of Neuvillette), and Celestia's Death Sentence" },
        body: {
          vi: [
            "Trong thời Chiến tranh Ma Thần, **Thần Rắn Trắng Orobashi no Mikoto** sau khi thua trận trước [[zhongli|Morax]] và **Kim Bằng** trên đất liền đã lặn xuống biển Đen, vô tình rơi vào hang động Enkanomiya. Tại đây, một cậu bé dũng cảm đã cầu xin Orobashi trở thành vị thần của họ để lật đổ chế độ Thái Dương Chi Tử. Orobashi chấp thuận, dạy người dân văn hoá mới và ra lệnh thực hiện các nghiên cứu sinh học về loài **Rồng Biển Sâu (Bathysmal Vishaps)** để chế tạo san hô máu hiến tế mở đường lên mặt biển.",
            "Chính từ các hồ sơ thí nghiệm tại Phòng Thí Nghiệm Rồng Biển Sâu này, các học giả Enkanomiya đã ghi lại lời tiên tri chấn động về **[[neuvillette]]**: vì loài Rồng Biển Sâu đã tiến hoá hấp thụ thêm nguyên tố Băng và Lôi nên không còn giữ được sự thuần khiết của nguyên tố Thuỷ, do đó **Thuỷ Long Vương (Hydro Dragon Sovereign) thế hệ tiếp theo bắt buộc sẽ phải giáng sinh trong hình hài của một con người**!",
            "Bi kịch xảy đến khi Orobashi vô tình đọc được cuốn cấm thư **[[before-sun-and-moon]]** ghi lại việc Đấng Nguyên Sơ là kẻ ngoại lai từ trứng sinh ra đã cướp đất của Bảy Long Vương. **[[celestia]]** lập tức tuyên án tử hình cả Orobashi lẫn toàn bộ người dân Enkanomiya. Để cứu thần dân, Orobashi ra lệnh niêm phong vĩnh viễn cuốn sách dưới thư viện Enkanomiya, yêu cầu người dân từ bỏ tên gọi cổ Hy Lạp để đổi sang tên kiểu [[inazuma]] (lập nên **Đảo Watatsumi** và gia tộc **Sangonomiya**), rồi một mình lao vào tấn công đảo Yashiori để được chết dưới thanh đao của **[[raiden-ei]]** – qua đó gánh trọn bản án của Thiên Lý một mình!"
          ],
          en: [
            "Fleeing the Archon War into the dark sea, the serpent god **Orobashi no Mikoto** overthrew the Sunchildren regime and became Enkanomiya's god. His scholars' research on the Bathysmal Vishaps uncovered a pivotal prophecy: because the Vishaps had evolved into impure elemental forms, the next **Hydro Dragon Sovereign ([[neuvillette]]) would be reborn in human form**.",
            "When Orobashi accidentally read **[[before-sun-and-moon]]**, [[celestia]] sentenced him to death. To spare his people, Orobashi sealed Enkanomiya, led its citizens to the surface to found **Watatsumi Island** in [[inazuma]], and marched into battle on Yashiori Island to die by **[[raiden-ei]]**'s blade."
          ]
        }
      }
    ],
    theories: [
      {
        title: { vi: "Vì sao Istaroth lại giúp Enkanomiya, Mondstadt và Inazuma?", en: "Why did Istaroth aid Enkanomiya, Mondstadt, and Inazuma?" },
        body: {
          vi: "Trong [[before-sun-and-moon]], chỉ có duy nhất Istaroth (Kairos) không bỏ rơi người dân dưới đáy biển. Cộng đồng liên hệ bà với truyền thuyết \"Thần Thời Gian và Gió\" từng được thờ chung với [[venti|Barbatos]] tại [[mondstadt]], với Tiên Quân Bạch Mã Zibai ở [[liyue]], và việc giúp Makoto gieo hạt Cây Anh Đào Thần cho [[raiden-ei]].",
          en: "In [[before-sun-and-moon]], Istaroth (Kairos) alone did not forsake the people beneath the sea. The community links her to the \"God of Time and Wind\" once worshipped alongside [[venti|Barbatos]] in [[mondstadt]], the White Horse Adeptus in [[liyue]], and the planting of [[raiden-ei]]'s Sacred Sakura."
        },
        sources: [{ label: "r/Genshin_Lore – Istaroth & Enkanomiya", url: "https://www.reddit.com/r/Genshin_Lore/search/?q=Istaroth%20Enkanomiya" }]
      }
    ],
    sources: [
      { label: "Fandom: Enkanomiya", url: "https://genshin-impact.fandom.com/wiki/Enkanomiya" },
      { label: "Fandom: Orobashi", url: "https://genshin-impact.fandom.com/wiki/Orobashi" }
    ],
    related: ["before-sun-and-moon", "unified-civilization", "inazuma", "raiden-ei", "neuvillette"]
  },

  {
    id: "tsurumi-civilization",
    name: { vi: "Văn minh Đảo Tsurumi", en: "Tsurumi Island Civilization" },
    status: "fallen",
    accent: "#99b3ff",
    region: { vi: "Đảo Tsurumi, Inazuma", en: "Tsurumi Island, Inazuma" },
    period: { vi: "Cổ đại – ~2.000 năm trước", en: "Antiquity – ~2,000 years ago" },
    ruler: { vi: "Các tư tế bộ tộc thờ Lôi Điểu Kapatcir", en: "Tribal priests worshipping the Thunderbird Kapatcir" },
    fate: { vi: "Bị Lôi Điểu Kapatcir huỷ diệt vì nghi lễ hiến tế cậu bé Ruu, mắc kẹt trong vòng lặp sương mù", en: "Annihilated by the Thunderbird Kapatcir over the boy Ruu's sacrifice, trapped in a fog time-loop" },
    summary: {
      vi: "Hòn đảo sương mù của Inazuma mang tới hai tầng phế tích chồng lên nhau: di tích đá trắng thời Nền Văn Minh Thống Nhất bên dưới và bộ tộc thờ Lôi Điểu Kapatcir bên trên.",
      en: "Inazuma's fog-shrouded island bearing two stacked layers of ruins: Unified Civilization white-stone chambers below, and the tribal society that worshipped the Thunderbird Kapatcir above."
    },
    sections: [
      {
        title: { vi: "Hai tầng văn minh và màn sương từ Đinh Trời", en: "Two layers of civilization and the Nail-born fog" },
        body: {
          vi: [
            "Dưới lòng đất đảo Tsurumi là những di tích cổ của [[unified-civilization]] với những bức bích hoạ mô tả mặt trăng và các vì sao. Sau khi một vật thể từ Celestia rơi xuống làm nhiễu loạn [[irminsul|địa mạch]] và bao phủ hòn đảo trong sương mù dày đặc, nền văn minh đầu tiên lụi tàn.",
            "Về sau, một bộ tộc nguyên thuỷ mới định cư trên đảo, nhặt được chiếc lông của **Lôi Điểu Kapatcir** và tôn thờ nó như vị thần bảo hộ."
          ],
          en: [
            "Beneath Tsurumi Island lie ancient [[unified-civilization]] ruins adorned with murals of moons and stars. After a celestial object fell and disrupted the [[irminsul|ley lines]], blanketing the island in dense fog, that first civilization perished.",
            "Later, a primitive tribe settled the island, found a feather shed by the **Thunderbird Kapatcir**, and worshipped the bird as their guardian deity."
          ]
        }
      },
      {
        title: { vi: "Khúc hát của cậu bé Ruu và cơn thịnh nộ của Lôi Điểu", en: "Ruu's song and the Thunderbird's wrath" },
        body: {
          vi: [
            "Vốn lạnh lùng với loài người, Lôi Điểu Kapatcir chỉ bị lay động bởi tiếng hát trong trẻo của cậu bé **Ruu** (con trai vị tư tế) và hứa sẽ quay lại nghe cậu hát. Nhưng các bô lão bộ tộc hiểu lầm rằng Lôi Điểu muốn máu thịt tế lễ, nên đã giết chính Ruu trên đàn tế.",
            "Khi Kapatcir bay tới chỉ thấy chiếc chén đựng máu của người bạn nhỏ, nó nổi cơn cuồng nộ thiêu rụi toàn bộ cư dân trên đảo và đặt lời nguyền lặp lại ngày hiến tế suốt hàng nghìn năm trong sương mù – trước khi bị [[raiden-ei]] chém gục tại đảo Seirai (còn oán niệm của nó hoá thành Thực Thể Sấm Sét)."
          ],
          en: [
            "Aloof toward mortals, the Thunderbird Kapatcir was moved solely by the pure singing of the priest's young son, **Ruu**, promising to return to hear his song. Misinterpreting the bird's favor, the tribe's elders sacrificed Ruu upon the altar to appease the skies.",
            "When Kapatcir returned to find only a goblet of her young friend's blood, she razed the entire island in fury and cursed the ley lines to loop the day of the sacrifice for millennia – before eventually being slain by [[raiden-ei]] on Seirai Island (her lingering怨 manifesting as the Thunder Manifestation)."
          ]
        }
      }
    ],
    theories: [],
    sources: [
      { label: "Fandom: Tsurumi Island", url: "https://genshin-impact.fandom.com/wiki/Tsurumi_Island" },
      { label: "Fandom: Kapatcir", url: "https://genshin-impact.fandom.com/wiki/Kapatcir" }
    ],
    related: ["unified-civilization", "inazuma", "raiden-ei"]
  },

  {
    id: "guili-assembly",
    name: { vi: "Quy Ly Tập & Vùng Đất Muối Sal Terrae", en: "Guili Assembly & Sal Terrae" },
    status: "fallen",
    accent: "#f2d079",
    region: { vi: "Đồng bằng Quy Ly & Địa Trung Chi Diêm, Liyue", en: "Guili Plains & Sal Terrae, Liyue" },
    period: { vi: "> 3.700 – ~ 2.000 năm trước", en: "> 3,700 – ~ 2,000 years ago" },
    ruler: { vi: "Morax, Quy Chung (Guizhong) & Marchosius; Havria tại Sal Terrae", en: "Morax, Guizhong & Marchosius; Havria at Sal Terrae" },
    fate: { vi: "Quy Ly Tập bị tàn phá trong Chiến tranh Ma Thần; người dân di cư lập cảng Liyue", en: "Guili Assembly was devastated in the Archon War; survivors migrated to found Liyue Harbor" },
    summary: {
      vi: "Nền văn minh nông nghiệp và cơ khí trù phú trên đồng bằng Quy Ly do Nham Thần Morax và Ma Thần Bụi Guizhong đồng sáng lập trước khi cảng Liyue ra đời.",
      en: "The prosperous agricultural and mechanical civilization on the Guili Plains co-founded by Geo God Morax and Dust God Guizhong before Liyue Harbor existed."
    },
    sections: [
      {
        title: { vi: "Liên minh giữa Đá và Bụi", en: "The Covenant of Stone and Dust" },
        body: {
          vi: [
            "Hơn 3.700 năm trước, [[zhongli|Morax]] (sức mạnh vô song nhưng chưa thấu hiểu lòng người) kết minh cùng Ma Thần Bụi **Guizhong** (yếu ớt về võ lực nhưng thông tuệ về cơ khí và trái tim con người) cùng Ma Thần Bếp Lửa **Marchosius** (Guoba). Tên gọi **Quy Ly Tập** (Guili Assembly) được ghép từ tên của Guizhong và Morax.",
            "Tại đây, Guizhong chế tạo máy bắn đá tự động Quy Chung Cơ, đặt ra bốn điều răn về trí tuệ và đức hạnh, trồng những cánh đồng hoa Bách Hợp Lưu Ly (Glaze Lily) bạt ngàn."
          ],
          en: [
            "Over 3,700 years ago, [[zhongli|Morax]] (peerless in might yet stern) allied with the God of Dust **Guizhong** (frail in combat yet brilliant in mechanics and human empathy) alongside the God of the Stove **Marchosius** (Guoba). The **Guili Assembly** took its name from Guizhong and Morax.",
            "Here, Guizhong engineered the Guizhong Ballista, imparted four commandments of wisdom and virtue, and cultivated vast fields of Glaze Lilies."
          ]
        }
      },
      {
        title: { vi: "Cái chết của Guizhong và bi kịch của Ma Thần Muối Havria", en: "Death of Guizhong and the tragedy of Salt God Havria" },
        body: {
          vi: [
            "Khoảng 3.700 năm trước, một trận đại chiến khốc liệt biến đồng bằng Quy Ly thành vùng đầm lầy Địch Hoa Châu; Guizhong ngã xuống và hoá thành tro bụi, để lại chiếc khoá đá *Memory of Dust* mà ngay cả Morax cũng không mở được. Morax cùng các Tiên Nhân đưa người dân về phía nam lập nên cảng [[liyue]].",
            "Gần đó, tại **Sal Terrae** (Địa Trung Chi Diêm), Ma Thần Muối **Havria** hiền lành liên tục nhượng bộ đất đai để tránh chiến tranh, nhưng cuối cùng lại bị chính những thần dân tuyệt vọng của mình đâm kiếm sát hại vì họ sợ bà sẽ chịu nhục nếu rơi vào tay các Ma Thần khác. Năng lượng bùng phát khi Havria chết đã biến toàn bộ những kẻ phản bội bà thành tượng muối."
          ],
          en: [
            "Around 3,700 years ago, a catastrophic battle flooded the Guili Plains into Dihua Marsh; Guizhong perished, turning to dust and leaving behind the stone lock *Memory of Dust* that even Morax could never open. Morax and the adepti led the survivors south to found [[liyue]] Harbor.",
            "Nearby at **Sal Terrae**, the gentle God of Salt **Havria** repeatedly ceded territory to avoid war, only to be assassinated by her own despairing subjects who feared she would suffer a crueler fate at rival gods' hands. The burst of divine power upon Havria's death instantly turned her betrayers into pillars of salt."
          ]
        }
      }
    ],
    theories: [],
    sources: [
      { label: "Fandom: Guili Assembly", url: "https://genshin-impact.fandom.com/wiki/Guili_Assembly" },
      { label: "Fandom: Havria", url: "https://genshin-impact.fandom.com/wiki/Havria" }
    ],
    related: ["liyue", "zhongli"]
  },

  {
    id: "old-mondstadt",
    name: { vi: "Mondstadt cổ (thời Decarabian)", en: "Old Mondstadt (Decarabian's era)" },
    status: "fallen",
    accent: "#7fe3c4",
    region: { vi: "Phế Tích Phong Long (Stormterror's Lair), Mondstadt", en: "Stormterror's Lair, Mondstadt" },
    period: { vi: "Trước ~2.600 năm trước", en: "Before ~2,600 years ago" },
    ruler: { vi: "Decarabian – Thần Bão Tố", en: "Decarabian, God of Storms" },
    fate: { vi: "Bị lật đổ bởi cuộc nổi dậy của người dân và Barbatos", en: "Overthrown by the uprising of the people and Barbatos" },
    summary: {
      vi: "Thành phố cổ được bao bọc bởi bức tường bão tố khép kín của Decarabian. Sự cai trị áp đặt của ông dẫn tới cuộc nổi dậy khai sinh ra Mondstadt tự do ngày nay.",
      en: "An ancient city enclosed by Decarabian's impenetrable wall of storms. His suffocating rule sparked the rebellion that gave birth to today's free Mondstadt."
    },
    sections: [
      {
        title: { vi: "Thành phố lồng chim trong bão tố", en: "A gilded cage within the storm" },
        body: {
          vi: [
            "Khi vùng đất Mondstadt còn chìm trong băng giá của Lang Vương Andrius (Boreas), Thần Bão Tố Decarabian đã dựng một tòa tháp cao vút và bao bọc kinh đô bằng một bức tường cuồng phong để chắn băng tuyết.",
            "Ông tin rằng thần dân kính yêu và hạnh phúc dưới sự che chở của mình, mà không hề nhận ra họ khao khát được nhìn thấy bầu trời tự do bên ngoài bức tường gió. Phế tích của thành phố ấy chính là Phế Tích Phong Long (Stormterror's Lair) ngày nay."
          ],
          en: [
            "When the land of Mondstadt was frozen under the blizzards of Lupus Boreas (Andrius), Decarabian, God of Storms, raised a towering spire and encircled his capital with a wall of howling gales to keep the frost at bay.",
            "He believed his subjects were content and devoted beneath his shelter, never realizing they yearned to see the open sky beyond the wind wall. Those ruins are today's Stormterror's Lair."
          ]
        }
      },
      {
        title: { vi: "Khúc ca tự do của chàng thi sĩ vô danh", en: "The nameless bard's song of freedom" },
        body: {
          vi: [
            "Một chàng thi sĩ vô danh, nữ thợ săn Amos, tổ tiên gia tộc Gunnhildr, hiệp sĩ tóc đỏ cùng một tinh linh gió nhỏ bé đã đứng lên khởi nghĩa. Chàng thi sĩ và Amos ngã xuống trong trận chiến lật đổ Decarabian; tinh linh gió tiếp nhận sức mạnh trở thành Phong Thần [[venti|Barbatos]], mượn hình hài người bạn quá cố và san phẳng băng tuyết để xây dựng [[mondstadt]] mới."
          ],
          en: [
            "A nameless bard, the huntress Amos, the Gunnhildr clan's ancestors, a red-haired warrior, and a tiny wind spirit rose in rebellion. The bard and Amos fell in the battle that toppled Decarabian; the wind spirit ascended as Anemo Archon [[venti|Barbatos]], took the form of his fallen friend, and reshaped the land to found New [[mondstadt]]."
          ]
        }
      }
    ],
    theories: [],
    sources: [
      { label: "Fandom: Decarabian", url: "https://genshin-impact.fandom.com/wiki/Decarabian" },
      { label: "Fandom: Stormterror's Lair", url: "https://genshin-impact.fandom.com/wiki/Stormterror%27s_Lair" }
    ],
    related: ["mondstadt", "venti", "sal-vindagnyr"]
  },

  {
    id: "deshret-kingdom",
    name: { vi: "Vương quốc của Vua Deshret & Ay-Khanoum", en: "King Deshret's Kingdom & Ay-Khanoum" },
    status: "fallen",
    accent: "#e07a4a",
    region: { vi: "Sa mạc Sumeru", en: "Sumeru Desert" },
    period: { vi: "Hơn 2.000 năm trước", en: "Over 2,000 years ago" },
    ruler: { vi: "Vua Deshret (Al-Ahmar) & Nữ Thần Hoa Nabu Malikata", en: "King Deshret (Al-Ahmar) & Goddess of Flowers Nabu Malikata" },
    fate: { vi: "Sụp đổ sau khi tiếp xúc với Tri Thức Cấm Kỵ; Vua Deshret tự hi sinh", en: "Collapsed after contact with Forbidden Knowledge; King Deshret sacrificed himself" },
    summary: {
      vi: "Nền văn minh sa mạc hùng mạnh do Vua Deshret và Nữ Thần Hoa cai trị, từ kinh thành ánh trăng Ay-Khanoum đến những lăng mộ kim tự tháp khổng lồ trước khi Tri Thức Cấm Kỵ gieo rắc tai hoạ.",
      en: "A mighty desert civilization ruled by King Deshret and the Goddess of Flowers, spanning the moonlit city of Ay-Khanoum and colossal pyramid mausoleums before Forbidden Knowledge unleashed ruin."
    },
    sections: [
      {
        title: { vi: "Liên minh Tam Thần và Thành phố Mặt Trăng Ay-Khanoum", en: "The Three God-Kings and Ay-Khanoum, City of the Amphitheater" },
        body: {
          vi: [
            "Trước khi sa mạc và rừng mưa chia tách, [[sumeru]] cổ được đồng cai trị bởi ba vị thần kết nghĩa: Vua Deshret (Al-Ahmar), Nữ Thần Hoa Nabu Malikata (một Tiên Linh / Seelie sống sót từ thời cổ đại) và Thảo Thần Rukkhadevata. Họ cùng xây dựng thành phố ốc đảo **Ay-Khanoum** (Thành phố của Mặt Trăng) dành cho chủng tộc Jinni và con người.",
            "Câu chuyện về tình bạn, tình yêu và lý tưởng của ba vị thần được khắc hoạ chi tiết trong hai bộ thánh di vật [[desert-pavilion-chronicle]] và [[flower-of-paradise-lost]]."
          ],
          en: [
            "Before desert and rainforest were divided, ancient [[sumeru]] was co-ruled by three sworn deities: King Deshret (Al-Ahmar), the Goddess of Flowers Nabu Malikata (a surviving Seelie from antiquity), and Greater Lord Rukkhadevata. Together they raised the oasis metropolis of **Ay-Khanoum** (City of the Moon) for Jinni and mortals.",
            "The story of their bond, love, and ideals is richly detailed across the artifact sets [[desert-pavilion-chronicle]] and [[flower-of-paradise-lost]]."
          ]
        }
      },
      {
        title: { vi: "Cái chết của Nữ Thần Hoa và Tri Thức Cấm Kỵ", en: "The Goddess of Flowers' sacrifice and Forbidden Knowledge" },
        body: {
          vi: [
            "Để giúp Deshret thấu hiểu bí mật của thiên giới và tìm đường vượt thoát sự kiểm soát của Thiên Lý, Nabu Malikata đã hi sinh bản thân. Đau đớn và ám ảnh, Deshret lập nên Ốc Đảo Vĩnh Hằng, giao cho Jinni Liloupar hỗ trợ xây dựng thành bang [[gurabad]], đồng thời đào sâu vào Tri Thức Cấm Kỵ từ Vực Sâu.",
            "Tri Thức Cấm Kỵ bùng phát thành dịch bệnh Eleazar và vùng Khô Héo. Cuối cùng, Vua Deshret phải tự hi sinh tính mạng và nhờ Rukkhadevata phong ấn tai hoạ – gánh nặng mà 500 năm sau [[nahida]] mới xoá bỏ hoàn toàn khỏi [[irminsul]]."
          ],
          en: [
            "To help Deshret grasp cosmic secrets and find a way beyond the Heavenly Principles, Nabu Malikata sacrificed herself. Grief-stricken, Deshret created the Eternal Oasis, tasked the Jinni Liloupar with helping establish [[gurabad]], and delved into Abyssal Forbidden Knowledge.",
            "Forbidden Knowledge erupted as Eleazar and the Withering. Ultimately, King Deshret sacrificed his own life while Rukkhadevata contained the blight – a burden only fully purged from [[irminsul]] millennia later through [[nahida]]."
          ]
        }
      }
    ],
    theories: [
      {
        title: { vi: "\"Hoàng Kim Mộng Cảnh\" là một Irminsul nhân tạo?", en: "Was the \"Golden Slumber\" an artificial Irminsul?" },
        body: {
          vi: "Nhiều học giả lore cho rằng mạng lưới ý thức tập thể \"Hoàng Kim Mộng Cảnh\" (Golden Slumber) trong Lăng Mộ Vua Deshret là nỗ lực của ông nhằm tạo ra một cõi lưu trữ linh hồn tách biệt khỏi [[irminsul]] và vòng luân hồi của Celestia.",
          en: "Many lore scholars suggest the \"Golden Slumber\" collective consciousness network inside King Deshret's Mausoleum was his attempt to build a soul-repository independent of [[irminsul]] and Celestia's ley line cycle."
        },
        sources: [{ label: "r/Genshin_Lore – Golden Slumber & Irminsul", url: "https://www.reddit.com/r/Genshin_Lore/search/?q=Golden%20Slumber%20Irminsul" }]
      }
    ],
    sources: [
      { label: "Fandom: King Deshret", url: "https://genshin-impact.fandom.com/wiki/King_Deshret" },
      { label: "Fandom: Ay-Khanoum", url: "https://genshin-impact.fandom.com/wiki/Ay-Khanoum" }
    ],
    related: ["gurabad", "sumeru", "desert-pavilion-chronicle", "flower-of-paradise-lost", "nahida", "irminsul"]
  },

  {
    id: "gurabad",
    name: { vi: "Thành bang Gurabad", en: "City-State of Gurabad" },
    status: "fallen",
    accent: "#d9925c",
    region: { vi: "Sa mạc Hadramaveth, Sumeru", en: "Desert of Hadramaveth, Sumeru" },
    period: { vi: "Thời kỳ hậu Nữ Thần Hoa (Sumeru cổ)", en: "Post-Goddess of Flowers era (ancient Sumeru)" },
    ruler: { vi: "Vua Ormazd → Hoàng đế Parvezravan (Kisra)", en: "King Ormazd → Emperor Parvezravan (Kisra)" },
    fate: { vi: "Sụp đổ bởi âm mưu báo thù 3 thế hệ của Jinni Liloupar và hố sâu Vực Sâu", en: "Destroyed by the Jinni Liloupar's three-generation vengeance and an Abyssal sinkhole" },
    summary: {
      vi: "Vương quốc phàm trần hùng mạnh do Vua chăn cừu Ormazd và Jinni Liloupar dựng nên dưới sự bảo trợ của Vua Deshret, trước khi bị huỷ diệt bởi bạo chính, phản bội và sự báo thù tàn khốc.",
      en: "A prosperous mortal kingdom founded by the shepherd-king Ormazd and the Jinni Liloupar under King Deshret's patronage, before collapsing into tyranny, betrayal, and ruthless vengeance."
    },
    sections: [
      {
        title: { vi: "Chàng chăn cừu và Mẫu thân của Jinni", en: "The shepherd and the Mother of Jinni" },
        body: {
          vi: [
            "Theo lệnh [[deshret-kingdom|Vua Deshret]], đại Jinni Liloupar tìm một vị vua phàm trần để xây dựng vương quốc bảo vệ Ốc Đảo Vĩnh Hằng. Bà đem lòng yêu chàng chăn cừu Ormazd, ban cho ông trí tuệ và sức mạnh để thống nhất các bộ tộc lập nên kinh thành Gurabad.",
            "Nhưng quyền lực biến Ormazd thành một bạo chúa kiêu ngạo, bóc lột nô lệ và các cỗ máy Jinni. Cảm thấy bị phản bội, Liloupar âm thầm sắp đặt một kế hoạch báo thù kéo dài ba thế hệ để huỷ diệt hoàn toàn dòng máu của chính chồng mình."
          ],
          en: [
            "At [[deshret-kingdom|King Deshret]]'s command, the great Jinni Liloupar sought a mortal king to build a realm guarding the Eternal Oasis. She fell in love with the shepherd Ormazd, granting him wisdom and power to unite the tribes and found Gurabad.",
            "Yet power corrupted Ormazd into an arrogant tyrant who exploited slaves and Jinni-powered machines. Betrayed, Liloupar silently wove a three-generation plot to utterly annihilate her husband's bloodline."
          ]
        }
      },
      {
        title: { vi: "Đêm tiệc máu của Công chúa Shirin và sự sụp đổ", en: "Princess Shirin's blood banquet and the collapse" },
        body: {
          vi: [
            "Con gái của Ormazd và Liloupar là công chúa Shirin bị vua cha ghẻ lạnh, gả cho người con nuôi Kisra. Trong một đêm yến tiệc, Shirin đầu độc bằng mật ong giết chết vua cha Ormazd cùng hàng trăm anh chị em hoàng tộc ([[desert-pavilion-chronicle]]), đưa Kisra lên ngôi với hiệu **Parvezravan**.",
            "Đỉnh điểm của bi kịch, dự án chế tạo các Jinni khổng lồ vô hồn của Parvezravan và Shirin đã xé toạc mặt đất, nhấn chìm toàn bộ Gurabad xuống cát sâu. Vì tội ác này, Vua Deshret đã xé linh hồn Liloupar thành nhiều mảnh và phong ấn bà."
          ],
          en: [
            "Ormazd and Liloupar's daughter, Princess Shirin, was shunned by her father and wed to his adopted son Kisra. On a banquet night, Shirin poisoned the honey, killing Ormazd and hundreds of royal siblings ([[desert-pavilion-chronicle]]), elevating Kisra to the throne as **Parvezravan**.",
            "At the tragedy's climax, Parvezravan and Shirin's project to manufacture soulless giant Jinni tore open the earth, swallowing Gurabad into the sands. For orchestrating this ruin, King Deshret split Liloupar's soul into fragments and sealed her away."
          ]
        }
      }
    ],
    theories: [],
    sources: [
      { label: "Fandom: Gurabad", url: "https://genshin-impact.fandom.com/wiki/Gurabad" },
      { label: "Fandom: Liloupar", url: "https://genshin-impact.fandom.com/wiki/Liloupar" }
    ],
    related: ["deshret-kingdom", "desert-pavilion-chronicle", "flower-of-paradise-lost", "sumeru"]
  },

  {
    id: "remuria",
    name: { vi: "Remuria", en: "Remuria" },
    status: "fallen",
    accent: "#e2c06b",
    region: { vi: "Dưới biển Fontaine (Biển Cổ Đại – Sea of Bygone Eras)", en: "Beneath Fontaine's sea (Sea of Bygone Eras)" },
    period: { vi: "Trước thời Thuỷ Thần Egeria (> 2.000 năm trước)", en: "Before Hydro Archon Egeria (> 2,000 years ago)" },
    ruler: { vi: "Thần Vương Remus (Sebastos)", en: "God-King Remus (Sebastos)" },
    fate: { vi: "Sụp đổ trong nỗ lực chống lại số mệnh, chìm xuống biển sâu", en: "Collapsed while defying fate; sank into the abyssal sea" },
    summary: {
      vi: "Đế chế cổ đại lấy âm nhạc làm trung tâm, do Thần Vương Remus dựng nên trên vùng biển Fontaine. Remuria tìm cách thay đổi số phận đã được tiên tri và sụp đổ vì chính điều đó.",
      en: "An ancient empire centered on music, founded by God-King Remus in the waters of Fontaine. Remuria sought to change its prophesied fate – and fell because of it."
    },
    sections: [
      {
        title: { vi: "Con tàu vàng Fortuna và liên minh với vishap", en: "The golden ship Fortuna and the vishap alliance" },
        body: {
          vi: [
            "Remus vốn là một vị thần rời khỏi vùng đất [[sumeru]] để đến vùng biển nguyên thuỷ của [[fontaine]] trên con tàu vàng *Fortuna*. Ông dạy con người kiến trúc, luật pháp và đặc biệt là âm nhạc.",
            "Sau 30 ngày giao chiến bất phân thắng bại với hoàng tử vishap Scylla, Remus và Scylla kết minh. Ông bổ nhiệm bốn vị Harmost (trong đó có Boethius và Cassiodor) để cùng cai quản đế chế."
          ],
          en: [
            "Remus was a god who departed from the [[sumeru]] region and arrived in [[fontaine]]'s waters aboard his golden ship *Fortuna*. He taught humanity architecture, law, and above all, music.",
            "After a 30-day battle with the vishap prince Scylla, Remus and Scylla forged an alliance. He appointed four Harmosts (including Boethius and Cassiodor) to help govern the empire."
          ]
        }
      },
      {
        title: { vi: "Đại Giao Hưởng (Phobos) và sự sụp đổ", en: "The Grand Symphony (Phobos) and the fall" },
        body: {
          vi: [
            "Khi nhà tiên tri Sybilla báo trước rằng đế chế sẽ bị sóng biển nhấn chìm, Remus đã dùng chất dịch vàng *Ichor* và hệ thống nhạc cụ khổng lồ *Phobos* (Đại Giao Hưởng) để tách linh hồn người dân khỏi xác thịt phàm trần, đưa vào thân xác tượng đá golem bất hoại.",
            "Tuy nhiên, Phobos bị chính những dục vọng và thù hận cực đoan của con người (đặc biệt là Harmost Boethius) làm biến chất, kích động chiến tranh tàn sát các bộ tộc của nữ hiệp Erinnyes. Cuối cùng, chính Remus tự huỷ để giải thoát thần dân, và cả thủ đô Capitolium chìm xuống vực biển sâu."
          ],
          en: [
            "When the prophetess Sybilla foretold that his empire would sink beneath the waves, Remus used golden *Ichor* and the grand musical apparatus *Phobos* (the Grand Symphony) to transfer his people's souls into immortal stone golem bodies.",
            "However, Phobos was corrupted by extreme human desires and hatred (especially from Harmost Boethius), sparking war against the resistance led by Erinnyes. Ultimately, Remus sacrificed himself to free his people, and the capital Capitolium sank into the sea abyss."
          ]
        }
      }
    ],
    theories: [
      {
        title: { vi: "Remuria và Fontaine: hai cách đối diện với Fortuna (Số mệnh)", en: "Remuria and Fontaine: two answers to Fortuna (Fate)" },
        body: {
          vi: "Remus cố thay đổi bản chất con người và dùng vũ lực chống lại bánh xe số mệnh (Fortuna), kết cục là tự đẩy nhanh lời tiên tri. Ngược lại, ở [[fontaine]] hiện đại, Focalors và [[furina]] để lời tiên tri diễn ra đúng về mặt hình thức nhưng thay đổi ý nghĩa bên trong nó nhờ [[neuvillette]].",
          en: "Remus tried to alter human nature and resist the wheel of fate (Fortuna) by force, inadvertently hastening the prophecy. Conversely, in modern [[fontaine]], Focalors and [[furina]] let the prophecy unfold in form while transforming its substance through [[neuvillette]]."
        },
        sources: [{ label: "r/Genshin_Lore – Remuria & Fontaine Fate", url: "https://www.reddit.com/r/Genshin_Lore/search/?q=Remuria%20Fontaine%20fate" }]
      }
    ],
    sources: [
      { label: "Fandom: Remuria", url: "https://genshin-impact.fandom.com/wiki/Remuria" },
      { label: "Fandom: Remus", url: "https://genshin-impact.fandom.com/wiki/Remus" }
    ],
    related: ["fontaine", "furina", "neuvillette"]
  },

  {
    id: "ochkanatlan",
    name: { vi: "Văn minh Rồng Tollan & Thành cổ Ochkanatlan", en: "Dragon Civilization of Tollan & Ancient Ochkanatlan" },
    status: "fallen",
    accent: "#ff8c5a",
    region: { vi: "Núi lửa Tollan & Ochkanatlan, Natlan", en: "Great Volcano of Tollan & Ochkanatlan, Natlan" },
    period: { vi: "Thời đại Long Vương – hậu thời Xbalanque", en: "Dragon Sovereign Era – post-Xbalanque era" },
    ruler: { vi: "Hoả Long Vương Xiuhcoatl → Bạo chúa bán rồng Och-Kan", en: "Pyro Sovereign Xiuhcoatl → Half-Dragon Tyrant Och-Kan" },
    fate: { vi: "Xiuhcoatl bị Xbalanque đánh bại; bạo chúa Och-Kan bị các anh hùng bộ tộc lật đổ", en: "Xiuhcoatl was slain by Xbalanque; tyrant Och-Kan was overthrown by tribal heroes" },
    summary: {
      vi: "Nền văn minh rồng Phlogiston siêu việt của Hoả Long Vương Xiuhcoatl và thành phố cổ Ochkanatlan – nơi chứng kiến cuộc chuyển giao đẫm máu từ quyền thống trị của loài rồng sang loài người tại Natlan.",
      en: "The advanced Phlogiston dragon civilization of Pyro Sovereign Xiuhcoatl and the ruined city of Ochkanatlan – witness to the bloody transition from dragon rule to human rule in Natlan."
    },
    sections: [
      {
        title: { vi: "Hoả Long Vương Xiuhcoatl, Hiền Giả Trộm Lửa và Xbalanque", en: "Pyro Sovereign Xiuhcoatl, the Sage of the Stolen Flame, and Xbalanque" },
        body: {
          vi: [
            "Trước khi con người trỗi dậy ở [[natlan]], Hoả Long Vương **Xiuhcoatl** cai trị thành cổ Tollan với công nghệ dựa trên nguồn năng lượng nguyên thuỷ **Phlogiston**. Tuy nhiên, một con rồng dưới trướng ông là **Waxaklahun Ubah Kan** (Hiền Giả Trộm Lửa / Sage of the Stolen Flame) đã phản bội đồng족, trao bí mật sử dụng Phlogiston cho loài người với mưu đồ đưa con trai lai của mình là **Och-Kan** lên làm chúa tể mới.",
            "Kế hoạch của vị hiền giả bị đảo lộn khi chiến binh phàm trần **Xbalanque** trực tiếp đánh bại Xiuhcoatl và bước ra từ ngọn lửa trở thành Hoả Thần đầu tiên của Natlan."
          ],
          en: [
            "Before humanity rose in [[natlan]], Pyro Dragon Sovereign **Xiuhcoatl** ruled the ancient city of Tollan using advanced **Phlogiston** technology. However, the dragon **Waxaklahun Ubah Kan** (the Sage of the Stolen Flame) betrayed his kind, handing the secret of Phlogiston to humans in a scheme to install his half-dragon son **Och-Kan** as supreme ruler.",
            "The Sage's plan was upended when the mortal warrior **Xbalanque** personally slew Xiuhcoatl and emerged from the flames as Natlan's first Pyro Archon."
          ]
        }
      },
      {
        title: { vi: "Sự cuồng tín và sụp đổ của bạo chúa Och-Kan", en: "The fanaticism and downfall of the tyrant Och-Kan" },
        body: {
          vi: [
            "Tôn thờ Xbalanque đến mức cực đoan và căm ghét dòng máu rồng trong chính cơ thể mình, sau khi Xbalanque rời ngai, **Och-Kan** thống nhất Liên Minh các bộ tộc tại kinh thành **Ochkanatlan**.",
            "Để buộc nhân loại không bao giờ phải phụ thuộc vào thần hay rồng nữa, Och-Kan áp đặt chế độ độc tài tàn bạo, săn lùng loài rồng Saurian và chế tạo lõi năng lượng *Chu'ulel*. Cuối cùng, người bạn cũ Yupanqui cùng các anh hùng như thiếu nữ mắt đỏ Chaac đã nổi dậy lật đổ Och-Kan, biến Ochkanatlan thành phế tích bị nguyền rủa."
          ],
          en: [
            "Fanatically worshipping Xbalanque while despising the dragon blood in his own veins, **Och-Kan** ruled the Grand Alliance from the capital of **Ochkanatlan** after Xbalanque's departure.",
            "Seeking to ensure humanity would never again rely on gods or dragons, Och-Kan imposed a brutal tyranny, hunted Saurians, and built the *Core of Chu'ulel*. Ultimately, his old friend Yupanqui and heroes such as the red-eyed youth Chaac rose up to overthrow Och-Kan, leaving Ochkanatlan a cursed ruin."
          ]
        }
      }
    ],
    theories: [],
    sources: [
      { label: "Fandom: Ochkanatlan", url: "https://genshin-impact.fandom.com/wiki/Ochkanatlan" },
      { label: "Fandom: Xiuhcoatl", url: "https://genshin-impact.fandom.com/wiki/Xiuhcoatl" }
    ],
    related: ["natlan", "mavuika", "before-sun-and-moon"]
  },

  {
    id: "khaenriah",
    name: { vi: "Khaenri'ah (Vương Quốc Dưới Lòng Đất – \"Dahri\")", en: "Khaenri'ah (The Underground Kingdom – \"Dahri\")" },
    status: "fallen",
    accent: "#c9a14a",
    region: { vi: "Hang động khổng lồ dưới lòng đất (cổng vào nằm dưới sa mạc Gavireh Lajavard, Sumeru)", en: "Subterranean cavern (gateway beneath Gavireh Lajavard, Sumeru)" },
    period: { vi: "Cổ đại (> 3.700 năm trước) – Đại Thảm Hoạ (~500 năm trước)", en: "Antiquity (> 3,700 years ago) – The Cataclysm (~500 years ago)" },
    ruler: { vi: "Vương triều Hắc Nhật (Crimson Moon) → Vương triều Nhật Thực (Eclipse – Vua Irmin) → Nhiếp chính Anfortas", en: "Crimson Moon Dynasty → Eclipse Dynasty (King Irmin) → Regent Anfortas" },
    fate: { vi: "Bị Thiên Lý và Thất Thần huỷ diệt 500 năm trước; người thuần chủng mang Lời Nguyền Bất Tử, người ngoại tộc hoá thành Hilichurl", en: "Destroyed by the Heavenly Principles and The Seven 500 years ago; pure-bloods cursed with Immortality, mixed-bloods turned into Hilichurls" },
    summary: {
      vi: "Quốc gia duy nhất của nhân loại không thờ phụng bất kỳ vị thần nào (được người Sumeru gọi là \"Dahri\"), trải qua hai vương triều Hắc Nhật và Nhật Thực, đạt đỉnh cao về giả kim thuật Khemia và cơ khí chiến tranh trước khi sụp đổ trong Đại Thảm Hoạ 500 năm trước.",
      en: "The only human nation that worshipped no god (known in Sumeru as \"Dahri\"), spanning the Crimson Moon and Eclipse Dynasties and reaching the pinnacle of Khemia alchemy and war machinery before collapsing in the Cataclysm 500 years ago."
    },
    sections: [
      {
        title: { vi: "1. Địa lý, Xã hội và Triết lý \"Không Thờ Thần\" của Khaenri'ah", en: "1. Geography, Society, and the Godless Ethos of Khaenri'ah" },
        body: {
          vi: [
            "Khác với bảy quốc gia trên mặt đất chịu sự cai trị của Thất Thần và hệ thống [[vision]] của [[celestia]], **Khaenri'ah** (được các học giả [[sumeru]] cổ gọi là **\"Dahri\"**) được loài người xây dựng hoàn toàn độc lập trong một hang động khổng lồ sâu dưới lòng đất, ngay gần biên giới với Vực Sâu (Abyss). Cánh cổng khổng lồ dẫn vào vương quốc nằm sâu dưới lòng đất vùng *Gavireh Lajavard* (sa mạc Sumeru).",
            "Do dưới lòng đất không có ánh sáng tự nhiên và hệ động thực vật vô cùng khan hiếm, người Khaenri'ah phát triển **Nghệ thuật Khemia (Giả kim thuật tạo tác sự sống)** và **Cơ khí hạng nặng**. Quốc hoa của Khaenri'ah là **Hoa Inteyvat** – loài hoa trắng chỉ nở hai tuần trước khi héo tàn tại quê hương, nhưng nếu bị đem lên mặt đất Teyvat thì cánh hoa sẽ đông cứng lại và không bao giờ tàn phai (loài hoa cài trên tóc của người thân song sinh Nhà Lữ Hành).",
            "Bất kỳ người dân nào từ 7 quốc gia trên mặt đất chán ghét sự cai trị của thần linh đều được Khaenri'ah dang tay đón nhận. Tuy nhiên, sự phân biệt giữa **người Khaenri'ah thuần chủng** (có đồng tử mắt hình ngôi sao 4 cánh đặc trưng như [[dainsleif]], Pierro, Kaeya, Chlothar Alberich) và **người mang dòng máu ngoại tộc** về sau đã quyết định hai số phận hoàn toàn khác nhau khi lời nguyền của Thiên Lý giáng xuống."
          ],
          en: [
            "Unlike the seven surface nations governed by The Seven and [[celestia]]'s [[vision]] system, **Khaenri'ah** (known in ancient [[sumeru]] texts as **\"Dahri\"**) was built independently by humans inside a subterranean cavern bordering the Abyss. Its colossal sealed gateway lies deep beneath *Gavireh Lajavard* in Sumeru's desert.",
            "Lacking natural sunlight and flora, Khaenri'ahns developed **Khemia (life-creation alchemy)** and heavy machinery. Their national flower is the **Inteyvat**, which blooms for only two weeks in its homeland but hardens to never wither if plucked and brought to the surface.",
            "While Khaenri'ah welcomed refugees from across Teyvat who rejected the gods, the distinction between **pure-blooded Khaenri'ahns** (marked by four-pointed star pupils such as [[dainsleif]], Pierro, Kaeya, and Chlothar Alberich) and **citizens of mixed surface descent** later determined their two divergent curses during the Cataclysm."
          ]
        }
      },
      {
        title: { vi: "2. Vương triều Thứ Nhất: Vương Triều Hắc Nhật (Crimson Moon Dynasty)", en: "2. First Dynasty: The Crimson Moon Dynasty" },
        body: {
          vi: [
            "Theo bộ sách cổ **[[perinheri]]** và hồ sơ nhân vật của **[[arlecchino]]**, triều đại đầu tiên cai trị Khaenri'ah là **Vương triều Hắc Nhật (Crimson Moon Dynasty)** – tồn tại từ thời cổ đại đến khoảng thời Chiến tranh Ma Thần. Vương triều này tôn thờ **Hồng Nguyệt (Iridescent Moon)** – một trong Ba Chị Em Mặt Trăng cổ đại đã sụp đổ và chìm xuống Vực Sâu biến thành **Trăng Đỏ (Crimson Moon / Balemoon)** phán xét dưới bầu trời ngầm.",
            "Những người mang huyết thống hoàng gia Hắc Nhật sở hữu đôi mắt có dấu gạch chéo hình chữ **X** và ngọn lửa đỏ đen có khả năng đốt cháy cả ký ức lẫn số mệnh (mà hậu duệ cuối cùng còn sống ngày nay chính là **[[arlecchino|Peruere – Quan Chấp Hành thứ 4 Arlecchino]]**).",
            "Dưới thời Hắc Nhật, học viện cao cấp **Universitas Magistrorum** (nơi hội tụ các nhà chiêm tinh, giả kim thuật và pháp sư) đã xây dựng một **Viện Mồ Côi** đặc biệt cùng một đường hầm tối đốt lửa ma mị. Mục đích của viện mồ côi này là đón nhận những đứa trẻ \"vượt qua biển sao từ thế giới khác\" – tức tìm kiếm một **Kẻ Đổ Bộ (Descender)** có khả năng vượt lên trên định mệnh của thần linh. Anh hùng bất bại **Perinheri** chính là đứa trẻ thành công nhất bước ra từ đường hầm đó.",
            "Cuối cuốn [[perinheri]] cũng ghi lại chi tiết chấn động: khi Perinheri cùng kỵ sĩ **Hleobrant** và phù thuỷ **Angelica** bị truy đuổi ra biên giới Khaenri'ah, ngay khoảnh khắc rời khỏi lãnh thổ ngầm, Hleobrant (vốn là người ngoại tộc từng phản bội thần của mình) đã ôm mặt gào thét và **biến thành một con quái vật Hilichurl** – chứng minh **Lời Nguyền Hoang Dã** đã tồn tại từ hàng nghìn năm trước Đại Thảm Hoạ!"
          ],
          en: [
            "According to **[[perinheri]]** and **[[arlecchino]]**'s lore, Khaenri'ah's first ruling house was the **Crimson Moon Dynasty**, which venerated the fallen **Iridescent Moon** after its corpse sank into the Abyss as the judgmental **Crimson Moon (Balemoon)**.",
            "Nobles of the Crimson Moon bloodline bore **X-shaped pupils** and wielded balemoon fire capable of burning memories and fate (whose last known descendant today is **[[arlecchino|Peruere / Arlecchino]]**).",
            "During this dynasty, sages of the **Universitas Magistrorum** established an orphanage featuring a pitch-black tunnel of illusions designed to receive children who had \"crossed the sea of stars\" – seeking a **Descender** who could transcend the gods. The undefeated warrior **Perinheri** emerged from this institution, while his companion **Hleobrant** transformed into a **hilichurl** the moment he stepped outside Khaenri'ah's borders – proving the Curse of the Wilderness existed millennia before the Cataclysm."
          ]
        }
      },
      {
        title: { vi: "3. Vương triều Thứ Hai: Vương Triều Nhật Thực (Eclipse Dynasty) & Công nghệ Cơ khí", en: "3. Second Dynasty: The Eclipse Dynasty & War Machinery" },
        body: {
          vi: [
            "Khi Trăng Đỏ lặn xuống và dòng máu quý tộc Hắc Nhật suy tàn, một cuộc chính biến đã lật đổ triều đại cũ để lập nên **Vương triều Nhật Thực (Eclipse Dynasty)** với biểu tượng **Mặt Trời Đen 8 cánh** che khuất ánh trăng. Vị vua cuối cùng của Vương triều Nhật Thực là **Vua Irmin (Vinster King)**.",
            "Dưới thời Nhật Thực, Khaenri'ah chuyển trọng tâm từ huyết thống huyền bí sang **khoa học kỹ thuật cơ khí** và **Khemia công nghiệp**. Họ chế tạo hàng loạt cỗ máy chiến tranh vận hành bằng lõi năng lượng vĩnh cửu **Azosite** và dòng chảy Địa Mạch, được đặt mật danh là **\"Máy Cày\" (Field Tillers / Ruin Guards)** dựa trên châm ngôn quân sự: *\"Đất đai không phải để cày bằng cuốc xẻng, mà phải được giành lấy bằng sắt và máu\"*, cùng những siêu robot khổng lồ bằng cả ngọn núi là **Ruin Golem**.",
            "Khi Vua Irmin tuổi cao sức yếu và ngày càng lún sâu vào sự điên loạn với sức mạnh Vực Sâu, gia tộc quý tộc **Alberich** (tổ tiên của Chlothar và Kaeya) đã từng đảm nhận vai trò nhiếp chính tạm thời."
          ],
          en: [
            "As the Crimson Moon set and its lineage waned, the **Eclipse Dynasty** rose to power under the emblem of an **eight-pointed Black Sun**, culminating in the reign of **King Irmin (the Vinster King)**.",
            "The Eclipse Dynasty pivoted toward industrial **Khemia** and war engineering, mass-producing **Ruin Guards (\"Field Tillers\")** powered by **Azosite** under the creed *\"The land is not to be tilled with farming tools, but fought for with steel and blood,\"* alongside mountain-sized **Ruin Golems**."
          ]
        }
      },
      {
        title: { vi: "4. Đại Thảm Hoạ 500 Năm Trước, Năm Tội Đồ và Hai Lời Nguyền", en: "4. The Cataclysm 500 Years Ago, the Five Sinners, and the Two Curses" },
        body: {
          vi: [
            "Khoảng 500 năm trước, Vua Irmin và các hiền giả (bất chấp lời can ngăn của pháp sư hoàng gia **Pierro** – [[pale-flame]]) đã lợi dụng người thân song sinh của Nhà Lữ Hành làm \"vật chứa\" để hấp thụ nguồn sức mạnh vô tận của Vực Sâu. Khi nhà tiên tri **Vedrfolnir** đưa ra lời cảnh báo trái ý nhà vua, Vua Irmin đã chọc mù hai mắt ông và tống giam ông vào ngục tối.",
            "Em trai của Vedrfolnir là Đội trưởng Vệ binh Hoàng gia **[[dainsleif]] (\"Kiếm Hoàng Hôn\")** đã tập hợp 5 nhân vật kiệt xuất nhất vương quốc để đi cứu anh trai và ngăn chặn Vua Irmin. Nhưng cả 5 người đó lại không cưỡng nổi cám dỗ của Vực Sâu, chia nhau nguồn sức mạnh có thể huỷ diệt thế giới để trở thành **Năm Tội Đồ của Khaenri'ah**:\n  • **[[rhinedottir|Rhinedottir (\"Gold\" – Vàng)]]:** Đại giả kim thuật sư tạo ra rồng độc Durin ([[festering-desire]]), Vua Thú Hoàng Kim và Chó Săn Ma Vật tràn lên mặt đất.\n  • **Vedrfolnir (\"The Visionary\" – Nhà Tiên Tri):** Sau này trở thành kẻ sáng lập tâm linh của Giáo Đoàn Vực Sâu.\n  • **Surtalogi (\"The Foul\" – Kẻ Cực Ác):** Sư phụ của **[[skirk]]**, chủ nhân của Thôn Tinh Kình Ngư ở [[fontaine]].\n  • **Hroptatyr (\"The Wise\" – Hiền Giả).**\n  • **Rerir (\"Rächer of Solnari\" – Kẻ Báo Thù Trăng).**",
            "Khi thủy triều quái vật của Rhinedottir tràn ngập Teyvat (giết chết Lôi Thần Makoto, Thủy Thần Egeria và làm ô nhiễm Thảo Thần Rukkhadevata), **Thiên Lý** và **Chấp Chính Cái Chết Ronova** đã giáng đòn huỷ diệt toàn bộ Khaenri'ah và áp đặt **Hai Lời Nguyền**:\n  1. **Lời Nguyền Bất Tử (Curse of Immortality):** Dành cho người Khaenri'ah thuần chủng (như Dainsleif, Pierro, [[capitano]], Chlothar Alberich) – linh hồn bị từ chối bởi [[irminsul]], thể xác mục rữa đau đớn nhưng vĩnh viễn không thể chết.\n  2. **Lời Nguyền Hoang Dã (Curse of the Wilderness):** Dành cho công dân mang dòng máu từ các thần quốc khác (như Caribert Alberich, Ukko) – bị tước đoạt trí tuệ và nhân dạng, biến thành quái vật **Hilichurl** ([[hilichurl-cultural-customs]]).",
            "Trong cảnh tận thế khi Năm Tội Đồ bỏ mặc quê hương, **Nguyên soái Nhiếp chính Anfortas Alberich** (tự lập đoàn **Kỵ Sĩ Schwanenritter** sau khi Vua Irmin gục ngã) và tướng quân **[[capitano|Thrain (Il Capitano)]]** đã chỉ huy những cỗ máy Ruin Golem đưa dân tị nạn chạy lên mặt đất chiến đấu tại [[sumeru]] và [[natlan]]. Về sau, quý tộc **Chlothar Alberich** lập nên **Giáo Đoàn Vực Sâu** với dự án **[[loom-of-fate|Máy Dệt Vận Mệnh]]**."
          ],
          en: [
            "Around 500 years ago, King Irmin blinded and imprisoned the prophet **Vedrfolnir** for warning against exploiting the Traveler's twin as a vessel for Abyssal power. When Royal Guard Captain **[[dainsleif]]** gathered five peers to rescue his brother and stop the king, those five instead divided world-shattering Abyssal power among themselves to become the **Five Sinners of Khaenri'ah** (**[[rhinedottir]]**, **Vedrfolnir**, **Surtalogi**, **Hroptatyr**, and **Rerir**).",
            "As Rhinedottir's monsters flooded Teyvat, the **Heavenly Principles** and **Ronova** annihilated Khaenri'ah and imposed two curses: the **Curse of Immortality** upon pure-blooded Khaenri'ahns, and the **Curse of the Wilderness** (turning mixed-blood citizens into **hilichurls**). While the Five Sinners abandoned their nation, Regent **Anfortas**'s **Schwanenritter** and **[[capitano|Thrain (Capitano)]]** fought to evacuate survivors, and **Chlothar Alberich** later founded the **Abyss Order** and the **[[loom-of-fate|Loom of Fate]]**."
          ]
        }
      }
    ],
    theories: [
      {
        title: { vi: "Năm Tội Đồ đối xứng trực tiếp với Đấng Nguyên Sơ và Bốn Bóng Hình?", en: "Do the Five Sinners directly mirror the Primordial One and the Four Shades?" },
        body: {
          vi: "Cộng đồng nhận thấy 5 danh hiệu báng bổ của Năm Tội Đồ (Sự Sống – Rhinedottir, Thời Gian – Vedrfolnir, Không Gian/Hư Không – Surtalogi, Lý Trí – Hroptatyr, Cái Chết – Rerir) tương ứng chính xác với 5 chiếc thánh di vật trong game (Hoa, Đồng Hồ, Ly, Nón, Lông Vũ) cũng như Đấng Nguyên Sơ và Bốn Bóng Hình Rực Sáng.",
          en: "The community notes that the Five Sinners' domains (Life – Rhinedottir, Time – Vedrfolnir, Void/Space – Surtalogi, Reason – Hroptatyr, Death – Rerir) correspond directly to the 5 artifact slots in-game (Flower, Sands, Goblet, Circlet, Plume) as well as the Primordial One and the Four Shining Shades."
        },
        sources: [{ label: "r/Genshin_Lore – Five Sinners & Five Artifacts", url: "https://www.reddit.com/r/Genshin_Lore/search/?q=Five%20Sinners%20Five%20Artifacts" }]
      }
    ],
    sources: [
      { label: "Fandom: Khaenri'ah", url: "https://genshin-impact.fandom.com/wiki/Khaenri%27ah" },
      { label: "Fandom: Five Sinners of Khaenri'ah", url: "https://genshin-impact.fandom.com/wiki/Five_Sinners_of_Khaenri%27ah" },
      { label: "Fandom: Perinheri", url: "https://genshin-impact.fandom.com/wiki/Perinheri" }
    ],
    related: ["dainsleif", "rhinedottir", "capitano", "arlecchino", "skirk", "perinheri", "hilichurl-cultural-customs", "pale-flame", "loom-of-fate"]
  },

  /* ===================== ĐANG TỒN TẠI / EXISTING (7 QUỐC GIA) ===================== */
  {
    id: "mondstadt",
    name: { vi: "Mondstadt (Thành Phố Tự Do & Thơ Ca)", en: "Mondstadt (City of Freedom & Pastorals)" },
    status: "existing",
    accent: "#6be3c0",
    region: { vi: "Đông bắc Teyvat (Hồ Cider, Phong Khởi Địa, Long Tích Tuyết Sơn, Cảng Dornman)", en: "Northeastern Teyvat (Cider Lake, Windrise, Dragonspine, Dornman Port)" },
    period: { vi: "~2.600 năm trước – nay", en: "~2,600 years ago – present" },
    ruler: { vi: "Phong Thần Barbatos (Venti – vắng mặt); Đội Kỵ Sĩ Tây Phong & Giáo Hội Tây Phong điều hành", en: "Anemo Archon Barbatos (Venti – absentee); governed by the Knights of Favonius & Church of Favonius" },
    fate: { vi: "Quốc gia tự do không có vua chúa, được Tứ Phong Thủ Hộ bảo vệ suốt hàng thiên niên kỷ", en: "A crownless nation of freedom protected by the Four Winds across millennia" },
    summary: {
      vi: "Quốc gia của Gió, Rượu Bồ Công Anh và Tự Do ở đông bắc Teyvat – nơi từng trải qua kỷ nguyên băng giá của Sal Vindagnyr, bức tường bão tố của bạo chúa Decarabian, thời kỳ nô lệ dưới ách Quý tộc Lawrence và cuộc khởi nghĩa của nữ anh hùng Vennessa.",
      en: "The nation of Wind, Dandelion Wine, and Freedom in northeastern Teyvat – shaped by the frozen ruins of Sal Vindagnyr, Storm God Decarabian's gale barrier, the aristocratic tyranny of the Lawrence Clan, and Vennessa's rebellion."
    },
    sections: [
      {
        title: { vi: "1. Địa lý, Văn hoá và Thể chế \"Thành Phố Không Vua\"", en: "1. Geography, Culture, and the \"Crownless City\"" },
        body: {
          vi: [
            "**Mondstadt** nằm ở vùng đông bắc Teyvat, nổi tiếng với địa hình đồng bằng xanh mướt, những cối xay gió khổng lồ, nghề ủ rượu vang tại **Tửu Trang Dawn (Dawn Winery)** và những bài thơ tình ca của các nhà thơ lang thang. Các khu vực trọng yếu của Mondstadt bao gồm:\n  • **Thành Mondstadt trên Hồ Cider:** Kinh thành được bao quanh bởi hồ nước ngọt tự nhiên.\n  • **Phong Khởi Địa (Windrise):** Nơi cây sồi khổng lồ mọc lên từ nơi nữ anh hùng **Vennessa** thăng thiên lên [[celestia]].\n  • **Phế Tích Phong Long (Stormterror's Lair):** Kinh đô cũ của Thần Bão Tố Decarabian ([[old-mondstadt]]).\n  • **Long Tích Tuyết Sơn (Dragonspine):** Ngọn núi tuyết vĩnh cửu chôn vùi vương quốc cổ [[sal-vindagnyr]] dưới Đinh Băng Thiên Không và hài cốt rồng độc Durin.\n  • **Thiên Phong Thần Điện (Thousand Winds Temple) & Đảo Không Tên:** Di tích cổ nơi người dân từng thờ phụng chung cả **Phong Thần Barbatos** và **Chấp Chính Thời Gian Istaroth**.\n  • **Cảng Dornman (Dornman Port):** Cảng thương mại huyết mạch ở phía bắc Mondstadt.",
            "Vì Phong Thần **[[venti|Barbatos]]** từ chối việc trực tiếp cai trị để giữ trọn lý tưởng \"Tự Do\", Mondstadt được điều hành bởi **Đội Kỵ Sĩ Tây Phong (Knights of Favonius)** (hiện do Đại Đoàn Trưởng **Varka** dẫn quân viễn chinh phương Bắc tại [[snezhnaya|Nod-Krai]], giao lại quyền nhiếp chính cho Quyền Đoàn Trưởng **Jean Gunnhildr**) phối hợp cùng **Giáo Hội Tây Phong** (do Hồng Y **Seamus Pegg** đứng đầu)."
          ],
          en: [
            "**Mondstadt** lies in northeastern Teyvat, famed for its rolling plains, windmills, **Dawn Winery**, and bardic traditions. Key regions include **Mondstadt City on Cider Lake**, **Windrise** (site of Vennessa's oak tree), **Stormterror's Lair** ([[old-mondstadt]]), **Dragonspine** ([[sal-vindagnyr]]), the **Thousand Winds Temple** (where **Barbatos** and **Istaroth** were once worshipped together), and **Dornman Port**.",
            "Because Anemo Archon **[[venti|Barbatos]]** refused to rule as a monarch, Mondstadt is governed by the **Knights of Favonius** (led by Grand Master **Varka** on expedition and Acting Grand Master **Jean Gunnhildr**) alongside the **Church of Favonius**."
          ]
        }
      },
      {
        title: { vi: "2. Kỷ nguyên Băng Giá, Cuộc chiến Decarabian – Andrius và Sự ra đời của Mondstadt Mới (~2.600 năm trước)", en: "2. The Frozen Age, Decarabian vs. Andrius, and the Birth of New Mondstadt (~2,600 Years Ago)" },
        body: {
          vi: [
            "Sau khi vương quốc cổ [[sal-vindagnyr]] bị Đinh Băng Thiên Không của Celestia huỷ diệt, toàn bộ vùng đất Mondstadt chìm trong băng tuyết khắc nghiệt suốt hàng nghìn năm. Trong thời Chiến tranh Ma Thần, hai thế lực lớn phân tranh vùng đất này là **Thần Bão Tố Decarabian** và **Lang Vương Bắc Phong Andrius (Lupus Boreas)**.",
            "Để bảo vệ thần dân khỏi bão tuyết của Andrius, Decarabian dựng lên một bức tường cuồng phong khổng lồ cô lập kinh đô [[old-mondstadt]]. Tuy nhiên, sự độc đoán của ông biến thành phố thành một chiếc lồng ngạt thở. Khoảng **2.600 năm trước**, một chàng thi sĩ vô danh khao khát nhìn thấy bầu trời tự do và đàn chim bay lượn đã đứng lên khởi nghĩa cùng tinh linh gió nhỏ bé **[[venti|Barbatos]]** (một sợi gió thuộc \"Ngàn Ngọn Gió\" của Istaroth), nữ cung thủ **Amos** (từng là người tình của Decarabian), hiệp sĩ tóc đỏ (tổ tiên gia tộc **Ragnvindr** của Diluc) và tộc trưởng bộ lạc **Gunnhildr** (tổ tiên của Jean và Barbara).",
            "Decarabian bị đánh bại và ngã xuống từ đỉnh tháp, nhưng chàng thi sĩ vô danh và Amos cũng hi sinh. Vì Lang Vương Andrius nhận ra mình vốn chỉ biết mang lại băng giá chứ không thể yêu thương con người, ông đã tự nguyện giải tán cơ thể vật lý để nhường ngôi vị thần cho Barbatos.",
            "Trở thành **Phong Thần**, Barbatos biến thành hình dáng của người bạn thi sĩ đã khuất, gảy đàn triệu tập cuồng phong thổi tan hoàn toàn băng tuyết vĩnh cửu, chém đứt các đỉnh núi cao nhất (như đỉnh **Pilos Peak**, ném xuống biển tạo thành **Quần Đảo Táo Vàng / Musk Reef**) để biến Mondstadt thành vùng đồng bằng ấm áp. Sau khi giúp người dân xây dựng thành phố mới trên Hồ Cider và biến lời thách đấu của **Hội Ma Nữ [[hexenzirkel]]** thành những buổi tiệc trà trên Đỉnh Núi Gió, Barbatos chìm vào giấc ngủ dài để trao trả tự do cho nhân loại."
          ],
          en: [
            "After [[sal-vindagnyr]] was frozen by the Skyfrost Nail, Mondstadt endured millennia of ice contested between **Decarabian, God of Storms** and **Andrius (Lupus Boreas), King of the North Wind**.",
            "Around **2,600 years ago**, a nameless bard, the wind spirit **[[venti|Barbatos]]**, the huntress **Amos**, the red-haired ancestor of the **Ragnvindr** clan, and the **Gunnhildr** clan overthrew Decarabian in [[old-mondstadt]]. When Andrius willingly relinquished his physical body, Barbatos ascended as Anemo Archon, took his fallen bard friend's form, blew away the eternal snow, sheared off mountain peaks (forming Musk Reef and the Golden Apple Archipelago), and left the new city on Cider Lake to govern itself in freedom."
          ]
        }
      },
      {
        title: { vi: "3. Ách thống trị của Quý Tộc Lawrence, Khởi nghĩa của Vennessa và Tứ Phong Thủ Hộ (~1.000 năm trước)", en: "3. Aristocratic Tyranny of the Lawrence Clan, Vennessa's Rebellion, and the Four Winds (~1,000 Years Ago)" },
        body: {
          vi: [
            "Khi Barbatos vắng mặt, các gia tộc quý tộc từng thề bảo vệ người dân (đứng đầu là **Gia tộc Lawrence**, cùng gia tộc **Imunlaukr** từ [[sal-vindagnyr]]) dần tha hoá thành những bạo chúa tàn bạo. Họ đập phá tượng thần, cố tình che giấu lịch sử để người dân quên mất sự tồn tại của **Thần Thời Gian Istaroth**, biến lễ hội Ludi Harpastum thành nơi tuyển chọn thiếu nữ hầu hạ quý tộc và xây dựng đấu trường giác đấu đẫm máu tại Thiên Phong Thần Điện.",
            "Khoảng **1.000 năm trước**, nữ chiến binh tốc đỏ thuộc bộ tộc người Murata (từ [[natlan]]) là **Vennessa** bị gia tộc Lawrence bắt làm nô lệ giác đấu để đổi lấy mạng sống cho bộ tộc của cô. Tỉnh giấc bởi tiếng cầu nguyện tuyệt vọng của người dân, **Barbatos** đã giả mạo chữ ký của Nham Thần [[zhongli|Morax]] trên một bản \"hợp đồng bán toàn bộ binh lính Mondstadt cho Liyue\" khiến quân lính quý tộc kinh hoàng quay lưng chống lại gia tộc Lawrence.",
            "Dưới sự lãnh đạo của **Vennessa**, phối hợp cùng kiếm sĩ bình minh **Ragnvindr**, thành viên ly khai **Kreuzlied Lawrence** và Đoàn Hát Lang Thang, chế độ quý tộc bị lật đổ hoàn toàn. Vennessa thành lập **Đội Kỵ Sĩ Tây Phong** (giữ danh hiệu Kỵ Sĩ Bồ Công Anh / Sư Tử Nha đầu tiên) và sau đó thăng thiên lên [[celestia]] tại Phong Khởi Địa trong hình hài một con chim ưng.",
            "Để bảo vệ Mondstadt lâu dài, Barbatos thiết lập hệ thống **Tứ Phong Thủ Hộ (Four Winds)**:\n  1. **Đông Phong chi Long – Phong Long Dvalin (Stormterror).**\n  2. **Bắc Phong chi Lang – Lang Vương Andrius (Lupus Boreas)** cùng Kỵ Sĩ Bắc Phong.\n  3. **Nam Phong chi Sư – Sư Tử Phương Nam** (danh hiệu kế thừa bởi Đoàn Trưởng / Quyền Đoàn Trưởng Đội Kỵ Sĩ Tây Phong: Vennessa, Arundolyn, Jean).\n  4. **Tây Phong chi Ưng – Ưng Phương Tây** (bản thân Đội Kỵ Sĩ Tây Phong và hoá thân chim ưng của Vennessa)."
          ],
          en: [
            "During Barbatos's slumber, the aristocracy led by the **Lawrence Clan** grew corrupt, enslaving citizens and suppressing records of **Istaroth**. Around **1,000 years ago**, the Muratan gladiator **Vennessa** – aided by Barbatos (who forged a contract in [[zhongli|Morax]]'s name), **Ragnvindr**, and **Kreuzlied Lawrence** – overthrew the nobles and founded the **Knights of Favonius** before ascending to [[celestia]] at Windrise.",
            "Barbatos established the **Four Winds** to guard the nation: **Dvalin (Dragon of the East)**, **Andrius (Wolf of the North)**, the **Lion of the South** (Grand Master of the Knights), and the **Falcon of the West** (the Knights of Favonius)."
          ]
        }
      },
      {
        title: { vi: "4. Đại Thảm Hoạ 500 Năm Trước (Rồng độc Durin, Rostam & Hoả Ma Nữ) và Thời Hiện Đại", en: "4. The Cataclysm 500 Years Ago (Durin, Rostam & the Crimson Witch) and the Modern Era" },
        body: {
          vi: [
            "Cách đây **500 năm**, khi Đại Thảm Hoạ [[khaenriah]] nổ ra, con rồng độc khổng lồ **Durin** do [[rhinedottir]] tạo ra đã bay tới che kín bầu trời Mondstadt. Trong khi Đại Đoàn Trưởng **Arundolyn** (\"Sư Tử Ánh Sáng\") và Phó Đoàn Trưởng **Rostam** (\"Sói Con\" – người sáng tạo Tây Phong Kiếm Thuật, xem [[elegy-for-the-end]]) dẫn Đội Kỵ Sĩ Tây Phong đi viễn chinh tại Khaenri'ah, Barbatos đã thức dậy gảy đàn Thiên Không cùng **Phong Long Dvalin** tử chiến trên bầu trời.",
            "Dvalin cắn đứt cổ Durin làm xác nó rơi xuống đỉnh Long Tích Tuyết Sơn ([[festering-desire]]), nhưng bản thân Dvalin cũng nuốt phải máu độc và rơi vào giấc ngủ đau đớn suốt 500 năm (về sau bị Giáo Đoàn Vực Sâu lợi dụng gọi là \"Phong Ma Long\" cho tới khi được Nhà Lữ Hành và Venti thanh tẩy).",
            "Tại tiền tuyến Khaenri'ah, **Rostam** tử trận. Đau đớn trước cái chết của người bạn thân nhất, Arundolyn buông kiếm từ chức; còn vị hôn thê của Rostam là thiếu nữ **Rosalyne-Kruzchka Lohefalter** trở về từ Giáo Viện [[sumeru]] đã biến máu thịt mình thành lửa lỏng để đốt cháy ma vật dưới danh hiệu **[[crimson-witch-of-flames|Diệm Liệt Ma Nữ Rực Cháy]]** trước khi trở thành Quan Chấp Hành thứ 8 **La Signora** của [[snezhnaya]] ([[pale-flame]]). Cũng chính La Signora đã phục kích lấy đi **[[gnosis]]** hệ Phong của Venti ngay trước Đại Giáo Đường Mondstadt."
          ],
          en: [
            "During the Cataclysm **500 years ago**, [[rhinedottir]]'s poison dragon **Durin** darkened Mondstadt's skies. While Grand Master **Arundolyn** and Deputy **Rostam** ([[elegy-for-the-end]]) led the Knights on expedition to [[khaenriah]], Barbatos and **Dvalin** slew Durin over Dragonspine ([[festering-desire]]), though Dvalin was poisoned by Durin's blood.",
            "Rostam's death drove Arundolyn to lay down his sword and led Rostam's beloved **Rosalyne** to transform herself into the **[[crimson-witch-of-flames|Crimson Witch of Flames]]** before joining the Fatui as **La Signora** ([[pale-flame]]) – who 500 years later seized Venti's Anemo **[[gnosis]]** outside Mondstadt Cathedral."
          ]
        }
      }
    ],
    theories: [
      {
        title: { vi: "Cổng tới Celestia nằm ngay dưới bức tượng Phong Thần ở Mondstadt?", en: "Does the gateway to Celestia lie beneath Mondstadt's Anemo Archon statue?" },
        body: {
          vi: "Dòng chữ cổ khắc dưới chân tượng Phong Thần ở quảng trường Mondstadt viết: *\"Cánh cổng dẫn tới Thiên Đảo (The Gateway to Celestia)\"*, kết hợp với việc Vennessa thăng thiên tại Phong Khởi Địa và sự hiện diện của Istaroth khiến cộng đồng tin rằng Mondstadt nắm giữ chìa khoá kết nối trực tiếp với Celestia ở chương cuối của game.",
          en: "The inscription at the base of the Anemo Archon statue in Mondstadt's plaza reads *\"The Gateway to Celestia\"*, which – together with Vennessa's ascension at Windrise and Istaroth's presence – leads the community to believe Mondstadt holds the direct key to Celestia."
        },
        sources: [{ label: "r/Genshin_Lore – Gateway to Celestia Mondstadt", url: "https://www.reddit.com/r/Genshin_Lore/search/?q=Gateway%20to%20Celestia%20Mondstadt" }]
      }
    ],
    sources: [
      { label: "Fandom: Mondstadt", url: "https://genshin-impact.fandom.com/wiki/Mondstadt" },
      { label: "Fandom: History of Mondstadt", url: "https://genshin-impact.fandom.com/wiki/Mondstadt#History" }
    ],
    related: ["venti", "old-mondstadt", "sal-vindagnyr", "hexenzirkel", "elegy-for-the-end", "crimson-witch-of-flames", "festering-desire"]
  },

  {
    id: "liyue",
    name: { vi: "Liyue (Cảng Khế Ước & Nham Vương Đế Quân)", en: "Liyue (Harbor of Contracts & Rex Lapis)" },
    status: "existing",
    accent: "#f0c85a",
    region: { vi: "Phía đông Teyvat (Cảng Liyue, Tuyệt Vân Gián, Quy Ly Nguyên, Trầm Ngọc Cốc, Vực Đá Sâu)", en: "Eastern Teyvat (Liyue Harbor, Jueyun Karst, Guili Plains, Chenyu Vale, The Chasm)" },
    period: { vi: "Tiền sử (> 6.000 năm trước) → Lập cảng (~3.700 năm trước) – nay", en: "Prehistory (> 6,000 years ago) → Founding (~3,700 years ago) – present" },
    ruler: { vi: "Nham Vương Đế Quân Morax (Rex Lapis – trong 3.700 năm) → Thất Tinh Liyue (Liyue Qixing) & Bát Môn", en: "Rex Lapis / Morax (for 3,700 years) → The Liyue Qixing & Eight Trades" },
    fate: { vi: "Chuyển giao trọn vẹn từ thời đại của Thần linh và Tiên Nhân sang thời đại Con Người tự trị", en: "Successfully transitioned from the age of Gods and Adepti to human self-governance" },
    summary: {
      vi: "Trung tâm kinh tế và thương mại sầm uất nhất toàn cõi Teyvat – nơi Nham Vương Đế Quân Morax đúc ra đồng tiền Mora, cùng chúng Tiên Nhân và Ngũ Đại Dạ Xoa trấn áp hàng loạt Ma Thần cổ đại dưới Cô Vân Các trước khi trao lại trọn vẹn quyền tự quyết cho Thất Tinh Liyue.",
      en: "Teyvat's wealthiest commercial hub – where Rex Lapis minted the world's Mora and fought alongside the Adepti and Five Yakshas to pin ancient gods beneath Guyun Stone Forest before entrusting Liyue's future to the human Liyue Qixing."
    },
    sections: [
      {
        title: { vi: "1. Địa lý, Văn hoá Khế Ước và Cấu trúc Chính trị (Thất Tinh – Bát Môn – Thiên Nham Quân)", en: "1. Geography, Culture of Contracts, and Political Structure (Qixing, Eight Trades, Millelith)" },
        body: {
          vi: [
            "**Liyue** nằm ở bờ biển phía đông của đại lục Teyvat, có địa hình núi đá vôi sừng sững, những rừng ngân hạnh vàng rực và mạng lưới sông ngòi nối từ miền núi tây bắc ra biển lớn. Toàn bộ lãnh thổ Liyue chia thành 6 đại khu vực gắn liền với từng tầng lịch sử:\n  • **Cảng Liyue (Liyue Harbor) & Núi Thiên Hoành (Mt. Tianheng):** Đô thị cảng biển lớn nhất Teyvat, nơi đặt **Ngọc Kinh Đài (Yujing Terrace)**, **Hoàng Kim Ốc (Golden House – xưởng đúc Mora duy nhất của thế giới)**, **Vãng Sinh Đường (Wangsheng Funeral Parlor – [[staff-of-homa]])**, **Nhà Thuốc Bubu** và cung điện bay **Quần Ngọc Các (Jade Chamber)** của Ningguang.\n  • **Tuyệt Vân Gián (Jueyun Karst):** Vùng núi mây mù linh thiêng ở phía tây – nơi ẩn cư của các vị **Tam Nhãn Ngũ Hiển Tiên Nhân (Adepti)** tại đỉnh Khánh Vân, núi Áo Tàng và núi Hổ Lao.\n  • **Đồng Bằng Quy Ly (Guili Plains), Đầm Địch Hoa (Dihua Marsh) & Địa Trung Chi Diêm (Sal Terrae):** Phế tích của nền văn minh cổ [[guili-assembly]] và đền thờ Ma Thần Muối Havria, có **Nhà Trọ Vọng Thư (Wangshu Inn)** nơi Dạ Xoa **Xiao** đóng quân.\n  • **Cô Vân Các (Guyun Stone Forest):** Quần đảo gồm những ngọn giáo đá khổng lồ ngoài khơi biển đông nam, nơi Morax trấn áp xác và linh hồn của các Ma Thần bại trận.\n  • **Vực Đá Sâu (The Chasm):** Khu mỏ khoáng sản khổng lồ ở phía tây nam, bên dưới là phế tích đảo ngược hơn 6.000 năm tuổi ([[chasm-civilization]]) và Đinh Trời Lưu Minh Tinh Thạch.\n  • **Trầm Ngọc Cốc (Chenyu Vale) & Cảng Di Lung (Yilong Wharf):** Vùng thung lũng trà và ngọc bích ở cực tây bắc giáp [[fontaine]], nơi có lịch sử cổ xưa của tiên cá chép **Phù Cẩm (Fujin)**, sơn chủ **Linh Uyên (Lingyuan)** và Ma Thần **Dược Quân**.",
            "Về mặt thể chế, dưới sự bảo hộ của **[[zhongli|Nham Vương Đế Quân (Rex Lapis)]]** suốt 3.700 năm, bộ máy hành chính của con người tại Liyue được vận hành bởi:\n  1. **Thất Tinh Liyue (Liyue Qixing):** Hội đồng 7 nhà lãnh đạo thương mại và chính trị tối cao đại diện cho 7 ngôi sao chòm Bắc Đẩu – bao gồm **Thiên Quyền (Tianquan) Ningguang** (chủ quản luật pháp), **Ngọc Hành (Yuheng) Keqing** (chủ quản đất đai, xây dựng và dân sinh), **Thiên Xu (Tianshu) Uncle Tian**, và nhánh tình báo mật của gia tộc **Yelan**.\n  2. **Bát Môn (Eight Trades):** Tám đại nghiệp đoàn thương mại – thủ công nghiệp lâu đời nắm giữ huyết mạch kinh tế của Liyue (từ đóng tàu, khai mỏ lưu ly, chế tác ngọc, y dược cho tới ẩm thực và hương liệu).\n  3. **Thiên Nham Quân (Millelith):** Quân đội chính quy do chính Rex Lapis thành lập từ thời cổ đại với khẩu hiệu bất diệt: *\"Thiên Nham vững chắc, không bao giờ lay chuyển\"*."
          ],
          en: [
            "**Liyue** occupies eastern Teyvat, encompassing **Liyue Harbor** & **Mt. Tianheng** (home to Yujing Terrace, the **Golden House** mint, **Wangsheng Funeral Parlor** [[staff-of-homa]], and the floating **Jade Chamber**), **Jueyun Karst** (abode of the **Adepti**), **Guili Plains & Dihua Marsh** ([[guili-assembly]] and **Wangshu Inn**), **Guyun Stone Forest** (stone spears pinning defeated gods), **The Chasm** ([[chasm-civilization]]), and **Chenyu Vale**.",
            "Its human governance is led by the **Liyue Qixing** (seven merchant-leaders including **Tianquan Ningguang**, **Yuheng Keqing**, **Tianshu Uncle Tian**, and intelligence operative **Yelan**), supported by the **Eight Trades** guilds and the **Millelith** army."
          ]
        }
      },
      {
        title: { vi: "2. Lịch sử Tiền sử (> 6.000 năm trước): Thiên Tinh rơi xuống Vực Đá Sâu, Lang-Gan & Trầm Ngọc Cốc", en: "2. Prehistoric Roots (> 6,000 Years Ago): The Solar Chariot, The Chasm, Lang-Gan & Chenyu Vale" },
        body: {
          vi: [
            "Lịch sử vùng đất Liyue bắt đầu từ hơn **6.000 năm trước** – cũng là thời điểm Nham Thần **[[zhongli|Morax]]** giáng thế. Theo sử liệu cổ tại [[chasm-civilization]], trong cuộc chiến long trời lở đất giữa Đấng Nguyên Sơ và Kẻ Đến Thứ Hai, một thiên thạch rực sáng được gọi là **\"Cỗ Xe Mặt Trời\" (Solar Chariot)** đã rơi xuống vùng phía tây Liyue tạo thành miệng hố **Vực Đá Sâu** (và sau đó lại lao lên trời để lại khoáng sản Lưu Ly Tinh). Tiếp ngay sau đó, [[celestia]] phóng một **Đinh Trời** xuống xuyên thủng thành phố đá trắng cổ đại dưới đáy vực để trấn áp bùn đen Vực Sâu.",
            "Những cư dân cổ đại của vương quốc **Lang-Gan** gần Vực Đá Sâu đã được nữ sứ giả tiên nhân **Zibai** (Tiên Quân Bạch Mã – xem [[moonlit-bamboo-forest]]) dẫn đường chạy thoát về vùng núi phía tây bắc, định cư tại **Trầm Ngọc Cốc (Chenyu Vale)**. Tại đây, họ khai thác ngọc bích thần thánh, lập đàn tế trời tại *Xích Vọng Đài* và sống dưới sự che chở của một vị Ma Thần được gọi là **Dược Quân (Herblord – Chủ Nhân Lồng Thuốc)** cùng hai tuỳ tùng tiên nhân là **Phù Cẩm (Fujin – Tiên Cá Chép)** và **Linh Uyên (Lingyuan – Tiên Huyền Văn Thú)**.",
            "Khi Chiến tranh Ma Thần nổ ra, Dược Quân bị cám dỗ bởi tham vọng quyền lực và biến thành một con mãng xà trắng khổng lồ, ra lệnh cho Linh Uyên làm dâng nước lũ nhấn chìm cả Trầm Ngọc Cốc để ngăn cản quân của Morax. Để cứu người dân, tiên cá chép **Phù Cẩm** đã ném viên ngọc quý *Thự Vũ* xuống hố sâu *Cẩm Lạc Đình* tạo ra xoáy nước khổng lồ rút cạn trận đại hồng thuỷ, đánh sập hang ổ của Dược Quân và giúp Morax chém đứt thân xác mãng xà. Sau biến cố đó, cư dân Trầm Ngọc Cốc chính thức sáp nhập vào lãnh thổ của Nham Vương Đế Quân."
          ],
          en: [
            "Over **6,000 years ago**, during the war of the Second Throne, a celestial body known as the **Solar Chariot** crashed into western Liyue to form **The Chasm**, followed by a **Celestial Nail** that buried the ancient [[chasm-civilization]]. Survivors of **Lang-Gan**, guided by the White Horse Adeptus **Zibai** ([[moonlit-bamboo-forest]]), migrated northwest to **Chenyu Vale**.",
            "In Chenyu Vale, the people lived under the **Herblord** (God of the Medicine Basket) and his adepti **Fujin** (Carp Adeptus) and **Lingyuan**. During the Archon War, when the Herblord went mad as a giant white serpent and flooded the valley, Fujin cast her sacred jade into the river to drain the deluge while **Morax** slew the serpent, integrating Chenyu Vale into Liyue."
          ]
        }
      },
      {
        title: { vi: "3. Đồng Bằng Quy Ly (Guili Assembly), Liên minh với Azhdaha và Cuộc Thiên Di Lập Cảng (~3.700 năm trước)", en: "3. The Guili Assembly, Covenant with Azhdaha, and Founding of Liyue Harbor (~3,700 Years Ago)" },
        body: {
          vi: [
            "Tại vùng đồng bằng trung tâm phía bắc núi Thiên Hoành, Morax đã dẫn dắt con người khai thác mỏ và tình cờ chạm trán **Azhdaha** – vị **Long Vương Nham cổ đại (Geo Dragon Sovereign / Chúa Tể Nham Long)** khổng lồ nằm sâu trong lòng đất nhưng bị mù bẩm sinh. Cảm thương trước khát vọng được nhìn thấy ánh mặt trời và vạn vật trên mặt đất của Azhdaha, Morax đã tự tay chạm khắc cho ông một đôi mắt và lập **khế ước cộng sinh** giữa con người với loài rồng đất ([[unforged]]).",
            "Tiếp đó, Morax kết minh với **Ma Thần Bụi Guizhong (Quy Chung)** và **Ma Thần Bếp Lửa Marchosius (Táo Vương / Guoba)** lập nên nền văn minh **[[guili-assembly|Quy Ly Tập]]** rực rỡ. Guizhong chế tạo **Quy Chung Cơ** bảo vệ núi Thiên Hoành, dạy người dân Bốn Điều Răn và chăm sóc những cánh đồng hoa Bách Hợp Lưu Ly.",
            "Tuy nhiên, khoảng **3.700 năm trước**, Chiến tranh Ma Thần bùng nổ dữ dội trên đồng bằng Quy Ly. **Guizhong tử trận** trong biển lửa và hoá thành tro bụi sau khi trao lại chiếc khoá đá *Memory of Dust* cho Morax; cả vùng đồng bằng bị nước lũ nhấn chìm biến thành **Đầm Địch Hoa**. Morax cùng các Tiên Nhân và Táo Vương đã dẫn dắt toàn bộ người dân vượt qua núi Thiên Hoành về vùng bờ biển phía nam để thành lập **Cảng Liyue**, đồng thời đúc ra đồng tiền **Mora** đầu tiên từ chính thần lực vàng ròng của mình để dạy con người buôn bán và lập khế ước.",
            "Khoảng **2.000 năm trước**, khi đất đai Liyue bị thiên tai dịch bệnh hoành hành, **Táo Vương Marchosius** đã truyền toàn bộ thần lực còn lại của mình vào lòng đất để cứu người dân Khinh Sách Trang và Cảng Liyue, khiến cơ thể ông teo nhỏ lại và mất đi trí tuệ thần thánh – trở thành chú gấu **Guoba** đi theo đầu bếp Xiangling ngày nay (và được tôn vinh trong **Lễ Hội Trục Nguyệt / Moonchase Festival**)."
          ],
          en: [
            "Before the Archon War, Morax encountered the blind ancient Geo Dragon **Azhdaha** beneath the earth, carving eyes for him and forging a covenant of coexistence ([[unforged]]). He then co-founded the **[[guili-assembly|Guili Assembly]]** alongside **Guizhong (God of Dust)** and **Marchosius (God of the Stove)**.",
            "Around **3,700 years ago**, Guizhong fell in battle and the Guili Plains flooded into Dihua Marsh. Morax led the survivors south of Mt. Tianheng to establish **Liyue Harbor** and minted the first **Mora**. Around **2,000 years ago**, Marchosius expended all his divine power into the soil to end a calamity, shrinking into the small bear **Guoba**."
          ]
        }
      },
      {
        title: { vi: "4. Chiến Tranh Ma Thần: Cô Vân Các, Chi (Khu), Tam Nhãn Ngũ Hiển Tiên Nhân và Ngũ Đại Dạ Xoa", en: "4. The Archon War: Guyun Stone Forest, the Chi, the Adepti, and the Five Foremost Yakshas" },
        body: {
          vi: [
            "Trong suốt Chiến tranh Ma Thần kéo dài hơn 1.700 năm, Nham Vương Đế Quân Morax đã tiêu diệt và phong ấn vô số Ma Thần hung bạo:\n  • **Trận chiến tại Cô Vân Các (Guyun Stone Forest):** Morax ném những ngọn giáo đá khổng lồ từ trên trời xuống xuyên thủng đáy biển, ghim chặt **Ma Thần Xoáy Nước Osial** (cùng vợ hắn là hải quái **Beisht**) và rất nhiều Ma Thần biển khác. Những ngọn giáo đá gãy nhô lên khỏi mặt nước chính là quần đảo Cô Vân Các ngày nay.\n  • **Trận chiến tiêu diệt Chi (Khu) tại Khinh Sách Trang:** Con ác giao khổng lồ tên là **Chi** bị Morax đánh bại tại vùng núi phía bắc; xác của nó hoá thành đá, máu hoá thành nước sông Bích Thuỷ và vảy hoá thành những thửa ruộng bậc thang tại **Khinh Sách Trang (Qingce Village)**.\n  • **Phong ấn Long Vương Azhdaha tại Núi Hổ Lao:** Sau hàng nghìn năm khai thác mỏ làm tổn thương địa mạch cộng thêm **\"Sự Bào Mòn\" (Erosion)** tự nhiên xoá nhòa ký ức về khế ước cũ, Azhdaha phát điên và tấn công Vực Đá Sâu. Morax buộc phải cùng **Lý Thuỷ Điệp Sơn Chân Quân**, **Tước Nguyệt Trúc Dương Chân Quân** và một vị Tiên Nhân thứ ba chiến đấu suốt nhiều ngày đêm để phong ấn người bạn cũ dưới gốc **Phục Long Thụ** tại núi Hổ Lao.",
            "Sát cánh cùng Morax bảo vệ Liyue là các vị **Tam Nhãn Ngũ Hiển Tiên Nhân (Adepti)**:\n  • **Lưu Vân Tá Phong Chân Quân (Cloud Retainer / Xianyun):** Bậc thầy cơ khí từng thi tài cùng Guizhong, sư phụ của **Ganyu** và **Shenhe**.\n  • **Lý Thuỷ Điệp Sơn Chân Quân (Mountain Shaper)** & **Tước Nguyệt Trúc Dương Chân Quân (Moon Carver)**.\n  • **Ca Trần Lãng Thị Chân Quân (Streetward Rambler / Madame Ping):** Chủ nhân của Ấm Trần Ca và Chuông Thanhẩy, sư phụ của Xiangling và Yaoyao.\n  • **Kỳ Lân Cam Vũ (Ganyu):** Mang một nửa dòng máu tiên thú Kỳ Lân, đã phục vụ làm tổng thư ký tại Nguyệt Hải Đình suốt hơn 3.000 năm từ thời Thất Tinh đời đầu.",
            "Tuy nhiên, vì các Ma Thần là thực thể nguyên tố bất diệt nên dù thân xác bị tiêu diệt, **oán niệm và nghiệp chướng (Karmic Debt)** từ xác của họ vẫn không ngừng phát tán thành dịch bệnh và yêu ma. Để thanh tẩy nghiệp chướng, Morax đã triệu tập đội quân **Dạ Xoa (Yakshas)**, đứng đầu là **Ngũ Đại Hộ Pháp Dạ Xoa (Five Foremost Yakshas)**:\n  1. **Đằng Xà Thái Nguyên Soái – Phù Xá (Bosacius, hệ Lôi):** Thủ lĩnh của 5 Dạ Xoa, có 4 cánh tay.\n  2. **Hoả Thử Đại Tướng – Ứng Đạt (Indarias, hệ Hoả).**\n  3. **Loa Quyển Đại Tướng – Phạt Nạn (Bonanus, hệ Thuỷ).**\n  4. **Tâm Viên Đại Tướng – Di Nộ (Menogias, hệ Nham).**\n  5. **Kim Bằng Đại Tướng – Alatus / Xiao (hệ Phong):** Từng bị một Ma Thần cổ đại bắt làm tay sai ăn giấc mơ của con người cho đến khi được Morax giải cứu và đặt tên là **\"Xiao\" (Tiêu)**.\n  Trải qua hàng thiên niên kỷ chém giết trong biển máu, nghiệp chướng tích tụ khiến **Indarias** phát điên mà chết, **Bonanus** và **Menogias** tàn sát lẫn nhau đến đồng quy vu tận, còn **Bosacius** mất trí nhớ và tự chôn vùi mình dưới [[chasm-civilization|Vực Đá Sâu]] trong Đại Thảm Hoạ 500 năm trước (cùng pháp sư **Boyang** và **Thiên Nham Quân**). Chỉ còn duy nhất **Xiao** sống sót tiếp tục gánh chịu nghiệp chướng tại Nhà Trọ Vọng Thư."
          ],
          en: [
            "During the Archon War, Morax pinned **Osial, Overlord of the Vortex** and **Beisht** beneath **Guyun Stone Forest**, slew the serpent **Chi** at **Qingce Village**, and – when **Erosion** drove his old friend **Azhdaha** mad – sealed the dragon beneath **Nantianmen** alongside three adepti (**Cloud Retainer / Xianyun**, **Mountain Shaper**, **Moon Carver**, **Streetward Rambler / Madame Ping**, and **Ganyu**).",
            "To purge the karmic miasma festering from slain gods, Morax summoned the **Five Foremost Yakshas**: **Bosacius (Electro)**, **Indarias (Pyro)**, **Bonanus (Hydro)**, **Menogias (Geo)**, and **Alatus / Xiao (Anemo)**. Over millennia of karmic torment and the Cataclysm battle in [[chasm-civilization|The Chasm]] 500 years ago, four perished or vanished, leaving **Xiao** as the sole surviving Yaksha."
          ]
        }
      },
      {
        title: { vi: "5. Biến cố Lễ Thỉnh Tiên, \"Khế Ước Chấm Dứt Mọi Khế Ước\" và Thời đại của Con Người", en: "5. The Rite of Descension, \"The Contract to End All Contracts,\" and the Age of Humanity" },
        body: {
          vi: [
            "Sau **3.700 năm** mỗi năm giáng lâm một lần trong **Lễ Thỉnh Tiên (Rite of Descension)** để ban chỉ dẫn kinh tế cho Liyue, **[[zhongli|Morax]]** nhận thấy hai sự thật tất yếu: thứ nhất, ngay cả thần linh lâu đời nhất như ông cũng không thể thoát khỏi quy luật **\"Bào Mòn\" (Erosion)** của Thiên Lý; thứ hai, một ngày ông nghe thấy **Ngọc Hành Tinh Keqing** và những người dân Liyue tự tin bàn bạc về tương lai của thành phố mà không cần chờ đợi sấm truyền của Đế Quân.",
            "Để kiểm chứng xem liệu Thất Tinh Liyue và các Tiên Nhân có thể đoàn kết bảo vệ đất nước khi không còn thần linh hay không, Zhongli đã ký kết một **\"Khế Ước Chấm Dứt Mọi Khế Ước\"** bí mật với **[[tsaritsa|Nữ Hoàng Băng Giá]]** của [[snezhnaya]]: ông giả chết bằng một xác rồng rỗng ngay giữa Lễ Thỉnh Tiên, để mặc Quan Chấp Hành thứ 11 **Tartaglia (Childe)** dùng Bùa Trăm Vô Cực đánh thức **Ma Thần Xoáy Nước Osial** từ Cô Vân Các tấn công cảng Liyue.",
            "Khi thấy **Thất Tinh Liyue (Ningguang, Keqing)** đứng cạnh **Tam Nhãn Ngũ Hiển Tiên Nhân** và Nhà Lữ Hành trên **Quần Ngọc Các**, rồi Ningguang quyết đoán ném cả cung điện bay trị giá cả đời mình xuống biển để trấn áp Osial (và sau đó tự lực đánh bại cả **Beisht** khi xây dựng lại Quần Ngọc Các mới), Zhongli hoàn toàn yên tâm trao chiếc **[[gnosis]]** hệ Nham cho Quan Chấp Hành **La Signora** – chính thức khép lại thời đại của Nham Thần để mở ra thời đại của Con Người tại Liyue."
          ],
          en: [
            "After **3,700 years** of guiding Liyue through the annual **Rite of Descension**, **[[zhongli|Morax]]** recognized that **Erosion** was inevitable and that humanity was ready to govern itself. Forging a secret **\"Contract to End All Contracts\"** with the **[[tsaritsa]]**, he staged his own death during the Rite of Descension and allowed **Tartaglia (Childe)** to unseal **Osial** as a final test for Liyue.",
            "Witnessing the **Liyue Qixing** (**Ningguang**, **Keqing**), the **Adepti**, and the Traveler unite to hurl the **Jade Chamber** down upon Osial (and later defeat **Beisht** without divine aid), Zhongli handed his Geo **[[gnosis]]** to **La Signora**, stepping down to live as a mortal consultant at Wangsheng Funeral Parlor."
          ]
        }
      }
    ],
    theories: [
      {
        title: { vi: "Nguồn gốc thật sự của Morax: Phải chăng Nham Vương Đế Quân từng là một Kẻ Giáng Thế từ Thiên Đảo?", en: "Morax's True Origin: Did Rex Lapis Descend from Celestia Over 6,000 Years Ago?" },
        body: {
          vi: "Trong sách cổ *Thạch Thư Tập Lục*, động từ dùng để mô tả sự xuất hiện của Morax cách đây hơn 6.000 năm là *\"Giáng\" (hạ phàm từ trên cao xuống)* cùng thời điểm với sự kiện Cỗ Xe Mặt Trời rơi xuống Vực Đá Sâu, khiến nhiều học giả lore đặt giả thuyết rằng Morax có nguồn gốc gắn liền với Ba Chị Em Mặt Trăng hoặc chiếc Cỗ Xe Mặt Trời cổ đại.",
          en: "In *Stone Tablet Compilations*, the verb used for Morax's appearance over 6,000 years ago literally means \"descended from above\" around the time the Solar Chariot fell into The Chasm, sparking theories tying Rex Lapis's origin to the ancient Solar Chariot or the Moon Sisters."
        },
        sources: [{ label: "r/Genshin_Lore – Zhongli Solar Chariot Origin", url: "https://www.reddit.com/r/Genshin_Lore/search/?q=Zhongli%20Solar%20Chariot" }]
      }
    ],
    sources: [
      { label: "Fandom: Liyue", url: "https://genshin-impact.fandom.com/wiki/Liyue" },
      { label: "Fandom: History of Liyue", url: "https://genshin-impact.fandom.com/wiki/Liyue#History" },
      { label: "Fandom: Yaksha", url: "https://genshin-impact.fandom.com/wiki/Yaksha" }
    ],
    related: ["zhongli", "guili-assembly", "chasm-civilization", "staff-of-homa", "unforged", "moonlit-bamboo-forest", "gnosis", "pale-flame"]
  },

  {
    id: "inazuma",
    name: { vi: "Inazuma (Quần Đảo Vĩnh Hằng & Mạc Phủ Narukami)", en: "Inazuma (Archipelago of Eternity & Narukami Shogunate)" },
    status: "existing",
    accent: "#b58cff",
    region: { vi: "Quần đảo 6 đảo phía đông nam Teyvat (Narukami, Kannazuka, Yashiori, Watatsumi, Seirai, Tsurumi)", en: "Six-island archipelago in southeastern Teyvat (Narukami, Kannazuka, Yashiori, Watatsumi, Seirai, Tsurumi)" },
    period: { vi: "Thời Chiến tranh Ma Thần (> 2.000 năm trước) – nay", en: "Archon War era (> 2,000 years ago) – present" },
    ruler: { vi: "Lôi Thần Baal (Makoto) & Beelzebul (Raiden Ei) → Hiệp Hội Tam Phụng Hành", en: "Electro Archons Baal (Makoto) & Beelzebul (Raiden Ei) → The Tri-Commission" },
    fate: { vi: "Bãi bỏ Lệnh Truy Lùng Vision & Lệnh Bế Quan Toả Cảng; mở ra Vĩnh Hằng mới của ước mơ", en: "Repealed the Vision Hunt & Sakoku Decrees; embraced a new Eternity of dreams" },
    summary: {
      vi: "Quốc gia quần đảo sấm sét ở đông nam Teyvat, nơi hai chị em song sinh Makoto (Baal) và Ei (Beelzebul) từng cùng cai trị dưới một danh hiệu duy nhất, trải qua cuộc chiến với Thần Rắn Orobashi và Lôi Điểu Kapatcir, nỗi đau Đại Thảm Hoạ 500 năm trước và cuộc cải cách Vĩnh Hằng.",
      en: "The lightning-wreathed archipelago in southeastern Teyvat where twin sisters Makoto (Baal) and Ei (Beelzebul) ruled as one deity, shaped by wars against Orobashi and Kapatcir, the Cataclysm 500 years ago, and the reform of Eternity."
    },
    sections: [
      {
        title: { vi: "1. Địa lý 6 Hòn Đảo, Thể chế Mạc Phủ và Hiệp Hội Tam Phụng Hành", en: "1. Geography of the Six Islands, the Shogunate, and the Tri-Commission" },
        body: {
          vi: [
            "**Inazuma** là quốc gia quần đảo biệt lập nằm ở vùng biển đông nam Teyvat, bao gồm **6 hòn đảo chính** mà mỗi hòn đảo đều gắn liền với một thảm kịch thần thoại:\n  1. **Đảo Narukami:** Trung tâm chính trị và tôn giáo – nơi đặt **Thành Inazuma**, dinh thự **Thiên Thủ Các (Tenshukaku)** của Tướng Quân và **Đền Narukami** trên đỉnh núi Yougou dưới tán **Cây Anh Đào Thần (Sacred Sakura)** do đại vu nữ **Yae Miko** cai quản.\n  2. **Đảo Kannazuka & Lò Luyện Tatarasuna:** Trung tâm luyện kim lớn nhất Inazuma sử dụng **Ngọc Thép (Crystal Marrow)** từ hài cốt thần rắn Orobashi – nơi từng diễn ra bi kịch của **[[wanderer|Kunikuzushi]]** và **Niwa Hisahide** ([[husk-of-opulent-dreams]]).\n  3. **Đảo Yashiori & Hẻm Núi Musoujin:** Nơi lưu giữ bộ xương khổng lồ của **Thần Rắn Orobashi** bị chém làm đôi cùng nguồn độc khí **Tatarigami**.\n  4. **Đảo Watatsumi & Đáy biển [[enkanomiya]]:** Quê hương của những hậu duệ Bạch Dạ Quốc được Orobashi đưa lên mặt biển, cai quản bởi gia tộc Tư Tế Hiện Nhân Thần **Sangonomiya Kokomi**.\n  5. **Đảo Seirai:** Hòn đảo chìm trong bão sét vĩnh cửu từ khi phong ấn **Lôi Điểu Kapatcir** bị học giả Asase Hibiki tháo gỡ.\n  6. **Đảo Tsurumi ([[tsurumi-civilization]]):** Hòn đảo sương mù lưu giữ di tích Nền Văn Minh Thống Nhất và bi kịch cậu bé **Ruu**.",
            "Dưới quyền tối cao của **[[raiden-ei|Raiden Shogun]]**, bộ máy cai trị của Inazuma được chia cho **Hiệp Hội Tam Phụng Hành (Tri-Commission)**:\n  • **Hiệp Hội Yashiro (Gia tộc Kamisato – Ayato & Ayaka):** Phụ trách nghi lễ thần đạo, văn hoá và mật vụ *Shuumatsuban*.\n  • **Hiệp Hội Tenryou (Gia tộc Kujou – Kujou Sara):** Phụ trách quân đội Mạc Phủ và an ninh trị an.\n  • **Hiệp Hội Kanjou (Gia tộc Hiiragi):** Phụ trách tài chính, thuế quan, thương mại và kiểm soát biên giới tại đảo Ritou."
          ],
          en: [
            "**Inazuma** comprises **six main islands**: **Narukami Island** (Tenshukaku and Grand Narukami Shrine beneath the **Sacred Sakura** overseen by **Yae Miko**), **Kannazuka / Tatarasuna** ([[husk-of-opulent-dreams]]), **Yashiori Island** (cleft by Musoujin Gorge and Orobashi's skeleton), **Watatsumi Island** (descendants of [[enkanomiya]] led by **Sangonomiya Kokomi**), **Seirai Island**, and **Tsurumi Island** ([[tsurumi-civilization]]).",
            "Beneath the **[[raiden-ei|Raiden Shogun]]**, administration is divided among the **Tri-Commission**: the **Yashiro Commission** (Kamisato Clan), **Tenryou Commission** (Kujou Clan), and **Kanjou Commission** (Hiiragi Clan)."
          ]
        }
      },
      {
        title: { vi: "2. Hai Chị Em Song Sinh (Makoto & Ei), Bách Quỷ Dạ Hành và Chiến Tranh Ma Thần", en: "2. The Twin Gods (Makoto & Ei), Youkai Lineages, and the Archon War" },
        body: {
          vi: [
            "Trong Chiến tranh Ma Thần, Inazuma được thống nhất bởi hai nữ thần song sinh: người chị **Raiden Makoto (Baal)** – hiền hoà, không giỏi võ nghệ nhưng thấu hiểu vẻ đẹp của những giấc mơ và \"khoảnh khắc thoáng qua\" (*Transience*); và người em **[[raiden-ei|Raiden Ei (Beelzebul)]]** – chiến thần võ nghệ tuyệt đỉnh đóng vai trò **Kagemusha (võ sĩ cái bóng)** thay chị xuất trận.",
            "Để giúp Makoto bước lên một trong bảy Ngai Thần của [[celestia]], Ei từng tự huỷ thân xác vật lý của mình trước khi được Makoto tái tạo lại cơ thể sau khi đăng cơ. Dưới trướng hai chị em là cộng đồng **Youkai (Yêu quái)** trù phú của Inazuma cùng ba người bạn thân thiết nhất của Ei: **Hồ Tiên Kitsune Saiguu (Hakushin)**, nữ tướng dòng máu Quỷ (Oni) **Mikoshi Chiyo (Torachiyo)** và đại tướng Thiên구 (Tengu) **Sasayuri**.",
            "Khoảng **2.000 năm trước**, vì vô tình đọc được cấm thư **[[before-sun-and-moon]]** dưới đáy [[enkanomiya]], **Thần Rắn Orobashi no Mikoto** bị Celestia buộc phải chọn cái chết để bảo toàn mạng sống cho người dân đảo Watatsumi. Orobashi phát động cuộc chiến tiến đánh đảo Yashiori (giết chết đại tướng Tengu Sasayuri), buộc **Raiden Ei** phải xuất chiêu **Mộngưởng Nhất Đao (Musou no Hitotachi)** chém đứt đôi cả cơ thể thần rắn lẫn hòn đảo Yashiori tạo thành Hẻm Núi Musoujin. Cùng thời kỳ đó, Ei cũng tiêu diệt và phong ấn oán niệm của **Lôi Điểu Kapatcir** (từng huỷ diệt [[tsurumi-civilization]]) tại đỉnh Amakumo trên đảo Seirai."
          ],
          en: [
            "Inazuma was united by twin goddesses: the gentle **Raiden Makoto (Baal)** and her martial shadow-warrior (**Kagemusha**) **[[raiden-ei|Raiden Ei (Beelzebul)]]**, supported by Inazuma's Youkai lineages (**Kitsune Saiguu**, Oni warrior **Mikoshi Chiyo**, and Tengu general **Sasayuri**).",
            "Around **2,000 years ago**, condemned by Celestia for reading **[[before-sun-and-moon]]** in [[enkanomiya]], the serpent god **Orobashi** invaded Yashiori Island so he could die in battle; Ei cleaved both Orobashi and the island in two with the **Musou no Hitotachi**, and also slew the **Thunderbird Kapatcir** ([[tsurumi-civilization]]) on Seirai Island."
          ]
        }
      },
      {
        title: { vi: "3. Đại Thảm Hoạ 500 Năm Trước, Hạt giống Cây Anh Đào Thần và Bi kịch Tatarasuna", en: "3. The Cataclysm 500 Years Ago, the Sacred Sakura Seed, and the Tragedy of Tatarasuna" },
        body: {
          vi: [
            "Cách đây **500 năm**, khi Đại Thảm Hoạ nổ ra tại [[khaenriah]], **Makoto** đã một mình âm thầm lên đường tới Khaenri'ah mà không nói cho Ei biết để bảo vệ em gái. Cùng lúc đó, lũ quái vật Vực Sâu của [[rhinedottir]] tràn ngập toàn bộ Inazuma:\n  • Nữ tướng Oni **Mikoshi Chiyo** bị một con thú Vực Sâu nuốt chửng, nhiễm máu đen phát điên quay lại vung kiếm tấn công Ei và bị Ei chém đứt một cánh tay cùng một chiếc sừng trước khi biến mất vào rừng sâu.\n  • Hồ Tiên **Kitsune Saiguu** hi sinh thân mình bị bóng tối Vực Sâu nuốt trọn để trấn giữ mạng lưới Địa Mạch dưới núi Yougou (ký ức của bà sau này ngưng tụ thành **Kazari / Hanachirusato**).\n  • Học giả **Asase Hibiki** vì muốn cứu hạm đội của người thương **Takamine** (chủ nhân thanh [[mistsplitter|Ánh Sáng Đêm Sương Mù]]) đã tháo gỡ phong ấn trên đảo Seirai, giải phóng cơn bão sấm sét xé toạc cả hòn đảo.",
            "Khi Ei dẹp yên mặt trận trong nước và tức tốc chạy tới Khaenri'ah, cô chỉ kịp ôm lấy **Makoto** đang trút hơi thở cuối cùng. Makoto trao lại cho Ei chiếc **[[gnosis]]** hệ Lôi, thanh kiếm tâm thức **Musou Isshin** và một hạt giống thần bí được phong ấn. Đến 500 năm sau, trong nhiệm vụ truyền thuyết của Ei, hạt giống ấy mới được hé lộ là có sự trợ giúp của **Istaroth (Chấp Chính Thời Gian – [[before-sun-and-moon]])**: khi Ei giác ngộ tại hiện tại, hạt giống đã nảy mầm ngược dòng thời gian về **500 năm trước** thành **Cây Anh Đào Thần (Sacred Sakura)** để kịp thời hấp thụ và thanh lọc uế khí Vực Sâu cứu sống Inazuma!",
            "Mang nỗi ám ảnh tột cùng trước sự mất mát và quy luật \"Bào Mòn\", Ei sử dụng kỹ thuật cổ đại chế tạo con rối nguyên mẫu **[[wanderer|Kunikuzushi]]** (nhưng vì anh rơi lệ trong giấc ngủ nên cô không nỡ biến anh thành vật chứa mà đặt ngủ yên tại Shakkei Pavilion), rồi chế tạo con rối **Raiden Shogun** để thay mình cai trị bên ngoài, còn bản thân từ bỏ thể xác rút vào **Nhất Tâm Tịnh Thổ**. Sự rút lui của Ei đã tạo cơ hội cho Quan Chấp Hành thứ 2 **[[dottore|Il Dottore]]** xâm nhập lò luyện **Tatarasuna**, sát hại **Niwa Hisahide**, gây ra sự sụp đổ của 3 trường phái rèn kiếm **Raiden Gokaden** và biến Kunikuzushi thành Quan Chấp Hành thứ 6 **Scaramouche** ([[husk-of-opulent-dreams]])."
          ],
          en: [
            "During the Cataclysm **500 years ago**, **Makoto** departed alone for [[khaenriah]] while Abyssal beasts ravaged Inazuma – corrupting **Mikoshi Chiyo**, consuming **Kitsune Saiguu**, and prompting **Asase Hibiki** to unseal the storm over Seirai Island to try to save **Takamine** ([[mistsplitter]]). Arriving in Khaenri'ah as Makoto died, Ei received the Electro **[[gnosis]]**, **Musou Isshin**, and the seed of the **Sacred Sakura** (which later bloomed retroactively across time through **Istaroth**).",
            "Haunted by loss, Ei built the prototype puppet **[[wanderer|Kunikuzushi]]** ([[husk-of-opulent-dreams]]) and the **Raiden Shogun** puppet, retreating into the **Plane of Euthymia** while **[[dottore|Il Dottore]]** sabotaged **Tatarasuna** and the **Raiden Gokaden**."
          ]
        }
      },
      {
        title: { vi: "4. Lệnh Truy Lùng Vision, Nội chiến Watatsumi và Sự Thức Tỉnh của Raiden Ei", en: "4. The Vision Hunt Decree, Watatsumi Civil War, and Raiden Ei's Awakening" },
        body: {
          vi: [
            "Khoảng một năm trước khi Nhà Lữ Hành đặt chân tới Inazuma, các Quan Chấp Hành Fatui (**La Signora** và **Scaramouche**) đã câu kết với gia tộc Kujou (Hiệp hội Tenryou) và gia tộc Hiiragi (Hiệp hội Kanjou) để thuyết phục con rối Raiden Shogun ban hành **Lệnh Truy Lùng [[vision|Vision]] (Vision Hunt Decree)** – thu giữ toàn bộ Vision gắn lên Tượng Thần Trăm Mắt – cùng **Lệnh Bế Quan Toả Cảng (Sakoku Decree)**. Mục đích thật sự của Fatui là kích động nội chiến với quân kháng chiến đảo Watatsumi (do **Sangonomiya Kokomi**, **Gorou** và **Teppei** chiến đấu) để bí mật sản xuất hàng loạt **[[delusion|Delusion]]** từ hài cốt Orobashi.",
            "Nhờ kế hoạch của **Yae Miko**, **Kamisato Ayaka**, **Kaedehara Kazuha** (người đánh thức lại viên Vision vô chủ của người bạn quá cố để đỡ nhát đao **Musou no Hitotachi**) và Nhà Lữ Hành mang theo khát vọng của 99 viên Vision trên Tượng Thần Trăm Mắt, ý chí của Raiden Ei trong Nhất Tâm Tịnh Thổ đã bị lay chuyển. La Signora bị xử tử ngay tại Thiên Thủ Các; còn sau trận quyết đấu kéo dài 500 năm trong không gian ý thức với chính con rối Shogun, Ei chính thức bước ra ánh sáng, bãi bỏ Lệnh Bế Quan Toả Cảng và dẫn dắt Inazuma bước vào kỷ nguyên mới."
          ],
          en: [
            "Manipulated by the Fatui (**La Signora** and **Scaramouche**) in collusion with the Kujou and Hiiragi clans, the Shogunate enacted the **[[vision]] Hunt** and **Sakoku Decrees**, sparking civil war with Watatsumi Island while the Fatui distributed lethal **[[delusion|Delusions]]**.",
            "Through **Yae Miko**, the Kamisato siblings, **Kaedehara Kazuha** (who parried the **Musou no Hitotachi**), and the Traveler channeling the ambitions of 99 Visions, Ei was moved to abolish the decrees, execute La Signora, and duel the Shogun puppet for 500 years in Makoto's realm of consciousness to usher in a new era for Inazuma."
          ]
        }
      }
    ],
    theories: [],
    sources: [
      { label: "Fandom: Inazuma", url: "https://genshin-impact.fandom.com/wiki/Inazuma" },
      { label: "Fandom: History of Inazuma", url: "https://genshin-impact.fandom.com/wiki/Inazuma#History" }
    ],
    related: ["raiden-ei", "wanderer", "enkanomiya", "tsurumi-civilization", "mistsplitter", "vision", "delusion", "husk-of-opulent-dreams", "pale-flame"]
  },

  {
    id: "sumeru",
    name: { vi: "Sumeru (Quốc Gia Trí Tuệ, Rừng Mưa & Sa Mạc)", en: "Sumeru (Nation of Wisdom, Rainforest & Desert)" },
    status: "existing",
    accent: "#7ed987",
    region: { vi: "Trung – tây nam Teyvat (Rừng mưa Dharma, Biển Cát Đỏ, Sa mạc Hadramaveth, Gavireh Lajavard)", en: "Central-southwestern Teyvat (Dharma Forest, Great Red Sand, Hadramaveth, Gavireh Lajavard)" },
    period: { vi: "Cổ đại (Thời Thảo Long Vương Apep & Liên minh Tam Thần) – nay", en: "Antiquity (Era of Dendro Sovereign Apep & the Three God-Kings) – present" },
    ruler: { vi: "Đại Từ Thụ Rukkhadevata → Tiểu Cát Tường Thảo Vương Nahida (Buer) & Giáo Viện Sumeru", en: "Greater Lord Rukkhadevata → Lesser Lord Kusanali Nahida (Buer) & the Sumeru Akademiya" },
    fate: { vi: "Giải phóng Thảo Thần Nahida, tắt hệ thống Akasha và xoá sạch hoàn toàn Tri Thức Cấm Kỵ khỏi Cây Thế Giới Irminsul", en: "Freed Dendro Archon Nahida, shut down the Akasha, and purged Forbidden Knowledge from Irminsul" },
    summary: {
      vi: "Quốc gia của Trí Tuệ được chia thành hai nửa đối lập là Rừng Mưa nhiệt đới và Sa Mạc mênh mông – nơi toạ lạc gốc rễ của Cây Thế Giới Irminsul, di sản của Liên minh Tam Thần (Rukkhadevata, Vua Deshret, Nữ Thần Hoa), Giáo Viện 6 Học Phái và các chiến binh sa mạc Eremite.",
      en: "The nation of Wisdom divided between lush Rainforest and vast Desert – home to the roots of the World Tree Irminsul, the legacy of the Three God-Kings (Rukkhadevata, King Deshret, Goddess of Flowers), the Six Darshans of the Akademiya, and the Eremite tribes."
    },
    sections: [
      {
        title: { vi: "1. Địa lý Rừng Mưa – Sa Mạc, Giáo Viện 6 Học Phái (Six Darshans) và chủng tộc Aranara", en: "1. Rainforest & Desert Geography, the Six Darshans of the Akademiya, and the Aranara" },
        body: {
          vi: [
            "**Sumeru** nằm ở vùng trung – tây nam Teyvat, bị ngăn cách bởi **Bức Tường Samiel (Wall of Samiel)** thành hai vùng sinh thái và văn hoá đối lập:\n  • **Vùng Rừng Mưa Dharma:** Trung tâm là **Thành Sumeru** được xây dựng ngay trên thân một cây cổ thụ khổng lồ (nơi đặt **Giáo Viện Sumeru / Akademiya** và **Tịnh Thiện Cung / Sanctuary of Surasthana**), thương cảng **Ormos**, vườn ươm **Pardis Dhyai**, **Làng Vimara** và thế giới ẩn **Vanarana** của chủng tộc tinh linh rừng **Aranara**.\n  • **Vùng Sa Mạc Đại Xích Sa (Great Red Sand), Hadramaveth & Gavireh Lajavard:** Nơi có **Làng Aaru**, **Lăng Mộ Vua Deshret** ([[deshret-kingdom]]), phế tích **[[gurabad]]**, **Ốc Đảo Vĩnh Hằng** của Nữ Thần Hoa, **ốc đảo Vourukasha** (nơi sinh sống của các tinh linh **Pari** sinh ra từ máu thịt của Thuỷ Thần Egeria và thần điểu Simurgh) và cánh cổng ngầm dẫn vào **[[khaenriah]]**.",
            "Cơ quan học thuật và hành chính tối cao của Sumeru là **Giáo Viện (Akademiya)**, được Đại Từ Thụ Rukkhadevata thành lập và chia thành **Sáu Học Phái (Six Darshans)**:\n  1. **Amurta (Sinh Luận Phái):** Nghiên cứu sinh học, y học và sinh thái (Tighnari).\n  2. **Rtawahist (Minh Luận Phái):** Nghiên cứu chiêm tinh học, bầu trời sao và vận mệnh (Layla).\n  3. **Spantamad (Tố Luận Phái):** Nghiên cứu nguyên tố học, giả kim thuật và Địa Mạch (Lisa, Cyno).\n  4. **Haravatat (Tri Luận Phái):** Nghiên cứu ngôn ngữ học, chữ viết cổ đại và ký tự rune (Alhaitham, Faruzan).\n  5. **Vahumana (Nhân Luận Phái):** Nghiên cứu lịch sử, xã hội học và triết học (từng tiếp nhận [[wanderer]]).\n  6. **Kshahrewar (Diệu Luận Phái):** Nghiên cứu kiến trúc, cơ khí và kỹ thuật công trình (Kaveh).\n  Thực thi kỷ luật của Giáo Viện là các **Matra**, đứng đầu bởi **Đại Phong Kỷ Quan (General Mahamatra) Cyno** – người mang trong mình linh hồn của tư tế sa mạc **Hermanubis**."
          ],
          en: [
            "**Sumeru** is divided by the **Wall of Samiel** into the **Dharma Rainforest** (**Sumeru City**, the **Sanctuary of Surasthana**, **Port Ormos**, and **Vanarana** of the **Aranara**) and the **Great Desert** (**Aaru Village**, **Mausoleum of King Deshret** [[deshret-kingdom]], **[[gurabad]]**, the **Eternal Oasis**, the **Vourukasha Oasis** of the **Pari**, and the underground gate to **[[khaenriah]]**).",
            "The **Sumeru Akademiya** governs through its **Six Darshans**: **Amurta** (biology), **Rtawahist** (astrology), **Spantamad** (elementalism/ley lines), **Haravatat** (linguistics, Alhaitham), **Vahumana** (history/sociology), and **Kshahrewar** (architecture/mechanics, Kaveh), policed by the **Matra** under **General Mahamatra Cyno**."
          ]
        }
      },
      {
        title: { vi: "2. Thảo Long Vương Apep, Đinh Trời Sa Mạc và Liên Minh Tam Thần", en: "2. Dendro Sovereign Apep, the Desert Nail, and the Covenant of the Three God-Kings" },
        body: {
          vi: [
            "Thuở sơ khai, toàn bộ Sumeru đều là rừng rậm nguyên sinh do **Thảo Long Vương Apep** cai trị. Sau cuộc chiến giữa Đấng Nguyên Sơ và Kẻ Đến Thứ Hai, một **Đinh Trời** của [[celestia]] đã rơi xuống nhằm trấn áp Vực Sâu nhưng lại biến hơn một nửa lãnh thổ của Apep thành sa mạc cát đỏ mênh mông.",
            "Thời Chiến tranh Ma Thần, ba vị thần là **Đại Từ Thụ Rukkhadevata** (hệ Thảo, hoá thân trực tiếp của [[irminsul]]), **[[deshret-kingdom|Vua Deshret (Al-Ahmar)]]** và **Nữ Thần Hoa Nabu Malikata** (một Tiên Linh cổ đại sống sót) đã kết nghĩa và lập nên thành phố ốc đảo **Ay-Khanoum** ([[desert-pavilion-chronicle]], [[flower-of-paradise-lost]]). Dù Celestia ban Ngai Thần Thảo cho Vua Deshret, ông đã từ chối nhận ngai vàng và nhường lại danh hiệu Thảo Thần cho Rukkhadevata.",
            "Sau khi Nữ Thần Hoa tự hi sinh để mở cánh cổng tri thức cho Deshret, liên minh tan vỡ: Rukkhadevata đưa những người yêu hoà bình về phía đông tạo nên vùng rừng mưa Dharma và tạo ra chủng tộc **Aranara**; còn Deshret ở lại sa mạc xây dựng các kim tự tháp khổng lồ, lập thành bang **[[gurabad]]** và chạm vào **Tri Thức Cấm Kỵ (Forbidden Knowledge)** từ Vực Sâu.",
            "Khi Tri Thức Cấm Kỵ bùng phát thành dịch bệnh vảy đen **Eleazar** và những vùng **Khô Héo (The Withering)** huỷ hoại Địa Mạch, Vua Deshret đã tự hi sinh thân xác (cho phép Thảo Long Vương **Apep** nuốt lấy cơ thể mình theo thoả thuận cũ, khiến chính Apep cũng bị nhiễm độc Tri Thức Cấm Kỵ suốt hàng nghìn năm), còn Rukkhadevata dùng cạn sức lực để phong ấn tai hoạ khiến cơ thể bà teo nhỏ lại thành hình dáng một đứa trẻ."
          ],
          en: [
            "Originally a primeval forest ruled by **Dendro Dragon Sovereign Apep**, half of Sumeru was turned into desert by a **Celestial Nail**. Later, **Greater Lord Rukkhadevata**, **[[deshret-kingdom|King Deshret (Al-Ahmar)]]**, and the **Goddess of Flowers Nabu Malikata** co-ruled **Ay-Khanoum** ([[desert-pavilion-chronicle]], [[flower-of-paradise-lost]]).",
            "After the Goddess of Flowers' death and Deshret's fatal delve into **Forbidden Knowledge** (which caused **Eleazar** and **The Withering**), Deshret sacrificed himself (being devoured by **Apep**, who became infected in turn), while Rukkhadevata exhausted her power to seal the outbreak, shrinking into the form of a child."
          ]
        }
      },
      {
        title: { vi: "3. Đại Thảm Hoạ 500 Năm Trước, Ốc đảo Vourukasha và Sự ra đời của Nahida", en: "3. The Cataclysm 500 Years Ago, the Vourukasha Oasis, and the Birth of Nahida" },
        body: {
          vi: [
            "Cách đây **500 năm**, khi Đại Thảm Hoạ [[khaenriah]] nổ ra, Sumeru trở thành một trong những chiến trường khốc liệt nhất do nằm ngay phía trên cổng vào của Khaenri'ah:\n  • Tại vùng sa mạc *Gavireh Lajavard*, **Thuỷ Thần Egeria** của [[fontaine]] đã tử trận khi chống trả thuỷ triều ma vật Vực Sâu, thân xác bà biến thành biển nước ngọt **Amrita**. Rukkhadevata đã dùng cây đại thụ **Harvisptokhm** neo giữ linh hồn của Egeria, còn thần điểu **Simurgh** của Nữ Thần Hoa tự lao vào hồ Amrita phân tách thành hàng trăm tinh linh **Pari** để cùng **Hội Skeptics** bảo vệ phong ấn suốt 500 năm.\n  • Cùng lúc đó, quân đoàn **Kỵ Sĩ Schwanenritter** của Nhiếp chính Khaenri'ah **Anfortas Alberich** cũng điều khiển siêu cỗ máy **Ruin Golem** chiến đấu với ma thú Vực Sâu tại rừng mưa và sa mạc Sumeru cho đến người cuối cùng.",
            "Tuy nhiên, thảm hoạ lớn nhất nằm ở tầng sâu nhất của **[[irminsul]]**: ý thức của chính Đại Từ Thụ Rukkhadevata đã bị nhiễm **Tri Thức Cấm Kỵ**. Vì một người không bao giờ có thể tự xoá chính mình hoàn toàn khỏi Irminsul, trước khi qua đời, Rukkhadevata đã bẻ **cành cây tinh khiết nhất** của Irminsul để tạo ra **[[nahida|Tiểu Cát Tường Thảo Vương Nahida (Buer)]]** – như một \"bản sao kế thừa\" sẽ lớn lên và giúp bà tự xoá bỏ hoàn toàn sự tồn tại của mình khỏi lịch sử thế giới."
          ],
          en: [
            "During the Cataclysm **500 years ago**, **Hydro Archon Egeria** perished in Sumeru's desert, her body becoming the **Amrita** pool anchored by Rukkhadevata's **Harvisptokhm** tree and guarded by the **Pari** born from the divine bird **Simurgh**, while Khaenri'ah's **Schwanenritter** fought Abyssal beasts in their Ruin Golems.",
            "Because Rukkhadevata's own consciousness had been tainted by **Forbidden Knowledge** inside **[[irminsul]]** and she could not erase herself, she snapped off the purest branch of Irminsul to create **[[nahida|Lesser Lord Kusanali (Nahida)]]** before passing away."
          ]
        }
      },
      {
        title: { vi: "4. Vòng lặp Sabzeruz, Thần Nhân Tạo Shouki no Kami và Cuộc Thanh Tẩy Irminsul", en: "4. The Sabzeruz Samsara, the Artificial God Shouki no Kami, and the Purging of Irminsul" },
        body: {
          vi: [
            "Khi đón Nahida vừa mới sinh từ Khaenri'ah trở về mà không tìm thấy Rukkhadevata, các hiền giả của Giáo Viện đã khước từ vị thần nhỏ bé này, giam lỏng cô suốt **500 năm** trong Tịnh Thiện Cung và lạm dụng thiết bị **Akasha** (vốn chạy bằng **[[gnosis]]** hệ Thảo). Đến thời Đại Hiền Giả **Azar**, Giáo Viện bắt tay với Quan Chấp Hành thứ 2 **[[dottore|Il Dottore]]** và Quan Chấp Hành thứ 6 **[[wanderer|Scaramouche]]** để thực hiện dự án báng bổ: nhốt toàn bộ cư dân thành Sumeru vào vòng lặp giấc mơ **Lễ Hội Sabzeruz** nhằm thu hoạch năng lượng giấc mơ, đúc nên vị thần trí tuệ nhân tạo **Shouki no Kami**.",
            "Nhờ sự phối hợp xuất sắc của nhóm **Alhaitham**, **Cyno**, **Dehya**, **Nilou**, **Tighnari**, **Thượng tướng Rahman** của quân đoàn Eremite và Nhà Lữ Hành, Azar bị lật đổ và Shouki no Kami bị đánh bại sau 168 vòng lặp chiến đấu.",
            "Tiến vào tâm thức cuối cùng của Rukkhadevata bằng hai chiếc Gnosis (Lôi và Thảo), **Nahida** đã rơi nước mắt thực hiện di nguyện của vị thần tiền nhiệm: **xoá bỏ hoàn toàn ký ức về Đại Từ Thụ Rukkhadevata khỏi [[irminsul]]**, qua đó xoá sổ vĩnh viễn căn bệnh Eleazar và các vùng Khô Héo trên toàn cõi Sumeru (chỉ còn duy nhất Nhà Lữ Hành – với tư cách là **Kẻ Đổ Bộ Thứ Tư** – còn nhớ tên thật của Rukkhadevata). Sau đó, Nahida tắt vĩnh viễn hệ thống Akasha, trả lại những giấc mơ cho người dân Sumeru và dùng Lửa Sinh Mệnh chữa lành hoàn toàn cho **Thảo Long Vương Apep**."
          ],
          en: [
            "Rejecting the newborn Nahida, the Akademiya's sages imprisoned her for **500 years** and later conspired under Grand Sage **Azar** with **[[dottore|Il Dottore]]** and **[[wanderer|Scaramouche]]** to harvest dreams via the **Sabzeruz Samsara** to build the artificial god **Shouki no Kami**.",
            "Freed by **Alhaitham**, **Cyno**, **Dehya**, **Nilou**, **Tighnari**, and the Traveler, **Nahida** defeated Shouki no Kami and fulfilled Rukkhadevata's final wish: **erasing Greater Lord Rukkhadevata from [[irminsul]]** to permanently cure Eleazar and the Withering across Sumeru, before shutting down the Akasha and healing **Dendro Sovereign Apep**."
          ]
        }
      }
    ],
    theories: [],
    sources: [
      { label: "Fandom: Sumeru", url: "https://genshin-impact.fandom.com/wiki/Sumeru" },
      { label: "Fandom: History of Sumeru", url: "https://genshin-impact.fandom.com/wiki/Sumeru#History" }
    ],
    related: ["nahida", "irminsul", "deshret-kingdom", "gurabad", "dottore", "wanderer", "desert-pavilion-chronicle", "flower-of-paradise-lost", "gnosis"]
  },

  {
    id: "fontaine",
    name: { vi: "Fontaine (Quốc Gia Công Lý, Sân Khấu & Biển Nguyên Thuỷ)", en: "Fontaine (Nation of Justice, Theater & the Primordial Sea)" },
    status: "existing",
    accent: "#6fb6ff",
    region: { vi: "Trung – bắc Teyvat (Cao nguyên biển nội địa, Đại sảnh Fontaine, Pháo đài Meropide, Biển Cổ Đại)", en: "North-central Teyvat (Elevated inland sea plateau, Court of Fontaine, Fortress of Meropide, Sea of Bygone Eras)" },
    period: { vi: "Cổ đại (Thời Egeria & Remuria) – nay", en: "Antiquity (Era of Egeria & Remuria) – present" },
    ruler: { vi: "Thuỷ Thần Egeria → Thuỷ Thần Focalors & Furina → Thẩm Phán Tối Cao (Thuỷ Long Vương) Neuvillette", en: "Hydro Archon Egeria → Hydro Archon Focalors & Furina → Chief Justice (Hydro Sovereign) Neuvillette" },
    fate: { vi: "Ngai Thần Thuỷ của Celestia bị phá huỷ vĩnh viễn; Thuỷ Long Vương Neuvillette khôi phục trọn vẹn quyền năng và biến người Fontaine thành con người hoàn chỉnh", en: "Celestia's Hydro Archon Throne permanently destroyed; Hydro Sovereign Neuvillette reclaimed full authority and turned Fontainians into true humans" },
    summary: {
      vi: "Quốc gia của Công Lý, Nghệ Thuật Sân Khấu và Công Nghệ Dây Cót trên cao nguyên nước trung tâm Teyvat – nơi mang trên mình \"Tội Lỗi Nguyên Thuỷ\" từ thời Thuỷ Thần Egeria, phế tích đế chế âm nhạc Remuria, Học viện Triết học Tự nhiên và vở kịch 500 năm vĩ đại của Focalors, Furina cùng Thuỷ Long Vương Neuvillette.",
      en: "The nation of Justice, Theater, and Clockwork Meka atop Teyvat's central water plateau – shaped by Egeria's \"Original Sin\", the sunken musical empire of Remuria, the Narzissenkreuz Ordo, and the 500-year stage play of Focalors, Furina, and Hydro Sovereign Neuvillette."
    },
    sections: [
      {
        title: { vi: "1. Địa lý Cao nguyên Nước, Công nghệ Arkhe (Pneuma – Ousia) & Tổ chức Xã hội", en: "1. Elevated Sea Plateau, Arkhe (Pneuma – Ousia) Technology & Social Institutions" },
        body: {
          vi: [
            "**Fontaine** nằm trên một cao nguyên biển nội địa khổng lồ cao hơn hẳn mặt nước biển các quốc gia lân cận, được bao quanh bởi những thác nước khổng lồ đổ xuống tứ phía. Các địa danh trọng yếu bao gồm:\n  • **Đại Sảnh Fontaine (Court of Fontaine) & Điện Mermonia (Palais Mermonia):** Trung tâm hành chính nơi Thẩm Phán Tối Cao **[[neuvillette]]** làm việc.\n  • **Viện Ca Kịch Epiclese (Opera Epiclese):** Vừa là nhà hát lớn vừa là pháp đình xét xử tối cao của đất nước, nơi đặt **Cỗ Máy Phán Quyết Oratrice Mechanique d'Analyse Cardinale**.\n  • **Pháo Đài Meropide (Fortress of Meropide):** Nhà tù ngầm tự trị dưới đáy biển (từng được Egeria dựng nên để canh giữ cửa xả **Biển Nguyên Thuỷ**), hiện do Công Tước **Wriothesley** cai quản.\n  • **Viện Nghiên Cứu Khoa Học Fontaine:** Trung tâm cơ khí dây cót vận hành bằng phản ứng huỷ giữa hai cực năng lượng **Pneuma (Mang)** và **Ousia (Hoang)**, cùng khoáng thạch **Arkhium**.\n  • **Thị Trấn Poisson & Hội Spina di Rosula:** Căn cứ của tổ chức tương trợ dân sự do **Navia** (con gái của cố hội trưởng Callas) đứng đầu.\n  • **Căn cứ Căn Nhà Hơi Ấm (House of the Hearth):** Tổ chức tình báo và viện mồ côi của Fatui do Quan Chấp Hành thứ 4 **[[arlecchino]]** điều hành.\n  • **Làng Merusea:** Quê hương của chủng tộc **Melusine** – những sinh linh dễ thương được sinh ra từ máu thịt và linh kiện cơ khí bên trong xác của ác long **Elynas** cách đây hơn 400 năm.",
            "Thực thi pháp luật tại Fontaine là **Đội Cảnh Vệ (Garde)**, **Đội Tuần Tra Đặc Biệt** (Chevreuse), các **Đấu Sĩ Đại Diện (Champion Duelists – Clorinde)** và lực lượng thẩm tra **Marechaussee Phantom** (với sự tham gia của các Melusine)."
          ],
          en: [
            "**Fontaine** sits atop an elevated inland sea plateau bordered by towering waterfalls. Key landmarks include the **Court of Fontaine & Palais Mermonia** (**[[neuvillette]]**), the **Opera Epiclese** (housing the **Oratrice Mechanique d'Analyse Cardinale**), the underwater **Fortress of Meropide** (**Wriothesley**, built over the **Primordial Sea** sluice gate), the **Fontaine Research Institute** (harnessing **Pneuma – Ousia** annihilation and **Arkhium**), **Poisson** (**Navia**'s *Spina di Rosula*), the Fatui **House of the Hearth** (**[[arlecchino]]**), and **Merusea Village** (home to the **Melusines** born within the abyssal dragon **Elynas**)."
          ]
        }
      },
      {
        title: { vi: "2. Trái Tim Biển Nguyên Thuỷ Egeria, \"Tội Lỗi Nguyên Thuỷ\" và Đế chế Remuria", en: "2. Egeria (Heart of the Primordial Sea), the \"Original Sin\", and the Empire of Remuria" },
        body: {
          vi: [
            "Thời cổ đại, sau khi **Thuỷ Long Vương** đời đầu bị Đấng Nguyên Sơ đánh bại và tước đi quyền năng cai quản **Biển Nguyên Thuỷ (Primordial Sea – cái nôi của mọi sự sống trên Teyvat)**, **Chấp Chính Sự Sống Naberius (Shade of Life)** đã tạo ra **Egeria** để đóng vai trò làm \"trái tim mới\" trấn giữ Biển Nguyên Thuỷ.",
            "Các **Tinh Linh Nước Trong (Oceanids)** là những quyến thuộc đầu tiên ra đời từ nước mắt của Egeria. Khi họ nhìn thấy loài người sống trên mặt đất có những cảm xúc mãnh liệt và trái tim ấm áp, các Oceanid đã cầu xin Egeria biến họ thành con người. Vì lòng thương xót quyến thuộc, **Egeria đã tự ý lấy nước của Biển Nguyên Thuỷ làm mạch máu để biến các Oceanid thành những \"con người giả\"** mà không hề xin phép Thiên Lý.",
            "Hành động tự ý tạo ra nhân loại này bị **Thiên Lý** coi là **\"Tội Lỗi Nguyên Thuỷ\" (Original Sin)**. Egeria bị giam cầm dưới Biển Nguyên Thuỷ suốt hàng nghìn năm (trong thời gian đó, Thần Vương **Remus** từ Sumeru đến xây dựng đế chế âm nhạc **[[remuria]]** trước khi sụp đổ xuống đáy biển), đồng thời một **Lời Tiên Tri Định Mệnh** được khắc thẳng vào [[irminsul]]: *\"Một ngày nào đó, nước biển Fontaine sẽ dâng lên hoà tan tất cả những người mang tội lỗi trở lại thành Tinh Linh Nước Trong, chỉ còn một mình Thuỷ Thần ngồi khóc trên ngai vàng.\"*",
            "Sau khi [[remuria]] sụp đổ, Celestia mới thả Egeria ra để bà bước lên làm **Thuỷ Thần đời đầu**, giao cho bà cai quản chính những thần dân mang lời nguyền tan chảy ấy."
          ],
          en: [
            "After the first **Hydro Dragon Sovereign** was defeated, **Naberius (Shade of Life)** created **Egeria** as the new heart of the **Primordial Sea**. Moved by her **Oceanid** familiars' desire to live as humans, Egeria used Primordial Sea water as blood to fashion human bodies for them without Celestia's permission.",
            "Branded an **\"Original Sin\"**, this act led Celestia to imprison Egeria (during which God-King **Remus** founded and lost the musical empire of **[[remuria]]**) and etch a **Prophecy of Dissolution** into [[irminsul]]: one day the waters would rise and dissolve all Fontainians back into Oceanids, leaving the Hydro Archon weeping alone on her throne."
          ]
        }
      },
      {
        title: { vi: "3. Đại Thảm Hoạ 500 Năm Trước: Viện Narzissenkreuz, Ác long Elynas và Sự kế vị của Focalors", en: "3. The Cataclysm 500 Years Ago: The Narzissenkreuz Institute, Elynas, and Focalors' Succession" },
        body: {
          vi: [
            "Cách đây **500 năm**, khi Đại Thảm Hoạ nổ ra và **Thuỷ Thần Egeria** tử trận tại sa mạc [[sumeru]], quyến thuộc thông tuệ nhất trong số các Oceanid đã hoá thành người của bà là **Focalors** được chọn làm Thuỷ Thần đời thứ hai.",
            "Tại quê nhà Fontaine, quái thú khổng lồ của [[rhinedottir]] là **Elynas** đã xâm nhập gây ra trận đại chiến trên biển và trong lòng núi. Tại **Viện Mồ Côi Narzissenkreuz (Thủy Tiên Thập Tự Viện)** do viện trưởng Oceanid **Lyris** và phó viện trưởng **Basil Elton** điều hành, bốn đứa trẻ mồ côi đã đi theo bốn con đường định mệnh khác nhau:\n  • **Rene de Petrichor** và **Jakob Ingold** khám phá ra \"Công Thức Thế Giới\" (dự báo ngày tận thế của Teyvat) tại di tích [[remuria]] và sa mạc Sumeru; họ thành lập giáo phái **Thủy Tiên Thập Tự Kết Xã (Narzissenkreuz Ordo)**, dùng máu thịt của Elynas biến Jakob thành thực thể bất tử hệ Vực Sâu, còn Rene tự hoà tan ý thức của các tín đồ để trở thành thực thể **Narzissenkreuz** nhằm cứu nhân loại khỏi lời tiên tri.\n  • **Alain Guillotin** và em gái **Mary-Ann Guillotin** gia nhập lực lượng Marechaussee Hunter: Alain sáng lập **Viện Nghiên Cứu Khoa Học Fontaine**, chế tạo chó máy **Seymour** và hệ thống robot dây cót Meka; còn trong trận quyết chiến cuối cùng bên trong bụng Elynas giữa lực lượng của Alain/Mary-Ann và Jakob, ý thức của Mary-Ann và viện trưởng Lyris đã dung hợp lại tạo thành Oceanid mới cũng mang tên **Mary-Ann** (người sau này tạo ra cô bé Oceanid **Ann**).\n  • Về phần ác long **Elynas**, khi nhận ra sự hiện diện của mình chỉ mang lại cái chết và ô nhiễm cho thế giới tươi đẹp mà nó yêu quý, Elynas đã tự nguyện ngừng tim để chết đi; từ những mảnh linh kiện cơ khí găm trong máu thịt nó, chủng tộc **Melusine** đã chào đời."
          ],
          en: [
            "When **Egeria** died in [[sumeru]] during the Cataclysm **500 years ago**, her Oceanid familiar **Focalors** succeeded her as Hydro Archon while [[rhinedottir]]'s abyssal beast **Elynas** rampaged across Fontaine.",
            "From the **Narzissenkreuz Institute** orphanage emerged four fateful figures: **Rene de Petrichor** and **Jakob Ingold** (who calculated the \"World-Formula\" and founded the **Narzissenkreuz Ordo**), and **Alain Guillotin** and **Mary-Ann Guillotin** (who fought the Ordo inside Elynas's body, leading to the birth of the **Melusines** and the founding of the **Fontaine Research Institute**)."
          ]
        }
      },
      {
        title: { vi: "4. Vở Kịch 500 Năm của Focalors & Furina, Thôn Tinh Kình Ngư và Phán Quyết của Thuỷ Long Vương", en: "4. The 500-Year Masquerade of Focalors & Furina, the All-Devouring Narwhal, and the Hydro Sovereign's Verdict" },
        body: {
          vi: [
            "Ngay sau khi kế vị, **Focalors** nhận ra rằng Lời Tiên Tri của Thiên Lý không thể bị ngăn cản trực diện, nhưng có thể bị **\"đánh lừa\"**. Bà đã vạch ra kế hoạch táo bạo nhất trong lịch sử Thất Thần:\n  1. Focalors **tách phần Thần Tính (Divinity)** của mình giấu vào bên trong **Cỗ Máy Phán Quyết Oratrice**, để lại **phần Con Người và Thể Xác** mang tên **[[furina|Furina]]** (không có bất kỳ thần lực nào, chỉ mang lời nguyền bất lão chừng nào phần thần tính còn tồn tại).\n  2. Bà buộc Furina phải đóng giả làm một vị Thuỷ Thần kiêu kỳ trên sân khấu suốt **500 năm (182.376 màn kịch)** mà tuyệt đối không được để lộ thân phận với bất kỳ ai, nhằm khiến cả người dân Fontaine lẫn Thiên Lý tin rằng Thuỷ Thần vẫn đang ngồi trên ngai vàng, trong khi cỗ máy Oratrice âm thầm tích trữ nguồn năng lượng niềm tin khổng lồ (**Indemnitium**) qua mỗi phiên toà.\n  3. Đồng thời, Focalors gửi thư mời **[[neuvillette]]** – **Thuỷ Long Vương tái sinh trong hình hài con người** (theo đúng lời tiên tri cổ ở [[enkanomiya]]) – đến Fontaine giữ chức **Thẩm Phán Tối Cao (Iudex)** suốt hơn 400 năm, để vị Long Vương dần thấu hiểu, đồng cảm và yêu thương loài người.",
            "Khi **Thôn Tinh Kình Ngư (All-Devouring Narwhal)** – con quái thú vũ trụ của Tội Đồ **Surtalogi** (sư phụ của **[[skirk]]**) – uống no nước Biển Nguyên Thuỷ làm nước biển dâng cao tại thị trấn Poisson (khiến thuộc hạ của Navia là Melus và Silver tan thành nước), một phiên toà lịch sử đã mở ra để vạch trần thân phận con người của Furina.",
            "Đúng vào khoảnh khắc con cá voi khổng lồ lao vào Viện Ca Kịch và Furina ngồi khóc một mình trên ghế bị cáo đúng như Lời Tiên Tri, **Focalors** đã xuất hiện trước mặt **Neuvillette** trong không gian ý thức: bà dùng toàn bộ năng lượng Indemnitium tích luỹ suốt 500 năm để tạo thành lưỡi đao tự hành quyết phần thần tính của chính mình – qua đó **phá huỷ hoàn toàn Ngai Thần Thuỷ của Celestia** và trả lại trọn vẹn **Quyền Năng Thuỷ Cổ Đại (Ancient Hydro Authority)** cho Thuỷ Long Vương!",
            "Lấy lại toàn bộ sức mạnh nguyên thuỷ của một Long Vương, **Neuvillette** bay lên bầu trời tuyên bố: *\"Ta, Thẩm Phán Tối Cao Neuvillette, nay xá tội cho toàn thể người dân Fontaine!\"* – biến dòng nước Biển Nguyên Thuỷ trong huyết quản của mọi người dân Fontaine thành **máu người thật sự**, khiến cơn đại hồng thuỷ tràn qua mà không một ai bị hoà tan, rồi cùng Nhà Lữ Hành đánh bại Thôn Tinh Kình Ngư. Cuối cùng, Neuvillette trao chiếc **[[gnosis]]** hệ Thuỷ (mà Skirk gọi là di vật mang lời nguyền của Kẻ Đổ Bộ Thứ Ba) cho **[[arlecchino]]**, còn Furina được trả lại cuộc sống tự do của một con người phàm trần."
          ],
          en: [
            "Realizing Celestia's prophecy could only be deceived, **Focalors** separated her **Divinity** (hidden inside the **Oratrice** to accumulate **Indemnitium** for 500 years) from her **Humanity**, **[[furina|Furina]]**, who endured **182,376 acts** pretending to be the Hydro Archon while **[[neuvillette]]** (the reincarnated **Hydro Dragon Sovereign**) served as Chief Justice.",
            "When Surtalogi's pet, the **All-Devouring Narwhal** ([[skirk]]), breached the Primordial Sea and Furina was put on trial, Focalors used 500 years of Indemnitium to execute her own divinity – **permanently shattering Celestia's Hydro Archon Throne** and returning full **Ancient Hydro Authority** to Neuvillette. Neuvillette pardoned all Fontainians, turning the Primordial Sea water in their veins into true human blood so none dissolved when the floodwaters rose."
          ]
        }
      }
    ],
    theories: [],
    sources: [
      { label: "Fandom: Fontaine", url: "https://genshin-impact.fandom.com/wiki/Fontaine" },
      { label: "Fandom: History of Fontaine", url: "https://genshin-impact.fandom.com/wiki/Fontaine#History" },
      { label: "Fandom: Narzissenkreuz Ordo", url: "https://genshin-impact.fandom.com/wiki/Narzissenkreuz_Ordo" }
    ],
    related: ["furina", "neuvillette", "remuria", "arlecchino", "skirk", "perinheri", "gnosis"]
  },

  {
    id: "natlan",
    name: { vi: "Natlan (Quốc Gia Chiến Tranh & Thánh Hoả)", en: "Natlan (Nation of War & Sacred Flame)" },
    status: "existing",
    accent: "#ff6e42",
    region: { vi: "Phía tây sa mạc Sumeru", en: "West of the Sumeru Desert" },
    period: { vi: "Thời Xbalanque – nay", en: "Era of Xbalanque – present" },
    ruler: { vi: "Hoả Thần Haborym (Mavuika) & Liên minh Sáu Bộ Tộc", en: "Pyro Archon Haborym (Mavuika) & the Six Tribes" },
    fate: { vi: "Đánh bại hoàn toàn Chúa Tể Vực Sâu Gosoythoth; tái thiết Vương Quốc Dạ Hồn nhờ sự hi sinh của Capitano", en: "Defeated the Abyssal entity Gosoythoth; reconstructed the Night Kingdom through Capitano's sacrifice" },
    summary: {
      vi: "Quốc gia duy nhất nơi các Hoả Thần đều là người phàm bước lên ngôi thần qua đấu trường Thánh Hoả, chiến đấu không ngừng nghỉ suốt hàng nghìn năm chống lại Vực Sâu.",
      en: "The only nation where every Pyro Archon is a mortal who ascended through combat, locked in an unbroken millennia-long war against the Abyss."
    },
    sections: [
      {
        title: { vi: "Ngai thần của người phàm, Vương Quốc Dạ Hồn và Tên Cổ", en: "A throne of mortals, the Night Kingdom, and Ancient Names" },
        body: {
          vi: [
            "Khác với mọi quốc gia khác trên Teyvat, [[irminsul|Địa Mạch]] của Natlan đã bị tàn phá nghiêm trọng từ cuộc chiến cổ đại giữa loài rồng ([[ochkanatlan]]) và Vực Sâu. Nhờ sự can thiệp của **Chúa Tể Màn Đêm (Yohualtecuhtin)** – một Tiên Linh (Seelie) sống sót nhưng mất đi hình hài – cùng **Ronova (Chấp Chính Cái Chết)**, Hoả Thần đầu tiên **Xbalanque** đã thiết lập **Vương Quốc Dạ Hồn (Night Kingdom)** và các thực thể bảo hộ **Wayob** để thay thế cho Địa Mạch thông thường.",
            "Tại Natlan, tất cả các đời Hoả Thần đều là **con người phàm trần** bước lên ngôi vị thông qua Đấu Trường Lửa Thánh. Ký ức và chiến công của các thế hệ đi trước được rèn kết tinh vào đá Obsidian dưới dạng **Tên Cổ (Ancient Names)**. Khi các chiến binh mang Tên Cổ ra trận dưới phước lành Dạ Hồn, chỉ cần một người trong đội thắng trận trở về để thắp sáng **Khúc Ca Hồi Sinh (Ode of Resurrection)** tại Lửa Thánh, những người đã ngã xuống sẽ được gọi sống lại từ cõi chết."
          ],
          en: [
            "Unlike other nations of Teyvat, Natlan's [[irminsul|Ley Lines]] were devastated during the ancient war between dragons ([[ochkanatlan]]) and the Abyss. Through the **Lord of the Night (Yohualtecuhtin)** – an ancient Seelie – and **Ronova (the Shade of Death)**, the first Pyro Archon **Xbalanque** established the **Night Kingdom** and the **Wayob** totems as an alternative ley line realm.",
            "In Natlan, every Pyro Archon is a **mortal human** who ascends through combat in the Sacred Flame arena. Heroic memories are forged into Obsidian as **Ancient Names**, and so long as a single member of a party returns victorious, the **Ode of Resurrection** can call fallen warriors back to life."
          ]
        }
      },
      {
        title: { vi: "Sáu Bộ Tộc, Sáu Đại Anh Hùng và mối cộng sinh với loài rồng Saurian", en: "The Six Tribes, the Six Heroes, and symbiosis with Saurians" },
        body: {
          vi: [
            "Sau khi lật đổ bạo chúa Och-Kan tại [[ochkanatlan]], xã hội Natlan hiện đại được tổ chức thành **Liên minh Sáu Bộ Tộc**, mỗi bộ tộc sống cộng sinh với một loài rồng **Saurian** đã thoái hoá từ rồng cổ đại và kế thừa một trong sáu Tên Cổ trụ cột từ cuộc chiến 500 năm trước:\n  1. **Con Của Tiếng Vang (Nanatzcayan – Hệ Nham / Tepetlisaurus):** Anh hùng 500 năm trước là *Sundjatta* → Kế thừa hiện tại: **Xilonen** (Tên Cổ *Baraka*) & Kachina.\n  2. **Dòng Dõi Vòm Cây (Huitztlan – Hệ Thảo / Yumkasaurus):** Anh hùng 500 năm trước là *Burkina* → Kế thừa hiện tại: **Kinich** (Tên Cổ *Malipo*).\n  3. **Cư Dân Suối Nước (Meztli – Hệ Thuỷ / Koholasaurus):** Anh hùng 500 năm trước là *Wanjiru* → Kế thừa hiện tại: **Mualani** (Tên Cổ *Umoja*).\n  4. **Chủ Nhân Gió Đêm (Mictlan – Hệ Băng/Lôi / Iktomisaurus):** Anh hùng 500 năm trước là *Sanhaj* → Kế thừa hiện tại: **Ororon** (Tên Cổ *Bidii*).\n  5. **Hội Hoa Vũ (Tlalocan – Hệ Phong/Hoả / Qucusaurus):** Anh hùng 500 năm trước là *Menilek* → Kế thừa hiện tại: **Chasca** (Tên Cổ *Vuka*).\n  6. **Cộng Đồng Trù Phú (Teteocan – Hệ Lôi / Tatankasaurus):** Anh hùng khổng lồ 500 năm trước là *Tupac* → Kế thừa hiện tại: **Iansan** (Tên Cổ *Uwezo*)."
          ],
          en: [
            "Following the overthrow of the tyrant Och-Kan at [[ochkanatlan]], modern Natlan is organized into **Six Tribes**, each living in symbiosis with a **Saurian** species and bearing one of the six heroic Ancient Names from 500 years ago:\n  1. **Children of Echoes (Nanatzcayan – Geo / Tepetlisaurus):** Ancient hero *Sundjatta* → Modern bearer: **Xilonen** (*Baraka*).\n  2. **Scions of the Canopy (Huitztlan – Dendro / Yumkasaurus):** Ancient hero *Burkina* → Modern bearer: **Kinich** (*Malipo*).\n  3. **People of the Springs (Meztli – Hydro / Koholasaurus):** Ancient hero *Wanjiru* → Modern bearer: **Mualani** (*Umoja*).\n  4. **Masters of the Night-Wind (Mictlan – Cryo/Electro / Iktomisaurus):** Ancient hero *Sanhaj* → Modern bearer: **Ororon** (*Bidii*).\n  5. **Flower-Feather Clan (Tlalocan – Anemo/Pyro / Qucusaurus):** Ancient hero *Menilek* → Modern bearer: **Chasca** (*Vuka*).\n  6. **Collective of Plenty (Teteocan – Electro / Tatankasaurus):** Ancient hero *Tupac* → Modern bearer: **Iansan** (*Uwezo*)."
          ]
        }
      },
      {
        title: { vi: "Kế hoạch 500 năm của Mavuika và nghịch lý bất tử của Capitano", en: "Mavuika's 500-Year Plan and Capitano's Immortal Paradox" },
        body: {
          vi: [
            "500 năm trước, Hoả Thần [[mavuika]] hiến mạng vào Lửa Thánh để du hành tới hiện tại, tập hợp đủ 6 vị anh hùng của 6 bộ tộc cùng Nhà Lữ Hành (người được rèn một Tên Cổ hoàn toàn mới là **\"Tumaini\" – Hy Vọng**) để tiến vào Vương Quốc Dạ Hồn tiêu diệt tận gốc thực thể Vực Sâu **Gosoythoth**.",
            "Khi **Ronova (Chấp Chính Cái Chết)** đòi mạng sống của Mavuika theo khế ước cổ xưa với Xbalanque, Quan Chấp Hành Đệ Nhất **[[capitano]] (Thrain của [[khaenriah]])** đã bước lên thế chỗ: vì Ronova không thể tự huỷ bỏ lời nguyền bất tử mà chính bà từng đặt lên người Khaenri'ah, Capitano đã dùng chính cơ thể bất tử của mình hợp nhất với Chúa Tể Màn Đêm – vừa giải thoát hàng trăm linh hồn trong tim ông, vừa biến Vương Quốc Dạ Hồn thành một Địa Mạch vĩnh cửu không còn phụ thuộc vào việc đốt cháy Lửa Thánh nữa."
          ],
          en: [
            "500 years ago, Pyro Archon [[mavuika]] sacrificed her life into the Sacred Flame to awaken in the present, uniting the six tribal heroes and the Traveler (forged the Ancient Name **\"Tumaini\" – Hope**) to annihilate the Abyssal entity **Gosoythoth**.",
            "When **Ronova (Shade of Death)** demanded Mavuika's life as the price for wielding the power of Death, First Harbinger **[[capitano]] (Thrain of [[khaenriah]])** stepped forward in her stead: because Ronova could not revoke the curse of immortality she herself had placed on Khaenri'ahns, Capitano merged his undying body with the Lord of the Night – freeing the hundreds of souls in his heart and permanently stabilizing Natlan's Ley Lines."
          ]
        }
      }
    ],
    theories: [],
    sources: [{ label: "Fandom: Natlan", url: "https://genshin-impact.fandom.com/wiki/Natlan" }],
    related: ["mavuika", "capitano", "ochkanatlan", "gnosis", "khaenriah", "irminsul"]
  },

  {
    id: "snezhnaya",
    name: { vi: "Snezhnaya & Vùng biên viễn Nod-Krai", en: "Snezhnaya & the Frontier of Nod-Krai" },
    status: "existing",
    accent: "#a8e6ff",
    region: { vi: "Cực Bắc Teyvat (bao gồm khu tự trị Nod-Krai ở cực nam)", en: "Far Northern Teyvat (including autonomous Nod-Krai in the south)" },
    period: { vi: "Thời Chiến tranh Ma Thần – nay", en: "Archon War era – present" },
    ruler: { vi: "Nữ Hoàng Băng Giá (The Tsaritsa) & Quan Đạo Diễn Pierro", en: "The Tsaritsa (Cryo Archon) & Director Pierro" },
    fate: { vi: "Đã thu thập 6/7 Gnosis; đang triển khai \"Dự án Stuzha\" và chuẩn bị cuộc nổi dậy chống lại Thiên Lý", en: "Collected 6/7 Gnoses; executing \"Project Stuzha\" and preparing the rebellion against the Heavenly Principles" },
    summary: {
      vi: "Cường quốc quân sự và công nghiệp băng giá ở phương Bắc do Nữ Hoàng Băng Giá trị vì – nơi đặt đại bản doanh Cung Điện Zapolyarny của Fatui, 11 Quan Chấp Hành và vùng biên giới tự trị Nod-Krai lưu giữ bí mật về Ba Mặt Trăng.",
      en: "The frozen military and industrial superpower of the north ruled by the Tsaritsa – home to the Fatui's Zapolyarny Palace, the Eleven Harbingers, and the autonomous frontier of Nod-Krai, keeper of the Three Moons' secrets."
    },
    sections: [
      {
        title: { vi: "Các triều đại của Băng Quốc: Từ Bạch Sa Hoàng Monomakh đến Nữ Hoàng Anastasya", en: "Dynasties of Snezhnaya: From Belyi Tsar Monomakh to Tsaritsa Anastasya" },
        body: {
          vi: [
            "Lịch sử chính trị và thần quyền của Snezhnaya trải qua **ba thời kỳ / triều đại lớn**:\n  1. **Thời đại Tiền sử – Kinh đô Hoàng Kim [[hyperborea]] (> 6.000 năm trước):** Nền văn minh cổ đại của Thiên Sứ Đầu Tiên **Koitar** và Kẻ Du Hành **Seutervoinen**, nơi tạo ra chủng tộc **Tiên Tuyết (Snowland Fae)** và tiến hành **Dự án Màn Trăng** trước khi bị Đinh Trời huỷ diệt.\n  2. **Triều đại Thứ Nhất – Bạch Sa Hoàng (Belyi Tsar / Monomakh Snezhnyi) & Quý tộc Tiên Tuyết:** Thức tỉnh từ lõi thí nghiệm \"Con Người Nguyên Sơ\" kết hợp máu thịt Băng Long Vương của Hyperborea, **Monomakh Snezhnyi** (được gọi là **Pakkaisukko** trong [[hymns-of-the-far-north|Thánh Ca Phương Bắc]]) đã thống nhất các bộ tộc **Tiên Tuyết** (*Vila, Domovoy, Volkodlak, Snegovic*) cùng những người dân phương Bắc để thành lập quốc gia **Snezhnaya** dưới ngọn cờ Sao Bạc. Ông là **Băng Thần Đời Đầu (First Cryo Archon)** và là vị thần nguyên bản của \"Tình Yêu\", với tầng lớp quý tộc hoàng gia và quân đội *Druzhna* hoàn toàn do tộc Tiên Tuyết nắm giữ. Sau những biến cố liên quan đến Cõi Bóng Tối và Đại Thảm Hoạ 500 năm trước, triều đại của Belyi Tsar sụp đổ.\n  3. **Triều đại Thứ Hai (500 năm trước – nay) – Nữ Hoàng Băng Giá [[tsaritsa|Anastasya Feodorovna Snezhnaya (The Tsaritsa)]]:** Con gái của Pakkaisukko / người kế vị ngai vị Băng Thần là **Anastasya Feodorovna Snezhnaya** lên ngôi. Bà cải tổ toàn diện đế chế: tước bỏ dần đặc quyền của tầng lớp quý tộc Tiên Tuyết cổ hủ, chuyển dịch sang bộ máy quân sự – công nghiệp hiện đại của con người và thành lập **Fatui** tại **Cung Điện Zapolyarny** cùng pháp sư [[khaenriah]] là **Pierro**."
          ],
          en: [
            "Snezhnaya's history spans **three major epochs and dynasties**:\n  1. **Prehistoric Era – Golden [[hyperborea]] (> 6,000 years ago):** The realm of First Angel **Koitar** and Voyager **Seutervoinen**, which birthed the **Snowland Fae** and the **Lunar Veil Project** before falling to a Celestial Nail.\n  2. **First Dynasty – The Belyi Tsar (Monomakh Snezhnyi) & the Snowland Fae Court:** Emerging from Hyperborea's \"Primordial Human\" core and Cryo Dragon Sovereign remains, **Monomakh Snezhnyi** (**Pakkaisukko** in [[hymns-of-the-far-north|Hymns of the Far North]]) united the **Snowland Fae** (*Vila, Domovoy, Volkodlak, Snegovics*) and early humans to found **Snezhnaya** under the Pale Star banner as the **First Cryo Archon** and original God of Love, with the Fae forming the royal nobility (*Druzhna*). His reign ended amid the Cataclysm 500 years ago.\n  3. **Second Dynasty (500 years ago – present) – [[tsaritsa|Tsaritsa Anastasya Feodorovna Snezhnaya]]:** Ascending the Cryo throne after the Belyi Tsar's fall, **Anastasya Feodorovna Snezhnaya** dismantled the old Fae aristocracy and forged a modern geopolitical superpower centered on the **Fatui** at **Zapolyarny Palace** alongside **Pierro**."
          ]
        }
      },
      {
        title: { vi: "Bi kịch của Kẻ Đổ Bộ Thứ Ba (Saarelainen) và lý do thật sự thu thập 7 Gnosis", en: "The Tragedy of the Third Descender (Saarelainen) and the True Reason for Gathering the Gnoses" },
        body: {
          vi: [
            "Theo bộ sách **[[hymns-of-the-far-north|Thánh Ca Phương Bắc]]**, động cơ sâu xa nhất khiến Nữ Hoàng Băng Giá Anastasya trở thành \"một vị thần không còn tình yêu\" và quyết tâm thu thập đủ 7 chiếc **[[gnosis]]** bắt nguồn từ bi kịch của vị hôn phu của bà – **Kẻ Đổ Bộ Thứ Ba tên là Saarelainen**.",
            "Khi Saarelainen cầu hôn công chúa, Pakkaisukko (Belyi Tsar) đã đặt điều kiện thách cưới khắc nghiệt buộc chàng phải mở cánh cổng của *\"Pohjola\"* (cõi cấm thiên giới). Khi Saarelainen thực hiện, Thiên Lý (Đấng Nguyên Sơ cùng Kẻ Đến Sau) đã tàn nhẫn **hành quyết Saarelainen và xẻ thịt thi hài của chàng thành 7 chiếc Gnosis**! Do đó, chiến dịch thu thập đủ 7 Gnosis của Nữ Hoàng Anastasya không chỉ để lật đổ Thiên Lý, mà còn là để **gom lại 7 mảnh hài cốt của người yêu đã khuất**."
          ],
          en: [
            "As revealed in **[[hymns-of-the-far-north|Hymns of the Far North]]**, the deepest reason Tsaritsa Anastasya became \"a god with no love left\" and resolved to gather all seven **[[gnosis|Gnoses]]** lies in the fate of her betrothed – the **Third Descender, Saarelainen**.",
            "When Saarelainen sought her hand, Pakkaisukko (the Belyi Tsar) demanded that he open the gates of *\"Pohjola\"*. Doing so provoked the Heavenly Principles, who **executed Saarelainen and carved his body into the seven Gnoses**! Thus, Anastasya's crusade to collect all seven Gnoses is both a rebellion against Celestia and a quest to **reassemble the remains of her murdered lover**."
          ]
        }
      },
      {
        title: { vi: "Danh sách đầy đủ 11 Quan Chấp Hành Fatui (Eleven Fatui Harbingers)", en: "Complete Roster of the Eleven Fatui Harbingers" },
        body: {
          vi: [
            "Đứng đầu bộ máy thực thi của Nữ Hoàng Băng Giá Anastasya là các **Quan Chấp Hành Fatui** (đặt tên theo kịch ứng tác *Commedia dell'arte*), xếp hạng theo sức mạnh:\n  • **Đạo Diễn / Thống Lĩnh (Director) – [[tsaritsa|Pierro]] (\"The Jester\" / Quan Hề):** Pháp sư hoàng gia của [[khaenriah]] ([[pale-flame]]), người đồng sáng lập Fatui.\n  • **Số 1 – [[capitano|Il Capitano]] (\"The Captain\" / Đội Trưởng – Thrain):** Chỉ huy huyền thoại của Khaenri'ah; hiện đã hợp nhất với Chúa Tể Màn Đêm tại [[natlan]] (Nữ Hoàng vẫn giữ nguyên ghế Số 1 của ông).\n  • **Số 2 – [[dottore|Il Dottore]] (\"The Doctor\" / Bác Sĩ – Zandik):** Học giả bị trục xuất khỏi [[sumeru]] ([[pale-flame]]), kẻ tạo ra các Phân Thân và truy bắt Columbina tại Nod-Krai.\n  • **Số 3 – [[columbina|Columbina]] (\"Damselette\" / Thiếu Nữ – Kuutar):** Thần Mặt Trăng của Nod-Krai; đã rời Fatui và đăng thần trở thành **Nữ Thần Tam Nguyệt (Trilune Goddess)**.\n  • **Số 4 – [[arlecchino]] (\"The Knave\" / Người Hầu – Peruere):** \"Cha\" của Căn Nhà Hơi Ấm tại [[fontaine]], hậu duệ mang ngọn lửa Vương triều Hắc Nhật của [[khaenriah]] ([[perinheri]]).\n  • **Số 5 – Pulcinella (\"The Rooster\" / Gà Trống):** Thị trưởng thành Snezhnaya, người điều hành **Dự án Stuzha (Project Stuzha)**.\n  • **Số 6 – (Đang bỏ trống):** Từng thuộc về **Scaramouche (\"The Balladeer\" / Kẻ Tán Tỉnh – [[wanderer]])** ([[husk-of-opulent-dreams]]) trước khi cậu tự xoá tên trong [[irminsul]].\n  • **Số 7 – Sandrone (\"Marionette\" / Con Rối):** Nghiên cứu viên cơ khí tự động, có tình bạn gắn bó với Columbina và Arlecchino.\n  • **Số 8 – La Signora (\"The Fair Lady\" / Quý Bà – Rosalyne):** **Diệm Liệt Ma Nữ Rực Cháy** của [[mondstadt]] ([[crimson-witch-of-flames]], [[elegy-for-the-end]]); đã bị Raiden Shogun hành quyết tại [[inazuma]].\n  • **Số 9 – Pantalone (\"Regrator\" / Quan Độc Tài):** Chủ ngân hàng Bắc Quốc nắm giữ huyết mạch tài chính của Snezhnaya ([[pale-flame]]).\n  • **Số 10 – (Bỏ trống / Chưa công bố).**\n  • **Số 11 – Tartaglia (\"Childe\" / Công Tử – Ajax):** Quan Chấp Hành trẻ nhất, đệ tử của **[[skirk]]**."
          ],
          en: [
            "Executing the Tsaritsa's will are the **Eleven Fatui Harbingers** ranked by strength:\n  • **Director – [[tsaritsa|Pierro]] (\"The Jester\"):** Royal mage of [[khaenriah]] ([[pale-flame]]) and co-founder of the Fatui.\n  • **No. 1 – [[capitano|Il Capitano]] (\"The Captain\" – Thrain):** Legendary Khaenri'ahn commander; now merged with the Lord of the Night in [[natlan]].\n  • **No. 2 – [[dottore|Il Dottore]] (\"The Doctor\" – Zandik):** Outcast [[sumeru]] scholar ([[pale-flame]]).\n  • **No. 3 – [[columbina|Columbina]] (\"Damselette\" – Kuutar):** Moon Goddess of Nod-Krai who left the Fatui and ascended as the **Trilune Goddess**.\n  • **No. 4 – [[arlecchino]] (\"The Knave\" – Peruere):** \"Father\" of the House of the Hearth in [[fontaine]] and scion of [[khaenriah]]'s Crimson Moon ([[perinheri]]).\n  • **No. 5 – Pulcinella (\"The Rooster\"):** Mayor of Snezhnaya spearheading **Project Stuzha**.\n  • **No. 6 – (Vacant):** Formerly held by **Scaramouche ([[wanderer]])** ([[husk-of-opulent-dreams]]) before erasing his name in [[irminsul]].\n  • **No. 7 – Sandrone (\"Marionette\"):** Master of autonomous machinery.\n  • **No. 8 – La Signora (\"The Fair Lady\" – Rosalyne):** The **[[crimson-witch-of-flames|Crimson Witch of Flames]]** of [[mondstadt]]; executed in [[inazuma]].\n  • **No. 9 – Pantalone (\"Regrator\"):** Financier controlling the Northland Bank ([[pale-flame]]).\n  • **No. 10 – (Vacant).**\n  • **No. 11 – Tartaglia (\"Childe\" – Ajax):** Youngest Harbinger and disciple of **[[skirk]]**."
          ]
        }
      },
      {
        title: { vi: "Vùng tự trị Nod-Krai, Sắc Lệnh Sao Bạc và Khu Thí Nghiệm Dự án Màn Trăng", en: "Autonomous Nod-Krai, the Palestar Edict, and the Lunar Veil Laboratory" },
        body: {
          vi: [
            "Ở rìa cực nam của Snezhnaya là vùng đất tự trị **Nod-Krai** – nơi hình thành từ những mảnh vỡ của **Sương Nguyệt (Frost Moon)** trong **Ba Chị Em Mặt Trăng** ([[moonlit-bamboo-forest]]). Đây là nơi toạ lạc của **Đảo Hiisi** (với **Sảnh Ngân Nguyệt / Silvermoon Hall** của [[columbina]]), thị trấn **Nasha**, và các trạm nghiên cứu cổ đại của **Dự án Màn Trăng (Lunar Veil Project)** tại Lusalim.",
            "Các thế lực đụng độ tại Nod-Krai gồm: **Hậu Duệ Sương Nguyệt (Frostmoon Scions)** sử dụng năng lượng mặt trăng cổ đại *Kuuvahki*, **Người Giữ Đèn (Lightkeepers)** canh gác chống lại Cuộc Săn Hoang Dã của Vực Sâu, **Hiệp hội Voynich**, đội viễn chinh của Đại Đoàn Trưởng **Varka** ([[mondstadt]]), và quân đoàn Fatui được điều động theo **Sắc Lệnh Sao Bạc (Palestar Edict)**."
          ],
          en: [
            "At the southernmost edge of Snezhnaya lies **Nod-Krai** – formed from the shattered remnants of the **Frost Moon** ([[moonlit-bamboo-forest]]). It encompasses **Hiisi Island** (home to [[columbina]]'s **Silvermoon Hall**), **Nasha Town**, and the ancient **Lunar Veil Project** laboratories of Lusalim.",
            "Major factions in Nod-Krai include the **Frostmoon Scions** (wielding *Kuuvahki* lunar energy), the **Lightkeepers**, the **Voynich Guild**, Grand Master **Varka**'s ([[mondstadt]]) expedition, and the Fatui forces deployed under the **Palestar Edict**."
          ]
        }
      }
    ],
    theories: [],
    sources: [
      { label: "Fandom: Snezhnaya", url: "https://genshin-impact.fandom.com/wiki/Snezhnaya" },
      { label: "Fandom: Nod-Krai", url: "https://genshin-impact.fandom.com/wiki/Nod-Krai" },
      { label: "Fandom: Eleven Fatui Harbingers", url: "https://genshin-impact.fandom.com/wiki/Eleven_Fatui_Harbingers" }
    ],
    related: ["tsaritsa", "columbina", "hyperborea", "hymns-of-the-far-north", "pale-flame", "capitano", "dottore", "arlecchino", "wanderer", "crimson-witch-of-flames", "skirk", "gnosis", "delusion", "moonlit-bamboo-forest"]
  },

  {
    id: "ancient-dragon-tollan",
    status: "fallen",
    name: { vi: "Đế Chế Rồng Cổ & Thành Thánh Tollan (Núi Thánh Cổ)", en: "Ancient Dragon Civilization & Sacred City of Tollan" },
    region: { vi: "Natlan (Đại Hỏa Sơn Tollan)", en: "Natlan (Great Volcano of Tollan)" },
    period: { vi: "Thế Giới Cũ → ~2.000 năm trước", en: "Old World → ~2,000 years ago" },
    ruler: { vi: "Hỏa Long Vương Xiuhcoatl & Mười Ba Long Chúa (chịu ảnh hưởng từ Nibelung & Hiền Triết Kukulkan)", en: "Pyro Sovereign Xiuhcoatl & Thirteen Sovereign Lords (Guided by Nibelung & Sage Kukulkan)" },
    fate: { vi: "Sụp đổ trong cuộc nổi dậy của Xbalanque và con người Natlan; Thành Thánh Tollan bị phong ấn sâu trong lòng Đại Hỏa Sơn", en: "Fell during Xbalanque and humanity's rebellion; Sacred City of Tollan was sealed beneath the Great Volcano" },
    accent: "#ff7e47",
    summary: {
      vi: "Nền văn minh công nghệ tối tân của loài rồng cổ đại trên đất Natlan cổ xưa – nơi khai sinh Công nghệ Bí Nguyên (Secret Source Technology), lập trình vật chất bằng Phlogiston, rèn Tổ Hợp Sao và chế tạo siêu vũ khí Huitzilopochtli nhằm đối đầu với Vực Sâu.",
      en: "The hyper-advanced draconic civilization beneath ancient Natlan – birthplace of Secret Source Technology, programmable Phlogiston (computronium), Astral Assemblages, and the Huitzilopochtli array built to annihilate the Abyss."
    },
    sections: [
      {
        title: { vi: "Kỷ nguyên Vàng của loài Rồng: Phlogiston & Công nghệ Bí Nguyên", en: "Draconic Golden Age: Phlogiston & Secret Source Technology" },
        body: {
          vi: [
            "Trước khi [[heavenly-principles|Thiên Lý]] giáng lâm, đế chế Rồng tại [[natlan]] dưới sự trị vì của **Hỏa Long Vương Xiuhcoatl** và **Mười Ba Long Chúa** nắm giữ nguồn năng lượng tối thượng của Cõi Ánh Sáng gọi là **Phlogiston** (Ngọn Lửa Nguyên Thủy – thực chất là một dạng vật chất lập trình *computronium* có khả năng lưu giữ tri thức, ký ức và dữ liệu hiệu quả nhất trong vũ trụ).",
            "Theo bích họa tại **Chichen Uctokah**, sau khi **[[anacharsis|Anacharsis]]** cảnh báo **[[nibelung-sovereigns|Long Vương Nibelung]]** về thảm họa vũ trụ, Nibelung đã thúc đẩy loài rồng phát triển **[[secret-source|Công nghệ Bí Nguyên (Secret Source Technology)]]** để đưa chủng tộc vươn tới các vì sao: bao gồm dự án **Thang máy Không gian Chichen Uctokah – Phi thuyền Tonatiuh**, các **Đài Tính Toán Bí Mật (Esoteric Arrays)**, những **Tổ Hợp Sao (Astral Assemblages / Tzitzimimeh)** với sức mạnh ngang ngửa việc tạo tác một ngôi sao, cùng đội quân **Người Máy Bí Nguyên** và **Người Hầu Bí Nguyên**."
          ],
          en: [
            "Before the [[heavenly-principles|Heavenly Principles]] arrived, ancient Natlan's dragon empire under **Pyro Sovereign Xiuhcoatl** and the **Thirteen Sovereign Lords** wielded **Phlogiston** (the Primal Flame – a programmable form of *computronium* capable of storing immense knowledge and data across the Light Realm).",
            "As depicted in murals at **Chichen Uctokah**, after **[[anacharsis|Anacharsis]]** warned **[[nibelung-sovereigns|Nibelung]]** of looming cosmic ruin, Nibelung spurred draconic science into **[[secret-source|Secret Source Technology]]**—giving rise to the **Chichen Uctokah – Tonatiuh orbital elevator**, **Esoteric Arrays**, star-forged **Astral Assemblages (Tzitzimimeh)**, and the **Secret Source Automatons**."
          ]
        }
      },
      {
        title: { vi: "Huitzilopochtli, Hiền Triết Kukulkan & Sự sụp đổ của Thành Thánh Tollan", en: "Huitzilopochtli, Sage Kukulkan & the Fall of Tollan" },
        body: {
          vi: [
            "Sau khi Xiuhcoatl bừng tỉnh bởi **Tri Thức Cấm Kỵ** của Nibelung nhưng sớm nhận ra cơ thể đang bị Vực Sâu ăn mòn thành \"xác sống\", ông dùng chút tỉnh táo cuối cùng tạo ra siêu thiết bị **Huitzilopochtli** bên dưới **Trái Tim Núi Thánh**: chuyển hóa toàn bộ sự sống và vật chất Natlan thành Phlogiston thuần túy rồi gắn các Tổ Hợp Sao để triệt tiêu hoàn toàn Vực Sâu bằng phản ứng hủy lẫn nhau.",
            "Lo sợ phương án cực đoan ấy hủy diệt sinh linh, em trai Xiuhcoatl là **Hiền Triết Kukulkan** đánh cắp hạt giống Phlogiston truyền dạy cho loài người, đồng thời tạo ra người con lai rồng–người **[[ochkanatlan|Och-Kan]]**. Về sau, anh hùng loài người **Xbalanque** sát hại Xiuhcoatl bằng chính điểm yếu nơi con mắt điều khiển Huitzilopochtli, lập khế ước cùng Kukulkan chia đôi **Hai Lời Khẩn Cầu Vàng (Golden Entreaties)** để phong ấn vĩnh viễn siêu vũ khí này và kết thúc triều đại loài rồng tại Tollan."
          ],
          en: [
            "Awakened by Nibelung's return with the Abyss yet realizing he was decaying into a living corpse, Xiuhcoatl forged **Huitzilopochtli** in the **Heart of the Sacred Mountain**—a vast array capable of converting all of Natlan into pure Phlogiston so Astral Assemblages could mutually annihilate the Abyss.",
            "Opposing this extreme plan, Xiuhcoatl's brother **Kukulkan** stole a Phlogiston seed to teach humanity and birthed the half-dragon **[[ochkanatlan|Och-Kan]]**. Human hero **Xbalanque** later slew Xiuhcoatl by exploiting the eye that anchored Huitzilopochtli, sealed its activation behind the split **Golden Entreaties**, and ended the dragons' rule over Tollan."
          ]
        }
      }
    ],
    theories: [
      {
        title: { vi: "Công nghệ Bí Nguyên tại Tollan & Sương Nguyệt có cùng nguồn gốc từ Nibelung?", en: "Do Tollan and Frost Moon's Secret Source Tech Share the Same Draconic Root?" },
        body: {
          vi: "Việc tìm thấy các **Người Máy Bí Nguyên (Secret Source Automatons)** ngay trên cả **Sương Nguyệt (Nod-Krai)** lẫn **Núi Thánh Cổ Tollan (Natlan)** — cùng việc Xiuhcoatl từng trực tiếp góp ý qua Nu-ur-Gestug cho **[[project-lunar-veil|Dự án Ngắm Trăng]]** — khẳng định toàn bộ nền khoa học rồng tiền Thiên Lý là một mạng lưới thống nhất do Long Vương Nibelung dẫn dắt trước khi Teyvat bị cô lập dưới Bầu Trời Giả.",
          en: "Finding **Secret Source Automatons** on both the **Frost Moon** and inside Natlan's **Ancient Sacred Mountain** — alongside Xiuhcoatl's technical advice to **[[project-lunar-veil|Project Moongazer]]** via Nu-ur-Gestug — confirms pre-Celestia dragons operated an interconnected cosmic research network before the False Sky isolated Teyvat."
        },
        sources: [{ label: "Fandom: Ancient Sacred Mountain / Secret Source Automaton", url: "https://genshin-impact.fandom.com/wiki/Ancient_Sacred_Mountain" }]
      }
    ],
    sources: [
      { label: "Fandom: Ancient Sacred Mountain", url: "https://genshin-impact.fandom.com/wiki/Ancient_Sacred_Mountain" },
      { label: "Fandom: Huitzilopochtli", url: "https://genshin-impact.fandom.com/wiki/Huitzilopochtli" },
      { label: "Fandom: Phlogiston", url: "https://genshin-impact.fandom.com/wiki/Phlogiston" }
    ],
    related: ["natlan", "ochkanatlan", "nibelung-sovereigns", "secret-source", "project-lunar-veil", "abyss-void-realm"]
  }
];
