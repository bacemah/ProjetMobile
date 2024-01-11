const DATA = [
  {
    Type: "CONCERT", 
    // tur 
    Id: 52591,
    FirstName: "Acoustic Guitar Evening: Melodies of Love",
    // Adi
    EventEndDate: "2023-12-31T22:00:00",
    // EtkinlikBitisTarihi
    littleposter:
      // KucukAfis
      "https://im.haberturk.com/l/2021/12/03/ver1638536162/3272038/jpg/640x360",
    EventCenter: "Ses Sahne",
    // EtkinlikMerkezi
    EventCenterLocation: {
      // EtkinlikMerkeziKonum
      Latitude: 41.0246,
      // Enlem
      longitudel: 29.0054,
      // Boylam
    },
    ShortDescription: "Acoustic guitar performances that will give you emotional moments.",
    // KisaAciklama
    TicketSalesLink: "https://orneklink.com/bilet19",
    // BiletSatisLinki
    Isitfree: false,
    // UcretsizMi
    Picture:
      // Resim
      "https://im.haberturk.com/l/2021/12/03/ver1638536162/3272038/jpg/640x360",
    EventUrl: "akustik-gitar-aksami-sevgi-melodileri",
    // EtkinlikUrl
    EventStartDate: "2023-12-31T20:30:00",
    // EtkinlikBaslamaTarihi
    Artist: "Eren Demir",
    // Sanatci
  },
  {
    Type: "THEATRE",
    Id: 52601,
    FirstName: "Klasik Komedi: Bir Delinin Hatıra Defteri",
    EventEndDate: "2023-10-20T21:30:00",
    littleposter:
      "https://tiyatrogunlugu.com/wp-content/uploads/genco-erkal-bir-delinin-hatira-defteri.jpg",
    EventCenter: "Gülmece Tiyatro Sahnesi",
    EventCenterLocation: {
      Latitude: 41.0299,
      longitudel: 29.0132,
    },
    ShortDescription: "Klasikleşmiş komedi eseri, gülmekten kırılacaksınız!",
    TicketSalesLink: "https://orneklink.com/bilet20",
    Isitfree: false,
    Picture:
      "https://tiyatrogunlugu.com/wp-content/uploads/genco-erkal-bir-delinin-hatira-defteri.jpg",
    EventUrl: "klasik-komedi-bir-delinin-hatira-defteri",
    EventStartDate: "2023-10-20T19:00:00",
    Artist: null,
  },
  {
    Type: "CONCERT",
    Id: 52612,
    FirstName: "Ritim Akşamları: Latin Dans Partisi",
    EventEndDate: "2023-10-25T00:00:00",
    littleposter:
      "https://dansakademi.com.tr/uploads/2022/03/latin-dans-parcalari.webp",
    EventCenter: "Salsa Dans Stüdyosu",
    EventCenterLocation: {
      Latitude: 41.0165,
      longitudel: 29.0021,
    },
    ShortDescription: "Latin ritimleriyle dolu, dans dolu bir gece sizi bekliyor!",
    TicketSalesLink: "https://orneklink.com/bilet21",
    Isitfree: false,
    Picture:
      "https://dansakademi.com.tr/uploads/2022/03/latin-dans-parcalari.webp",
    EventUrl: "ritim-aksamlari-latin-dans-partisi",
    EventStartDate: "2023-10-24T20:00:00",
    Artist: "Ritmo Latino Dans Grubu",
  },
  {
    Type: "SHOW",
    Id: 5262,
    FirstName: "Doğanın İzinde: Doğa Fotoğrafçılığı Sergisi",
    EventEndDate: "2023-10-28T17:00:00",
    littleposter:
      "https://www.ekoiq.com/wp-content/uploads/2022/04/ekolojik-surdurulebilirlik-her-konunun-zemini-haline-gelmeli-551x431.jpg",
    EventCenter: "Doğa Sanat Galerisi",
    EventCenterLocation: {
      Latitude: 41.0217,
      longitudel: 28.9886,
    },
    ShortDescription:
      "Doğanın güzelliklerini yansıtan etkileyici doğa fotoğrafları sergisi.",
    TicketSalesLink: null,
    Isitfree: true,
    Picture:
      "https://www.ekoiq.com/wp-content/uploads/2022/04/ekolojik-surdurulebilirlik-her-konunun-zemini-haline-gelmeli-551x431.jpg",
    EventUrl: "doganin-izinde-doga-fotografciligi-sergisi",
    EventStartDate: "2023-10-10T10:00:00",
    Artist: null,
  },
  {
    Type: "SHOW",
    Id: 5250,
    FirstName: "Sinema Benim Aşkım - Türkan Soray Kostüm ve Afiş Sergisi",
    EventEndDate: "2023-09-17T17:30:00",
    littleposter:
      "https://kultursanat.izmir.bel.tr/YuklenenDosyalar/Etkinlikler/Thumb/20230814_143647_ic.jpg",
    EventCenter: "Ahmed Adnan Saygun Sanat Merkezi",
    EventCenterLocation: {
      Latitude: 38.4149,
      longitudel: 27.1287,
    },
    ShortDescription:
      "Yeşilçam`ın Sultanı Türkan Şoray`ın 1960`lardan günümüze kadar kullandığı kostümleri ve film afişleri sanatseverlerle buluşturuyor.",
    TicketSalesLink: null,
    Isitfree: true,
    Picture:
      "https://kultursanat.izmir.bel.tr/YuklenenDosyalar/Etkinlikler/Kucuk/20230814_143640_etkinlik.jpg",
    EventUrl: "sinema-benim-askim-turkan-soray-kostum-ve-afis-sergisi",
    EventStartDate: "2023-08-16T09:30:00",
    Artist: null,
  },
  {
    Type: "CONCERT",
    Id: 5251,
    FirstName: "Caz Gecesi: En İyi Caz Performansları",
    EventEndDate: "2023-09-20T23:00:00",
    littleposter:
      "https://www.bornova.bel.tr/wp-content/uploads/2023/06/My-project-1-22-1024x572.jpg",
    EventCenter: "Jazz Up Sahne",
    EventCenterLocation: {
      Latitude: 41.0085,
      longitudel: 28.9769,
    },
    ShortDescription:
      "Cazın büyüleyici dünyasına adım atacağınız unutulmaz bir gece.",
    TicketSalesLink: "https://orneklink.com/bilet2",
    Isitfree: false,
    Picture:
      "https://www.bornova.bel.tr/wp-content/uploads/2023/06/My-project-1-22-1024x572.jpg",
    EventUrl: "caz-gecesi-en-iyi-caz-performanslari",
    EventStartDate: "2023-09-20T20:30:00",
    Artist: "Müge Ersoy",
  },
  {
    Type: "THEATRE",
    Id: 5252,
    FirstName: "Comedy Feast: Comedy Games Guaranteed to Laugh",
    EventEndDate: "2023-12-31T22:00:00",
    littleposter:
      "https://i4.hurimg.com/i/hurriyet/75/750x422/5d78c77145d2a023a0d35648.jpg",
    EventCenter: "Gülmece Theater Stage",
    EventCenterLocation: {
      Latitude: 41.0283,
      longitudel: 29.0015,
    },
    ShortDescription:
      "A night full of comedy, where you will laugh until your stomach hurts, awaits you!",
    TicketSalesLink: "https://orneklink.com/bilet3",
    Isitfree: false,
    Picture:
      "https://i4.hurimg.com/i/hurriyet/75/750x422/5d78c77145d2a023a0d35648.jpg",
    EventUrl: "komedi-soleni-gulme-garantili-komedi-oyunlari",
    EventStartDate: "2023-12-31T19:30:00",
    Artist: null,
  },
  {
    Type: "SHOW",
    Id: 5253,
    FirstName: "Winds of the Renaissance: The Magical World of Painters",
    EventEndDate: "2024-01-11T18:00:00",
    littleposter: "https://flaps.club/wp-content/uploads/2019/04/unnamed-2.png",
    EventCenter: "Sanat Çağı Galerisi",
    EventCenterLocation: {
      Latitude: 41.0221,
      longitudel: 29.0058,
    },
    ShortDescription:
      "An impressive exhibition where the unique works of Renaissance period painters are exhibited.",
    TicketSalesLink: null,
    Isitfree: true,
    Picture: "https://flaps.club/wp-content/uploads/2019/04/unnamed-2.png",
    EventUrl: "ronesans-ruzgarlari-ressamlarin-buyulu-dunyasi",
    EventStartDate: "2024-01-11T10:00:00",
    Artist: null,
  },
  {
    Type: "CONCERT",
    Id: 5254,
    FirstName: "Rock Night: Selections from Legendary Rock Bands",
    EventEndDate: "2024-01-11T23:30:00",
    littleposter:
      "https://beyazgezegen.com/wp-content/uploads/2019/10/Ramones-1st_Album_Placeholder_Image.jpg",
    EventCenter: "Rock Arena",
    EventCenterLocation: {
      Latitude: 41.0117,
      longitudel: 28.9755,
    },
    ShortDescription:
      "An unforgettable night full of the energy of rock music awaits you!",
    TicketSalesLink: "https://orneklink.com/bilet5",
    Isitfree: false,
    Picture:
      "https://beyazgezegen.com/wp-content/uploads/2019/10/Ramones-1st_Album_Placeholder_Image.jpg",
    EventUrl: "rock-gecesi-efsane-rock-gruplarindan-seckiler",
    EventStartDate: "2024-01-11T20:00:00",
    Artist: "Black Roses",
  },
  {
    Type: "THEATRE",
    Id: 5255,
    FirstName: "Dramatic Journeys: A Night of Emotional Theater",
    EventEndDate: "2024-01-11T21:30:00",
    littleposter:
      "https://cdn.evrimagaci.org/sZQwQgecN8z6NV4d4Nc3ckjvfCA=/evrimagaci.org%2Fpublic%2Fcontent_media%2F75009ecf55317438f7ed7b7e71dcd54a.jpg",
    EventCenter: "Duygu Sahnesi",
    EventCenterLocation: {
      Latitude: 41.0246,
      longitudel: 29.004,
    },
    ShortDescription:
      "An impressive theater performance with deep emotions.",
    TicketSalesLink: "https://orneklink.com/bilet6",
    Isitfree: false,
    Picture:
      "https://cdn.evrimagaci.org/sZQwQgecN8z6NV4d4Nc3ckjvfCA=/evrimagaci.org%2Fpublic%2Fcontent_media%2F75009ecf55317438f7ed7b7e71dcd54a.jpg",
    EventUrl: "dramatik-yolculuklar-duygusal-tiyatro-gecesi",
    EventStartDate: "2024-01-11T19:00:00",
    Artist: null,
  },
  {
    Type: "SHOW",
    Id: 5256,
    FirstName: "In Search of Modern Art: Abstract Paintings Exhibition",
    EventEndDate: "2024-01-15T19:30:00",
    littleposter:
      "https://www.klashaber.com.tr/images/haberler/2020/07/istanbul_modernin_koleksiyon_sergisi_yenilendi_h42085_870be.jpg",
    EventCenter: "Soyut Sanat Galerisi",
    EventCenterLocation: {
      Latitude: 41.0189,
      longitudel: 28.9863,
    },
    ShortDescription:
      "An exhibition experience where you can find the most striking examples of modern art.",
    TicketSalesLink: null,
    Isitfree: true,
    Picture:
      "https://www.klashaber.com.tr/images/haberler/2020/07/istanbul_modernin_koleksiyon_sergisi_yenilendi_h42085_870be.jpg",
    EventUrl: "modern-sanatin-izinde-soyut-tablolar-sergisi",
    EventStartDate: "2024-01-15T13:00:00",
    Artist: null,
  },
  {
    Type: "CONCERT",
    Id: 5257,
    FirstName: "Classical Acoustics: Favorite Classical Works",
    EventEndDate: "2024-01-15T22:00:00",
    littleposter:
      "https://www.kku.edu.tr/Content/Anasayfa/Haber/NewFolder/gitar3.jpg",
    EventCenter: "Harmony CONCERT Salonu",
    EventCenterLocation: {
      Latitude: 41.0102,
      longitudel: 28.9721,
    },
    ShortDescription:
      "An unforgettable journey to the magical world of classical music accompanied by classical guitar.",
    TicketSalesLink: "https://orneklink.com/bilet8",
    Isitfree: false,
    Picture: "https://www.kku.edu.tr/Content/Anasayfa/Haber/NewFolder/gitar3.jpg",
    EventUrl: "klasik-akustik-en-sevilen-klasik-eserler",
    EventStartDate: "2024-01-15T19:00:00",
    Artist: "Emre Aydın",
  },
  {
    Type: "THEATRE",
    Id: 5258,
    FirstName: "Mysterious Scenes: Detective Theater Show",
    EventEndDate: "2024-01-15T20:30:00",
    littleposter:
      "https://www.istanbulses.com/d/other/2022/03/07/aI8fltkqx1fd6av2xbn5zrwv.jpg",
    EventCenter: "Gizem Tiyatro Sahnesi",
    EventCenterLocation: {
      Latitude: 41.0297,
      longitudel: 29.0037,
    },
    ShortDescription:
      "An unforgettable evening with detective theater works full of mystery and excitement.",
    TicketSalesLink: "https://orneklink.com/bilet9",
    Isitfree: false,
    Picture:
      "https://www.istanbulses.com/d/other/2022/03/07/aI8fltkqx1fd6av2xbn5zrwv.jpg",
    EventUrl: "gizemli-sahneler-polisiye-tiyatro-gosterisi",
    EventStartDate: "2024-01-15T18:00:00",
    Artist: null,
  },
  {
    Type: "SHOW",
    Id: 52592,
    FirstName: "In Search of Photography: Chasing Memories",
    EventEndDate: "2024-01-15T16:30:00",
    littleposter:
      "https://www.millireasuranssanatgalerisi.com/media/pages/exhibitions/past/sinasi-barutcu/73f7bef5c0-1634290574/a4069r5_studiomajo_r.jpeg",
    EventCenter: "Anıt Galeri",
    EventCenterLocation: {
      Latitude: 41.0158,
      longitudel: 28.9932,
    },
    ShortDescription:
      "A nostalgic journey to the past with photographs: In the footsteps of memories exhibition.",
    TicketSalesLink: null,
    Isitfree: true,
    Picture:
      "https://www.millireasuranssanatgalerisi.com/media/pages/exhibitions/past/sinasi-barutcu/73f7bef5c0-1634290574/a4069r5_studiomajo_r.jpeg",
    EventUrl: "fotografin-izinde-anilarin-pesinde",
    EventStartDate: "2024-01-15T10:30:00",
    Artist: null,
  },
  {
    Type: "CONCERT",
    Id: 52605,
    FirstName: "Jazz Night: Pleasant Notes of the Evening",
    EventEndDate: "2024-01-15T23:00:00",
    littleposter: "https://cazkolik.com/storage/gorseller/20130719_053932.jpg",
    EventCenter: "Swing Jazz Club",
    EventCenterLocation: {
      Latitude: 40.9865,
      longitudel: 29.0302,
    },
    ShortDescription:
      "Enjoy an evening filled with the unique combination of soul and jazz.",
    TicketSalesLink: "https://orneklink.com/bilet11",
    Isitfree: false,
    Picture: "https://cazkolik.com/storage/gorseller/20130719_053932.jpg",
    EventUrl: "jazz-gecesi-aksamin-keyifli-notalari",
    EventStartDate: "2024-01-15T20:30:00",
    Artist: "Melis Sarp",
  },
  {
    Type: "THEATRE",
    Id: 52651,
    FirstName: "Winds of Comedy: An Invitation to the Laughing Crisis",
    EventEndDate: "2023-12-31T22:00:00",
    littleposter:
      "https://cdn1.kralmuzik.com.tr/media/img/920x570/22-12/05/eser-berfu-yenenler.JPG",
    EventCenter: "Komedi Sahnesi",
    EventCenterLocation: {
      Latitude: 41.0218,
      longitudel: 28.9769,
    },
    ShortDescription:
      "A comedy theater experience that will make your stomach hurt from laughing.",
    TicketSalesLink: "https://orneklink.com/bilet12",
    Isitfree: false,
    Picture:
      "https://cdn1.kralmuzik.com.tr/media/img/920x570/22-12/05/eser-berfu-yenenler.JPG",
    EventUrl: "komedi-ruzgarlari-gulme-krizine-davet",
    EventStartDate: "2023-12-31T19:30:00",
    Artist: "Komedi Guruları Ekibi",
  },
  {
    Type: "CONCERT",
    Id: 5263,
    FirstName: "Pop Acoustic: Best Foreign Pop Songs",
    EventEndDate: "2024-01-11T21:00:00",
    littleposter:
      "https://imgs.alem.com.tr/Documents/Alem_Dergi/images/2022/12/02/aralik-2022-CONCERTleri-667.jpg",
    EventCenter: "SoundUp CONCERT Salonu",
    EventCenterLocation: {
      Latitude: 41.0056,
      longitudel: 28.985,
    },
    ShortDescription:
      "A night where you will listen to the hit songs of pop music with acoustic flat latitudes.",
    TicketSalesLink: "https://orneklink.com/bilet14",
    Isitfree: false,
    Picture:
      "https://imgs.alem.com.tr/Documents/Alem_Dergi/images/2022/12/02/aralik-2022-CONCERTleri-667.jpg",
    EventUrl: "pop-akustik-en-iyi-yabanci-pop-sarkilar",
    EventStartDate: "2024-01-11T18:30:00",
    Artist: "Dilara Oruç",
  },
  {
    Type: "THEATRE",
    Id: 5264,
    FirstName: "Classics Stage: Night of Shakespeare Plays",
    EventEndDate: "2023-12-31T23:30:00",
    littleposter:
      "https://www.beyazhaberajansi.com/images/haberler/2023/08/harbiye-acik-hava-da-klasikler-gecidi-4406.jpg",
    EventCenter: "Klasik Tiyatro Sahnesi",
    EventCenterLocation: {
      Latitude: 40.9998,
      longitudel: 29.0204,
    },
    ShortDescription:
      "A magical night where Shakespeare's most famous plays will be staged.",
    TicketSalesLink: "https://orneklink.com/bilet15",
    Isitfree: false,
    Picture:
      "https://www.beyazhaberajansi.com/images/haberler/2023/08/harbiye-acik-hava-da-klasikler-gecidi-4406.jpg",
    EventUrl: "klasikler-sahnesi-shakespeare-oyunlari-gecesi",
    EventStartDate: "2023-12-31T20:00:00",
    Artist: "Klasik Tiyatro Topluluğu",
  },
  {
    Type: "SHOW",
    Id: 52265,
    FirstName: "Dance in Color: Modern Art Exhibition",
    EventEndDate: "2024-01-11T19:30:00",
    littleposter:
      "https://www.istanbulmodern.org/pic_lib/bigSize/resimgalerisi/120/istanbulmodernselmagurbuz3_120_5557789.jpg",
    EventCenter: "Modern Sanat Galerisi",
    EventCenterLocation: {
      Latitude: 41.0082,
      longitudel: 28.9765,
    },
    ShortDescription:
      "Traces of contemporary art featuring the dance of colors and forms.",
    TicketSalesLink: null,
    Isitfree: true,
    Picture:
      "https://www.istanbulmodern.org/pic_lib/bigSize/resimgalerisi/120/istanbulmodernselmagurbuz3_120_5557789.jpg",
    EventUrl: "renk-icinde-dans-modern-sanat-sergisi",
    EventStartDate: "2024-01-11T10:00:00",
    Artist: "Modern Sanatçılar Derneği",
  },
  {
    Type: "CONCERT",
    Id: 5266,
    FirstName: "The Magical World of Acoustic Guitar",
    EventEndDate: "2024-01-15T22:30:00",
    littleposter:
      "https://muzik.iksv.org/i/content/10058_1_PH_aliguler__(1_of_1)-22.jpg",
    EventCenter: "Harmony CONCERT Salonu",
    EventCenterLocation: {
      Latitude: 40.9937,
      longitudel: 29.0237,
    },
    ShortDescription:
      "A warm CONCERT night filled with the melodies of the acoustic guitar.",
    TicketSalesLink: "https://orneklink.com/bilet17",
    Isitfree: false,
    Picture:
      "https://muzik.iksv.org/i/content/10058_1_PH_aliguler__(1_of_1)-22.jpg",
    EventUrl: "akustik-gitarin-buyulu-dunyasi",
    EventStartDate: "2024-01-15T20:00:00",
    Artist: "Ege Yılmaz",
  },
  {
    Type: "THEATRE",
    Id: 5267,
    FirstName: "Gizemli Yolculuk: Interaktif Tiyatro Deneyimi",
    EventEndDate: "2023-12-15T21:45:00",
    littleposter:
      "https://denemenlazim.net/wp-content/uploads/2016/02/IMG_0390-1280x720.jpg",
    EventCenter: "Interaktif Tiyatro Sahnesi",
    EventCenterLocation: {
      Latitude: 41.0125,
      longitudel: 28.9843,
    },
    ShortDescription:
      "İzleyicilerin hikayenin bir parçası olduğu sürükleyici bir tiyatro yolculuğu.",
    TicketSalesLink: "https://orneklink.com/bilet18",
    Isitfree: false,
    Picture:
      "https://denemenlazim.net/wp-content/uploads/2016/02/IMG_0390-1280x720.jpg",
    EventUrl: "gizemli-yolculuk-interaktif-tiyatro-deneyimi",
    EventStartDate: "2023-12-15T19:00:00",
    Artist: "Interaktif Tiyatro Ekibi",
  },
  {
    Type: "SHOW",
    Id: 5268,
    FirstName: "Işığın İzinde: Fotoğrafçılık Sergisi",
    EventEndDate: "2023-12-20T20:30:00",
    littleposter:
      "https://www.artfulliving.com.tr/image_data/content/7e2c2fb2c14982ee199b213709ff7022.jpg",
    EventCenter: "FotoArt Galeri",
    EventCenterLocation: {
      Latitude: 41.0067,
      longitudel: 28.9848,
    },
    ShortDescription:
      "Işık ve gölge oyunlarının yakalandığı etkileyici bir fotoğraf sergisi.",
    TicketSalesLink: null,
    Isitfree: true,
    Picture:
      "https://www.artfulliving.com.tr/image_data/content/7e2c2fb2c14982ee199b213709ff7022.jpg",
    EventUrl: "isigin-izinde-fotografcilik-sergisi",
    EventStartDate: "2023-12-18T14:00:00",
    Artist: "Fotoğraf Sanatçıları Grubu",
  },
  {
    Type: "CONCERT",
    Id: 5269,
    FirstName: "Rock Efsaneleri Canlı: Unutulmaz Hits",
    EventEndDate: "2023-12-25T23:59:00",
    littleposter:
      "https://www.radyoodtu.com.tr/images/zbam/progresifmuzik_211219.jpg",
    EventCenter: "RockArena Stadyumu",
    EventCenterLocation: {
      Latitude: 40.9886,
      longitudel: 29.0231,
    },
    ShortDescription:
      "Rock müziğin efsanevi şarkılarına doyacağınız muhteşem bir CONCERT serisi.",
    TicketSalesLink: "https://orneklink.com/bilet20",
    Isitfree: false,
    Picture: "https://www.radyoodtu.com.tr/images/zbam/progresifmuzik_211219.jpg",
    EventUrl: "rock-efsaneleri-canli-unutulmaz-hits",
    EventStartDate: "2023-12-25T20:00:00",
    Artist: "RockStar Tribute Band",
  },
  {
    Type: "THEATRE",
    Id: 5270,
    FirstName: "Romeo ve Juliet: Modern Yorum",
    EventEndDate: "2024-01-05T22:00:00",
    littleposter:
      "https://www.birdunyafilm.co/wp-content/uploads/2018/09/romeo-juliet-1996-1200-1200-675-675-crop-000000.jpg",
    EventCenter: "Şehir Tiyatrosu",
    EventCenterLocation: {
      Latitude: 41.0134,
      longitudel: 28.9799,
    },
    ShortDescription:
      "Klasikleşmiş aşk hikayesi Romeo ve Juliet'in modern bir yorumu.",
    TicketSalesLink: "https://orneklink.com/bilet21",
    Isitfree: false,
    Picture:
      "https://www.birdunyafilm.co/wp-content/uploads/2018/09/romeo-juliet-1996-1200-1200-675-675-crop-000000.jpg",
    EventUrl: "romeo-ve-juliet-modern-yorum",
    EventStartDate: "2024-01-05T19:30:00",
    Artist: "Genç Sahne Oyuncuları",
  },
  {
    Type: "CONCERT",
    Id: 5271,
    FirstName: "Cazın Büyülü Dünyası: Geceyarısı Sesi",
    EventEndDate: "2024-01-10T23:00:00",
    littleposter:
      "https://www.gazetekadikoy.com.tr/Uploads/gazetekadikoy.com.tr/202206301910391-img.jpg",
    EventCenter: "JazzClub",
    EventCenterLocation: {
      Latitude: 41.0087,
      longitudel: 29.0126,
    },
    ShortDescription:
      "Cazın büyülü ritimleriyle geçecek unutulmaz bir CONCERT deneyimi.",
    TicketSalesLink: "https://orneklink.com/bilet22",
    Isitfree: false,
    Picture:
      "https://www.gazetekadikoy.com.tr/Uploads/gazetekadikoy.com.tr/202206301910391-img.jpg",
    EventUrl: "cazin-buyulu-dunyasi-geceyarisi-sesi",
    EventStartDate: "2024-01-10T21:00:00",
    Artist: "Jazz Delisi Orkestrası",
  },
  {
    Type: "SHOW",
    Id: 5272,
    FirstName: "Geleceğin İzleri: Dijital Sanat Sergisi",
    EventEndDate: "2024-01-15T18:30:00",
    littleposter:
      "https://static.wixstatic.com/media/9c95f9_1bd2debc26f04768a02d64e13d1d39d4~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9c95f9_1bd2debc26f04768a02d64e13d1d39d4~mv2.jpg",
    EventCenter: "Dijital Sanat Galerisi",
    EventCenterLocation: {
      Latitude: 41.0052,
      longitudel: 28.9814,
    },
    ShortDescription:
      "Teknolojinin sanatla buluştuğu dijital eserlerin sergilendiği etkinlik.",
    TicketSalesLink: null,
    Isitfree: true,
    Picture:
      "https://static.wixstatic.com/media/9c95f9_1bd2debc26f04768a02d64e13d1d39d4~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9c95f9_1bd2debc26f04768a02d64e13d1d39d4~mv2.jpg",
    EventUrl: "gelecegin-izleri-dijital-sanat-sergisi",
    EventStartDate: "2024-01-12T10:30:00",
    Artist: null,
  },
  {
    Type: "CONCERT",
    Id: 5273,
    FirstName: "Sinfonietta Akşamları: Beethoven'in İzinde",
    EventEndDate: "2024-01-20T21:30:00",
    littleposter:
      "https://www.beyazhaberajansi.com/images/haberler/2023/07/idil-biret-muzik-festivali-7-temmuz-da-basliyor-8844.jpg",
    EventCenter: "Devlet Senfoni Orkestrası CONCERT Salonu",
    EventCenterLocation: {
      Latitude: 40.9879,
      longitudel: 29.0258,
    },
    ShortDescription:
      "Beethoven'ın büyülü eserleriyle dolu bir akşamın keyfini çıkarın.",
    TicketSalesLink: "https://orneklink.com/bilet24",
    Isitfree: false,
    Picture:
      "https://www.beyazhaberajansi.com/images/haberler/2023/07/idil-biret-muzik-festivali-7-temmuz-da-basliyor-8844.jpg",
    EventUrl: "sinfonietta-aksamlari-beethovenin-izinde",
    EventStartDate: "2024-01-20T19:00:00",
    Artist: "Devlet Senfoni Orkestrası",
  },
  {
    Type: "THEATRE",
    Id: 5274,
    FirstName: "Büyülü Orman: Çocuk Tiyatro Gösterisi",
    EventEndDate: "2024-01-25T17:00:00",
    littleposter:
      "https://www.gundem67.com/images/upload/sihirli_orman_cocuk_tiyatrosu_sahnelendi_h103326_9aaef.jpg",
    EventCenter: "Çocuk Tiyatro Sahnesi",
    EventCenterLocation: {
      Latitude: 41.0091,
      longitudel: 28.9753,
    },
    ShortDescription:
      "Çocukların hayal dünyasına yolculuk ettiren eğlenceli bir tiyatro gösterisi.",
    TicketSalesLink: "https://orneklink.com/bilet25",
    Isitfree: false,
    Picture:
      "https://www.gundem67.com/images/upload/sihirli_orman_cocuk_tiyatrosu_sahnelendi_h103326_9aaef.jpg",
    EventUrl: "buyulu-orman-cocuk-tiyatro-gosterisi",
    EventStartDate: "2024-01-25T15:30:00",
    Artist: "Çocuk Tiyatrosu Topluluğu",
  },
  {
    Type: "SHOW",
    Id: 5275,
    FirstName: "Renk Şöleni: Modern Sanatın İzinde",
    EventEndDate: "2024-02-01T20:00:00",
    littleposter:
      "https://i0.wp.com/huseyinozbekar.com/wp-content/uploads/2023/04/Wassily-Kandinsky-Composition-VIII-1923.jpg?fit=640%2C442&ssl=1",
    EventCenter: "Modern Sanat Galerisi",
    EventCenterLocation: {
      Latitude: 41.0037,
      longitudel: 28.9876,
    },
    ShortDescription:
      "Farklı disiplinlerden modern sanat eserlerinin bir araya geldiği renkli sergi.",
    TicketSalesLink: null,
    Isitfree: true,
    Picture:
      "https://i0.wp.com/huseyinozbekar.com/wp-content/uploads/2023/04/Wassily-Kandinsky-Composition-VIII-1923.jpg?fit=640%2C442&ssl=1",
    EventUrl: "renk-soleni-modern-sanatin-izinde",
    EventStartDate: "2024-01-29T11:00:00",
    Artist: null,
  },
  {
    Type: "CONCERT",
    Id: 5276,
    FirstName: "Akustik Geceler: Unplugged Performanslar",
    EventEndDate: "2024-02-05T23:30:00",
    littleposter:
      "https://cdn1.kralmuzik.com.tr/media/content/i/Events/1/4a8a65f097dc7947.jpg",
    EventCenter: "Müzik Cafe",
    EventCenterLocation: {
      Latitude: 41.0142,
      longitudel: 28.9749,
    },
    ShortDescription:
      "Ünlü şarkıcıların akustik, enstrümantal performanslarıyla dolu özel bir gece.",
    TicketSalesLink: "https://orneklink.com/bilet27",
    Isitfree: false,
    Picture:
      "https://cdn1.kralmuzik.com.tr/media/content/i/Events/1/4a8a65f097dc7947.jpg",
    EventUrl: "akustik-geceler-unplugged-performanslar",
    EventStartDate: "2024-02-05T20:00:00",
    Artist: "Çeşitli Sanatçılar",
  },
  {
    Type: "THEATRE",
    Id: 5277,
    FirstName: "Komedi Manzaraları: Gülmek Garanti",
    EventEndDate: "2024-02-10T21:30:00",
    littleposter: "https://firsat.me/img/big/13880_5a688d80425cb_545x340.jpg",
    EventCenter: "Güldürme Sahnesi",
    EventCenterLocation: {
      Latitude: 41.0128,
      longitudel: 28.9871,
    },
    ShortDescription:
      "Komedinin en iyilerinin sahne aldığı eğlenceli bir tiyatro şöleni.",
    TicketSalesLink: "https://orneklink.com/bilet28",
    Isitfree: false,
    Picture: "https://firsat.me/img/big/13880_5a688d80425cb_545x340.jpg",
    EventUrl: "komedi-manzaralari-gulmek-garanti",
    EventStartDate: "2024-02-10T19:00:00",
    Artist: "Komedi Guruları Topluluğu",
  },
  {
    Type: "SHOW",
    Id: 5278,
    FirstName: "Rüya Gibi Fotoğraflar: Anı Yakalama Sanatı",
    EventEndDate: "2024-02-15T19:30:00",
    littleposter:
      "https://cdn1.ntv.com.tr/gorsel/bP74-d_4nkGDzjUXdrd_Bg.jpg?width=1000&mode=crop&scale=both",
    EventCenter: "Fotoğraf Galerisi",
    EventCenterLocation: {
      Latitude: 40.9976,
      longitudel: 29.0351,
    },
    ShortDescription:
      "Ünlü fotoğrafçıların anı yakalama sanatının sergilendiği etkinlik.",
    TicketSalesLink: null,
    Isitfree: true,
    Picture:
      "https://cdn1.ntv.com.tr/gorsel/bP74-d_4nkGDzjUXdrd_Bg.jpg?width=1000&mode=crop&scale=both",
    EventUrl: "ruya-gibi-fotograflar-ani-yakalama-sanati",
    EventStartDate: "2024-02-12T15:00:00",
    Artist: null,
  },
  {
    Type: "CONCERT",
    Id: 5279,
    FirstName: "Dünya Ritmileri Gecesi",
    EventEndDate: "2024-02-20T22:30:00",
    littleposter:
      "https://cdn.seturday.com/content/uploads/makale_resimleri/layuc/slideruc/caz-ritimleriyle-buyulenmeye-30-nisan-dunya-caz-gunu-bc7828f5-aad3-434c-adfb-406baf61fcf0slider4-min.jpg",
    EventCenter: "Kültür Merkezi",
    EventCenterLocation: {
      Latitude: 41.0015,
      longitudel: 28.9827,
    },
    ShortDescription:
      "Farklı ülkelerden geleneksel ritimlerin harmanlandığı eşsiz bir CONCERT deneyimi.",
    TicketSalesLink: "https://orneklink.com/bilet30",
    Isitfree: false,
    Picture:
      "https://cdn.seturday.com/content/uploads/makale_resimleri/layuc/slideruc/caz-ritimleriyle-buyulenmeye-30-nisan-dunya-caz-gunu-bc7828f5-aad3-434c-adfb-406baf61fcf0slider4-min.jpg",
    EventUrl: "dunya-ritmileri-gecesi",
    EventStartDate: "2024-02-20T20:00:00",
    Artist: "Dünya Ritm Grubu",
  },
  {
    Type: "FESTIVAL",
    Id: 5351,
    FirstName: "Yaz Müziği Festivali",
    EventEndDate: "2023-08-29T23:59:00",
    littleposter:
      "https://www.arcadium.com.tr/Blog/wp-content/uploads/2018/05/78961-1132x670.jpg",
    EventCenter: "İstanbul Park",
    ShortDescription:
      "Yazın coşkusunu en iyi müziklerle yaşayacağınız muhteşem bir festival deneyimi!",
    TicketSalesLink: "https://example.com/yaz-muzigi-festivali-biletleri",
    Isitfree: false,
    Picture:
      "https://www.arcadium.com.tr/Blog/wp-content/uploads/2018/05/78961-1132x670.jpg",
    EventUrl: "yaz-muzigi-festivali",
    EventStartDate: "2023-08-27T14:00:00",
    Artist: "Sezen Aksu, Teoman, Duman, Athena",
  },
  {
    Type: "FESTIVAL",
    Id: 5372,
    FirstName: "Yaz Renkleri Müzik Festivali",
    EventEndDate: "2023-09-03T23:59:00",
    littleposter:
      "https://www.avruparuyasi.blog/images/blog/3269_otobusle-avrupa-turu-avrupa-ruyasi-fransa-paris-festivaller-La-F%C3%AAte-de-la-Musique.jpg",
    EventCenter: "Açık Hava Alanı",
    ShortDescription:
      "Yazın tadını çıkarabileceğiniz renkli ve enerjik bir müzik festivali.",
    TicketSalesLink: "https://example.com/yaz-renkleri-festival-biletleri",
    Isitfree: false,
    Picture:
      "https://www.avruparuyasi.blog/images/blog/3269_otobusle-avrupa-turu-avrupa-ruyasi-fransa-paris-festivaller-La-F%C3%AAte-de-la-Musique.jpg",
    EventUrl: "yaz-renkleri-muzik-festivali",
    EventStartDate: "2023-09-02T16:00:00",
    Artist: "Sanatçı C, Sanatçı D",
  },
  {
    Type: "TALKSHOW",
    Id: 5381,
    FirstName: "Bilim ve Gelecek Paneli",
    EventEndDate: "2023-09-10T21:00:00",
    littleposter: "https://i.dha.com.tr/i/dha/75/0x0/61f072ac45d2a01ef449bab3.jpg",
    EventCenter: "Bilim Kültür Merkezi",
    ShortDescription:
      "Bilim insanlarının katılacağı ilgi çekici bir gelecek paneli.",
    TicketSalesLink: "https://example.com/gelecek-paneli-biletleri",
    Isitfree: true,
    Picture: "https://i.dha.com.tr/i/dha/75/0x0/61f072ac45d2a01ef449bab3.jpg",
    EventUrl: "bilim-ve-gelecek-paneli",
    EventStartDate: "2023-09-10T18:30:00",
    Artist: null,
  },
  {
    Type: "SPORTIF",
    Id: 5382,
    FirstName: "Yoga ve Meditasyon Workshop",
    EventEndDate: "2023-09-08T19:30:00",
    littleposter:
      "https://yogakiooturkiye.com/wp-content/uploads/2023/07/IMG_1218-scaled.jpg",
    EventCenter: "Yoga Merkezi",
    ShortDescription:
      "Zihin ve beden sağlığınıza katkı sağlayacak yoga ve meditasyon workshop'u.",
    TicketSalesLink: "https://example.com/yoga-workshop-biletleri",
    Isitfree: false,
    Picture:
      "https://yogakiooturkiye.com/wp-content/uploads/2023/07/IMG_1218-scaled.jpg",
    EventUrl: "yoga-ve-meditasyon-workshop",
    EventStartDate: "2023-09-08T17:00:00",
    Artist: null,
  },
  {
    Type: "FESTIVAL",
    Id: 5402,
    FirstName: "Çiçek Festivali",
    EventEndDate: "2023-09-05T20:00:00",
    littleposter:
      "https://iasbh.tmgrup.com.tr/6a0c7a/650/344/0/22/660/368?u=https://isbh.tmgrup.com.tr/sbh/2023/05/03/24-uluslararasi-bayindir-cicek-festivali-basliyor-1683118121164.jpg",
    EventCenter: "Park Alanı",
    ShortDescription: "Renkli çiçeklerle dolu büyüleyici bir festival deneyimi.",
    TicketSalesLink: null,
    Isitfree: true,
    Picture:
      "https://iasbh.tmgrup.com.tr/6a0c7a/650/344/0/22/660/368?u=https://isbh.tmgrup.com.tr/sbh/2023/05/03/24-uluslararasi-bayindir-cicek-festivali-basliyor-1683118121164.jpg",
    EventUrl: "cicek-festivali",
    EventStartDate: "2023-09-02T10:00:00",
    Artist: null,
    EventCenterLocation: {
      Latitude: 40.7128,
      longitudel: -74.006,
    },
  },

  // TALKSHOW türündeki etkinlikler
  {
    Type: "TALKSHOW",
    Id: 5407,
    FirstName: "Psikoloji Sohbetleri",
    EventEndDate: "2023-09-12T20:30:00",
    littleposter:
      "https://istanbulgazetesicomtr.teimg.com/crop/1280x720/istanbulgazetesi-com-tr/images/haberler/2022/12/bagimlilikla_mucadelede_ailelere_ve_okullara_buyuk_is_dusuyor_h84932_a7517.jpg",
    EventCenter: "Kültür Merkezi",
    ShortDescription:
      "Ruh sağlığı ve psikoloji alanında uzmanların katılacağı interaktif bir sohbet.",
    TicketSalesLink: "https://example.com/psikoloji-sohbetleri-biletleri",
    Isitfree: false,
    Picture:
      "https://istanbulgazetesicomtr.teimg.com/crop/1280x720/istanbulgazetesi-com-tr/images/haberler/2022/12/bagimlilikla_mucadelede_ailelere_ve_okullara_buyuk_is_dusuyor_h84932_a7517.jpg",
    EventUrl: "psikoloji-sohbetleri",
    EventStartDate: "2023-09-12T18:00:00",
    Artist: null,
    EventCenterLocation: {
      Latitude: 52.52,
      longitudel: 13.405,
    },
  },
  {
    Type: "TALKSHOW",
    Id: 5408,
    FirstName: "Teknoloji Sohbetleri",
    EventEndDate: "2023-09-06T19:00:00",
    littleposter:
      "https://www.teknolojisohbetleri.com/s/2502/i/teknoloji_sohbet-logo-renkli.png",
    EventCenter: "İnovasyon Merkezi",
    ShortDescription:
      "Teknoloji dünyasının önde gelen isimlerinin katılacağı bir teknoloji sohbeti.",
    TicketSalesLink: null,
    Isitfree: true,
    Picture:
      "https://www.teknolojisohbetleri.com/s/2502/i/teknoloji_sohbet-logo-renkli.png",
    EventUrl: "teknoloji-sohbetleri",
    EventStartDate: "2023-09-06T16:30:00",
    Artist: null,
    EventCenterLocation: {
      Latitude: 37.7749,
      longitudel: -122.4194,
    },
  },

  // SPORTIF türündeki etkinlikler
  {
    Type: "SPORTIF",
    Id: 5409,
    FirstName: "Bisiklet Turu",
    EventEndDate: "2023-09-09T12:00:00",
    littleposter:
      "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1832000/sakarya-buyuk-bisiklet-turu-aa-1833973.jpg",
    EventCenter: "Şehir Parkuru",
    ShortDescription: "Doğayla iç içe keyifli bir bisiklet turu deneyimi.",
    TicketSalesLink: "https://example.com/bisiklet-turu-biletleri",
    Isitfree: false,
    Picture:
      "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1832000/sakarya-buyuk-bisiklet-turu-aa-1833973.jpg",
    EventUrl: "bisiklet-turu",
    EventStartDate: "2023-09-09T09:00:00",
    Artist: null,
    EventCenterLocation: {
      Latitude: 40.7128,
      longitudel: -74.006,
    },
  },
  {
    Type: "SPORTIF",
    Id: 5410,
    FirstName: "Tenis Turnuvası",
    EventEndDate: "2024-09-12T17:30:00",
    littleposter:
      "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/46000/46340.jpg",
    EventCenter: "Tenis Kulübü",
    ShortDescription: "Heyecan dolu bir tenis turnuvası ve rekabet dolu maçlar.",
    TicketSalesLink: "https://example.com/tenis-turnuvasi-biletleri",
    Isitfree: false,
    Picture: "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/46000/46340.jpg",
    EventUrl: "tenis-turnuvasi",
    EventStartDate: "2024-09-12T14:00:00",
    Artist: null,
    EventCenterLocation: {
      Latitude: 51.1657,
      longitudel: 10.4515,
    },
  },
];

export const getCategories = () => {
  let categories = [];
  DATA.forEach((activity) => {
    if (!categories.includes(activity.Type)) {
      categories.push(activity.Type);
    }
  });
  return categories;
};

export const getEventsByCategory = (category) => {
  return DATA.filter((activity) => activity.Type === category);
};

export const getAllEvent = () => {
  return DATA;
};

export const getEventById = (id) => {
  return DATA.find((activity) => activity.Id === id);
};

export const getOldEvents = () => {
  return DATA.filter((activity) => {
    let today = new Date();
    let eventDate = new Date(activity.EventStartDate);
    return eventDate < today;
  });
};
