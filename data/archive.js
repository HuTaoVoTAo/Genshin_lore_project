/*
 * KHO LƯU TRỮ / ARCHIVE
 * ------------------------------------------------------------
 * 40 Mục lưu trữ:
 * - 17 Nhân vật (character)
 * - 5 Vũ khí (weapon)
 * - 6 Bộ Thánh di vật (artifact) – Kèm trình đọc 5 món di vật
 * - 6 Sách cổ (book) – Kèm trình đọc toàn văn các chương/quyển sách
 * - 6 Đồ vật & Hệ thống Vũ trụ (item)
 */
window.LORE = window.LORE || {};

LORE.archive = [
  /* ===================== NHÂN VẬT / CHARACTERS (16) ===================== */
  {
    id: "dainsleif",
    type: "character",
    name: { vi: "Dainsleif", en: "Dainsleif" },
    subtitle: { vi: "\"Người Giữ Nhánh\" – Kiếm Hoàng Hôn của Khaenri'ah", en: "\"The Bough Keeper\" – Twilight Sword of Khaenri'ah" },
    region: { vi: "Khaenri'ah", en: "Khaenri'ah" },
    summary: {
      vi: "Cựu đội trưởng vệ binh hoàng gia Khaenri'ah, em trai của nhà tiên tri Vedrfolnir, bị nguyền rủa bằng sự bất tử sau Đại Thảm Hoạ. Người dẫn đường bí ẩn trên hành trình của Nhà Lữ Hành.",
      en: "Former captain of Khaenri'ah's royal guard and younger brother of the prophet Vedrfolnir, cursed with immortality after the Cataclysm. A mysterious guide on the Traveler's journey."
    },
    quote: {
      text: {
        vi: "Hãy bước qua màn sương để giành lấy quyền định đoạt số mệnh, vì ngai vàng trên bầu trời vốn không dành cho ngươi.",
        en: "Step forth, if you have understood the meaning of your journey. Defeat me, command me to step aside, show me that you are worthier than I to rescue her."
      },
      source: {
        vi: "Dainsleif – Teyvat Chapter Storyline Preview: Travail",
        en: "Dainsleif – Teyvat Chapter Storyline Preview: Travail"
      }
    },
    sections: [
      {
        title: { vi: "Kiếm Hoàng Hôn và Năm Tội Đồ", en: "The Twilight Sword and the Five Sinners" },
        body: {
          vi: [
            "Dainsleif từng là Đội trưởng Vệ binh Hoàng gia của [[khaenriah]] thời Vương triều Nhật Thực, mang danh hiệu \"Kiếm Hoàng Hôn\" (Twilight Sword). Anh trai ruột của ông là **Vedrfolnir** (\"Nhà Tiên Tri\") – người đã bị Vua Irmin chọc mù mắt và tống giam vì những lời tiên tri không vừa ý nhà vua.",
            "Khi Dainsleif tập hợp năm nhân vật kiệt xuất nhất của vương quốc để giải cứu anh trai và ngăn chặn Vua Irmin, cả năm người ấy lại khuất phục trước cám dỗ của Vực Sâu, chia nhau nguồn sức mạnh có thể huỷ diệt thế giới và trở thành **Năm Tội Đồ của Khaenri'ah** ([[rhinedottir]], Vedrfolnir, Surtalogi, Hroptatyr, Rerir) – bỏ mặc quê hương khi đại hoạ giáng xuống."
          ],
          en: [
            "Dainsleif served as Captain of the Royal Guard in [[khaenriah]]'s Eclipse Dynasty, bearing the title \"Twilight Sword\". His older brother **Vedrfolnir** (\"The Visionary\") was blinded and imprisoned by King Irmin for delivering prophecies the king despised.",
            "When Dainsleif gathered five of the kingdom's greatest figures to rescue his brother and stop King Irmin, those five succumbed to the Abyss's temptation, dividing world-shattering power among themselves to become the **Five Sinners of Khaenri'ah** ([[rhinedottir]], Vedrfolnir, Surtalogi, Hroptatyr, Rerir) – abandoning their homeland when calamity struck."
          ]
        }
      },
      {
        title: { vi: "Nhân chứng mang lời nguyền bất tử và cuộc truy đuổi Giáo Đoàn Vực Sâu", en: "A witness bearing the curse of immortality" },
        body: {
          vi: [
            "Sau sự sụp đổ của [[khaenriah]], Dainsleif mang lời nguyền bất tử của người thuần chủng và từng đồng hành cùng người thân song sinh của Nhà Lữ Hành khắp Teyvat trước khi hai người chia rẽ. Chính ông tiết lộ sự thật bi thương đằng sau loài hilichurl ([[hilichurl-cultural-customs]]) và không ngừng truy cản kế hoạch [[loom-of-fate|Máy Dệt Vận Mệnh]]."
          ],
          en: [
            "Following [[khaenriah]]'s fall, Dainsleif bore the pure-blood curse of immortality and traveled across Teyvat alongside the Traveler's twin before their paths diverged. He revealed the tragic truth behind the hilichurls ([[hilichurl-cultural-customs]]) and relentlessly pursues the Abyss Order's [[loom-of-fate|Loom of Fate]] operation."
          ]
        }
      }
    ],
    theories: [
      {
        title: { vi: "Vật giúp Dainsleif giữ lại ký ức suốt 500 năm là gì?", en: "What is the object preserving Dainsleif's memory over 500 years?" },
        body: {
          vi: "Dainsleif từng nhắc đến \"một vật\" giúp ông không bị sự bào mòn nuốt chửng hoàn toàn như các Kỵ Sĩ Hắc Xà tại [[chasm-civilization]]. Cộng đồng suy đoán vật đó là chiếc nhẫn gắn với anh trai Vedrfolnir hoặc kỷ vật của người thân song sinh Nhà Lữ Hành.",
          en: "Dainsleif mentions \"something\" that prevents erosion from devouring his mind like the Black Serpent Knights in the [[chasm-civilization]]. The community speculates it is a ring tied either to his brother Vedrfolnir or to the Traveler's twin."
        },
        sources: [{ label: "r/Genshin_Lore – Dainsleif & Five Sinners", url: "https://www.reddit.com/r/Genshin_Lore/search/?q=Dainsleif%20Five%20Sinners" }]
      }
    ],
    sources: [{ label: "Fandom: Dainsleif", url: "https://genshin-impact.fandom.com/wiki/Dainsleif" }],
    related: ["khaenriah", "rhinedottir", "capitano", "hilichurl-cultural-customs", "loom-of-fate", "chasm-civilization"]
  },

  {
    id: "venti",
    type: "character",
    name: { vi: "Venti (Barbatos)", en: "Venti (Barbatos)" },
    subtitle: { vi: "Phong Thần của Mondstadt – một sợi gió giữa Ngàn Ngọn Gió", en: "Anemo Archon of Mondstadt – a wisp among the Thousand Winds" },
    region: { vi: "Mondstadt", en: "Mondstadt" },
    summary: {
      vi: "Vị thần của Tự Do và Thơ Ca, một trong hai vị Thất Thần đời đầu còn sống sót sau Chiến tranh Ma Thần, người từng được thờ phụng cùng Bóng Hình Thời Gian Istaroth.",
      en: "The God of Freedom and Pastorals, one of only two surviving original members of The Seven from the Archon War, once worshipped alongside Istaroth, Shade of Time."
    },
    quote: {
      text: {
        vi: "Hạt giống của những câu chuyện được gió mang đi, và đến khi có thời gian, chúng sẽ nảy mầm.",
        en: "Seeds of stories, brought by the wind and cultivated by time."
      },
      source: {
        vi: "Khắc trên đồng hồ mặt trời tại Đảo Không Tên & Thiên Phong Thần Điện",
        en: "Inscribed on the sundials at the Nameless Island & Thousand Winds Temple"
      }
    },
    sections: [
      {
        title: { vi: "Tinh linh gió từ \"Ngàn Ngọn Gió\" của Istaroth", en: "A wind spirit born of Istaroth's \"Thousand Winds\"" },
        body: {
          vi: [
            "Trước khi trở thành Phong Thần, Barbatos chỉ là một tinh linh gió nhỏ bé thuộc \"Ngàn Ngọn Gió\" (Thousand Winds – danh hiệu của **Istaroth**, Bóng Hình của Thời Gian được nhắc tới trong [[before-sun-and-moon]]). Cách đây 2.600 năm, sau khi chàng thi sĩ vô danh hi sinh trong cuộc nổi dậy lật đổ Thần Bão Tố Decarabian tại [[old-mondstadt]], Barbatos tiếp nhận ngai thần Phong và hoá thân thành hình dáng của người bạn đã khuất.",
            "Ông dùng gió thổi bay băng tuyết, cắt phẳng các ngọn núi tạo nên địa hình [[mondstadt]] ngày nay và mời Hội Ma Nữ [[hexenzirkel]] uống trà thay vì giao chiến."
          ],
          en: [
            "Before becoming the Anemo Archon, Barbatos was a tiny elemental spirit among the \"Thousand Winds\" (an epithet of **Istaroth**, Shade of Time from [[before-sun-and-moon]]). 2,600 years ago, after his friend the nameless bard fell in the rebellion against Decarabian in [[old-mondstadt]], Barbatos ascended to the Anemo throne and took his fallen friend's form.",
            "He used the winds to sweep away eternal snow, sheared off mountain peaks to shape modern [[mondstadt]], and turned a challenge from the [[hexenzirkel]] witches into a peaceful tea party."
          ]
        }
      }
    ],
    theories: [
      {
        title: { vi: "Vì sao Venti thuộc lòng mọi bài thơ trong tương lai và quá khứ?", en: "Why does Venti know every song of the past and future?" },
        body: {
          vi: "Trong nhiệm vụ chào đón Nhà Lữ Hành và các sự kiện lễ hội, Venti có những câu thoại ngụ ý anh nhớ được Nhà Lữ Hành từ một vòng lặp thời gian khác – được cộng đồng cho là nhờ huyết thống trực tiếp với Istaroth (Thần Thời Gian).",
          en: "In his greeting lines and festival events, Venti hints at remembering the Traveler from another cycle – widely attributed by the community to his direct kinship with Istaroth, the Shade of Time."
        },
        sources: [{ label: "r/Genshin_Lore – Venti & Istaroth", url: "https://www.reddit.com/r/Genshin_Lore/search/?q=Venti%20Istaroth" }]
      }
    ],
    sources: [{ label: "Fandom: Venti", url: "https://genshin-impact.fandom.com/wiki/Venti" }],
    related: ["mondstadt", "old-mondstadt", "hexenzirkel", "before-sun-and-moon", "gnosis"]
  },

  {
    id: "zhongli",
    type: "character",
    name: { vi: "Zhongli (Morax / Rex Lapis / Nham Vương Đế Quân)", en: "Zhongli (Morax / Rex Lapis)" },
    subtitle: { vi: "Nham Vương Đế Quân – Võ Thần & Thần Khế Ước của Liyue (> 6.000 tuổi)", en: "Lord of Geo – God of Contracts & Martial God of Liyue (> 6,000 years old)" },
    region: { vi: "Liyue", en: "Liyue" },
    summary: {
      vi: "Vị thần lâu đời nhất trong Thất Thần (> 6.000 tuổi), người đúc ra đồng tiền Mora của toàn Teyvat, bảo hộ vùng đất Liyue từ thời Quy Ly Tập qua Chiến tranh Ma Thần và bị ràng buộc bởi một khế ước giữ kín bí mật về Thiên Lý.",
      en: "The oldest of The Seven (> 6,000 years old), creator of all Mora in Teyvat, protector of Liyue from the Guili Assembly through the Archon War, and bound by a contract of silence regarding ancient secrets."
    },
    quote: {
      text: {
        vi: "Rượu hoa quế vị vẫn như xưa, chỉ tiếc những người cùng uống năm nào nay còn lại mấy ai?",
        en: "Osmanthus wine tastes the same as I remember... But where are those who share the memory?"
      },
      source: {
        vi: "Zhongli – Thoại nhân vật trong game",
        en: "Zhongli – In-game character voice-over"
      }
    },
    sections: [
      {
        title: { vi: "1. Hơn 6.000 năm lịch sử: Từ Quy Ly Tập, Azhdaha đến Võ Thần của Chiến Tranh Ma Thần", en: "1. Over 6,000 Years of History: From the Guili Assembly and Azhdaha to Martial God of the Archon War" },
        body: {
          vi: [
            "**Morax (Rex Lapis / Nham Vương Đế Quân)** là vị thần cổ xưa nhất trong số Thất Thần trên mặt đất Teyvat, đã sống qua hơn **6.000 năm** lịch sử kể từ thời điểm Cỗ Xe Mặt Trời rơi xuống [[chasm-civilization|Vực Đá Sâu]]. Thuở ban đầu, ông chạm khắc đôi mắt cho Long Vương Nham mù loà **Azhdaha** dưới lòng đất ([[unforged]]) và cùng **Ma Thần Bụi Guizhong** và **Táo Vương Marchosius** đồng sáng lập nền văn minh **[[guili-assembly|Quy Ly Tập]]**.",
            "Trước khi trở thành vị thần của thương mại và khế ước, Morax được toàn cõi Teyvat khiếp sợ dưới danh hiệu **Võ Thần**: trong Chiến tranh Ma Thần, ông phóng những ngọn giáo đá khổng lồ tạo thành **Cô Vân Các (Guyun Stone Forest)** ghim chặt Ma Thần Xoáy Nước **Osial**, chém chết mãng xà của **Dược Quân** tại Trầm Ngọc Cốc, tiêu diệt ác giao **Chi** tại Khinh Sách Trang và lập khế ước với **Tam Nhãn Ngũ Hiển Tiên Nhân** cùng **Ngũ Đại Dạ Xoa** để bảo vệ **[[liyue|Cảng Liyue]]** suốt 3.700 năm."
          ],
          en: [
            "**Morax (Rex Lapis)** is the oldest of The Seven (> **6,000 years old**). He carved eyes for the blind Geo Dragon **Azhdaha** ([[unforged]]), co-founded the **[[guili-assembly|Guili Assembly]]** with **Guizhong** and **Marchosius**, and during the Archon War hurled the stone spears of **Guyun Stone Forest** to pin **Osial**, leading the **Adepti** and **Five Yakshas** to protect **[[liyue|Liyue Harbor]]** for 3,700 years."
          ]
        }
      },
      {
        title: { vi: "2. Sự \"Bào Mòn\" (Erosion), Khế Ước Giữ Im Lặng và \"Khế Ước Chấm Dứt Mọi Khế Ước\"", en: "2. \"Erosion\", the Contract of Non-Disclosure, and \"The Contract to End All Contracts\"" },
        body: {
          vi: [
            "Trải qua hàng thiên niên kỷ chứng kiến sự ra đi của Guizhong, bốn vị Dạ Xoa và đặc biệt là cảnh người bạn cũ **Azhdaha** bị quy luật **\"Bào Mòn\" (Erosion)** của Thiên Lý xoá mờ ký ức đến mức phát điên phải phong ấn dưới núi Hổ Lao, Zhongli hiểu rằng không một vị thần bất tử nào có thể kháng cự lại sự Bào Mòn mãi mãi.",
            "Do đó, ông đã ký kết **\"Khế Ước Chấm Dứt Mọi Khế Ước\"** với **[[tsaritsa|Nữ Hoàng Băng Giá]]**: dùng chính vở kịch giả chết trong Lễ Thỉnh Tiên làm phép thử cuối cùng cho **Thất Tinh Liyue** và **Tiên Nhân**, rồi trao đi chiếc **[[gnosis]]** hệ Nham để lui về sống như một cố vấn phàm trần tên **Zhongli** tại **Vãng Sinh Đường** ([[staff-of-homa]]).",
            "Đặc biệt, khi Nhà Lữ Hành hỏi về sự thật của Đại Thảm Hoạ **[[khaenriah]]** 500 năm trước, Zhongli tiết lộ rằng ông đã ký một **Khế Ước Giữ Bí Mật (Contract of Silence)** với Thiên Lý từ trước khi biến cố xảy ra nên không thể mở lời – đồng thời ông căn dặn Nhà Lữ Hành hãy làm một \"nhân chứng đến từ thế giới bên ngoài\" (**Kẻ Đổ Bộ**), bởi chỉ có ký ức trong đầu Nhà Lữ Hành mới không bao giờ bị **[[irminsul]]** sửa đổi."
          ],
          en: [
            "Having witnessed Guizhong's death, the fall of four Yakshas, and **Azhdaha** succumbing to **Erosion**, Zhongli forged the **\"Contract to End All Contracts\"** with the **[[tsaritsa]]**, handing over his Geo **[[gnosis]]** once the **Liyue Qixing** proved humanity could govern [[liyue]] alone.",
            "He also reveals to the Traveler that he is bound by an ancient **Contract of Non-Disclosure** forbidding him from speaking of the truth of **[[khaenriah]]**, entrusting the Traveler – as an outlander **Descender** immune to **[[irminsul]]** – to bear witness to Teyvat's true history."
          ]
        }
      }
    ],
    theories: [],
    sources: [{ label: "Fandom: Zhongli", url: "https://genshin-impact.fandom.com/wiki/Zhongli" }],
    related: ["liyue", "guili-assembly", "chasm-civilization", "staff-of-homa", "unforged", "tsaritsa", "gnosis", "irminsul"]
  },

  {
    id: "raiden-ei",
    type: "character",
    name: { vi: "Raiden Ei (Beelzebul)", en: "Raiden Ei (Beelzebul)" },
    subtitle: { vi: "Lôi Thần của Inazuma – Nữ Chúa Narukami Ogosho", en: "Electro Archon of Inazuma – Her Excellency, the Almighty Narukami Ogosho" },
    region: { vi: "Inazuma", en: "Inazuma" },
    summary: {
      vi: "Người em song sinh và võ sĩ cái bóng (kagemusha) của Lôi Thần tiền nhiệm Makoto, người đã từ bỏ thân xác để rèn thanh đao Musou Isshin và tìm kiếm Vĩnh Hằng cho Inazuma.",
      en: "Twin sister and shadow warrior (kagemusha) of the previous Electro Archon Makoto, who cast aside her physical body into the blade Musou Isshin in pursuit of Eternity for Inazuma."
    },
    sections: [
      {
        title: { vi: "Hai chị em song sinh, cái bóng và Cây Anh Đào Thần", en: "The twin sisters, the shadow warrior, and the Sacred Sakura" },
        body: {
          vi: [
            "Trong Chiến tranh Ma Thần tại [[inazuma]], Baal (Makoto) và Beelzebul (Ei) cùng chiến thắng dưới danh nghĩa một vị thần duy nhất; thậm chí Ei từng tự kết liễu thân xác để nhường ngai thần cho chị mình trước khi Makoto tái tạo lại cơ thể cho Ei.",
            "Sau khi Makoto tử trận tại [[khaenriah]] 500 năm trước, Ei dùng kỹ thuật cổ đại chế tạo con rối nguyên mẫu Kunikuzushi ([[wanderer]], [[husk-of-opulent-dreams]]) rồi con rối Raiden Shogun để chống lại sự \"Bào Mòn\". Nhờ vượt qua định kiến cũ trong trận chiến ý thức kéo dài 500 năm, Ei làm nở hạt giống Cây Anh Đào Thần mà Makoto và **Istaroth** đã chuẩn bị cho cô."
          ],
          en: [
            "During the Archon War in [[inazuma]], Baal (Makoto) and Beelzebul (Ei) triumphed together as a single deity; Ei even sacrificed her physical body so Makoto could ascend as Archon, before Makoto reconstructed Ei's form.",
            "After Makoto fell in [[khaenriah]] 500 years ago, Ei used ancient techniques to build the prototype puppet Kunikuzushi ([[wanderer]], [[husk-of-opulent-dreams]]) and the Raiden Shogun puppet to resist \"Erosion\". After a 500-year duel in Makoto's realm of consciousness, Ei bloomed the Sacred Sakura seed prepared by Makoto and **Istaroth**."
          ]
        }
      }
    ],
    theories: [],
    sources: [{ label: "Fandom: Raiden Shogun", url: "https://genshin-impact.fandom.com/wiki/Raiden_Shogun" }],
    related: ["inazuma", "enkanomiya", "tsurumi-civilization", "wanderer", "husk-of-opulent-dreams", "vision", "gnosis"]
  },

  {
    id: "nahida",
    type: "character",
    name: { vi: "Nahida (Buer)", en: "Nahida (Buer)" },
    subtitle: { vi: "Tiểu Cát Tường Thảo Vương – Thảo Thần của Sumeru", en: "Lesser Lord Kusanali – Dendro Archon of Sumeru" },
    region: { vi: "Sumeru", en: "Sumeru" },
    summary: {
      vi: "Thảo Thần được Rukkhadevata chiết ra từ cành cây Irminsul tinh khiết nhất 500 năm trước, nắm giữ chìa khoá kết nối trực tiếp với ký ức của toàn cõi Teyvat.",
      en: "The Dendro Archon created by Rukkhadevata from the purest branch of Irminsul 500 years ago, holding the direct link to all memories of Teyvat."
    },
    sections: [
      {
        title: { vi: "Cành cây tinh khiết nhất của Irminsul và khái niệm Kẻ Đổ Bộ", en: "The purest branch of Irminsul and the Descenders" },
        body: {
          vi: [
            "Trong Đại Thảm Hoạ 500 năm trước, ý thức của Thảo Thần Rukkhadevata bị nhiễm Tri Thức Cấm Kỵ – căn bệnh khởi nguồn từ thời [[deshret-kingdom|Vua Deshret]] ở [[sumeru]]. Vì không ai có thể tự xoá chính mình hoàn toàn khỏi [[irminsul]], Rukkhadevata đã bẻ nhánh tinh khiết nhất của Cây Thế Giới để tạo ra Nahida.",
            "Sau khi hoàn thành tâm nguyện thanh tẩy Irminsul, Nahida đối chất với [[dottore]] ([[pale-flame]]), dùng hai [[gnosis]] (Lôi và Thảo) để đổi lấy việc Dottore xoá bỏ các bản thể phân thân và tiết lộ bí mật rằng \"bầu trời của Teyvat là giả\" cùng danh sách **Bốn Kẻ Đổ Bộ** (Descenders)."
          ],
          en: [
            "During the Cataclysm 500 years ago, Greater Lord Rukkhadevata's consciousness was tainted by Forbidden Knowledge – the blight dating back to [[deshret-kingdom|King Deshret]]'s era in [[sumeru]]. Because one cannot fully erase oneself from [[irminsul]], Rukkhadevata snapped off the purest branch of the World Tree to create Nahida.",
            "After fulfilling the wish to purge Irminsul, Nahida confronted [[dottore]] ([[pale-flame]]), trading two [[gnosis|Gnoses]] (Electro and Dendro) for Dottore destroying his segments and sharing the secret that \"the skies of Teyvat are fake\" along with knowledge of the **Four Descenders**."
          ]
        }
      }
    ],
    theories: [],
    sources: [{ label: "Fandom: Nahida", url: "https://genshin-impact.fandom.com/wiki/Nahida" }],
    related: ["sumeru", "irminsul", "deshret-kingdom", "wanderer", "dottore", "gnosis"]
  },

  {
    id: "furina",
    type: "character",
    name: { vi: "Furina & Focalors", en: "Furina & Focalors" },
    subtitle: { vi: "Ngôi sao của vở kịch 500 năm – \"Thuỷ Thần\" của Fontaine", en: "Star of the 500-year stage – Fontaine's \"Hydro Archon\"" },
    region: { vi: "Fontaine", en: "Fontaine" },
    summary: {
      vi: "Phần con người của Thuỷ Thần Focalors, người đã kiên cường đóng vai một vị thần trên sân khấu suốt 500 năm để đánh lừa Thiên Lý và giải cứu Fontaine.",
      en: "The human half of Hydro Archon Focalors, who steadfastly played the role of a god on stage for 500 years to deceive the Heavenly Principles and save Fontaine."
    },
    sections: [
      {
        title: { vi: "Bi kịch của một con người mang gánh nặng thần linh", en: "The tragedy of a human bearing a god's burden" },
        body: {
          vi: [
            "Để đánh lừa lời tiên tri của Thiên Lý đặt lên [[fontaine]], Focalors tách phần thần tính và phần người. Furina – phần con người không có bất kỳ sức mạnh thần thánh nào, chỉ mang lời nguyền bất lão chừng nào phần thần tính còn tồn tại – buộc phải diễn tròn vai một vị Thuỷ Thần kiêu hãnh trước toàn thể dân chúng và cả [[neuvillette]].",
            "Suốt 182.376 màn kịch trong 500 năm, cô không được phép tâm sự với bất kỳ ai. Sau khi Focalors tự phán xét và lời tiên tri kết thúc, Furina được trả lại cuộc đời của một con người tự do và nhận được một [[vision]] hệ Thuỷ từ chính quyền năng mới của Neuvillette."
          ],
          en: [
            "To deceive the Heavenly Principles' prophecy upon [[fontaine]], Focalors separated her divinity and humanity. Furina – the human half with no divine power, bearing only a curse of agelessness so long as Focalors' divinity endured – had to play a flamboyant Hydro Archon before her entire nation and [[neuvillette]].",
            "Across 182,376 acts over 500 years, she could confide in no one. Once Focalors judged herself and the prophecy ended, Furina regained the life of a free mortal and was later granted a Hydro [[vision]] stemming from Neuvillette's restored authority."
          ]
        }
      }
    ],
    theories: [],
    sources: [{ label: "Fandom: Furina", url: "https://genshin-impact.fandom.com/wiki/Furina" }],
    related: ["fontaine", "neuvillette", "remuria", "arlecchino", "vision"]
  },

  {
    id: "neuvillette",
    type: "character",
    name: { vi: "Neuvillette", en: "Neuvillette" },
    subtitle: { vi: "Thẩm Phán Tối Cao (Iudex) của Fontaine – Thuỷ Long Vương cổ đại", en: "Iudex of Fontaine – Ancient Hydro Dragon Sovereign" },
    region: { vi: "Fontaine", en: "Fontaine" },
    summary: {
      vi: "Vị Thuỷ Long Vương tái sinh trong hình hài con người, người nắm giữ ký ức về kỷ nguyên của loài rồng và đã lấy lại trọn vẹn quyền năng cổ đại sau khi Ngai Thần Thuỷ sụp đổ.",
      en: "The Hydro Dragon Sovereign reincarnated in human form, keeper of memories from the age of dragons who reclaimed his full ancient authority after the Hydro Archon throne was shattered."
    },
    sections: [
      {
        title: { vi: "Thuỷ Long Vương trong hình hài con người", en: "The Hydro Sovereign in human form" },
        body: {
          vi: [
            "Theo lời tiên tri cổ ở [[enkanomiya]] (sau khi rồng biển Bathysmal Vishap bị biến đổi không còn thuần khiết), Thuỷ Long Vương đời mới buộc phải giáng sinh trong hình hài con người. Hơn 400 năm trước, Neuvillette nhận lời mời của Focalors đến [[fontaine]] đảm nhiệm vị trí Thẩm Phán Tối Cao (Iudex) để tìm hiểu ý nghĩa sự tồn tại của mình giữa loài người."
          ],
          en: [
            "As foretold in [[enkanomiya]] (after the Bathysmal Vishaps evolved into impure forms), the new Hydro Dragon Sovereign was destined to be reborn in human form. Over 400 years ago, Neuvillette accepted Focalors' invitation to [[fontaine]] as Chief Justice (Iudex) to understand his existence among humanity."
          ]
        }
      },
      {
        title: { vi: "Góc nhìn của Long Vương về \"Kẻ Soán Ngôi\" và Gnosis", en: "A Sovereign's perspective on \"The Usurper\" and the Gnoses" },
        body: {
          vi: [
            "Khi Focalors tự hành quyết để phá huỷ Ngai Thần Thuỷ và trả lại quyền năng cổ đại, Neuvillette khôi phục hoàn toàn ký ức của một trong Bảy Long Vương. Câu chuyện nhân vật của ông xác nhận rằng Đấng Nguyên Sơ (\"kẻ soán ngôi\") đã bị tổn thương nặng nề sau cuộc chiến với Kẻ Đến Thứ Hai, nên đã cùng \"kẻ đến sau\" tạo ra bảy [[gnosis]] để trấn áp trật tự nguyên thuỷ của thế giới."
          ],
          en: [
            "When Focalors executed herself to shatter the Hydro Archon throne and return the stolen authority, Neuvillette regained his full memories as one of the Seven Sovereigns. His character stories confirm that the Primordial One (\"the usurper\") was gravely ruined after the war with the Second Who Came, and collaborated with \"the one who came after\" to create the seven [[gnosis|Gnoses]] to suppress the world's original order."
          ]
        }
      }
    ],
    theories: [
      {
        title: { vi: "Phán quyết tương lai của Neuvillette đối với Thất Thần và Thiên Lý", en: "Neuvillette's future judgment upon The Seven and the Heavenly Principles" },
        body: {
          vi: "Trong thoại nhân vật, Neuvillette tuyên bố rằng sau khi lấy lại quyền năng, một ngày nào đó ông sẽ đưa các vị thần có tội và chính \"kẻ soán ngôi\" trên bầu trời ra xét xử.",
          en: "In his voice-overs, Neuvillette declares that having reclaimed his authority, he will one day bring the culpable gods and \"the usurper\" in the heavens to judgment."
        },
        sources: [{ label: "Fandom: Neuvillette Lore", url: "https://genshin-impact.fandom.com/wiki/Neuvillette/Lore" }]
      }
    ],
    sources: [{ label: "Fandom: Neuvillette", url: "https://genshin-impact.fandom.com/wiki/Neuvillette" }],
    related: ["fontaine", "furina", "remuria", "before-sun-and-moon", "gnosis", "enkanomiya", "skirk"]
  },

  {
    id: "mavuika",
    type: "character",
    name: { vi: "Mavuika (Haborym)", en: "Mavuika (Haborym)" },
    subtitle: { vi: "Hoả Thần của Natlan – người mang Tên Cổ \"Kiongozi\"", en: "Pyro Archon of Natlan – bearer of the Ancient Name \"Kiongozi\"" },
    region: { vi: "Natlan", en: "Natlan" },
    summary: {
      vi: "Vị Hoả Thần xuất thân từ một con người phàm trần cách đây 500 năm, người đã hiến sinh mạng vào Thánh Hoả để xuyên qua 5 thế kỷ và dẫn dắt Natlan chiến thắng Vực Sâu.",
      en: "The Pyro Archon who lived 500 years ago as a mortal human, sacrificing her life into the Sacred Flame to cross five centuries and lead Natlan to final victory over the Abyss."
    },
    sections: [
      {
        title: { vi: "Kế hoạch xuyên 500 năm và sức mạnh của Bóng Hình Cái Chết Ronova", en: "The 500-year plan and the power of Ronova, Shade of Death" },
        body: {
          vi: [
            "Khác với các vị thần bất tử ở quốc gia khác, Hoả Thần của [[natlan]] là danh hiệu được kế thừa qua các thế hệ chiến binh phàm trần theo cơ chế do Hoả Thần đầu tiên **Xbalanque** và **Ronova** (Bóng Hình của Cái Chết) thiết lập sau sự sụp đổ của nền văn minh rồng [[ochkanatlan]].",
            "500 năm trước, nhận thấy Natlan chưa đủ sức tiêu diệt hoàn toàn gốc rễ Vực Sâu trong Đại Thảm Hoạ, Mavuika đã từ biệt gia đình, bước vào Thánh Hoả để tái sinh ở thời điểm hiện tại. Sau khi cùng Nhà Lữ Hành đánh bại Chúa Tể Vực Sâu Gosoythoth, mạng sống của cô được Quan Chấp Hành [[capitano]] cứu lấy qua nghịch lý bất tử trước mặt Ronova."
          ],
          en: [
            "Unlike the immortal Archons of other nations, the Pyro Archon of [[natlan]] is a mantle passed down among mortal champions under the compact forged by the first Pyro Archon **Xbalanque** and **Ronova** (Shade of Death) after the dragon era of [[ochkanatlan]].",
            "500 years ago, realizing Natlan could not yet uproot the Abyss during the Cataclysm, Mavuika bade farewell to her family and entered the Sacred Flame to awaken in the present. After defeating the Abyssal entity Gosoythoth alongside the Traveler, her life was spared when First Harbinger [[capitano]] took her place before Ronova."
          ]
        }
      }
    ],
    theories: [],
    sources: [{ label: "Fandom: Mavuika", url: "https://genshin-impact.fandom.com/wiki/Mavuika" }],
    related: ["natlan", "ochkanatlan", "capitano", "gnosis"]
  },

  {
    id: "tsaritsa",
    type: "character",
    name: { vi: "Nữ Hoàng Băng Giá Anastasya (The Tsaritsa), Bạch Sa Hoàng & Pierro", en: "Tsaritsa Anastasya, the Belyi Tsar & Director Pierro" },
    subtitle: { vi: "Băng Thần Đời 2 (Anastasya Feodorovna Snezhnaya), Băng Thần Đời 1 (Monomakh) & Đạo diễn Fatui", en: "2nd Cryo Archon (Anastasya Feodorovna Snezhnaya), 1st Cryo Archon (Monomakh) & Fatui Director" },
    region: { vi: "Snezhnaya / Khaenri'ah", en: "Snezhnaya / Khaenri'ah" },
    summary: {
      vi: "Anastasya Feodorovna Snezhnaya – vị Băng Thần Đời 2 kế vị Bạch Sa Hoàng Monomakh, người đã mất đi vị hôn phu là Kẻ Đổ Bộ Thứ Ba (Saarelainen) và quyết tâm cùng pháp sư Khaenri'ah Pierro thu thập đủ 7 mảnh hài cốt (7 Gnosis) để lật đổ Thiên Lý.",
      en: "Anastasya Feodorovna Snezhnaya – the second Cryo Archon succeeding the Belyi Tsar Monomakh, who lost her betrothed (the Third Descender Saarelainen) and resolved alongside Pierro to gather all seven Gnoses to overthrow the Heavenly Principles."
    },
    quote: {
      text: {
        vi: "Nàng là một vị thần không còn yêu thương người dân, và cũng không còn được người dân yêu thương. Người dân đi theo nàng chỉ vì họ tin rằng một ngày nào đó nàng sẽ phất cờ nổi dậy chống lại Thiên Lý.",
        en: "She is a god with no love left for her people, nor do they have any left for her. Her followers hope only to be on her side when the day of her rebellion against the divine comes at last."
      },
      source: {
        vi: "Dainsleif – Teyvat Chapter Storyline Preview: Travail",
        en: "Dainsleif – Teyvat Chapter Storyline Preview: Travail"
      }
    },
    sections: [
      {
        title: { vi: "Từ Bạch Sa Hoàng (Monomakh Snezhnyi) đến Nữ Hoàng Anastasya", en: "From the Belyi Tsar (Monomakh Snezhnyi) to Tsaritsa Anastasya" },
        body: {
          vi: [
            "Lịch sử ngai vị Băng Thần của [[snezhnaya]] gắn liền với hai vị vua:\n  • **Băng Thần Đời 1 – Bạch Sa Hoàng (Belyi Tsar / Monomakh Snezhnyi):** Thức tỉnh từ lõi thí nghiệm \"Con Người Nguyên Sơ\" kết hợp máu thịt Băng Long Vương của nền văn minh cổ [[hyperborea]], ông thống nhất các **Tiên Tuyết (Snowland Fae)** và con người phương Bắc lập nên vương quốc Snezhnaya sơ khai. Trong bộ sách [[hymns-of-the-far-north|Thánh Ca Phương Bắc]], ông được gọi dưới danh xưng **Pakkaisukko**.\n  • **Băng Thần Đời 2 – Nữ Hoàng Băng Giá Anastasya Feodorovna Snezhnaya (The Tsaritsa):** Con gái của Pakkaisukko / người kế vị ngai vị Băng Thần sau khi triều đại của Belyi Tsar sụp đổ trong Đại Thảm Hoạ 500 năm trước.",
            "Theo [[hymns-of-the-far-north]], thời xa xưa Anastasya từng có mối tình sâu đậm với **Kẻ Đổ Bộ Thứ Ba – Saarelainen**. Khi Pakkaisukko đặt điều kiện thách cưới buộc Saarelainen phải mở cánh cổng của *\"Pohjola\"*, Thiên Lý (Đấng Nguyên Sơ cùng Kẻ Đến Sau) đã tàn nhẫn hành quyết Saarelainen và **xẻ thịt thi hài của chàng thành 7 chiếc [[gnosis]]**! Nỗi đau mất đi người yêu thương nhất cùng sự tàn khốc của Đại Thảm Hoạ [[khaenriah]] 500 năm trước đã khiến vị thần của \"Tình Yêu\" hoàn toàn hoá băng trái tim."
          ],
          en: [
            "The Cryo Archon throne of [[snezhnaya]] spans two rulers:\n  • **First Cryo Archon – The Belyi Tsar (Monomakh Snezhnyi):** Emerging from [[hyperborea]]'s \"Primordial Human\" core and Cryo Dragon Sovereign remains, he united the **Snowland Fae** and early humans to found Snezhnaya, remembered in [[hymns-of-the-far-north|Hymns of the Far North]] as **Pakkaisukko**.\n  • **Second Cryo Archon – Tsaritsa Anastasya Feodorovna Snezhnaya:** Succeeding the Belyi Tsar after the Cataclysm 500 years ago.",
            "Per [[hymns-of-the-far-north]], Anastasya was once betrothed to the **Third Descender, Saarelainen**. When Pakkaisukko demanded that Saarelainen open the gates of *\"Pohjola\"* to win her hand, the Heavenly Principles executed Saarelainen and **carved his remains into the seven [[gnosis|Gnoses]]**! Grief over her murdered lover and the horrors of the [[khaenriah]] Cataclysm froze the Goddess of Love's heart."
          ]
        }
      },
      {
        title: { vi: "Đạo diễn Pierro, 11 Quan Chấp Hành và Sắc Lệnh Sao Bạc", en: "Director Pierro, the Eleven Harbingers, and the Palestar Edict" },
        body: {
          vi: [
            "Để gom lại đủ 7 mảnh thi hài của Saarelainen (7 chiếc [[gnosis]]) và \"thiêu rụi thế giới cũ\", Nữ Hoàng Anastasya đã bắt tay với **Pierro** (\"The Jester\" / Quan Hề) – cựu ngự tiền pháp sư bất tử của Vương triều Nhật Thực tại [[khaenriah]] ([[pale-flame]]) – lập nên tổ chức **Fatui** và **11 Quan Chấp Hành** ([[capitano]], [[dottore]], [[columbina]], [[arlecchino]], [[wanderer]], La Signora [[crimson-witch-of-flames]]...).",
            "Hiện tại, sau khi thu thập được 6/7 Gnosis (chỉ còn thiếu Gnosis Hoả của [[mavuika]]) và ban hành **Sắc Lệnh Sao Bạc (Palestar Edict)** tại vùng tự trị Nod-Krai, Nữ Hoàng Anastasya và Pierro đang bước vào giai đoạn cuối của **Dự án Stuzha** nhằm đối đầu trực diện với Celestia."
          ],
          en: [
            "To reassemble all seven fragments of Saarelainen's remains (the seven [[gnosis|Gnoses]]) and \"burn away the old world\", Tsaritsa Anastasya joined with **Pierro** (\"The Jester\") – immortal former royal mage of [[khaenriah]] ([[pale-flame]]) – to found the **Fatui** and the **Eleven Harbingers** ([[capitano]], [[dottore]], [[columbina]], [[arlecchino]], [[wanderer]], La Signora [[crimson-witch-of-flames]]...).",
            "Having secured 6 of the 7 Gnoses and issued the **Palestar Edict** in Nod-Krai, Tsaritsa Anastasya and Pierro are advancing **Project Stuzha** toward the final confrontation with Celestia."
          ]
        }
      }
    ],
    theories: [],
    sources: [
      { label: "Fandom: Tsaritsa", url: "https://genshin-impact.fandom.com/wiki/Tsaritsa" },
      { label: "Fandom: Belyi Tsar", url: "https://genshin-impact.fandom.com/wiki/Belyi_Tsar" },
      { label: "Fandom: Pierro", url: "https://genshin-impact.fandom.com/wiki/Pierro" }
    ],
    related: ["snezhnaya", "hyperborea", "hymns-of-the-far-north", "khaenriah", "pale-flame", "gnosis", "delusion", "capitano", "dottore", "columbina", "arlecchino"]
  },

  {
    id: "columbina",
    type: "character",
    name: { vi: "Columbina (Kuutar – Nữ Thần Tam Nguyệt)", en: "Columbina (Kuutar – The Trilune Goddess)" },
    subtitle: { vi: "Thần Mặt Trăng của Nod-Krai & cựu Quan Chấp Hành thứ 3 \"The Damselette\" (Thiếu Nữ)", en: "Moon Goddess of Nod-Krai & Former Third Fatui Harbinger \"The Damselette\"" },
    region: { vi: "Đảo Hiisi, Nod-Krai (Snezhnaya)", en: "Hiisi Island, Nod-Krai (Snezhnaya)" },
    summary: {
      vi: "Sinh ra trên Đảo Hiisi dưới cái tên Kuutar (Thiếu Nữ Mặt Trăng) và được bộ tộc Hậu Duệ Sương Nguyệt tôn thờ như vị thần của họ. Sau khi rời bỏ Fatui và bị Dottore truy bắt, cô đã tiếp nhận toàn bộ quyền năng của Ba Chị Em Mặt Trăng để đăng thần thành Nữ Thần Tam Nguyệt.",
      en: "Born on Hiisi Island as Kuutar (the Moon Maiden) and worshipped by the Frostmoon Scions. After leaving the Fatui and being hunted by Dottore, she absorbed the authorities of the Three Moon Sisters to ascend as the Trilune Goddess."
    },
    sections: [
      {
        title: { vi: "Từ Thần Mặt Trăng Kuutar trên Đảo Hiisi đến ghế Quan Chấp Hành thứ 3", en: "From Moon Goddess Kuutar of Hiisi Island to Third Harbinger" },
        body: {
          vi: [
            "Khoảng 400–500 năm trước, Columbina chào đời trên **Đảo Hiisi** thuộc vùng biên viễn **[[snezhnaya|Nod-Krai]]** với thần tính mặt trăng bẩm sinh và được bộ tộc **Hậu Duệ Sương Nguyệt (Frostmoon Scions – hậu duệ của [[hyperborea]])** tôn làm vị thần bảo hộ của họ dưới tôn hiệu **Kuutar**.",
            "Về sau, thất vọng trước sự cuồng tín của bộ tộc, cô rời Đảo Hiisi và gia nhập hàng ngũ **Quan Chấp Hành Fatui** ở vị trí **Số 3 – \"The Damselette\" (Thiếu Nữ)**. Tuy nhiên, khi nhận ra [[tsaritsa|Fatui]] và đặc biệt là [[dottore]] chỉ xem cô như một \"nguồn năng lượng sống\" để khai thác quyền năng mặt trăng cổ đại, Columbina đã tự ý rời bỏ Fatui và rút về ẩn cư tại **Sảnh Ngân Nguyệt (Silvermoon Hall)** trên Đảo Hiisi."
          ],
          en: [
            "Roughly 400–500 years ago, Columbina was born on **Hiisi Island** in **[[snezhnaya|Nod-Krai]]** with innate lunar divinity and was adopted by the **Frostmoon Scions** (descendants of [[hyperborea]]) as their goddess, **Kuutar**.",
            "Growing disillusioned with the tribe, she later joined the **Fatui Harbingers** as **No. 3 – \"The Damselette\"**. Yet upon realizing the Fatui and [[dottore]] viewed her primarily as a vessel to siphon ancient lunar power, she left the organization and retreated to **Silvermoon Hall** on Hiisi Island."
          ]
        }
      },
      {
        title: { vi: "Sắc Lệnh Sao Bạc và sự thức tỉnh thành Nữ Thần Tam Nguyệt (Trilune Goddess)", en: "The Palestar Edict and Ascension as the Trilune Goddess" },
        body: {
          vi: [
            "Việc Columbina rời đi khiến Snezhnaya ban hành **Sắc Lệnh Sao Bạc (Palestar Edict)**. Trong khi hai người bạn thân trong hàng ngũ Quan Chấp Hành là **[[arlecchino]]** và **Sandrone** cố tình làm ngơ lệnh bắt giữ để bảo vệ cô, thì Quan Chấp Hành thứ 2 **[[dottore|Il Dottore]]** đã ráo riết vây bắt Columbina nhằm rút cạn quyền năng mặt trăng cho dự án của hắn.",
            "Giữa vòng vây của Dottore, Columbina bước qua **Cổng Mặt Trăng (Moon Gate)** tiến vào không gian **Phản Chiếu Của Mặt Trăng (Moon's Reflection)** – nơi **Ba Chị Em Mặt Trăng (Aria, Sonnet, Canon)** từng bị Long Vương Nibelung giam cầm từ thời cổ đại ([[moonlit-bamboo-forest]]). Tại đây, cô tiếp nhận trọn vẹn thẩm quyền của cả Hằng Nguyệt, Sương Nguyệt và Hồng Nguyệt, chính thức đăng thần trở thành **Nữ Thần Tam Nguyệt (Trilune Goddess)** và trở về cùng Nhà Lữ Hành đánh bại Dottore!"
          ],
          en: [
            "Her departure prompted the **Palestar Edict**. While her friends **[[arlecchino]]** and **Sandrone** refused to enforce her capture, Second Harbinger **[[dottore|Il Dottore]]** hunted and captured Columbina to siphon the Three Moons' power.",
            "Escaping through a **Moon Gate** into the **Moon's Reflection** – where the **Three Moon Sisters (Aria, Sonnet, Canon)** had been imprisoned since Nibelung's war ([[moonlit-bamboo-forest]]) – Columbina inherited the combined authorities of all three moons, ascending as the **Trilune Goddess** and returning alongside the Traveler to defeat Dottore!"
          ]
        }
      }
    ],
    theories: [],
    sources: [
      { label: "Fandom: Columbina", url: "https://genshin-impact.fandom.com/wiki/Columbina" },
      { label: "Fandom: Silvermoon Hall", url: "https://genshin-impact.fandom.com/wiki/Silvermoon_Hall" }
    ],
    related: ["snezhnaya", "hyperborea", "tsaritsa", "dottore", "arlecchino", "moonlit-bamboo-forest", "hymns-of-the-far-north"]
  },

  {
    id: "capitano",
    type: "character",
    name: { vi: "Il Capitano (Thrain)", en: "Il Capitano (Thrain)" },
    subtitle: { vi: "Quan Chấp Hành Đệ Nhất của Fatui – \"Trụ Cột Thiên Tinh\" của Khaenri'ah", en: "First of the Eleven Fatui Harbingers – \"Sentinel Knight\" of Khaenri'ah" },
    region: { vi: "Khaenri'ah / Natlan / Snezhnaya", en: "Khaenri'ah / Natlan / Snezhnaya" },
    summary: {
      vi: "Vị chỉ huy huyền thoại Thrain của Khaenri'ah mang trái tim cơ học chứa hàng trăm linh hồn chiến hữu, người đã dùng chính lời nguyền bất tử của mình để đánh bại quy tắc của Bóng Hình Cái Chết tại Natlan.",
      en: "The legendary Khaenri'ahn commander Thrain whose modified heart carried hundreds of fallen comrades' souls, and who used his own curse of immortality to defy the Shade of Death in Natlan."
    },
    sections: [
      {
        title: { vi: "Kỵ Sĩ Thiên Tinh Thrain và trái tim mang linh hồn đồng đội", en: "Sentinel Knight Thrain and the heart of fallen souls" },
        body: {
          vi: [
            "Tên thật của Il Capitano là **Thrain**, một vị tướng kiệt xuất của [[khaenriah]] thời Vương triều Nhật Thực với trái tim đã được cải tạo để có thể dung nạp tri thức và ký ức. Trong Đại Thảm Hoạ 500 năm trước, ông dẫn tàn quân đến [[natlan]] chiến đấu chống lại Vực Sâu cùng các chiến binh bộ tộc.",
            "Vì Địa Mạch của Natlan khi ấy bị tàn phá và người Khaenri'ah bị từ chối tiếp nhận, Thrain đã thu nhận hàng trăm linh hồn của cả đồng đội Khaenri'ah lẫn chiến sĩ Natlan vào trong chính trái tim mình – chịu đựng tiếng gào thét không dứt và sự mục ruỗng thể xác suốt 500 năm không một giấc ngủ."
          ],
          en: [
            "Il Capitano's true name is **Thrain**, a revered commander of [[khaenriah]]'s Eclipse Dynasty whose modified heart could store vast memories and consciousness. During the Cataclysm 500 years ago, he led his surviving Platoon to [[natlan]] to fight the Abyss alongside tribal warriors.",
            "Because Natlan's ley lines were shattered and Khaenri'ahn souls were rejected, Thrain absorbed hundreds of fallen Khaenri'ahn and Natlanese souls into his own heart – enduring their ceaseless voices and physical rot for 500 sleepless years."
          ]
        }
      },
      {
        title: { vi: "Nghịch lý bất tử trước Bóng Hình Cái Chết Ronova", en: "The paradox of immortality before Ronova, Shade of Death" },
        body: {
          vi: [
            "Sau trận chiến cuối cùng tại Natlan, khi **Ronova** (Bóng Hình của Cái Chết) đòi một sinh mạng tương xứng để trả giá cho việc [[mavuika]] sử dụng quyền năng của bà, Capitano đã bước lên đòi thế chỗ. Để giữ nguyên lời nguyền bất tử mà chính mình từng đặt lên người Khaenri'ah, Ronova buộc phải chấp nhận để cơ thể bất tử của Capitano hợp nhất với Chúa Tể Màn Đêm – giúp toàn bộ các linh hồn trong tim ông được siêu thoát vào Vương Quốc Dạ Hồn mới."
          ],
          en: [
            "After the final battle in Natlan, when **Ronova** (Shade of Death) demanded a death to pay for [[mavuika]]'s use of her power, Capitano stepped forward in Mavuika's stead. Rather than lift the curse of immortality she had placed on Khaenri'ahns, Ronova relented, allowing Capitano's undying body to merge with the Lord of the Night – delivering every soul in his heart into the renewed Night Kingdom."
          ]
        }
      }
    ],
    theories: [],
    sources: [{ label: "Fandom: Il Capitano", url: "https://genshin-impact.fandom.com/wiki/Il_Capitano" }],
    related: ["khaenriah", "natlan", "mavuika", "tsaritsa", "dainsleif", "pale-flame"]
  },

  {
    id: "dottore",
    type: "character",
    name: { vi: "Il Dottore (Zandik)", en: "Il Dottore (Zandik)" },
    subtitle: { vi: "Quan Chấp Hành Đệ Nhị của Fatui – \"Bác Sĩ\" (The Doctor)", en: "Second of the Eleven Fatui Harbingers – \"The Doctor\"" },
    region: { vi: "Sumeru / Snezhnaya", en: "Sumeru / Snezhnaya" },
    summary: {
      vi: "Học giả thiên tài bị trục xuất khỏi Giáo Viện Sumeru vì những thí nghiệm tàn nhẫn vượt ranh giới đạo đức, kẻ đã phân tách bản thân thành nhiều bản thể ở các độ tuổi khác nhau và nắm giữ bí mật về \"bầu trời giả\".",
      en: "A disgraced prodigy expelled from the Sumeru Akademiya for inhumane experiments, who sliced his own lifespan into autonomous segments and uncovered the truth of Teyvat's \"false sky\"."
    },
    sections: [
      {
        title: { vi: "Từ học giả bị trục xuất Zandik đến kẻ chế tạo thần nhân tạo", en: "From outcast scholar Zandik to manufacturer of artificial gods" },
        body: {
          vi: [
            "Các mảnh giấy ghi chép rải rác khắp rừng mưa và sa mạc [[sumeru]] cho thấy tên thật của Il Dottore là **Zandik** – một học giả trẻ bị Giáo Viện trục xuất vì nghiên cứu cỗ máy của [[khaenriah]] và thực hiện thí nghiệm bệnh Eleazar lên con người. Anh được Pierro chiêu mộ vào Fatui với lời hứa cung cấp tài nguyên vô hạn để \"chế tạo cả một vị thần\" ([[pale-flame]]).",
            "Cách đây 400 năm, chính Dottore đã giả danh kỹ sư Escher phá hoại Lò Luyện Mikage tại [[inazuma]] để biến [[wanderer|Kunikuzushi]] thành con tốt thí nghiệm ([[husk-of-opulent-dreams]]), và về sau dùng kỹ thuật từ con rối ấy để tạo ra các \"Phân Thân\" (Segments) của chính mình ở nhiều độ tuổi."
          ],
          en: [
            "Scattered research notes across [[sumeru]]'s rainforest and desert reveal Il Dottore's birth name as **Zandik** – a young scholar expelled from the Akademiya for researching [[khaenriah]]n constructs and conducting lethal Eleazar experiments on humans. Pierro recruited him into the Fatui with the promise of limitless resources to \"manufacture even a god\" ([[pale-flame]]).",
            "400 years ago, Dottore disguised himself as the engineer Escher to sabotage [[inazuma]]'s Mikage Furnace, manipulating [[wanderer|Kunikuzushi]] into becoming his test subject ([[husk-of-opulent-dreams]]) and reverse-engineering the puppet's design to create autonomous \"Segments\" of himself at different ages."
          ]
        }
      }
    ],
    theories: [],
    sources: [{ label: "Fandom: Il Dottore", url: "https://genshin-impact.fandom.com/wiki/Il_Dottore" }],
    related: ["sumeru", "snezhnaya", "wanderer", "nahida", "pale-flame", "husk-of-opulent-dreams", "delusion"]
  },

  {
    id: "wanderer",
    type: "character",
    name: { vi: "Kẻ Lang Thang (Wanderer / Scaramouche)", en: "Wanderer (Scaramouche / Kunikuzushi)" },
    subtitle: { vi: "Con rối nguyên mẫu của Lôi Thần – cựu Quan Chấp Hành thứ 6 \"The Balladeer\"", en: "Prototype puppet of the Electro Archon – former Sixth Harbinger \"The Balladeer\"" },
    region: { vi: "Inazuma / Sumeru", en: "Inazuma / Sumeru" },
    summary: {
      vi: "Con rối thần thánh bị bỏ rơi vì rơi nước mắt trong giấc mơ, trải qua ba lần phản bội ở Tatarasuna trước khi trở thành Quan Chấp Hành thứ 6 và tự xoá bỏ danh tính cũ trong Cây Thế Giới Irminsul.",
      en: "A divine puppet discarded for shedding tears in his sleep, who endured three betrayals in Tatarasuna, became the Sixth Harbinger, and rewrote his own history inside the World Tree Irminsul."
    },
    sections: [
      {
        title: { vi: "Ba lần phản bội và sự thật bên trong Irminsul", en: "The three betrayals and the truth inside Irminsul" },
        body: {
          vi: [
            "Được [[raiden-ei]] chế tạo làm vật chứa thử nghiệm cho [[gnosis]] Lôi ([[husk-of-opulent-dreams]], [[pale-flame]]), Kunikuzushi bị coi là quá yếu mềm nên được đặt ngủ yên tại Shakkei Pavilion. Khi tự thức tỉnh, anh kết bạn với Katsuragi và Niwa Hisahide tại Tatarasuna ([[inazuma]]), nhưng âm mưu của [[dottore]] khiến anh lầm tưởng Niwa đã phản bội mình.",
            "Sau thất bại trong vai trò vị thần nhân tạo Shouki no Kami tại [[sumeru]], khi biết sự thật từ [[nahida]] rằng chính Dottore là kẻ sát hại Niwa, anh lao vào [[irminsul]] tự xoá sự tồn tại của \"Kabukimono\" và \"Scaramouche\" khỏi lịch sử thế giới – để chứng minh rằng dù có thể thay đổi ký ức của thế giới, bản chất lịch sử vẫn không thể bị xoá bỏ."
          ],
          en: [
            "Crafted by [[raiden-ei]] as a test vessel for the Electro [[gnosis]] ([[husk-of-opulent-dreams]], [[pale-flame]]), Kunikuzushi was deemed too gentle and left slumbering in Shakkei Pavilion. Awakening on his own, he befriended Katsuragi and Niwa Hisahide in Tatarasuna ([[inazuma]]), until [[dottore]]'s plot deceived him into believing Niwa had betrayed him.",
            "After his defeat as the artificial god Shouki no Kami in [[sumeru]], learning from [[nahida]] that Dottore had murdered Niwa, he plunged into [[irminsul]] to erase \"Kabukimono\" and \"Scaramouche\" from the world's memory – proving that while Irminsul can alter memories, it cannot undo the physical events of the past."
          ]
        }
      }
    ],
    theories: [],
    sources: [{ label: "Fandom: Wanderer", url: "https://genshin-impact.fandom.com/wiki/Wanderer" }],
    related: ["inazuma", "sumeru", "raiden-ei", "nahida", "dottore", "irminsul", "husk-of-opulent-dreams", "pale-flame"]
  },

  {
    id: "arlecchino",
    type: "character",
    name: { vi: "Arlecchino (Peruere)", en: "Arlecchino (Peruere)" },
    subtitle: { vi: "Quan Chấp Hành Đệ Tứ của Fatui – \"The Knave\" & Hậu duệ Vương triều Hắc Nhật", en: "Fourth of the Eleven Fatui Harbingers – \"The Knave\" & Scion of the Crimson Moon" },
    region: { vi: "Fontaine / Snezhnaya / Khaenri'ah", en: "Fontaine / Snezhnaya / Khaenri'ah" },
    summary: {
      vi: "\"Cha\" của Căn Nhà Hơi Ấm tại Fontaine, người mang dòng máu cổ xưa của Vương triều Hắc Nhật (Crimson Moon Dynasty) của Khaenri'ah chảy trong huyết quản под hình dạng ngọn lửa tịnh hoá.",
      en: "\"Father\" of the House of the Hearth in Fontaine, carrying the ancient bloodline of Khaenri'ah's Crimson Moon Dynasty within her veins as balemoon fire."
    },
    sections: [
      {
        title: { vi: "Huyết mạch Hắc Nhật và mối liên hệ với sách cổ Perinheri", en: "The Balemoon bloodline and the ancient book Perinheri" },
        body: {
          vi: [
            "Tên thật của Arlecchino là **Peruere**. Dù hoạt động như một người [[fontaine]], Pierro ([[tsaritsa]]) đã tiết lộ cho cô biết nguồn gốc thật sự của ngọn lửa đen đỏ ăn mòn hai bàn tay cô: cô là hậu duệ mang dòng máu của **Vương triều Hắc Nhật** (Crimson Moon Dynasty) thuộc [[khaenriah]] cổ đại, và khuyên cô hãy đọc cuốn sách truyền thuyết [[perinheri]] để hiểu về tiền thân của Căn Nhà Hơi Ấm.",
            "Ngọn lửa Hắc Nhật của Peruere có khả năng đốt cháy cả ký ức và \"tàn ảnh\", giải phóng linh hồn mà không làm tổn thương thể xác – thứ vũ khí mà cô dự định một ngày nào đó sẽ dùng để chống lại cả định mệnh lẫn dự án tàn nhẫn của [[dottore]] và các Quan Chấp Hành khác."
          ],
          en: [
            "Arlecchino's birth name is **Peruere**. Though raised in [[fontaine]], Pierro ([[tsaritsa]]) revealed the true origin of the blackening curse creeping up her arms: she carries the bloodline of ancient [[khaenriah]]'s **Crimson Moon Dynasty**, advising her to read the legendary book [[perinheri]] to understand the ancient roots of the House of the Hearth.",
            "Peruere's balemoon fire can burn away memories and phantoms alike, freeing a person from the House without taking their life – a power she prepares to wield when the time comes to rebel against fate itself."
          ]
        }
      }
    ],
    theories: [],
    sources: [{ label: "Fandom: Arlecchino", url: "https://genshin-impact.fandom.com/wiki/Arlecchino" }],
    related: ["khaenriah", "perinheri", "fontaine", "snezhnaya", "tsaritsa", "furina", "gnosis"]
  },

  {
    id: "albedo",
    type: "character",
    name: { vi: "Albedo", en: "Albedo" },
    subtitle: { vi: "Kreideprinz – Đội trưởng Giả kim của Đội Kỵ Sĩ Tây Phong", en: "Kreideprinz – Chief Alchemist of the Knights of Favonius" },
    region: { vi: "Mondstadt / Khaenri'ah", en: "Mondstadt / Khaenri'ah" },
    summary: {
      vi: "Nhà giả kim thiên tài được tạo ra từ đất phấn trắng (Chalk) bởi Rhinedottir (Gold) – một trong Năm Tội Đồ của Khaenri'ah. Thường nghiên cứu ở Long Tích Tuyết Sơn.",
      en: "A genius homunculus alchemist created from primordial chalk by Rhinedottir (Gold) – one of the Five Sinners of Khaenri'ah. Often conducts research on Dragonspine."
    },
    sections: [
      {
        title: { vi: "Tạo vật từ Đá Phấn Trắng và di sản của Gold", en: "Born of Primordial Chalk and Gold's legacy" },
        body: {
          vi: [
            "Albedo là con người nhân tạo (homunculus) thành công nhất của đại giả kim thuật sư [[rhinedottir]] (Gold) thuộc [[khaenriah]] – cũng là người đã tạo ra rồng độc Durin ([[festering-desire]]), nguyên mẫu Dorian/Subject Two và đàn Chó Săn Ma Vật. Trước khi biến mất sau khi tìm thấy \"Trái Tim của Naberius\", Rhinedottir gửi gắm Albedo cùng thanh kiếm [[cinnabar-spindle]] cho Alice ([[hexenzirkel]]) đưa tới [[mondstadt]].",
            "Tại phế tích của [[sal-vindagnyr]] trên Long Tích Tuyết Sơn, Albedo cảm nhận sự đồng điệu kỳ lạ với xác của rồng Durin – \"người anh em\" cùng một mẹ tạo ra – và từng dặn Nhà Lữ Hành hãy ngăn chặn anh nếu một ngày anh mất kiểm soát."
          ],
          en: [
            "Albedo is the crowning homunculus creation of master alchemist [[rhinedottir]] (Gold) of [[khaenriah]] – who also birthed the poison dragon Durin ([[festering-desire]]), Subject Two, and the Rifthounds. Before vanishing after finding the \"Heart of Naberius\", Rhinedottir entrusted Albedo and [[cinnabar-spindle]] to Alice ([[hexenzirkel]]) in [[mondstadt]].",
            "Among the ruins of [[sal-vindagnyr]] on Dragonspine, Albedo feels a deep resonance with Durin's remains – his \"brother\" by the same creator – and once asked the Traveler to stop him should he ever lose control."
          ]
        }
      }
    ],
    theories: [
      {
        title: { vi: "Bốn giai đoạn giả kim: Nigredo, Albedo, Citrinitas, Rubedo", en: "Four stages of the Magnum Opus: Nigredo, Albedo, Citrinitas, Rubedo" },
        body: {
          vi: "Trong giả kim thuật phương Tây, quá trình tạo ra Hòn Đá Phù Thuỷ gồm bốn bước: Nigredo (hoá đen – ứng với Durin), Albedo (hoá trắng – ứng với Albedo), Citrinitas (hoá vàng) và Rubedo (hoá đỏ – sự hoàn thiện tối hậu).",
          en: "In Western alchemy, the Magnum Opus has four stages: Nigredo (blackening – Durin), Albedo (whitening – Albedo), Citrinitas (yellowing), and Rubedo (reddening – final perfection)."
        },
        sources: [{ label: "r/Genshin_Lore – Albedo Magnum Opus", url: "https://www.reddit.com/r/Genshin_Lore/search/?q=Albedo%20Magnum%20Opus" }]
      }
    ],
    sources: [{ label: "Fandom: Albedo", url: "https://genshin-impact.fandom.com/wiki/Albedo" }],
    related: ["rhinedottir", "khaenriah", "sal-vindagnyr", "mondstadt", "festering-desire", "cinnabar-spindle", "hexenzirkel"]
  },

  {
    id: "rhinedottir",
    type: "character",
    name: { vi: "Rhinedottir (\"Gold\")", en: "Rhinedottir (\"Gold\")" },
    subtitle: { vi: "Đại Giả Kim Thuật Sư của Khaenri'ah – Một trong Năm Tội Đồ & Thành viên Hexenzirkel", en: "Great Alchemist of Khaenri'ah – One of the Five Sinners & Hexenzirkel Member" },
    region: { vi: "Khaenri'ah", en: "Khaenri'ah" },
    summary: {
      vi: "Bậc thầy của nghệ thuật giả kim Khemia, người nắm giữ quyền năng \"Báng bổ Sự Sống\" trong Năm Tội Đồ của Khaenri'ah, mẹ của Albedo, Durin và Elynas, đồng thời mang mật danh \"R\" trong Hội Ma Nữ.",
      en: "Master of Khemia alchemy and bearer of \"Blasphemy Against Life\" among the Five Sinners of Khaenri'ah, mother of Albedo, Durin, and Elynas, and codenamed \"R\" in the Hexenzirkel."
    },
    sections: [
      {
        title: { vi: "Nghệ thuật Khemia, bầy quái vật Vực Sâu và Trái tim của Naberius", en: "The Art of Khemia, Abyssal monsters, and the Heart of Naberius" },
        body: {
          vi: [
            "Tại [[khaenriah]] vốn nghèo nàn sinh vật tự nhiên dưới lòng đất, Rhinedottir đã đẩy nghệ thuật giả kim **Khemia** (tạo ra sự sống từ đất đá vô tri) lên đến đỉnh cao. Khi cùng Vedrfolnir, Surtalogi ([[skirk]]), Hroptatyr và Rerir chia nhau sức mạnh Vực Sâu trở thành **Năm Tội Đồ**, bà đã tạo ra một bầy quái vật tràn ngập Teyvat trong Đại Thảm Hoạ: Chó Săn Ma Vật (Rifthounds), Vua Thú Hoàng Kim, ác long Durin ([[festering-desire]]) và đại quái thú Elynas tại [[fontaine]].",
            "Sau thảm hoạ, bà tạo ra [[albedo]] từ đất phấn trắng nguyên sơ, tham gia Hội Ma Nữ [[hexenzirkel]] dưới mật danh \"R\", và biến mất sau khi cùng Albedo tìm thấy thánh di vật **\"Trái Tim của Naberius\"** trong một bí cảnh sâu thẳm."
          ],
          en: [
            "In underground [[khaenriah]], where natural flora and fauna were scarce, Rhinedottir elevated **Khemia** (the alchemy of creating life from inert matter) to its pinnacle. After dividing Abyssal power alongside Vedrfolnir, Surtalogi ([[skirk]]), Hroptatyr, and Rerir to become the **Five Sinners**, her creations flooded Teyvat during the Cataclysm: Rifthounds, the Golden Wolflord, the poison dragon Durin ([[festering-desire]]), and the great beast Elynas in [[fontaine]].",
            "Following the Cataclysm, she birthed [[albedo]] from primordial chalk, joined the [[hexenzirkel]] witches as \"R\", and vanished after discovering the artifact **\"Heart of Naberius\"** inside a deep domain with Albedo."
          ]
        }
      }
    ],
    theories: [
      {
        title: { vi: "Naberius có phải là Bóng Hình của Sự Sống?", en: "Was Naberius the Shade of Life?" },
        body: {
          vi: "Tên \"Naberius\" là một ma thần trong Ars Goetia (giống tên các vị thần của Celestia). Cộng đồng suy đoán Naberius từng là Bóng Hình của Sự Sống (người tạo ra Egeria), và việc Rhinedottir tìm thấy \"Trái Tim của Naberius\" giúp bà tiếp cận trực tiếp quyền năng Sự Sống của Đấng Nguyên Sơ.",
          en: "Because \"Naberius\" is an Ars Goetia demon name (like Celestia's gods), the community theorizes Naberius was associated with the Shade of Life (who created Egeria), and that finding the \"Heart of Naberius\" granted Rhinedottir direct access to primordial Life authority."
        },
        sources: [{ label: "r/Genshin_Lore – Heart of Naberius & Rhinedottir", url: "https://www.reddit.com/r/Genshin_Lore/search/?q=Heart%20of%20Naberius" }]
      }
    ],
    sources: [{ label: "Fandom: Rhinedottir", url: "https://genshin-impact.fandom.com/wiki/Rhinedottir" }],
    related: ["khaenriah", "albedo", "dainsleif", "skirk", "hexenzirkel", "festering-desire", "cinnabar-spindle"]
  },

  {
    id: "skirk",
    type: "character",
    name: { vi: "Skirk", en: "Skirk" },
    subtitle: { vi: "Kiếm khách Vực Sâu – Sư phụ của Tartaglia & Đồ đệ của Surtalogi (\"Kẻ Cực Ác\")", en: "Abyssal Swordswoman – Master of Tartaglia & Disciple of Surtalogi (\"The Foul\")" },
    region: { vi: "Vực Sâu / Biển Nguyên Thuỷ", en: "The Abyss / Primordial Sea" },
    summary: {
      vi: "Nữ kiếm khách bí ẩn sống trong những tầng sâu của Vực Sâu suốt hàng thế kỷ, người đã truyền dạy võ nghệ cho Childe (Tartaglia) và tiết lộ bản chất thật sự của 7 chiếc Gnosis.",
      en: "A mysterious swordswoman residing in the depths of the Abyss for centuries, who trained Childe (Tartaglia) and revealed the true nature of the seven Gnoses as the Third Descender's remains."
    },
    sections: [
      {
        title: { vi: "Đồ đệ của Tội Đồ Surtalogi và thông tin về Kẻ Đổ Bộ Thứ Ba", en: "Disciple of the Sinner Surtalogi and the secret of the Third Descender" },
        body: {
          vi: [
            "Skirk là đồ đệ của **Surtalogi** (\"The Foul\" / Kẻ Cực Ác) – một trong Năm Tội Đồ của [[khaenriah]] (cùng với [[rhinedottir]] và Vedrfolnir) và là chủ nhân của con quái vật vũ trụ **Thôn Tinh Kình Ngư** đã suýt nhấn chìm [[fontaine]].",
            "Trong cuộc trò chuyện với [[neuvillette]] sau trận chiến ở Biển Nguyên Thuỷ, chính Skirk là người đầu tiên khẳng định rằng bảy chiếc [[gnosis]] của Thất Thần được chế tác từ **di hài của Kẻ Đổ Bộ Thứ Ba**, và khuyên Neuvillette nên vứt bỏ nó để tránh rước lấy bất hạnh."
          ],
          en: [
            "Skirk is the disciple of **Surtalogi** (\"The Foul\") – one of the Five Sinners of [[khaenriah]] (alongside [[rhinedottir]] and Vedrfolnir) and master of the cosmic **All-Devouring Narwhal** that nearly drowned [[fontaine]].",
            "In her conversation with [[neuvillette]] after the battle in the Primordial Sea, Skirk revealed that the seven [[gnosis|Gnoses]] of The Seven were crafted from the **remains of the Third Descender**, advising Neuvillette to discard the Hydro Gnosis to avoid the curse bound to those remains."
          ]
        }
      }
    ],
    theories: [],
    sources: [{ label: "Fandom: Skirk", url: "https://genshin-impact.fandom.com/wiki/Skirk" }],
    related: ["khaenriah", "rhinedottir", "dainsleif", "neuvillette", "fontaine", "gnosis"]
  },

  /* ===================== VŨ KHÍ / WEAPONS (5) ===================== */
  {
    id: "frostbearer",
    type: "weapon",
    name: { vi: "Trái Chịu Lạnh (Frostbearer)", en: "Frostbearer" },
    subtitle: { vi: "Pháp khí ★4 – trái cây kết tinh từ cây cổ thụ Long Tích Tuyết Sơn", en: "4★ Catalyst – crystallized fruit of Dragonspine's ancient tree" },
    region: { vi: "Mondstadt / Sal Vindagnyr", en: "Mondstadt / Sal Vindagnyr" },
    summary: {
      vi: "Pháp khí kết tinh từ nhựa băng của cây cổ thụ bạc ở vương quốc cổ Sal Vindagnyr, ghi lại điềm báo của nàng công chúa và khoảnh khắc Đinh Băng Thiên Không giáng xuống.",
      en: "A catalyst crystallized from the frost-sap of Sal Vindagnyr's silver tree, recording the princess's premonition and the moment the Skyfrost Nail fell."
    },
    sections: [
      {
        title: { vi: "Giấc mơ về con rồng đen và ngày cây bạc gãy đổ", en: "The dream of the black dragon and the shattering of the silver tree" },
        body: {
          vi: [
            "Mô tả của Frostbearer kể lại góc nhìn của vương quốc [[sal-vindagnyr]]: nàng công chúa sinh ra dưới tán cây bạc vào đêm trăng tròn đã nằm mơ thấy một con rồng đen khổng lồ phun máu độc nhuộm đỏ bầu trời (điềm báo chính xác về việc rồng Durin sẽ rơi xuống núi hàng nghìn năm sau, gắn với [[festering-desire]]).",
            "Nhưng trước cả khi giấc mơ ấy ứng nghiệm, một cây đinh lạnh lẽo từ bầu trời đã giáng thẳng xuống làm vỡ vụn cây cổ thụ. Nàng công chúa đã đem cành cây đẹp nhất ghép lên một cây non khác nhưng vẫn không qua khỏi cơn bão tuyết, để lại chiến binh ngoại bang mang thanh [[snow-tombed-starsilver]]."
          ],
          en: [
            "Frostbearer's description recounts [[sal-vindagnyr]]'s history: the princess born beneath the silver tree on a full-moon night dreamed of a black dragon shrouding the sun in scarlet poison (a premonition of Durin falling upon the mountain millennia later, tied to [[festering-desire]]).",
            "Yet long before that dream came to pass, a spike of bone-chilling cold fell from the heavens and shattered the silver tree. The princess grafted its finest branch onto another sapling, but perished in the endless blizzard, leaving behind the outlander warrior bearing [[snow-tombed-starsilver]]."
          ]
        }
      }
    ],
    theories: [],
    sources: [{ label: "Fandom: Frostbearer", url: "https://genshin-impact.fandom.com/wiki/Frostbearer" }],
    related: ["sal-vindagnyr", "snow-tombed-starsilver", "festering-desire"]
  },

  {
    id: "snow-tombed-starsilver",
    type: "weapon",
    name: { vi: "Tuyết Vùi Tinh Ngân (Snow-Tombed Starsilver)", en: "Snow-Tombed Starsilver" },
    subtitle: { vi: "Đại kiếm ★4 – di vật được giấu sau phòng bức bích hoạ Sal Vindagnyr", en: "4★ Claymore – relic hidden behind Sal Vindagnyr's fresco chamber" },
    region: { vi: "Mondstadt / Sal Vindagnyr", en: "Mondstadt / Sal Vindagnyr" },
    summary: {
      vi: "Thanh đại kiếm bằng quặng Tinh Ngân mà nàng công chúa của Sal Vindagnyr trao cho chiến binh ngoại bang Imunlaukr – cùng một lời hứa đoàn tụ đã vĩnh viễn chôn vùi dưới tuyết.",
      en: "A Starsilver greatsword gifted by the princess of Sal Vindagnyr to the outlander warrior Imunlaukr – bound to a promise of reunion forever buried beneath the snow."
    },
    sections: [
      {
        title: { vi: "Imunlaukr và bức tranh chưa kịp vẽ xong", en: "Imunlaukr and the unfinished fresco" },
        body: {
          vi: [
            "Chiến binh ngoại bang Imunlaukr từng dừng chân tại [[sal-vindagnyr]] và đem lòng gắn bó với nàng công chúa của vương quốc. Khi Đinh Băng Thiên Không giáng xuống biến núi xanh thành địa ngục băng giá, công chúa trao cho anh thanh kiếm Starsilver để anh lên đường tìm lời giải đáp từ bên ngoài, hứa sẽ vẽ cho anh một bức tranh mới khi anh trở về.",
            "Khi Imunlaukr quay lại, cả vương quốc đã chết cóng. Quá tuyệt vọng vì tin rằng các vị thần trên trời chỉ xem nỗi thống khổ của phàm nhân là trò tiêu khiển, ông cắm thanh kiếm lại trong hầm mộ rồi bỏ đi tìm những chiến trường đẫm máu để mua vui cho thiên giới – trở thành tổ tiên của gia tộc Imunlaukr ở [[mondstadt]]."
          ],
          en: [
            "The outlander warrior Imunlaukr stayed in [[sal-vindagnyr]] and grew close to the kingdom's princess. When the Skyfrost Nail turned the verdant mountain into a frozen hell, the princess gave him this Starsilver greatsword as he departed to seek answers outside, promising to paint a new fresco for him upon his return.",
            "When Imunlaukr returned, the entire kingdom had frozen to death. Despairing that the gods only viewed mortal suffering as entertainment, he left the greatsword behind in the tomb and set off to wage bloody battles to amuse the heavens – becoming the ancestor of [[mondstadt]]'s Imunlaukr clan."
          ]
        }
      }
    ],
    theories: [],
    sources: [{ label: "Fandom: Snow-Tombed Starsilver", url: "https://genshin-impact.fandom.com/wiki/Snow-Tombed_Starsilver" }],
    related: ["sal-vindagnyr", "frostbearer", "old-mondstadt", "mondstadt"]
  },

  {
    id: "festering-desire",
    type: "weapon",
    name: { vi: "Răng Nanh Rỉ Sét (Festering Desire)", en: "Festering Desire" },
    subtitle: { vi: "Kiếm đơn ★4 – thanh kiếm nhiễm máu rồng độc Durin", en: "4★ Sword – blade steeped in the poison dragon Durin's blood" },
    region: { vi: "Mondstadt / Khaenri'ah", en: "Mondstadt / Khaenri'ah" },
    summary: {
      vi: "Thanh kiếm bị nguyền rủa chứa đựng tâm nguyện ngây thơ nhưng bi thảm của ác long Durin – tạo vật của nhà giả kim Rhinedottir.",
      en: "A cursed blade containing the innocent yet tragic final wishes of the poison dragon Durin – creation of the alchemist Rhinedottir."
    },
    sections: [
      {
        title: { vi: "Giấc mơ ngây thơ của một con quái vật Vực Sâu", en: "The innocent dream of an Abyssal monster" },
        body: {
          vi: [
            "Trái ngược với vẻ ngoài kinh hoàng khi tấn công [[mondstadt]] trong Đại Thảm Hoạ, mô tả của Festering Desire tiết lộ tâm trí thật sự của rồng Durin: nó gọi [[rhinedottir]] (Gold của [[khaenriah]]) là \"mẹ\", và tưởng rằng mình đang cất tiếng hát, nhảy múa cùng Phong Long Dvalin và vị thi sĩ [[venti|Barbatos]].",
            "Chỉ đến khi ngã xuống đỉnh [[sal-vindagnyr]] trong cái lạnh cắt da, Durin mới chúc phúc cho mẹ, cho \"những đứa trẻ sau này\" (như [[albedo]]) và tiếc nuối vì không kịp nghe hết khúc nhạc của Dvalin."
          ],
          en: [
            "Contrary to its terrifying rampage over [[mondstadt]] during the Cataclysm, Festering Desire's description reveals Durin's true mind: it called [[rhinedottir]] (Gold of [[khaenriah]]) \"mother\", and believed it was merely singing and dancing joyfully with Dvalin and the bard [[venti|Barbatos]].",
            "Only as it lay dying in the biting cold of [[sal-vindagnyr]] did Durin offer its final blessings to its mother and \"later children\" (such as [[albedo]]), regretting that it could not hear the end of Dvalin's song."
          ]
        }
      }
    ],
    theories: [],
    sources: [{ label: "Fandom: Festering Desire", url: "https://genshin-impact.fandom.com/wiki/Festering_Desire" }],
    related: ["albedo", "rhinedottir", "sal-vindagnyr", "khaenriah", "frostbearer", "cinnabar-spindle"]
  },

  {
    id: "cinnabar-spindle",
    type: "weapon",
    name: { vi: "Con Thoi Chu Sa (Cinnabar Spindle)", en: "Cinnabar Spindle" },
    subtitle: { vi: "Kiếm đơn ★4 – lời nhắn gửi của Rhinedottir dành cho Albedo", en: "4★ Sword – Rhinedottir's message to Albedo" },
    region: { vi: "Mondstadt / Khaenri'ah", en: "Mondstadt / Khaenri'ah" },
    summary: {
      vi: "Thanh kiếm được rèn từ loại quặng không thuộc về thế giới này, chứa lời nhắn nhủ trực tiếp của đại giả kim thuật sư Rhinedottir dành cho tạo vật hoàn hảo nhất của bà – Albedo.",
      en: "A sword forged from otherworldly ore, carrying a direct message from the master alchemist Rhinedottir to her greatest creation, Albedo."
    },
    sections: [
      {
        title: { vi: "\"Một chú thiên nga cô độc bằng đất phấn trắng\"", en: "\"A solitary swan of primordial chalk\"" },
        body: {
          vi: [
            "Trong mô tả của Cinnabar Spindle, [[rhinedottir]] gọi [[albedo]] là *\"ngôi sao rực rỡ của ta, chú thiên nga cô độc bằng đất phấn trắng\"*, khuyến khích anh hãy tiếp tục vươn tới tận cùng của chân lý và hoàn thành **Đại Công Trình** (Magnum Opus) từ một trái tim không tạp chất – trái ngược với những thất bại trước đó như rồng độc Durin ([[festering-desire]])."
          ],
          en: [
            "In Cinnabar Spindle's lore, [[rhinedottir]] addresses [[albedo]] as her *\"resplendent star, solitary swan of primordial chalk\"*, urging him to reach the far side of philosophy and complete the **Magnum Opus** from a heart free of impurity – in contrast to earlier failed creations like Durin ([[festering-desire]])."
          ]
        }
      }
    ],
    theories: [],
    sources: [{ label: "Fandom: Cinnabar Spindle", url: "https://genshin-impact.fandom.com/wiki/Cinnabar_Spindle" }],
    related: ["albedo", "rhinedottir", "festering-desire", "khaenriah"]
  },

  {
    id: "elegy-for-the-end",
    type: "weapon",
    name: { vi: "Tiếng Thở Dài Vô Tận (Elegy for the End)", en: "Elegy for the End" },
    subtitle: { vi: "Cung ★5 – khúc bi ca về Rostam và thiếu nữ Rosalyne thời Đại Thảm Hoạ", en: "5★ Bow – the elegy of Rostam and Rosalyne during the Cataclysm" },
    region: { vi: "Mondstadt", en: "Mondstadt" },
    summary: {
      vi: "Cây cung lưu giữ khúc hát bi thương của Mondstadt cách đây 500 năm: cái chết của Phó đoàn trưởng Rostam trong cuộc viễn chinh Khaenri'ah và nỗi tuyệt vọng biến Rosalyne thành Hoả Ma Nữ.",
      en: "A bow preserving Mondstadt's sorrowful ballad from 500 years ago: the death of Deputy Rostam on the Khaenri'ah expedition and the grief that turned Rosalyne into the Crimson Witch."
    },
    sections: [
      {
        title: { vi: "Hiệp sĩ Sói Con và cô gái đi du học ở Sumeru", en: "The Wolf Pup Knight and the maiden studying in Sumeru" },
        body: {
          vi: [
            "500 năm trước tại [[mondstadt]], Đại đoàn trưởng Arundolyn và Phó đoàn trưởng **Rostam** (\"Sói Con\" – người sáng tạo ra Kiếm Thuật Tây Phong) cùng đem lòng bảo vệ quê hương. Trước khi thiếu nữ **Rosalyne-Kruzchka Lohefalter** lên đường sang Giáo Viện [[sumeru]] du học, Rostam đã đem lòng yêu tiếng hát của cô.",
            "Khi Đại Thảm Hoạ [[khaenriah]] nổ ra, Rostam tử trận nơi chiến trường. Arundolyn đau đớn từ bỏ thanh kiếm của mình, còn Rosalyne khi trở về từ Sumeru chỉ thấy cảnh quê hương điêu tàn và người yêu đã khuất – khiến cô thiêu đốt chính cơ thể mình thành ngọn lửa sống của **Hoả Ma Nữ** ([[crimson-witch-of-flames]])."
          ],
          en: [
            "500 years ago in [[mondstadt]], Grand Master Arundolyn and his friend Deputy **Rostam** (the \"Wolf Pup\" who created Favonius Bladework) guarded the nation. Before the young maiden **Rosalyne-Kruzchka Lohefalter** departed to study at the [[sumeru]] Akademiya, Rostam fell in love with her singing.",
            "When the [[khaenriah]] Cataclysm broke out, Rostam died in battle. Heartbroken, Arundolyn laid down his greatsword forever, while Rosalyne returned from Sumeru to find her lover gone and the world in ruins – driving her to turn her own body into liquid fire as the **[[crimson-witch-of-flames|Crimson Witch of Flames]]**."
          ]
        }
      }
    ],
    theories: [],
    sources: [{ label: "Fandom: Elegy for the End", url: "https://genshin-impact.fandom.com/wiki/Elegy_for_the_End" }],
    related: ["mondstadt", "crimson-witch-of-flames", "pale-flame", "venti"]
  },

  {
    id: "staff-of-homa",
    type: "weapon",
    name: { vi: "Trượng Hộ Ma (Staff of Homa)", en: "Staff of Homa" },
    subtitle: { vi: "Vũ khí cán dài ★5 – Nghi lễ hoả táng tà khí Ma Thần và nguồn gốc Vãng Sinh Đường tại Liyue", en: "5★ Polearm – Karmic cremation ritual and the origins of Liyue's Wangsheng Funeral Parlor" },
    region: { vi: "Liyue", en: "Liyue" },
    summary: {
      vi: "Cây trượng nghi lễ bằng gỗ đỏ dùng trong nghi thức hoả táng từ thời Chiến tranh Ma Thần tại Liyue nhằm đốt sạch tà khí và oán niệm phát tán từ xác các Ma Thần bại trận – khởi nguồn của Vãng Sinh Đường ngày nay.",
      en: "A ritual firewood staff used during the Archon War in Liyue to incinerate the karmic miasma festering from slain gods – founding the tradition of the Wangsheng Funeral Parlor."
    },
    sections: [
      {
        title: { vi: "Ngọn lửa thanh tẩy nghiệp chướng và sự ra đời của Vãng Sinh Đường", en: "The purifying fire of karma and the birth of Wangsheng Funeral Parlor" },
        body: {
          vi: [
            "Trong Chiến tranh Ma Thần tại **[[liyue]]**, xác của vô số vị thần bại trận không thể tự phân huỷ mà bốc lên thứ tà khí đen tối gây ra dịch bệnh khủng khiếp cho con người (cùng nguồn nghiệp chướng đã làm các Dạ Xoa phát điên). Một vị thầy thuốc nhìn thấy người thân chết dần vì dịch bệnh đã cầm lấy cây trượng gỗ khô châm lửa thiêu đốt thi thể người chết và niệm thần chú: *\"Chỉ có ngọn lửa không ràng buộc mới có thể giữ trọn sự tinh khiết của đất trời.\"*",
            "Từ nghi thức hoả táng bằng **Trượng Hộ Ma** đó, truyền thống của **Vãng Sinh Đường (Wangsheng Funeral Parlor)** ra đời để canh giữ ranh giới giữa sự sống và cái chết tại Liyue (truyền tới Đời thứ 77 là **Hu Tao**, với cố vấn là chính **[[zhongli]]**)."
          ],
          en: [
            "During the Archon War in **[[liyue]]**, the festering remains of defeated gods unleashed plagues upon mortals. A doctor lit a ritual staff of dry firewood to cremate the dead and purify the karmic miasma, founding the tradition of the **Wangsheng Funeral Parlor** (now led by 77th Director **Hu Tao** alongside **[[zhongli]]**)."
          ]
        }
      }
    ],
    theories: [],
    sources: [{ label: "Fandom: Staff of Homa", url: "https://genshin-impact.fandom.com/wiki/Staff_of_Homa" }],
    related: ["liyue", "zhongli", "guili-assembly"]
  },

  {
    id: "unforged",
    type: "weapon",
    name: { vi: "Kiếm Vô Công (The Unforged)", en: "The Unforged" },
    subtitle: { vi: "Trọng kiếm ★5 – Khế ước ngàn năm và trận huyết chiến giữa Morax và Long Vương Nham Azhdaha", en: "5★ Claymore – The millennial covenant and final clash between Morax and Geo Dragon Azhdaha" },
    region: { vi: "Liyue", en: "Liyue" },
    summary: {
      vi: "Thanh trọng kiếm bằng đá vàng không có lưỡi sắc, ghi lại câu chuyện Nham Vương Đế Quân Morax chạm khắc đôi mắt cho Long Vương Nham mù loà Azhdaha và lời hẹn ước đau đớn rằng nếu một ngày Azhdaha làm hại con người, chính Morax sẽ phong ấn người bạn của mình.",
      en: "A blunt golden-stone greatsword chronicling how Rex Lapis carved eyes for the blind Geo Dragon Azhdaha and their solemn pact that should Erosion ever drive Azhdaha to harm humanity, Morax would seal his old friend away."
    },
    sections: [
      {
        title: { vi: "Đôi mắt của Rồng Đất và bi kịch của \"Sự Bào Mòn\"", en: "The Earth Dragon's Eyes and the Tragedy of Erosion" },
        body: {
          vi: [
            "Cốt truyện của **Kiếm Vô Công** (cùng chuỗi vũ khí Nham của Liyue) kể lại rằng thuở sơ khai, **[[zhongli|Morax]]** tìm thấy chúa tể của loài rồng đất là **Azhdaha** nằm sâu dưới lòng núi [[liyue]]. Cảm động trước mong ước được nhìn thấy thế giới mặt đất của con rồng mù, Morax đã điểm nhãn cho Azhdaha và lập khế ước: *\"Ta ban cho ngươi đôi mắt để nhìn thế gian, nhưng nếu một ngày ngươi phá vỡ hoà bình của con người, đừng trách ta vô tình.\"*",
            "Hàng thiên niên kỷ trôi qua, việc con người khai thác mỏ tại [[chasm-civilization|Vực Đá Sâu]] làm đứt gãy địa mạch cộng với quy luật **\"Bào Mòn\" (Erosion)** đã xoá sạch ký ức của Azhdaha về người bạn cũ. Đúng như lời thề xưa, Morax cùng các vị Tiên Nhân đã chiến đấu và phong ấn Azhdaha dưới gốc Phục Long Thụ tại núi Hổ Lao."
          ],
          en: [
            "**The Unforged** recounts how **[[zhongli|Morax]]** granted sight to the blind Geo Dragon **Azhdaha** under a solemn contract: should Azhdaha ever turn against humanity, Morax would seal him away. When ley line damage at [[chasm-civilization|The Chasm]] and **Erosion** eroded Azhdaha's mind, Morax and three adepti fulfilled that painful oath."
          ]
        }
      }
    ],
    theories: [],
    sources: [{ label: "Fandom: The Unforged", url: "https://genshin-impact.fandom.com/wiki/The_Unforged" }],
    related: ["liyue", "zhongli", "chasm-civilization"]
  },

  {
    id: "mistsplitter",
    type: "weapon",
    name: { vi: "Ánh Sáng Đêm Sương Mù (Mistsplitter Reforged)", en: "Mistsplitter Reforged" },
    subtitle: { vi: "Kiếm đơn ★5 – Thanh đao được Lôi Thần ban cho võ sĩ Takamine và bi kịch của vu nữ Asase Hibiki", en: "5★ Sword – The blade gifted by the Shogun to Takamine and the tragedy of shrine maiden Asase Hibiki" },
    region: { vi: "Inazuma", en: "Inazuma" },
    summary: {
      vi: "Thanh kiếm báu được đúc lại từ những mảnh vỡ sau trận Đại Thảm Hoạ 500 năm trước tại Inazuma: kể về mối tình đơn phương giữa võ sĩ Takamine (người đánh cược cây cung với vu nữ Asase Hibiki) và kết cục bi thảm trên đảo Seirai.",
      en: "A reforged Inazuman blade from the Cataclysm 500 years ago, recounting the tragic bond between the hatamoto Takamine and the shrine maiden Asase Hibiki of Seirai Island."
    },
    sections: [
      {
        title: { vi: "Lời hứa của võ sĩ Takamine và cơn bão sét trên Đảo Seirai", en: "Takamine's wager and the storm of Seirai Island" },
        body: {
          vi: [
            "Cách đây 500 năm tại **[[inazuma]]**, võ sĩ cận vệ **Takamine** được **[[raiden-ei|Tướng Quân]]** ban tặng thanh bảo đao **Mistsplitter**. Trước khi ra trận chống lại thuỷ triều Vực Sâu trong Đại Thảm Hoạ [[khaenriah]], anh đã đánh cược cây cung quý *Sấm Sét Rung Động (Thundering Pulse)* với nữ vu nữ trẻ **Asase Hibiki** (học trò của Hồ Tiên Kitsune Saiguu) và hứa sẽ sống sót trở về.",
            "Trong trận chiến đẫm máu với quái vật Vực Sâu, thanh Mistsplitter bị gãy vụn và bản thân Takamine bị bóng tối Vực Sâu nuốt chửng biến thành tà quỷ. Để ngăn hạm đội của Takamine cập bến, Asase Hibiki đã tháo gỡ kết giới trên đảo Seirai, giải phóng cơn bão sấm sét của **Lôi Điểu Kapatcir** ([[tsurumi-civilization]]) xé toạc cả hòn đảo. Những mảnh vỡ của thanh đao बाद này được các thợ rèn đúc lại dưới cái tên **Mistsplitter Reforged**."
          ],
          en: [
            "500 years ago in **[[inazuma]]**, the samurai **Takamine** – wielder of the Shogun's **Mistsplitter** – wagered his bow *Thundering Pulse* with shrine maiden **Asase Hibiki** before marching into the Cataclysm. When his blade shattered and he was corrupted by the Abyss, Hibiki unsealed the storm of the **Thunderbird Kapatcir** ([[tsurumi-civilization]]) over Seirai Island."
          ]
        }
      }
    ],
    theories: [],
    sources: [{ label: "Fandom: Mistsplitter Reforged", url: "https://genshin-impact.fandom.com/wiki/Mistsplitter_Reforged" }],
    related: ["inazuma", "raiden-ei", "tsurumi-civilization"]
  },

  /* ===================== THÁNH DI VẬT / ARTIFACTS (6) ===================== */
  {
    id: "pale-flame",
    type: "artifact",
    name: { vi: "Lửa Trắng Xám (Pale Flame)", en: "Pale Flame" },
    subtitle: { vi: "Bộ thánh di vật – Phiên bản 1.5", en: "Artifact set – Version 1.5" },
    region: { vi: "Snezhnaya / Khaenri'ah", en: "Snezhnaya / Khaenri'ah" },
    summary: {
      vi: "Bộ thánh di vật quan trọng bậc nhất về nguồn gốc của tổ chức Fatui: mỗi mảnh kể lại quá khứ của một Quan Chấp Hành (Pierro, Signora, Dottore, Pantalone, Scaramouche).",
      en: "The foundational artifact set on the origins of the Fatui Harbingers: each piece recounts the past of a specific Harbinger (Pierro, Signora, Dottore, Pantalone, Scaramouche)."
    },
    quote: {
      text: {
        vi: "Vậy thì hãy đeo chiếc mặt nạ này lên để nhạo báng thế gian, và viết lại quy luật của vận mệnh.",
        en: "Then, let me don this mask in mockery of the world as I go forth and rewrite the rules of destiny."
      },
      source: {
        vi: "Pale Flame – Mocking Mask (Pierro)",
        en: "Pale Flame – Mocking Mask (Pierro)"
      }
    },
    chapters: [
      {
        title: { vi: "1. Hoa Không Tì Vết (Stainless Bloom) – La Signora", en: "1. Stainless Bloom (Flower) – La Signora" },
        body: {
          vi: [
            "Một đoá hoa nhân tạo xanh biếc cứng cáp và không bao giờ tàn phai. Khi người khách từ phương xa (**Pierro**) tìm thấy **[[crimson-witch-of-flames|Diệm Liệt Ma Nữ (Rosalyne)]]**, ngọn lửa lỏng trong cơ thể cô đã gần như đốt cạn trái tim cô thành tro tàn.",
            "Pierro nói với cô: *\"Ngươi đã làm kinh ngạc cả thế gian bằng biển lửa, nhưng ngọn lửa đó rồi cũng sẽ nuốt chửng chính ngươi. Hãy nhận lấy chiếc **[[delusion|Delusion]]** băng giá này, dùng băng sương của Nữ Hoàng để dập tắt ngọn lửa đang gặm nhấm quá khứ, và cùng chúng ta tẩy rửa sự tàn nhẫn của thế giới này.\"* Từ khoảnh khắc đó, Hoả Ma Nữ biến mất dưới lớp băng trắng và trở thành Quan Chấp Hành thứ 8 – **La Signora**."
          ],
          en: [
            "A hard, artificial blue flower whose petals shall never wither. When the outlander (**Pierro**) found the **[[crimson-witch-of-flames|Crimson Witch of Flames (Rosalyne)]]**, the liquid fire inside her body had nearly burned her heart to ash.",
            "Pierro offered her a Cryo **[[delusion|Delusion]]** forged with the Tsaritsa's frost to encase her undying flames, recruiting her as the Eighth Fatui Harbinger, **La Signora**."
          ]
        }
      },
      {
        title: { vi: "2. Lông Vũ Hiền Y (Wise Doctor's Pinion) – Il Dottore", en: "2. Wise Doctor's Pinion (Plume) – Il Dottore" },
        body: {
          vi: [
            "Một chiếc lông vũ sắc bén đến mức không giống của loài chim. Khi học giả trẻ tuổi **Zandik** bị Giáo Viện **[[sumeru]]** trục xuất và gọi là \"quái vật điên loạn\" vì học thuyết coi con người chỉ là một cỗ máy sinh học phức tạp, anh chỉ cười nhạo sự hẹp hòi của những kẻ tự xưng là trí thức.",
            "Chỉ cần cải tạo linh kiện và truyền dẫn năng lượng thần thánh, một con người phàm trần hoàn toàn có thể đạt được sức mạnh vượt trên cả thần linh. Khi **Pierro** tìm đến và hứa hẹn cung cấp nguồn tài nguyên vô tận tại **[[snezhnaya]]**, Zandik đã bật cười lớn trước cái tên mỉa mai mà vị Quan Chấp Hành Thủ Lĩnh đặt cho mình: **\"[[dottore|Bác Sĩ]]\" (Il Dottore)**."
          ],
          en: [
            "An ominous pinion of unnatural sharpness. Expelled from the **[[sumeru]]** Akademiya as a monster for his thesis that humans are merely complex machines that can be enhanced beyond the gods, **Zandik** laughed uproariously when **Pierro** offered him limitless resources in **[[snezhnaya]]** and bestowed upon him the ironic title **\"[[dottore|The Doctor]]\" (Il Dottore)**."
          ]
        }
      },
      {
        title: { vi: "3. Thời Khắc Ngưng Đọng (Moment of Cessation) – Pantalone", en: "3. Moment of Cessation (Sands) – Pantalone" },
        body: {
          vi: [
            "Một chiếc đồng hồ bỏ túi bằng bạc không thể mở nắp, nhưng vẫn tích tắc trôi theo nhịp điệu của tiền tài. Chủ nhân của nó – **Pantalone (Quan Chấp Hành thứ 9 – \"Kẻ Giàu Có\")** – sinh ra trong cảnh bần hàn tận cùng và chưa một lần nhận được ánh nhìn của thần linh hay một chiếc **[[vision]]**.",
            "Ông tự hỏi: tại sao thần linh (như Nham Thần **[[zhongli|Morax]]** của **[[liyue]]**) lại nắm độc quyền tạo ra đồng tiền **Mora** – thứ chi phối máu thịt và vận mệnh của con người? Vì thế, Pantalone thề sẽ dùng ngân hàng Bắc Quốc để thâu tóm toàn bộ mạch máu kinh tế của Teyvat, trở thành \"trái tim bơm tiền cho cả thế giới\", để đến khi thời khắc điểm, con người sẽ lật đổ cả thần quyền bằng chính đồng tiền của họ."
          ],
          en: [
            "A pocket watch whose cover cannot be opened. Its owner, **Pantalone (The 9th Harbinger – Regrator)**, was born into abject poverty and never received a **[[vision]]**. Questioning why the gods (**[[zhongli|Rex Lapis]]** of **[[liyue]]**) monopolized the minting of **Mora**, he vowed to become the financial heart pumping money through the world until mortals could overthrow divine authority."
          ]
        }
      },
      {
        title: { vi: "4. Chiếc Ly Vượt Trội (Surpassing Cup) – Scaramouche", en: "4. Surpassing Cup (Goblet) – Scaramouche" },
        body: {
          vi: [
            "Một chiếc ly tinh xảo không thể nhìn ra tuổi tác. \"Hắn\" sinh ra vốn là một tạo vật xinh đẹp vượt trội hơn mọi con người, được **[[raiden-ei|Lôi Thần Beelzebul]]** chế tạo để làm vật chứa thử nghiệm cho **[[gnosis]]** hệ Lôi. Nhưng vì hắn đã rơi lệ trong giấc mơ, người tạo ra hắn cho rằng hắn quá yếu đuối nên không nỡ huỷ diệt mà chỉ phong ấn hắn trong cung điện Shakkei Pavilion.",
            "Tỉnh dậy và lang thang khắp nhân gian với một trái tim trống rỗng, sau những bi kịch đẫm máu tại Tatarasuna (**[[husk-of-opulent-dreams]]**), hắn gia nhập Fatui dưới danh hiệu Quan Chấp Hành thứ 6 **[[wanderer|Scaramouche]] (\"Người Lính Quèn\")**."
          ],
          en: [
            "An intricately-made cup whose age cannot be determined. Created with peerless beauty by **[[raiden-ei|Beelzebul]]** as a prototype vessel for the Electro **[[gnosis]]**, he shed tears in his sleep and was spared destruction, sealed instead within Shakkei Pavilion. Awakening on his own to wander among mortals ([[husk-of-opulent-dreams]]), he later joined the Fatui as the Sixth Harbinger **[[wanderer|Scaramouche]] (The Balladeer)**."
          ]
        }
      },
      {
        title: { vi: "5. Mặt Nạ Nhạo Báng (Mocking Mask) – Pierro", en: "5. Mocking Mask (Circlet) – Pierro" },
        body: {
          vi: [
            "Chiếc mặt nạ nửa mặt của **Pierro (Quan Chấp Hành Thủ Lĩnh – \"Quan Hề\")**. Học vấn của ông tại **[[khaenriah]]** không sánh bằng các bậc hiền giả hoàng gia, nên lời can ngăn của ông về việc \"đừng xé rách bức màn tội lỗi và trêu ngươi thần linh\" đã hoàn toàn bị **Vua Irmin** phớt lờ.",
            "Khi cơn thịnh nộ của thiên giới giáng xuống huỷ diệt quê hương và nguyền rủa ông bằng sự bất tử, Pierro tuyên bố: *\"Vì máu trên người ta không thể gột rửa được nữa, vậy thì ta sẽ trở thành Quan Hề cười nhạo số mệnh. Ta sẽ đi theo Bệ Hạ (**[[tsaritsa|Nữ Hoàng Băng Giá]]**) – người thấu hiểu nỗi đau của ta – đeo chiếc mặt nạ này lên để nhạo báng thế gian và viết lại quy luật của vận mệnh!\"*"
          ],
          en: [
            "The half-mask of **Pierro (Director of the Harbingers – The Jester)**. Because his erudition did not match the royal sages of **[[khaenriah]]**, he failed to stop **King Irmin** from tearing away the veil of sin and provoking divine wrath.",
            "Cursed with immortality after his homeland fell, Pierro pledged himself to Her Majesty the **[[tsaritsa]]**: *\"Since the stain of my compatriots' blood cannot be washed away, I shall become The Jester who laughs at fate, donning this mask in mockery of the world to rewrite the rules of destiny.\"*"
          ]
        }
      }
    ],
    sections: [
      {
        title: { vi: "Năm mảnh di vật – Năm Quan Chấp Hành", en: "Five artifact pieces – Five Fatui Harbingers" },
        body: {
          vi: [
            "• **Mocking Mask (Nón) – Pierro (Quan Chấp Hành Đệ Nhất)**: Ngự tiền pháp sư của [[khaenriah]], người không thể ngăn cản Vua Irmin và các hiền giả xé rách bức màn tội lỗi. Mang nỗi hận với cả thiên giới lẫn sự ngu muội của quê hương, ông đeo mặt nạ hề và lập lời thề với [[tsaritsa|Băng Thần]].",
            "• **Stainless Bloom (Hoa) – La Signora (Rosalyne)**: Hoả Ma Nữ ([[crimson-witch-of-flames]]) thiêu đốt chính sinh mạng mình sau Đại Thảm Hoạ, được Pierro trao [[delusion]] hệ Băng để kìm hãm ngọn lửa vĩnh cửu.",
            "• **Wise Doctor's Pinion (Lông Vũ) – [[dottore|Il Dottore]] (Zandik)**: Kẻ bị Giáo Viện [[sumeru]] trục xuất vì coi cơ thể con người chỉ là cỗ máy có thể cải tạo thành thần.",
            "• **Moment of Cessation (Đồng Hồ) – Pantalone**: Kẻ sinh ra trong nghèo khó, chưa từng được thần linh ban [[vision]], quyết tâm nắm giữ huyết mạch tiền tệ (Mora của [[liyue]]) để thách thức thần quyền.",
            "• **Surpassing Cup (Ly) – [[wanderer|Scaramouche]] (Kunikuzushi)**: Con rối nguyên mẫu bị [[raiden-ei|Lôi Thần]] bỏ lại tại [[inazuma]], gia nhập Fatui sau chuỗi bi kịch tại Tatarasuna ([[husk-of-opulent-dreams]])."
          ],
          en: [
            "• **Mocking Mask (Circlet) – Pierro (The Jester)**: A royal mage of [[khaenriah]] who failed to stop King Irmin and the sages from tearing away the veil of sin. Carrying wrath toward both the heavens and his homeland's folly, he donned a jester's mask and swore allegiance to the [[tsaritsa]].",
            "• **Stainless Bloom (Flower) – La Signora (Rosalyne)**: The [[crimson-witch-of-flames|Crimson Witch of Flames]] who burned her own mortal body after the Cataclysm, given a Cryo [[delusion]] by Pierro to contain her undying fire.",
            "• **Wise Doctor's Pinion (Plume) – [[dottore|Il Dottore]] (Zandik)**: An outcast expelled from the [[sumeru]] Akademiya for viewing the human body as a machine that can be engineered into a god.",
            "• **Moment of Cessation (Sands) – Pantalone**: Born into poverty and never favored with a [[vision]], he resolved to seize control of the world's wealth ([[liyue]]'s Mora) to challenge the gods.",
            "• **Surpassing Cup (Goblet) – [[wanderer|Scaramouche]] (Kunikuzushi)**: The divine puppet prototype discarded by [[raiden-ei]] in [[inazuma]], recruited into the Fatui after the tragedies of Tatarasuna ([[husk-of-opulent-dreams]])."
          ]
        }
      }
    ],
    theories: [],
    sources: [{ label: "Fandom: Pale Flame", url: "https://genshin-impact.fandom.com/wiki/Pale_Flame" }],
    related: ["snezhnaya", "khaenriah", "tsaritsa", "dottore", "wanderer", "crimson-witch-of-flames", "husk-of-opulent-dreams", "delusion"]
  },

  {
    id: "crimson-witch-of-flames",
    type: "artifact",
    name: { vi: "Diệm Liệt Ma Nữ Rực Cháy (Crimson Witch of Flames)", en: "Crimson Witch of Flames" },
    subtitle: { vi: "Bộ thánh di vật Hoả – bi kịch của Rosalyne trước khi trở thành La Signora", en: "Pyro Artifact Set – Rosalyne's tragedy before becoming La Signora" },
    region: { vi: "Mondstadt / Snezhnaya", en: "Mondstadt / Snezhnaya" },
    summary: {
      vi: "Bộ thánh di vật ghi lại câu chuyện đẫm nước mắt của thiếu nữ Rosalyne người Mondstadt: người đã từ bỏ thân xác con người để hoá thành ngọn lửa lỏng thiêu rụi lũ quái vật Vực Sâu sau cái chết của người yêu Rostam.",
      en: "An artifact set chronicling the tragedy of Rosalyne of Mondstadt, who forsook her mortal flesh to become liquid fire purging Abyssal monsters after the death of her lover Rostam."
    },
    chapters: [
      {
        title: { vi: "1. Hoa Viêm Của Ma Nữ (Witch's Flower of Blaze)", en: "1. Witch's Flower of Blaze (Flower)" },
        body: {
          vi: [
            "Một đoá hoa từng được Diệm Liệt Ma Nữ chạm vào khi bà mới bắt đầu bước chân vào con đường lửa. Hàng trăm năm trước, khi Đại Thảm Hoạ ập xuống **[[mondstadt]]**, thiếu nữ **Rosalyne-Kruzchka Lohefalter** đã đánh mất người cô yêu thương nhất (**Rostam** – [[elegy-for-the-end]]) cùng tất cả những lời hứa hẹn về tương lai.",
            "Cô không còn thiết tha với những khúc ca bình yên nữa. Để thiêu rụi toàn bộ lũ ma vật Vực Sâu đã cướp đi hạnh phúc của mình, cô quyết định đánh đổi cả mạng sống và ký ức tươi đẹp để biến thành **Diệm Liệt Ma Nữ**."
          ],
          en: [
            "A flower touched by the witch who once dreamed of burning away all the demons in the world. Five hundred years ago, when the Cataclysm struck **[[mondstadt]]**, the maiden **Rosalyne-Kruzchka Lohefalter** lost her beloved (**Rostam** – [[elegy-for-the-end]]) and chose to burn away all monsters in the world."
          ]
        }
      },
      {
        title: { vi: "2. Lông Vũ Thiêu Đốt Của Ma Nữ (Witch's Ever-Burning Plume)", en: "2. Witch's Ever-Burning Plume (Plume)" },
        body: {
          vi: [
            "Một chiếc lông chim rực cháy không bao giờ tắt. Từ bỏ hoàn toàn nghệ thuật ca hát, Rosalyne dùng bí thuật cổ xưa biến chính máu thịt của mình thành **lửa lỏng (liquid fire)** chảy trong huyết quản. Dù đi đến bất cứ đâu, cô cũng chỉ thiêu đốt quái vật và ma thú của Vực Sâu, tuyệt đối không làm hại một con người vô tội nào."
          ],
          en: [
            "A bird feather that burns eternally. Abandoning her songs, Rosalyne transmuted her own mortal flesh into **liquid fire**, scorching only Abyssal monsters and never harming an innocent human."
          ]
        }
      },
      {
        title: { vi: "3. Thời Khắc Diệt Vong Của Ma Nữ (Witch's End Time)", en: "3. Witch's End Time (Sands)" },
        body: {
          vi: [
            "Một chiếc đồng hồ cát mà bên trong không phải là cát, mà là dòng lửa lỏng rực cháy. Đó là món quà mà trước khi lên đường du học tại Giáo Viện **[[sumeru]]**, chàng hiệp sĩ **Rostam** đã trao tặng cho Rosalyne để đếm ngược thời gian đến ngày cô trở về **[[mondstadt]]**. Nhưng khi chiếc đồng hồ chạy hết vòng của nó, người tặng nó đã nằm lại vĩnh viễn trên chiến trường viễn chinh."
          ],
          en: [
            "A timepiece inside which flows liquid fire instead of sand. Gifted to Rosalyne by **Rostam** before she left to study at the **[[sumeru]]** Akademiya to count the hours until her return to **[[mondstadt]]** – yet by the time its cycle ended, Rostam had already fallen in the Cataclysm."
          ]
        }
      },
      {
        title: { vi: "4. Trái Tim Lửa Của Ma Nữ (Witch's Heart Flames)", en: "4. Witch's Heart Flames (Goblet)" },
        body: {
          vi: [
            "Một chiếc bình từng chứa đựng ngọn lửa lỏng của Diệm Liệt Ma Nữ. Dù cô cứu giúp con người khỏi ma vật, gương mặt bị huỷ hoại bởi lửa và hơi nóng khủng khiếp toả ra từ cơ thể cô lại khiến người đời kinh hãi, xua đuổi và nguyền rủa cô là \"Ma Nữ\". Trái tim nhân hậu của thiếu nữ năm xưa dần bị thiêu cháy thành tro bụi trong nỗi cô độc cùng cực."
          ],
          en: [
            "An urn that once held liquid fire. Though she saved mortals from monsters, her flame-scarred face terrified the very people she protected into shunning and cursing her as a \"Witch\", burning her heart to ash in solitude."
          ]
        }
      },
      {
        title: { vi: "5. Nón Ma Nữ焦 Cháy (Witch's Scorching Hat)", en: "5. Witch's Scorching Hat (Circlet)" },
        body: {
          vi: [
            "Chiếc nón rộng vành truyền thống của một ma nữ, giúp che khuất tầm nhìn khỏi những ánh mắt sợ hãi xung quanh và để cô chỉ nhìn thấy những con quái vật đang bốc cháy trước mặt mình. Khi sinh mạng cô chỉ còn là tàn lửa cuối cùng, **Pierro** ([[pale-flame]]) đã xuất hiện và trao cho cô chiếc [[delusion]] hệ Băng của [[snezhnaya]]."
          ],
          en: [
            "A wide-brimmed hat that shielded the Crimson Witch's eyes from the fearful gazes of the world, leaving only burning monsters in her sight until **Pierro** ([[pale-flame]]) found her and encased her flames in a Cryo [[delusion]]."
          ]
        }
      }
    ],
    sections: [
      {
        title: { vi: "Từ thiếu nữ ca hát đến Hoả Ma Nữ bị người đời khiếp sợ", en: "From singing maiden to feared Crimson Witch" },
        body: {
          vi: [
            "Trước Đại Thảm Hoạ 500 năm trước, Rosalyne là một thiếu nữ [[mondstadt]] yêu ca hát đi du học tại Giáo Viện [[sumeru]]. Khi trở về thấy quê hương chìm trong biển máu và người yêu là hiệp sĩ Rostam đã tử trận ([[elegy-for-the-end]]), cô dùng bí thuật biến máu thịt mình thành lửa lỏng để đốt cháy toàn bộ ma vật trên thế gian.",
            "Dù cô chỉ thiêu đốt quái vật và không bao giờ hại người vô tội, gương mặt biến dạng và ngọn lửa bất diệt khiến người dân khiếp sợ gọi cô là \"Ma Nữ\". Khi trái tim cô sắp cháy thành tro, Pierro ([[pale-flame]]) đã tìm thấy cô, trao chiếc [[delusion]] hệ Băng để đóng băng ngọn lửa quá khứ và đưa cô vào hàng ngũ Quan Chấp Hành thứ 8 **La Signora** của [[snezhnaya]]."
          ],
          en: [
            "Before the Cataclysm 500 years ago, Rosalyne was a young [[mondstadt]] maiden who loved singing and studied at the [[sumeru]] Akademiya. Returning to find her homeland ravaged and her beloved knight Rostam dead ([[elegy-for-the-end]]), she used ancient arts to turn her own flesh into liquid fire to incinerate all monsters.",
            "Though she burned only monsters and never harmed humans, her scarred visage and undying flames terrified people into branding her a \"Witch\". As her heart neared ash, Pierro ([[pale-flame]]) found her, granting a Cryo [[delusion]] to freeze her past and recruiting her as the Eighth Harbinger **La Signora** of [[snezhnaya]]."
          ]
        }
      }
    ],
    theories: [],
    sources: [{ label: "Fandom: Crimson Witch of Flames", url: "https://genshin-impact.fandom.com/wiki/Crimson_Witch_of_Flames" }],
    related: ["mondstadt", "snezhnaya", "elegy-for-the-end", "pale-flame", "delusion"]
  },

  {
    id: "husk-of-opulent-dreams",
    type: "artifact",
    name: { vi: "Giấc Mộng Phù Hoa (Husk of Opulent Dreams)", en: "Husk of Opulent Dreams" },
    subtitle: { vi: "Bộ thánh di vật Nham – Phiên bản 2.3 (Biên niên sử của Kunikuzushi / Scaramouche)", en: "Geo Artifact Set – Version 2.3 (Chronicle of Kunikuzushi / Scaramouche)" },
    region: { vi: "Inazuma", en: "Inazuma" },
    summary: {
      vi: "Bộ thánh di vật kể trọn vẹn cuộc đời của con rối Kunikuzushi tại Inazuma trước khi trở thành Kẻ Lang Thang: từ giấc mơ rơi lệ ở Shakkei Pavilion đến ba bi kịch tại Tatarasuna.",
      en: "An artifact set recounting the full Inazuman past of the puppet Kunikuzushi before becoming the Wanderer: from shedding tears in Shakkei Pavilion to his three tragedies in Tatarasuna."
    },
    chapters: [
      {
        title: { vi: "1. Thời Khắc Nở Rộ (Bloom Times) – Shakkei Pavilion & Tatarasuna", en: "1. Bloom Times (Flower) – Shakkei Pavilion & Tatarasuna" },
        body: {
          vi: [
            "Một món trang sức hình đoá hoa sáu cánh bằng vàng. Chàng thiếu niên con rối (**[[wanderer|Kunikuzushi]]**) vốn được tạo ra để chứa đựng \"trái tim\" ([[gnosis]]), nhưng vì đã rơi lệ trong giấc ngủ nên bị **[[raiden-ei]]** đặt nằm lại trong Shakkei Pavilion. Khi tự mình tỉnh dậy và bước ra thế giới, người đầu tiên phát hiện ra anh bên bờ biển Nazuchi là võ sĩ **Katsuragi** và quan giám sát lò luyện **Niwa Hisahide** của **Tatarasuna**.",
            "Tại Tatarasuna, họ đối xử với anh như một con người thực sự, dạy anh rèn kiếm và cùng anh múa kiếm dưới ánh trăng."
          ],
          en: [
            "A six-petaled golden ornament. Left slumbering inside Shakkei Pavilion by **[[raiden-ei]]** after shedding tears in his sleep, the puppet **[[wanderer|Kunikuzushi]]** awoke on his own and was welcomed into **Tatarasuna** by samurai **Katsuragi** and armorer **Niwa Hisahide**."
          ]
        }
      },
      {
        title: { vi: "2. Lông Vũ Phù Hoa (Plume of Luxury) – Tín vật của Lôi Thần", en: "2. Plume of Luxury (Plume) – Token of the Electro Archon" },
        body: {
          vi: [
            "Chiếc lông vũ bằng vàng mà Raiden Ei để lại bên người Kunikuzushi làm bằng chứng cho thân phận cao quý của anh. Khi lò luyện Mikage tại Tatarasuna gặp sự cố rò rỉ tà khí (do **[[dottore|Il Dottore]]** hoá trang thành thợ cơ khí Fontaine tên Escher ngầm phá hoại), Kunikuzushi đã mang chiếc lông vũ vàng này vượt biển tới Thành Inazuma để cầu cứu **Yae Miko** và Lôi Thần.",
            "Nhưng vì lúc đó Raiden Ei đã lui vào Nhất Tâm Tịnh Thổ tu luyện Vĩnh Hằng, Kunikuzushi hiểu lầm rằng mẹ mình đã hoàn toàn thờ ơ trước sinh mạng của người dân Tatarasuna."
          ],
          en: [
            "The golden feather left with Kunikuzushi by Raiden Ei as proof of his identity. When the Mikage Furnace crisis struck Tatarasuna (sabotaged by **[[dottore|Il Dottore]]** disguised as Escher), Kunikuzushi brought this feather to Narukami Island to seek help, only to find Ei had already entered the Plane of Euthymia."
          ]
        }
      },
      {
        title: { vi: "3. Khúc Ca Sinh Mệnh (Song of Life) – Cái chết của cậu bé ở Yashiori", en: "3. Song of Life (Sands) – The Boy on Yashiori Island" },
        body: {
          vi: [
            "Rời khỏi Tatarasuna với trái tim tan nát vì tưởng rằng Niwa Hisahide đã giết người bỏ trốn (thực chất Dottore đã sát hại Niwa rồi lấy trái tim của Niwa đặt vào chiếc hộp bảo vệ để cứu Kunikuzushi khỏi tà khí lò luyện), con rối chuyển đến sống trong một túp lều nhỏ với một cậu bé mồ côi mang bệnh nặng do độc khí Tatarigami trên đảo Yashiori.",
            "Họ hứa sẽ sống bên nhau mãi mãi, nhưng một ngày mưa gió trở về, cậu bé đã qua đời trên giường bệnh. Nỗi đau bị \"phản bội\" lần thứ ba khiến Kunikuzushi phóng hoả đốt rụi túp lều."
          ],
          en: [
            "Leaving Tatarasuna heartbroken under Dottore's lie that Niwa had betrayed him, the puppet lived in a small hut with a sickly orphan boy on Yashiori Island. When the boy succumbed to Tatarigami illness, Kunikuzushi viewed the boy's death as a third betrayal and burned down the hut."
          ]
        }
      },
      {
        title: { vi: "4. Hồ Lô Tỉnh Mộng (Calabash of Awakening) – Danh hiệu Kunikuzushi", en: "4. Calabash of Awakening (Goblet) – The Name Kunikuzushi" },
        body: {
          vi: [
            "Một quả hồ lô trang trí bằng vàng đen. Đeo mặt nạ của kịch truyền thống Inazuma, con rối tự đặt cho mình cái tên **\"Kunikuzushi\"** (Kẻ Huỷ Diệt Quốc Gia – vai phản diện soán ngôi trong tuồng cổ) và ra tay đánh sập ba trong năm trường phái rèn kiếm của **Raiden Gokaden** để trả thù Inazuma, chỉ tha cho hậu duệ của Niwa (tổ tiên của **Kaedehara Kazuha**)."
          ],
          en: [
            "A gourd adorned with black and gold. Taking the theatrical villain name **\"Kunikuzushi\"** (Country Destroyer), the puppet orchestrated the downfall of three of the five **Raiden Gokaden** sword-forging schools, sparing only the descendant of the Kaedehara/Niwa line."
          ]
        }
      },
      {
        title: { vi: "5. Nón Hình Hài (Skeletal Hat) – Bước chân của Kẻ Lang Thang", en: "5. Skeletal Hat (Circlet) – The Wanderer's Path" },
        body: {
          vi: [
            "Chiếc nón tre rộng vành che mưa nắng cho người khách lữ hành. Từ con rối không tên, đến Kabukimono ở Tatarasuna, rồi Quan Chấp Hành thứ 6 **Scaramouche** của Fatui, mọi giấc mộng phù hoa về việc sở hữu một trái tim cuối cùng cũng chỉ là chiếc vỏ rỗng trước khi anh tự đối diện với toàn bộ quá khứ của mình trong **[[irminsul]]**."
          ],
          en: [
            "A bamboo hat that sheltered a wanderer from wind and rain across centuries – from nameless puppet to Kabukimono, to Sixth Harbinger **Scaramouche**, before finally confronting his true past within **[[irminsul]]**."
          ]
        }
      }
    ],
    sections: [
      {
        title: { vi: "Chiếc lông vũ vàng và ba vết thương ở Tatarasuna", en: "The golden feather and the three wounds of Tatarasuna" },
        body: {
          vi: [
            "Năm mảnh của bộ thánh di vật kể lại hành trình của [[wanderer|Kunikuzushi]]: khi bị [[raiden-ei]] đặt ngủ yên trong Shakkei Pavilion cùng một chiếc lông vũ vàng làm tín vật, anh đã tự tỉnh dậy và lang thang khắp [[inazuma]].",
            "Tại lò luyện Tatarasuna, anh được võ sĩ Katsuragi và quan phụ trách Niwa Hisahide đối xử như một con người thực sự. Nhưng âm mưu phá hoại của [[dottore]], cái chết của Niwa và cái chết vì bệnh tật của một cậu bé mồ côi đã đẩy Kunikuzushi vào con đường tuyệt vọng của **Scaramouche** ([[pale-flame]])."
          ],
          en: [
            "The five pieces recount [[wanderer|Kunikuzushi]]'s early life: left slumbering inside Shakkei Pavilion by [[raiden-ei]] with a golden feather as proof of his identity, he awoke on his own and wandered [[inazuma]].",
            "At the Tatarasuna foundry, samurai Katsuragi and armorer Niwa Hisahide welcomed him as family. Yet [[dottore]]'s sabotage of the Mikage Furnace, Niwa's murder, and a young orphan boy's death from illness drove Kunikuzushi down the bitter path of **Scaramouche** ([[pale-flame]])."
          ]
        }
      }
    ],
    theories: [],
    sources: [{ label: "Fandom: Husk of Opulent Dreams", url: "https://genshin-impact.fandom.com/wiki/Husk_of_Opulent_Dreams" }],
    related: ["wanderer", "raiden-ei", "dottore", "inazuma", "pale-flame"]
  },

  {
    id: "prayers-tiaras",
    type: "artifact",
    name: { vi: "Bộ Nón Tế Lễ (Prayers Tiaras)", en: "Prayers Tiaras (Tiara Series)" },
    subtitle: { vi: "4 bộ thánh di vật 1 mảnh: Hoả, Thuỷ, Lôi, Băng", en: "Four 1-piece artifact circlets: Flame, Torrents, Thunder, Frost" },
    region: { vi: "Nền Văn Minh Thống Nhất cổ đại", en: "Ancient Unified Civilization" },
    summary: {
      vi: "Bốn chiếc vương miện tế lễ bằng cành cây trắng (Prayers for Illumination, Destiny, Wisdom, to Springtime) ghép lại thành bức tranh về sự hưng thịnh, hoài nghi và diệt vong của nền văn minh cổ đại.",
      en: "Four ceremonial white-branch tiaras (Prayers for Illumination, Destiny, Wisdom, to Springtime) that piece together the prosperity, doubt, and ruin of ancient human civilization."
    },
    quote: {
      text: {
        vi: "Nghe nói rằng từng có một thời đại, con người trên mặt đất có thể trực tiếp nghe thấy những mặc khải từ bầu trời.",
        en: "They say that once upon a time, the people of the land could hear revelations from Celestia directly."
      },
      source: {
        vi: "Prayers for Illumination – Tiara of Flame",
        en: "Prayers for Illumination – Tiara of Flame"
      }
    },
    chapters: [
      {
        title: { vi: "1. Lễ Tế Hoả (Prayers for Illumination – Tiara of Flame)", en: "1. Prayers for Illumination (Tiara of Flame)" },
        body: {
          vi: [
            "*\"Nghe nói rằng từng có một thời đại, con người trên mặt đất có thể trực tiếp nghe thấy những mặc khải từ bầu trời. Khi ấy, các sứ giả của thần linh (Tiên Linh / Seelie) đi lại giữa loài người phàm trần. Trong thời đại đó, vạn vật sinh sôi và băng vĩnh cửu bắt đầu tan chảy, ngọn lửa đầu tiên được thắp lên.\"*",
            "Con người được ban cho sự thịnh vượng vô bờ bến của **[[unified-civilization|Nền Văn Minh Thống Nhất]]**, và các tư tế trưởng đội chiếc vương miện kết từ cành cây trắng để lắng nghe tiếng nói của Thiên Lý."
          ],
          en: [
            "*\"They say that once upon a time, the people of the land could hear revelations from Celestia directly. The envoys of the gods walked among benighted humanity. In those days, life was weak, and the earth was blanketed in unending ice, until the first fire was lit.\"*"
          ]
        }
      },
      {
        title: { vi: "2. Lễ Tế Thuỷ (Prayers for Destiny – Tiara of Torrents)", en: "2. Prayers for Destiny (Tiara of Torrents)" },
        body: {
          vi: [
            "*\"Thời kỳ hoàng kim của các sứ giả thần thánh kéo dài tưởng như vô tận. Nhưng khi trí tuệ của con người ngày càng lớn, lòng kiêu ngạo và sự hoài nghi cũng nảy mầm. Con người bắt đầu tự hỏi: liệu sự thịnh vượng này có thật sự kéo dài mãi mãi hay không?\"*",
            "Những tư tế đội vương miện bắt đầu cố gắng nhìn trộm vào vận mệnh tương lai và thách thức giới hạn mà thiên giới đã đặt ra."
          ],
          en: [
            "*\"The envoys of the gods walked among humanity, and the people enjoyed untold prosperity. Yet prosperity bred questions: would this golden age truly last forever?\"* The white-crowned priests began attempting to peer into the secrets of fate."
          ]
        }
      },
      {
        title: { vi: "3. Lễ Tế Lôi (Prayers for Wisdom – Tiara of Thunder)", en: "3. Prayers for Wisdom (Tiara of Thunder)" },
        body: {
          vi: [
            "*\"Khi con người tìm cách chạm tới trí tuệ của bầu trời và đặt câu hỏi về thẩm quyền của thiên giới, các sứ giả thần linh bỗng chốc chìm vào im lặng. Bầu trời trút xuống cơn thịnh nộ kinh hoàng đẩy thế giới vào hỗn loạn.\"*",
            "Để tìm hiểu vì sao thiên giới lại nổi giận và bỏ rơi mình, các tư tế trưởng quyết định đi xuống những nơi sâu thẳm nhất dưới lòng đất."
          ],
          en: [
            "*\"When humanity sought to question the wisdom of the heavens, the divine envoys fell silent, and calamity descended from the sky.\"* Seeking answers, the chief priests descended into the deepest places of the earth."
          ]
        }
      },
      {
        title: { vi: "4. Lễ Tế Băng (Prayers to Springtime – Tiara of Frost)", en: "4. Prayers to Springtime (Tiara of Frost)" },
        body: {
          vi: [
            "*\"Vào những năm tháng cuối đời, mỗi vị tư tế trưởng đều mang chiếc vương miện kết từ cành cây trắng nguyên sơ đi xuống tầng sâu của thế giới. Tại đó, dưới gốc một cây cổ thụ khổng lồ đã khô héo (**[[irminsul]]**), có một ngọn núi được chất cao bởi hàng ngàn chiếc vương miện của các đời tư tế đi trước.\"*",
            "Mỗi chiếc vương miện đặt xuống đều giữ kín một bí mật không bao giờ được phép nói ra dưới ánh mặt trời, chờ đợi mùa xuân tái sinh từ đống băng giá."
          ],
          en: [
            "*\"At the end of their lives, each chief priest carried their crown of flawless white branches into the deep places of the world. There, beneath a withered ancient tree (**[[irminsul]]**), stood a mountain of crowns left by generations of past priests.\"*"
          ]
        }
      }
    ],
    sections: [
      {
        title: { vi: "Ngọn núi vương miện dưới gốc cây khô", en: "The mountain of crowns beneath the withered tree" },
        body: {
          vi: [
            "Khác với mọi bộ thánh di vật 5 món thông thường, chuỗi **Prayers** chỉ gồm 4 chiếc nón đơn lẻ. Ghép mô tả của cả bốn chiếc lại theo trình tự, chúng kể về [[unified-civilization]]: ban đầu các sứ giả của thần đi lại giữa loài người; khi phước lành khiến con người nảy sinh kiêu ngạo và hoài nghi xem liệu sự thịnh vượng có kéo dài mãi mãi, thiên giới chìm vào im lặng.",
            "Cuối đời mình, mỗi vị tư tế trưởng đều mang chiếc vương miện kết từ cành cây trắng nguyên sơ đi vào nơi sâu thẳm của thế giới, đặt vương miện của mình lên một \"ngọn núi vương miện\" của các đời tư tế đi trước dưới gốc một cây cổ thụ khô héo ([[irminsul]]) để tìm kiếm câu trả lời."
          ],
          en: [
            "Unlike standard 5-piece artifact sets, the **Prayers** series consists of four standalone circlets. Read together, they recount the [[unified-civilization]]: at first, divine envoys walked among humans; when blessings bred hubris and mortals questioned whether their golden age would last forever, the heavens fell silent.",
            "At the end of their lives, each generation's chief priest carried their crown of flawless white branches into the deep places of the world, placing it atop a \"mountain of crowns\" left by past priests beneath a withered ancient tree ([[irminsul]]) in search of answers."
          ]
        }
      }
    ],
    theories: [
      {
        title: { vi: "Vì sao chỉ có 4 Nón Tế Lễ Hoả, Thuỷ, Lôi, Băng?", en: "Why are there only 4 Tiaras for Pyro, Hydro, Electro, and Cryo?" },
        body: {
          vi: "Chỉ có 4 nguyên tố xuất hiện trong chuỗi Nón Tế Lễ. Cộng đồng liên hệ điều này với 4 tai kiếp cổ đại trong thần thoại (lửa, hồng thuỷ, sấm sét, băng giá) hoặc với Bốn Bóng Hình Rực Sáng của Đấng Nguyên Sơ.",
          en: "Only four elements appear in the Tiara series. The community connects this either to four ancient mythological cataclysms (fire, flood, thunder, ice) or to the Four Shining Shades of the Primordial One."
        },
        sources: [{ label: "r/Genshin_Lore – Prayers Tiara Lore", url: "https://www.reddit.com/r/Genshin_Lore/search/?q=Prayers%20Tiara" }]
      }
    ],
    sources: [
      { label: "Fandom: Prayers for Illumination", url: "https://genshin-impact.fandom.com/wiki/Prayers_for_Illumination" },
      { label: "Fandom: Prayers for Destiny", url: "https://genshin-impact.fandom.com/wiki/Prayers_for_Destiny" }
    ],
    related: ["unified-civilization", "before-sun-and-moon", "sal-vindagnyr", "enkanomiya", "irminsul"]
  },

  {
    id: "desert-pavilion-chronicle",
    type: "artifact",
    name: { vi: "Sử Ký Đình Đài Cát (Desert Pavilion Chronicle)", en: "Desert Pavilion Chronicle" },
    subtitle: { vi: "Bộ thánh di vật Phong – Phiên bản 3.4", en: "Anemo artifact set – Version 3.4" },
    region: { vi: "Sumeru (sa mạc)", en: "Sumeru (desert)" },
    summary: {
      vi: "Bộ thánh di vật kể về thời hoàng kim của Vua Deshret, liên minh với Nữ Thần Hoa và bi kịch đẫm máu của vương triều Gurabad.",
      en: "An artifact set telling of King Deshret's golden age, his bond with the Goddess of Flowers, and the blood-soaked tragedy of Gurabad's royal line."
    },
    chapters: [
      {
        title: { vi: "1. Khởi Đầu Của Vương Đô Các Vương (The First Days of the City of Kings)", en: "1. The First Days of the City of Kings (Flower)" },
        body: {
          vi: [
            "Một đoá hoa nhân tạo lấp lánh ánh vàng. Thuở sơ khai tại sa mạc **[[sumeru]]**, **Nữ Thần Hoa Nabu Malikata** múa trên cát làm nở rộ những đoá hoa **Padisarah** tím biếc. Cùng với **[[deshret-kingdom|Vua Deshret (Al-Ahmar)]]** và **Đại Từ Thụ Rukkhadevata**, ba vị thần đã lập nên liên minh Tam Thần và xây dựng thiên đường ốc đảo Ay-Khanoum."
          ],
          en: [
            "A gleaming artificial flower from the earliest days of **[[deshret-kingdom]]**, when the **Goddess of Flowers Nabu Malikata** danced Padisarahs into bloom alongside **Al-Ahmar** and **Greater Lord Rukkhadevata**."
          ]
        }
      },
      {
        title: { vi: "2. Sự Kết Thúc Của Quốc Độ Hoàng Kim (End of the Golden Realm)", en: "2. End of the Golden Realm (Plume)" },
        body: {
          vi: [
            "Chiếc lông vũ pha lê xanh lấp lánh của vương triều cổ. Sau cái chết của Nữ Thần Hoa, Vua Deshret lui về xây dựng các kim tự tháp khổng lồ, còn thần đèn **Jinni Liloupar** đem lòng yêu chàng chăn cừu phàm trần **Ormazd**, giúp chàng trở thành vị vua sáng lập kinh thành **[[gurabad]]**."
          ],
          en: [
            "A crystal-clear feather from the golden realm. After the Goddess of Flowers' passing, the Jinni **Liloupar** fell in love with the mortal shepherd **Ormazd** and raised him as the founder-king of **[[gurabad]]**."
          ]
        }
      },
      {
        title: { vi: "3. Đồng Hồ Của Con Đường Lạc Lối (Timepiece of the Lost Path)", en: "3. Timepiece of the Lost Path (Sands)" },
        body: {
          vi: [
            "Khi Gurabad giàu có nhờ bóc lột sức lao động của các cỗ máy thần đèn **Jinni** vô tri (con của Liloupar và Ormazd) cùng các nô lệ bộ tộc sa mạc, sự thối nát của hoàng gia đã chạm tới đỉnh điểm. Để trừng phạt sự bạo ngược của chồng mình là Vua Ormazd, **Liloupar** đã lên một kế hoạch báo thù tàn khốc kéo dài suốt ba thế hệ."
          ],
          en: [
            "As Gurabad grew decadent through slave labor and mindless Jinni-machines, **Liloupar** plotted a merciless three-generation vengeance against her tyrant husband King Ormazd."
          ]
        }
      },
      {
        title: { vi: "4. Người Bảo Vệ Giấc Mộng Cũ (Defender of the Enchanting Dream)", en: "4. Defender of the Enchanting Dream (Goblet)" },
        body: {
          vi: [
            "Theo mưu kế của Liloupar, Vua Ormazd và toàn bộ hoàng tộc bị đầu độc trong một đêm đại tiệc bởi chính người con gái được ông sủng ái là **Công chúa Shirin**. Tới lượt người con trai kiêu ngạo là **Hoàng tử Parvezravan (Kisra)** lên ngôi, tiếp tục đẩy Gurabad xuống vực thẳm của loạn luân, điên loạn và Tri Thức Cấm Kỵ."
          ],
          en: [
            "Through Liloupar's machinations, King Ormazd and his court were poisoned at a grand banquet by Princess **Shirin**, before Prince **Parvezravan (Kisra)** plunged Gurabad into madness and Forbidden Knowledge."
          ]
        }
      },
      {
        title: { vi: "5. Di Sản Của Quý Tộc Sa Mạc (Legacy of the Desert High-Born)", en: "5. Legacy of the Desert High-Born (Circlet)" },
        body: {
          vi: [
            "Đêm kinh thành **[[gurabad]]** bị một vết nứt Vực Sâu khổng lồ nuốt chửng xuống lòng đất cát, chỉ có những người hầu và chiến binh chạy thoát ra sa mạc, trở thành tổ tiên của các bộ lạc **Eremite** lưu vong ngày nay."
          ],
          en: [
            "On the night **[[gurabad]]** was swallowed whole by a chasm into the sands, the surviving retainers fled into the desert to become the ancestors of today's **Eremite** tribes."
          ]
        }
      }
    ],
    sections: [
      {
        title: { vi: "Từ ốc đảo của Nữ Thần Hoa đến sự sụp đổ của Gurabad", en: "From the Goddess of Flowers' oasis to the fall of Gurabad" },
        body: {
          vi: [
            "Năm mảnh thánh di vật phác hoạ toàn cảnh lịch sử [[deshret-kingdom]] và thành bang [[gurabad]]: từ khi Nữ Thần Hoa Nabu Malikata múa trên cát làm nở hoa Padisarah, đến khi Jinni Liloupar chọn chàng chăn cừu Ormazd làm vua, rồi đêm tiệc độc dược của công chúa Shirin và sự sụp đổ của kinh thành xuống lòng cát. Đọc song song với [[flower-of-paradise-lost]] để thấy trọn vẹn góc nhìn của cả hai phía."
          ],
          en: [
            "Its five pieces trace the full arc of [[deshret-kingdom]] and [[gurabad]]: from the Goddess of Flowers dancing Padisarahs into bloom across the dunes, to the Jinni Liloupar choosing the shepherd Ormazd as king, to Princess Shirin's poisoned banquet and the city's collapse into the sands. Read alongside [[flower-of-paradise-lost]] for both perspectives."
          ]
        }
      }
    ],
    theories: [],
    sources: [{ label: "Fandom: Desert Pavilion Chronicle", url: "https://genshin-impact.fandom.com/wiki/Desert_Pavilion_Chronicle" }],
    related: ["deshret-kingdom", "gurabad", "flower-of-paradise-lost", "sumeru"]
  },

  {
    id: "flower-of-paradise-lost",
    type: "artifact",
    name: { vi: "Đóa Hoa Trang Viên Thất Lạc (Flower of Paradise Lost)", en: "Flower of Paradise Lost" },
    subtitle: { vi: "Bộ thánh di vật – Phiên bản 3.4", en: "Artifact set – Version 3.4" },
    region: { vi: "Sumeru (sa mạc)", en: "Sumeru (desert)" },
    summary: {
      vi: "Bộ thánh di vật xoay quanh Nabu Malikata – Nữ Thần Hoa, một Tiên Linh (Seelie) sống sót từ thời cổ đại – và sự hi sinh của bà vì khát vọng của Vua Deshret.",
      en: "An artifact set centered on Nabu Malikata – the Goddess of Flowers, a surviving Seelie from antiquity – and her sacrifice for King Deshret's ambition."
    },
    chapters: [
      {
        title: { vi: "1. Ánh Trăng Của Ay-Khanoum (Ay-Khanoum's Myriad)", en: "1. Ay-Khanoum's Myriad (Flower)" },
        body: {
          vi: [
            "Một đoá hoa thạch anh tím được chạm khắc theo hình dáng hoa Padisarah cổ đại. Nó xác nhận **Nữ Thần Hoa Nabu Malikata** vốn là một **Tiên Linh (Seelie)** sống sót sau kiếp nạn của [[unified-civilization]]: cơ thể bị thương tổn nặng nề và mang lời nguyền của thiên giới rằng *\"nếu Tiên Linh đem lòng yêu con người, họ sẽ đánh mất toàn bộ hình hài và trí tuệ\"*."
          ],
          en: [
            "An amethyst blossom confirming that **Nabu Malikata (Goddess of Flowers)** was a surviving **Seelie** from the [[unified-civilization]], bearing the curse that any Seelie who falls in love with humanity shall lose their form and wisdom."
          ]
        }
      },
      {
        title: { vi: "2. Tiệc Rượu Tuyệt Vọng (Wilting Feast)", en: "2. Wilting Feast (Plume)" },
        body: {
          vi: [
            "Trong những đêm ngắm sao trên cồn cát, **[[deshret-kingdom|Vua Deshret (Al-Ahmar)]]** thổ lộ với Nabu Malikata và Rukkhadevata tham vọng lật đổ quy luật của **Thiên Lý** để xây dựng một vương quốc vĩnh hằng không còn đau khổ hay lãng quên. Rukkhadevata lập tức từ chối và rời đi xây dựng rừng mưa, còn Nữ Thần Hoa quyết định ở lại bên Deshret."
          ],
          en: [
            "When **[[deshret-kingdom|King Deshret]]** confided his ambition to defy the **Heavenly Principles**, Rukkhadevata departed to build the rainforest, while the Goddess of Flowers remained by Deshret's side."
          ]
        }
      },
      {
        title: { vi: "3. Thời Khắc Ngưng Đọng Trong Cát (A Moment Congealed)", en: "3. A Moment Congealed (Sands)" },
        body: {
          vi: [
            "Chiếc đồng hồ cát mà cát bên trong đã hoá thành tinh thể rắn chắc không bao giờ chảy nữa – chế tác tại thành phố Mặt Trăng **Ay-Khanoum** để đáp lại mong ước của Vua Deshret về việc \"đóng băng vĩnh viễn khoảnh khắc hạnh phúc của ba người bạn\"."
          ],
          en: [
            "An hourglass whose crystals have congealed solid, crafted in **Ay-Khanoum** to fulfill King Deshret's wish to freeze their golden moment in eternity."
          ]
        }
      },
      {
        title: { vi: "4. Bình Rượu Giữ Kín Bí Mật (Secret-Keeper's Magic Bottle)", en: "4. Secret-Keeper's Magic Bottle (Goblet)" },
        body: {
          vi: [
            "Nabu Malikata kể cho Deshret nghe sự thật kinh hoàng về cuộc chiến giữa bầu trời và mặt đất, về những chiếc **Đinh Trời** đã giáng xuống chôn vùi các nền văn minh cổ đại ([[hyperborea]], [[sal-vindagnyr]]), nhưng bà biết mình không thể ngăn cản ngọn lửa khát vọng trong tim vị vua sa mạc."
          ],
          en: [
            "Nabu Malikata warned Deshret of the war in the heavens and the **Celestial Nails** that buried ancient civilizations ([[hyperborea]], [[sal-vindagnyr]]), yet knew she could not extinguish the desert king's ambition."
          ]
        }
      },
      {
        title: { vi: "5. Vương Miện Thạch Anh Tím (Amethyst Crown)", en: "5. Amethyst Crown (Circlet)" },
        body: {
          vi: [
            "Chiếc vương miện bằng thạch anh tím và ngọc lục bảo của Nữ Thần Hoa. Để giúp Vua Deshret chạm tới nguồn tri thức dưới tầng sâu thế giới và cũng để ông thấu hiểu cái giá phải trả của tình yêu cùng sự mất mát, Nabu Malikata đã tự nguyện bước vào cái chết – mở ra cánh cổng dẫn tới nguồn **Tri Thức Cấm Kỵ** sau này nhấn chìm cả vương quốc sa mạc."
          ],
          en: [
            "The amethyst and emerald crown of the Goddess of Flowers. To open the gateway to deep cosmic knowledge for King Deshret, Nabu Malikata willingly embraced her own death, unleashing the **Forbidden Knowledge** that would later consume the desert."
          ]
        }
      }
    ],
    sections: [
      {
        title: { vi: "Lời cảnh báo của một Tiên Linh cổ đại", en: "The warning of an ancient Seelie" },
        body: {
          vi: [
            "Flower of Paradise Lost xác nhận Nabu Malikata thuộc tộc Tiên Linh (Seelie) từng bị thiên giới nguyền rủa nếu đem lòng yêu con người (biến thành những linh hồn nhỏ bé dẫn đường ngày nay). Bà cảnh báo [[deshret-kingdom|Vua Deshret]] về sự đáng sợ của Thiên Lý và những Đinh Trời, nhưng cuối cùng vẫn tự nguyện dùng cái chết của mình để mở cánh cổng tri thức cho ông."
          ],
          en: [
            "Flower of Paradise Lost confirms that Nabu Malikata belonged to the ancient Seelie race, cursed to lose their form and wisdom if they fell in love with humans. She warned [[deshret-kingdom|King Deshret]] of the Heavenly Principles and the Divine Nails, yet willingly used her own death to open the gate of knowledge for him."
          ]
        }
      }
    ],
    theories: [],
    sources: [{ label: "Fandom: Flower of Paradise Lost", url: "https://genshin-impact.fandom.com/wiki/Flower_of_Paradise_Lost" }],
    related: ["deshret-kingdom", "gurabad", "desert-pavilion-chronicle", "unified-civilization"]
  },

  /* ===================== SÁCH / BOOKS (6) ===================== */
  {
    id: "before-sun-and-moon",
    type: "book",
    name: { vi: "Trước Khi Mặt Trời Và Mặt Trăng (Before Sun and Moon)", en: "Before Sun and Moon" },
    subtitle: { vi: "Cấm thư cổ – Quyển II của Bộ sưu tập Bạch Dạ Quốc tại Enkanomiya", en: "Forbidden ancient chronicle – Vol. II of The Byakuyakoku Collection in Enkanomiya" },
    region: { vi: "Enkanomiya, Inazuma", en: "Enkanomiya, Inazuma" },
    summary: {
      vi: "Cuốn biên niên sử quan trọng bậc nhất của toàn bộ lore Genshin Impact: ghi lại thời đại của Bảy vị Long Vương, sự xuất hiện của Đấng Nguyên Sơ (Phanes), Bốn Bóng Hình Rực Sáng, Kẻ Đến Thứ Hai và sự sụp đổ của Enkanomiya.",
      en: "The single most pivotal historical text in Genshin Impact lore: chronicling the Seven Sovereigns, the arrival of the Primordial One (Phanes), the Four Shining Shades, the Second Who Came, and Enkanomiya's fall."
    },
    quote: {
      text: {
        vi: "Bốn mươi mùa đông chôn vùi ngọn lửa, và bốn mươi mùa hè khuấy động biển khơi. Bảy vị Long Vương đều bị đánh bại, bảy vương quốc đều quy phục thiên giới.",
        en: "Forty winters entombed the flames, and forty summers churned the seas. The Seven Sovereigns were vanquished, and the seven nations submitted to the heavens."
      },
      source: {
        vi: "Trước Khi Mặt Trời Và Mặt Trăng – \"Bốn Mươi Năm Sau Khi Giữ Cành Cây\"",
        en: "Before Sun and Moon – \"Forty Years After the Held Branches\""
      }
    },
    chapters: [
      {
        title: { vi: "1. Khi Chim Bồ Câu Ngậm Cành Cây", en: "1. When the Doves Held Branches" },
        body: {
          vi: [
            "Khi ngai vàng vĩnh hằng của bầu trời giáng xuống, thế giới đã được tạo dựng lại từ đầu. Khi ấy, những vị chúa tể thật sự của thế giới này – các Long Vương của thế giới cũ – đã bị đánh đuổi.",
            "**Đấng Nguyên Sơ (Primordial One)** có thể chính là **Phanes**. Ngài có đôi cánh và đội vương miện, được sinh ra từ một quả trứng, không thể phân biệt là nam hay nữ. Nhưng muốn thế giới được tạo dựng, vỏ trứng bắt buộc phải vỡ ra. Tuy nhiên, Phanes – Đấng Nguyên Sơ – đã dùng chính lớp vỏ trứng ấy để ngăn cách \"vũ trụ thu nhỏ\" (Teyvat) với thế giới hỗn mang bên ngoài.",
            "Đấng Nguyên Sơ sau đó tự tạo ra **bốn bóng hình rực sáng (Four Shining Shades)** từ chính bản thân mình; sức mạnh của những bóng hình này lớn đến nỗi loài người không dám nhìn thẳng vào họ."
          ],
          en: [
            "When the eternal throne of the heavens came, the world was made anew. Then the true lords, the Seven Sovereigns, wererieb driven out.",
            "The **Primordial One** may have been **Phanes**. It had wings and a crown, and was birthed from an egg, androgynous in nature. Yet for the world to be created, the eggshell had to be broken. However, Phanes, the Primordial One, used the eggshell to separate the \"universe\" and the \"microcosm of the world.\"",
            "The Primordial One then created **four shining shades** of itself, and the number of these shades was four."
          ]
        }
      },
      {
        title: { vi: "2. Bốn Mươi Năm Sau Khi Giữ Cành Cây", en: "2. Forty Years After the Held Branches" },
        body: {
          vi: [
            "Bốn mươi mùa đông chôn vùi ngọn lửa, và bốn mươi mùa hè khuấy động biển khơi. **Bảy vị Long Vương đều bị đánh bại**, bảy vương quốc đều quy phục thiên giới.",
            "Đấng Nguyên Sơ – vị chúa tể vĩ đại – bắt đầu sáng tạo trời đất vì lợi ích của \"chúng ta\" – những sinh linh được ngài yêu thương nhất sắp sửa xuất hiện trên mặt đất này."
          ],
          en: [
            "Forty winters entombed the flames, and forty summers churned the seas. **The Seven Sovereigns were vanquished**, and the seven nations submitted to the heavens.",
            "The Primordial One, the great sovereign, began the creation of heaven and earth for \"our\" sake — that of its creations which it cherished most, who would soon appear upon this earth."
          ]
        }
      },
      {
        title: { vi: "3. Bốn Trăm Năm Sau Khi Giữ Cành Cây", en: "3. Four Hundred Years After the Held Branches" },
        body: {
          vi: [
            "Núi non và sông ngòi được hình thành, biển cả và đại dương chấp nhận những kẻ nổi loạn và những kẻ không chịu khuất phục. Đấng Nguyên Sơ cùng một trong các Bóng Hình của ngài (Chấp Chính Sự Sống) đã tạo ra chim chóc trên trời, muông thú trên mặt đất và cá dưới nước, cùng với hoa cỏ và cây cối.",
            "Cuối cùng, ngài tạo ra **loài người** – tổ tiên của chúng ta đông đúc đến mức không thể đếm xuể. Loài người lập một giao ước với Đấng Nguyên Sơ, và kể từ đó bước vào một kỷ nguyên mới."
          ],
          en: [
            "The mountains and rivers were made, and the seas and oceans accepted those who rebelled and those who would not kneel. The Primordial One and one of its shades created the birds of the air, the beasts of the earth, and the fish of the sea, together with flowers and grass.",
            "Finally, the Primordial One created **humans** — our ancestors, numerous as the stars in the sky. Humanity made a covenant with the Primordial One, and thus entered a new age."
          ]
        }
      },
      {
        title: { vi: "4. Năm Mở Cửa Phương Chu (Kỷ nguyên Hoàng Kim)", en: "4. The Year of the Ark's Opening" },
        body: {
          vi: [
            "Đấng Nguyên Sơ có một bản kế hoạch thiêng liêng dành cho con người: miễn là con người hạnh phúc thì ngài cũng vui lòng.",
            "Năm sau khi mở cửa phương chu: con người cày cấy đất đai và thu hoạch vụ mùa đầu tiên; con người đào mỏ và tìm thấy vàng ngọc; con người bắt đầu viết những bài thơ đầu tiên ca ngợi thiên giới."
          ],
          en: [
            "The Primordial One had a sacred plan for humans. As long as they were happy, it too rejoiced.",
            "The Year After the Ark's Opening: The people worked the land, and so came the first harvest. The people mined, and so came the first gold and jade. The people wrote the first poems."
          ]
        }
      },
      {
        title: { vi: "5. Năm Ánh Sáng Rực Cháy (Kẻ Đến Thứ Hai xuất hiện)", en: "5. The Funerary Year (The Second Who Came)" },
        body: {
          vi: [
            "**Ngai vàng thứ hai của bầu trời xuất hiện (Kẻ Đến Thứ Hai / The Second Who Came)**, và cuộc đại chiến được châm ngòi lại như thuở ban đầu tạo dựng thế giới. Ngày hôm đó, bầu trời nghiêng lệch và mặt đất nứt toác.",
            "Tổ tiên của chúng ta cùng vùng đất của họ ([[enkanomiya]]) bị rơi xuống nơi sâu thẳm dưới đáy đại dương. Đó là khởi đầu của kỷ nguyên bóng tối."
          ],
          en: [
            "**The second throne of the heavens came**, and war was rekindled, as it was in the world's creation. That day, the heavens collapsed and the earth was rent asunder.",
            "Our ancestors and their ancestral land ([[enkanomiya]]) fell into this place during that conflict. This was the era of darkness."
          ]
        }
      },
      {
        title: { vi: "6. Năm Đầu Tiên & Năm Thứ Ba Của Bóng Tối (Istaroth đáp lời)", en: "6. First & Third Year of Darkness (Istaroth Answers)" },
        body: {
          vi: [
            "Dưới đáy biển tối tăm, con người bị lũ Rồng Biển Sâu (Bathysmal Vishaps) săn đuổi không ngừng. Không có bất kỳ đốm lửa nào không bị dập tắt.",
            "Tổ tiên cầu nguyện sự cứu rỗi từ thiên giới, nhưng Đấng Nguyên Sơ và ba Bóng Hình Rực Sáng khác không hề nghe thấy. **Chỉ có duy nhất Chấp Chính Thời Gian – Istaroth (Kairos / Tokoyo Ookami)** là không bỏ rơi chúng ta.",
            "Bà là \"khoảnh khắc bất diệt\", là \"Ngàn Ngọn Gió và Thời Gian\". Chính bà đã truyền dạy trí tuệ cho hiền nhân **Aberaku (Abrax)**."
          ],
          en: [
            "In the abyssal dark, humanity was hunted by the Dragonheirs of the Depths. No fire could stay lit for long.",
            "Our ancestors sought the regres of the Primordial One and three of its shades, but heard nothing. **Only the Ruler of Time – Istaroth (Kairos / Tokoyo Ookami)** did not forsake us.",
            "She was the \"undying wind\" and \"the thousand winds of time.\" It was she who awakened the wisdom of the sage **Aberaku (Abrax)**."
          ]
        }
      },
      {
        title: { vi: "7. Năm Mù Loà & Năm Đầu Tiên Của Mặt Trời Và Mặt Trăng (Dainichi Mikoshi)", en: "7. The Year of Blindness & First Year of Sun and Moon" },
        body: {
          vi: [
            "Nhờ phước lành của Istaroth, hiền nhân **Aberaku** bắt đầu chế tạo mặt trời nhân tạo **Helios (Dainichi Mikoshi)** bằng đôi bàn tay của chính mình để xua đuổi bóng tối.",
            "Khi cỗ xe mặt trời Dainichi Mikoshi hoàn thành, **Đêm Trắng (Whitenight)** đến thay thế cho **Đêm Thường (Evernight)**, đẩy lùi hoàn toàn lũ Rồng Biển Sâu vào bóng tối."
          ],
          en: [
            "Guided by Istaroth, the sage **Aberaku** engineered the artificial sun **Helios (Dainichi Mikoshi)** to banish the darkness.",
            "Upon the completion of the Dainichi Mikoshi, **Whitenight** arrived to alternate with **Evernight**, driving back the Bathysmal Vishaps."
          ]
        }
      },
      {
        title: { vi: "8. Năm Thứ Hai & Năm Thứ Mười Của Mặt Trời Và Mặt Trăng (Lệnh cấm của Thiên Lý)", en: "8. Second & Tenth Year of Sun and Moon (The Heavens' Ban)" },
        body: {
          vi: [
            "**Năm thứ hai:** Tổ tiên cố gắng tìm đường quay trở lại mặt đất vì nghĩ rằng cuộc chiến trên mặt đất đã kết thúc. Nhưng họ phát hiện ra rằng thiên giới đã đặt một **lệnh cấm niêm phong** không cho phép cư dân Bạch Dạ Quốc quay trở về. Từ đó, tổ tiên suy luận rằng **Đấng Nguyên Sơ đã đánh bại Kẻ Đến Thứ Hai**.",
            "**Năm thứ mười:** Hiền nhân Aberaku đã bị **Thái Dương Chi Tử (Sunchild)** tống giam vào ngục tối từ lâu. Người chép sử nghe thấy tiếng áo giáp của lính canh bên ngoài cửa nên vội vàng kết thúc cuốn biên niên sử tại đây."
          ],
          en: [
            "**The Second Year:** Our ancestors sought a path back to the surface, assuming the war above had ended. Yet they found that the heavens had laid down a **strict ban** sealing their return. From this, they deduced that **the Primordial One had defeated the Second Who Came**.",
            "**The Tenth Year:** Aberaku has long since been imprisoned by the **Sunchild**. Hearing the clanking of armor outside the door, the scribe hastily ends this chronicle."
          ]
        }
      },
      {
        title: { vi: "9. Chuyện Ngụ Ngôn Về Cái Cây (Quyển I – Quy luật Thời Gian của Istaroth)", en: "9. Parable of the Tree (Vol. I – Istaroth's Temporal Law)" },
        body: {
          vi: [
            "Nhà vua sai người làm vườn chặt cây linh mộc để lấy gỗ quý xây cung điện, nhưng nếu chặt cây thì linh hồn của cây sẽ chết và nhà vua sẽ mất đi phước lành. **Tế Tư của Tokoyo Ookami (Istaroth)** đã chỉ cho người làm vườn một cách: hãy bẻ lấy những cành cây trước, rồi đốn hạ thân cây chính để xây cung điện, và ngay lập tức **trồng lại những cành cây đó**.",
            "Nhà vua ngạc nhiên hỏi làm sao một cành cây mới giâm lại có thể biến thành cây cổ thụ 500 năm tuổi ngay lập tức? Vị tế tư mỉm cười đáp: *\"Vì thần linh của thời gian có thể mang hạt giống từ khoảnh khắc này đến tận quá khứ và tương lai\"* – đây chính là nguyên lý mà 500 năm trước **[[raiden-ei]]** và **Makoto** đã dùng để trồng **Cây Anh Đào Thần (Sacred Sakura)** tại [[inazuma]]!"
          ],
          en: [
            "When a king ordered his gardener to fell a spirit-tree of 500 years, the **Priestess of Tokoyo Ookami (Istaroth)** instructed the gardener to snap off its branches first, cut the tree down, and then plant the branches.",
            "When the king marveled that a newly planted branch instantly became a 500-year-old ancient tree, the priestess replied: *\"Because the God of Moments can take seeds from this moment into the past and the future\"* – the exact temporal principle by which **[[raiden-ei]]** and **Makoto** later planted the **Sacred Sakura** in [[inazuma]]!"
          ]
        }
      }
    ],
    sections: [
      {
        title: { vi: "Sáng thế ký của Teyvat trước khi có Thất Thần", en: "Teyvat's genesis before The Seven" },
        body: {
          vi: [
            "Được viết bởi các sử quan của [[enkanomiya]] từ khi họ vừa rơi xuống đáy biển, cuốn sách ghi lại lịch sử theo các mốc thời gian: khi Đấng Nguyên Sơ (có thể là **Phanes**, sinh ra từ một quả trứng, có cánh và đội vương miện) dùng vỏ trứng ngăn cách \"vũ trụ thu nhỏ\" Teyvat với thế giới bên ngoài, tạo ra **Bốn Bóng Hình Rực Sáng** (trong đó có Istaroth – Chấp Chính Thời Gian), đánh bại Bảy vị Long Vương và tạo ra loài người ([[unified-civilization]]).",
            "Sau đó, **Kẻ Đến Thứ Hai** xuất hiện khiến chiến tranh nổ ra, Enkanomiya sụp xuống biển sâu. Khi các sử quan cầu cứu thiên giới, chỉ có Istaroth đáp lời, còn Đấng Nguyên Sơ đặt ra lệnh cấm không cho họ tìm đường quay lại mặt đất. Vì thần rắn Orobashi vô tình đọc được cuốn sách này, Celestia đã buộc ông phải chết."
          ],
          en: [
            "Written by scribes of [[enkanomiya]] after falling beneath the sea, the book records history across chronological epochs: the Primordial One (possibly **Phanes**, winged and crowned, born from an egg) used the eggshell to separate the \"microcosm\" of Teyvat from the outside universe, created the **Four Shining Shades** (including Istaroth, Shade of Time), vanquished the Seven Sovereigns, and created humanity ([[unified-civilization]]).",
            "Later, the **Second Who Came** arrived and war broke out, sinking Enkanomiya. When the people prayed for salvation, only Istaroth answered, while the heavens issued a ban forbidding their return. Because the serpent god Orobashi accidentally read this book, Celestia sentenced him to death."
          ]
        }
      }
    ],
    theories: [
      {
        title: { vi: "Ai mới là người thắng cuộc trong trận chiến với Kẻ Đến Thứ Hai?", en: "Who truly won the war with the Second Who Came?" },
        body: {
          vi: "Các sử quan Enkanomiya suy đoán Đấng Nguyên Sơ đã chiến thắng vì thiên giới cấm họ tìm đường về. Tuy nhiên, câu chuyện của [[neuvillette]] tiết lộ thêm rằng Đấng Nguyên Sơ đã bị thương tổn nặng nề và phải hợp tác với \"kẻ đến sau\" để tạo ra [[gnosis]] từ di hài Kẻ Đổ Bộ Thứ Ba.",
          en: "Enkanomiya's scribes deduced that the Primordial One prevailed because the heavens issued a ban. However, [[neuvillette]]'s character story adds that the Primordial One's functions were ruined, forcing collaboration with \"the one who came after\" to forge the [[gnosis|Gnoses]] from the Third Descender."
        },
        sources: [{ label: "r/Genshin_Lore – Primordial One & Second Who Came", url: "https://www.reddit.com/r/Genshin_Lore/search/?q=Primordial%20One%20Second%20Who%20Came" }]
      }
    ],
    sources: [{ label: "Fandom: Before Sun and Moon", url: "https://genshin-impact.fandom.com/wiki/Before_Sun_and_Moon" }],
    related: ["enkanomiya", "unified-civilization", "neuvillette", "prayers-tiaras", "gnosis", "raiden-ei"]
  },

  {
    id: "hymns-of-the-far-north",
    type: "book",
    name: { vi: "Thánh Ca Phương Bắc (Hymns of the Far North)", en: "Hymns of the Far North" },
    subtitle: { vi: "Bộ sách 3 quyển tại Nod-Krai về Koitar, Seutervoinen, Bạch Sa Hoàng & Kẻ Đổ Bộ Thứ Ba Saarelainen", en: "3-volume Nod-Krai collection on Koitar, Seutervoinen, the Belyi Tsar & Third Descender Saarelainen" },
    region: { vi: "Nod-Krai, Snezhnaya", en: "Nod-Krai, Snezhnaya" },
    summary: {
      vi: "Bộ thánh ca cổ do nữ tư tế Ehrnrooth biên soạn tại vùng tự trị Nod-Krai, giải mã toàn bộ lịch sử của thành cổ Hyperborea, Thiên Sứ Đầu Tiên Koitar, Bạch Sa Hoàng (Pakkaisukko) và bi kịch của Kẻ Đổ Bộ Thứ Ba Saarelainen – vị hôn phu của Nữ Hoàng Băng Giá.",
      en: "An ancient liturgical collection compiled by the priestess Ehrnrooth in Nod-Krai, unlocking the history of Hyperborea, First Angel Koitar, the Belyi Tsar (Pakkaisukko), and the Third Descender Saarelainen – betrothed of the Tsaritsa."
    },
    quote: {
      text: {
        vi: "Nàng là con gái đầu tiên và xinh đẹp nhất của Đấng Sáng Tạo, là ngôi sao mai rực sáng dẫn lối giữa màn đêm lạnh giá.",
        en: "She was the first and fairest daughter of the Creator, the shining morning star guiding the way through the frozen night."
      },
      source: {
        vi: "Thánh Ca Phương Bắc – Quyển I (Khúc Ca Về Koitar)",
        en: "Hymns of the Far North – Volume I (Hymn of Koitar)"
      }
    },
    chapters: [
      {
        title: { vi: "Quyển I: Khúc Ca Về Nữ Thần Sao Mai Koitar & Kẻ Du Hành Seutervoinen", en: "Volume I: Hymn of Dawnstar Goddess Koitar & Voyager Seutervoinen" },
        body: {
          vi: [
            "Quyển I mở đầu bằng những lời cầu nguyện cổ xưa của người dân phương Bắc tại **[[hyperborea]]** dành cho **Koitar** – vị thiên sứ (Tiên Linh) đầu tiên và đẹp nhất của Đấng Sáng Tạo, người cai quản ánh bình minh và ngôi sao mai.",
            "Khi vị lữ khách từ biển sao ngoài vũ trụ tên là **Seutervoinen (Anacharsis)** quay trở lại Teyvat và nhập vào cơ thể một chàng trai phàm trần, chàng đã nói cho Koitar biết sự thật về vũ trụ bao la bên ngoài chiếc lồng \"bầu trời giả\". Đem lòng yêu nhau, hai người trao lời thề ước dưới ánh sáng của **Ba Chị Em Mặt Trăng** ([[moonlit-bamboo-forest]]).",
            "Koitar đã truyền dạy cho các nghệ nhân của Hyperborea cách kết hợp ánh sáng nguyên sơ và sức mạnh của **Sương Nguyệt (Frost Moon)** để thổi hồn vào băng giá, tạo ra chủng tộc **Tiên Tuyết (Snowland Fae)**, đồng thời dùng máu thịt của **Băng Long Vương** khởi động dự án rèn đúc \"Con Người Nguyên Sơ\" để giải phóng nhân loại. Nhưng chỉ 30 ngày sau hôn lễ, Thiên Lý giáng **Đinh Trời** xuống huỷ diệt Hyperborea, xoá ký ức của Koitar và nguyền rủa toàn bộ tộc Tiên Linh."
          ],
          en: [
            "Volume I opens with the ancient prayers of **[[hyperborea]]** dedicated to **Koitar** – the first and fairest angel (Seelie) of the Creator, goddess of the morning star.",
            "When the cosmic voyager **Seutervoinen (Anacharsis)** returned to Teyvat inhabiting a mortal youth's body, he revealed to Koitar the truth of the universe beyond the false sky. Falling in love, the two swore vows beneath the **Three Moon Sisters** ([[moonlit-bamboo-forest]]).",
            "Koitar taught Hyperborean artisans to weave primordial light and **Frost Moon** power into the **Snowland Fae**, and to combine the **Cryo Dragon Sovereign's** flesh into a \"Primordial Human\". Thirty days after their union, Celestia dropped a **Celestial Nail** that destroyed Hyperborea, wiped Koitar's memory, and cursed the Seelie race."
          ]
        }
      },
      {
        title: { vi: "Quyển II: Bạch Sa Hoàng (Pakkaisukko) và Vương Quốc Của Tiên Tuyết", en: "Volume II: The Belyi Tsar (Pakkaisukko) and the Realm of the Snowland Fae" },
        body: {
          vi: [
            "Quyển II ghi lại thời kỳ sau khi Hyperborea sụp đổ: từ lõi di tích của dự án \"Con Người Nguyên Sơ\", một thực thể quyền năng thức tỉnh mang tên **Monomakh Snezhnyi** – được người đời tôn làm **Bạch Sa Hoàng (Belyi Tsar / Vua Trắng)** và được gọi trong các bài thánh ca cổ là **Pakkaisukko** (Ông Già Băng Giá).",
            "Ông tập hợp những **Tiên Tuyết** (*Vila, Domovoy, Volkodlak, Snegovic*) sống sót trên lãnh nguyên cùng các bộ lạc loài người phương Bắc, xây dựng nên các thành bang đầu tiên của **[[snezhnaya]]** dưới ngọn cờ Sao Bạc và trở thành **Băng Thần Đời Đầu (First Cryo Archon)**.",
            "Tuy nhiên, trong nỗ lực mở lại các lối đi dẫn xuống Cõi Bóng Tối nơi chôn vùi Hyperborea, triều đại của Pakkaisukko đã vô tình chạm trán với sức mạnh ăn mòn của Vực Sâu và sự giám sát khắc nghiệt của Thiên Lý."
          ],
          en: [
            "Volume II chronicles the era after Hyperborea's fall: from the core of the \"Primordial Human\" project awoke **Monomakh Snezhnyi** – revered as the **Belyi Tsar (White Tsar)** and named in the hymns as **Pakkaisukko**.",
            "He united the surviving **Snowland Fae** (*Vila, Domovoy, Volkodlak, Snegovics*) and northern humans to establish early **[[snezhnaya]]** under the Pale Star banner, ascending as the **First Cryo Archon**.",
            "Yet his attempts to reopen passages into the Shadow Realm where Hyperborea sank brought Abyssal fallout and the scrutiny of Celestia."
          ]
        }
      },
      {
        title: { vi: "Quyển III: Khúc Bi Ca Về Saarelainen (Kẻ Đổ Bộ Thứ Ba) và Công Chúa Anastasya", en: "Volume III: Ballad of Saarelainen (The Third Descender) and Princess Anastasya" },
        body: {
          vi: [
            "Quyển III là phần chấn động nhất của bộ sách: kể về người anh hùng ngoại giới **Saarelainen** – chính là **Kẻ Đổ Bộ Thứ Ba (Third Descender)** trong lịch sử Teyvat.",
            "Saarelainen đem lòng yêu sâu đậm con gái của Pakkaisukko (tức **[[tsaritsa|Anastasya Feodorovna Snezhnaya – Nữ Hoàng Băng Giá hiện tại]]**) và đến cầu hôn nàng. Để thử thách chàng rể, Pakkaisukko đã đặt ra một điều kiện bất khả thi: Saarelainen phải đi tới tận cùng phương Bắc và mở cánh cổng của *\"Pohjola\"* (ẩn dụ cho cánh cổng thiên giới / cõi cấm của Celestia).",
            "Vì tình yêu dành cho Anastasya, Saarelainen đã thực hiện thử thách và mở toang cánh cổng của *Pohjola*. Ngay khoảnh khắc ấy, Thiên Lý (Đấng Nguyên Sơ đang bị thương nặng cùng Kẻ Đến Sau) đã giáng xuống hành quyết Saarelainen ngay tại chỗ, rồi **xẻ thịt thi hài của chàng thành 7 mảnh để đúc nên 7 chiếc [[gnosis]]**!",
            "Khúc thánh ca kết thúc bằng hình ảnh người thiếu nữ băng giá ôm mối hận thiên thu bên ngai vàng lạnh lẽo, thề sẽ có ngày gom lại đủ 7 mảnh hài cốt của người thương và đốt cháy cả bầu trời đã cướp đi chàng."
          ],
          en: [
            "Volume III delivers the collection's most pivotal revelation: the ballad of the outlander hero **Saarelainen** – the **Third Descender**.",
            "Saarelainen fell in love with Pakkaisukko's daughter (**[[tsaritsa|Anastasya Feodorovna Snezhnaya – the future Tsaritsa]]**) and sought her hand in marriage. Pakkaisukko set a fateful condition: Saarelainen had to journey to the edge of the world and open the gates of *\"Pohjola\"* (the forbidden celestial gate).",
            "Out of love for Anastasya, Saarelainen opened the gates of *Pohjola*. Instantly, the Heavenly Principles intervened, executing Saarelainen on the spot and **carving his remains into the seven [[gnosis|Gnoses]]**!",
            "The hymn closes with the bereaved maiden upon her frozen throne, vowing to gather all seven fragments of her beloved's body and burn away the heavens that took him from her."
          ]
        }
      }
    ],
    sections: [
      {
        title: { vi: "Chìa khoá giải mã lịch sử phương Bắc và Kẻ Đổ Bộ Thứ Ba", en: "The key to northern history and the Third Descender" },
        body: {
          vi: [
            "Được tìm thấy tại khu định cư của bộ tộc **Hậu Duệ Sương Nguyệt** tại [[snezhnaya|Nod-Krai]], *Thánh Ca Phương Bắc* (do nữ tư tế Ehrnrooth sưu tầm, lấy cảm hứng từ sử thi *Kalevala* của Phần Lan) là mảnh ghép kết nối trực tiếp [[hyperborea]], cuộc nổi dậy của Thiên Sứ Đầu Tiên **Koitar**, **Bạch Sa Hoàng Monomakh (Pakkaisukko)**, danh tính của **Kẻ Đổ Bộ Thứ Ba Saarelainen** và lý do thật sự khiến **[[tsaritsa|Nữ Hoàng Băng Giá Anastasya]]** thu thập 7 chiếc [[gnosis]]."
          ],
          en: [
            "Found in the Frostmoon Enclave of [[snezhnaya|Nod-Krai]], *Hymns of the Far North* (compiled by priestess Ehrnrooth, drawing on Finnish *Kalevala* mythos) directly connects [[hyperborea]], First Angel **Koitar**, the **Belyi Tsar Monomakh (Pakkaisukko)**, the **Third Descender Saarelainen**, and **[[tsaritsa|Tsaritsa Anastasya]]**'s quest for the seven [[gnosis|Gnoses]]."
          ]
        }
      }
    ],
    theories: [],
    sources: [{ label: "Fandom: Hymns of the Far North", url: "https://genshin-impact.fandom.com/wiki/Hymns_of_the_Far_North" }],
    related: ["snezhnaya", "hyperborea", "tsaritsa", "columbina", "gnosis", "moonlit-bamboo-forest", "pale-princess"]
  },

  {
    id: "perinheri",
    type: "book",
    name: { vi: "Perinheri", en: "Perinheri" },
    subtitle: { vi: "Bộ sách 2 quyển về Vương triều Hắc Nhật của Khaenri'ah, Hleobrant và Angelica", en: "2-volume book on Khaenri'ah's Crimson Moon Dynasty, Hleobrant, and Angelica" },
    region: { vi: "Fontaine / Khaenri'ah", en: "Fontaine / Khaenri'ah" },
    summary: {
      vi: "Cuốn sách 2 quyển mua tại Fontaine hé lộ thời đại Vương triều Hắc Nhật (Crimson Moon Dynasty) của Khaenri'ah, viện mồ côi tìm kiếm Kẻ Đổ Bộ và bằng chứng rằng lời nguyền biến thành Hilichurl đã tồn tại từ thời Chiến tranh Ma Thần.",
      en: "A 2-volume book purchased in Fontaine revealing Khaenri'ah's Crimson Moon Dynasty, its orphanage for outlanders, and proof that the hilichurl curse existed as early as the Archon War."
    },
    chapters: [
      {
        title: { vi: "Quyển I: Viện Mồ Côi Dưới Ánh Hắc Nhật & Nghi Thức Đi Qua Bếp Lửa", en: "Volume I: The Orphanage Beneath the Crimson Moon & the Hearth Ritual" },
        body: {
          vi: [
            "Câu chuyện diễn ra tại vương quốc ngầm **[[khaenriah]]** vào thời đại **Vương triều Hắc Nhật (Crimson Moon Dynasty)** – trước khi Vương triều Nhật Thực (Eclipse Dynasty) lên nắm quyền. Khi ấy, học viện tối cao *Universitas Magistrorum* (dưới sự lãnh đạo của **Hroptatyr** – người về sau trở thành một trong Năm Tội Đồ) nhận thấy thỉnh thoảng có những sinh vật và con người từ ngoài thế giới trôi dạt vào Teyvat.",
            "Với khát vọng tìm được một **\"Kẻ Đổ Bộ\" (Outlander / Descender)** có khả năng vượt qua quyền năng của thần linh, nhà vua đã lập ra một viện mồ côi đặc biệt (tiền thân cổ đại của **Căn Nhà Hơi Ấm** do [[arlecchino]] điều hành sau này).",
            "Mỗi đứa trẻ được đưa vào viện phải thực hiện một nghi lễ khắc nghiệt: bò qua một đường hầm tối đen như ống khói đầy than hồng đang cháy rực. Khi đến cuối đường hầm, người lớn hỏi cậu bé **Perinheri**: *\"Ngươi đã chết chưa?\"* – Perinheri đáp: *\"Rồi.\"* – *\"Ngươi đã nhìn thấy điều gì trong lúc chết?\"* – Perinheri kể rằng trong bóng tối vũ trụ, cậu thấy một **vầng Hắc Nhật (Mặt Trăng Đỏ)** khổng lồ quay lại thành một con mắt nhìn chằm chằm vào cậu. Bước ra khỏi bếp lửa để \"tái sinh giữa hai thế giới\", Perinheri lớn lên thành kỵ sĩ bất khả chiến bại của vương quốc, kết thân cùng người bạn kiêm đối thủ là **Hleobrant**."
          ],
          en: [
            "Set in **[[khaenriah]]** during the **Crimson Moon Dynasty** (predating the Eclipse Dynasty), the *Universitas Magistrorum* (led by **Hroptatyr**) knew that beings from beyond the world occasionally drifted into Teyvat.",
            "Hoping to welcome an **Outlander (Descender)** who could transcend the gods, the kingdom established a state orphanage (the ancient precursor to [[arlecchino]]'s **House of the Hearth**).",
            "Each child underwent a ritual of crawling through a pitch-black chimney tunnel of burning coals. Asked at the exit, *\"Have you died?\"*, the boy **Perinheri** answered *\"Yes,\"* recounting a vision of a colossal **Crimson Moon** turning into a glaring eye in the dark void. Reborn between two worlds, Perinheri grew into Khaenri'ah's undefeated champion alongside his friend and rival **Hleobrant**."
          ]
        }
      },
      {
        title: { vi: "Quyển II: Thiếu Nữ Angelica và Lời Nguyền Hoá Thú Ngoài Biên Giới", en: "Volume II: The Maiden Angelica and the Beast Curse Beyond the Border" },
        body: {
          vi: [
            "Một người phụ nữ tuyệt sắc tên là **Angelica** đến Khaenri'ah từ vùng đất [[liyue]] – nơi vị Ma Thần mà cô tôn thờ đã tử trận trong Chiến tranh Ma Thần, và cô từ chối khuất phục dưới trướng Nham Vương Đế Quân [[zhongli|Morax]]. Angelica tuyên bố cô sẽ chỉ kết hôn với kỵ sĩ mạnh nhất vương quốc.",
            "Trong khi Perinheri hoàn toàn thờ ơ, thì **Hleobrant** lại say mê Angelica đến mức phát cuồng, liên tục thách đấu các kỵ sĩ khác. Cuối cùng, Hleobrant và Angelica rời khỏi Khaenri'ah để đi lên mặt đất; lo lắng cho bạn và cho rằng chỉ có giết Angelica mới cứu được Hleobrant khỏi sự mê muội, Perinheri đã cầm đôi kiếm đuổi theo họ suốt dọc đường.",
            "Tuy nhiên, ngay khoảnh khắc cả ba người vừa bước qua biên giới Khaenri'ah để đặt chân ra dưới ánh mặt trời/ánh trăng của mặt đất (lãnh thổ của Thất Thần), **Hleobrant đột nhiên ôm lấy mặt gào thét đau đớn, giọng nói biến thành tiếng rú của dã thú** – anh ta lập tức biến thành một con **Hilichurl** ([[hilichurl-cultural-customs]])!",
            "Đứng trước một Perinheri đang bàng hoàng, Angelica bình thản giải thích sự thật: **Hleobrant bị biến thành quái vật vì tổ tiên của anh ta vốn là thần dân trên mặt đất đã phản bội vị thần của mình để trốn xuống Khaenri'ah**, nên ngay khi bước ra dưới bầu trời của Thiên Lý, lời nguyền phản bội lập tức phát tác. Ngược lại, **Angelica không bị nguyền rủa** vì cô chưa từng phản bội vị thần đã khuất của mình; còn **Perinheri cũng không bị biến thành Hilichurl** vì cậu thực sự là một **Kẻ Ngoại Giới** không mang dòng máu tội lỗi của Teyvat! Sau khi cởi bỏ lớp trang phục để chứng minh thân phận tự do của mình, Angelica biến mất, để lại Perinheri một mình nơi biên giới."
          ],
          en: [
            "A woman named **Angelica** arrived in Khaenri'ah from [[liyue]], explaining that her god had perished in the Archon War and she refused to submit to [[zhongli|Morax]]. When Angelica declared she would wed only the mightiest knight, **Hleobrant** became hopelessly infatuated with her.",
            "When Hleobrant and Angelica fled toward the surface world, a worried Perinheri pursued them, believing only slaying Angelica would break his friend's obsession.",
            "Yet the very instant the three stepped past Khaenri'ah's border into the surface world, **Hleobrant clutched his face as his voice degraded into the howling of a wild beast** – transforming before their eyes into a **Hilichurl** ([[hilichurl-cultural-customs]])!",
            "Angelica calmly explained the truth to the stunned Perinheri: **Hleobrant mutated because his ancestors were surface dwellers who had betrayed their god to flee to Khaenri'ah**, triggering the curse upon re-entering the gods' dominion. By contrast, **Angelica was spared** because she had never betrayed her fallen god, while **Perinheri was immune** because he was truly an **outlander from beyond this world**!"
          ]
        }
      }
    ],
    sections: [
      {
        title: { vi: "Viện mồ côi dưới ánh Hắc Nhật và nghi thức đi qua bếp lửa", en: "The orphanage beneath the Crimson Moon and the hearth ritual" },
        body: {
          vi: [
            "Cuốn sách kể về thời kỳ **Vương triều Hắc Nhật** (trước thời Vương triều Nhật Thực) tại [[khaenriah]]. Khi ấy, học viện *Universitas Magistrorum* (dưới sự đứng đầu của Hroptatyr – người về sau trở thành một trong Năm Tội Đồ) xây dựng một trại trẻ đón nhận những đứa trẻ \"trôi dạt từ biển sao bên ngoài thế giới\" (tiền thân cổ đại của Căn Nhà Hơi Ấm do [[arlecchino]] điều hành).",
            "Nhân vật chính Perinheri đã bước qua một đường hầm tối như ống khói đầy than hồng để \"chết đi và tái sinh giữa hai thế giới\", trở thành chiến binh bất khả chiến bại của Khaenri'ah trước khi cùng thiếu nữ Angelica (một người đến từ [[liyue]] có vị thần đã tử trận) trốn chạy khỏi vương quốc ngầm. Khi bước ra ánh trăng bên ngoài biên giới Khaenri'ah, người đồng hành Hleobrant lập tức biến thành quái vật (hilichurl) vì mang dòng máu phản bội thần linh của mình."
          ],
          en: [
            "The book depicts the **Crimson Moon Dynasty** (predating the Eclipse Dynasty) in [[khaenriah]]. At the time, the *Universitas Magistrorum* (led by Hroptatyr, later one of the Five Sinners) built an institution to take in children \"who drifted in from the sea of stars\" (the ancient precursor to [[arlecchino]]'s House of the Hearth).",
            "The protagonist Perinheri crawled through a pitch-black hearth tunnel of burning coals to \"die and be reborn between two worlds\", becoming Khaenri'ah's undefeated champion before fleeing the underground kingdom alongside Angelica (a refugee from [[liyue]] whose god had fallen). Upon stepping into the moonlight outside Khaenri'ah's border, their companion Hleobrant instantly transformed into a beast (hilichurl) for having forsaken his original god."
          ]
        }
      }
    ],
    theories: [
      {
        title: { vi: "Lời nguyền thành Hilichurl đã tồn tại từ trước Đại Thảm Hoạ 500 năm trước!", en: "The Hilichurl curse existed long before the Cataclysm 500 years ago!" },
        body: {
          vi: "Chi tiết Hleobrant biến thành quái vật ngay khi bước ra khỏi biên giới Khaenri'ah chứng minh rằng lời nguyền biến con người thành hilichurl ([[hilichurl-cultural-customs]]) không chỉ mới xuất hiện 500 năm trước, mà là cơ chế của Thiên Lý áp lên những cư dân mặt đất từ bỏ vị thần của mình để trốn xuống Khaenri'ah.",
          en: "Hleobrant transforming into a monster upon leaving Khaenri'ah's border proves that the hilichurl curse ([[hilichurl-cultural-customs]]) did not originate solely 500 years ago, but was an ancient mechanism of the Heavenly Principles afflicting surface dwellers who forsook their gods to live in Khaenri'ah."
        },
        sources: [{ label: "r/Genshin_Lore – Perinheri & Hilichurl Curse", url: "https://www.reddit.com/r/Genshin_Lore/search/?q=Perinheri" }]
      }
    ],
    sources: [{ label: "Fandom: Perinheri", url: "https://genshin-impact.fandom.com/wiki/Perinheri" }],
    related: ["khaenriah", "arlecchino", "hilichurl-cultural-customs", "dainsleif", "liyue"]
  },

  {
    id: "pale-princess",
    type: "book",
    name: { vi: "Công Chúa Bạc Màu Và Sáu Chú Lùn (The Pale Princess and the Six Pygmies)", en: "The Pale Princess and the Six Pygmies" },
    subtitle: { vi: "Bộ sách cổ tích 7 quyển bị Giáo Đoàn Vực Sâu săn lùng", en: "7-volume allegorical fairytale series hunted by the Abyss Order" },
    region: { vi: "Mondstadt / Teyvat", en: "Mondstadt / Teyvat" },
    summary: {
      vi: "Bộ truyện cổ tích 7 quyển mà ngay đầu game Pháp Sư Vực Sâu đã đột nhập Thư viện Mondstadt để đánh cắp vì nó \"chứa đựng bí mật tối thượng\" về Công Chúa Bạc Màu, Hoàng Tử Ánh Sáng và sự phản bội của Sáu Chú Lùn.",
      en: "The 7-volume fairytale series that prompted an Abyss Mage to infiltrate Mondstadt's library at the start of the game because it \"contains the secret\" of the Pale Princess, the Prince of Light, and the Six Pygmies."
    },
    chapters: [
      {
        title: { vi: "Quyển I: Vương Quốc Đêm Tối và Rừng Ánh Trăng (Đã phát hành trong game)", en: "Volume I: The Land of Night and the Moonlight Forest (In-Game)" },
        body: {
          vi: [
            "Ngày xửa ngày xưa, ở một nơi rất xa, có một **Vương Quốc Đêm Tối** u ám. Cai trị vùng đất ấy là **Mẫu Thần Đêm Tối (Night Mother)** tàn ác – một thực thể không có trái tim để yêu thương và cũng không có cái miệng để nói lời tử tế, chỉ có vô số con mắt lạnh lẽo rình rập trong bóng tối (ẩn dụ cho **Vực Sâu / The Abyss**). Thứ duy nhất mà Mẫu Thần Đêm Tối căm ghét là ánh sáng mặt trăng rò rỉ qua những đám mây.",
            "Ở rìa của bóng đêm ấy là **Rừng Ánh Trăng** – vương quốc duy nhất thoát khỏi sự cai trị của Mẫu Thần Đêm Tối. Những cư dân sống dưới ánh trăng bạc tại đây đều có **làn da trắng ngần, mái tóc sáng màu và đôi mắt xanh trong vắt** (đặc điểm giống hệt cư dân của [[hyperborea]] và [[khaenriah]] cổ đại).",
            "Đứng đầu Vương Quốc Ánh Trăng là **Công Chúa Bạc Màu (Pale Princess)** nhân hậu, người nắm giữ lời hứa rằng một ngày nào đó, vị anh hùng từ vương quốc của ánh sáng rực rỡ sẽ đến đưa nàng và người dân bước ra dưới ánh mặt trời."
          ],
          en: [
            "Long ago, in a faraway land, lay the lightless **Land of Night** ruled by the cruel **Night Mother** – an entity with neither heart nor mouth, embodying the primordial darkness of the **Abyss**. The only thing the Night Mother despised was the moonlight seeping through the clouds.",
            "At the edge of that darkness stood the **Moonlight Forest** – the sole kingdom free from the Night Mother's grasp. Its inhabitants had **fair skin, light-colored hair, and bright blue eyes** (traits matching ancient [[hyperborea]] and [[khaenriah]]).",
            "Ruling the Moonlight Kingdom was the benevolent **Pale Princess**, who held fast to the promise that a hero from the realm of radiant light would one day come to lead her people into the sun."
          ]
        }
      },
      {
        title: { vi: "Quyển II – IV: Sự Xuất Hiện Của Hoàng Tử Ánh Sáng & Cuộc Gặp Với Sáu Chú Lùn", en: "Volumes II – IV: Arrival of the Prince of Light & Meeting the Six Pygmies" },
        body: {
          vi: [
            "Đúng như lời ước hẹn, **Hoàng Tử Ánh Sáng (Prince of Light)** từ vương quốc bên kia bầu trời đã đặt chân đến Rừng Ánh Trăng. Ánh hào quang ấm áp phát ra từ cơ thể chàng xua tan sương giá, cứu sống cây cối và khiến Công Chúa Bạc Màu đem lòng yêu chàng tha thiết (tương ứng với mối tình giữa **Thiên Sứ Đầu Tiên Koitar & Kẻ Du Hành Seutervoinen**, hoặc **Nữ Hoàng Anastasya & Kẻ Đổ Bộ Thứ Ba Saarelainen** trong [[hymns-of-the-far-north]]).",
            "Hai người quyết định cùng nhau rời khỏi Rừng Ánh Trăng để giải cứu những vùng đất đang bị Mẫu Thần Đêm Tối giam cầm. Trên đường đi, lòng nhân từ của Công Chúa và sức mạnh của Hoàng Tử đã cứu giúp **Sáu Chú Lùn** dị dạng của tộc người lùn:\n  1. **Chú lùn Mù (The Blind Pygmy)** – leo lên vai Công Chúa để nàng làm đôi mắt cho hắn (đối chiếu với nhà tiên tri mù **Vedrfolnir**).\n  2. **Chú lùn Ngốc (The Foolish Pygmy)** – kẻ bị mắc kẹt trong bùn lầy.\n  3. **Chú lùn Nhát Gan (The Timid Pygmy)**.\n  4. **Chú lùn Teo Nhỏ (The Shrunken Pygmy)** – kẻ luôn khao khát tạo ra sự sống mới trong khu vườn (đối chiếu với nhà giả kim **[[rhinedottir]]**).\n  5. **Chú lùn Vô Tâm (The Carefree Pygmy)**.\n  6. **Chú lùn Tàn Tật / Mang Khuyết Tật (The Deformed Pygmy)** – kẻ duy nhất thực lòng biết ơn Hoàng Tử và Công Chúa."
          ],
          en: [
            "As promised, the **Prince of Light** arrived from beyond the sky. His warm radiance revived the forest and won the heart of the Pale Princess (paralleling **First Angel Koitar & Voyager Seutervoinen**, or **Tsaritsa Anastasya & Third Descender Saarelainen** in [[hymns-of-the-far-north]]).",
            "Setting out together, the Prince and Princess rescued **Six Pygmies** along their journey:\n  1. **The Blind Pygmy** (paralleling the blinded prophet **Vedrfolnir**).\n  2. **The Foolish Pygmy**.\n  3. **The Timid Pygmy**.\n  4. **The Shrunken Pygmy** – obsessed with cultivating life in a garden (paralleling **[[rhinedottir]]**).\n  5. **The Carefree Pygmy**.\n  6. **The Deformed Pygmy** – the only one who felt genuine gratitude and remorse."
          ]
        }
      },
      {
        title: { vi: "Quyển V – VII: Âm Mưu Chia Xác Hoàng Tử Ánh Sáng & Lời Tiên Tri Nghìn Năm", en: "Volumes V – VII: Dismemberment of the Prince of Light & the Millennial Prophecy" },
        body: {
          vi: [
            "Khi cả đoàn dừng chân nghỉ đêm bên dòng suối, nguồn sức mạnh thần thánh toả ra từ cơ thể của **Hoàng Tử Ánh Sáng** đã đánh thức lòng tham và bản chất đen tối của lũ chú lùn. Dưới lời thì thầm cám dỗ của Mẫu Thần Đêm Tối, **5 chú lùn đầu tiên** đã bàn mưu phản bội ân nhân của mình (chỉ có chú lùn thứ sáu đau đớn phản đối nhưng không ngăn cản kịp).",
            "Lũ chú lùn nhỏ nước độc vào tai Hoàng Tử khi chàng đang ngủ say, giam cầm **Công Chúa Bạc Màu** trong xiềng xích băng giá không thể cất tiếng nói, rồi **cùng nhau chia xẻo cơ thể và sức mạnh của Hoàng Tử Ánh Sáng** (chi tiết ẩn dụ trực tiếp cho việc **Năm Tội Đồ Của [[khaenriah]]** chia nhau sức mạnh thế giới trong khi [[dainsleif]] bất lực, cũng như việc thi hài của **Kẻ Đổ Bộ Thứ Ba** bị xẻ thành 7 chiếc **[[gnosis]]**!).",
            "Quá hối hận và sợ hãi, **chú lùn thứ sáu** đã lén thu gom phần thi hài còn sót lại của Hoàng Tử Ánh Sáng, mang giấu vào trong hốc của một cái cây cổ thụ khô héo ([[irminsul]]). Khi Mẫu Thần Đêm Tối hiện lên nguyền rủa vùng đất, bà để lại một lời tiên tri đáng sợ: *\"Sau hàng nghìn năm nữa, kẻ thù lớn nhất của ta sẽ giáng thế. Hắn sẽ cầm thanh kiếm thức tỉnh Công Chúa từ giấc ngủ băng giá và bắt các ngươi trả lại toàn bộ những gì đã đánh cắp!\"*"
          ],
          en: [
            "While camping beside a stream, the divine power radiating from the sleeping **Prince of Light** awakened the pygmies' greed. Whispered to by the Night Mother, **five of the pygmies** conspired to betray their saviors (while the sixth pygmy protested in vain).",
            "They poured poison into the sleeping Prince's ear, bound the **Pale Princess** in icy chains, and **dismembered the Prince of Light to divide his power among themselves** (directly mirroring the **Five Sinners of [[khaenriah]]** dividing world-shattering power while [[dainsleif]] stood opposed, as well as the **Third Descender** being carved into the seven **[[gnosis|Gnoses]]**!).",
            "Consumed by guilt, the **sixth pygmy** secretly gathered the Prince's remaining body and hid it inside the hollow of a withered tree ([[irminsul]]). The Night Mother then pronounced a prophecy: *\"In thousands of years, my greatest foe will descend, awaken the Princess from her frozen slumber, and reclaim everything that was stolen!\"*"
          ]
        }
      }
    ],
    sections: [
      {
        title: { vi: "Vương quốc Ánh Trăng, Hoàng Tử Ánh Sáng và sự phản bội của Sáu Chú Lùn", en: "The Moonlight Forest, the Prince of Light, and the Six Pygmies' betrayal" },
        body: {
          vi: [
            "Trong nhiệm vụ của Lisa ngay đầu game tại [[mondstadt]], một Pháp Sư Vực Sâu đã liều mạng đánh cắp tập 1 của bộ sách này. Nội dung truyện kể về Vương Quốc Bóng Đêm của Mẫu Thần Đêm Tối (Vực Sâu), rừng Ánh Trăng của **Công Chúa Bạc Màu** và **Hoàng Tử Ánh Sáng** từ phương xa tới cứu công chúa.",
            "Trên đường đi, họ cứu giúp **Sáu Chú Lùn** dị dạng (mù, ngốc, nhát, teo nhỏ, tàn tật, vô tâm). Nhưng bị lòng tham cám dỗ, năm chú lùn đã bàn mưu hạ độc và chia xẻo cơ thể đang ngủ say của Hoàng Tử Ánh Sáng, còn chú lùn thứ sáu mang xác hoàng tử giấu vào hốc cây, để lại lời tiên tri về một vị anh hùng sẽ tới sau hàng nghìn năm."
          ],
          en: [
            "In Lisa's early story quest in [[mondstadt]], an Abyss Mage risked its life to steal Volume I of this book. The tale speaks of the Night Mother's Land of Night (the Abyss), the **Pale Princess** of the Moonlight Forest, and the **Prince of Light** who came to rescue her.",
            "Along the way, they aided **Six Pygmies** (Blind, Foolish, Timid, Shrunken, Carefree, Deformed). Tempted by greed, five of the pygmies conspired to poison and dismember the sleeping Prince of Light, while the sixth hid the prince's body in a tree hollow, leaving a prophecy of a hero arriving millennia later."
          ]
        }
      }
    ],
    theories: [
      {
        title: { vi: "Ẩn dụ kép: Vừa là Năm Tội Đồ Khaenri'ah, vừa là Kẻ Đổ Bộ Thứ Ba Saarelainen", en: "Dual Allegory: Both the Five Sinners of Khaenri'ah and the Third Descender Saarelainen" },
        body: {
          vi: "Sau khi [[irminsul]] xoá bỏ thông tin trực tiếp, các câu chuyện cổ tích đóng vai trò lưu giữ lịch sử thật: 5 chú lùn phản bội + 1 chú lùn trung thành tương ứng với **Năm Tội Đồ của [[khaenriah]] + [[dainsleif]]**, còn Hoàng Tử Ánh Sáng bị chia xác và Công Chúa bị đóng băng tương ứng với **Kẻ Đổ Bộ Thứ Ba Saarelainen** (7 [[gnosis]]) và **[[tsaritsa|Nữ Hoàng Băng Giá]]** trong [[hymns-of-the-far-north]].",
          en: "Because fairytales survive [[irminsul]] erasures, the 5 betraying pygmies + 1 remorseful pygmy mirror the **Five Sinners of [[khaenriah]] + [[dainsleif]]**, while the dismembered Prince of Light and frozen Princess mirror the **Third Descender Saarelainen** (the [[gnosis|Gnoses]]) and the **[[tsaritsa]]** in [[hymns-of-the-far-north]]."
        },
        sources: [{ label: "r/Genshin_Lore – Pale Princess & Six Pygmies", url: "https://www.reddit.com/r/Genshin_Lore/search/?q=Pale%20Princess%20Six%20Pygmies" }]
      }
    ],
    sources: [{ label: "Fandom: The Pale Princess and the Six Pygmies", url: "https://genshin-impact.fandom.com/wiki/The_Pale_Princess_and_the_Six_Pygmies" }],
    related: ["khaenriah", "dainsleif", "rhinedottir", "gnosis", "hyperborea", "hymns-of-the-far-north", "tsaritsa", "mondstadt"]
  },

  {
    id: "moonlit-bamboo-forest",
    type: "book",
    name: { vi: "Trúc Lâm Nguyệt Dạ (Moonlit Bamboo Forest)", en: "Moonlit Bamboo Forest" },
    subtitle: { vi: "Bộ sách 4 quyển về nguồn gốc Ba Chị Em Mặt Trăng (Aria, Sonnet, Canon) và Tiên Nhân Bạch Mã", en: "4-volume series on the origin of the Three Moon Sisters (Aria, Sonnet, Canon) and the White Horse Adeptus" },
    region: { vi: "Liyue / Vũ trụ Teyvat", en: "Liyue / Cosmic Teyvat" },
    summary: {
      vi: "Bộ sách 4 quyển tại Liyue kể về Tiên Nhân Bạch Mã mắt vàng (con gái của Thời Gian Istaroth) và nguồn gốc của Ba Chị Em Mặt Trăng do Long Vương Nibelung tạo ra trước khi vỡ vụn thành mặt trăng chết ngày nay, vùng đất Nod-Krai và Trăng Đỏ của Khaenri'ah.",
      en: "A 4-volume Liyue book series featuring the golden-eyed White Horse Adeptus (a daughter of Time) and the myth of the Three Moon Sisters created by Dragon King Nibelung before shattering into today's dead moon, Nod-Krai, and Khaenri'ah's Crimson Moon."
    },
    chapters: [
      {
        title: { vi: "Quyển I: Cậu Bé Lạc Trong Rừng Trúc Khinh Sách", en: "Volume I: The Boy Lost in Qingce's Bamboo Grove" },
        body: {
          vi: [
            "Tại vùng núi gần Khinh Sách Trang ở [[liyue]], người dân truyền tai nhau lời dặn không được đi sâu vào rừng trúc khi trời mưa đêm, vì nơi đó có bóng ma và tiên thú. Một cậu bé hiếu kỳ đã đi lạc vào sâu trong rừng trúc dưới ánh trăng bạc.",
            "Tại bên bờ suối, cậu gặp một người phụ nữ mặc trang phục lụa trắng tuyệt đẹp với **đôi mắt màu vàng rực như hổ phách** (đặc điểm của các Tiên Nhân nhưng cao quý và cổ xưa hơn). Nhận lời dẫn cậu bé ra khỏi rừng, người phụ nữ bắt đầu kể cho cậu nghe câu chuyện về bầu trời đêm thuở hồng hoang."
          ],
          en: [
            "Near Qingce Village in [[liyue]], a curious boy wandered deep into the rain-swept bamboo forest at night.",
            "By a stream, he met a woman in white silk with **radiant golden eyes**. Agreeing to guide the boy out of the woods, she began recounting the ancient history of the night sky."
          ]
        }
      },
      {
        title: { vi: "Quyển II & III: Cỗ Xe Bạc Của Ba Chị Em Mặt Trăng – Aria, Sonnet và Canon", en: "Volumes II & III: The Silver Carriage of the Three Moon Sisters – Aria, Sonnet, and Canon" },
        body: {
          vi: [
            "Người phụ nữ mắt vàng kể rằng: thuở xa xưa lắm, từng có tới **ba vầng mặt trăng** trên bầu trời đêm, là ba chị em nữ thần tên là **Aria (Hằng Nguyệt)**, **Sonnet (Sương Nguyệt)** và **Canon (Hồng Nguyệt / Cầu Vồng Nguyệt)** – những thực thể được **Long Vương Nibelung** tạo ra trước khi ông rời Teyvat để thay ông cai quản chu kỳ thế giới. Vùng đất tổ của ba chị em còn xưa hơn cả Nham Vương Đế Quân [[zhongli]] hàng vạn năm.",
            "Ba chị em là những nữ thi sĩ của thơ ca và âm nhạc, cùng cưỡi trên một **cỗ xe bằng bạc** tuần du qua bầu trời sao. Cứ mỗi mười ngày (một tuần trăng), một người chị em sẽ nhường lại ngai vị cai quản bầu trời cho người tiếp theo.",
            "Cả ba chị em nữ thần mặt trăng đều đem lòng yêu một thực thể duy nhất: **Ngôi Sao Mai lúc bình minh** (gắn liền với Thiên Sứ Đầu Tiên **Koitar** và Kẻ Du Hành **Seutervoinen** trong [[hymns-of-the-far-north]]). Chỉ vào khoảnh khắc giao thời ngắn ngủi trước khi bình minh ló dạng, một trong ba chị em mới có thể lướt qua những ngôi sao đang tắt dần để bước vào cung điện của ngôi sao mai."
          ],
          en: [
            "The golden-eyed woman recounted that in remote antiquity there were **three moons** in the night sky – three goddess sisters named **Aria (Eternal Moon)**, **Sonnet (Frost Moon)**, and **Canon (Iridescent Moon)**, created by **Dragon King Nibelung** before his departure to govern the world's cycles, predating [[zhongli|Rex Lapis]] by eons.",
            "The three sisters were poetesses of song who rode a **silver carriage** across the heavens, rotating their rule every ten days.",
            "All three sisters longed for the **morning star at dawn** (linked to First Angel **Koitar** and Voyager **Seutervoinen** in [[hymns-of-the-far-north]]), visiting its palace only in the fleeting moments before daybreak."
          ]
        }
      },
      {
        title: { vi: "Quyển IV: Tai Hoạ Lật Đổ Cỗ Xe Bạc & Thân Phận Tiên Nhân Bạch Mã", en: "Volume IV: The Calamity that Overturned the Silver Carriage & the White Horse Adeptus" },
        body: {
          vi: [
            "*\"Thế rồi chuyện gì đã xảy ra với ba mặt trăng ạ?\"* – cậu bé hỏi. Người phụ nữ mắt vàng thở dài: khi đại tai hoạ giáng xuống (Cuộc Chiến Tang Lễ Lửa khi Nibelung mang Vực Sâu trở về và giam cầm các mặt trăng), **cỗ xe bằng bạc bị đánh lật nhào và các sảnh đường của ngôi sao bị phá huỷ**.",
            "Ba chị em của màn đêm từ chỗ yêu thương đã trở mặt thành thù và tàn sát lẫn nhau, cuối cùng chỉ còn lại cái chết tái nhợt. Hai mặt trăng vỡ tan thành bụi mịn (Sương Nguyệt rơi xuống tạo thành [[snezhnaya|Nod-Krai]], bóng của Hồng Nguyệt chìm xuống Vực Sâu thành Trăng Đỏ của [[khaenriah]]), chỉ còn lại **một thi hài lạnh lẽo** vẫn đang toả ánh sáng mờ nhạt trên bầu trời đêm ngày nay.",
            "Khi dẫn cậu bé ra tới bìa rừng trúc lúc bình minh, người phụ nữ tiết lộ mình từng là một **con ngựa trắng phi nước đại bên suối nguồn cổ xưa** (Tiên Nhân Bạch Mã của vùng đất cổ Lang-Gan / [[chasm-civilization]], một \"con gái của Thời Gian\" [[venti|Istaroth]]) trước khi biến mất trong sương sớm."
          ],
          en: [
            "When the great calamity struck (the War of Funerary Flame), **the silver carriage was overturned and the halls of the stars were shattered**.",
            "The three sisters of the night turned against one another in death. Two moons shattered into dust (forming [[snezhnaya|Nod-Krai]] and [[khaenriah]]'s Crimson Moon), leaving only **one pale corpse** shedding cold light in today's night sky.",
            "At the edge of the grove at dawn, the woman revealed that she was once a **white駿steed galloping beside ancient springs** (the White Horse Adeptus, a \"daughter of Time\" [[venti|Istaroth]]) before vanishing into the morning mist."
          ]
        }
      }
    ],
    sections: [
      {
        title: { vi: "Ai đã tạo ra Ba Chị Em Mặt Trăng? Vai trò của Long Vương Nibelung", en: "Who Created the Three Moon Sisters? The Role of Dragon King Nibelung" },
        body: {
          vi: [
            "Trước khi **Kẻ Đổ Bộ Thứ Nhất** (Đấng Nguyên Sơ) xuất hiện, Teyvat thuộc về loài rồng dưới sự thống trị của **Long Vương Nibelung**. Khi Nibelung chuẩn bị rời Teyvat để du hành ra ngoài vũ trụ tối tăm, chính ông đã tạo ra **Ba Mặt Trăng** – **Hằng Nguyệt (Eternal Moon)**, **Sương Nguyệt (Frost Moon)** và **Hồng Nguyệt / Cầu Vồng Nguyệt (Iridescent Moon)** – cùng ba vị nữ thần mặt trăng là **Aria, Sonnet và Canon** để thay ông cai quản chu kỳ vận hành, thuỷ triều và duy trì sự ổn định của thế giới.",
            "Trong cuốn *Trúc Lâm Nguyệt Dạ*, một người phụ nữ mắt vàng tại rừng trúc [[liyue]] (được xác nhận là **Tiên Nhân Bạch Mã** có nguồn gốc từ Trầm Ngọc Cốc, một \"con gái của Thời Gian\" [[venti|Istaroth]]) kể cho cậu bé lạc đường nghe rằng: ba chị em nữ thần mặt trăng cưỡi trên một cỗ xe bằng bạc đi qua bầu trời đêm, cứ mười ngày lại đổi ngôi cai quản cho nhau một lần, và cả ba đều đem lòng yêu ngôi sao mai lúc bình minh."
          ],
          en: [
            "Before the **First Descender** (the Primordial One) arrived, Teyvat was ruled by **Dragon King Nibelung**. Before departing Teyvat to journey into the cosmos, Nibelung himself created the **Three Moons** – the **Eternal Moon**, the **Frost Moon**, and the **Iridescent Moon** – along with their three lunar goddesses, **Aria, Sonnet, and Canon**, to govern the world's cycles and stability in his absence.",
            "In *Moonlit Bamboo Forest*, a golden-eyed woman in [[liyue]]'s bamboo grove (the **White Horse Adeptus** of Chenyu Vale, a \"daughter of Time\" [[venti|Istaroth]]) tells a lost boy how the three sisters rode a silver carriage across the vault of heaven, rotating their rule every ten days."
          ]
        }
      },
      {
        title: { vi: "Sự phản bội trong Cuộc Chiến Tang Lễ Lửa và số phận của 3 xác Mặt Trăng", en: "The War of Funerary Flame and the Fate of the Three Shattered Moons" },
        body: {
          vi: [
            "Khi Đấng Nguyên Sơ đánh bại Bảy vị Long Vương ([[before-sun-and-moon]]), Hoả Long Vương Xiuhcoatl ở [[ochkanatlan]] từng cầu cứu Ba Chị Em Mặt Trăng nhưng họ giữ im lặng vì đã thoả hiệp với trật tự mới của Thiên Lý để bảo vệ sinh linh. Dưới thời [[unified-civilization]], Ba Mặt Trăng còn làm chứng cho hôn lễ giữa Tiên Linh (Seelie) thuỷ tổ và vị lữ khách ngoại giới ([[flower-of-paradise-lost]]).",
            "Tuy nhiên, khi **Long Vương Nibelung** mang **Tri Thức Cấm Kỵ (Vực Sâu)** quay về phát động **Cuộc Chiến Tang Lễ Lửa (War of Funerary Flame)**, ông nổi giận vì cho rằng Ba Chị Em Mặt Trăng đã phản bội loài rồng để phục tùng \"Kẻ Soán Ngôi\". Nibelung giam cầm ba nữ thần và biến các Mặt Trăng thành vũ khí chiến tranh. Hậu quả thảm khốc là cỗ xe bạc bị đánh lật, ba chị em tàn sát lẫn nhau và để lại ba di sản lớn suốt lịch sử Teyvat:\n  1. **Hằng Nguyệt (Eternal Moon – Aria):** Chết trên quỹ đạo; xác chết và Tủy Mặt Trăng (Moon Marrow) của Aria trở thành thánh tích của Hậu Duệ Sương Nguyệt.\n  2. **Hồng Nguyệt / Cầu Vồng Nguyệt (Iridescent Moon – Sonnet):** Khi tan vỡ đã hợp nhất với Vực Sâu biến thành **Xích Nguyệt (Crimson Moon)** chiếu rọi trên bầu trời vương quốc ngầm **[[khaenriah]]** thời **Vương triều Xích Nguyệt** – nguồn gốc dòng máu lửa của **[[arlecchino]]** và câu chuyện trong sách **[[perinheri]]**!\n  3. **Sương Nguyệt (Frost Moon – Canon):** Bị đày ra ngoài Bầu Trời Giả trong tình trạng nguyên vẹn nhưng mất kết nối khiến Canon qua đời. Sau này vùng đất gắn với Sương Nguyệt trở thành **[[snezhnaya|Nod-Krai]]**, nơi nữ thần kế vị **[[columbina|Columbina (Kuutar)]]** ra đời."
          ],
          en: [
            "When the Primordial One defeated the Seven Sovereigns ([[before-sun-and-moon]]), Pyro Sovereign Xiuhcoatl in [[ochkanatlan]] appealed to the Moon Sisters, who remained silent after submitting to the Heavenly Principles' new order. During the [[unified-civilization]], the Three Moons witnessed the union of the Seelie ancestor and an outlander traveler ([[flower-of-paradise-lost]]).",
            "Yet when **Dragon King Nibelung** returned with **Forbidden Knowledge (the Abyss)** to wage the **War of Funerary Flame**, he viewed the Moon Sisters' submission as treason, imprisoning them and weaponizing the moons. Their silver carriage was overturned and the moons were shattered into three enduring legacies:\n  1. **Eternal Moon (Aria):** Died in orbit; its shattered corpse coalesced into the Eternal Moon Marrow preserved by the Frostmoon Scions.\n  2. **Iridescent Moon (Sonnet):** Shattered and merged with Abyssal power to become the **Crimson Moon** over **[[khaenriah]]**'s **Crimson Moon Dynasty** – origin of **[[arlecchino]]**'s balemoon bloodline and **[[perinheri]]**.\n  3. **Frost Moon (Canon):** Exiled intact beyond the False Sky, severed from Teyvat until Canon perished; centuries later **[[columbina|Columbina (Kuutar)]]** emerged as its living successor in **[[snezhnaya|Nod-Krai]]**."
          ]
        }
      }
    ],
    theories: [],
    sources: [
      { label: "Fandom: Moonlit Bamboo Forest", url: "https://genshin-impact.fandom.com/wiki/Moonlit_Bamboo_Forest" },
      { label: "Fandom: Aria, Sonnet and Canon", url: "https://genshin-impact.fandom.com/wiki/Aria,_Sonnet_and_Canon" }
    ],
    related: ["liyue", "unified-civilization", "before-sun-and-moon", "hyperborea", "snezhnaya", "columbina", "hymns-of-the-far-north", "khaenriah", "arlecchino", "perinheri", "ochkanatlan"]
  },

  {
    id: "hilichurl-cultural-customs",
    type: "book",
    name: { vi: "Khảo Sát Tập Tục Hilichurl (Hilichurl Cultural Customs)", en: "Hilichurl Cultural Customs" },
    subtitle: { vi: "Bộ sách 4 quyển khảo cứu ngôn ngữ & tập tục của học giả Ella Musk", en: "4-volume linguistic & anthropological study by Ella Musk" },
    region: { vi: "Mondstadt", en: "Mondstadt" },
    summary: {
      vi: "Bộ sách 4 quyển nghiên cứu ngôn ngữ, tôn giáo, chiếc mặt nạ và nghi thức đón nhận cái chết của loài hilichurl – trở nên ám ảnh và xót xa khi biết nguồn gốc thật sự của họ.",
      en: "A 4-volume study of hilichurl language, religion, masks, and funeral habits – haunting and heartbreaking once you learn their true origin."
    },
    chapters: [
      {
        title: { vi: "Quyển I & II: Tôn Giáo Nguyên Tố & Sự Ám Ảnh Với Chiếc Mặt Nạ", en: "Volumes I & II: Elemental Worship & the Obsession with Masks" },
        body: {
          vi: [
            "**Quyển I (Tín ngưỡng):** Học giả Ella Musk chỉ ra rằng khác với con người ở 7 quốc gia tôn thờ hình tượng cụ thể của Thất Thần (như tượng Phong Thần ở [[mondstadt]]), loài hilichurl không tôn thờ bất kỳ vị thần nào của Celestia mà chỉ thờ phụng sức mạnh nguyên thuỷ của 7 nguyên tố trong tự nhiên.",
            "**Quyển II (Chiếc mặt nạ):** Mọi cá thể hilichurl đều đeo một chiếc mặt nạ xương hoặc gỗ che kín khuôn mặt và không bao giờ tháo ra. Nếu vô tình bị rơi mặt nạ hoặc nhìn thấy khuôn mặt biến dạng hiện tại của mình phản chiếu dưới mặt nước hồ, chúng sẽ rơi vào trạng thái hoảng loạn và đau khổ tột độ – bởi sâu trong tiềm thức, chúng vẫn còn lưu giữ ký ức mơ hồ rằng mình từng là con người bình thường ([[khaenriah]], [[perinheri]])."
          ],
          en: [
            "**Volume I (Religion):** Ella Musk observes that unlike humans who worship The Seven, hilichurls worship no deity of Celestia, instead revering the raw power of the elements.",
            "**Volume II (Masks):** Every hilichurl wears a mask and never removes it. If a hilichurl catches sight of its own twisted reflection in water without a mask, it falls into extreme anguish – because deep in its subconscious, it remembers once having a human face ([[khaenriah]], [[perinheri]])."
          ]
        }
      },
      {
        title: { vi: "Quyển III & IV: Trí Tuệ Của Samachurl & Cách Hilichurl Đón Nhận Cái Chết", en: "Volumes III & IV: Samachurl Elders & How Hilichurls Face Erosion" },
        body: {
          vi: [
            "**Quyển III (Samachurl):** Những cá thể già yếu nhất và chịu sự ăn mòn lâu năm nhất trong bộ lạc sẽ trở thành phù thuỷ Samachurl – những kẻ có khả năng đọc những bài chú ngữ cổ xưa để triệu hồi nguyên tố mà không cần [[vision]].",
            "**Quyển IV (Hành trình cuối đời):** Khác với con người chôn cất người chết, người ta hiếm khi thấy xác hilichurl chết vì tuổi già trên mặt đất. Khi cảm nhận cơ thể và linh hồn đã bị **Sự Bào Mòn (Erosion)** của lời nguyền vắt kiệt đến tận cùng, những con hilichurl già yếu sẽ lặng lẽ tách khỏi bộ lạc, tìm đến những hang động tối tăm, yên tĩnh và sâu thẳm nhất dưới lòng đất (như tại [[chasm-civilization]]) để ngồi im trong bóng tối, nhẹ nhàng chờ đợi linh hồn mình tan biến hoàn toàn."
          ],
          en: [
            "**Volume III (Samachurls):** The oldest, most eroded hilichurls become Samachurls, capable of chanting ancient incantations to channel elements without a [[vision]].",
            "**Volume IV (Facing the End):** When old hilichurls feel their bodies and souls nearing complete **Erosion**, they quietly leave their tribes and descend into the darkest, quietest underground ruins (such as the [[chasm-civilization]]) to sit in silence until their consciousness fades away."
          ]
        }
      }
    ],
    sections: [
      {
        title: { vi: "Những bóng ma đeo mặt nạ của các nền văn minh đã mất", en: "Masked ghosts of lost civilizations" },
        body: {
          vi: [
            "Học giả Ella Musk ghi chép rằng hilichurl không tôn thờ bất kỳ vị thần cụ thể nào của Thất Thần mà chỉ kính sợ sức mạnh tự nhiên của nguyên tố, và luôn đeo mặt nạ để không phải nhìn thấy khuôn mặt biến dạng của chính mình dưới mặt nước.",
            "Sau tiết lộ của [[dainsleif]] tại [[chasm-civilization]] và câu chuyện trong [[perinheri]], ta biết hilichurl thực chất là hậu duệ bị nguyền rủa của người dân [[khaenriah]] và các nền văn minh cổ đại đã sụp đổ. Khi già yếu và bị lời nguyền ăn mòn đến tận cùng, họ tìm về những nơi tối tăm yên tĩnh dưới lòng đất để chờ đợi linh hồn tan biến."
          ],
          en: [
            "Scholar Ella Musk notes that hilichurls worship none of The Seven, instead revering raw elemental forces, and always wear masks so they never have to see their own twisted reflections in water.",
            "Following [[dainsleif]]'s revelations in the [[chasm-civilization]] and the account in [[perinheri]], we know hilichurls are the cursed people of [[khaenriah]] and fallen ancient civilizations. As erosion wears them down in old age, they seek dark, quiet corners underground to await the fading of their souls."
          ]
        }
      }
    ],
    theories: [
      {
        title: { vi: "Ngôn ngữ Hilichurl là tàn dư tiếng cổ của Nền Văn Minh Thống Nhất?", en: "Is Hilichurlian a remnant of the Unified Civilization's tongue?" },
        body: {
          vi: "Một số từ vựng tiếng Hilichurl và các bài thơ cổ cho thấy ngôn ngữ này có mối liên hệ sâu xa với ngôn ngữ chung của con người thời [[unified-civilization]].",
          en: "Vocabulary and ancient poems in Hilichurlian suggest the language preserves fragments of humanity's ancient common tongue from the [[unified-civilization]]."
        },
        sources: [{ label: "r/Genshin_Lore – Hilichurl Language Dictionary", url: "https://www.reddit.com/r/Genshin_Lore/search/?q=hilichurl%20language" }]
      }
    ],
    sources: [{ label: "Fandom: Hilichurl Cultural Customs", url: "https://genshin-impact.fandom.com/wiki/Hilichurl_Cultural_Customs" }],
    related: ["khaenriah", "dainsleif", "perinheri", "chasm-civilization", "loom-of-fate"]
  },

  /* ===================== ĐỒ VẬT & HỆ THỐNG VŨ TRỤ / ITEMS (6) ===================== */
  {
    id: "vision",
    type: "item",
    name: { vi: "Vision (Mắt Thần)", en: "Vision" },
    subtitle: { vi: "Con mắt ngoại tại phản chiếu khát vọng của phàm nhân", en: "External elemental focus reflecting mortal ambition" },
    region: { vi: "Toàn Teyvat", en: "All of Teyvat" },
    summary: {
      vi: "Viên ngọc nguyên tố được ban cho những con người có khát vọng mãnh liệt, vừa là món quà giúp điều khiển nguyên tố, vừa là mắt xích trong hệ thống vận mệnh của Thiên Lý.",
      en: "An elemental gem granted to mortals whose ambition reaches a critical threshold, acting both as a conduit for elemental power and a link in the Heavenly Principles' system of fate."
    },
    sections: [
      {
        title: { vi: "Ai là người thực sự ban phát Vision?", en: "Who truly grants Visions?" },
        body: {
          vi: [
            "Dân gian thường tin rằng Thất Thần là người trực tiếp chọn và trao Vision. Tuy nhiên, thoại nhân vật của Lôi Thần [[raiden-ei]] ([[inazuma]]) và câu chuyện nhân vật của [[neuvillette]] tiết lộ cơ chế thật sự: khi khát vọng của một con người chạm tới ngưỡng định sẵn, hệ thống của Thiên Lý tự động yêu cầu người nắm giữ thẩm quyền nguyên tố tương ứng phải trích ra một mảnh sức mạnh của mình để ban Vision (mà không biết người nhận là ai).",
            "Người sở hữu Vision được [[venti]] gọi là **Genshin** (Nguyên Thần / Allogenes) – những người có tư cách bước lên Celestia. Khi bị tước đoạt Vision, chủ nhân sẽ đánh mất cả khát vọng lẫn ký ức gắn liền với nó."
          ],
          en: [
            "Common folklore holds that The Seven personally handpick Vision recipients. However, [[raiden-ei]]'s ([[inazuma]]) voice-overs and [[neuvillette]]'s character stories reveal the true mechanism: when a mortal's wish reaches a threshold, the system ordained by the Heavenly Principles automatically obligates the holder of that elemental authority to set aside a shard of power to grant a Vision (without knowing the recipient's identity).",
            "Vision bearers are called **Genshin** (Allogenes) by [[venti]] – those with the potential to ascend to Celestia. When stripped of their Vision, bearers lose the ambitions and memories bound to it."
          ]
        }
      }
    ],
    theories: [
      {
        title: { vi: "Vision vừa là phần thưởng vừa là \"xiềng xích số mệnh\"?", en: "Are Visions both a reward and \"chains of fate\"?" },
        body: {
          vi: "Cộng đồng nhận thấy mỗi người nhận Vision đều bị gắn chặt vào một **Chòm Sao** (Constellation) trên bầu trời giả của Teyvat – tức vận mệnh của họ từ đó nằm trong khuôn khổ đã được định đoạt của Thiên Lý.",
          en: "The community notes that Vision holders are bound to a **Constellation** in Teyvat's false sky – meaning their fate is woven tighter into the Heavenly Principles' predetermined tapestry."
        },
        sources: [{ label: "r/Genshin_Lore – Vision & Constellation Fate", url: "https://www.reddit.com/r/Genshin_Lore/search/?q=vision%20constellation%20fate" }]
      }
    ],
    sources: [{ label: "Fandom: Vision", url: "https://genshin-impact.fandom.com/wiki/Vision" }],
    related: ["gnosis", "delusion", "inazuma", "raiden-ei", "furina", "neuvillette", "venti"]
  },

  {
    id: "gnosis",
    type: "item",
    name: { vi: "Gnosis (Tâm Thần)", en: "Gnosis" },
    subtitle: { vi: "Quân cờ trên bàn cờ thần thánh – hài cốt của Kẻ Đổ Bộ Thứ Ba", en: "Chess pieces of the divine – remains of the Third Descender" },
    region: { vi: "Celestia / Thất Thần", en: "Celestia / The Seven" },
    summary: {
      vi: "Bảy vật phẩm mang hình dáng quân cờ vua kết nối Thất Thần với Celestia, được chế tác từ di hài của Kẻ Đổ Bộ Thứ Ba để trấn áp trật tự nguyên tố của Teyvat.",
      en: "Seven chess-piece artifacts linking The Seven to Celestia, crafted from the remains of the Third Descender to anchor control over Teyvat's elemental authorities."
    },
    sections: [
      {
        title: { vi: "Bản chất thật sự: di hài của Kẻ Đổ Bộ Thứ Ba", en: "True nature: the remains of the Third Descender" },
        body: {
          vi: [
            "Sau Chiến tranh Ma Thần, bảy vị thần chiến thắng nhận được Gnosis từ Celestia. Tuy nhiên, ở cuối cốt truyện [[fontaine]], [[skirk]] và [[neuvillette]] tiết lộ sự thật chấn động: sau khi Đấng Nguyên Sơ (Kẻ Đổ Bộ Thứ Nhất) bị thương nặng trong cuộc chiến cổ đại, ông cùng \"kẻ đến sau\" đã dùng **di hài của Kẻ Đổ Bộ Thứ Ba** để tạo ra bảy chiếc Gnosis nhằm khuếch đại và kiểm soát quyền năng nguyên tố cướp được từ Bảy Long Vương.",
            "Vì mang bản chất là hài cốt của một thực thể ngoại giới, Skirk khuyên Neuvillette nên vứt bỏ chiếc Gnosis Thuỷ vì nó là vật mang lại bất hạnh và xung đột. Hiện nay, các Quan Chấp Hành Fatui đã thu thập hầu hết các Gnosis (Phong, Nham, Lôi, Thảo, Thuỷ) về [[snezhnaya]] cho [[tsaritsa|Nữ Hoàng Băng Giá]], chỉ còn lại Gnosis Hoả của [[mavuika]] tại [[natlan]]."
          ],
          en: [
            "After the Archon War, the seven victorious gods received Gnoses from Celestia. Yet at the end of the [[fontaine]] storyline, [[skirk]] and [[neuvillette]] revealed a shocking truth: after the Primordial One (First Descender) was severely damaged in ancient wars, they collaborated with \"the one who came after\" to forge the seven Gnoses from the **remains of the Third Descender** to anchor the elemental authorities seized from the Seven Sovereigns.",
            "Because Gnoses are literally the remains of an outlander, Skirk advised Neuvillette to discard the Hydro Gnosis as an object of misfortune and strife. Today, the Fatui Harbingers have gathered nearly all the Gnoses (Anemo, Geo, Electro, Dendro, Hydro) for the [[tsaritsa]] in [[snezhnaya]], leaving only [[mavuika]]'s Pyro Gnosis in [[natlan]]."
          ]
        }
      }
    ],
    theories: [
      {
        title: { vi: "Nữ Hoàng Băng Giá thu thập 7 Gnosis để hồi sinh Kẻ Đổ Bộ Thứ Ba?", en: "Is the Tsaritsa collecting all 7 Gnoses to resurrect the Third Descender?" },
        body: {
          vi: "Khi biết 7 Gnosis là 7 mảnh di hài của Kẻ Đổ Bộ Thứ Ba (có thể ứng với Hoàng Tử Ánh Sáng bị chia xẻo trong sách [[pale-princess]]), giả thuyết lớn nhất hiện tại là [[tsaritsa|Băng Thần]] và Pierro muốn ghép chúng lại để hồi sinh thực thể này hoặc dùng quyền năng Kẻ Đổ Bộ để \"thiêu rụi thế giới cũ\".",
          en: "Knowing that the seven Gnoses are the fragmented remains of the Third Descender (possibly paralleling the dismembered Prince of Light in [[pale-princess]]), the leading theory is that the [[tsaritsa]] and Pierro intend to reassemble them to revive the Third Descender or wield Descender authority to \"burn away the old world\"."
        },
        sources: [{ label: "r/Genshin_Lore – Third Descender & Gnoses", url: "https://www.reddit.com/r/Genshin_Lore/search/?q=Third%20Descender%20Gnosis" }]
      }
    ],
    sources: [{ label: "Fandom: Gnosis", url: "https://genshin-impact.fandom.com/wiki/Gnosis" }],
    related: ["tsaritsa", "neuvillette", "skirk", "venti", "zhongli", "raiden-ei", "nahida", "mavuika", "pale-princess"]
  },

  {
    id: "delusion",
    type: "item",
    name: { vi: "Delusion (Tà Nhãn)", en: "Delusion" },
    subtitle: { vi: "Con mắt nguyên tố nhân tạo được rèn từ oán niệm của Ma Thần đã chết", en: "Artificial elemental focus forged from the lingering wrath of fallen gods" },
    region: { vi: "Snezhnaya", en: "Snezhnaya" },
    summary: {
      vi: "Vũ khí bí mật của Fatui cho phép con người sử dụng sức mạnh nguyên tố mà không cần sự chấp thuận của thần linh – nhưng đánh đổi bằng chính sinh mạng người dùng.",
      en: "A secret Fatui weapon allowing mortals to wield elemental power without the gods' gaze – at the cost of rapidly draining the wielder's own life force."
    },
    sections: [
      {
        title: { vi: "Sức mạnh từ tàn tích Ma Thần và cái giá của sinh mệnh", en: "Power from dead gods and the price of life" },
        body: {
          vi: [
            "Khác với [[vision]], Delusion không cần ánh nhìn của thiên giới. Chúng được Fatui tại [[snezhnaya]] chế tạo bằng cách tinh luyện tàn tích và oán niệm của các Ma Thần đã ngã xuống (như việc xây xưởng chế tạo Delusion từ di hài của thần rắn Orobashi tại [[inazuma]]).",
            "Chỉ những kẻ có thể chất đặc biệt hoặc là tạo vật phi nhân loại (như các Quan Chấp Hành trong [[pale-flame]], [[crimson-witch-of-flames]], [[dottore]], [[arlecchino]]) mới chịu đựng được Delusion lâu dài; người phàm như Teppei ở đảo Watatsumi hay Crepus (cha của Diluc) đều bị nó rút cạn tuổi thọ chỉ trong thời gian ngắn."
          ],
          en: [
            "Unlike [[vision|Visions]], Delusions require no divine favor. They are manufactured by the Fatui of [[snezhnaya]] using the refined remains and lingering resentment of fallen gods (such as the Delusion factory built utilizing Crystal Marrow from the serpent god Orobashi's corpse in [[inazuma]]).",
            "Only those with extraordinary constitutions or non-human bodies (like the Harbingers in [[pale-flame]], [[crimson-witch-of-flames]], [[dottore]], [[arlecchino]]) can wield Delusions long-term; ordinary mortals such as Teppei on Watatsumi Island or Crepus (Diluc's father) have their lifespans rapidly drained."
          ]
        }
      }
    ],
    theories: [],
    sources: [{ label: "Fandom: Delusion", url: "https://genshin-impact.fandom.com/wiki/Delusion" }],
    related: ["vision", "snezhnaya", "tsaritsa", "pale-flame", "crimson-witch-of-flames", "inazuma"]
  },

  {
    id: "irminsul",
    type: "item",
    name: { vi: "Irminsul (Cây Thế Giới & Hệ Thống Địa Mạch)", en: "Irminsul (The World Tree & Ley Line Network)" },
    subtitle: { vi: "Cây cổ thụ bạc khổng lồ dưới lòng đất lưu giữ toàn bộ ký ức và thông tin của Teyvat", en: "The colossal subterranean silver tree storing all memories and information of Teyvat" },
    region: { vi: "Sumeru / Lòng đất toàn Teyvat", en: "Sumeru / Subterranean Teyvat" },
    summary: {
      vi: "Cây Thế Giới có bộ rễ tạo thành mạng lưới Địa Mạch (Ley Lines) chạy khắp Teyvat, nơi ghi chép mọi ký ức, linh hồn và tri thức của thế giới – ngoại trừ các Kẻ Đổ Bộ từ ngoài vũ trụ.",
      en: "The World Tree whose roots form the Ley Line network across Teyvat, recording every memory, soul, and piece of information in the world – except for outlander Descenders."
    },
    sections: [
      {
        title: { vi: "Cơ sở dữ liệu sống của Teyvat và quyền năng sửa đổi nhận thức", en: "Teyvat's living database and the rewriting of perception" },
        body: {
          vi: [
            "Irminsul mọc sâu dưới lòng đất và được bảo quản trực tiếp bởi Thảo Thần ([[nahida]]) tại [[sumeru]]. Các rễ của nó toả ra thành **Địa Mạch** (Ley Lines) và những cây cổ thụ bạc từng xuất hiện ở [[sal-vindagnyr]], [[tsurumi-civilization]] hay [[prayers-tiaras]]. Khi sinh vật trên Teyvat chết đi, ký ức của họ chảy về Địa Mạch để nuôi dưỡng Irminsul.",
            "Khi một thông tin bị xoá khỏi Irminsul (như việc Rukkhadevata được xoá để thanh tẩy Tri Thức Cấm Kỵ từ thời [[deshret-kingdom]], hay việc [[wanderer|Scaramouche]] tự xoá danh tính), nó không làm thay đổi sự kiện vật lý trong quá khứ (chiếc bình đã vỡ vẫn vỡ), nhưng sẽ viết lại toàn bộ ký ức của cư dân Teyvat và các văn bản trực tiếp. Chỉ có những câu chuyện ngụ ngôn/cổ tích (do ma nữ Andersdotter của [[hexenzirkel]] hay Nahida cất giấu) và các **Kẻ Đổ Bộ** (như Nhà Lữ Hành) là không bị ảnh hưởng."
          ],
          en: [
            "Irminsul grows deep underground and is tended by the Dendro Archon ([[nahida]]) in [[sumeru]]. Its roots branch out as the **Ley Lines** and the silver trees once seen in [[sal-vindagnyr]], [[tsurumi-civilization]], and the [[prayers-tiaras]]. When beings of Teyvat die, their memories return to the Ley Lines to nourish Irminsul.",
            "When information is erased from Irminsul (such as Rukkhadevata's erasure to purge Forbidden Knowledge from [[deshret-kingdom]]'s era, or [[wanderer|Scaramouche]] erasing his identity), physical past events do not change (a broken vase remains broken), but all Teyvat natives' memories and direct records are rewritten to rationalize the outcome. Only allegories/fairytales (preserved by [[hexenzirkel]]'s Andersdotter or Nahida) and outlander **Descenders** (like the Traveler) retain the original memory."
          ]
        }
      }
    ],
    theories: [],
    sources: [{ label: "Fandom: Irminsul", url: "https://genshin-impact.fandom.com/wiki/Irminsul" }],
    related: ["sumeru", "nahida", "wanderer", "deshret-kingdom", "loom-of-fate", "hexenzirkel", "prayers-tiaras"]
  },

  {
    id: "loom-of-fate",
    type: "item",
    name: { vi: "Loom of Fate (Máy Dệt Vận Mệnh)", en: "Loom of Fate" },
    subtitle: { vi: "Kế hoạch tối thượng của Giáo Đoàn Vực Sâu nhằm dệt nên Địa Mạch mới", en: "The Abyss Order's ultimate apparatus to weave entirely new Ley Lines" },
    region: { vi: "Khaenri'ah / Giáo Đoàn Vực Sâu", en: "Khaenri'ah / The Abyss Order" },
    summary: {
      vi: "Cỗ máy thần thánh được khởi xướng bởi Chlothar Alberich và hoàn thiện bởi Hoàng Tử/Công Chúa Vực Sâu (người thân song sinh của Nhà Lữ Hành), có khả năng tự dệt nên những Địa Mạch mới cho Teyvat.",
      en: "A divine apparatus conceived by Chlothar Alberich and completed by the Prince/Princess of the Abyss (the Traveler's twin), capable of weaving entirely new Ley Lines."
    },
    sections: [
      {
        title: { vi: "Từ bi kịch của Caribert Alberich đến vũ khí thay đổi số mệnh", en: "From Caribert Alberich's tragedy to a weapon that weaves fate" },
        body: {
          vi: [
            "Sau Đại Thảm Hoạ [[khaenriah]], quý tộc thuần chủng **Chlothar Alberich** tuyệt vọng tìm cách chữa trị cho đứa con trai lai bị biến thành hilichurl là **Caribert** ([[hilichurl-cultural-customs]]). Dưới sự chỉ dẫn từ giọng nói của Tội Đồ **Vedrfolnir** (anh trai [[dainsleif]]), Chlothar sử dụng sức mạnh Vực Sâu khôi phục lý trí cho Caribert và biến cậu thành cốt lõi sống của **Máy Dệt Vận Mệnh**.",
            "Trong giai đoạn đầu, Máy Dệt Vận Mệnh chỉ có thể can thiệp vào ký ức người dân; nhưng sau khi hoàn tất và đánh đổi bằng sự tan biến của ý thức Caribert, nó đã trở thành một công cụ tối thượng có khả năng **dệt nên những [[irminsul|Địa Mạch]] hoàn toàn mới** – chìa khoá để người thân song sinh của Nhà Lữ Hành tái thiết quê hương và đối đầu với Thiên Lý."
          ],
          en: [
            "After the [[khaenriah]] Cataclysm, the pure-blooded noble **Chlothar Alberich** desperately sought to cure his illegitimate son **Caribert**, who had been turned into a hilichurl ([[hilichurl-cultural-customs]]). Guided by the voice of the Sinner **Vedrfolnir** ([[dainsleif]]'s brother), Chlothar used Abyssal power to restore Caribert's mind and turn him into the living core of the **Loom of Fate**.",
            "In its incomplete phase, the Loom of Fate could manipulate human memories; upon its completion and the passing of Caribert's consciousness, it became a supreme apparatus capable of **weaving entirely new [[irminsul|Ley Lines]]** – the key weapon held by the Traveler's twin to confront the Heavenly Principles."
          ]
        }
      }
    ],
    theories: [],
    sources: [{ label: "Fandom: Loom of Fate", url: "https://genshin-impact.fandom.com/wiki/Loom_of_Fate" }],
    related: ["dainsleif", "khaenriah", "irminsul", "hilichurl-cultural-customs"]
  },

  {
    id: "hexenzirkel",
    type: "item",
    name: { vi: "Hexenzirkel (Hội Ma Nữ)", en: "Hexenzirkel (Coven of Witches)" },
    subtitle: { vi: "Tổ chức bí mật của các đại ma nữ khám phá Cây Thế Giới Irminsul và bí ẩn vũ trụ", en: "Secret coven of powerful witches exploring Irminsul and the mysteries of the cosmos" },
    region: { vi: "Mondstadt / Toàn Teyvat", en: "Mondstadt / All of Teyvat" },
    summary: {
      vi: "Hội kín gồm những người phụ nữ quyền năng bậc nhất Teyvat do Alice (mẹ của Klee) sáng lập, bao gồm cả đại giả kim thuật sư Rhinedottir, chiêm tinh gia Barbeloth và nhà tiên tri Nicole.",
      en: "A secret society of Teyvat's most powerful women founded by Alice (Klee's mother), including the alchemist Rhinedottir, the astrologist Barbeloth, and the prophetess Nicole."
    },
    sections: [
      {
        title: { vi: "Tiệc trà trên đỉnh núi gió và 7 mật danh của các Ma Nữ", en: "Tea parties atop the windswept peak and the Witches' codenames" },
        body: {
          vi: [
            "Hội Ma Nữ **Hexenzirkel** từng gửi lời thách đấu tới Phong Thần [[venti|Barbatos]], nhưng thay vì chiến tranh, họ đã lập ước hoà bình và tổ chức những buổi tiệc trà trên chiếc bàn đá lơ lửng giữa bầu trời [[mondstadt]] để thảo luận về [[irminsul]] và các thế giới ngoài Teyvat.",
            "Các thành viên đã được xác nhận gồm: **\"A\" – Alice** (Trưởng lão Hội Ma Nữ, mẹ của Klee, người có thể đi lại giữa các thế giới), **\"B\" – Barbeloth** (sư phụ của Mona, bậc thầy chiêm tinh đọc được số mệnh trên bầu trời giả), **\"R\" – [[rhinedottir]]** (\"Gold\", mẹ của [[albedo]] và một trong Năm Tội Đồ của [[khaenriah]]), **\"M\" – Andersdotter** (con người phàm trần viết truyện cổ tích *Công Chúa Heo Rừng* và tạo ra rồng đồ chơi Mini Durin ở Simulanka), **\"N\" – Nicole** (người nói chuyện trực tiếp trong tâm trí Nhà Lữ Hành mỗi khi thế giới có biến động lịch sử), **\"J\" – I. Ivanovna N.** (Thị trưởng đầu tiên của [[snezhnaya]]) và **\"O\" – Octavia**."
          ],
          en: [
            "The **Hexenzirkel** once challenged Anemo Archon [[venti|Barbatos]], who turned their confrontation into peaceful tea parties at a floating stone table above [[mondstadt]] where the witches investigate [[irminsul]] and worlds beyond Teyvat.",
            "Confirmed members include: **\"A\" – Alice** (Elder of the Hexenzirkel, Klee's mother, capable of traversing worlds), **\"B\" – Barbeloth** (Mona's master, visionary astrologist), **\"R\" – [[rhinedottir]]** (\"Gold\", creator of [[albedo]] and one of [[khaenriah]]'s Five Sinners), **\"M\" – Andersdotter** (a mortal writer who authored *The Boar Princess* and created Mini Durin in Simulanka), **\"N\" – Nicole** (who speaks telepathically into the Traveler's mind whenever history shifts), **\"J\" – I. Ivanovna N.** (first mayor of [[snezhnaya]]), and **\"O\" – Octavia**."
          ]
        }
      }
    ],
    theories: [],
    sources: [{ label: "Fandom: Hexenzirkel", url: "https://genshin-impact.fandom.com/wiki/Hexenzirkel" }],
    related: ["mondstadt", "venti", "rhinedottir", "albedo", "irminsul", "snezhnaya"]
  },

  {
    id: "celestia",
    type: "item",
    name: { vi: "Thiên Đảo Celestia, Thiên Lý & Hệ thống Đinh Trời (Celestial Nails)", en: "Celestia, the Heavenly Principles & the Celestial Nails" },
    subtitle: { vi: "Hòn đảo bay trên bầu trời Teyvat – Ngai vàng của Đấng Nguyên Sơ và Bốn Bóng Hình Rực Sáng", en: "The floating sky island of Teyvat – Seat of the Primordial One and the Four Shining Shades" },
    region: { vi: "Bầu trời Teyvat (hiện lơ lửng phía trên khu vực Chenyu Vale / Fontaine)", en: "Skies of Teyvat (floating above Chenyu Vale / Fontaine)" },
    summary: {
      vi: "Hòn đảo thiên không lơ lửng trên bầu trời Teyvat – nơi đặt ngai vàng của Thiên Lý (Đấng Nguyên Sơ Phanes và Bốn Bóng Hình Rực Sáng), nơi ban phát 7 Ngai Thần cùng hệ thống Vision và cũng là nơi phóng xuống những cây Đinh Trời huỷ diệt các nền văn minh cổ đại.",
      en: "The floating sky island above Teyvat – seat of the Heavenly Principles (the Primordial One Phanes and the Four Shining Shades), source of the Seven Divine Thrones, Visions, and the Celestial Nails dropped upon ancient civilizations."
    },
    sections: [
      {
        title: { vi: "Ngai Vàng Vĩnh Hằng của Thiên Lý và Bốn Bóng Hình Rực Sáng", en: "The Eternal Throne of the Heavenly Principles and the Four Shining Shades" },
        body: {
          vi: [
            "Theo cấm thư **[[before-sun-and-moon]]** và câu chuyện của **[[neuvillette]]**, **Celestia (Thiên Đảo)** là đại bản doanh của **Thiên Lý (Heavenly Principles)** – tức **Đấng Nguyên Sơ (Phanes – Kẻ Đổ Bộ Đầu Tiên)** cùng **Bốn Bóng Hình Rực Sáng (Four Shining Shades)**: **Istaroth** (Chấp Chính Thời Gian), **Naberius** (Chấp Chính Sự Sống), **Ronova** (Chấp Chính Cái Chết) và **Asmoday** (Chấp Chính Không Gian / Kẻ Duy Trì Thiên Lý).",
            "Sau cuộc chiến với **Kẻ Đến Thứ Hai** và **Long Vương Nibelung**, Đấng Nguyên Sơ bị tổn thương nặng nề đến mức không còn đủ sức trực tiếp áp chế trật tự thế giới. Ngài đã cùng \"Kẻ Đến Sau\" hành quyết **Kẻ Đổ Bộ Thứ Ba (Saarelainen – [[hymns-of-the-far-north]])** để đúc thành **7 chiếc [[gnosis]]**, mở ra **Chiến Tranh Ma Thần** để chọn ra **Thất Thần** thay mặt Celestia cai quản 7 quốc gia dưới mặt đất, đồng thời thiết lập hệ thống **[[vision]]**."
          ],
          en: [
            "According to **[[before-sun-and-moon]]** and **[[neuvillette]]**, **Celestia** is the seat of the **Heavenly Principles** – the **Primordial One (Phanes – First Descender)** and the **Four Shining Shades**: **Istaroth** (Time), **Naberius** (Life), **Ronova** (Death), and **Asmoday** (Space / Sustainer of Heavenly Principles).",
            "Gravely ruined after the war with the Second Who Came and Nibelung, the Primordial One and \"the one who came after\" carved the **Third Descender (Saarelainen – [[hymns-of-the-far-north]])** into the seven **[[gnosis|Gnoses]]** and established the **[[vision]]** system."
          ]
        }
      },
      {
        title: { vi: "Hệ thống Đinh Trời (Celestial Nails) và Giấc ngủ 500 năm của Thiên Lý", en: "The Celestial Nails and the 500-Year Slumber of the Heavenly Principles" },
        body: {
          vi: [
            "Để hàn gắn những vết rách của vỏ trứng \"bầu trời giả\" và trấn áp sự ăn mòn của **Tri Thức Cấm Kỵ / Vực Sâu**, Celestia đã phóng hàng loạt trụ đá khổng lồ gọi là **Đinh Trời (Celestial Nails)** xuống khắp Teyvat: tại **[[hyperborea]]**, **[[sal-vindagnyr]]** (Đinh Băng Thiên Không), **[[chasm-civilization|Vực Đá Sâu]]** (Đinh Lưu Minh Tinh Thạch), **sa mạc [[sumeru]]** (vùng đất của Thảo Long Vương Apep), **[[tsurumi-civilization|Đảo Tsurumi]]** và **Vương Quốc Dạ Hồn của [[natlan]]**. Dù ngăn chặn được Vực Sâu, mỗi cây Đinh Trời lại làm đứt gãy [[irminsul|Địa Mạch]] địa phương và chôn vùi các nền văn minh loài người nằm bên dưới.",
            "Theo tiết lộ của **[[nahida]]** khi đối chất với **[[dottore]]**, kể từ sau Đại Thảm Hoạ **[[khaenriah]]** 500 năm trước, **Thiên Lý đã chìm vào trạng thái im lặng và ngủ say hoàn toàn** – đến mức ngay cả khi Thuỷ Thần Focalors phá huỷ Ngai Thần Thuỷ tại [[fontaine]], bầu trời Celestia vẫn chưa hề thức giấc."
          ],
          en: [
            "To mend breaches in the firmament and pin down Abyssal / Forbidden Knowledge outbreaks, Celestia dropped **Celestial Nails** onto **[[hyperborea]]**, **[[sal-vindagnyr]]**, **[[chasm-civilization|The Chasm]]**, the **[[sumeru]] desert** (Apep's domain), **[[tsurumi-civilization|Tsurumi Island]]**, and **[[natlan]]'s Night Kingdom**.",
            "As **[[nahida]]** noted to **[[dottore]]**, since the **[[khaenriah]]** Cataclysm 500 years ago, the **Heavenly Principles have remained completely silent and dormant** – even when Focalors shattered the Hydro Archon Throne in [[fontaine]]."
          ]
        }
      }
    ],
    theories: [],
    sources: [
      { label: "Fandom: Celestia", url: "https://genshin-impact.fandom.com/wiki/Celestia" },
      { label: "Fandom: Heavenly Principles", url: "https://genshin-impact.fandom.com/wiki/Heavenly_Principles" },
      { label: "Fandom: Celestial Nail", url: "https://genshin-impact.fandom.com/wiki/Celestial_Nail" }
    ],
    related: ["unified-civilization", "before-sun-and-moon", "hymns-of-the-far-north", "hyperborea", "sal-vindagnyr", "chasm-civilization", "gnosis", "vision", "irminsul", "neuvillette", "nahida", "heavenly-principles"]
  },

  /* ===================== VŨ TRỤ QUAN MỞ RỘNG / EXPANDED COSMOLOGY & ANCIENT LORE ===================== */
  {
    id: "heavenly-principles",
    type: "item",
    name: { vi: "Thiên Lý (Đấng Nguyên Sơ Phanes) & Tứ Ảnh", en: "The Heavenly Principles (Phanes) & The Four Shades" },
    subtitle: { vi: "Kẻ Đổ Bộ Thứ Nhất, Tứ Đại Chấp Chính và luật lệ đóng kín số mệnh Teyvat", en: "The First Descender, the Four Shining Shades, and the deterministic laws ruling Teyvat" },
    region: { vi: "Celestia / Biển Sao", en: "Celestia / Sea of Stars" },
    summary: {
      vi: "Thực thể tối cao đã chinh phục Teyvat từ tay Thất Đại Long Vương, tạo nên Bầu Trời Giả và Tứ Ảnh (Sự Sống – Cái Chết – Thời Gian – Không Gian) để duy trì trật tự Nhân Giới; nhưng chính hệ thống khép kín ấy bị dự đoán sẽ đưa thế giới tới diệt vong.",
      en: "The supreme entity who conquered Teyvat from the Seven Sovereigns, forged the False Sky and the Four Shades (Life, Death, Time, Space) to govern the Human Realm—yet whose closed system may ultimately doom the world."
    },
    quote: {
      text: {
        vi: "Trong hội đồng của chư thần, tiếng nói của phàm nhân chưa từng được lắng nghe. Nhưng liệu thần linh hành động vì khinh miệt... hay tự bao giờ đã bắt đầu hành động vì nỗi sợ?",
        en: "In the council of gods, no mortal voice is ever heard. But do the gods act out of contempt... or have they at some hour begun to act out of fear?"
      },
      source: {
        vi: "Teaser 'Giới Hạn Của Chư Thần' (The Gods' Limits)",
        en: "Teyvat Chapter Interlude Teaser: The Gods' Limits"
      }
    },
    sections: [
      {
        title: { vi: "Kẻ Đổ Bộ Thứ Nhất (Phanes) & Quyền Năng Định Đoạt Vận Mệnh", en: "The First Descender (Phanes) & Deterministic Fate" },
        body: {
          vi: [
            "**Thiên Lý** (tên thật là **Phanes** — **Đấng Nguyên Sơ**, được *Thánh Ca Phương Bắc* gọi là *\"Cha Của Vạn Vật và Mẹ Của Các Vị Thần\"*, mang hình hài song tính có cánh và đội vương miện) là **Kẻ Đổ Bộ Thứ Nhất** xuất thân từ **Biển Sao**. Đấng Nguyên Sơ giáng xuống Teyvat trong kỷ nguyên *Khi Chim Bồ Câu Ngậm Cành Cây*, giao chiến suốt 40 năm đánh bại **[[nibelung-sovereigns|Bảy Vị Long Vương]]**, biến đổi Cõi Ánh Sáng thành **Nhân Giới** và lấy \"vỏ trứng\" của mình làm **[[descenders-false-sky|Bầu Trời Giả]]** cách ly Teyvat khỏi **[[abyss-void-realm|Vực Sâu]]**.",
            "Thiên Lý yêu cầu trật tự tuyệt đối thay vì ý chí tự do hỗn loạn: mọi cư dân sinh trưởng dưới Bầu Trời Giả đều bị trói buộc vào Chòm Sao và số mệnh đã định sẵn trên **[[irminsul]]** (ngoại trừ các **Kẻ Đổ Bộ**). Cả **Rene de Petrichor**, **Belyi Tsar** lẫn **Rotwang** đều độc lập tính toán rằng việc Thiên Lý bóp nghẹt khả năng vô hạn của Cõi Ánh Sáng tạo ra một **hệ thống khép kín mất cân bằng**, khiến mọi nền văn minh và sự sống trên Teyvat sẽ tự diệt vong chỉ sau vài thế kỷ nữa nếu không có sự thay đổi."
          ],
          en: [
            "**The Heavenly Principles** (**Phanes**, the **Primordial One**, titled *\"Father of All and Mother of the Gods\"* in *Hymns of the Far North*, described as a crowned, winged androgynous being) is the **First Descender** from the **Sea of Stars**. Descending during *When the Doves Held Branches*, They waged a 40-year war to overthrow the **[[nibelung-sovereigns|Seven Sovereigns]]**, reshaped the Light Realm into the **Human Realm**, and sealed Teyvat inside an \"eggshell\" (**[[descenders-false-sky|False Sky]]**) against the **[[abyss-void-realm|Abyss]]**.",
            "Preferring deterministic order over free will, the Heavenly Principles bind all Teyvat-born beings to preordained Constellations and fate via **[[irminsul]]** (only **Descenders** remain exempt). **Rene de Petrichor**, the **Belyi Tsar**, and **Rotwang** each independently calculated that this closed system drains equilibrium until all life and civilization inevitably extinguish within centuries unless broken."
          ]
        }
      },
      {
        title: { vi: "Tứ Ảnh (Bốn Bóng Hình Rực Sáng) — Bốn Chấp Chính Tối Cao", en: "The Four Shades — Rulers of Teyvat's Metaphysical Laws" },
        body: {
          vi: [
            "Sau khi [[three-moons|Ba Chị Em Mặt Trăng]] ngã xuống trong Cuộc Chiến Tang Lễ Lửa, Thiên Lý thu hồi và phân quyền cai quản 4 quy luật nền tảng cho **Tứ Ảnh (Four Shades)** — tương ứng trực tiếp với 4 món Thánh Di Vật (Hoa, Lông Vũ, Cát, Ly), trong khi chiếc **Mũ Lý Trí (Circlet of Logos)** thuộc về chính Thiên Lý:\n  1. **Naberius — Chấp Chính Sự Sống (*Hoa Sự Sống*):** Từng cùng Phanes sáng tạo nhân loại và sinh vật, được thờ ở Hyperborea và Sal Vindagnyr. [[anacharsis|Koitar]] từng đánh cắp quyền năng Sự Sống của bà để rèn **Tiên Tuyết**. Sau Đại Thảm Hoạ, Tội Đồ **[[rhinedottir]]** đã tìm thấy trái tim Naberius, nuốt chửng và **hợp nhất cơ thể lẫn ý thức cùng bà**.\n  2. **Ronova — Chấp Chính Cái Chết (*Lông Vũ Cái Chết*):** Từng giúp Chúa Tể Màn Đêm dựng **Vương Quốc Dạ Hồn** ở [[natlan]] và lập luật cùng **Xbalanque**, nhưng bị Thiên Lý khiển trách vì vượt quyền. 500 năm trước, Ronova giáng **Lời Nguyền Bất Tử** lên người thuần chủng [[khaenriah]]. Về sau khi can thiệp tại [[snezhnaya]] để ngăn Dự án Mistilteinn của Anastasya và lạm dụng Lời Nguyền Cái Chết, Celestia đã thu hồi quyền năng của Ronova, khiến bà bại trận và qua đời.\n  3. **Istaroth — Chấp Chính Thời Gian (*Cát Thời Gian*):** Còn gọi là *Ngàn Ngọn Gió / Kairos*, được thờ ở [[enkanomiya]], [[mondstadt]] cổ và Hyperborea. Bà âm thầm tác động dòng thời gian cho **[[venti|Venti]]**, **[[raiden-ei|Makoto]]**, **Aberaku**, **Zibai (Bạch Mã Tiên Nhân)** và chính bà đã tác động khiến người thân song sinh của Nhà Lữ Hành rời Khaenri'ah năm 500 trước.\n  4. **Asmoday — Chấp Chính Không Gian (*Ly Không Gian*):** Còn gọi là **Kẻ Duy Trì Thiên Lý** — vị thần áo trắng mắt vàng đầu game đã giam cầm hai anh em Nhà Lữ Hành. Bà từng thu giữ tàn tích nhiều nền văn minh sụp đổ vào **Thần Điện Không Gian**, nhưng suốt 500 năm qua đã **vắng mặt tại mọi cuộc họp của Tứ Ảnh**, chính thức **đào tẩu khỏi Celestia để phục vụ chủ nhân mới — Song Sinh Nhà Lữ Hành & Giáo Đoàn Vực Sâu**!"
          ],
          en: [
            "After the fall of the [[three-moons|Three Moons]], the Heavenly Principles redistributed Teyvat's primordial laws among the **Four Shades**—mirroring four Artifact slots alongside Phanes' **Circlet of Logos** (*Reason*):\n  1. **Naberius — Ruler of Life (*Flower of Life*):** Co-creator of mortals and revered in Hyperborea and Sal Vindagnyr. Her authority was partially stolen by [[anacharsis|Koitar]] to forge the Snowland Fae; after the Cataclysm, **[[rhinedottir]]** devoured Naberius's heart and **merged both bodies and consciousnesses**.\n  2. **Ronova — Ruler of Death (*Plume of Death*):** Helped establish [[natlan]]'s Night Kingdom and rules alongside Xbalanque (drawing Celestia's censure), inflicted the **Curse of Immortality** upon Khaenri'ah, later intervened against Anastasya's Project Mistilteinn in Snezhnaya, had her Authority reclaimed for overstepping limits, and succumbed to her wounds in battle.\n  3. **Istaroth — Ruler of Time (*Sands of Eon*):** Known as Kairos and the Thousand Winds; covertly altered history for **[[venti]]**, **[[raiden-ei|Makoto]]**, **Aberaku**, **Zibai**, and nudged the Traveler's Sibling to leave Khaenri'ah 500 years ago.\n  4. **Asmoday — Ruler of Space (*Goblet of Eonothem*):** The Sustainer of the Heavenly Principles who separated the Traveler Twins at the start of the game and collected fallen civilizations within the Temple of Space. Missing since the Cataclysm, Asmoday has **defected from Celestia and aligned with the Traveler's Sibling and the Abyss Order**."
          ]
        }
      },
      {
        title: { vi: "Giấc ngủ 500 năm từ Lời Nguyền của Kẻ Đổ Bộ Thứ Ba", en: "The 500-Year Slumber Cursed by the Third Descender" },
        body: {
          vi: [
            "Lý do thực sự khiến Thiên Lý hoàn toàn im lặng suốt 500 năm qua (ngay cả khi Focalors phá hủy Ngai Thần Thủy hay Mavuika đánh vỡ bầu trời) được tiết lộ qua bí mật của **[[descenders-false-sky|Saarelainen]]**: khi hiến thân thể làm 7 chiếc **[[gnosis]]**, Saarelainen đã gắn một lời nguyền trói buộc Thiên Lý phải **chìm vào giấc ngủ** nếu dám động chạm tới hậu duệ của ông là dân tộc **[[khaenriah]]**. Khi Thiên Lý can thiệp hủy diệt Khaenri'ah trong Đại Thảm Hoạ, lời nguyền lập tức kích hoạt và khóa chặt Đấng Nguyên Sơ vào trạng thái ngủ say cho tới tận ngày nay."
          ],
          en: [
            "The true reason the Heavenly Principles have lain completely dormant for 500 years lies in **[[descenders-false-sky|Saarelainen]]**'s pact: when trading his body to craft the seven **[[gnosis|Gnoses]]**, Saarelainen laid a binding curse forcing Phanes into slumber should Celestia ever harm his descendants, the **[[khaenriah|Khaenri'ahns]]**. Intervening in the Cataclysm triggered that curse immediately."
          ]
        }
      }
    ],
    theories: [
      {
        title: { vi: "Tại sao Asmoday phản bội Thiên Lý để theo phe Song Sinh Nhà Lữ Hành?", en: "Why did Asmoday defect to the Traveler's Sibling?" },
        body: {
          vi: "Trong *Giới Hạn Của Chư Thần*, Ronova suy đoán Asmoday chỉ có thể phản bội Thiên Lý nếu bà ta *\"yêu vị chủ nhân mới hơn cả chính bản thân mình\"*. Nhiều giả thuyết liên hệ việc Asmoday giữ lại các di tích nền văn minh cổ (Temple of Space) với mong muốn của [[khaenriah]] nhằm phục dựng lại quá khứ qua Máy Dệt Vận Mệnh.",
          en: "In *The Gods' Limits*, Ronova muses Asmoday could only turn against Phanes if she \"loves her new master more than herself.\" Theorists link her preservation of fallen civilizations in the Temple of Space to the Abyss Sibling's goal of weaving a new Khaenri'ah."
        },
        sources: [{ label: "Fandom: Four Shades / Asmoday", url: "https://genshin-impact.fandom.com/wiki/Four_Shades" }]
      }
    ],
    sources: [
      { label: "Fandom: Heavenly Principles", url: "https://genshin-impact.fandom.com/wiki/Heavenly_Principles" },
      { label: "Fandom: Four Shades", url: "https://genshin-impact.fandom.com/wiki/Four_Shades" },
      { label: "Fandom: Asmoday / Ronova / Istaroth / Naberius", url: "https://genshin-impact.fandom.com/wiki/The_Gods%27_Limits" }
    ],
    related: ["celestia", "nibelung-sovereigns", "descenders-false-sky", "three-moons", "anacharsis", "rhinedottir", "venti", "khaenriah", "before-sun-and-moon"]
  },

  {
    id: "three-moons",
    type: "item",
    name: { vi: "Ba Chị Em Mặt Trăng (Aria, Sonnet, Canon) & Quyền Năng Tam Nguyệt", en: "The Three Moons (Aria, Sonnet, Canon) & Trilunar Authority" },
    subtitle: { vi: "Hằng Nguyệt – Hồng Nguyệt – Sương Nguyệt do Nibelung tạo từ vỏ Teyvat trước kỷ nguyên Thiên Lý", en: "Eternal, Iridescent, and Frost Moons raised by Nibelung from Teyvat's crust" },
    region: { vi: "Quỹ đạo Teyvat / Nod-Krai / Khaenri'ah", en: "Teyvat Orbit / Nod-Krai / Khaenri'ah" },
    summary: {
      vi: "Ba thiên thể và ba vị nữ thần mặt trăng được Long Vương Nibelung chế tạo bằng Công nghệ Bí Nguyên để cai quản Teyvat; sau Cuộc Chiến Tang Lễ Lửa, xác hai mặt trăng sụp đổ thành Xích Nguyệt và Tủy Mặt Trăng (Moon Marrows), còn Sương Nguyệt sản sinh ra Tân Nguyệt Kuutar (Columbina).",
      en: "Three celestial bodies and their corresponding goddesses sculpted by Dragon King Nibelung with Secret Source tech; shattered in the War of Funerary Flame into Moon Marrows, Khaenri'ah's Crimson Moon, and Nod-Krai's Frostmoon lineage leading to Columbina."
    },
    quote: {
      text: {
        vi: "Khi ánh bạc không còn ngự trên cỗ xe bầu trời, hai vầng trăng tan vỡ thành tro bụi và máu, chỉ còn một vầng trăng băng giá lưu đày ngoài vỏ trứng chờ ngày trở về.",
        en: "When silver no longer steered the heavenly chariot, two moons shattered into ash and blood, leaving one frost-bound orb exiled beyond the eggshell awaiting its return."
      },
      source: {
        vi: "Biên niên sử Tam Nguyệt — Trúc Lâm Nguyệt Dạ & Khúc Ca Không Nguyệt",
        en: "Lunar Chronicles — Moonlit Bamboo Forest & Song of the Welkin Moon"
      }
    },
    sections: [
      {
        title: { vi: "Nguồn gốc từ Nibelung, Quyền năng Tam Nguyệt & Công nghệ Bí Nguyên", en: "Created by Nibelung with Secret Source Tech & Trilunar Authority" },
        body: {
          vi: [
            "Trước khi rời Teyvat tìm cách chống lại [[abyss-void-realm|Vực Sâu]], **[[nibelung-sovereigns|Long Vương Nibelung]]** đã dùng **[[secret-source|Công nghệ Bí Nguyên (Secret Source Technology)]]** nâng phần vỏ hành tinh tại khu vực ngày nay là **[[snezhnaya|Nod-Krai]]** lên quỹ đạo tạo thành **Ba Mặt Trăng**, đồng thời tách một phần ý chí của chính mình tạo nên **Ba Nữ Thần Mặt Trăng** nắm giữ **Quyền Năng Tam Nguyệt (Trilunar Authority)** ngang hàng với Long Vương — chi phối 4 quy luật nguyên thủy (Sự Sống, Cái Chết, Thời Gian, Không Gian) cùng năng lượng thuần khiết **Kuuvahki**.",
            "Ba chị em đồng thuận chia đều quyền lực và luân phiên cưỡi cỗ xe bạc cai quản bầu trời mỗi 10 ngày/phiên:\n  • **Hằng Nguyệt (Eternal Moon — Aria):** Lớn nhất, trọng lực khổng lồ sinh ra thủy triều đại dương.\n  • **Sương Nguyệt (Frost Moon — Canon):** Chiếu sáng rực rỡ nhất màn đêm, cũng là nơi diễn ra **[[project-lunar-veil|Dự án Ngắm Trăng & Màn Trăng]]**.\n  • **Hồng Nguyệt / Cầu Vồng Nguyệt (Iridescent Moon — Sonnet):** Nhỏ nhất, ánh sáng dịu nhẹ tạo quầng hào quang thoáng qua."
          ],
          en: [
            "Before departing into the cosmos, **[[nibelung-sovereigns|Dragon King Nibelung]]** used **[[secret-source|Secret Source technology]]** to raise Teyvat's crust from modern-day **[[snezhnaya|Nod-Krai]]** into orbit as the **Three Moons**, shaping the **Three Moon Goddesses** from his own shadows to hold **Trilunar Authority** over Teyvat's primordial laws and pure **kuuvahki**.",
            "Dividing power equally and rotating ten-day watches atop a silver chariot:\n  • **Eternal Moon (Aria):** Largest moon whose gravity generated Earth's ocean tides.\n  • **Frost Moon (Canon):** Brightest orb in the night sky and host to **[[project-lunar-veil|Projects Moongazer & Lunar Veil]]**.\n  • **Iridescent Moon (Sonnet):** Smallest moon whose faint radiance cast fleeting halos."
          ]
        }
      },
      {
        title: { vi: "Thảm họa Cuộc Chiến Tang Lễ Lửa, Moon Marrows & Bóng Trăng Giả (Shadowmoon)", en: "Fate After the War of Funerary Flame, Moon Marrows & Shadowmoon" },
        body: {
          vi: [
            "Khi **[[heavenly-principles|Thiên Lý]]** soán ngôi, Ba Nữ Thần đã thề ước phục tùng trật tự mới để bảo vệ thế giới và làm ngơ lời cầu cứu của Hoả Long Vương Xiuhcoatl ([[ancient-dragon-tollan]]). Khi Nibelung mang Vực Sâu trở về trong **Cuộc Chiến Tang Lễ Lửa**, ông coi họ là kẻ phản bội, giam cầm ý thức cả ba trong không gian *\"Phản Chiếu Của Mặt Trăng\"* rồi biến Ba Mặt Trăng thành vũ khí chiến tranh.",
            "Cuộc đối đầu khiến **Hằng Nguyệt (Aria)** và **Hồng Nguyệt (Sonnet)** bị hủy diệt hoàn toàn:\n  • Xác **Aria** kết tinh thành **Moon Marrow của Hằng Nguyệt** (thánh vật tại Nod-Krai cho phép nhìn thấy quá khứ) và mảnh vỡ ngoài không gian lộ ra khi **[[mavuika]]** đánh nứt bầu trời Natlan.\n  • Xác **Sonnet** bị Vực Sâu ăn mòn biến thành **Xích Nguyệt / Trăng Đỏ (Crimson Moon)** treo trên bầu trời [[khaenriah]] thời Vương triều Xích Nguyệt (tạo ra Moon Marrow thứ hai nhiễm Vực Sâu).\n  • Riêng **Sương Nguyệt (Canon)** vẫn còn nguyên vẹn nhưng bị Thiên Lý đày ra ngoài **Bầu Trời Giả**, đứt liên kết khiến Canon qua đời. Hàng thiên niên kỷ sau, nữ thần mới của Sương Nguyệt là **Kuutar ([[columbina]])** ra đời tại Đảo Hiisi, còn **[[dottore]]** chế tạo ra một Moon Marrow nhân tạo thứ ba để soán ngôi *Kẻ Dị Giáo Giả Nguyệt*.",
            "Để che giấu cái chết của Ba Mặt Trăng, Thiên Lý dựng lên **Bóng Trăng (Shadowmoon)** giả trên Bầu Trời Giả — nơi **Istaroth** từng giam giữ mảnh linh hồn *Ziju* của **Bạch Mã Tiên Nhân Zibai** trước khi Bóng Trăng tan rã lúc Sương Nguyệt trở về dưới Bầu Trời Giả."
          ],
          en: [
            "Having sworn vows to Celestia during its rise, the Three Sisters were viewed as traitors by Nibelung when he returned in the **War of Funerary Flame**, prompting him to imprison their minds inside the \"Moon's Reflection\" and weaponize their moons.",
            "**Aria** and **Sonnet** were shattered—Aria leaving behind the Eternal **Moon Marrow** and orbital fragments glimpsed above Natlan, while Sonnet fused with Abyssal corruption into Khaenri'ah's **Crimson Moon**. **Canon** died after the intact **Frost Moon** was exiled outside the False Sky, later succeeded by **Kuutar ([[columbina]])** while **[[dottore]]** forged an artificial third Moon Marrow.",
            "Celestia projected an illusory **Shadowmoon** onto the False Sky (used by Istaroth to hold a fragment of White Horse Adeptus **Zibai**'s soul) until the Frost Moon returned inside the firmament."
          ]
        }
      },
      {
        title: { vi: "Bánh Xe Mặt Trăng (Moon Wheel) & Năng Lượng Kuuvahki", en: "Moon Wheels & Ancient Kuuvahki" },
        body: {
          vi: [
            "**Bánh Xe Mặt Trăng (Moon Wheel)** — \"kết tinh từ bản chất linh hồn\" — được Thiên Lý và Ba Nữ Thần Mặt Trăng tạo ra từ thời cổ đại để tín đồ Nod-Krai điều khiển **Kuuvahki** (dạng nguyên tố cổ xưa tinh khiết hơn) và thực hiện **Phản Ứng Nguyệt Quang (Lunar Reactions)**. Chính công nghệ này được suy đoán là tiền thân sinh ra hệ thống **[[vision]]** ngày nay (như **Ineffa** nhận trực tiếp Moon Wheel trên màn hình, hay **Zibai** ở Liyue mang Moon Wheel đặc biệt do đích thân Istaroth ban tặng)."
          ],
          en: [
            "Forged \"from the stuff of the soul\" by Celestia and the Moon Sisters, **Moon Wheels** channel **kuuvahki**—an ancient, purer form of elemental energy enabling **Lunar Reactions**—and served as the direct prototype from which modern **[[vision|Visions]]** evolved."
          ]
        }
      }
    ],
    theories: [],
    sources: [
      { label: "Fandom: Three Moons", url: "https://genshin-impact.fandom.com/wiki/Three_Moons" },
      { label: "Fandom: Moon Marrow", url: "https://genshin-impact.fandom.com/wiki/Moon_Marrow" },
      { label: "Fandom: Moon Wheel", url: "https://genshin-impact.fandom.com/wiki/Moon_Wheel" }
    ],
    related: ["nibelung-sovereigns", "project-lunar-veil", "columbina", "snezhnaya", "moonlit-bamboo-forest", "khaenriah", "arlecchino", "vision", "dottore"]
  },

  {
    id: "project-lunar-veil",
    type: "item",
    name: { vi: "Dự Án Ngắm Trăng & Dự Án Màn Trăng (Project Moongazer & Lunar Veil)", en: "Project Moongazer & Project Lunar Veil" },
    subtitle: { vi: "Công trình khoa học cổ đại của loài Rồng trên Sương Nguyệt — tiền thân bí mật của Bầu Trời Giả?", en: "Pre-Celestia dragon astro-research on the Frost Moon — possible origin of the False Sky" },
    region: { vi: "Sương Nguyệt / Nod-Krai", en: "Frost Moon / Nod-Krai" },
    summary: {
      vi: "Hai dự án song hành do các nhà khoa học rồng (Ibni-Belum, Ungien, Maagees-Geti, Lusalim) triển khai trên Sương Nguyệt: thu tín hiệu ngoài vũ trụ cảnh báo về thảm họa Vực Sâu (Ngắm Trăng) và phát triển màn chắn từ Vật Chất Đen nhằm che giấu Teyvat khỏi phần còn lại của vũ trụ (Màn Trăng).",
      en: "Twin scientific endeavors led by draconic pioneers on the Frost Moon (Ibni-Belum, Ungien, Maagees-Geti, Lusalim): relaying an alien warning of universal Abyssal annihilation (Project Moongazer) while crafting a Blackbody veil to conceal the moon—later seized by Celestia (Project Lunar Veil)."
    },
    quote: {
      text: {
        vi: "Cuối cùng thì... chúng ta chỉ là những kẻ ngắm trăng ở một góc tầm thường của vũ trụ...",
        en: "Last but not least... we are... Moon gazers in an unremarkable corner of the universe..."
      },
      source: {
        vi: "Văn bản lưu trữ Dự án Ngắm Trăng — Phòng Thí Nghiệm trên Sương Nguyệt",
        en: "Project Moongazer Logs — Frost Moon Research Station"
      }
    },
    sections: [
      {
        title: { vi: "Khởi nguồn: Con Mắt Ibni-Belum & Sự hy sinh của Ungien trước Vật Thể Đen Tinh Tú", en: "Origins: The Eye of Ibni-Belum & Ungien's Fusion with the Stellar Blackbody" },
        body: {
          vi: [
            "Trước thời Thiên Lý, nhóm học giả Rồng tiên phong đặt chân lên **Sương Nguyệt (Frost Moon)** nhận được một tín hiệu bí ẩn từ không gian sâu thẳm. **Ibni-Belum** (*\"Người Ngắm Trăng Đầu Tiên\"*) tin rằng thông điệp do **[[nibelung-sovereigns|Nibelung]]** gửi về nên xây dựng trạm thu phát **Con Mắt Ibni-Belum**. Tuy nhiên, cộng sự **Ungien** cho rằng tín hiệu xuất phát từ một sinh vật ngoài hành tinh; ông tự ý dựng **Vòng Tròn Ungien** cùng **Trạm Bắt Giữ Sinh Vật Vũ Trụ** và bị Ibni-Belum trục xuất vì bội ước.",
            "Nhiều năm sau khi Ibni-Belum qua đời, trạm thu bắt được tọa độ nguồn phát tín hiệu thứ hai. **Ungien** một mình lái phi thuyền **Moongazer** bay ra khoảng không quá xa tầm trở về, bắt gặp một sinh vật ngoại giới gọi là **Vật Thể Đen Tinh Tú (Stellar Blackbody)** và chấp nhận **hợp nhất thể xác cùng nó** để đưa thông điệp về Teyvat.",
            "Con tàu tàng hình *Moongazer* lao xuống trạm vũ trụ. Vợ ông là giáo sư **Maagees-Geti** phát hiện bên trong chỉ còn sinh vật hình cầu đen gai góc (*Vật Thể Mẫu Số 1*). Trước khi lìa đời qua cơ thể Ungien, sinh vật ấy truyền đạt lời cảnh báo cuối cùng của một nền văn minh đã diệt vong về **sự hủy diệt đen tối ([[abyss-void-realm|Vực Sâu]]) đang lan tràn khắp vũ trụ**."
          ],
          en: [
            "Pioneering dragon researchers on the **Frost Moon** intercepted an unexplained deep-space transmission. **Ibni-Belum** (*the First Moongazer*) built the transceiver station **Eye of Ibni-Belum** assuming it came from **Nibelung**, while **Ungien** erected **Ungien's Circle** and a capture station before being expelled.",
            "Years later, Ungien piloted the spaceship **Moongazer** to newly captured coordinates, encountered the **Stellar Blackbody**, and merged with it so the dying organism could return to relay a distant civilization's warning of **pitch-black universal annihilation ([[abyss-void-realm|the Abyss]])** to his wife **Maagees-Geti**."
          ]
        }
      },
      {
        title: { vi: "Dự án Ngắm Trăng (Project Moongazer) & Sinh vật dữ liệu Nin-Kiggia", en: "Project Moongazer & Immortal Information Life-Form Nin-Kiggia" },
        body: {
          vi: [
            "Cảm động trước thông điệp ấy, **Maagees-Geti** khởi xướng **Dự án Ngắm Trăng** để phát lại lời cảnh báo ra khắp tinh không, tiếp thêm dũng khí cho các nền văn minh khác. Bà chiết xuất **Vật Chất Đen (Blackbody Matter)** mang tính chất sinh vật lưu trữ thông tin và cùng **Năng Lượng Cổ Nguyệt (Archaeolune Energy)** biến phần còn lại của Ungien thành Kuuhenki khổng lồ **Ungie** (và khi bà kiệt sức cận kề cái chết, học trò **Lusalim** cũng chuyển hóa bà thành Siêu Kuuhenki **Maggie** sau khi thực hiện di nguyện phát sóng qua Con Mắt Ibni-Belum).",
            "Để lời cảnh báo tồn tại vĩnh cửu vượt qua tuổi thọ sinh học, **Lusalim** (với sự cố vấn kỹ thuật trực tiếp từ Hoả Long Vương **Xiuhcoatl** qua cầu nối **Nu-ur-Gestug**) nghĩ ra phương pháp khắc ký ức và lý tưởng thành dữ liệu — khai sinh ra sinh vật rồng dữ liệu **Nin-Kiggia** (được ông nuôi như con gái) có khả năng tái sinh vô hạn từ dữ liệu qua muôn đời."
          ],
          en: [
            "Determined to broadcast the warning back into space, **Maagees-Geti** extracted information-bearing **Blackbody Matter** and transformed Ungien's remains using **Archaeolune Energy** into the colossal kuuhenki **Ungie** (later undergoing the same process herself to become **Maggie**).",
            "To ensure the warning survived across epochs, her student **Lusalim**—aided by technical guidance from Pyro Sovereign **Xiuhcoatl** forwarded via **Nu-ur-Gestug**—encoded willpower and ideals into living data, birthing the endlessly reborn dragon-like life-form **Nin-Kiggia**."
          ]
        }
      },
      {
        title: { vi: "Dự án Màn Trăng (Project Lunar Veil) — Bức Màn Che Giấu Toàn Bộ Teyvat?", en: "Project Lunar Veil — Did Dragon Tech Birth Celestia's False Sky?" },
        body: {
          vi: [
            "Khác với sự lạc quan của cô giáo, **Lusalim** lo sợ phát tín hiệu ra ngoài sẽ dẫn đường cho kẻ thù tàn độc tìm tới Sương Nguyệt. Quan sát đặc tính phản xạ giúp phi thuyền *Moongazer* tàng hình của **Vật Chất Đen**, Lusalim và Maagees-Geti khởi động **Dự án Màn Trăng (Project Lunar Veil)**.",
            "Ở **Giai đoạn I**, nhóm dùng **Cây Bóng Trăng (Moonshade Trees)** kích thích bởi Năng Lượng Cổ Nguyệt để tạo bức màn phản xạ thu nhỏ che phủ Vòng Tròn Ungien (cái tên *Lunar Veil* bắt nguồn từ cô bé Nin-Kiggia lúc mới bập bẹ nói). Sang **Giai đoạn II**, Lusalim xây **Máy Phát Màn Trăng** cỡ lớn tại Biển Thủy Triều Trăng nhằm giấu kín cả Mặt Trăng (dù nhà nghiên cứu Nu-ur-Gestug chỉ trích giải pháp này chỉ câu giờ trước Kẻ Hủy Diệt Hắc Ám).",
            "Khi cỗ máy chuẩn bị hoàn tất, **[[heavenly-principles|Thiên Lý]]** giáng lâm tấn công khiến phòng thí nghiệm phát nổ tạo thành **Biển Thủy Triều Trăng**. Rút về Mặt Tối Mặt Trăng, Lusalim buộc phải **đầu hàng và giao nộp toàn bộ công nghệ Màn Trăng cho Thiên Lý** để bảo toàn mạng sống cho các cơ sở Dự án Ngắm Trăng còn lại. Chính **[[columbina|Columbina]]** đã nhận xét rằng bức màn che giấu Mặt Trăng của Lusalim giống hệt cơ chế của **[[descenders-false-sky|Bầu Trời Giả]]** bao trùm Teyvat!"
          ],
          en: [
            "Fearing hostile attention from deep space, Lusalim launched **Project Lunar Veil** to shield the moon using the cloaking properties of **Blackbody Matter** stimulated alongside **Moonshade Trees** and **Archaeolune Energy**—successfully shrouding Ungien's Circle in Phase I before attempting a moon-wide Veil Generator in Phase II.",
            "When the **[[heavenly-principles|Heavenly Principles]]** arrived, the Lunar Veil generator exploded (carving out the Moontide Sea), forcing Lusalim on the Dark Side of the Moon to surrender Lunar Veil research to Celestia to protect his other labs. **[[columbina]]** directly noted the striking parallel between this cloaking veil and Teyvat's **[[descenders-false-sky|False Sky]]**."
          ]
        }
      }
    ],
    theories: [],
    sources: [
      { label: "Fandom: Project Moongazer", url: "https://genshin-impact.fandom.com/wiki/Project_Moongazer" },
      { label: "Fandom: Project Lunar Veil", url: "https://genshin-impact.fandom.com/wiki/Project_Lunar_Veil" },
      { label: "Fandom: Ibni-Belum", url: "https://genshin-impact.fandom.com/wiki/Ibni-Belum" }
    ],
    related: ["three-moons", "descenders-false-sky", "nibelung-sovereigns", "secret-source", "columbina", "heavenly-principles", "abyss-void-realm"]
  },

  {
    id: "anacharsis",
    type: "character",
    name: { vi: "Anacharsis (Lữ Khách Tinh Không) & Đại Thiên Sứ Koitar", en: "Anacharsis (The Voyager) & First Angel Koitar" },
    subtitle: { vi: "Kẻ du hành giữa các vì sao từng gặp Nibelung, người đồng sáng lập Vương quốc Hyperborea & Vùng Bóng Tối", en: "Interstellar voyager who met Nibelung and sparked Hyperborea's rebellion alongside First Angel Koitar" },
    region: { vi: "Biển Sao / Hyperborea (Nod-Krai)", en: "Sea of Stars / Hyperborea (Nod-Krai)" },
    summary: {
      vi: "Thực thể phi hành tinh không (*Seutervoinen* trong truyền thuyết Hậu Duệ Sương Nguyệt) từng cảnh báo Nibelung trước khi Thiên Lý đến; sau trở lại nhập vào chàng trai đồng tử hình sao tại Hyperborea, kết duyên với Đại Thiên Sứ Koitar và tạo ra Vùng Bóng Tối che chắn Vực Sâu suốt 6.000 năm.",
      en: "An interstellar consciousness (*Seutervoinen* in Frostmoon lore) who warned Nibelung before Celestia's arrival, later possessed a star-eyed youth in Hyperborea, wed First Angel Koitar in defiance of Phanes, and created the Shadow Realm shield."
    },
    quote: {
      text: {
        vi: "Ta sẽ chờ ngày chàng thoát khỏi xiềng xích, chờ đợi ngôi sao bên ngoài những vì sao...",
        en: "I will return to my homeland, sing in the ruins, and await my husband's freedom—await the star beyond the stars."
      },
      source: {
        vi: "Lời thề của Đại Thiên Sứ Koitar sau khi mất ký ức",
        en: "Vow of First Angel Koitar after being cursed into a Seelie"
      }
    },
    sections: [
      {
        title: { vi: "Người quan sát biển sao & cuộc gặp gỡ định mệnh với Long Vương Nibelung", en: "The Scribe of Dying Worlds & Her Encounter with Nibelung" },
        body: {
          vi: [
            "**Anacharsis** (được người Hậu Duệ Sương Nguyệt tôn xưng là **Thánh Nhân Seutervoinen** hay *Sứ Đồ Cực Bắc*) là một lữ khách phi vật chất có khả năng phóng chiếu ý thức vượt qua khoảng cách liên sao để ghi chép sự diệt vong của vô số thế giới trong Biển Sao. Sau hàng vạn năm thiền định, nàng sững sờ khi cảm nhận ý chí rực rỡ của **[[nibelung-sovereigns|Nibelung]]** sáng hơn mọi nền văn minh từng thấy.",
            "Anacharsis cảnh báo Nibelung rằng Teyvat rồi sẽ bị **[[abyss-void-realm|Vực Sâu]]** hủy diệt và khuyên ông rời đi cùng mình. Nibelung từ chối bỏ rơi đồng loại, thay vào đó thúc đẩy **[[secret-source|Công nghệ Bí Nguyên]]** và hẹn Anacharsis hàng nghìn năm sau hãy quay lại chứng kiến con đường của loài rồng."
          ],
          en: [
            "**Anacharsis** (**Seutervoinen**, *Apostle of the Far North*) was a cosmic traveler able to cast her mind across interstellar space. After meditating for tens of thousands of years, she sensed **[[nibelung-sovereigns|Nibelung]]**'s radiant will on Teyvat and warned him of inevitable Abyssal ruin—yet Nibelung chose to stay, pioneer **[[secret-source|Secret Source technology]]**, and asked her to return millennia later."
          ]
        }
      },
      {
        title: { vi: "Chàng trai đồng tử hình sao, Cuộc nổi dậy của Koitar & 30 năm Hoàng Kim ở Hyperborea", en: "The Star-Eyed Youth, First Angel Koitar & 30 Years of Rebel Hyperborea" },
        body: {
          vi: [
            "Hàng nghìn năm sau khi Anacharsis quay lại, Nibelung đã rời đi và **[[heavenly-principles|Thiên Lý]]** cùng **Tứ Ảnh** đang thống trị dưới Bầu Trời Giả. Tìm kiếm *\"ánh sáng hy vọng từ thuở khai thiên lập địa\"* của Nibelung mà không muốn kinh động Thiên Lý, Anacharsis nhập ý thức vào thân xác một thiếu niên **Hyperborea** (mô tả có **đồng tử hình ngôi sao** — dấu hiệu liên hệ mật thiết tới dân tộc **[[khaenriah]]** về sau).",
            "Lúc này người dân [[hyperborea]] đang chất vấn giáo điều tôn giáo và bị các Thiên Sứ giận dữ đe dọa. Anacharsis lẻn vào nghị viện bác bỏ định kiến \"tội lỗi tri thức\", rồi xuống dưới gốc cây Irminsul địa phương diện kiến **Đại Thiên Sứ Koitar** — *\"người con gái đầu tiên và rực rỡ nhất của Thiên Lý\"*, sứ giả thiên giới cai quản Hyperborea. Khi Anacharsis tiết lộ nguồn gốc ngoại giới và sự thật bị cấm, **chiếc vương miện xiềng xích trên đầu Koitar vỡ nát**: nàng lần đầu biết đến tình yêu và tự do (nụ hôn của họ sinh ra giống tuyết tinh linh *Snegovik*!).",
            "Koitar đánh cắp một phần quyền năng Sự Sống của **Naberius** trao cho thợ thủ công Hyperborea tạo nên **Tiên Tuyết (Snowland Fae)** trên hài cốt Băng Long Vương, còn Anacharsis dạy nhân loại công nghệ vũ trụ vươn ra ngoài Bầu Trời Giả. Họ cùng cai quản Hyperborea suốt **30 năm** — thực chất trì hoãn được **30 năm** thảm họa **Đinh Trời** mà Thiên Lý đã định sẵn từ trước — trước khi Hyperborea sụp đổ ngay sát Cuộc Chiến Tang Lễ Lửa."
          ],
          en: [
            "Returning millennia later to find Celestia in power, Anacharsis sought Nibelung's \"primordial light of hope\" by inhabiting the body of a **Hyperborean youth** noted to possess **star-shaped pupils** (a trait famously echoed by **[[khaenriah|Khaenri'ahns]]**).",
            "Descending beneath Hyperborea's Irminsul tree, Anacharsis revealed cosmic truths to **First Angel Koitar**, Celestia's exalted envoy. Hearing them shattered her crown-shackle; Koitar and Anacharsis wed, stole **Naberius**'s authority of Life to forge the **Snowland Fae** upon the Cryo Dragon's bones, and taught Hyperborea spacefaring arts—holding off Celestia's preordained Celestial Nail destruction for **30 years**."
          ]
        }
      },
      {
        title: { vi: "Vùng Bóng Tối (Shadow Realm), Bi kịch Tiên Linh & Cuộc truy tìm của Skirk", en: "The Shadow Realm Shield, Curse of the Seelie & Skirk's Search" },
        body: {
          vi: [
            "Sau khi từ biệt Koitar và rút khỏi thân xác chàng trai để thoát khỏi hành tinh, Anacharsis đã tạo ra **[[abyss-void-realm|Vùng Bóng Tối (Shadow Realm)]]** bằng công nghệ ngoài Teyvat — đóng vai trò như một lớp màng chắn đẩy lùi **Vực Sâu** suốt **6.000 năm** cho đến khi bị **Belyi Tsar** (nhờ **[[descenders-false-sky|Saarelainen]]**) mở cửa.",
            "Còn **Koitar** và toàn bộ các Thiên Sứ nổi loạn bị Thiên Lý nguyền rủa: nếu đem lòng yêu thương phàm trần sẽ mất sạch lý trí và hình hài, thoái hóa thành loài **Tiên Linh (Seelie)** lang thang. Trong triều đình hoang tàn của Seelie ở Amsvartnir, một Koitar mất trí nhớ vẫn cất tiếng hát bên cây đàn lia và thu nhận một chú sói nhỏ đặt tên là **Boreas (Bắc Phong)** — vị ma thần sói sau này về với [[mondstadt|Mondstadt]] cổ đại. Hiện nay, Tội Đồ **Surtalogi** đang hạ lệnh cho đồ đệ **[[skirk]]** truy tìm tung tích của **Anacharsis** trên khắp vũ trụ!"
          ],
          en: [
            "Bidding Koitar farewell and relinquishing the boy's body to flee Teyvat, Anacharsis forged the **[[abyss-void-realm|Shadow Realm]]** out of otherworldly tech—shielding Teyvat from the Abyss for **6,000 years** until breached by the Belyi Tsar and **Saarelainen**.",
            "Koitar and the rebellious Angels were cursed to lose minds and forms if they ever fell in love, devolving into **Seelies**. Confined in Amsvartnir, amnesiac Koitar sang to her lyre and befriended a lone wolf she named **Boreas**, who later went south to Mondstadt. Today, **Surtalogi** has ordered **[[skirk]]** to track down **Anacharsis**."
          ]
        }
      }
    ],
    theories: [],
    sources: [
      { label: "Fandom: Anacharsis", url: "https://genshin-impact.fandom.com/wiki/Anacharsis" },
      { label: "Fandom: Koitar", url: "https://genshin-impact.fandom.com/wiki/Koitar" },
      { label: "Fandom: Finale of the Deep Galleries", url: "https://genshin-impact.fandom.com/wiki/Finale_of_the_Deep_Galleries" }
    ],
    related: ["hyperborea", "nibelung-sovereigns", "heavenly-principles", "abyss-void-realm", "skirk", "five-sinners", "khaenriah", "old-mondstadt", "snezhnaya"]
  },

  {
    id: "secret-source",
    type: "item",
    name: { vi: "Công Nghệ Bí Nguyên & Phlogiston (Secret Source Technology)", en: "Secret Source Technology & Phlogiston" },
    subtitle: { vi: "Vật chất lập trình (Computronium), Thang máy Vũ trụ và Siêu vũ khí Huitzilopochtli của loài Rồng", en: "Draconic programmable computronium, orbital elevators, and the Huitzilopochtli Array" },
    region: { vi: "Natlan (Tollan) / Sương Nguyệt", en: "Natlan (Tollan) / Frost Moon" },
    summary: {
      vi: "Đỉnh cao khoa học kỹ thuật của nền văn minh Rồng thời Nibelung và Xiuhcoatl: vận dụng Phlogiston (nguyên mẫu tối tân của Ngọn Lửa Nguyên Thủy), Tổ Hợp Sao, Cột Không Gian và các Người Máy Bí Nguyên để vươn ra tinh không và chống lại Vực Sâu.",
      en: "The apex science of the pre-Celestia dragons led by Nibelung and Xiuhcoatl: programmable Phlogiston, star-like Astral Assemblages, orbital elevators, and Secret Source Automatons forged to traverse space and purge the Abyss."
    },
    quote: {
      text: {
        vi: "Khi ánh sáng của Tổ Hợp Sao bùng cháy, từng nguyên tử của vạn vật sẽ được phiên mã thành Phlogiston bất diệt — để bóng tối Hư Không không còn nơi nào bấu víu.",
        en: "When the Astral Assemblages ignite, all matter shall be transcribed into Phlogiston—leaving the pitch-black Abyss nothing left to devour."
      },
      source: {
        vi: "Ký ức Thành Thánh Cổ Tollan & Huitzilopochtli",
        en: "Records of Sacred Tollan & Huitzilopochtli"
      }
    },
    sections: [
      {
        title: { vi: "Phlogiston — Vật chất lập trình của Khắp Cõi Sáng", en: "Phlogiston — Computronium of the Light Realm" },
        body: {
          vi: [
            "**Phlogiston** là dạng thái sơ khai và tối cao của nguyên tố Hoả thuộc Khắp Cõi Sáng, tồn tại dưới bốn trạng thái (*Phlogiston Lỏng*, *Rắn*, *Khí* và *Linh Đạo / Spiritways*). Về bản chất vật lý trong vũ trụ Genshin Impact, Phlogiston chính là **computronium** (*vật chất lập trình*) — môi trường lưu trữ thông tin, ký ức và tính toán hiệu quả nhất mà loài rồng dùng để vận hành toàn bộ văn minh.",
            "Tại vùng **Biển Ý Thức Luân Chuyển (Sea of Shifting Sentience)** dưới Thành Thánh [[ancient-dragon-tollan|Tollan]], các con rồng cổ đại từng đắm mình trực tiếp vào hồ Phlogiston lỏng để hấp thụ khối tri thức khổng lồ lưu giữ trong ngọn lửa nguyên thủy ấy."
          ],
          en: [
            "**Phlogiston** is the primordial, advanced form of Pyro within the Light Realm, existing across liquid, solid, gaseous, and Spiritway states. Scientifically, it acts as draconic **computronium**—programmable matter considered the universe's most efficient medium for storing memory and executing computation.",
            "In Tollan's **Sea of Shifting Sentience**, ancient dragons submerged directly in pools of Liquid Phlogiston to absorb ancestral wisdom encoded inside the Primal Flame."
          ]
        }
      },
      {
        title: { vi: "Từ Mười Ba Long Chúa đến Người Máy Bí Nguyên & Sương Nguyệt", en: "Orbital Elevators, Astral Assemblages & Secret Source Automatons" },
        body: {
          vi: [
            "Khác với công nghệ *Khaenri'ah* hay *Fontaine* dựa vào Ma Đạo Lõi Rỗng hay Indemnitium, **Công nghệ Bí Nguyên (Secret Source Technology)** do **[[nibelung-sovereigns|Long Vương Nibelung]]** khởi xướng và **Hỏa Long Vương Xiuhcoatl** phát triển đạt tới tầm cỡ liên hành tinh:\n  • **Nâng Ba Mặt Trăng:** Nibelung dùng Công nghệ Bí Nguyên tách vỏ Teyvat tại Nod-Krai đưa thành **[[three-moons|Ba Mặt Trăng]]** lên quỹ đạo và tạo thành mạng lưới **Đá Nguồn Bí Mật** trên cả Sương Nguyệt lẫn Natlan (*với nhiều đơn vị Người Máy Bí Nguyên vẫn hiện diện trên Sương Nguyệt ngày nay*).\n  • **Thang máy Không gian Chichen Uctokah & Tàu Tonatiuh:** Công trình cáp treo quỹ đạo khổng lồ nhằm đưa loài rồng thoát khỏi bầu khí quyển lên Biển Sao.\n  • **Tổ Hợp Sao (Astral Assemblages / Tzitzimimeh):** Những khối cầu Phlogiston nén cực đại tại Tollan — được Kukulkan ca ngợi là kỳ công *\"ngang hàng việc đúc tạo một ngôi sao\"*, tạo phản ứng hủy diệt lẫn nhau với **[[abyss-void-realm|Vực Sâu]]**.\n  • **Siêu vũ khí Huitzilopochtli:** Hệ thống tháp truyền dẫn trải khắp Natlan nhằm Phlogiston hóa toàn bộ sự sống để thanh tẩy hoàn toàn Vực Sâu (sau bị Xbalanque và Kukulkan chia đôi **Golden Entreaties** để phong ấn).\n  • **Người Máy & Người Hầu Bí Nguyên (Secret Source Automatons & Servants):** Những cỗ máy cổ tự hành (*Hunter-Seeker*, *Configuration Device*, *Overseer Device*, *Precursor's Matrix*, *Dragon Idol*) dùng năng lượng Bí Nguyên để bảo trì Huitzilopochtli và nhạy cảm với trạng thái *Dạ Hồn Chúc Phúc (Nightsoul's Blessing)*."
          ],
          en: [
            "Initiated by **Nibelung** and perfected by **Xiuhcoatl**, **Secret Source Technology** achieved cosmic-scale engineering:\n  • **Lunar Architecture:** Raised the **[[three-moons|Three Moons]]** from Nod-Krai's crust; intact **Secret Source Automatons** still remain on the **Frost Moon**.\n  • **Chichen Uctokah & Skyship Tonatiuh:** A massive draconic space-elevator complex intended to propel dragonkind toward the stars.\n  • **Astral Assemblages (Tzitzimimeh):** High-pressure spheres of Phlogiston forged beneath Tollan—\"akin to star forging itself\"—designed to annihilate Abyssal matter on contact.\n  • **Huitzilopochtli:** The Natlan Phlogistonization Array built by Xiuhcoatl in the Heart of the Sacred Mountain and sealed via the split **Golden Entreaties**.\n  • **Secret Source Automatons & Servants:** Autonomous constructs (*Hunter-Seeker*, *Configuration Device*, *Overseer Device*, *Precursor's Matrix*) reactive to Nightsoul's Blessing."
          ]
        }
      }
    ],
    theories: [],
    sources: [
      { label: "Fandom: Phlogiston", url: "https://genshin-impact.fandom.com/wiki/Phlogiston" },
      { label: "Fandom: Secret Source Automaton", url: "https://genshin-impact.fandom.com/wiki/Secret_Source_Automaton" },
      { label: "Fandom: Huitzilopochtli / Astral Assemblage", url: "https://genshin-impact.fandom.com/wiki/Huitzilopochtli" }
    ],
    related: ["ancient-dragon-tollan", "nibelung-sovereigns", "three-moons", "project-lunar-veil", "natlan", "ochkanatlan", "abyss-void-realm"]
  },

  {
    id: "nibelung-sovereigns",
    type: "character",
    name: { vi: "Long Vương Nibelung & Thất Đại Long Vương", en: "Dragon King Nibelung & The Seven Sovereigns" },
    subtitle: { vi: "\"Nhân Loại Nguyên Thủy\" sinh ra cùng Teyvat và bảy chúa tể nắm giữ quyền năng nguyên tố gốc", en: "The \"Primordial Human\" born alongside Teyvat and the seven elemental dragon-lords" },
    region: { vi: "Thế Giới Cũ / Toàn Teyvat", en: "Old World / All of Teyvat" },
    summary: {
      vi: "Vị Vua Rồng tối cao sáng tạo Ba Mặt Trăng, mang danh hiệu 'Nhân Loại Nguyên Thủy' và là Kẻ Đổ Bộ Thứ Hai; sau khi quay về cùng Tri Thức Cấm Kỵ trong Cuộc Chiến Tang Lễ Lửa, ông trọng thương Thiên Lý trước khi tử trận — mở đường cho sự thoái hóa và tái sinh của Thất Đại Long Vương qua hàng ngàn năm.",
      en: "The supreme Dragon King, creator of the Three Moons, \"Primordial Human,\" and Second Descender—who returned from the Sea of Stars wielding the Abyss to shatter Phanes' absolute order in the War of Funerary Flame."
    },
    quote: {
      text: {
        vi: "Khi ngài rời đi, bầu trời còn tỏa sáng vảy bạc trắng muốt; ngày ngài trở về, đôi cánh đen khổng lồ đã mang theo cả bóng tối của tinh không.",
        en: "When he departed, his scales gleamed silver-white; when he returned, great dark wings bore the abyss of the cosmos."
      },
      source: {
        vi: "Truyền thuyết Long Tộc — Apep & Bích họa Ochkanatlan",
        en: "Draconic Lore — Apep & the Murals of Ochkanatlan"
      }
    },
    sections: [
      {
        title: { vi: "Từ Vua Rồng Vảy Bạc đến Kẻ Đổ Bộ Thứ Hai mang Tri Thức Cấm Kỵ", en: "From the Silver-White Dragon King to the Second Descender" },
        body: {
          vi: [
            "**Nibelung** được sinh ra cùng lúc với hành tinh Teyvat, vốn mang bộ vảy trắng bạc rực sáng (chứ không phải đen tuyền như sau khi bị nhiễm Vực Sâu). Được **Anacharsis** cảnh báo về nguy cơ **[[abyss-void-realm|Vực Sâu]]**, Nibelung chế tạo **[[three-moons|Ba Mặt Trăng]]** giao quyền trông coi thế giới rồi rời Teyvat vào Biển Sao tìm giải pháp cứu thế giới. Ánh sáng trắng thuần khiết trào dâng từ Nibelung thuở sơ khai được **Belyi Tsar** mô tả chính là *\"hy vọng\"* và *\"tình yêu\"* nguyên sơ của thế giới.",
            "Trong lúc Nibelung vắng mặt, **[[heavenly-principles|Đấng Nguyên Sơ Phanes]]** xuất hiện chinh phục **Thất Đại Long Vương** và thiết lập Nhân Giới. Khi Nibelung quay về vào **Năm Tang Lễ**, ông đã rơi vào bẫy của Vực Sâu, tiếp nhận **Tri Thức Cấm Kỵ** và trở thành **[[descenders-false-sky|Kẻ Đổ Bộ Thứ Hai]]** (vì quay lại với ý chí ngoại giới thách thức trật tự Teyvat). Dù tử trận dưới tay Phanes, Nibelung đã gây thương tích trí mạng khiến Thiên Lý mất khả năng trực tiếp áp đặt quy luật thế giới."
          ],
          en: [
            "Born alongside Teyvat with gleaming silver-white scales, **Nibelung** left Teyvat to seek salvation from the **[[abyss-void-realm|Abyss]]** after **[[anacharsis|Anacharsis]]**'s warning, forging the **[[three-moons|Three Moons]]** to govern in his stead. His original radiant light was described by the Belyi Tsar as pure, unblemished \"hope\" and \"love.\"",
            "Returning in the **Funerary Year** corrupted by **Forbidden Knowledge** as the **[[descenders-false-sky|Second Descender]]**, Nibelung rallied surviving dragons in a catastrophic war of vengeance that fatally crippled the Heavenly Principles' sovereign might before his own demise."
          ]
        }
      },
      {
        title: { vi: "Số phận của Bảy Vị Long Vương Nguyên Tố qua các kỷ nguyên", en: "Fates of the Seven Elemental Dragon Sovereigns" },
        body: {
          vi: [
            "Vì nền nông nghiệp của con người phá hủy *\"Đất Thánh\"* (đất giàu Phlogiston/nguyên tố tinh khiết), loài rồng bị ép tiến hóa hỗn tạp (như Rồng Đất Sâu Biển tại [[enkanomiya]] hay 6 loài Saurian ở [[natlan]]), khiến Long Vương thuần khiết khó thể tái sinh:\n  • **Thủy Long Vương ([[neuvillette]]):** Từng là \"trái tim đầu tiên\" của **Biển Khởi Nguyên**; do Rồng Đất Sâu Biển mất thuần khiết mà tái sinh dưới hình hài con người tại [[fontaine]], và đã nhận lại trọn vẹn Quyền Năng Thủy sau khi Focalors phá hủy Ngai Thần.\n  • **Thảo Long Vương (Apep):** Sống sót qua đại chiến ở [[sumeru]], nuốt xác **[[deshret-kingdom|Vua Deshret]]** để hấp thụ tri thức rồi bị Tri Thức Cấm Kỵ hành hạ suốt hàng nghìn năm trước khi được Nahida và Nhà Lữ Hành thanh tẩy.\n  • **Hỏa Long Vương (Xiuhcoatl):** Từng đóng băng trong dung nham Phlogiston lỏng, thức tỉnh chế tạo **Huitzilopochtli** ở [[ancient-dragon-tollan|Tollan]] trước khi bị **Xbalanque** hạ sát.\n  • **Nham Long Vương (Azhdaha):** Long Vương cổ xưa của [[liyue]] từng kết bạn và chiến đấu bên cạnh [[zhongli|Morax]], về sau phát điên vì Bào Mòn khi khai thác Vực Đá Sâu và tự nguyện để phong ấn tại Phục Long Mộc.\n  • **Băng Long Vương:** Tử trận từ thời cổ đại; thành **[[hyperborea]]** từng dùng hài cốt ngài để thí nghiệm tạo lại *\"Nhân Loại Nguyên Thủy\"* (thay thế vị trí của Nibelung vì ngỡ ông đã chết hẳn) — khiến tuyết băng bao phủ Snezhnaya nhưng 1.000 năm sau lại vô tình sản sinh ra **Monomakh Snezhnyi (Belyi Tsar)**!"
          ],
          en: [
            "Stripped of phlogiston-rich \"Holy Soil\" by human agriculture, dragons diverged into impure lineages like Bathysmal Vishaps and Saurians:\n  • **Hydro Sovereign ([[neuvillette]]):** Reborn in human shape because Bathysmal Vishaps lost elemental purity; reclaimed full Hydro Authority after Focalors shattered the Hydro Throne.\n  • **Dendro Sovereign (Apep):** Endured Forbidden Knowledge after swallowing **[[deshret-kingdom|King Deshret]]** until cured by Nahida and the Traveler.\n  • **Pyro Sovereign (Xiuhcoatl):** Frozen in liquid Phlogiston, later built **Huitzilopochtli** in Tollan before being slain by **Xbalanque**.\n  • **Geo Sovereign (Azhdaha):** Befriended **[[zhongli|Morax]]** before succumbing to erosion beneath Mt. Hulao.\n  • **Cryo Sovereign:** Hyperborea experimented on the Cryo Sovereign's corpse trying to recreate the **Primordial Human**, inadvertently icing Snezhnaya and birthing the **Belyi Tsar (Monomakh Snezhnyi)** a millennium later."
          ]
        }
      }
    ],
    theories: [],
    sources: [
      { label: "Fandom: Nibelung", url: "https://genshin-impact.fandom.com/wiki/Nibelung" },
      { label: "Fandom: Seven Sovereigns", url: "https://genshin-impact.fandom.com/wiki/Seven_Sovereigns" },
      { label: "Fandom: Dragon", url: "https://genshin-impact.fandom.com/wiki/Dragon" }
    ],
    related: ["three-moons", "heavenly-principles", "anacharsis", "secret-source", "ancient-dragon-tollan", "neuvillette", "snezhnaya", "abyss-void-realm"]
  },

  {
    id: "descenders-false-sky",
    type: "item",
    name: { vi: "Kẻ Đổ Bộ (Descenders), Saarelainen & Bầu Trời Giả", en: "Descenders, Saarelainen & The False Sky" },
    subtitle: { vi: "Bốn thực thể mang ý chí sánh ngang thế giới, miễn nhiễm Irminsul, và 'vỏ trứng' che giấu Teyvat", en: "The Four Wills rivaling a world beyond Irminsul, and the celestial shell enclosing Teyvat" },
    region: { vi: "Biển Sao / Toàn Teyvat", en: "Sea of Stars / All Teyvat" },
    summary: {
      vi: "Hệ thống phân loại những tồn tại có 'ý chí sánh ngang cả một thế giới' (Phanes, Nibelung, Saarelainen, Nhà Lữ Hành) cùng bí ẩn về chiếc 'vỏ trứng' Bầu Trời Giả ngăn cách Teyvat với vũ trụ bên ngoài — thứ từng bị vỡ nứt trước mắt Mavuika và Dottore.",
      en: "The classification of transcendent beings whose wills can rival an entire world (Phanes, Nibelung, Saarelainen, the Traveler), and the mystery of Teyvat's illusory False Sky torn open in Natlan and Nod-Krai."
    },
    quote: {
      text: {
        vi: "Các vì sao, bầu trời... tất cả chỉ là một trò lừa bịp vĩ đại!",
        en: "The stars, the sky... it's all a gigantic hoax. A lie!"
      },
      source: {
        vi: "Scaramouche — Sự kiện Ngôi Sao Vụt Tắt Chưa Trở Về (v1.1)",
        en: "Scaramouche — Unreconciled Stars (v1.1)"
      }
    },
    sections: [
      {
        title: { vi: "Bốn Kẻ Đổ Bộ đã được xác nhận & Khế ước bi thương của Saarelainen", en: "The Four Confirmed Descenders & Saarelainen's Fateful Pact" },
        body: {
          vi: [
            "Theo nghiên cứu của **Rene (Narzissenkreuz Ordo)** và thông tin từ **[[dottore]]**, một thực thể chỉ được công nhận là **Kẻ Đổ Bộ (Descender)** khi sở hữu *\"ý chí đủ sức sánh ngang cả một thế giới\"* (chỉ đến từ ngoài Teyvat thôi là chưa đủ — nên người thân song sinh của Nhà Lữ Hành lại bị ghi nhận trong **[[irminsul]]** và không xếp hàng ngũ Kẻ Đổ Bộ). Bốn Kẻ Đổ Bộ chính thức gồm:\n  1. **Thứ Nhất — [[heavenly-principles|Thiên Lý (Đấng Nguyên Sơ Phanes)]]:** Kẻ từ Biển Sao tới soán ngôi Long Vương.\n  2. **Thứ Hai — [[nibelung-sovereigns|Long Vương Nibelung]]:** Quay trở lại từ Biển Sao mang theo Tri Thức Cấm Kỵ trong Năm Tang Lễ.\n  3. **Thứ Ba — Saarelainen (\"Kẻ Lạ Mặt Ngày Đông\"):** Hàng >6.000 năm trước, chàng rơi xuống Snezhnaya cổ và đem lòng yêu **Anastasya**, sinh một người con trai mang **đồng tử sao bốn cánh** — chính là thủy tổ người **[[khaenriah]]**! Khi bị Belyi Tsar xúi giục mở cổng dẫn tới **Vùng Bóng Tối** tại Pohjola làm rò rỉ Vực Sâu, Phanes phẫn nộ xóa sổ Anastasya. Saarelainen lên **[[celestia]]** thỏa thuận **hiến xác làm 7 chiếc [[gnosis]]** đổi lấy việc hồi sinh Anastasya và lời thề không bao giờ động đến hậu duệ Khaenri'ah, đồng thời đặt lời nguyền ru ngủ Thiên Lý nếu bội ước.\n  4. **Thứ Tư — Nhà Lữ Hành:** Miễn nhiễm hoàn toàn với việc sửa đổi ký ức của Irminsul (nhờ đó còn nhớ Rukkhadevata và Scaramouche)."
          ],
          en: [
            "Defined by **Rene** as beings holding \"wills that can rival an entire world\" (exempt from **[[irminsul]]**, unlike the Traveler's Twin whose records exist inside the World Tree), the Four Descenders are:\n  1. **First — [[heavenly-principles|Phanes (The Heavenly Principles)]]**\n  2. **Second — [[nibelung-sovereigns|Dragon King Nibelung]]**\n  3. **Third — Saarelainen (*Stranger of Winter's Day*):** Arriving over 6,000 years ago in ancient Snezhnaya, he fathered a star-eyed son with **Anastasya**—ancestor to all **[[khaenriah|Khaenri'ahns]]**. After Phanes erased Anastasya for opening the Shadow Realm gate at Pohjola, Saarelainen ascended to Celestia and sacrificed his body to forge the **Seven Gnoses** in exchange for her resurrection and a safety vow over Khaenri'ah backed by a slumber curse.\n  4. **Fourth — The Traveler:** Immune to Irminsul's global memory edits."
          ]
        }
      },
      {
        title: { vi: "Bầu Trời Giả & Những lần Vỡ Trời (Surtalogi, Mavuika & Dottore)", en: "The False Sky & Split-Sky Events (Surtalogi, Mavuika & Dottore)" },
        body: {
          vi: [
            "**Bầu Trời Giả (False Sky)** là lớp màng \"vỏ trứng\" bao bọc Teyvat, vừa phản chiếu ngược bầu trời sao thực sự bên ngoài vừa che giấu hành tinh khỏi cái nhìn của Biển Sao (có thể chế tạo dựa trên công nghệ **[[project-lunar-veil|Dự án Màn Trăng]]** thu giữ từ Lusalim, tương đồng mô hình thế giới cổ tích *Simulanka* của Hội Ma Nữ). Theo Trưởng lão Hội Ma Nữ **[[hexenzirkel|Alice]]** (*Kẻ Duy Trì Biên Giới Thế Giới*), ranh giới này ngày càng mỏng manh trong hai năm gần đây.",
            "Lịch sử đương đại đã ghi nhận ba lần **Vỡ Trời (Split-Sky)**: (1) **Surtalogi** xé không gian đưa **[[skirk]]** rơi xuống Fontaine; (2) **[[mavuika]]** dồn sức mạnh 6 anh hùng cùng quyền năng Ronova đánh bật Vực Sâu ở [[natlan]], làm nứt bầu trời lộ ra xác vỡ **Tàn Tích Cổ Nguyệt (Hằng Nguyệt Aria)** cùng Biển Sao đỏ rực; và (3) **[[dottore]]** khi hóa thành *Kẻ Dị Giáo Giả Nguyệt* đã dùng sức mạnh Moon Marrows xé toạc Bầu Trời Giả."
          ],
          en: [
            "Described as an \"eggshell\" concealing Teyvat (resembling **Lusalim**'s **[[project-lunar-veil|Lunar Veil]]** and the witches' mirror-world **Simulanka**), the **False Sky** projects illusory stars while shielding Teyvat—though **[[hexenzirkel|Alice]]**, *Sustainer of the World's Borders*, notes those borders growing dangerously fragile.",
            "Three major **Split-Sky** rifts have occurred: (1) **Surtalogi** introducing **[[skirk]]**; (2) **[[mavuika]]**'s strike powered by Ronova revealing the shattered **Eternal Moon (Aria)** beyond Natlan's atmosphere; and (3) **[[dottore]]** tearing the firmament apart as the *Heretic of the False Moon*."
          ]
        }
      }
    ],
    theories: [],
    sources: [
      { label: "Fandom: Descender", url: "https://genshin-impact.fandom.com/wiki/Descender" },
      { label: "Fandom: Saarelainen", url: "https://genshin-impact.fandom.com/wiki/Saarelainen" },
      { label: "Fandom: False Sky", url: "https://genshin-impact.fandom.com/wiki/False_Sky" }
    ],
    related: ["heavenly-principles", "nibelung-sovereigns", "project-lunar-veil", "three-moons", "gnosis", "irminsul", "khaenriah", "snezhnaya", "mavuika", "dottore", "skirk"]
  },

  {
    id: "five-sinners",
    type: "character",
    name: { vi: "Năm Tội Đồ Của Khaenri'ah (Five Sinners)", en: "The Five Sinners of Khaenri'ah" },
    subtitle: { vi: "Năm thiên tài đã chiếm đoạt quyền năng Vực Sâu 'hủy diệt thế giới' và bỏ rơi vương quốc trong Đại Thảm Hoạ", en: "The five prodigies who divided world-shattering Abyssal power and forsook Khaenri'ah during the Cataclysm" },
    region: { vi: "Khaenri'ah / Biển Sao", en: "Khaenri'ah / Sea of Stars" },
    summary: {
      vi: "Năm cá nhân kiệt xuất nhất của Khaenri'ah (Hroptatyr, Vedrfolnir, Rhinedottir, Rerir và Surtalogi) — những người thay vì hợp sức cùng Dainsleif ngăn Vua Irmin đã chia nhau 5/6 sức mạnh Vực Sâu, gián tiếp kéo Lời Nguyền Bất Tử xuống dân tộc mình rồi rũ bỏ tất cả để theo đuổi sự 'hoàn mỹ' vượt khỏi tầm Teyvat.",
      en: "Khaenri'ah's five finest luminaries (Hroptatyr, Vedrfolnir, Rhinedottir, Rerir, Surtalogi) who abandoned Dainsleif's rebellion, stole five-sixths of the Abyssal power from the Traveler's Twin, triggered Ronova's curse, and pursued transcendence beyond the world."
    },
    quote: {
      text: {
        vi: "Khi thảm họa giáng xuống, không một ai trong năm kẻ ấy đứng ra cản bước lũ quái vật... Bởi đối với chúng, tội lỗi cũng chỉ là cái giá nhỏ cho quyền năng lay chuyển thế giới.",
        en: "When the disaster struck, not one of those five stood against the abyssal tide... Each seized world-shattering power and left their homeland to burn."
      },
      source: {
        vi: "Dainsleif & Thuyền Trưởng Il Capitano — Nhiệm Vụ Ma Thần",
        en: "Dainsleif & Il Capitano — Archon Quest Revelations"
      }
    },
    sections: [
      {
        title: { vi: "Tội lỗi chia 6 nguồn sức mạnh Vực Sâu & Ngũ Đại Vũ Khí Stygian Onslaught", en: "Dividing the Abyssal Power & Their Five Ancient Weapons" },
        body: {
          vi: [
            "Trước Đại Thảm Hoạ, **Vua Irmin** cho Song Sinh Nhà Lữ Hành hấp thụ một lượng sức mạnh Vực Sâu khổng lồ đủ sức hủy diệt cả thế giới. Thay vì cùng **[[dainsleif]]** ngăn chặn nhà vua, năm nhân vật kiệt xuất nhất Khaenri'ah đã mỗi người cướp lấy **1/6** nguồn sức mạnh ấy — trở thành những thực thể siêu việt nhưng đồng thời mang tội phản bội. Chính hành động khai thác Vực Sâu của họ đã khiến Chấp Chính Cái Chết **Ronova** áp đặt **Lời Nguyền Bất Tử** lên toàn bộ người Khaenri'ah thuần chủng.",
            "Cả năm Tội Đồ đều gắn liền với 5 quyền năng tối cao (đối ứng Tứ Ảnh + Thiên Lý) và 5 loại vũ khí cổ xưa tại *Stygian Onslaught*:\n  1. **Hroptatyr — \"Nhà Hiền Triết\" (*The Wise*):** Mang quyền năng **Lý Trí**, nắm giữ trọng kiếm *Ardent Storm* (tên cũ *Starkuthr*).\n  2. **Vedrfolnir — \"Nhà Tiên Tri\" (*The Visionary*):** Anh trai ruột của **[[dainsleif]]**, từng bị Vua Irmin chọc mù mắt và giam cầm vì tiên tri nghịch ý; hướng dẫn Chlothar chế tạo **[[loom-of-fate|Máy Dệt Vận Mệnh]]**. Mang quyền năng **Thời Gian**, pháp khí *Hallowed Fetters* (*Gleipnir*).\n  3. **[[rhinedottir|Rhinedottir]] — \"Vàng\" (*\"Gold\"*):** Nữ giả kim thuật sư tạo nên Durin, Elynas và **[[albedo]]**, đồng thời là thành viên \"R\" của Hội Ma Nữ. Mang quyền năng **Sự Sống**, đơn kiếm *Serpent Devourer* (*Logseims*) — và đã nuốt trái tim **Naberius** để hợp nhất cùng vị Chấp Chính này!\n  4. **Rerir — \"Thợ Săn Mặt Trăng\" (*Rächer of Solnari*):** Mang quyền năng **Cái Chết**, trường thương *Shattered Moon* (*Barnstokkr*); từng bị mắc kẹt trong không gian *Phản Chiếu Mặt Trăng* không thể quay về.\n  5. **Surtalogi — \"Kẻ Tà Ác\" (*The Foul*):** Sư phụ của **[[skirk]]**, chủ nhân của Thú Nuốt Chửng Tinh Tú (*All-Devouring Narwhal*), kẻ xé rách bầu trời đưa Skirk vào Teyvat và sai cô đi tìm **[[anacharsis|Anacharsis]]**. Mang quyền năng **Hư Không**, cung *Starpiercer* (*Gusisnautar*)."
          ],
          en: [
            "Rather than aiding **[[dainsleif]]** in stopping King Irmin, Khaenri'ah's five greatest prodigies each siphoned **one-sixth** of the world-shattering Abyssal power channeled through the Traveler's Sibling—provoking **Ronova** into inflicing the **Curse of Immortality** upon pure-blooded Khaenri'ahns before abandoning their fallen realm.",
            "Each Sinner parallels one of Celestia's five metaphysical domains via their ancient weapons from *Stygian Onslaught*:\n  1. **Hroptatyr (\"The Wise\"):** **Reason** — Claymore *Ardent Storm* (*Starkuthr*).\n  2. **Vedrfolnir (\"The Visionary\"):** **Time** — Catalyst *Hallowed Fetters* (*Gleipnir*); [[dainsleif]]'s blinded brother who guided the **[[loom-of-fate|Loom of Fate]]**.\n  3. **[[rhinedottir|Rhinedottir]] (\"Gold\"):** **Life** — Sword *Serpent Devourer* (*Logseims*); merged with **Naberius** after consuming her heart.\n  4. **Rerir (\"Rächer of Solnari\"):** **Death** — Polearm *Shattered Moon* (*Barnstokkr*), trapped within the Moon's Reflection.\n  5. **Surtalogi (\"The Foul\"):** **Void** — Bow *Starpiercer* (*Gusisnautar*); master of **[[skirk]]** and the All-Devouring Narwhal."
          ]
        }
      }
    ],
    theories: [],
    sources: [
      { label: "Fandom: Five Sinners of Khaenri'ah", url: "https://genshin-impact.fandom.com/wiki/Five_Sinners_of_Khaenri%27ah" }
    ],
    related: ["khaenriah", "dainsleif", "rhinedottir", "skirk", "capitano", "heavenly-principles", "loom-of-fate", "anacharsis", "abyss-void-realm"]
  },

  {
    id: "abyss-void-realm",
    type: "item",
    name: { vi: "Vực Sâu (Cõi Hư Không), Tam Giới & Vùng Bóng Tối", en: "The Abyss (Void Realm), Three Realms & Shadow Realm" },
    subtitle: { vi: "Thực thể thù hận của những số mệnh bất thành đang nuốt chửng Biển Sao và lớp màn chắn 6.000 năm của Anacharsis", en: "Destructive void born of unmanifested fates across the cosmos, and Anacharsis's 6,000-year Shadow Realm barrier" },
    region: { vi: "Biển Sao / Vực Sâu", en: "Sea of Stars / Void Realm" },
    summary: {
      vi: "Vũ trụ quan Tam Giới (Cõi Ánh Sáng – Nhân Giới – Cõi Hư Không/Vực Sâu) của Genshin Impact: bản chất thích nghi và hủy diệt của Vực Sâu theo chiêm tinh sư Barbeloth, thảm họa Tri Thức Cấm Kỵ từ Nibelung, và vai trò lá chắn của Vùng Bóng Tối.",
      en: "Teyvat's Three-Realm cosmology (Light Realm, Human Realm, Void Realm / Abyss): Barbeloth's revelation of the Abyss as the hatred of unfulfilled possibilities, its introduction via Nibelung, and the Shadow Realm's 6,000-year defense."
    },
    quote: {
      text: {
        vi: "Bản chất thực sự của Vực Sâu nằm ở lòng thù hận chất chứa trong mọi khả năng của số mệnh chưa từng được thành hình.",
        en: "The true essence of the Abyss lies in the hatred carried by all the alternate possibilities of fate that never came to pass."
      },
      source: {
        vi: "Chiêm tinh gia Barbeloth — Hội Ma Nữ (Hexenzirkel)",
        en: "Barbeloth — Member of the Hexenzirkel"
      }
    },
    sections: [
      {
        title: { vi: "Tam Giới (Light Realm – Human Realm – Void Realm) & Bản chất của Vực Sâu", en: "The Three Realms & Barbeloth's Essence of the Abyss" },
        body: {
          vi: [
            "Vũ trụ tại Teyvat được chia làm ba cõi đối ứng:\n  • **Cõi Ánh Sáng (Light Realm):** Cõi nguyên thủy của Long Tộc, Rồng Thằn Lằn và năng lượng nguyên tố thuần túy / Phlogiston — nơi mang *\"ánh sáng hy vọng và khả năng vô biên\"*.\n  • **Nhân Giới (Human Realm):** Cõi được **[[heavenly-principles|Thiên Lý]]** tái thiết cho con người, neo chặt qua **[[irminsul|Cây Thế Giới Irminsul & Địa Mạch]]** và luật lệ cố định.\n  • **Cõi Hư Không (Void Realm / Vực Sâu):** Nguồn năng lượng hủy diệt từ Biển Sao từng xóa sổ vô số hành tinh (kể cả quê hương Song Sinh Nhà Lữ Hành), được đưa trực tiếp vào Teyvat bởi **[[nibelung-sovereigns|Nibelung]]** trong Cuộc Chiến Tang Lễ Lửa.",
            "Theo đại chiêm tinh gia **Barbeloth**, Vực Sâu chính là **lòng thù hận mang theo từ tất cả mọi dòng thời gian/khả năng số phận chưa từng trở thành hiện thực**. Khi Thiên Lý thu hẹp *\"vô vàn khả năng\"* của Cõi Ánh Sáng để gò ép thành Nhân Giới cố định, chính sự bóp nghẹt đó vô tình khiến **Vực Sâu tự nhiên neo chặt vào hồi kết thời gian của Teyvat**."
          ],
          en: [
            "Cosmologically, existence spans the **Light Realm** (raw elemental/phlogiston dominion of dragons), the **Human Realm** (Celestia's ordered world anchored by **Irminsul**), and the **Void Realm (The Abyss)**—an adaptive cosmic annihilation force introduced to Teyvat by **[[nibelung-sovereigns|Nibelung]]**.",
            "As astrologist **Barbeloth** explained, the Abyss's true essence is the hatred carried by every unmanifested possibility of fate—meaning Phanes' rigid narrowing of Light Realm possibilities to enforce the Human Realm naturally anchored the Abyss to Teyvat's end of time."
          ]
        }
      },
      {
        title: { vi: "Vùng Bóng Tối (Shadow Realm) & Máu Rồng Độc Durin", en: "The Shadow Realm Barrier & Purifying Celestial Corrosion" },
        body: {
          vi: [
            "Trong suốt **6.000 năm** lịch sử hậu Chiến tranh Tang Lễ Lửa, **[[anacharsis|Vùng Bóng Tối (Shadow Realm)]]** do Anacharsis dùng công nghệ ngoại giới tạo nên hoạt động như một lớp phim cách ly đẩy lùi Vực Sâu (chỉ bị rò rỉ chậm chạp sau khi bị **Belyi Tsar** và **Saarelainen** mở cổng tại Pohjola).",
            "Ở bình diện thực địa, Vực Sâu là thế lực duy nhất có thể nhuộm đen trụ đá của Morax hay đầu độc Phong Thần Venti; ngược lại, máu nhiễm Vực Sâu của rồng Durin (*Mã Não Đỏ Thẫm*) lại sở hữu đặc tính nghịch lý đủ sức hồi sinh **Cây Chịu Lạnh (Frostbearing Tree)** đã chết hàng nghìn năm dưới sức ép của Đinh Băng Thiên Không tại **[[sal-vindagnyr]]**."
          ],
          en: [
            "For **6,000 years**, **[[anacharsis|Anacharsis]]**'s otherworldly **Shadow Realm** functioned as a protective film repelling the Abyss until the Belyi Tsar and **Saarelainen** opened a gate at Pohjola.",
            "While Abyssal corruption can dye Morax's stone pillars black and poison Venti, Durin's Abyss-laced blood (*Crimson Agate*) paradoxically revived the Frostbearing Tree slain for millennia beneath **[[sal-vindagnyr]]**'s Skyfrost Nail."
          ]
        }
      }
    ],
    theories: [],
    sources: [
      { label: "Fandom: Abyss", url: "https://genshin-impact.fandom.com/wiki/Abyss" },
      { label: "Fandom: Three Realms", url: "https://genshin-impact.fandom.com/wiki/Three_Realms" }
    ],
    related: ["heavenly-principles", "nibelung-sovereigns", "anacharsis", "descenders-false-sky", "five-sinners", "project-lunar-veil", "sal-vindagnyr", "enkanomiya", "irminsul"]
  }
];
