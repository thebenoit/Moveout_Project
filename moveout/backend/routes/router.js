const express = require('express')
const { Mongoose } = require('mongoose')
const router = express.Router()
const Schema = Mongoose.Schema

router.get('/appartments', (req, res) => {

    const AppartmentsData =[{
        "_id": {
          "$oid": "66319f393c03e20d15384260"
        },
        "title": "1 Bed 1 Bath - Apartment",
        "price": 925,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1102698374171356/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438212005_961493055530491_346974804494461679_n.jpg?stp=c0.204.526.526a_dst-jpg_p526x395&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=LjNMdkbk1pEQ7kNvgEfyw15&_nc_ht=scontent-ord5-2.xx&oh=00_AfDelJpPPKV328-9shRd-k9fzXbhdVAnwV4ZAPXAD0r_JA&oe=66376A18",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.179Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384261"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 897,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/449933194194602/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440403585_455063850215066_7314023110039654179_n.jpg?stp=c147.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6AGIlvL3ahUQ7kNvgFJrTkL&_nc_ht=scontent-ord5-2.xx&oh=00_AfDO1-aW8Gc1Njelc6wQQyuPg6PArHYlxIg-G0EyNeuTXg&oe=66375EF0",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.328Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384262"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 950,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/743113211309875/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437140436_447059211213159_142904765252051125_n.jpg?stp=c144.0.540.540a_dst-jpg_p2048x2048&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=F7eamTtSUoAQ7kNvgGQ51uS&_nc_ht=scontent-ord5-2.xx&oh=00_AfBj87oPaMqY7PUFotE5tIF6AUHODTD-nMiOH10sY6mHvg&oe=66378DC7",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.329Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384263"
        },
        "title": "2 beds 1 bath Flat",
        "price": 700,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/411667281723705/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437357631_808843544021158_784411002088471149_n.jpg?stp=c0.76.507.507a_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=DYaAX1IjHlMQ7kNvgHF9fIX&_nc_ht=scontent-ord5-2.xx&oh=00_AfBrJPMCqdWdMMN074qyFqx2jGGrizoG5RHayKXBXh-QgQ&oe=66377D60",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.329Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384264"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1000,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/321138120780451/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439159219_7686689061374695_9197017665079251793_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OE_9L9YuYD0Q7kNvgGoZweO&_nc_ht=scontent-ord5-2.xx&oh=00_AfC3EZms0Ft83cDtux2v_1Rz48i9aInvH1FsPAziNtmTzg&oe=66377BF3",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.329Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384265"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 765,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/376126128194807/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/438037036_2094774794256128_6151365851447024740_n.jpg?stp=c88.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=xH6NpUBGhOcQ7kNvgFaA6Pa&_nc_ht=scontent-ord5-1.xx&oh=00_AfBZv1lzLwxxlCIo6ZU3T4ywPq-vu9XtaxM1ki4X5yHiWg&oe=66378AF6",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.330Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384266"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 750,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/641406924834451/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440203330_842524904361449_9080251073071986264_n.jpg?stp=c0.74.288.288a_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OxY2Dx08v6AQ7kNvgEoB_eQ&_nc_ht=scontent-ord5-2.xx&oh=00_AfAqEGm1tx6Xg4JQ2ghsZtYv2_maGFxHDLY3mJ6jFfmI_Q&oe=663789DA",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.330Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384267"
        },
        "title": "2 beds 1 bath Flat",
        "price": 645,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1470047020535767/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/439631758_457626233401235_2366800468929738100_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=iLd6lDOlU6cQ7kNvgGRz1QY&_nc_ht=scontent-ord5-2.xx&oh=00_AfDquOf56OF5_iuuUjqu0lz1unmqq4Kum2tBU8UXW4GxHw&oe=66377170",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.331Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384268"
        },
        "title": "3 Beds 1 Bath Apartment",
        "price": 750,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/797800792232715/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438267815_1371006850249665_8896200062487683133_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=sAh3HlFXY00Q7kNvgHLAvGy&_nc_ht=scontent-ord5-2.xx&oh=00_AfAbNF30IfuvK-pCDkVBQcm75zrYCE_H2IXBcIPB0aneMA&oe=6637734E",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.332Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384269"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 875,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1113277793245870/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/437197347_921532339770157_8248859033457120601_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=ee5sojKU-2gQ7kNvgGGiW56&_nc_ht=scontent-ord5-1.xx&oh=00_AfC4eAnWX-6IDc_1duHtKCeTAEoVQwlx4nsEVsYaLjETtg&oe=6637889C",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.332Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d1538426a"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 900,
        "city": "St-Lambert, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/3820153838226100/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/438078848_828661295741859_6947395079825427984_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sQ7QWH5WYRUQ7kNvgGw7ab2&_nc_ht=scontent-ord5-2.xx&oh=00_AfCQALK4L0ClJ5QSfQRzEqep6EVJ5UzLsubecDXtygGLCg&oe=663758EB",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.332Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d1538426b"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 950,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/791716582565008/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/438080320_1960997850969976_4960666214263259239_n.jpg?stp=c136.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=4jC1aOqNl6wQ7kNvgFmuroZ&_nc_ht=scontent-ord5-1.xx&oh=00_AfBjAz8VBiGOwbyCH7HpYG4faykinjoeErN-2CKnxVjcqQ&oe=66377BED",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.332Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d1538426c"
        },
        "title": "Appartement de 1 chambre et 1 salle de bain",
        "price": 950,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/788435716558649/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/438241363_3405564163081225_4840062368441646270_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GrmYzvhnkrMQ7kNvgEeLqjj&_nc_ht=scontent-ord5-2.xx&oh=00_AfBKGY1ZCtyStAIQu5k2f0zi8SptZZjA8tK8h1aImRMdZQ&oe=663780AF",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.333Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d1538426d"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 750,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/389557684057408/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440253724_460650029739576_917380266343702119_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BjDT-GEw8KUQ7kNvgFXHWU8&_nc_ht=scontent-ord5-2.xx&oh=00_AfB9rH6e7J6GcC_nlSqouJdmAjKPP1HFyahVGzZNZxwXbQ&oe=66377A21",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.333Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d1538426e"
        },
        "title": "4 Beds 2 Baths - Apartment",
        "price": 700,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1124392072097088/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440419315_10161389652146182_2998354772466063181_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0wgOpHDSi2oQ7kNvgGeD3h2&_nc_ht=scontent-ord5-2.xx&oh=00_AfAEY0LoTkAvWH5Gajy3bcCNe2UF78TE_L-SrzMhC4J1ew&oe=66377E59",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.333Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d1538426f"
        },
        "title": "2 Beds 2 Baths Apartment",
        "price": 965,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/349365888149936/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/440161206_965071281947762_8098660357984887717_n.jpg?stp=c210.0.540.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=EXzrBTEDgT0Q7kNvgE2CkE9&_nc_ht=scontent-ord5-2.xx&oh=00_AfCuckwr2KlZA-aDKtejfnc4qCWZN8lqdFkgGgPtZSJoOg&oe=66378C36",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.334Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384270"
        },
        "title": "2 Beds 2 Baths - Apartment",
        "price": 890,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1500307164164123/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/435745228_1183288465971827_2657929329197593049_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=0i_1GdEdGAYQ7kNvgHOtrLn&_nc_ht=scontent-ord5-1.xx&oh=00_AfCHNnIKEu0rvQS6ACJkdPnEwaeQ8dICwKEytkosf0eNfA&oe=66378BF4",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.334Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384271"
        },
        "title": "1 Bed 1 Bath Apartment",
        "price": 1000,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1537959136769151/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437116449_1152620896176176_5367350775369823402_n.jpg?stp=c210.0.540.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=htowhiyx7V4Q7kNvgG3eGnJ&_nc_ht=scontent-ord5-2.xx&oh=00_AfBa34ewsx9wmbJPYPVNhqhHvGyr3Vr9fa2Clpphnec0Tg&oe=6637872B",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.334Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384272"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 620,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/448115064438749/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437930581_1498089624393147_4008181696445182161_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=nBzVVYGoVRsQ7kNvgH118WD&_nc_ht=scontent-ord5-2.xx&oh=00_AfAoeSBoptqEKf_-p3J_Qe8uXhExRO1wZ3p_TMbFPvcodg&oe=66376703",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.334Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384273"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 618,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/406169395677265/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/418595050_939982830993619_4064337228154190630_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=cLyh4ujsi38Q7kNvgFYkBqE&_nc_ht=scontent-ord5-1.xx&oh=00_AfC235QZhxGgBTJr8dwNbM6jon5nwucuhGDTu6ufI2vv_w&oe=66377EAC",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.335Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384274"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 667,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1457284521661720/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439070113_294969333653084_1796054458336459722_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AxZ2T6kwnWUQ7kNvgHqXTpc&_nc_ht=scontent-ord5-2.xx&oh=00_AfBjKWsOwRhghsoIiDjQYrTPxiPYLM9DLZQxv_l9VZcqjA&oe=663789BF",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.335Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384275"
        },
        "title": "Appartement de Studio et 1 salle de bain",
        "price": 970,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/763108745948776/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/428727811_7189204517859997_8849109245399182161_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=yZqTK8rixZsQ7kNvgG2XtUi&_nc_ht=scontent-ord5-1.xx&oh=00_AfB2zDRvoYxhx7iJrW7xbUO3P3WuneZHtbaOtsz_vH9Mxg&oe=66378C85",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.335Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384276"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 875,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/682286350626348/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/439689070_466331936058384_8333766555852387862_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VrAihYozJPAQ7kNvgG56QQj&_nc_ht=scontent-ord5-1.xx&oh=00_AfAqlSoVkqtW_I4XOXVmVJ-cDDc8nFw0NGCQAX00gPqUpg&oe=66376DDE",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.335Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384277"
        },
        "title": "1 Bed 1 Bath - Apartment",
        "price": 845,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1712489625950511/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436783743_732530605445515_3193105853689850464_n.jpg?stp=c0.204.526.526a_dst-jpg_p526x395&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=Lm5K7MzudjkQ7kNvgGbCECd&_nc_ht=scontent-ord5-2.xx&oh=00_AfB1WaGBk4XnSG9xL8jqBp5xPHnWOxKDU20VOefmS2vO5Q&oe=6637857A",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.335Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384278"
        },
        "title": "3 Beds 1 Bath - Apartment",
        "price": 1000,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/402972599162872/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/438095565_10169619885320713_5661538913916607069_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6_2-3PdPG3oQ7kNvgHhYkfr&_nc_oc=AdhFflULUoYRCQvxokor4uXTcF9n6MM_CROT3keEb2CWZF-bVGJ0lGc2aND015w6t_o&_nc_ht=scontent-ord5-2.xx&oh=00_AfAyvUW26VhpkLuW82LSwn8YHbSIN2GFd0aFbX6lZEuAmQ&oe=66375C9C",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.336Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384279"
        },
        "title": "1 Bed 1 Bath - Apartment",
        "price": 1000,
        "city": "Longueuil, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/446185164754267/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/439619286_10226411690220153_2272786860829029738_n.jpg?stp=c67.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sT8gWTawpt0Q7kNvgFLTl7M&_nc_ht=scontent-ord5-1.xx&oh=00_AfD5thqxYul84h3dBqXzWySaDwrQpgtNof8NoBh6RtfrVg&oe=66377B64",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.337Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d1538427a"
        },
        "title": "CONDO ENTIÈREMENT MEUBLÉ",
        "price": 850,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/747779090758403/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/435975466_727857686164954_3062511138931274985_n.jpg?stp=c107.0.426.426a_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=6PsDfRwwdTUQ7kNvgExQ1d6&_nc_ht=scontent-ord5-1.xx&oh=00_AfDKLwr04B1o4uIwqzqA86aJkQwASjjSIDdCxtJbBszwHg&oe=66377974",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.337Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d1538427b"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 613,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/678391511042132/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/438118959_10212024744170676_4988449133118346425_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=H47Svm6L5toQ7kNvgH9ise4&_nc_ht=scontent-ord5-1.xx&oh=00_AfDdygDZ3PuG6DMN1I0q3b69Iu0NaXRmE-FATlSVnsF3Uw&oe=66375A37",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.338Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d1538427c"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1000,
        "city": "Beauharnois, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/964852772020930/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/440150729_1845544149202034_3174257052467216893_n.jpg?stp=c91.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=syE1XZhVeDsQ7kNvgG5_2uZ&_nc_ht=scontent-ord5-1.xx&oh=00_AfBZmkvayk880coDQvKxRHRV-TZ-smMGtbROZ5J1g2ARXA&oe=66376F3F",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.339Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d1538427d"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 895,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1141834720292938/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440178088_7155631554559943_98907587190596290_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ghd_r1raiPIQ7kNvgH-tAAz&_nc_ht=scontent-ord5-2.xx&oh=00_AfDKqzl3vnS7lKKp_moOfmxT1ZRvj9akXQAmnBXzVfy7sw&oe=66378CF6",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.339Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d1538427e"
        },
        "title": "3 beds 2 baths Flat/apartment",
        "price": 1000,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/2804255223060679/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/434845335_3740260432873527_1599412359974459189_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=_52ucu-mvBAQ7kNvgGDi9Pm&_nc_ht=scontent-ord5-1.xx&oh=00_AfCX7DBxqanRPtWKQDXWcXtjYT-expm_XB3FHFJlt0uy_A&oe=6637899F",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.339Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d1538427f"
        },
        "title": "3 Beds 1 Bath - Apartment",
        "price": 790,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1489690828564241/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/439101756_478719751147743_2654900606015248281_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3acdH0yvbhQQ7kNvgHEEX6e&_nc_ht=scontent-ord5-1.xx&oh=00_AfDj6y5zxhMOBjm04qxZKw7Ld9Es72efLvUjvWXfqPBc_g&oe=66377562",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.339Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384280"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 700,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1495169584716089/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/438217309_401890766058865_687091969717031948_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IfJxP2vK9aEQ7kNvgE3hjrp&_nc_ht=scontent-ord5-2.xx&oh=00_AfBRCeHEa4J9NBG0OIFgEytcw0UjDpGNKlXofCzGEbLlmA&oe=66376B92",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.340Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384281"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 825,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/450415040807999/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437361778_1470107590279666_4822162085378002711_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=F_7WXIsEPOQQ7kNvgF-y-iP&_nc_ht=scontent-ord5-2.xx&oh=00_AfAfbYqBuhJma-glfuLr_gsy1vZlnO0QvsP_HfsBjHDxQw&oe=6637560B",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.340Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384282"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 830,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/745880737736141/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/439503861_2205065196505820_1511858013336333573_n.jpg?stp=c0.53.480.480a_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5LdNVYK0SSIQ7kNvgHOjmfg&_nc_ht=scontent-ord5-1.xx&oh=00_AfC3qn3iW-gtZ9tpicXFCxA7Cv5OF-zIHirKYmDx6EZr4A&oe=66377082",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.340Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384283"
        },
        "title": "2 Beds 2 Baths - Apartment",
        "price": 903,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1193296375008514/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440581781_1828546967612830_2921225977182759617_n.jpg?stp=c0.32.296.296a_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8TA--JgGHpsQ7kNvgGU3gxc&_nc_ht=scontent-ord5-2.xx&oh=00_AfCNxKg6_6MSSmF5rS3uCYige-Gxp0bTnLoXEujW9G7JOw&oe=66375917",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.340Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384284"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 900,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/437473475633994/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438250516_345724818082453_5269655232790971117_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=58K8fvKFShIQ7kNvgHOelQn&_nc_ht=scontent-ord5-2.xx&oh=00_AfB-ESagkylAMOdIxcDYeFN_LddSxzhN4Or-cpyM1Qg2vQ&oe=6637707F",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.340Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384285"
        },
        "title": "Appartement de 1 chambre et 1 salle de bain",
        "price": 924,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/7323040464490223/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438232214_1102707344330869_4609722338989088737_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=rSsEcWopNl8Q7kNvgFVdOJV&_nc_ht=scontent-ord5-2.xx&oh=00_AfCy0w3o2E9IacTvsBj9GhFdyAHFJ5uaxJQ_ZjiPcGlTjA&oe=663775E8",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.341Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384286"
        },
        "title": "1 Bed 1 Bath - Apartment",
        "price": 980,
        "city": "Longueuil, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/963071978823461/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440249196_2731470043673917_4389556265109945001_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Rrkh8A1VKYkQ7kNvgHqdveD&_nc_ht=scontent-ord5-2.xx&oh=00_AfB9PgqSwdhsvgAtlmrXCWUzUKwwDM4ARPpsZr1IRd6bkg&oe=66376B5C",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.341Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384287"
        },
        "title": "2 beds 2 bathrooms – Flat",
        "price": 700,
        "city": "Laval, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/464502852667274/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436006885_1824485684643035_7413387281643360666_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=Pq4jRafjK0IQ7kNvgFnMZCe&_nc_ht=scontent-ord5-2.xx&oh=00_AfBlnuTqPGB6JMxSTraqdYnwEFZBZzSrCGutxrTFI05xwQ&oe=66375835",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.341Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384288"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 820,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/925921195882401/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439242035_4462451180647340_1741508771596322881_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Pb5BeXBJmiQQ7kNvgHK29qh&_nc_ht=scontent-ord5-2.xx&oh=00_AfAW9U8sTSI3bLKnb2bymqei8mAS66ZcrMAXCwKrOqXDTg&oe=66375E2B",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.341Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384289"
        },
        "title": "Appartement de 1 chambre et 1 salle de bain",
        "price": 900,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/454835033872155/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/423539263_396906416481283_5651970202290484527_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=OgxNgHvCXNoQ7kNvgFSTDSv&_nc_ht=scontent-ord5-2.xx&oh=00_AfBIa7CSJjbwvA8p_F6XM30ZZ_tEWpzTmuzEZqHBb24Trg&oe=66377D22",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.342Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d1538428a"
        },
        "title": "1 Bed 1 Bath Apartment",
        "price": 1000,
        "city": "Laval, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/2115441228819565/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436764530_1845982675829619_3544843520846644312_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=lBpt0bXk16cQ7kNvgHKxYgY&_nc_ht=scontent-ord5-2.xx&oh=00_AfB8d_U2ChZX70eN_HmR5jqZgoViyzBnymwJBQbYfM5Nww&oe=663768EE",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.342Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d1538428b"
        },
        "title": "2 Beds 2 Baths Apartment",
        "price": 850,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/2041323499584862/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/434259349_336125849091833_1080934807294120788_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=X38o_v5tJzoQ7kNvgGH8sx6&_nc_oc=Adhjmc3M0gni_RMPt3j3eZoT0fL4hP8AGCmM8nhWErr8P0Nt0C9pasuAzgtC1fFRhMI&_nc_ht=scontent-ord5-2.xx&oh=00_AfCcOb06Xm8DNMGTo7oY0fs49-dxTRNV0fHYy2QomsOxMw&oe=66376E83",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.342Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d1538428c"
        },
        "title": "Studio 1 Bath - Apartment",
        "price": 909,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/446396571243569/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440783245_2328131467376336_1818260142237659087_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ZfghXqtl2SoQ7kNvgGEumN8&_nc_ht=scontent-ord5-2.xx&oh=00_AfBnoUI0GoBP10dIHDYp6-h24SBlAG-ioIpgfxv-Kjs5JQ&oe=66375EC5",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.342Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d1538428d"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 950,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1116967006296604/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/425034000_1174129663591950_8225739699169432402_n.jpg?stp=c89.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=T6ZhHIk2XfsQ7kNvgHkmIYv&_nc_ht=scontent-ord5-1.xx&oh=00_AfAJ0bFfhdLXWAK0YiFhwauYaRB8aQjSpZyzyN73hVMzGA&oe=66377115",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.342Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d1538428e"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 890,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/802181904746294/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436836540_3935965893392098_3528179453666612754_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=sYOYElhNDrgQ7kNvgF7VuhL&_nc_ht=scontent-ord5-2.xx&oh=00_AfD40Lgh1qT3Py3dWzP1tI0jc_jmr4U5_HCkXfmg4M3kww&oe=66376E32",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.342Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d1538428f"
        },
        "title": "Studio 1 Bath Apartment",
        "price": 965,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/8015356868492964/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/437054516_7244988268961990_7483273319769428947_n.jpg?stp=c161.0.521.521a_dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=wWDiB2XRxw0Q7kNvgEL8X3L&_nc_ht=scontent-ord5-1.xx&oh=00_AfCxlRVQXm6Zv3YT26BR_rjRULeW613UMAVl3vQusZHooQ&oe=66375710",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.343Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384290"
        },
        "title": "Studio 1 salle de bain Appartement",
        "price": 895,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/820401146787599/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438017126_387923400883871_3483152610069763518_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=6TwtmCQPv1EQ7kNvgEKYKHi&_nc_ht=scontent-ord5-2.xx&oh=00_AfCb2cgrsunQtMmm2V0IchPs27DpG4cy36bMXE-8_pgSPQ&oe=66377EFC",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.343Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384291"
        },
        "title": "1 Bed 2 Baths - Apartment",
        "price": 845,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1154921742207627/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/438081844_1602034360554197_6869723788057613470_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Z0l8QEYKwrYQ7kNvgForWxc&_nc_ht=scontent-ord5-2.xx&oh=00_AfCX9TjsDUN0Dxtnbw3g28-Tuw70s59YUY7OhbXqpGcoFg&oe=66378A21",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.343Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384292"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 600,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1631219774340190/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/437881184_807900660706117_7804856052493775853_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=ZEmAu93sNJkQ7kNvgH84YgG&_nc_ht=scontent-ord5-1.xx&oh=00_AfBM54GavcXSSEfw6XUjaGmB5ZnnktsxLImzQOR1lcCOhw&oe=66378320",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.344Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384293"
        },
        "title": "Appartement de 1 chambre et 1 salle de bain",
        "price": 995,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/422986090629317/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/436480720_1377036082940829_5523135910198717166_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=NpfuyRVUoHYQ7kNvgEeStYA&_nc_ht=scontent-ord5-1.xx&oh=00_AfDUMxs3VnhJTCQ7thRBUC1ugEefNBU_bbam5c0QKYfm3Q&oe=66375B9B",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.344Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384294"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 950,
        "city": "Salaberry-de-Valleyfield, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1155463372246241/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/438242762_10169119282210454_3069573325987129952_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=URkHJWcZTjAQ7kNvgH9WojC&_nc_ht=scontent-ord5-2.xx&oh=00_AfD_TXsbg_qLFs8P5EFLSHlhebTvkHe0Vq_f6lXCFWYRMg&oe=66378033",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.344Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384295"
        },
        "title": "Appartement de 1 chambre et 1 salle de bain",
        "price": 875,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/2233306333675110/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436887150_1176073203638050_2065228177871990112_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=BgATmRYZ3dcQ7kNvgFXjFYr&_nc_ht=scontent-ord5-2.xx&oh=00_AfArgbHvHre1Vj7sv2KFek4cCpM-gsojjHpGWv1gX51j2g&oe=66378933",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.345Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384296"
        },
        "title": "1 Bed 1 Bath Apartment",
        "price": 950,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/972761771180690/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/428123149_303723252596553_6289977161562022746_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=8DcoyT1NUEYQ7kNvgGA_i63&_nc_ht=scontent-ord5-1.xx&oh=00_AfBf2DZvDwOIM7JSn1DsJU04zKlW9PMEXB0eVTiga_Xjcg&oe=66378688",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.346Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384297"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 950,
        "city": "Beloeil, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/356873823516217/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439831749_3652804521702507_614660203713285842_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cHVsYcQ28LAQ7kNvgE2Q14b&_nc_ht=scontent-ord5-2.xx&oh=00_AfAIPP9XEFdQdaNH3yXZETNi_KnB9IDAYdAx44Eebcz8RQ&oe=6637665D",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.346Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384298"
        },
        "title": "1 Bed 1 Bath Apartment",
        "price": 920,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1531079700787595/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/427195013_993649645433729_5490860856751751588_n.jpg?stp=c133.0.534.534a_dst-jpg_p2048x2048&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=zgGWV21OzBgQ7kNvgEgF9CO&_nc_ht=scontent-ord5-1.xx&oh=00_AfBzH2nhGd97KlyaZtcEt3H8mbHW-4pfj0Ia8-WVSVV3UA&oe=663762E7",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.346Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d15384299"
        },
        "title": "3 beds 2 bathrooms – Flat",
        "price": 900,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/759664486316682/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/439149999_780418974057068_3864652697898799514_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MPXWaFMwMykQ7kNvgEFpQDy&_nc_ht=scontent-ord5-1.xx&oh=00_AfCYS-KMMLcRrAJ0ge_GpZhlhRS1R10kKp_dfe9GrDWmDA&oe=66377351",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.346Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d1538429a"
        },
        "title": "1 Bed 1 Bath Apartment",
        "price": 1000,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/814155203958195/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/436800560_377833615247358_2371509661352259574_n.jpg?stp=c0.204.526.526a_dst-jpg_p526x395&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=tKV1La13XMUQ7kNvgEOQtVR&_nc_ht=scontent-ord5-1.xx&oh=00_AfCRl8ncsCtnC-27pkQGhgHzl2u3ObD5qjLDvytfELnxhg&oe=66375BC8",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.347Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d1538429b"
        },
        "title": "Studio 1 Bath Apartment",
        "price": 825,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/792245012466845/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/436787967_1159550628565208_1485051799966067238_n.jpg?stp=c209.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=O3Vsw7WfqbUQ7kNvgHU2V_8&_nc_ht=scontent-ord5-1.xx&oh=00_AfBLHdK1g1K52sBSxqHR1O7z3OUGhtIVonHnBQ9tS7566Q&oe=663775AC",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.347Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d1538429c"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 750,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/451732030571649/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438155989_1109239233519742_8413814193307476910_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=Zuppguy22A8Q7kNvgHNfTXT&_nc_ht=scontent-ord5-2.xx&oh=00_AfDHpD9ONWk5GN4-ejlDUqFaLXxrmw51nOY16F0CqvsXBg&oe=663782A3",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.347Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d1538429d"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 880,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/397912073097435/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/439633047_2796712870476354_8408578248505027376_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=H8fJk6xmFbsQ7kNvgHDVvzE&_nc_ht=scontent-ord5-1.xx&oh=00_AfAL2EHTNSLRtnCCH7whA-rY_7N1EsVuFwveWV2iIjpOkw&oe=663758B9",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.348Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d1538429e"
        },
        "title": "4 Beds 2 Baths Apartment",
        "price": 850,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/398985699703594/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437283521_736774938329964_8247222661081549945_n.jpg?stp=c136.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=kbfHcdos9YoQ7kNvgGLZrSk&_nc_ht=scontent-ord5-2.xx&oh=00_AfC9s0sB0xniHDahzEJIoP2aomr2YGihrFu3P4v7PuMHOg&oe=6637595F",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.348Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d1538429f"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 900,
        "city": "Magog, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1845803755831865/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/437457328_761132462819363_5140365030096119272_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=tS_yhLRZf7YQ7kNvgHSjDuU&_nc_ht=scontent-ord5-1.xx&oh=00_AfB653myOm3qiSc1iao1K0GxGsTXgpL91jSe3Z_wGU7FNg&oe=663757D8",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.348Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d153842a0"
        },
        "title": "Appartement de 3 chambres et 1 salle de bain",
        "price": 850,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1649921232463696/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/439606948_10232661326854533_5045868512688485109_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BYR37o-30yYQ7kNvgGe9emO&_nc_oc=AdgXPTI5YfZ8IJXzQBk4d9b0I3uKb1d2mqvzLopvYwMXUxn6-tYp7ZlXLVj2TZVP96Y&_nc_ht=scontent-ord5-1.xx&oh=00_AfAUtuhILozJilU4M-2w_MV3MAOGm0Okpyz2SzXpjZzTLw&oe=663756C6",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.349Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d153842a1"
        },
        "title": "1 chambre à coucher 1 salle de bain Appartement",
        "price": 925,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1159585421730908/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/424973437_780839440688090_6376775050490810995_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=kKpamrzzCp8Q7kNvgGQ-Spb&_nc_ht=scontent-ord5-2.xx&oh=00_AfDmPuilaWDktDM_k3a46PCkCE7TdOdD5LtPoGI_f9FIdQ&oe=663768B2",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.349Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d153842a2"
        },
        "title": "Appartement de 1 chambre et 1 salle de bain",
        "price": 1000,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1156145392489594/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/438330179_7726682394032697_7745911748623238715_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wEBnJNLZSxIQ7kNvgFWGazz&_nc_ht=scontent-ord5-2.xx&oh=00_AfCeGcUQI_SWit2KYGhX3hP5qCmtaYwyKMZHauwbn7f5Yg&oe=6637667B",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.350Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d153842a3"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 700,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/853526520151749/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437153448_989504242698203_7094895812380520926_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=k1KMH9cMvOkQ7kNvgGgUL3M&_nc_ht=scontent-ord5-2.xx&oh=00_AfAULu_qJBPFED4yIkg6Ya_-nvF1QVpM_Ec4PvkaZ3qNAw&oe=66375CB4",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.350Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d153842a4"
        },
        "title": "1 Bed 1 Bath Apartment",
        "price": 980,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/276852705517430/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438303545_418312477480964_7205008480806219460_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=WzdR4bhP2qAQ7kNvgEQpjG0&_nc_ht=scontent-ord5-2.xx&oh=00_AfA_o7qLoRefsN_z1Jm7Su9oFzqrsV5Qpiz4WmJ78zd9BA&oe=663778F0",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.350Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d153842a5"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 950,
        "city": "St-Jean-de-Matha, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1826590124472461/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/438239372_7487735514650976_5090158276126132698_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kNSNtHJq0XMQ7kNvgFuT1nT&_nc_ht=scontent-ord5-1.xx&oh=00_AfDcAVyL48deKXPSCcHkzRPwAxjIH7TcTt3wRdvsCBa2bg&oe=6637761E",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.351Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d153842a6"
        },
        "title": "1 Bed 1 Bath Apartment",
        "price": 925,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/418192374262392/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/429492899_820438359973775_3521169430814147409_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=vSoz7GEIG3EQ7kNvgHN59LG&_nc_ht=scontent-ord5-2.xx&oh=00_AfD5Gj-petH6csiZcpgcH-Ix-9ianHqOvGtcRi6q84OKFA&oe=6637817C",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.351Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d153842a7"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 760,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/2125863601106239/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/427364251_1486067218997485_3543921758158395353_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=bBHIekGlZuUQ7kNvgE-qPoj&_nc_ht=scontent-ord5-2.xx&oh=00_AfBBZmalyr0M7hXmwvI-OuVRoZ3f6XmQkrkJ4ahEkdrXqQ&oe=66378879",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.351Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d153842a8"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 750,
        "city": "Shawinigan, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/473761794982598/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440036062_7263832790405750_9083957433975483212_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yXWIYyYczcQQ7kNvgHzTgiG&_nc_ht=scontent-ord5-2.xx&oh=00_AfCcaJ3SBUjdBM9YVX7uV_2q5kshC8N2R5GMJGX3Pll3vw&oe=6637643D",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.351Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d153842a9"
        },
        "title": "1 Bed 1 Bath Apartment",
        "price": 985,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/406195065591706/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438195922_7371292569658104_8633221870746289638_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=d-rn2bmf1-EQ7kNvgFVXQ8Y&_nc_ht=scontent-ord5-2.xx&oh=00_AfCOB9hpRTCINgpN9SwjLnVrPgNtLOr_0JZuiv15UQGrxg&oe=66375C29",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.351Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d153842aa"
        },
        "title": "2 beds 1 bath Flat",
        "price": 400,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/792619132446422/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/435311634_479805157704402_4925532815250451273_n.jpg?stp=c0.76.526.526a_dst-jpg_p526x395&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=p3aaie_13zYQ7kNvgG9KET8&_nc_ht=scontent-ord5-2.xx&oh=00_AfDindZGO9BvIND-tE8sgTjh3EZLVHGps5uMK2Z9EoyXcA&oe=66377B11",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.351Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d153842ab"
        },
        "title": "3 chambres à coucher 1 salle de bain Appartement",
        "price": 775,
        "city": "St-Lambert, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/382669894755173/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/431004477_7409938509044437_1103990672423423475_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=vhWveOHHEGcQ7kNvgHvU3IB&_nc_oc=Adgz7AL0zcl-M4gYRaR6zucfMY1nFS5AjWz34M-61CeyoKS2AG1C4Q2TUm1I2BjOsYU&_nc_ht=scontent-ord5-1.xx&oh=00_AfB-DfzdSbYs-X6wgwKSXPDH810NNyVzspNmuNCnehqFBA&oe=663766CC",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.352Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d153842ac"
        },
        "title": "Private Room For Rent",
        "price": 700,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/2200117240338007/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437065649_328133776644885_4915484468598310736_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=g9oEqUThkA0Q7kNvgHIKv_u&_nc_ht=scontent-ord5-2.xx&oh=00_AfCBkM3pVFWpe1X8K_L9VCA-vSglybOpYv1frnKiyXI9jg&oe=66375F4F",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.352Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d153842ad"
        },
        "title": "Appartement de 3 chambres et 1 salle de bain",
        "price": 890,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/7439899829460268/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438011097_971074417547947_5541939740476588596_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=TAFFWg2maVIQ7kNvgHggVzT&_nc_ht=scontent-ord5-2.xx&oh=00_AfCZJB3VFZEvUESQ1nvM3By1khhL6ky8KxAQh8Z6kbiI6w&oe=6637841F",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.353Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d153842ae"
        },
        "title": "1 Bed 1 Bath - Apartment",
        "price": 880,
        "city": "Mont-Royal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1166827201412688/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/440139116_10168894576425224_7850573284435303606_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2PDD4ScijV8Q7kNvgHe2Jqv&_nc_ht=scontent-ord5-1.xx&oh=00_AfAHBUMNuISf5BJhM2eZZMKY5HPsIcz2PKqS63ZKNdwR5Q&oe=663769DB",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.353Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d153842af"
        },
        "title": "3 Beds 1 Bath Apartment",
        "price": 850,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/2184679118535407/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/438077584_3657024307907177_5211618917045281589_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=nowOf2dNdD4Q7kNvgE0ITSj&_nc_ht=scontent-ord5-1.xx&oh=00_AfCJFmX3nt835huRySqtWTVKf8ETTdCjQRDKADFL2p3NyA&oe=663756B5",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.354Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d153842b0"
        },
        "title": "2 camere da letto 1 bagno Appartamento",
        "price": 850,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/4111190205774208/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/424998124_456469790111575_7795804647269375016_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=ckztOFI9huQQ7kNvgElL-dc&_nc_ht=scontent-ord5-1.xx&oh=00_AfB3eIaulLo1Jm5ipQT70mOV-4W5__kuSbUB1btkgzlsTg&oe=6637892E",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.354Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d153842b1"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 995,
        "city": "Magog, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1533112667630983/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/441021620_122134870832234015_782500318784129674_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xBbzv8eE7_QQ7kNvgGoCxEb&_nc_ht=scontent-ord5-1.xx&oh=00_AfCJdxdKdLgz9RPBrDmKogxDJzfAR7peNUilRCzp0tJu7w&oe=66378007",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.354Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d153842b2"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 410,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1604007450394582/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/440900729_122142608936161311_1271086091931804399_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4TV-_RULWDcQ7kNvgH4qXi4&_nc_ht=scontent-ord5-1.xx&oh=00_AfB0yEo4ylEqruJZDWzMxmFTPTxwTNx2oVKCEWU3HpGfAA&oe=66375EEE",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.356Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d153842b3"
        },
        "title": "1 Bed 1 Bath - Apartment",
        "price": 654,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/981445000089560/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/438239305_474217261603721_2264922664356830858_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wIBxcoRj7H8Q7kNvgGp7Dld&_nc_ht=scontent-ord5-1.xx&oh=00_AfC7dtgMhPVacQSyuuKqxBQeQ1HMyuhj2ra_q6fgW4IldQ&oe=66376BBE",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.356Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d153842b4"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 800,
        "city": "Shawinigan, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/451577650689534/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/435236988_421304317317403_3374288801170416414_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=YNs0BB7LpRUQ7kNvgE_qd9u&_nc_ht=scontent-ord5-1.xx&oh=00_AfAYXi1u7UrPajVF6KTRrnMX356QBERVMY9VGxqLICweMw&oe=66378AC1",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.356Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d153842b5"
        },
        "title": "3 Beds 1.5 Baths Apartment",
        "price": 989,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/3279634319004320/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437284757_736921698461061_471474882942388257_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=E5dHqbTpHVwQ7kNvgF6GmeQ&_nc_ht=scontent-ord5-2.xx&oh=00_AfBE40fICtm0IE03DOnvvLd7DqpG6T7XiW_gYtVV_XfIwA&oe=66377963",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.356Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d153842b6"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 625,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1233802991328069/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/438078208_435000765786084_3986864137261860784_n.jpg?stp=c0.212.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=n_TUunTro0kQ7kNvgF9_ypJ&_nc_ht=scontent-ord5-2.xx&oh=00_AfBgJfYRYLiCzEp8Yxf2Y3cht5vjIDcVO2pz5BFyGXCcaw&oe=663784D8",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.356Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d153842b7"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 995,
        "city": "Shawinigan, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1872438719863831/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/441159207_10223186885317709_873280795484371664_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=j0hPZkVJYfcQ7kNvgEUC1pe&_nc_ht=scontent-ord5-1.xx&oh=00_AfBBSQf3FKV6pKZFx8l6ux25koUBOUe6GQryHlzGWSLtDQ&oe=663762C3",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.357Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d153842b8"
        },
        "title": "Appartement 3 1/2 a louer",
        "price": 950,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/718462090217092/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/414737544_7372980236080220_9039851808783606838_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=NsVRxwAaC_AQ7kNvgEVsdtj&_nc_ht=scontent-ord5-2.xx&oh=00_AfBOcVIcg3FOxG4CDTimbPX5uKxlFJUCAD3GM6v8XxkITg&oe=66377FCF",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.357Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d153842b9"
        },
        "title": "3 beds · 1 bath · Apartment",
        "price": 1000,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1030526418481177/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/436574075_1943644272759102_3187561862687917568_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=3GMvBwPo3qUQ7kNvgEn4t56&_nc_ht=scontent-ord5-1.xx&oh=00_AfBs_vo0U4c4ir6ljndPFgZkmRxmwSl6Ypv3_1ZmGiFRnQ&oe=66376D58",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.357Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d153842ba"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 890,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/341001028986313/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/427762262_857526176388007_4234793247105535956_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=Dl-JBd-EVowQ7kNvgFrS9OE&_nc_ht=scontent-ord5-1.xx&oh=00_AfBpfVadm0rMrNnd4ya3-Jj7hg775tvDn6kBp9UABo9gaQ&oe=6637761B",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.357Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d153842bb"
        },
        "title": "Appartement de 3 chambres et 1 salle de bain",
        "price": 880,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1145448146580476/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/439672225_1172846890751491_7820352903522515047_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=kkD502gWrqIQ7kNvgExBNPN&_nc_ht=scontent-ord5-1.xx&oh=00_AfC_WzZeYzgCbKCYQtIlFR-uMMuWmI3v5Pm2HsjSFfOK_Q&oe=663760B4",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.357Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d153842bc"
        },
        "title": "2 beds 1 bathroom – Flat",
        "price": 600,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1665175314300848/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/438734152_25205866385724131_4018274717481138756_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=95gAuZtDGegQ7kNvgE2J4uV&_nc_oc=Adj9A8588mKve7fhNMlkNPJL4rnpLOga0uCv41iT6ZX6bfGYGXnykZX-pyWlgjdOiIc&_nc_ht=scontent-ord5-1.xx&oh=00_AfDiw7kHVQ3sBXEAUK9brqxr3hR1qW-GEXW7Pkfa05_5DQ&oe=66378DD3",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.358Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d153842bd"
        },
        "title": "3 Beds 2 Baths Apartment",
        "price": 950,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/354747944247876/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/433283318_955315949231922_2260503377920041608_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=ZPCxIUZmoGQQ7kNvgGYpdX4&_nc_ht=scontent-ord5-2.xx&oh=00_AfAtaiNVwOfFutOPE1ldKnY_bQxBo2oGX0b_XopWJJsT1g&oe=663773C9",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.358Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f393c03e20d153842be"
        },
        "title": "Appartement de Studio et 1 salle de bain",
        "price": 950,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/739407664940116/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439121023_122145724418118425_1743839205224947991_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=scRQnLaSxBIQ7kNvgEmPIu5&_nc_ht=scontent-ord5-2.xx&oh=00_AfDtTWfjS-ti4YgKu1gQxOl0qPWwlPILqpOLzm00qO2lLg&oe=66378833",
        "date_scraped": {
          "$date": "2024-04-30T21:47:37.358Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842bf"
        },
        "title": "3 Beds 2 Baths - Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/2137395246633437/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439943046_1577982586385611_480687150074746446_n.jpg?stp=c86.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jdM26sBfPQoQ7kNvgFHY4s9&_nc_ht=scontent-ord5-2.xx&oh=00_AfCDT8T6UHBV7ZNQz9VEuAPlEZ81StwYmsvAWlO2fMrk2g&oe=6637565D",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.622Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842c0"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1300,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1618471472285987/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/438028691_1125912988616898_7703496777587621461_n.jpg?stp=c69.0.502.502a_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=IA6kLRRSLZAQ7kNvgHE-HU3&_nc_ht=scontent-ord5-1.xx&oh=00_AfASEUErYlhQfoFG2JR5SVJd3JrZUqY7wn97TsPdlspiwQ&oe=66376678",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.624Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842c1"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1300,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1413922042627042/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/438093983_1133722597823147_2623552713582220723_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=v3lRtjBkJEEQ7kNvgEdO2Hi&_nc_ht=scontent-ord5-2.xx&oh=00_AfCQ91yXeJJXhaH2GLqOs4-8aAd0cgVn9pYm8jddbuEO8Q&oe=66376BC5",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.624Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842c2"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1003068374779903/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/437348885_1570425397141330_3078667447688357415_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XD6uqB2wxJ0Q7kNvgGPqdiR&_nc_ht=scontent-ord5-2.xx&oh=00_AfBJr3OMVEszXUIo3M-gunA_LXdHq2lNDmlfrffkvnJqyQ&oe=663778C4",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.625Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842c3"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1350,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1441487993161574/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/440103023_364452066025606_4974186968262639719_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=vATLrO9K5nkQ7kNvgHQmHVP&_nc_ht=scontent-ord5-1.xx&oh=00_AfDrjJ4tUElkwg5k4syJ6JbPNBsZh05Mcraod25PYm1xyg&oe=66377943",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.625Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842c4"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/827417419257852/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438037053_2073017376411415_4056703235568640297_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=29i__z8l7KEQ7kNvgEmdcyU&_nc_ht=scontent-ord5-2.xx&oh=00_AfAtbpCJTAaeB5ezsq76iKaTXrb5P0u0Ltz-20lmnYHwfw&oe=66376D37",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.625Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842c5"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1450,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/492156753142012/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437089667_1636036673824831_6186525482638494443_n.jpg?stp=c0.86.526.526a_dst-jpg_p526x395&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=Rb29CgdepsEQ7kNvgG3Jh48&_nc_ht=scontent-ord5-2.xx&oh=00_AfBCPU1vwOBvEyGtPNOJ0bGbSjfVCVHJb81KQOTMUbSx8w&oe=66378676",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.625Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842c6"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 950,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/743113211309875/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437140436_447059211213159_142904765252051125_n.jpg?stp=c144.0.540.540a_dst-jpg_p2048x2048&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=F7eamTtSUoAQ7kNvgGQ51uS&_nc_ht=scontent-ord5-2.xx&oh=00_AfBj87oPaMqY7PUFotE5tIF6AUHODTD-nMiOH10sY6mHvg&oe=66378DC7",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.626Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842c7"
        },
        "title": "1 Bed 1 Bath - Apartment",
        "price": 925,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1102698374171356/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438212005_961493055530491_346974804494461679_n.jpg?stp=c0.204.526.526a_dst-jpg_p526x395&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=LjNMdkbk1pEQ7kNvgEfyw15&_nc_ht=scontent-ord5-2.xx&oh=00_AfDelJpPPKV328-9shRd-k9fzXbhdVAnwV4ZAPXAD0r_JA&oe=66376A18",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.626Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842c8"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1350,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/771472315129515/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438037069_452382890808863_6663321636424933658_n.jpg?stp=c24.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=KDJc-9HNLIIQ7kNvgFIJJ4n&_nc_ht=scontent-ord5-2.xx&oh=00_AfDVNUCU9QCQ5NwlLqfi_VpS3Yn7gVn-K5o36-pvrl9j8A&oe=66375BD0",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.626Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842c9"
        },
        "title": "1 Bed 1 Bath - Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/290075964039714/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/437356904_10223075308488259_8442624015626076772_n.jpg?stp=c105.0.420.420a_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CHXWpiRC72wQ7kNvgHmRob3&_nc_ht=scontent-ord5-2.xx&oh=00_AfDIVYt3hyhA7ta8N0GGqNUBl0ztTNJJYC9DgIyRM331rg&oe=66376076",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.626Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842ca"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 897,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/449933194194602/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440403585_455063850215066_7314023110039654179_n.jpg?stp=c147.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6AGIlvL3ahUQ7kNvgFJrTkL&_nc_ht=scontent-ord5-2.xx&oh=00_AfDO1-aW8Gc1Njelc6wQQyuPg6PArHYlxIg-G0EyNeuTXg&oe=66375EF0",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.627Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842cb"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1490,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1646845649416552/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438032442_1129517971703078_2559819929544387890_n.jpg?stp=c71.0.540.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=a_yHAfpeg7wQ7kNvgFeDt9q&_nc_ht=scontent-ord5-2.xx&oh=00_AfAV_WfH9npQDOZRVDvZdD-1JlKi1ne1FFOem2XPeu2qdw&oe=66377A33",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.627Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842cc"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/466164462433756/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/437497070_10161576838502774_1835632196391787731_n.jpg?stp=c0.67.526.526a_dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dt_VEjRD_doQ7kNvgGFmpXM&_nc_ht=scontent-ord5-2.xx&oh=00_AfA_gQgf8a-80IFoeZVi0XIDw-UElc1R-3tFbigY0MUOSw&oe=66376026",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.627Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842cd"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1500,
        "city": "Longueuil, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1179568400068655/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/438103048_7718538454871193_1455997288557356214_n.jpg?stp=c37.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=y24zifjoZLgQ7kNvgGuHfDR&_nc_ht=scontent-ord5-1.xx&oh=00_AfD0BKCLz_-84jBNd3NXHLjeXHx9Ta96RsGfPbMOCuDNTQ&oe=663762C3",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.627Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842ce"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/808139584556472/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/422664751_414634271460711_7427119800456459367_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=t_fFyFds2iMQ7kNvgGpri94&_nc_ht=scontent-ord5-2.xx&oh=00_AfDWxdxJ5xNwuTixkEDLUa99p8Erfzlo2qWLb-j1NbaGbQ&oe=66377E41",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.628Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842cf"
        },
        "title": "1 Bed 1 Bath - Apartment",
        "price": 1100,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/307056015761757/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/439748439_947462090717955_7714485699984587141_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HHpvUpSESd0Q7kNvgG9vqwz&_nc_ht=scontent-ord5-1.xx&oh=00_AfDStqj1C9X2r3sjZLLZtE0o6DygW_8TKCNkaG-yn41dHw&oe=66375DFC",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.628Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842d0"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1350,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/543529141803700/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/440743348_8128692777144381_2135084632762484505_n.jpg?stp=c0.60.526.526a_dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MsbaJCBl2rgQ7kNvgEX_-zU&_nc_ht=scontent-ord5-1.xx&oh=00_AfA3rANu_nmEAcnitMPO9Z5i-wF1SDv72XsZtQ1Hs1QyAw&oe=6637826E",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.628Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842d1"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1450,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/3787688374837881/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/438059562_10232447857560031_7586258914636888601_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bmQhU9zjN6sQ7kNvgEkXTNC&_nc_oc=AdgzLpwJDQz1rqJoVAiDAZoYum_c0sWbU8arInWXhYFfpu2-9xcopCvmhWMngyu-yrQ&_nc_ht=scontent-ord5-1.xx&oh=00_AfADzA6ePL8uWsObKFFvtFFUYyQWEQCHn9xKUdW_txrADg&oe=66376ADB",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.628Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842d2"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1225,
        "city": "Longueuil, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/304834205993874/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440808815_1862484647588150_882503989629503467_n.jpg?stp=c0.15.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kn3aw9nGE6kQ7kNvgGY-Rmy&_nc_ht=scontent-ord5-2.xx&oh=00_AfBbBEBctHKb3Dxh57gIk60XwIDc64jMX3saisbL_bVSVA&oe=6637615F",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.629Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842d3"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1350,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1464415917486048/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437316801_774472311327470_5050134396238508663_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=CdDypCBFhg0Q7kNvgFEO2D_&_nc_ht=scontent-ord5-2.xx&oh=00_AfAJ6cRv7XgxbynoTNhTYCYOJ__XuaesrUzuMeTjGe3_fw&oe=66378864",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.630Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842d4"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1440,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1125171808756849/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/438838030_6944930758945457_8765653175337347627_n.jpg?stp=c0.78.526.526a_dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EvpZCb8gWwMQ7kNvgF4pQNo&_nc_ht=scontent-ord5-1.xx&oh=00_AfCYoE3QyaVTAq_RoVKT-9TKkVw8LuUr50DXejIjILnepA&oe=66377DD4",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.631Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842d5"
        },
        "title": "1 Bed 1 Bath - Apartment",
        "price": 1200,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/742235201326871/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/439165916_10168675022705082_1942803008664787669_n.jpg?stp=c137.0.540.540a_dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yW3r7hJPaCoQ7kNvgH4hK5r&_nc_ht=scontent-ord5-1.xx&oh=00_AfBj0iagi1rxUyugJKhVIBwNshxfDE6vs4SDw-SsfubbIw&oe=663770BE",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.634Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842d6"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/936338121305262/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/439472709_10161857386453223_3666549913639486927_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=I9XiMEIyNrAQ7kNvgHEVqq4&_nc_ht=scontent-ord5-1.xx&oh=00_AfAOubiV5kFTo3vvdLqccU2v0g58pG5YMrCN1H1lsPKGEA&oe=663772B8",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.634Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842d7"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1400,
        "city": "Montréal-Est, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/444967188217312/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/427595688_7274470212636058_5747608346894401578_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=paLFJIO6K0EQ7kNvgHqAbqW&_nc_ht=scontent-ord5-1.xx&oh=00_AfDy0wOS1hMUC0hDN_XnMFo3IfsLxPRKxIR5ZuswY4PXiA&oe=6637617D",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.635Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842d8"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1193173738710872/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439520752_10225453057372619_62418892930945624_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Wcg64XKyLH0Q7kNvgHObItO&_nc_ht=scontent-ord5-2.xx&oh=00_AfAmXokrSr4bmVX0veXLmw3kCRFD6mr3BkbA-SWUOGIypw&oe=66375CCD",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.635Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842d9"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1450,
        "city": "Longueuil, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/311029935220696/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438163770_8274107205936759_8253174748636201086_n.jpg?stp=c89.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=NbY69GDiOEMQ7kNvgEkkkyd&_nc_ht=scontent-ord5-2.xx&oh=00_AfCANkL9XuddhU48YT8-0sy1ma5Qw4bvCzrAvHPJUU3ftg&oe=66376C35",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.636Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842da"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1395,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/455852003635069/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/439639393_10230115410901736_6992973448565199641_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PJJgWmldVPgQ7kNvgEjCJj2&_nc_ht=scontent-ord5-1.xx&oh=00_AfCfuulx7A6GBjn7bfRgwZBLq8qUZPsF84WNcQBVNTOAEQ&oe=66375768",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.636Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842db"
        },
        "title": "2 beds 1 bath Flat",
        "price": 700,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/411667281723705/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437357631_808843544021158_784411002088471149_n.jpg?stp=c0.76.507.507a_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=DYaAX1IjHlMQ7kNvgHF9fIX&_nc_ht=scontent-ord5-2.xx&oh=00_AfBrJPMCqdWdMMN074qyFqx2jGGrizoG5RHayKXBXh-QgQ&oe=66377D60",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.636Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842dc"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1250,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1149292392983991/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/438246062_1468638964077540_1536016101841402565_n.jpg?stp=c196.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=G64-grD0d6kQ7kNvgF47E2q&_nc_ht=scontent-ord5-1.xx&oh=00_AfCOz1ogCoGuNKoOuOCdsLBF-V-H8I_q3Ci_zOwCvbkpcw&oe=66378606",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.637Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842dd"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1250,
        "city": "Longueuil, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1616899759139653/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436800577_399426482935017_702145272418488676_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=vYXd8-nS0nkQ7kNvgH_JoAA&_nc_ht=scontent-ord5-2.xx&oh=00_AfDwcNol_FhJxe80z7ofNJvIst4JoCaDNvI4Bc1gbM13WQ&oe=663784B8",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.637Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842de"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1450,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/817077626973613/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438032331_435423632565187_4146547296813689332_n.jpg?stp=c0.86.526.526a_dst-jpg_p526x395&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=aNvbl7ztVpQQ7kNvgEyfm39&_nc_ht=scontent-ord5-2.xx&oh=00_AfCW3hI3HqLvvsrxewnqB7oUuvEQm8TVvMleNLDasAWShw&oe=66375E72",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.637Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842df"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1495,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1782958242196983/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436962018_251066188033995_5328899276415454407_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=xQ-AUKfowMQQ7kNvgHTVklQ&_nc_ht=scontent-ord5-2.xx&oh=00_AfDVo8QnouC_wP3Dpajbm-5MkH7kh7CswQXW3F1PQy_WYQ&oe=66375F14",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.637Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842e0"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1400,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/774623914735514/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/434282648_967614881066328_6287928007280056750_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=v2aAz8pjoxYQ7kNvgHgbX1Y&_nc_ht=scontent-ord5-1.xx&oh=00_AfAFvCGXFvmZOSF_5anjLy9oKGSynrUc6hrFgtiVwaActg&oe=66376C4F",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.637Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842e1"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1400,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1163426061344786/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/437348352_1488010878736759_6713546984124479054_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=z97XkhPTkb8Q7kNvgHWzZoK&_nc_oc=AdhtedNDMcejqsng27UWtzVYm9sdeeYPewx0zbSzEEN1VTwtECyJyEZ6ikgMMNaNh00&_nc_ht=scontent-ord5-1.xx&oh=00_AfCTrV2LW_yoA30E42dQcpk04n77DRgRaVPuUFbrSr3UCA&oe=66376D53",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.638Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842e2"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1390,
        "city": "St-Lambert, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1539659413247170/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/437403399_342514385119890_440992882738138233_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=8UQIqdmYBi0Q7kNvgHIb8a2&_nc_ht=scontent-ord5-1.xx&oh=00_AfCGKtnNmeTRrKWEygsvGGtrgjV4CjLaaw-5TGnSRkB-4Q&oe=66375C43",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.638Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842e3"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1450,
        "city": "Brossard, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/441622615029965/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/438221472_10161179151246421_3068447987286817621_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=LnRI_TsqFnAQ7kNvgE3lUQ_&_nc_ht=scontent-ord5-1.xx&oh=00_AfChKbPzhwbWcHAnS09GwqtrvQ6ge_mVIO9ICskoLghcAg&oe=66375AA7",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.638Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842e4"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 750,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/389557684057408/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440253724_460650029739576_917380266343702119_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BjDT-GEw8KUQ7kNvgFXHWU8&_nc_ht=scontent-ord5-2.xx&oh=00_AfB9rH6e7J6GcC_nlSqouJdmAjKPP1HFyahVGzZNZxwXbQ&oe=66377A21",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.638Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842e5"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1300,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1084289639320454/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437039789_1110794706862872_7584614779656863522_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=IZ-sI_kRxpgQ7kNvgGMT2PP&_nc_ht=scontent-ord5-2.xx&oh=00_AfBhhKnQPU1VuOUVP8B8PQnGxhPDLNzznfJhN3j0ZKH-aQ&oe=66375D3E",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.638Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842e6"
        },
        "title": "2 beds 1 bath Flat",
        "price": 645,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1470047020535767/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/439631758_457626233401235_2366800468929738100_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=iLd6lDOlU6cQ7kNvgGRz1QY&_nc_ht=scontent-ord5-2.xx&oh=00_AfDquOf56OF5_iuuUjqu0lz1unmqq4Kum2tBU8UXW4GxHw&oe=66377170",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.639Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842e7"
        },
        "title": "1 Bed 1 Bath Apartment",
        "price": 1495,
        "city": "Westmount, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/407284895532009/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437899672_1122700382117507_6324060860047931295_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=EhX2wtJREL8Q7kNvgGeEtIy&_nc_ht=scontent-ord5-2.xx&oh=00_AfCxX49UGIjfSWBqhRjwfUh4PsBsJhHcCRYwqekzF09Tow&oe=6637561F",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.639Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842e8"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1120795992366069/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/437226713_1208516397198670_7611102392753084849_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=gJ_CmsFWuEQQ7kNvgGvT-Uq&_nc_oc=AdjTJaI-hdg63WxLehY4ohNWPG6EqVh1NH_eXY9K9Jcs2ndIqyZTyrn3SCNnYa57g08&_nc_ht=scontent-ord5-1.xx&oh=00_AfB2qHckcwFK5Pkp1ouiWYlm4Oqebww5vRy49Gx36tq0TA&oe=663779C4",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.639Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842e9"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1395,
        "city": "Deux-Montagnes, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1426013054949407/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438053990_743882651253872_3852115136243517402_n.jpg?stp=c0.300.526.526a_dst-jpg_p526x395&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=j7ETVSt-vocQ7kNvgEF9HUH&_nc_ht=scontent-ord5-2.xx&oh=00_AfCH8biA5wU2nXdKw_x3jfE856iCVshGAOsRK9Qi1AzjTg&oe=66378975",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.639Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842ea"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1050,
        "city": "La Prairie, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1612559972835800/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438306099_938805178026762_8537940586893322807_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=P5DHYLuxJOAQ7kNvgEAdLxr&_nc_ht=scontent-ord5-2.xx&oh=00_AfDp0UZpF1M6hFbZZ27pKV_FlxAYj3PWWCUVd-dU93Egag&oe=66377AB6",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.639Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842eb"
        },
        "title": "1 chambre à coucher 1 salle de bain Appartement",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/300669873078096/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438077246_970776744581428_4535488417295999075_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=pbg99DcPU4AQ7kNvgFnCvK0&_nc_ht=scontent-ord5-2.xx&oh=00_AfBLc9odLcwyHp_FOgPJg3jBxhex5PjDSpK_Gfrf4-Hazg&oe=6637893E",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.640Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842ec"
        },
        "title": "1 Bed 1 Bath Apartment",
        "price": 1350,
        "city": "Longueuil, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/399684282960296/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/436490183_1652315218844093_2306009293821326019_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=sc_ZP1mpSOwQ7kNvgGb0iOg&_nc_ht=scontent-ord5-1.xx&oh=00_AfDHGoc2fapD4y7DVIWKrkgv9Ac_tnMkXvsguwvWkMio-g&oe=66375649",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.640Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842ed"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1400,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/417694690977798/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/439545055_1118366546153384_4436185342518346745_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=SRszrsW0zkMQ7kNvgEX9qpw&_nc_ht=scontent-ord5-2.xx&oh=00_AfD8-6KqeLnjxrfsfN7GyxUacCO0I66YX_JTHDANN5-8DQ&oe=663788E0",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.640Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842ee"
        },
        "title": "1 Bed 1 Bath Apartment",
        "price": 1395,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1096124034793359/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/421630245_7413031672146179_2171327208176411028_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=qK1YFl5uMFUQ7kNvgEiOrfT&_nc_ht=scontent-ord5-1.xx&oh=00_AfCsNdkf9G0cIb-2tvWg2E8RSYbMdTofTGL39QS-O4JQFw&oe=66377F4F",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.640Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842ef"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1345,
        "city": "Terrebonne, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/804048811646919/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437265695_1081251633175606_3149889874642163074_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=jVTjw18krdcQ7kNvgEZgU7b&_nc_ht=scontent-ord5-2.xx&oh=00_AfA3fS88gJKHPKVO0q3jMpWdKx8acV4W70NM1zg8gS7ZVQ&oe=66376E3A",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.640Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842f0"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1395,
        "city": "Ste-Anne-de-Bellevue, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1933451843764667/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440816439_463241522810119_3532702371797928070_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ojQr3FYTJRgQ7kNvgEoNg66&_nc_ht=scontent-ord5-2.xx&oh=00_AfCAnQunbTdtXPw1sGQ1S0i88RHsSgTt0eX6MKyUeL8gXg&oe=663760F7",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.641Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842f1"
        },
        "title": "4 Beds 2 Baths - Apartment",
        "price": 700,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1124392072097088/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440419315_10161389652146182_2998354772466063181_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0wgOpHDSi2oQ7kNvgGeD3h2&_nc_ht=scontent-ord5-2.xx&oh=00_AfAEY0LoTkAvWH5Gajy3bcCNe2UF78TE_L-SrzMhC4J1ew&oe=66377E59",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.641Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842f2"
        },
        "title": "Appartement / condominium de 4 chambres et 4 salles de bain",
        "price": 1025,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/7590600397626804/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/428298299_6982706881856568_6300249088517022324_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=IckmCU8KO2UQ7kNvgHVbbhW&_nc_ht=scontent-ord5-1.xx&oh=00_AfCTpbrSSn5IkBaFxbfGdO5SB2-P4GuRJ0cSbrLtebNMpw&oe=6637678A",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.641Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842f3"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 620,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/448115064438749/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437930581_1498089624393147_4008181696445182161_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=nBzVVYGoVRsQ7kNvgH118WD&_nc_ht=scontent-ord5-2.xx&oh=00_AfAoeSBoptqEKf_-p3J_Qe8uXhExRO1wZ3p_TMbFPvcodg&oe=66376703",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.641Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842f4"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1200,
        "city": "Hawkesbury, ON",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/2153954904951621/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/421973729_3688583791468487_4578018385450668111_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qB1hBnPD3-QQ7kNvgFl2o-A&_nc_ht=scontent-ord5-1.xx&oh=00_AfBXi-mQ89nMJeiIHygQil5BgGIXpUqjQMpJvM7XrYVLXQ&oe=66375AC8",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.642Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842f5"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1200,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/2971737686299714/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/437491625_977539117367588_409832850590377210_n.jpg?stp=c89.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=dupgHLrJXpYQ7kNvgG68uMe&_nc_ht=scontent-ord5-1.xx&oh=00_AfBHTFlOpJ-1ujT7IXc8KxarbpW6fFHXm52F5rYgKr1Q5w&oe=66376F60",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.642Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842f6"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 765,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/376126128194807/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/438037036_2094774794256128_6151365851447024740_n.jpg?stp=c88.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=xH6NpUBGhOcQ7kNvgFaA6Pa&_nc_ht=scontent-ord5-1.xx&oh=00_AfBZv1lzLwxxlCIo6ZU3T4ywPq-vu9XtaxM1ki4X5yHiWg&oe=66378AF6",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.642Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842f7"
        },
        "title": "2 Beds 1 Bath Apartment/condo",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/282726934806628/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/434223591_426081486820813_7152620131968163357_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=HbZr9DWGHTEQ7kNvgFv7VxC&_nc_ht=scontent-ord5-1.xx&oh=00_AfC1hESn1gbbZTDsCeCJW5kDU-9XCkaB_r1OjDFqoEF4dA&oe=6637716C",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.642Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842f8"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 950,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/791716582565008/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/438080320_1960997850969976_4960666214263259239_n.jpg?stp=c136.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=4jC1aOqNl6wQ7kNvgFmuroZ&_nc_ht=scontent-ord5-1.xx&oh=00_AfBjAz8VBiGOwbyCH7HpYG4faykinjoeErN-2CKnxVjcqQ&oe=66377BED",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.642Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842f9"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1568324487083185/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/439708162_1371929057098385_1878529875963904867_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=jh0YJDV7OU8Q7kNvgH91TxT&_nc_oc=AdjDgL3ZSJvpz8Yypc4FwStrUB1Kbw3U0fiuHZIEFzGthxZc3jPeK94Bk-DnIHSi_ZY&_nc_ht=scontent-ord5-2.xx&oh=00_AfCTKN9j2WBQHn37NPaJ4kLqbesBNGZxG71Z5mG4VMyEtA&oe=66376018",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.643Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842fa"
        },
        "title": "Appartement de 3 chambres et 2 salles de bain",
        "price": 885,
        "city": "Longueuil, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1128657695048055/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439197106_7946224862077223_3170654045838471872_n.jpg?stp=c0.202.526.526a_dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-9zWcneZq8IQ7kNvgFCZT9Z&_nc_ht=scontent-ord5-2.xx&oh=00_AfCc4bMQV8aSGMpzkjmq9GGg4L1baMocMvnR69ZP02n4Og&oe=66377E3E",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.643Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842fb"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1350,
        "city": "Laval, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1531839441045760/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438103111_1509175319947080_9062299037515694672_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=VOzTAHbhTGIQ7kNvgGFzoyt&_nc_ht=scontent-ord5-2.xx&oh=00_AfAUHOrASELmEAT1R_Enbyoirndd0d61y2Prme3ww9bHmQ&oe=66377267",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.643Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842fc"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1000,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/321138120780451/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439159219_7686689061374695_9197017665079251793_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OE_9L9YuYD0Q7kNvgGoZweO&_nc_ht=scontent-ord5-2.xx&oh=00_AfC3EZms0Ft83cDtux2v_1Rz48i9aInvH1FsPAziNtmTzg&oe=66377BF3",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.643Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842fd"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 750,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/641406924834451/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440203330_842524904361449_9080251073071986264_n.jpg?stp=c0.74.288.288a_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OxY2Dx08v6AQ7kNvgEoB_eQ&_nc_ht=scontent-ord5-2.xx&oh=00_AfAqEGm1tx6Xg4JQ2ghsZtYv2_maGFxHDLY3mJ6jFfmI_Q&oe=663789DA",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.644Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842fe"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1400,
        "city": "Longueuil, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1136838260858280/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/440959707_10160535993618051_6679401673809315752_n.jpg?stp=c210.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WdINOXxkzEsQ7kNvgGKqk_l&_nc_ht=scontent-ord5-1.xx&oh=00_AfBOogDCcCtPBgW3dXMwQ5peWU-6rVN4F3h32iN-TF2KKA&oe=66375D76",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.644Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d153842ff"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 875,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1113277793245870/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/437197347_921532339770157_8248859033457120601_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=ee5sojKU-2gQ7kNvgGGiW56&_nc_ht=scontent-ord5-1.xx&oh=00_AfC4eAnWX-6IDc_1duHtKCeTAEoVQwlx4nsEVsYaLjETtg&oe=6637889C",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.644Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d15384300"
        },
        "title": "3 Beds 1 Bath Apartment",
        "price": 750,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/797800792232715/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438267815_1371006850249665_8896200062487683133_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=sAh3HlFXY00Q7kNvgHLAvGy&_nc_ht=scontent-ord5-2.xx&oh=00_AfAbNF30IfuvK-pCDkVBQcm75zrYCE_H2IXBcIPB0aneMA&oe=6637734E",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.644Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d15384301"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 667,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1457284521661720/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439070113_294969333653084_1796054458336459722_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AxZ2T6kwnWUQ7kNvgHqXTpc&_nc_ht=scontent-ord5-2.xx&oh=00_AfBjKWsOwRhghsoIiDjQYrTPxiPYLM9DLZQxv_l9VZcqjA&oe=663789BF",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.644Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d15384302"
        },
        "title": "1 Bed 1 Bath - Apartment",
        "price": 1300,
        "city": "Mont-Royal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1580737002773061/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439672336_983228497138017_2133726280491873607_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NuwVFUym2WQQ7kNvgFx-uSv&_nc_ht=scontent-ord5-2.xx&oh=00_AfB1jRxmK8GnYI1-0872uzp7vH0OKbZqBOtXexChtFgBnA&oe=663763E7",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.644Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d15384303"
        },
        "title": "1 Bed 1 Bath Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1533808693863720/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/427109297_1345748219424448_6757859442642532836_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=h8WpRs45dY4Q7kNvgHgo7p3&_nc_ht=scontent-ord5-1.xx&oh=00_AfB6Ang0Qv51XA6quO9luY7E0i4Nrki5vQCxcraOT2yVLw&oe=66376FAA",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.645Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d15384304"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1500,
        "city": "Dollard-des Ormeaux, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1108811420232252/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439104657_949102093887288_8270349794827735890_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oHDBXDOTM3MQ7kNvgGVRdX_&_nc_ht=scontent-ord5-2.xx&oh=00_AfDsHMfKULZHhhMtbIv04vAblq7f0FrsX_ad1jm8yA68JQ&oe=66376CAA",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.645Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d15384305"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1200,
        "city": "Candiac, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/792862579454356/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436768557_751281810471201_185723688705456457_n.jpg?stp=c0.60.360.360a_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=AregkvOd8JwQ7kNvgFt68Fs&_nc_ht=scontent-ord5-2.xx&oh=00_AfCjqxvbvP9pu0dXCDn_gi5uN_jgOgtZ_cwrsqKRkn-X2w&oe=66377538",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.645Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d15384306"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1500,
        "city": "St-Jean-sur-Richelieu, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/819330856911321/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440331039_3614153468847089_7627816231566101480_n.jpg?stp=c0.115.526.526a_dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0CkjA7fJ_RcQ7kNvgGz6kRq&_nc_ht=scontent-ord5-2.xx&oh=00_AfAvkSYTWoS1b0vzpyV7b3YldErSIAzvac936kwea5iLcQ&oe=663765CB",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.645Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d15384307"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 618,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/406169395677265/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/418595050_939982830993619_4064337228154190630_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=cLyh4ujsi38Q7kNvgFYkBqE&_nc_ht=scontent-ord5-1.xx&oh=00_AfC235QZhxGgBTJr8dwNbM6jon5nwucuhGDTu6ufI2vv_w&oe=66377EAC",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.645Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d15384308"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 613,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/678391511042132/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/438118959_10212024744170676_4988449133118346425_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=H47Svm6L5toQ7kNvgH9ise4&_nc_ht=scontent-ord5-1.xx&oh=00_AfDdygDZ3PuG6DMN1I0q3b69Iu0NaXRmE-FATlSVnsF3Uw&oe=66375A37",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.645Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d15384309"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1395,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/792265665814114/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/436681655_1148080482881505_3890757669052432841_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=EeO342gjirYQ7kNvgGOG933&_nc_ht=scontent-ord5-1.xx&oh=00_AfBQ7ui0dxRjBFaLd6AwS4DG7rNF4GbOAvogI4Rhqm4rjg&oe=66377C10",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.646Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d1538430a"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1395,
        "city": "Ste-Thérèse, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/2064359027277349/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/437128866_1135845174277639_7438654028913940287_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=K_2PuKLvB8cQ7kNvgFAG7hB&_nc_ht=scontent-ord5-1.xx&oh=00_AfArZWxiOEFvqc4DLzBzofwPzGaY_m7RGGVcvK30G3fK0g&oe=6637571F",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.646Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d1538430b"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1395,
        "city": "Mirabel, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1640906926719569/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438163794_2421176301603828_4195963156356786092_n.jpg?stp=c89.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=SzrTdytQVlwQ7kNvgHExCll&_nc_ht=scontent-ord5-2.xx&oh=00_AfBSPPbV8oL1LMMKL7Aa9GOWMOXMIFjQswYcQGwAS4_WWg&oe=663774C9",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.646Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d1538430c"
        },
        "title": "3 Beds 1.5 Baths - Apartment",
        "price": 1460,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1471686813422337/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437095122_766431758970504_2345143187665839759_n.jpg?stp=c0.6.526.526a_dst-jpg_p526x395&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=-vT6pmstHFoQ7kNvgHte49e&_nc_ht=scontent-ord5-2.xx&oh=00_AfAefZGJMMOJFFsnfxMppFSTlI54Qv_cBuuNPr59bpORrw&oe=66377673",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.646Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d1538430d"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1075,
        "city": "Repentigny, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/314253274853463/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/438100864_10224837061698122_6375365809112045167_n.jpg?stp=c0.33.295.295a_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=FyCdOvadwhsQ7kNvgEsWIeK&_nc_ht=scontent-ord5-1.xx&oh=00_AfCCORNYYEKYYYUcQsIMDb7mv9anmS5fPNndnnHpaNyfmw&oe=66376ADD",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.647Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d1538430e"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1200,
        "city": "Mascouche, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1347019852519818/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/424917518_1149738932878091_7260742955363473155_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=JQNeUai5Tp4Q7kNvgGr4uul&_nc_ht=scontent-ord5-2.xx&oh=00_AfD5G-ehasERMsPCnhc9VrVXWig8c7s7c20-nX-9xP31tg&oe=66376511",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.647Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d1538430f"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1350,
        "city": "Laval, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/727108619502084/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439966331_10227351019106581_7934499471645649558_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BXy0zvCk3zwQ7kNvgEz4FCK&_nc_ht=scontent-ord5-2.xx&oh=00_AfA8UKY-Ugs8dFyNriKELoHchnrQY2PVpOu76Li_8TmL8w&oe=663761AF",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.647Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d15384310"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1400,
        "city": "L'Île-Perrot, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/704191921734646/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437271759_801535711874591_7152712978965347987_n.jpg?stp=c0.0.526.526a_dst-jpg_p2048x2048&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=FMjkdLxYinIQ7kNvgFO0IwX&_nc_ht=scontent-ord5-2.xx&oh=00_AfDTGV1irIHATzeEJTR4JEPsuCrErppNxTyUZWlNOdViCQ&oe=66376D4C",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.647Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d15384311"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1295,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/393494796845119/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/437214289_975858370774482_5576973524896239883_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=kI8sP8xynqYQ7kNvgHpJJCx&_nc_ht=scontent-ord5-1.xx&oh=00_AfDUvWQgJUss7pYtDoNI9k7OvOnerNBIpYURuO1AyrbMQA&oe=66378B98",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.647Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d15384312"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1000,
        "city": "Beauharnois, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/964852772020930/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/440150729_1845544149202034_3174257052467216893_n.jpg?stp=c91.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=syE1XZhVeDsQ7kNvgG5_2uZ&_nc_ht=scontent-ord5-1.xx&oh=00_AfBZmkvayk880coDQvKxRHRV-TZ-smMGtbROZ5J1g2ARXA&oe=66376F3F",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.647Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d15384313"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1075,
        "city": "Vaudreuil-Dorion, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/2209162726142710/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/440991140_10168420014480702_2783624423317265789_n.jpg?stp=c112.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OUrtbulZHdcQ7kNvgGIKa53&_nc_oc=Adg5c8N0OD2bkhnzVLVe-n8PGqabTpDuDQ3iOd3I8Zuk0hmJgW_gkkMRbcva6citEhI&_nc_ht=scontent-ord5-1.xx&oh=00_AfBc_bU975mxwUHnDPpjFHf24FUIk2y0IGSmVi4gXAWq4Q&oe=66375916",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.647Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d15384314"
        },
        "title": "2 Beds 2 Baths Apartment",
        "price": 1200,
        "city": "Repentigny, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/401425822790016/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/436526310_771338208072805_5166443798284907492_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=Y7yi7VlE5QsQ7kNvgEbIbSJ&_nc_ht=scontent-ord5-1.xx&oh=00_AfBbWiU3vBW-BDWyFwhmEdaZMSEtW7YHeKDZ4zscRUyifQ&oe=66376D1B",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.649Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d15384315"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1120,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/7720772184638856/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/435149039_2431283740405969_8886171488154349746_n.jpg?stp=c0.0.261.261a_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=BbcXLs80FqgQ7kNvgFvqodK&_nc_ht=scontent-ord5-2.xx&oh=00_AfC8bYALyxK_mON8GFu2MfdqZQlHKCaCdbDkmT5uqXvy4w&oe=66375952",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.649Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d15384316"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1475,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1499706760757537/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436876489_404537865729167_3949003765845638789_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=vzBpPiAl5nsQ7kNvgH0URO3&_nc_ht=scontent-ord5-2.xx&oh=00_AfA-aW28p1zv6CVzKm8R1W-OP06aADwpS4MTd7ZQ2isVKw&oe=6637698B",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.650Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d15384317"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1450,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/454937763651022/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437106601_1137223830858828_4697885067835234424_n.jpg?stp=c0.132.526.526a_dst-jpg_p526x395&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=zFv4SnX5GjQQ7kNvgFgfV1x&_nc_ht=scontent-ord5-2.xx&oh=00_AfAlUaxU8HAnjAdHm28akH2h4B-rKQjaD2xX9UDYlVsF2Q&oe=6637732D",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.650Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d15384318"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1200,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/415890671161163/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/435110278_2702531109913597_1699950733830872799_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=N0BIUxS7z6oQ7kNvgH6oMda&_nc_ht=scontent-ord5-1.xx&oh=00_AfAv_5PcIp6FwFuVw60kvbSiKjPn4Zr6t9F9njrajt7TDA&oe=66376A18",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.650Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d15384319"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1305,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/977912697230574/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/436455900_1128944211463469_1485101302544566590_n.jpg?stp=c0.11.518.518a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=trFxQs3vNGMQ7kNvgGDu9HP&_nc_ht=scontent-ord5-1.xx&oh=00_AfC3hKn_IqGRDByVyB2gKzdNRhi1dTvW0EYLk2gv6qHhbQ&oe=663761C5",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.650Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d1538431a"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1400,
        "city": "Sorel-Tracy, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/411193458402733/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439200111_10164580559908647_391657211037450316_n.jpg?stp=c0.203.526.526a_dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KGeIS4OjGn8Q7kNvgEE01UH&_nc_ht=scontent-ord5-2.xx&oh=00_AfAzTgSfwv4nMHDGC8w68sKoqtLGetL2QT3IEAbPlPEsBw&oe=66377651",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.651Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d1538431b"
        },
        "title": "Appartement de 1 chambre et 1 salle de bain",
        "price": 1453,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/3281414542160118/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/437561145_7736637606358382_1772123056710684755_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vZ2UqNuuJH8Q7kNvgFdwxPu&_nc_ht=scontent-ord5-2.xx&oh=00_AfCdudftmFU-Xphai0L6pThmeXxzkNxQvts3IiLKUEkZ-Q&oe=66378111",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.651Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d1538431c"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1388186975915345/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/436488731_7805376446163033_5473775170262049177_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=B4nJi1pOv64Q7kNvgGgfuCq&_nc_ht=scontent-ord5-1.xx&oh=00_AfCCzthVkWgvgTiqK8-DE8fu2s1plmUqeuJrsnlaJu9Kig&oe=66378350",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.651Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d1538431d"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1450,
        "city": "Dorval, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/468308852293499/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/424985025_817120703088474_972486180632366358_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=D9YcBkm_GMcQ7kNvgHier_b&_nc_ht=scontent-ord5-2.xx&oh=00_AfDfVpGLrJ1wyVjraYijwUkbWKjDkj9OQ_aWBW7762t99w&oe=66377D44",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.651Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f433c03e20d1538431e"
        },
        "title": "1 Bed 1 Bath Apartment",
        "price": 1250,
        "city": "Côte-St-Luc, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/960995718529531/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436924317_1355259381776826_9026759153584348882_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=EaeNEfLdX_0Q7kNvgERibQB&_nc_ht=scontent-ord5-2.xx&oh=00_AfApKEmhBp52MWH5tCkFwz-jCQQI9H7CwvNzV7v_-63AbA&oe=66375F41",
        "date_scraped": {
          "$date": "2024-04-30T21:47:47.651Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538431f"
        },
        "title": "3 Beds 2 Baths - Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/2137395246633437/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439943046_1577982586385611_480687150074746446_n.jpg?stp=c86.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jdM26sBfPQoQ7kNvgFHY4s9&_nc_ht=scontent-ord5-2.xx&oh=00_AfCDT8T6UHBV7ZNQz9VEuAPlEZ81StwYmsvAWlO2fMrk2g&oe=6637565D",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.336Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384320"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1795,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/358916153849336/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/438131641_750585576888965_4383301743528376503_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=Do8beFyQsDsQ7kNvgHjBwyI&_nc_ht=scontent-ord5-1.xx&oh=00_AfBhWae_O19BZntMS8-fLBMuwo1-lW_MxW9oFu14IwexyQ&oe=66378098",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.338Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384321"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/827417419257852/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438037053_2073017376411415_4056703235568640297_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=29i__z8l7KEQ7kNvgEmdcyU&_nc_ht=scontent-ord5-2.xx&oh=00_AfAtbpCJTAaeB5ezsq76iKaTXrb5P0u0Ltz-20lmnYHwfw&oe=66376D37",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.339Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384322"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1650,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/2324462887890121/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439467692_7476221935799121_1258108139768621258_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qsWWijo7Kg0Q7kNvgHjyZnX&_nc_ht=scontent-ord5-2.xx&oh=00_AfCJWk8hkHs0dFTjdGxGiGNeBElqe4LqkX36AORrfqCcIg&oe=6637776C",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.339Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384323"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 2300,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1626393208134631/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436525538_1160861048443417_5186737470360870492_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=th3t3xPdFkgQ7kNvgEwLSHv&_nc_ht=scontent-ord5-2.xx&oh=00_AfB9KZYEV4oesCAypwOYOkcpt3AMS_qy0d4uyN9lsPzRyA&oe=66378669",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.339Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384324"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1800,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/459604329800128/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440138193_3368305466792907_4007627699914966504_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Xy_lFv6YVh8Q7kNvgEhSTUz&_nc_ht=scontent-ord5-2.xx&oh=00_AfAyt6G-5AOShP5k2kpfNSSBJrdgPc-S1UEQlaGcbAFVxQ&oe=663767F0",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.340Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384325"
        },
        "title": "2 beds 1 bath Flat",
        "price": 2150,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/816769723628244/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/425644187_952788796169902_6232228535454312529_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=VlovegU4Rv8Q7kNvgHu9t21&_nc_ht=scontent-ord5-2.xx&oh=00_AfA5Cf8_u6yj1Vnvtn1frbh3wtB7Vg7WBPSlIou-f3mYUg&oe=66376DDE",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.340Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384326"
        },
        "title": "1 Bed 1 Bath - Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/290075964039714/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/437356904_10223075308488259_8442624015626076772_n.jpg?stp=c105.0.420.420a_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CHXWpiRC72wQ7kNvgHmRob3&_nc_ht=scontent-ord5-2.xx&oh=00_AfDIVYt3hyhA7ta8N0GGqNUBl0ztTNJJYC9DgIyRM331rg&oe=66376076",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.340Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384327"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1550,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/3145364815596416/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/436298156_350612771320224_7991215820264805231_n.jpg?stp=c0.80.480.480a_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=5E4xZzS7SsYQ7kNvgGR0KNE&_nc_ht=scontent-ord5-1.xx&oh=00_AfDqnVfWM2FrNz4iKUqOJE0GztiFmgIb1krdMoRtRu5XUQ&oe=663775FC",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.340Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384328"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1800,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/959211432517897/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/440408467_25727978856816262_1852989693861105458_n.jpg?stp=c217.0.394.394a_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rdfuGxX_vdAQ7kNvgFazBA6&_nc_ht=scontent-ord5-1.xx&oh=00_AfCOWIAoZIUE6Q9DfjOFBiKE1AaYlhSwJhVobitMU0T2jQ&oe=66376B22",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.341Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384329"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1960,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/2971337289673055/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436802811_1120036772374454_20040742947734005_n.jpg?stp=c0.204.526.526a_dst-jpg_p526x395&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=_9uS7dCRdJEQ7kNvgGIQwUE&_nc_ht=scontent-ord5-2.xx&oh=00_AfD2MNJ1s68kt8b3DKkZmckeeXmitAnfsdpuRkAX0GCF_A&oe=6637675E",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.341Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538432a"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1850,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/757399369816182/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/437284757_814575804024744_785778557472631587_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=joI0DwRinCIQ7kNvgGSswfT&_nc_ht=scontent-ord5-1.xx&oh=00_AfAIuNVzqm2k9Nyrd7xW5fkYh6fWFS8YVF3LkeOqiIyjnA&oe=66378A7F",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.341Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538432b"
        },
        "title": "2 quartos 1 banheiro – Apartamento",
        "price": 1750,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1111758683433861/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/438302460_10160452700529563_4553527963384097320_n.jpg?stp=c106.0.428.428a_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=K_SY111sAsYQ7kNvgFGKBru&_nc_ht=scontent-ord5-2.xx&oh=00_AfAAL2van_7XFWj3sdWElL9EO-r3ESBFrIbaGrffBf1s1A&oe=66375894",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.341Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538432c"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1943,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/737873268500208/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436570421_948363563740543_3123760272021984558_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=ZQQCx0cEvCQQ7kNvgEwnaYH&_nc_ht=scontent-ord5-2.xx&oh=00_AfAKU_ugHWNa1KgZJMipQ7WOfFqj3n9MTyDl3iZ4P_3ZsA&oe=6637854C",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.342Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538432d"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1595,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/949053026886751/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/437081883_1171305357222002_8411811757271884465_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=ILkzRz4Djb4Q7kNvgEPN5D2&_nc_ht=scontent-ord5-1.xx&oh=00_AfD0m7QUbO7PIHNpTNG_kbukwiV4cIIwb39XanRT1y6Sfw&oe=6637859B",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.342Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538432e"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1675,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/2097714490603984/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/437195948_414289061557251_4000290671055061498_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=IosPWMKbU0QQ7kNvgFgpzlO&_nc_ht=scontent-ord5-1.xx&oh=00_AfABrYD5GfwdFFqq6BRt4rQXuoXzKoQKD2h29JkrfTq_Mg&oe=66375A3F",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.342Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538432f"
        },
        "title": "2 Beds 2 Baths - Apartment",
        "price": 1850,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1884637455290769/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/438884813_1210352860335531_4814421133018608069_n.jpg?stp=c0.55.526.526a_dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=T2YxvrmkiZsQ7kNvgEDCise&_nc_ht=scontent-ord5-1.xx&oh=00_AfAOASXPWHDzFJjoq7G1IRj7uqHRQi4d1TNeFwAg5U8efw&oe=66377AC6",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.342Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384330"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1650,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/957264255898310/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/438155978_1088364169128457_2846334933114301850_n.jpg?stp=c0.106.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=1mwMVYq3oXQQ7kNvgHTxXJ2&_nc_ht=scontent-ord5-1.xx&oh=00_AfCMly6dR_Wj-J6ox6vWhADFD0Bj0KyzVgBS3tODE-CJag&oe=66376312",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.343Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384331"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1895,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1815045742331023/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/438081855_122134496564232177_4656403185525098823_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CMelVwEqXncQ7kNvgEDWJNO&_nc_ht=scontent-ord5-1.xx&oh=00_AfA2aV3OKdbxnhTr4sjn0VYkYzdovBhWVwgRavhFPr0Q4w&oe=66376822",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.343Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384332"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1850,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/7519471151454232/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438303499_442387921532097_6542742340894304618_n.jpg?stp=c96.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=mVI-Px-lsgUQ7kNvgHS9R3w&_nc_ht=scontent-ord5-2.xx&oh=00_AfB8SbcsNkat6PT6M88ady_u1TAgMkq_qDNCoMV3h4vmYw&oe=663757DF",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.343Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384333"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 2009,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/3826680557572695/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/440036447_10169197628910226_1351965848265231028_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8d-HKqJNS5MQ7kNvgGkDs8n&_nc_ht=scontent-ord5-1.xx&oh=00_AfAo7gp8prLLPL9eh4KmbZK-W34eJFxauYNqUUpFuRL0uQ&oe=6637630F",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.344Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384334"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1999,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/746826067642502/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/436752994_1191626072244848_6070266063389626129_n.jpg?stp=c85.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=0RpOvt6LqysQ7kNvgH_10IK&_nc_ht=scontent-ord5-1.xx&oh=00_AfBdgXzs_IVsojGPkcD4cZ65OPw9x1_pdUjsAR1F_i8nfQ&oe=66377E94",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.344Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384335"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1550,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/950298946760274/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/436816621_1083207116114455_706698869644405968_n.jpg?stp=c0.300.526.526a_dst-jpg_p526x395&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=wKDs6PJKjR8Q7kNvgF0nmgK&_nc_ht=scontent-ord5-1.xx&oh=00_AfBHNJVhAK4KHIwbi3GzfB2ImmYoZYkHRg9zFiHyh0TO1Q&oe=663761B8",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.344Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384336"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1600,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/3440685216226337/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/439702155_342811561746685_9160358947732593730_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=-qDfIWlNH9gQ7kNvgHwpGPB&_nc_oc=AdiBudXxJsvnQOPMYAvvFlQbwlEhnpyulcjHmgpleF4I_sECFGNeV9Gd1LNc5EW-syQ&_nc_ht=scontent-ord5-1.xx&oh=00_AfCUvjL8Do37r27PCxlX0eTb7JHhmEZfO_7hb60QQeUHFA&oe=66378C0A",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.344Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384337"
        },
        "title": "1 Bed 1 Bath - Apartment",
        "price": 1550,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1192722455227990/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/438837845_26157055480548479_1481392553518390240_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1GJJExF3gh4Q7kNvgEfb37S&_nc_ht=scontent-ord5-2.xx&oh=00_AfBsgecV2lF202bBIvHe8sxz7AVSXKSplNKya4pdrRpITg&oe=663776A5",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.344Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384338"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 2000,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1710358999495278/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438155003_437999515445755_6348931269833394172_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=hsLjqJeEhi0Q7kNvgHe55sa&_nc_ht=scontent-ord5-2.xx&oh=00_AfBGcPytx4n86hCq0PejfXz5tEHhH90uQfuwI_EOwyDLYw&oe=66378807",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.345Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384339"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1800,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/996883038448558/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/439021448_122131479806232177_8804476798612234800_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GyeTYm1ZWuoQ7kNvgGlg8Bx&_nc_ht=scontent-ord5-1.xx&oh=00_AfBJ756e6CHbKi2x2wJyQIp2zvYjoMs-8NgvuyakbAT3Ng&oe=663782E6",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.345Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538433a"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1900,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1154343948929047/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/394460969_24299875669626545_8886329280975075664_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=JC4cwbm9N4sQ7kNvgHVdO3Q&_nc_ht=scontent-ord5-2.xx&oh=00_AfDdlbaVgwNO5PioDm1cyTqWlgZJHPIqt_D_mhfSixT3Pw&oe=66376B05",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.346Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538433b"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1500,
        "city": "Longueuil, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1179568400068655/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/438103048_7718538454871193_1455997288557356214_n.jpg?stp=c37.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=y24zifjoZLgQ7kNvgGuHfDR&_nc_ht=scontent-ord5-1.xx&oh=00_AfD0BKCLz_-84jBNd3NXHLjeXHx9Ta96RsGfPbMOCuDNTQ&oe=663762C3",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.346Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538433c"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1570,
        "city": "Laval, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1084781399282587/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437034501_264468933326959_3157729054892330247_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=zjJuTpceLd0Q7kNvgHXQI7y&_nc_ht=scontent-ord5-2.xx&oh=00_AfBpqwtstd-eL5iCEAY65gH9vUB2dBh8ySAisKSTQsQM8w&oe=6637754C",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.346Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538433d"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1700,
        "city": "Côte-St-Luc, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/695488302614068/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436887143_738204635050999_1155923567357425997_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=h84J3Kh7xfsQ7kNvgEE2iLl&_nc_ht=scontent-ord5-2.xx&oh=00_AfD5a3rmm1vbBWOe_zBK_3BH8oUVyNYC_offwp3Ln1TdWQ&oe=66378ADE",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.346Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538433e"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1916,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/372200659134279/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/377745694_6664179093670901_3313202194819881424_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=X1rk8Rv-O8cQ7kNvgE4gi4F&_nc_ht=scontent-ord5-1.xx&oh=00_AfDE0M_hkAJrrar9aSm70m-vsU-AxB-A-CLJbNIOVmgDAw&oe=6637665F",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.347Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538433f"
        },
        "title": "3 Beds 2 Baths Apartment",
        "price": 2400,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1118684079373444/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436804658_446125734737440_7796579779626434937_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=TrC1JIiF28YQ7kNvgFvCExH&_nc_ht=scontent-ord5-2.xx&oh=00_AfBeAgKViYla6XxlMVNG9BjFNrfz6ZBfCFkedeSS2H665w&oe=66376650",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.347Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384340"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1580,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1463847500884017/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438163573_929965885578483_1432282286801254228_n.jpg?stp=c330.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=NRcxrQ8OsIAQ7kNvgH3LERX&_nc_ht=scontent-ord5-2.xx&oh=00_AfAYUJZ117j8xywEtTl48iZzfLkrVqcpFp3Z-q6Dmb7YBw&oe=66377928",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.348Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384341"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 2050,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1151816192488537/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/428211812_8099771840052555_1794508151498334962_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=pew8zTsiamkQ7kNvgHvHX0A&_nc_ht=scontent-ord5-1.xx&oh=00_AfBx6_bJVV2ztSV_eCAhyWDEQED8MKDzKDLWGH61sjuzfQ&oe=663785C3",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.348Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384342"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1595,
        "city": "Longueuil, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/310153808773453/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/438275173_2196525304015168_5698945178704592972_n.jpg?stp=c209.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PndMcWPXqn0Q7kNvgHBv3UC&_nc_ht=scontent-ord5-2.xx&oh=00_AfBLTK9vZ1V8XlR9XwAapCdw_OjGwl42pnrvIkFuWqAlFQ&oe=663788A1",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.348Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384343"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1600,
        "city": "Laval, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1125484345172881/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/437409662_465837712463363_5179788264967430403_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4Vo6cAsvGXcQ7kNvgHMHP9r&_nc_ht=scontent-ord5-2.xx&oh=00_AfCLgonxrSKbpeSEPrk4QlRl6BDpvllc26a8245dr1nxAQ&oe=663782AD",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.349Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384344"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1595,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/452816747411116/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439431877_456628040237442_4084241030645761339_n.jpg?stp=c54.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=p8jzt-PCGh0Q7kNvgFBGuA0&_nc_ht=scontent-ord5-2.xx&oh=00_AfAMsZB9jQczeQ9cUSNF7ftU55gqXm3jpyzj3nbcn9jBfw&oe=66378534",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.349Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384345"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1800,
        "city": "Laval, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1176968023465005/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437333629_283000854867520_1367546969424896057_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=LV7z-2gpdGAQ7kNvgF-9g8c&_nc_ht=scontent-ord5-2.xx&oh=00_AfC8mznIzWtT87sJ20jYrlL8FqNhq0xQbDFfJ47ZeJx0Tw&oe=66377DD9",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.349Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384346"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1750,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/291267574034545/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/418787812_959857635436484_5751648200223338959_n.jpg?stp=c85.0.421.421a_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=GwLXFC52BfUQ7kNvgE9FqV_&_nc_ht=scontent-ord5-1.xx&oh=00_AfBVIdNueB0KO1sV1_ktDm-YY284GdLOpv7-DmzxnQjjXA&oe=66377F35",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.349Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384347"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1725,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/446417367878227/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/441044523_122134487780232177_5076003251812804252_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=avi_cSMV7G4Q7kNvgHabVr5&_nc_ht=scontent-ord5-2.xx&oh=00_AfBg2XYDO6BglS5cQ6O-zqRcaIDWkQhYqZ1RACspFiuSPA&oe=66378AEA",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.349Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384348"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1585,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/3773689796183630/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/438785349_309694982158065_7523787378853882730_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=SOFEXPUd6dYQ7kNvgETmIxb&_nc_ht=scontent-ord5-2.xx&oh=00_AfBSY-3OL81GYzJ9BCLOUaQEYZxwD-gNzJJ1Hjz1p1XGrg&oe=66375BB8",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.350Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384349"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1729,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/452121860540794/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/375507908_6674995172546388_5783982981630329883_n.jpg?stp=c210.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=ObhZjCw44PAQ7kNvgH8nML9&_nc_ht=scontent-ord5-1.xx&oh=00_AfAFnKTowazu96SmA_lH1fLDre7Vtf1wJZY792jhzAS0sw&oe=66376685",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.350Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538434a"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1950,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1152601379408293/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439227176_10161175351784501_7496264021820202466_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6u1ldnTB1EwQ7kNvgHs1Xxi&_nc_ht=scontent-ord5-2.xx&oh=00_AfAeOUsoxMSPBjyQxjj7jVGAQZgOdu-IqwwY8fDFv3ohjg&oe=6637770D",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.350Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538434b"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1825,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/953198382795507/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/440962012_1110967010132683_5268735118682435117_n.jpg?stp=c0.57.526.526a_dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pGLRC0fr-3MQ7kNvgFTc0Dw&_nc_ht=scontent-ord5-1.xx&oh=00_AfCDqGG08Rly2mVNLj_cdu0aP2OxWYhJq6THTCo0aA47-g&oe=66376A26",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.351Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538434c"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 2495,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/961173148671347/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440973949_408221251974867_5058216274271042150_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=SMBCSlAFKAkQ7kNvgEQcBLS&_nc_ht=scontent-ord5-2.xx&oh=00_AfCNp7iatQrf84VBKVztbj96SNa62GLAogweX66ZfJs4Gg&oe=66375785",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.351Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538434d"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1950,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/755010850032767/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440238932_2098219387229261_4750644122749203804_n.jpg?stp=c0.40.360.360a_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6RDNJjUT9SUQ7kNvgHdWvi3&_nc_ht=scontent-ord5-2.xx&oh=00_AfDNRd09G-Bp2nMZ129zMIDWfIKqcu58JjszXeWDE8nQgg&oe=66377DE3",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.351Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538434e"
        },
        "title": "2 Beds 2 Baths Apartment",
        "price": 2940,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/2697648313742902/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/438267859_1668186277336180_6277992009792064618_n.jpg?stp=c128.0.509.509a_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=rHmv7VXAiDAQ7kNvgEqzIg5&_nc_ht=scontent-ord5-1.xx&oh=00_AfCb8v4dXuFiXJXHCV5DdMEUzdltyw2-EvfXpp8OcOmPXw&oe=66378BB8",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.351Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538434f"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1700,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/2061272730921808/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440753155_10226879721439289_8048737022822317656_n.jpg?stp=c0.59.526.526a_dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jcmKBAIdd6YQ7kNvgHcKdLq&_nc_ht=scontent-ord5-2.xx&oh=00_AfBM7HHH8i8LpMXfrdMmYXNYeljti3_kofsAtd3T7A4KNg&oe=66377F98",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.351Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384350"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1800,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/400350402841881/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437546543_1745943379229227_2934257309610131056_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=-7UgRMyjQc4Q7kNvgHYwXvu&_nc_ht=scontent-ord5-2.xx&oh=00_AfDwRfzvU0KFPllB5YD5Pa28rVWbEBtYTIPrEncDr98AUQ&oe=66375C64",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.351Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384351"
        },
        "title": "1 chambre à coucher 1 salle de bain Appartement",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/300669873078096/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438077246_970776744581428_4535488417295999075_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=pbg99DcPU4AQ7kNvgFnCvK0&_nc_ht=scontent-ord5-2.xx&oh=00_AfBLc9odLcwyHp_FOgPJg3jBxhex5PjDSpK_Gfrf4-Hazg&oe=6637893E",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.352Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384352"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1700,
        "city": "Côte-St-Luc, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1468694324056260/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438036919_959306919194768_2714340579718610519_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=4Gz2Ls7MMtwQ7kNvgEDI-Ml&_nc_oc=AdjZEu_9sYuQs5DcVisCoUziTtv19M7WmIfqqJ3AYwwIeiSPPjBwkfb9Rsi3Lt6TA2I&_nc_ht=scontent-ord5-2.xx&oh=00_AfA1Kr3YARhvB9CD6oqLLKfahhm7G392vi6Rp28WY7udlQ&oe=663772A2",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.352Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384353"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1650,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/2252849448394778/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437226717_773583221396147_3088567256668227586_n.jpg?stp=c38.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=gRjBeRkFjmMQ7kNvgGIMnMm&_nc_ht=scontent-ord5-2.xx&oh=00_AfBtfclcGciOuNcHXnnKo2Te5iAOecbyu5utZltr-fh2yg&oe=663762B3",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.352Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384354"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1890,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1026261006164670/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/436816611_2166318187034555_5579366784952029938_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=HYFSAmpquTIQ7kNvgGsLSUk&_nc_oc=AdjRlWOX_wrmpJf4kXSN9aV8k1AoqC0ptnTUX1QSz3e3WxRsI30_nafjPB5xpGC0Spk&_nc_ht=scontent-ord5-1.xx&oh=00_AfC1oe1VyGRKJjng1hcvxmvoQg_t0gR46PhIeg9aZPsLSg&oe=66377304",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.352Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384355"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 2200,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1400919230539625/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/440886891_10161049095716928_4621666083162118847_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=I1s9o1vr_cUQ7kNvgFKw7G3&_nc_ht=scontent-ord5-1.xx&oh=00_AfBW00nZxnRv-Ett2O_voyFbXgBUl3Os_PlmxAZuCjt0cQ&oe=66378991",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.353Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384356"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/808139584556472/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/422664751_414634271460711_7427119800456459367_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=t_fFyFds2iMQ7kNvgGpri94&_nc_ht=scontent-ord5-2.xx&oh=00_AfDWxdxJ5xNwuTixkEDLUa99p8Erfzlo2qWLb-j1NbaGbQ&oe=66377E41",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.353Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384357"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1750,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/434843399154732/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/427124802_1600553677434236_1731608953212179793_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=suk1gyxEv3kQ7kNvgE0T15U&_nc_ht=scontent-ord5-2.xx&oh=00_AfB4wkIOkcUaOphTSr35s93F1Fs7X4XA5tndp6qMfaqasw&oe=66376D1E",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.353Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384358"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1750,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/811312937035770/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440751833_10231957858360163_7235637514448236510_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BflPrQ_rRhIQ7kNvgGhVxH6&_nc_ht=scontent-ord5-2.xx&oh=00_AfCzTOXjCOEwse57kQrj6INfkH8QbB4QAiIWHcSPivniuA&oe=663756AD",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.353Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384359"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1650,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1655299181673154/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438163489_740410408297310_3888964667096763934_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=xcO9gxBkJlwQ7kNvgGuEc0r&_nc_ht=scontent-ord5-2.xx&oh=00_AfCBvJd4imCsI62w-TGq9Bmc3_O9y5j9Fv7Tq26Ml9Qarw&oe=66378A1F",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.353Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538435a"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1970,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/309570068839650/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/438224666_7265682063526895_5193842988488448211_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yur-ZLqnxoQQ7kNvgHN_OCU&_nc_ht=scontent-ord5-2.xx&oh=00_AfDAkokduq6n5imi9FCS8x5JY6eOpKXgWbmpB_qA4sB4Hg&oe=663764DA",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.354Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538435b"
        },
        "title": "2 Beds 2 Baths - Apartment",
        "price": 2500,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/469704062061716/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/441239033_122120643518262519_3619125055193214995_n.jpg?stp=c0.202.526.526a_dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RNC97eoivEIQ7kNvgF0Z1ge&_nc_ht=scontent-ord5-2.xx&oh=00_AfC3iYaW9wRYGBQDVZ675E0m_a9qrRCQRQfIroHehxO-0Q&oe=66377FC2",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.354Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538435c"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1905,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/6820145848086559/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/438032485_948626146983993_2396841133366728937_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=18Ab4Wdmmp0Q7kNvgH1Xdq7&_nc_ht=scontent-ord5-1.xx&oh=00_AfCZQdXpP_Frs6kNNpaJltcx0BBVJ-03RQtLTl7nlGg_vg&oe=66376F3B",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.354Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538435d"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1950,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/325414553631051/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/435823368_365470662566962_6348987649776438731_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=O0z9D3oNcOIQ7kNvgHG9qFe&_nc_oc=AdhHRGNQI77JhX8tP6H6AdRUD2vWNS-oQIjcBIBvH3a46ZElz6WnOO7TZCUpNMKB3Gk&_nc_ht=scontent-ord5-2.xx&oh=00_AfDQJTPaFwOFpLwkQLMnkHQDBCZZ2FE0UrRMA_lPJGyG2w&oe=663771ED",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.354Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538435e"
        },
        "title": "Appartement de 3 chambres et 1 salle de bain",
        "price": 1550,
        "city": "Longueuil, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1228848481410417/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439338734_3646321485621829_5856615791035870297_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4OfzPUSZhwoQ7kNvgEdZ3JU&_nc_ht=scontent-ord5-2.xx&oh=00_AfB4UgxA4XEWUPkX5oF6jDjSdfKWxpYSWivU7B-_2PxQiw&oe=66378CB3",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.354Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538435f"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 2185,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1383011092267898/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/424954670_1149078056438617_8502979253950393476_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=nHaYIY_vvG4Q7kNvgFmFO35&_nc_ht=scontent-ord5-1.xx&oh=00_AfB6xcvtXuDtCqvH2p2Tpy8WVqtwFJtu52-cmCPZmn6h4A&oe=66377F01",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.355Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384360"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1879,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/421128893957657/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/435651543_1177274866975184_3374278984604004252_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=O7JMgqL5BtYQ7kNvgGpb2zv&_nc_ht=scontent-ord5-2.xx&oh=00_AfCHqgknQH1zVgTAoPZf8y1mNGjSra8NlxnZEbb_SnWcXg&oe=66376485",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.355Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384361"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1193173738710872/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439520752_10225453057372619_62418892930945624_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Wcg64XKyLH0Q7kNvgHObItO&_nc_ht=scontent-ord5-2.xx&oh=00_AfAmXokrSr4bmVX0veXLmw3kCRFD6mr3BkbA-SWUOGIypw&oe=66375CCD",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.355Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384362"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1800,
        "city": "Vaudreuil-Dorion, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1401733741228189/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438039116_289085920959291_4063160167433110128_n.jpg?stp=c210.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=arfXyTdtspEQ7kNvgGrChik&_nc_ht=scontent-ord5-2.xx&oh=00_AfAEDDFQv-ScjJWOjbpIHIGH5VrIXsvA_a2YOjjYy2avDA&oe=66377337",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.355Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384363"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1650,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/957172445868557/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/437933886_408580795441736_4065374892855254959_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=gQacrICyJ5wQ7kNvgEadUG1&_nc_ht=scontent-ord5-1.xx&oh=00_AfDMd5XNOKEuV33LELfe2Mj3t76pSptdYIOprEFu0y1KBw&oe=66378471",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.355Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384364"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 2900,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/381996491502932/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/439849436_977836527385332_7642940413937867792_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=4E1UDo0eQFUQ7kNvgFX5QKk&_nc_oc=AdixOxQsckkB_138_FLMWggoaKGZXhMm-ee_WGYzBTv-SePpwOEGLu86GigLX3L-DOo&_nc_ht=scontent-ord5-2.xx&oh=00_AfD1FgH_T0MDAtFySOkB2xrdabLDQjTO9KnBIV5e7xozgw&oe=66377868",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.355Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384365"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 2495,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/802318938444935/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/428850666_1695274974336749_8155676912120465920_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=tBxg8pdDQXgQ7kNvgG6pzPa&_nc_ht=scontent-ord5-2.xx&oh=00_AfBmS90T7HeLIXsoYmenKcrp3h1l80d_Z3ljMlHtrrbiXA&oe=66377276",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.356Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384366"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 2150,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/413553911621924/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/440108849_10161723982079626_4017972929127234623_n.jpg?stp=c138.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=SWgPVSXfMZMQ7kNvgHHLWxF&_nc_ht=scontent-ord5-1.xx&oh=00_AfADP21QhEur-S-RdtWmGkrUOxO2SjLANC3y4KqdGxPWoA&oe=66378327",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.356Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384367"
        },
        "title": "2 beds 1 bath Flat",
        "price": 2150,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1894154131055788/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/438036005_987114032759230_2688978542912461357_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=gqO0XyT9KIQQ7kNvgEd9Hvm&_nc_ht=scontent-ord5-1.xx&oh=00_AfBJhEIMoedQ9V8GrNzFD8XkeqNH2IhzyQ_tGoZDGIEQ-A&oe=66376622",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.356Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384368"
        },
        "title": "2 beds 1 bath Flat/apartment",
        "price": 2015,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1090111635427820/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437296346_357155987352304_4574594426113623299_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=UfqLc65_o08Q7kNvgGs47Et&_nc_ht=scontent-ord5-2.xx&oh=00_AfAp2x4gzpQl8MPqMRB87a5Kr1dsnB4pI1kolTMISl095Q&oe=66377735",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.356Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384369"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 2690,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1525112128083043/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/438267807_799824795027563_5059673085585482429_n.jpg?stp=c71.0.411.411a_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=zBm5-EcpPfwQ7kNvgEpTn80&_nc_ht=scontent-ord5-1.xx&oh=00_AfAvAFlEBERK35zUuo20jpo4wXUm8bAbLgakkud19Z4fnQ&oe=66377C1B",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.356Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538436a"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1625,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1608095856591598/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440244430_10231836173077364_9009840056850638594_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=scRIGM8w_HoQ7kNvgFK4v_u&_nc_ht=scontent-ord5-2.xx&oh=00_AfABAFTCbYTThzzt6Lcbpn2vylNxW7CEQCCuYATKuyHWKw&oe=66376919",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.357Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538436b"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1695,
        "city": "St-Lambert, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/7824225584307367/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/438087282_10225924654606666_3425306288120004267_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HMiodXerEXUQ7kNvgFn_43H&_nc_ht=scontent-ord5-2.xx&oh=00_AfD19XeJiow2uGf9zDQMPEN3EoG39NVwG0zAS6a-qDKmwg&oe=66378C55",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.357Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538436c"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 2000,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/783254416854084/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437001118_1762833067557563_2825412893222448167_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=DphN-ylX1tYQ7kNvgFn9WCZ&_nc_ht=scontent-ord5-2.xx&oh=00_AfDcBcGNh18WxIUcwNGdJF8ihjhKm5Sens0IYKC_bDCeNw&oe=66377B29",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.357Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538436d"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1595,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1185718895762400/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/438035923_7457246557689714_4947986833587664468_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=dQbEKDAWx8MQ7kNvgHPoktD&_nc_ht=scontent-ord5-1.xx&oh=00_AfDzuMJfQNR9wS7C1eWhcSBvumt0VlUXYrzEpjUoJZiEHg&oe=66376D0A",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.357Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538436e"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1695,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/752016553417403/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440771690_25395782296731731_1406037267006103261_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VGyPKVAz55gQ7kNvgFUrb_o&_nc_ht=scontent-ord5-2.xx&oh=00_AfCEBhan8ZMO3OJCSRDkWqXmnY8d-mmlY4YQrph4f1qFFQ&oe=66377CFE",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.357Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538436f"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1850,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/382825118068014/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436826604_398113819796527_8297186341900531280_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=G_KL7Alvh7sQ7kNvgGip2C8&_nc_ht=scontent-ord5-2.xx&oh=00_AfCCNWQwKAbfMayjFUr0NM2mLXeGs0gSznA-r9banQp0vw&oe=663785DC",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.358Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384370"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1500,
        "city": "Dollard-des Ormeaux, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1108811420232252/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439104657_949102093887288_8270349794827735890_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oHDBXDOTM3MQ7kNvgGVRdX_&_nc_ht=scontent-ord5-2.xx&oh=00_AfDsHMfKULZHhhMtbIv04vAblq7f0FrsX_ad1jm8yA68JQ&oe=66376CAA",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.358Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384371"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1750,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/412728051385347/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438211914_3653131478302976_4359160465784258089_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=8o5jobCg4i4Q7kNvgFdNbzT&_nc_ht=scontent-ord5-2.xx&oh=00_AfCb0hKDDwPZH-S3p6tgRutlWcvV7_yHcH3T9EJ7DjecaA&oe=66378117",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.358Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384372"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1850,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/340900495270950/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436768704_775749677856636_6730704022192525497_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=lIHgOGFJ2HsQ7kNvgE9BrZy&_nc_ht=scontent-ord5-2.xx&oh=00_AfANavoqAt2_2-bYUB5wafnBQib3L6H3s2U9gsog17pVxA&oe=66376519",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.358Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384373"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1680,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1473149333596859/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/436627160_1177165543445493_8934258641682377632_n.jpg?stp=c0.94.526.526a_dst-jpg_p526x395&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=LG37jd-2UOMQ7kNvgHS-hOv&_nc_ht=scontent-ord5-1.xx&oh=00_AfBp_dOMy-ijs_XE3ZpFtXx8HKVKdKKypVlZ5RqgLK9ALg&oe=66378B03",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.358Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384374"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1575,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1901880860316798/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436764569_970944494698166_4082599650167473559_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=OA7MLVKcW18Q7kNvgFMDqRH&_nc_ht=scontent-ord5-2.xx&oh=00_AfDETsWrS7HHyl7o6WXjIVDRO1AJRa7fi6sLrCoFjqDo0Q&oe=66378152",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.359Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384375"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1550,
        "city": "St-Lambert, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1523809605206068/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439900239_2496672617170163_7386185739200573010_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EihuyP9DumIQ7kNvgGw3BE8&_nc_ht=scontent-ord5-2.xx&oh=00_AfC49gQuxdh15rzUoJOmW2AYasMJacGWFKv9PECYR43VCw&oe=66378A87",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.359Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384376"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1120795992366069/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/437226713_1208516397198670_7611102392753084849_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=gJ_CmsFWuEQQ7kNvgGvT-Uq&_nc_oc=AdjTJaI-hdg63WxLehY4ohNWPG6EqVh1NH_eXY9K9Jcs2ndIqyZTyrn3SCNnYa57g08&_nc_ht=scontent-ord5-1.xx&oh=00_AfB2qHckcwFK5Pkp1ouiWYlm4Oqebww5vRy49Gx36tq0TA&oe=663779C4",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.359Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384377"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 2210,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/446649477905226/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438163794_319077577663753_852714300762192749_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=i3q3hAjqVeUQ7kNvgFaeGaR&_nc_ht=scontent-ord5-2.xx&oh=00_AfBi-o-C4-esCxkW-icVv4IYbV6slt5l4nHVZqEvEXehcQ&oe=66375EA0",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.359Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384378"
        },
        "title": "L'appartement 4 1/2",
        "price": 1600,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/3913384638892079/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/435535342_1129466838393366_7209895586308971839_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=2GDePiilF4QQ7kNvgEKp26G&_nc_ht=scontent-ord5-1.xx&oh=00_AfByhTCxFqYMr4iAJRmcdoWqy0zz9bYhJS8Q-7saDfqpHw&oe=663781DA",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.359Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d15384379"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1985,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/3665217327140224/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438155220_356495054072324_6469807926997508327_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=HSUB3DiZlW8Q7kNvgFC7jLR&_nc_ht=scontent-ord5-2.xx&oh=00_AfAMCN_m502tmJlF1rZC5t3GQIeHod5weIjCujOCBRckkQ&oe=66378BA8",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.360Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538437a"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1003068374779903/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/437348885_1570425397141330_3078667447688357415_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XD6uqB2wxJ0Q7kNvgGPqdiR&_nc_ht=scontent-ord5-2.xx&oh=00_AfBJr3OMVEszXUIo3M-gunA_LXdHq2lNDmlfrffkvnJqyQ&oe=663778C4",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.360Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538437b"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1750,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1826550374484232/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439343873_1613400226144808_2773308565604826329_n.jpg?stp=c330.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=giZBGCwpAbQQ7kNvgFzoRSa&_nc_ht=scontent-ord5-2.xx&oh=00_AfDnd1UOAG4Ru49a9lR8xFGUjmBkltmhJNWnRFNaMY_gqA&oe=66376B6D",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.360Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538437c"
        },
        "title": "2 Beds 2 Baths Apartment",
        "price": 1850,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1101574857744222/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/412552264_6890825810970980_5459391334730059341_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=RfP97yhTg0oQ7kNvgHOeZ7P&_nc_ht=scontent-ord5-1.xx&oh=00_AfAOoAbKj9Y3_F8IJfaUNZmMqndjcX0PRSCpDKf75dvpJQ&oe=66377BAA",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.360Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538437d"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/466164462433756/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/437497070_10161576838502774_1835632196391787731_n.jpg?stp=c0.67.526.526a_dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dt_VEjRD_doQ7kNvgGFmpXM&_nc_ht=scontent-ord5-2.xx&oh=00_AfA_gQgf8a-80IFoeZVi0XIDw-UElc1R-3tFbigY0MUOSw&oe=66376026",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.360Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f4d3c03e20d1538437e"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1775,
        "city": "Montréal, QC",
        "bedrooms": 1,
        "url": "https://www.facebook.com//marketplace/item/1848508182248114/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/428924241_1450284259217778_4995992903055917854_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=QeVqnqgCaVAQ7kNvgFSCqAb&_nc_ht=scontent-ord5-2.xx&oh=00_AfAeEKksYPIrnlxrOiG6jR69hjpiQIqyrvkXNMG4p51J8g&oe=66376800",
        "date_scraped": {
          "$date": "2024-04-30T21:47:57.361Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d1538437f"
        },
        "title": "1 Bed 1 Bath - Apartment",
        "price": 925,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1102698374171356/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438212005_961493055530491_346974804494461679_n.jpg?stp=c0.204.526.526a_dst-jpg_p526x395&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=LjNMdkbk1pEQ7kNvgEfyw15&_nc_ht=scontent-ord5-2.xx&oh=00_AfDelJpPPKV328-9shRd-k9fzXbhdVAnwV4ZAPXAD0r_JA&oe=66376A18",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.295Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d15384380"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 897,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/449933194194602/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440403585_455063850215066_7314023110039654179_n.jpg?stp=c147.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6AGIlvL3ahUQ7kNvgFJrTkL&_nc_ht=scontent-ord5-2.xx&oh=00_AfDO1-aW8Gc1Njelc6wQQyuPg6PArHYlxIg-G0EyNeuTXg&oe=66375EF0",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.297Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d15384381"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 950,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/743113211309875/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437140436_447059211213159_142904765252051125_n.jpg?stp=c144.0.540.540a_dst-jpg_p2048x2048&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=F7eamTtSUoAQ7kNvgGQ51uS&_nc_ht=scontent-ord5-2.xx&oh=00_AfBj87oPaMqY7PUFotE5tIF6AUHODTD-nMiOH10sY6mHvg&oe=66378DC7",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.298Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d15384382"
        },
        "title": "2 beds 1 bath Flat",
        "price": 700,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/411667281723705/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437357631_808843544021158_784411002088471149_n.jpg?stp=c0.76.507.507a_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=DYaAX1IjHlMQ7kNvgHF9fIX&_nc_ht=scontent-ord5-2.xx&oh=00_AfBrJPMCqdWdMMN074qyFqx2jGGrizoG5RHayKXBXh-QgQ&oe=66377D60",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.298Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d15384383"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1000,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/321138120780451/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439159219_7686689061374695_9197017665079251793_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OE_9L9YuYD0Q7kNvgGoZweO&_nc_ht=scontent-ord5-2.xx&oh=00_AfC3EZms0Ft83cDtux2v_1Rz48i9aInvH1FsPAziNtmTzg&oe=66377BF3",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.299Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d15384384"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 765,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/376126128194807/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/438037036_2094774794256128_6151365851447024740_n.jpg?stp=c88.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=xH6NpUBGhOcQ7kNvgFaA6Pa&_nc_ht=scontent-ord5-1.xx&oh=00_AfBZv1lzLwxxlCIo6ZU3T4ywPq-vu9XtaxM1ki4X5yHiWg&oe=66378AF6",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.299Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d15384385"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 750,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/641406924834451/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440203330_842524904361449_9080251073071986264_n.jpg?stp=c0.74.288.288a_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OxY2Dx08v6AQ7kNvgEoB_eQ&_nc_ht=scontent-ord5-2.xx&oh=00_AfAqEGm1tx6Xg4JQ2ghsZtYv2_maGFxHDLY3mJ6jFfmI_Q&oe=663789DA",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.300Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d15384386"
        },
        "title": "2 beds 1 bath Flat",
        "price": 645,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1470047020535767/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/439631758_457626233401235_2366800468929738100_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=iLd6lDOlU6cQ7kNvgGRz1QY&_nc_ht=scontent-ord5-2.xx&oh=00_AfDquOf56OF5_iuuUjqu0lz1unmqq4Kum2tBU8UXW4GxHw&oe=66377170",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.300Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d15384387"
        },
        "title": "3 Beds 1 Bath Apartment",
        "price": 750,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/797800792232715/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438267815_1371006850249665_8896200062487683133_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=sAh3HlFXY00Q7kNvgHLAvGy&_nc_ht=scontent-ord5-2.xx&oh=00_AfAbNF30IfuvK-pCDkVBQcm75zrYCE_H2IXBcIPB0aneMA&oe=6637734E",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.300Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d15384388"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 875,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1113277793245870/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/437197347_921532339770157_8248859033457120601_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=ee5sojKU-2gQ7kNvgGGiW56&_nc_ht=scontent-ord5-1.xx&oh=00_AfC4eAnWX-6IDc_1duHtKCeTAEoVQwlx4nsEVsYaLjETtg&oe=6637889C",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.301Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d15384389"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 900,
        "city": "St-Lambert, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/3820153838226100/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/438078848_828661295741859_6947395079825427984_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sQ7QWH5WYRUQ7kNvgGw7ab2&_nc_ht=scontent-ord5-2.xx&oh=00_AfCQALK4L0ClJ5QSfQRzEqep6EVJ5UzLsubecDXtygGLCg&oe=663758EB",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.301Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d1538438a"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 950,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/791716582565008/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/438080320_1960997850969976_4960666214263259239_n.jpg?stp=c136.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=4jC1aOqNl6wQ7kNvgFmuroZ&_nc_ht=scontent-ord5-1.xx&oh=00_AfBjAz8VBiGOwbyCH7HpYG4faykinjoeErN-2CKnxVjcqQ&oe=66377BED",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.301Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d1538438b"
        },
        "title": "Appartement de 1 chambre et 1 salle de bain",
        "price": 950,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/788435716558649/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/438241363_3405564163081225_4840062368441646270_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GrmYzvhnkrMQ7kNvgEeLqjj&_nc_ht=scontent-ord5-2.xx&oh=00_AfBKGY1ZCtyStAIQu5k2f0zi8SptZZjA8tK8h1aImRMdZQ&oe=663780AF",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.301Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d1538438c"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 750,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/389557684057408/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440253724_460650029739576_917380266343702119_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BjDT-GEw8KUQ7kNvgFXHWU8&_nc_ht=scontent-ord5-2.xx&oh=00_AfB9rH6e7J6GcC_nlSqouJdmAjKPP1HFyahVGzZNZxwXbQ&oe=66377A21",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.302Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d1538438d"
        },
        "title": "4 Beds 2 Baths - Apartment",
        "price": 700,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1124392072097088/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440419315_10161389652146182_2998354772466063181_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0wgOpHDSi2oQ7kNvgGeD3h2&_nc_ht=scontent-ord5-2.xx&oh=00_AfAEY0LoTkAvWH5Gajy3bcCNe2UF78TE_L-SrzMhC4J1ew&oe=66377E59",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.302Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d1538438e"
        },
        "title": "2 Beds 2 Baths Apartment",
        "price": 965,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/349365888149936/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/440161206_965071281947762_8098660357984887717_n.jpg?stp=c210.0.540.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=EXzrBTEDgT0Q7kNvgE2CkE9&_nc_ht=scontent-ord5-2.xx&oh=00_AfCuckwr2KlZA-aDKtejfnc4qCWZN8lqdFkgGgPtZSJoOg&oe=66378C36",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.302Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d1538438f"
        },
        "title": "2 Beds 2 Baths - Apartment",
        "price": 890,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1500307164164123/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/435745228_1183288465971827_2657929329197593049_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=0i_1GdEdGAYQ7kNvgHOtrLn&_nc_ht=scontent-ord5-1.xx&oh=00_AfCHNnIKEu0rvQS6ACJkdPnEwaeQ8dICwKEytkosf0eNfA&oe=66378BF4",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.302Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d15384390"
        },
        "title": "1 Bed 1 Bath Apartment",
        "price": 1000,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1537959136769151/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437116449_1152620896176176_5367350775369823402_n.jpg?stp=c210.0.540.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=htowhiyx7V4Q7kNvgG3eGnJ&_nc_ht=scontent-ord5-2.xx&oh=00_AfBa34ewsx9wmbJPYPVNhqhHvGyr3Vr9fa2Clpphnec0Tg&oe=6637872B",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.302Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d15384391"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 620,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/448115064438749/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437930581_1498089624393147_4008181696445182161_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=nBzVVYGoVRsQ7kNvgH118WD&_nc_ht=scontent-ord5-2.xx&oh=00_AfAoeSBoptqEKf_-p3J_Qe8uXhExRO1wZ3p_TMbFPvcodg&oe=66376703",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.302Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d15384392"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 618,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/406169395677265/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/418595050_939982830993619_4064337228154190630_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=cLyh4ujsi38Q7kNvgFYkBqE&_nc_ht=scontent-ord5-1.xx&oh=00_AfC235QZhxGgBTJr8dwNbM6jon5nwucuhGDTu6ufI2vv_w&oe=66377EAC",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.303Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d15384393"
        },
        "title": "Appartement de 3 chambres et 2 salles de bain",
        "price": 885,
        "city": "Longueuil, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1128657695048055/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439197106_7946224862077223_3170654045838471872_n.jpg?stp=c0.202.526.526a_dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-9zWcneZq8IQ7kNvgFCZT9Z&_nc_ht=scontent-ord5-2.xx&oh=00_AfCc4bMQV8aSGMpzkjmq9GGg4L1baMocMvnR69ZP02n4Og&oe=66377E3E",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.303Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d15384394"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 667,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1457284521661720/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439070113_294969333653084_1796054458336459722_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AxZ2T6kwnWUQ7kNvgHqXTpc&_nc_ht=scontent-ord5-2.xx&oh=00_AfBjKWsOwRhghsoIiDjQYrTPxiPYLM9DLZQxv_l9VZcqjA&oe=663789BF",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.303Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d15384395"
        },
        "title": "Appartement de Studio et 1 salle de bain",
        "price": 970,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/763108745948776/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/428727811_7189204517859997_8849109245399182161_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=yZqTK8rixZsQ7kNvgG2XtUi&_nc_ht=scontent-ord5-1.xx&oh=00_AfB2zDRvoYxhx7iJrW7xbUO3P3WuneZHtbaOtsz_vH9Mxg&oe=66378C85",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.303Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d15384396"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 875,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/682286350626348/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/439689070_466331936058384_8333766555852387862_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VrAihYozJPAQ7kNvgG56QQj&_nc_ht=scontent-ord5-1.xx&oh=00_AfAqlSoVkqtW_I4XOXVmVJ-cDDc8nFw0NGCQAX00gPqUpg&oe=66376DDE",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.303Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d15384397"
        },
        "title": "1 Bed 1 Bath - Apartment",
        "price": 845,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1712489625950511/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436783743_732530605445515_3193105853689850464_n.jpg?stp=c0.204.526.526a_dst-jpg_p526x395&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=Lm5K7MzudjkQ7kNvgGbCECd&_nc_ht=scontent-ord5-2.xx&oh=00_AfB1WaGBk4XnSG9xL8jqBp5xPHnWOxKDU20VOefmS2vO5Q&oe=6637857A",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.303Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d15384398"
        },
        "title": "3 Beds 1 Bath - Apartment",
        "price": 1000,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/402972599162872/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/438095565_10169619885320713_5661538913916607069_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6_2-3PdPG3oQ7kNvgHhYkfr&_nc_oc=AdhFflULUoYRCQvxokor4uXTcF9n6MM_CROT3keEb2CWZF-bVGJ0lGc2aND015w6t_o&_nc_ht=scontent-ord5-2.xx&oh=00_AfAyvUW26VhpkLuW82LSwn8YHbSIN2GFd0aFbX6lZEuAmQ&oe=66375C9C",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.304Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d15384399"
        },
        "title": "1 Bed 1 Bath - Apartment",
        "price": 1000,
        "city": "Longueuil, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/446185164754267/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/439619286_10226411690220153_2272786860829029738_n.jpg?stp=c67.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sT8gWTawpt0Q7kNvgFLTl7M&_nc_ht=scontent-ord5-1.xx&oh=00_AfD5thqxYul84h3dBqXzWySaDwrQpgtNof8NoBh6RtfrVg&oe=66377B64",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.304Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d1538439a"
        },
        "title": "CONDO ENTIÈREMENT MEUBLÉ",
        "price": 850,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/747779090758403/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/435975466_727857686164954_3062511138931274985_n.jpg?stp=c107.0.426.426a_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=6PsDfRwwdTUQ7kNvgExQ1d6&_nc_ht=scontent-ord5-1.xx&oh=00_AfDKLwr04B1o4uIwqzqA86aJkQwASjjSIDdCxtJbBszwHg&oe=66377974",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.305Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d1538439b"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 613,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/678391511042132/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/438118959_10212024744170676_4988449133118346425_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=H47Svm6L5toQ7kNvgH9ise4&_nc_ht=scontent-ord5-1.xx&oh=00_AfDdygDZ3PuG6DMN1I0q3b69Iu0NaXRmE-FATlSVnsF3Uw&oe=66375A37",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.305Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d1538439c"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1000,
        "city": "Beauharnois, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/964852772020930/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/440150729_1845544149202034_3174257052467216893_n.jpg?stp=c91.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=syE1XZhVeDsQ7kNvgG5_2uZ&_nc_ht=scontent-ord5-1.xx&oh=00_AfBZmkvayk880coDQvKxRHRV-TZ-smMGtbROZ5J1g2ARXA&oe=66376F3F",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.305Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d1538439d"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 895,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1141834720292938/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440178088_7155631554559943_98907587190596290_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ghd_r1raiPIQ7kNvgH-tAAz&_nc_ht=scontent-ord5-2.xx&oh=00_AfDKqzl3vnS7lKKp_moOfmxT1ZRvj9akXQAmnBXzVfy7sw&oe=66378CF6",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.305Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d1538439e"
        },
        "title": "3 beds 2 baths Flat/apartment",
        "price": 1000,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/2804255223060679/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/434845335_3740260432873527_1599412359974459189_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=_52ucu-mvBAQ7kNvgGDi9Pm&_nc_ht=scontent-ord5-1.xx&oh=00_AfCX7DBxqanRPtWKQDXWcXtjYT-expm_XB3FHFJlt0uy_A&oe=6637899F",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.306Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d1538439f"
        },
        "title": "3 Beds 1 Bath - Apartment",
        "price": 790,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1489690828564241/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/439101756_478719751147743_2654900606015248281_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3acdH0yvbhQQ7kNvgHEEX6e&_nc_ht=scontent-ord5-1.xx&oh=00_AfDj6y5zxhMOBjm04qxZKw7Ld9Es72efLvUjvWXfqPBc_g&oe=66377562",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.306Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843a0"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 700,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1495169584716089/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/438217309_401890766058865_687091969717031948_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IfJxP2vK9aEQ7kNvgE3hjrp&_nc_ht=scontent-ord5-2.xx&oh=00_AfBRCeHEa4J9NBG0OIFgEytcw0UjDpGNKlXofCzGEbLlmA&oe=66376B92",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.306Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843a1"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 825,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/450415040807999/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437361778_1470107590279666_4822162085378002711_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=F_7WXIsEPOQQ7kNvgF-y-iP&_nc_ht=scontent-ord5-2.xx&oh=00_AfAfbYqBuhJma-glfuLr_gsy1vZlnO0QvsP_HfsBjHDxQw&oe=6637560B",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.306Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843a2"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 830,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/745880737736141/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/439503861_2205065196505820_1511858013336333573_n.jpg?stp=c0.53.480.480a_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5LdNVYK0SSIQ7kNvgHOjmfg&_nc_ht=scontent-ord5-1.xx&oh=00_AfC3qn3iW-gtZ9tpicXFCxA7Cv5OF-zIHirKYmDx6EZr4A&oe=66377082",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.307Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843a3"
        },
        "title": "2 Beds 2 Baths - Apartment",
        "price": 903,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1193296375008514/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440581781_1828546967612830_2921225977182759617_n.jpg?stp=c0.32.296.296a_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8TA--JgGHpsQ7kNvgGU3gxc&_nc_ht=scontent-ord5-2.xx&oh=00_AfCNxKg6_6MSSmF5rS3uCYige-Gxp0bTnLoXEujW9G7JOw&oe=66375917",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.307Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843a4"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 900,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/437473475633994/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438250516_345724818082453_5269655232790971117_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=58K8fvKFShIQ7kNvgHOelQn&_nc_ht=scontent-ord5-2.xx&oh=00_AfB-ESagkylAMOdIxcDYeFN_LddSxzhN4Or-cpyM1Qg2vQ&oe=6637707F",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.307Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843a5"
        },
        "title": "Appartement de 1 chambre et 1 salle de bain",
        "price": 924,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/7323040464490223/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438232214_1102707344330869_4609722338989088737_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=rSsEcWopNl8Q7kNvgFVdOJV&_nc_ht=scontent-ord5-2.xx&oh=00_AfCy0w3o2E9IacTvsBj9GhFdyAHFJ5uaxJQ_ZjiPcGlTjA&oe=663775E8",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.307Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843a6"
        },
        "title": "1 Bed 1 Bath - Apartment",
        "price": 980,
        "city": "Longueuil, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/963071978823461/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440249196_2731470043673917_4389556265109945001_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Rrkh8A1VKYkQ7kNvgHqdveD&_nc_ht=scontent-ord5-2.xx&oh=00_AfB9PgqSwdhsvgAtlmrXCWUzUKwwDM4ARPpsZr1IRd6bkg&oe=66376B5C",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.308Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843a7"
        },
        "title": "2 beds 2 bathrooms – Flat",
        "price": 700,
        "city": "Laval, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/464502852667274/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436006885_1824485684643035_7413387281643360666_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=Pq4jRafjK0IQ7kNvgFnMZCe&_nc_ht=scontent-ord5-2.xx&oh=00_AfBlnuTqPGB6JMxSTraqdYnwEFZBZzSrCGutxrTFI05xwQ&oe=66375835",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.308Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843a8"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 820,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/925921195882401/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439242035_4462451180647340_1741508771596322881_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Pb5BeXBJmiQQ7kNvgHK29qh&_nc_ht=scontent-ord5-2.xx&oh=00_AfAW9U8sTSI3bLKnb2bymqei8mAS66ZcrMAXCwKrOqXDTg&oe=66375E2B",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.308Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843a9"
        },
        "title": "Appartement de 1 chambre et 1 salle de bain",
        "price": 900,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/454835033872155/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/423539263_396906416481283_5651970202290484527_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=OgxNgHvCXNoQ7kNvgFSTDSv&_nc_ht=scontent-ord5-2.xx&oh=00_AfBIa7CSJjbwvA8p_F6XM30ZZ_tEWpzTmuzEZqHBb24Trg&oe=66377D22",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.308Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843aa"
        },
        "title": "1 Bed 1 Bath Apartment",
        "price": 1000,
        "city": "Laval, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/2115441228819565/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436764530_1845982675829619_3544843520846644312_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=lBpt0bXk16cQ7kNvgHKxYgY&_nc_ht=scontent-ord5-2.xx&oh=00_AfB8d_U2ChZX70eN_HmR5jqZgoViyzBnymwJBQbYfM5Nww&oe=663768EE",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.308Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843ab"
        },
        "title": "2 Beds 2 Baths Apartment",
        "price": 850,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/2041323499584862/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/434259349_336125849091833_1080934807294120788_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=X38o_v5tJzoQ7kNvgGH8sx6&_nc_oc=Adhjmc3M0gni_RMPt3j3eZoT0fL4hP8AGCmM8nhWErr8P0Nt0C9pasuAzgtC1fFRhMI&_nc_ht=scontent-ord5-2.xx&oh=00_AfCcOb06Xm8DNMGTo7oY0fs49-dxTRNV0fHYy2QomsOxMw&oe=66376E83",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.309Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843ac"
        },
        "title": "Studio 1 Bath - Apartment",
        "price": 909,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/446396571243569/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440783245_2328131467376336_1818260142237659087_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ZfghXqtl2SoQ7kNvgGEumN8&_nc_ht=scontent-ord5-2.xx&oh=00_AfBnoUI0GoBP10dIHDYp6-h24SBlAG-ioIpgfxv-Kjs5JQ&oe=66375EC5",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.309Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843ad"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 950,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1116967006296604/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/425034000_1174129663591950_8225739699169432402_n.jpg?stp=c89.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=T6ZhHIk2XfsQ7kNvgHkmIYv&_nc_ht=scontent-ord5-1.xx&oh=00_AfAJ0bFfhdLXWAK0YiFhwauYaRB8aQjSpZyzyN73hVMzGA&oe=66377115",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.309Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843ae"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 890,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/802181904746294/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436836540_3935965893392098_3528179453666612754_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=sYOYElhNDrgQ7kNvgF7VuhL&_nc_ht=scontent-ord5-2.xx&oh=00_AfD40Lgh1qT3Py3dWzP1tI0jc_jmr4U5_HCkXfmg4M3kww&oe=66376E32",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.309Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843af"
        },
        "title": "Studio 1 Bath Apartment",
        "price": 965,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/8015356868492964/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/437054516_7244988268961990_7483273319769428947_n.jpg?stp=c161.0.521.521a_dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=wWDiB2XRxw0Q7kNvgEL8X3L&_nc_ht=scontent-ord5-1.xx&oh=00_AfCxlRVQXm6Zv3YT26BR_rjRULeW613UMAVl3vQusZHooQ&oe=66375710",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.310Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843b0"
        },
        "title": "Studio 1 salle de bain Appartement",
        "price": 895,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/820401146787599/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438017126_387923400883871_3483152610069763518_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=6TwtmCQPv1EQ7kNvgEKYKHi&_nc_ht=scontent-ord5-2.xx&oh=00_AfCb2cgrsunQtMmm2V0IchPs27DpG4cy36bMXE-8_pgSPQ&oe=66377EFC",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.310Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843b1"
        },
        "title": "1 Bed 2 Baths - Apartment",
        "price": 845,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1154921742207627/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/438081844_1602034360554197_6869723788057613470_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Z0l8QEYKwrYQ7kNvgForWxc&_nc_ht=scontent-ord5-2.xx&oh=00_AfCX9TjsDUN0Dxtnbw3g28-Tuw70s59YUY7OhbXqpGcoFg&oe=66378A21",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.310Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843b2"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 600,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1631219774340190/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/437881184_807900660706117_7804856052493775853_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=ZEmAu93sNJkQ7kNvgH84YgG&_nc_ht=scontent-ord5-1.xx&oh=00_AfBM54GavcXSSEfw6XUjaGmB5ZnnktsxLImzQOR1lcCOhw&oe=66378320",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.310Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843b3"
        },
        "title": "Appartement de 1 chambre et 1 salle de bain",
        "price": 995,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/422986090629317/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/436480720_1377036082940829_5523135910198717166_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=NpfuyRVUoHYQ7kNvgEeStYA&_nc_ht=scontent-ord5-1.xx&oh=00_AfDUMxs3VnhJTCQ7thRBUC1ugEefNBU_bbam5c0QKYfm3Q&oe=66375B9B",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.310Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843b4"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 950,
        "city": "Salaberry-de-Valleyfield, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1155463372246241/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/438242762_10169119282210454_3069573325987129952_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=URkHJWcZTjAQ7kNvgH9WojC&_nc_ht=scontent-ord5-2.xx&oh=00_AfD_TXsbg_qLFs8P5EFLSHlhebTvkHe0Vq_f6lXCFWYRMg&oe=66378033",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.311Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843b5"
        },
        "title": "Appartement de 1 chambre et 1 salle de bain",
        "price": 875,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/2233306333675110/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436887150_1176073203638050_2065228177871990112_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=BgATmRYZ3dcQ7kNvgFXjFYr&_nc_ht=scontent-ord5-2.xx&oh=00_AfArgbHvHre1Vj7sv2KFek4cCpM-gsojjHpGWv1gX51j2g&oe=66378933",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.311Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843b6"
        },
        "title": "1 Bed 1 Bath Apartment",
        "price": 950,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/972761771180690/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/428123149_303723252596553_6289977161562022746_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=8DcoyT1NUEYQ7kNvgGA_i63&_nc_ht=scontent-ord5-1.xx&oh=00_AfBf2DZvDwOIM7JSn1DsJU04zKlW9PMEXB0eVTiga_Xjcg&oe=66378688",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.311Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843b7"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 950,
        "city": "Beloeil, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/356873823516217/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439831749_3652804521702507_614660203713285842_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cHVsYcQ28LAQ7kNvgE2Q14b&_nc_ht=scontent-ord5-2.xx&oh=00_AfAIPP9XEFdQdaNH3yXZETNi_KnB9IDAYdAx44Eebcz8RQ&oe=6637665D",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.311Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843b8"
        },
        "title": "1 Bed 1 Bath Apartment",
        "price": 920,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1531079700787595/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/427195013_993649645433729_5490860856751751588_n.jpg?stp=c133.0.534.534a_dst-jpg_p2048x2048&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=zgGWV21OzBgQ7kNvgEgF9CO&_nc_ht=scontent-ord5-1.xx&oh=00_AfBzH2nhGd97KlyaZtcEt3H8mbHW-4pfj0Ia8-WVSVV3UA&oe=663762E7",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.311Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843b9"
        },
        "title": "3 beds 2 bathrooms – Flat",
        "price": 900,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/759664486316682/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/439149999_780418974057068_3864652697898799514_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MPXWaFMwMykQ7kNvgEFpQDy&_nc_ht=scontent-ord5-1.xx&oh=00_AfCYS-KMMLcRrAJ0ge_GpZhlhRS1R10kKp_dfe9GrDWmDA&oe=66377351",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.312Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843ba"
        },
        "title": "1 Bed 1 Bath Apartment",
        "price": 1000,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/814155203958195/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/436800560_377833615247358_2371509661352259574_n.jpg?stp=c0.204.526.526a_dst-jpg_p526x395&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=tKV1La13XMUQ7kNvgEOQtVR&_nc_ht=scontent-ord5-1.xx&oh=00_AfCRl8ncsCtnC-27pkQGhgHzl2u3ObD5qjLDvytfELnxhg&oe=66375BC8",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.312Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843bb"
        },
        "title": "Studio 1 Bath Apartment",
        "price": 825,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/792245012466845/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/436787967_1159550628565208_1485051799966067238_n.jpg?stp=c209.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=O3Vsw7WfqbUQ7kNvgHU2V_8&_nc_ht=scontent-ord5-1.xx&oh=00_AfBLHdK1g1K52sBSxqHR1O7z3OUGhtIVonHnBQ9tS7566Q&oe=663775AC",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.312Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843bc"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 750,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/451732030571649/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438155989_1109239233519742_8413814193307476910_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=Zuppguy22A8Q7kNvgHNfTXT&_nc_ht=scontent-ord5-2.xx&oh=00_AfDHpD9ONWk5GN4-ejlDUqFaLXxrmw51nOY16F0CqvsXBg&oe=663782A3",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.312Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843bd"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 880,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/397912073097435/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/439633047_2796712870476354_8408578248505027376_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=H8fJk6xmFbsQ7kNvgHDVvzE&_nc_ht=scontent-ord5-1.xx&oh=00_AfAL2EHTNSLRtnCCH7whA-rY_7N1EsVuFwveWV2iIjpOkw&oe=663758B9",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.313Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843be"
        },
        "title": "4 Beds 2 Baths Apartment",
        "price": 850,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/398985699703594/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437283521_736774938329964_8247222661081549945_n.jpg?stp=c136.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=kbfHcdos9YoQ7kNvgGLZrSk&_nc_ht=scontent-ord5-2.xx&oh=00_AfC9s0sB0xniHDahzEJIoP2aomr2YGihrFu3P4v7PuMHOg&oe=6637595F",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.313Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843bf"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 900,
        "city": "Magog, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1845803755831865/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/437457328_761132462819363_5140365030096119272_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=tS_yhLRZf7YQ7kNvgHSjDuU&_nc_ht=scontent-ord5-1.xx&oh=00_AfB653myOm3qiSc1iao1K0GxGsTXgpL91jSe3Z_wGU7FNg&oe=663757D8",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.313Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843c0"
        },
        "title": "Appartement de 3 chambres et 1 salle de bain",
        "price": 850,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1649921232463696/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/439606948_10232661326854533_5045868512688485109_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BYR37o-30yYQ7kNvgGe9emO&_nc_oc=AdgXPTI5YfZ8IJXzQBk4d9b0I3uKb1d2mqvzLopvYwMXUxn6-tYp7ZlXLVj2TZVP96Y&_nc_ht=scontent-ord5-1.xx&oh=00_AfAUtuhILozJilU4M-2w_MV3MAOGm0Okpyz2SzXpjZzTLw&oe=663756C6",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.313Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843c1"
        },
        "title": "1 chambre à coucher 1 salle de bain Appartement",
        "price": 925,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1159585421730908/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/424973437_780839440688090_6376775050490810995_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=kKpamrzzCp8Q7kNvgGQ-Spb&_nc_ht=scontent-ord5-2.xx&oh=00_AfDmPuilaWDktDM_k3a46PCkCE7TdOdD5LtPoGI_f9FIdQ&oe=663768B2",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.314Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843c2"
        },
        "title": "Appartement de 1 chambre et 1 salle de bain",
        "price": 1000,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1156145392489594/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/438330179_7726682394032697_7745911748623238715_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wEBnJNLZSxIQ7kNvgFWGazz&_nc_ht=scontent-ord5-2.xx&oh=00_AfCeGcUQI_SWit2KYGhX3hP5qCmtaYwyKMZHauwbn7f5Yg&oe=6637667B",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.314Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843c3"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 700,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/853526520151749/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437153448_989504242698203_7094895812380520926_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=k1KMH9cMvOkQ7kNvgGgUL3M&_nc_ht=scontent-ord5-2.xx&oh=00_AfAULu_qJBPFED4yIkg6Ya_-nvF1QVpM_Ec4PvkaZ3qNAw&oe=66375CB4",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.314Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843c4"
        },
        "title": "1 Bed 1 Bath Apartment",
        "price": 980,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/276852705517430/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438303545_418312477480964_7205008480806219460_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=WzdR4bhP2qAQ7kNvgEQpjG0&_nc_ht=scontent-ord5-2.xx&oh=00_AfA_o7qLoRefsN_z1Jm7Su9oFzqrsV5Qpiz4WmJ78zd9BA&oe=663778F0",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.314Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843c5"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 950,
        "city": "St-Jean-de-Matha, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1826590124472461/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/438239372_7487735514650976_5090158276126132698_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kNSNtHJq0XMQ7kNvgFuT1nT&_nc_ht=scontent-ord5-1.xx&oh=00_AfDcAVyL48deKXPSCcHkzRPwAxjIH7TcTt3wRdvsCBa2bg&oe=6637761E",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.315Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843c6"
        },
        "title": "1 Bed 1 Bath Apartment",
        "price": 925,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/418192374262392/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/429492899_820438359973775_3521169430814147409_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=vSoz7GEIG3EQ7kNvgHN59LG&_nc_ht=scontent-ord5-2.xx&oh=00_AfD5Gj-petH6csiZcpgcH-Ix-9ianHqOvGtcRi6q84OKFA&oe=6637817C",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.315Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843c7"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 760,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/2125863601106239/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/427364251_1486067218997485_3543921758158395353_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=bBHIekGlZuUQ7kNvgE-qPoj&_nc_ht=scontent-ord5-2.xx&oh=00_AfBBZmalyr0M7hXmwvI-OuVRoZ3f6XmQkrkJ4ahEkdrXqQ&oe=66378879",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.315Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843c8"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 750,
        "city": "Shawinigan, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/473761794982598/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440036062_7263832790405750_9083957433975483212_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yXWIYyYczcQQ7kNvgHzTgiG&_nc_ht=scontent-ord5-2.xx&oh=00_AfCcaJ3SBUjdBM9YVX7uV_2q5kshC8N2R5GMJGX3Pll3vw&oe=6637643D",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.315Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843c9"
        },
        "title": "1 Bed 1 Bath Apartment",
        "price": 985,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/406195065591706/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438195922_7371292569658104_8633221870746289638_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=d-rn2bmf1-EQ7kNvgFVXQ8Y&_nc_ht=scontent-ord5-2.xx&oh=00_AfCOB9hpRTCINgpN9SwjLnVrPgNtLOr_0JZuiv15UQGrxg&oe=66375C29",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.315Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843ca"
        },
        "title": "2 beds 1 bath Flat",
        "price": 400,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/792619132446422/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/435311634_479805157704402_4925532815250451273_n.jpg?stp=c0.76.526.526a_dst-jpg_p526x395&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=p3aaie_13zYQ7kNvgG9KET8&_nc_ht=scontent-ord5-2.xx&oh=00_AfDindZGO9BvIND-tE8sgTjh3EZLVHGps5uMK2Z9EoyXcA&oe=66377B11",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.316Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843cb"
        },
        "title": "3 chambres à coucher 1 salle de bain Appartement",
        "price": 775,
        "city": "St-Lambert, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/382669894755173/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/431004477_7409938509044437_1103990672423423475_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=vhWveOHHEGcQ7kNvgHvU3IB&_nc_oc=Adgz7AL0zcl-M4gYRaR6zucfMY1nFS5AjWz34M-61CeyoKS2AG1C4Q2TUm1I2BjOsYU&_nc_ht=scontent-ord5-1.xx&oh=00_AfB-DfzdSbYs-X6wgwKSXPDH810NNyVzspNmuNCnehqFBA&oe=663766CC",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.316Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843cc"
        },
        "title": "Private Room For Rent",
        "price": 700,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/2200117240338007/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437065649_328133776644885_4915484468598310736_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=g9oEqUThkA0Q7kNvgHIKv_u&_nc_ht=scontent-ord5-2.xx&oh=00_AfCBkM3pVFWpe1X8K_L9VCA-vSglybOpYv1frnKiyXI9jg&oe=66375F4F",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.316Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843cd"
        },
        "title": "Appartement de 3 chambres et 1 salle de bain",
        "price": 890,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/7439899829460268/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438011097_971074417547947_5541939740476588596_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=TAFFWg2maVIQ7kNvgHggVzT&_nc_ht=scontent-ord5-2.xx&oh=00_AfCZJB3VFZEvUESQ1nvM3By1khhL6ky8KxAQh8Z6kbiI6w&oe=6637841F",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.316Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843ce"
        },
        "title": "1 Bed 1 Bath - Apartment",
        "price": 880,
        "city": "Mont-Royal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1166827201412688/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/440139116_10168894576425224_7850573284435303606_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2PDD4ScijV8Q7kNvgHe2Jqv&_nc_ht=scontent-ord5-1.xx&oh=00_AfAHBUMNuISf5BJhM2eZZMKY5HPsIcz2PKqS63ZKNdwR5Q&oe=663769DB",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.317Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843cf"
        },
        "title": "3 Beds 1 Bath Apartment",
        "price": 850,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/2184679118535407/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/438077584_3657024307907177_5211618917045281589_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=nowOf2dNdD4Q7kNvgE0ITSj&_nc_ht=scontent-ord5-1.xx&oh=00_AfCJFmX3nt835huRySqtWTVKf8ETTdCjQRDKADFL2p3NyA&oe=663756B5",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.317Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843d0"
        },
        "title": "2 camere da letto 1 bagno Appartamento",
        "price": 850,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/4111190205774208/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/424998124_456469790111575_7795804647269375016_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=ckztOFI9huQQ7kNvgElL-dc&_nc_ht=scontent-ord5-1.xx&oh=00_AfB3eIaulLo1Jm5ipQT70mOV-4W5__kuSbUB1btkgzlsTg&oe=6637892E",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.317Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843d1"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 995,
        "city": "Magog, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1533112667630983/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/441021620_122134870832234015_782500318784129674_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xBbzv8eE7_QQ7kNvgGoCxEb&_nc_ht=scontent-ord5-1.xx&oh=00_AfCJdxdKdLgz9RPBrDmKogxDJzfAR7peNUilRCzp0tJu7w&oe=66378007",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.317Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843d2"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 410,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1604007450394582/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/440900729_122142608936161311_1271086091931804399_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4TV-_RULWDcQ7kNvgH4qXi4&_nc_ht=scontent-ord5-1.xx&oh=00_AfB0yEo4ylEqruJZDWzMxmFTPTxwTNx2oVKCEWU3HpGfAA&oe=66375EEE",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.317Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843d3"
        },
        "title": "1 Bed 1 Bath - Apartment",
        "price": 654,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/981445000089560/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/438239305_474217261603721_2264922664356830858_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wIBxcoRj7H8Q7kNvgGp7Dld&_nc_ht=scontent-ord5-1.xx&oh=00_AfC7dtgMhPVacQSyuuKqxBQeQ1HMyuhj2ra_q6fgW4IldQ&oe=66376BBE",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.317Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843d4"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 800,
        "city": "Shawinigan, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/451577650689534/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/435236988_421304317317403_3374288801170416414_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=YNs0BB7LpRUQ7kNvgE_qd9u&_nc_ht=scontent-ord5-1.xx&oh=00_AfAYXi1u7UrPajVF6KTRrnMX356QBERVMY9VGxqLICweMw&oe=66378AC1",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.318Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843d5"
        },
        "title": "3 Beds 1.5 Baths Apartment",
        "price": 989,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/3279634319004320/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437284757_736921698461061_471474882942388257_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=E5dHqbTpHVwQ7kNvgF6GmeQ&_nc_ht=scontent-ord5-2.xx&oh=00_AfBE40fICtm0IE03DOnvvLd7DqpG6T7XiW_gYtVV_XfIwA&oe=66377963",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.318Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843d6"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 625,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1233802991328069/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/438078208_435000765786084_3986864137261860784_n.jpg?stp=c0.212.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=n_TUunTro0kQ7kNvgF9_ypJ&_nc_ht=scontent-ord5-2.xx&oh=00_AfBgJfYRYLiCzEp8Yxf2Y3cht5vjIDcVO2pz5BFyGXCcaw&oe=663784D8",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.318Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843d7"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 995,
        "city": "Shawinigan, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1872438719863831/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/441159207_10223186885317709_873280795484371664_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=j0hPZkVJYfcQ7kNvgEUC1pe&_nc_ht=scontent-ord5-1.xx&oh=00_AfBBSQf3FKV6pKZFx8l6ux25koUBOUe6GQryHlzGWSLtDQ&oe=663762C3",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.318Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843d8"
        },
        "title": "Appartement 3 1/2 a louer",
        "price": 950,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/718462090217092/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/414737544_7372980236080220_9039851808783606838_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=NsVRxwAaC_AQ7kNvgEVsdtj&_nc_ht=scontent-ord5-2.xx&oh=00_AfBOcVIcg3FOxG4CDTimbPX5uKxlFJUCAD3GM6v8XxkITg&oe=66377FCF",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.318Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843d9"
        },
        "title": "3 beds · 1 bath · Apartment",
        "price": 1000,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1030526418481177/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/436574075_1943644272759102_3187561862687917568_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=3GMvBwPo3qUQ7kNvgEn4t56&_nc_ht=scontent-ord5-1.xx&oh=00_AfBs_vo0U4c4ir6ljndPFgZkmRxmwSl6Ypv3_1ZmGiFRnQ&oe=66376D58",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.318Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843da"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 890,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/341001028986313/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/427762262_857526176388007_4234793247105535956_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=Dl-JBd-EVowQ7kNvgFrS9OE&_nc_ht=scontent-ord5-1.xx&oh=00_AfBpfVadm0rMrNnd4ya3-Jj7hg775tvDn6kBp9UABo9gaQ&oe=6637761B",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.319Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843db"
        },
        "title": "Appartement de 3 chambres et 1 salle de bain",
        "price": 880,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1145448146580476/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/439672225_1172846890751491_7820352903522515047_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=kkD502gWrqIQ7kNvgExBNPN&_nc_ht=scontent-ord5-1.xx&oh=00_AfC_WzZeYzgCbKCYQtIlFR-uMMuWmI3v5Pm2HsjSFfOK_Q&oe=663760B4",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.319Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843dc"
        },
        "title": "2 beds 1 bathroom – Flat",
        "price": 600,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1665175314300848/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/438734152_25205866385724131_4018274717481138756_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=95gAuZtDGegQ7kNvgE2J4uV&_nc_oc=Adj9A8588mKve7fhNMlkNPJL4rnpLOga0uCv41iT6ZX6bfGYGXnykZX-pyWlgjdOiIc&_nc_ht=scontent-ord5-1.xx&oh=00_AfDiw7kHVQ3sBXEAUK9brqxr3hR1qW-GEXW7Pkfa05_5DQ&oe=66378DD3",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.319Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843dd"
        },
        "title": "3 Beds 2 Baths Apartment",
        "price": 950,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/354747944247876/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/433283318_955315949231922_2260503377920041608_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=ZPCxIUZmoGQQ7kNvgGYpdX4&_nc_ht=scontent-ord5-2.xx&oh=00_AfAtaiNVwOfFutOPE1ldKnY_bQxBo2oGX0b_XopWJJsT1g&oe=663773C9",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.319Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f563c03e20d153843de"
        },
        "title": "Appartement de Studio et 1 salle de bain",
        "price": 950,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/739407664940116/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439121023_122145724418118425_1743839205224947991_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=scRQnLaSxBIQ7kNvgEmPIu5&_nc_ht=scontent-ord5-2.xx&oh=00_AfDtTWfjS-ti4YgKu1gQxOl0qPWwlPILqpOLzm00qO2lLg&oe=66378833",
        "date_scraped": {
          "$date": "2024-04-30T21:48:06.319Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843df"
        },
        "title": "3 Beds 2 Baths - Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/2137395246633437/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439943046_1577982586385611_480687150074746446_n.jpg?stp=c86.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jdM26sBfPQoQ7kNvgFHY4s9&_nc_ht=scontent-ord5-2.xx&oh=00_AfCDT8T6UHBV7ZNQz9VEuAPlEZ81StwYmsvAWlO2fMrk2g&oe=6637565D",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.271Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843e0"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1300,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1618471472285987/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/438028691_1125912988616898_7703496777587621461_n.jpg?stp=c69.0.502.502a_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=IA6kLRRSLZAQ7kNvgHE-HU3&_nc_ht=scontent-ord5-1.xx&oh=00_AfASEUErYlhQfoFG2JR5SVJd3JrZUqY7wn97TsPdlspiwQ&oe=66376678",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.274Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843e1"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1300,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1413922042627042/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/438093983_1133722597823147_2623552713582220723_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=v3lRtjBkJEEQ7kNvgEdO2Hi&_nc_ht=scontent-ord5-2.xx&oh=00_AfCQ91yXeJJXhaH2GLqOs4-8aAd0cgVn9pYm8jddbuEO8Q&oe=66376BC5",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.274Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843e2"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1003068374779903/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/437348885_1570425397141330_3078667447688357415_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XD6uqB2wxJ0Q7kNvgGPqdiR&_nc_ht=scontent-ord5-2.xx&oh=00_AfBJr3OMVEszXUIo3M-gunA_LXdHq2lNDmlfrffkvnJqyQ&oe=663778C4",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.274Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843e3"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1350,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1441487993161574/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/440103023_364452066025606_4974186968262639719_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=vATLrO9K5nkQ7kNvgHQmHVP&_nc_ht=scontent-ord5-1.xx&oh=00_AfDrjJ4tUElkwg5k4syJ6JbPNBsZh05Mcraod25PYm1xyg&oe=66377943",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.275Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843e4"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/827417419257852/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438037053_2073017376411415_4056703235568640297_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=29i__z8l7KEQ7kNvgEmdcyU&_nc_ht=scontent-ord5-2.xx&oh=00_AfAtbpCJTAaeB5ezsq76iKaTXrb5P0u0Ltz-20lmnYHwfw&oe=66376D37",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.275Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843e5"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1450,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/492156753142012/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437089667_1636036673824831_6186525482638494443_n.jpg?stp=c0.86.526.526a_dst-jpg_p526x395&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=Rb29CgdepsEQ7kNvgG3Jh48&_nc_ht=scontent-ord5-2.xx&oh=00_AfBCPU1vwOBvEyGtPNOJ0bGbSjfVCVHJb81KQOTMUbSx8w&oe=66378676",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.275Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843e6"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 950,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/743113211309875/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437140436_447059211213159_142904765252051125_n.jpg?stp=c144.0.540.540a_dst-jpg_p2048x2048&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=F7eamTtSUoAQ7kNvgGQ51uS&_nc_ht=scontent-ord5-2.xx&oh=00_AfBj87oPaMqY7PUFotE5tIF6AUHODTD-nMiOH10sY6mHvg&oe=66378DC7",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.275Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843e7"
        },
        "title": "1 Bed 1 Bath - Apartment",
        "price": 925,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1102698374171356/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438212005_961493055530491_346974804494461679_n.jpg?stp=c0.204.526.526a_dst-jpg_p526x395&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=LjNMdkbk1pEQ7kNvgEfyw15&_nc_ht=scontent-ord5-2.xx&oh=00_AfDelJpPPKV328-9shRd-k9fzXbhdVAnwV4ZAPXAD0r_JA&oe=66376A18",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.276Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843e8"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1350,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/771472315129515/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438037069_452382890808863_6663321636424933658_n.jpg?stp=c24.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=KDJc-9HNLIIQ7kNvgFIJJ4n&_nc_ht=scontent-ord5-2.xx&oh=00_AfDVNUCU9QCQ5NwlLqfi_VpS3Yn7gVn-K5o36-pvrl9j8A&oe=66375BD0",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.276Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843e9"
        },
        "title": "1 Bed 1 Bath - Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/290075964039714/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/437356904_10223075308488259_8442624015626076772_n.jpg?stp=c105.0.420.420a_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CHXWpiRC72wQ7kNvgHmRob3&_nc_ht=scontent-ord5-2.xx&oh=00_AfDIVYt3hyhA7ta8N0GGqNUBl0ztTNJJYC9DgIyRM331rg&oe=66376076",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.285Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843ea"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 897,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/449933194194602/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440403585_455063850215066_7314023110039654179_n.jpg?stp=c147.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6AGIlvL3ahUQ7kNvgFJrTkL&_nc_ht=scontent-ord5-2.xx&oh=00_AfDO1-aW8Gc1Njelc6wQQyuPg6PArHYlxIg-G0EyNeuTXg&oe=66375EF0",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.285Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843eb"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1490,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1646845649416552/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438032442_1129517971703078_2559819929544387890_n.jpg?stp=c71.0.540.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=a_yHAfpeg7wQ7kNvgFeDt9q&_nc_ht=scontent-ord5-2.xx&oh=00_AfAV_WfH9npQDOZRVDvZdD-1JlKi1ne1FFOem2XPeu2qdw&oe=66377A33",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.289Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843ec"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/466164462433756/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/437497070_10161576838502774_1835632196391787731_n.jpg?stp=c0.67.526.526a_dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dt_VEjRD_doQ7kNvgGFmpXM&_nc_ht=scontent-ord5-2.xx&oh=00_AfA_gQgf8a-80IFoeZVi0XIDw-UElc1R-3tFbigY0MUOSw&oe=66376026",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.289Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843ed"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1500,
        "city": "Longueuil, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1179568400068655/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/438103048_7718538454871193_1455997288557356214_n.jpg?stp=c37.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=y24zifjoZLgQ7kNvgGuHfDR&_nc_ht=scontent-ord5-1.xx&oh=00_AfD0BKCLz_-84jBNd3NXHLjeXHx9Ta96RsGfPbMOCuDNTQ&oe=663762C3",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.290Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843ee"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/808139584556472/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/422664751_414634271460711_7427119800456459367_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=t_fFyFds2iMQ7kNvgGpri94&_nc_ht=scontent-ord5-2.xx&oh=00_AfDWxdxJ5xNwuTixkEDLUa99p8Erfzlo2qWLb-j1NbaGbQ&oe=66377E41",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.290Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843ef"
        },
        "title": "1 Bed 1 Bath - Apartment",
        "price": 1100,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/307056015761757/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/439748439_947462090717955_7714485699984587141_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HHpvUpSESd0Q7kNvgG9vqwz&_nc_ht=scontent-ord5-1.xx&oh=00_AfDStqj1C9X2r3sjZLLZtE0o6DygW_8TKCNkaG-yn41dHw&oe=66375DFC",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.290Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843f0"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1350,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/543529141803700/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/440743348_8128692777144381_2135084632762484505_n.jpg?stp=c0.60.526.526a_dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MsbaJCBl2rgQ7kNvgEX_-zU&_nc_ht=scontent-ord5-1.xx&oh=00_AfA3rANu_nmEAcnitMPO9Z5i-wF1SDv72XsZtQ1Hs1QyAw&oe=6637826E",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.291Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843f1"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1450,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/3787688374837881/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/438059562_10232447857560031_7586258914636888601_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bmQhU9zjN6sQ7kNvgEkXTNC&_nc_oc=AdgzLpwJDQz1rqJoVAiDAZoYum_c0sWbU8arInWXhYFfpu2-9xcopCvmhWMngyu-yrQ&_nc_ht=scontent-ord5-1.xx&oh=00_AfADzA6ePL8uWsObKFFvtFFUYyQWEQCHn9xKUdW_txrADg&oe=66376ADB",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.291Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843f2"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1225,
        "city": "Longueuil, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/304834205993874/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440808815_1862484647588150_882503989629503467_n.jpg?stp=c0.15.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kn3aw9nGE6kQ7kNvgGY-Rmy&_nc_ht=scontent-ord5-2.xx&oh=00_AfBbBEBctHKb3Dxh57gIk60XwIDc64jMX3saisbL_bVSVA&oe=6637615F",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.291Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843f3"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1350,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1464415917486048/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437316801_774472311327470_5050134396238508663_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=CdDypCBFhg0Q7kNvgFEO2D_&_nc_ht=scontent-ord5-2.xx&oh=00_AfAJ6cRv7XgxbynoTNhTYCYOJ__XuaesrUzuMeTjGe3_fw&oe=66378864",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.291Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843f4"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1440,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1125171808756849/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/438838030_6944930758945457_8765653175337347627_n.jpg?stp=c0.78.526.526a_dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EvpZCb8gWwMQ7kNvgF4pQNo&_nc_ht=scontent-ord5-1.xx&oh=00_AfCYoE3QyaVTAq_RoVKT-9TKkVw8LuUr50DXejIjILnepA&oe=66377DD4",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.292Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843f5"
        },
        "title": "1 Bed 1 Bath - Apartment",
        "price": 1200,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/742235201326871/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/439165916_10168675022705082_1942803008664787669_n.jpg?stp=c137.0.540.540a_dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yW3r7hJPaCoQ7kNvgH4hK5r&_nc_ht=scontent-ord5-1.xx&oh=00_AfBj0iagi1rxUyugJKhVIBwNshxfDE6vs4SDw-SsfubbIw&oe=663770BE",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.292Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843f6"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/936338121305262/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/439472709_10161857386453223_3666549913639486927_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=I9XiMEIyNrAQ7kNvgHEVqq4&_nc_ht=scontent-ord5-1.xx&oh=00_AfAOubiV5kFTo3vvdLqccU2v0g58pG5YMrCN1H1lsPKGEA&oe=663772B8",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.292Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843f7"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1400,
        "city": "Montréal-Est, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/444967188217312/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/427595688_7274470212636058_5747608346894401578_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=paLFJIO6K0EQ7kNvgHqAbqW&_nc_ht=scontent-ord5-1.xx&oh=00_AfDy0wOS1hMUC0hDN_XnMFo3IfsLxPRKxIR5ZuswY4PXiA&oe=6637617D",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.292Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843f8"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1193173738710872/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439520752_10225453057372619_62418892930945624_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Wcg64XKyLH0Q7kNvgHObItO&_nc_ht=scontent-ord5-2.xx&oh=00_AfAmXokrSr4bmVX0veXLmw3kCRFD6mr3BkbA-SWUOGIypw&oe=66375CCD",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.293Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843f9"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1450,
        "city": "Longueuil, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/311029935220696/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438163770_8274107205936759_8253174748636201086_n.jpg?stp=c89.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=NbY69GDiOEMQ7kNvgEkkkyd&_nc_ht=scontent-ord5-2.xx&oh=00_AfCANkL9XuddhU48YT8-0sy1ma5Qw4bvCzrAvHPJUU3ftg&oe=66376C35",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.293Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843fa"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1395,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/455852003635069/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/439639393_10230115410901736_6992973448565199641_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PJJgWmldVPgQ7kNvgEjCJj2&_nc_ht=scontent-ord5-1.xx&oh=00_AfCfuulx7A6GBjn7bfRgwZBLq8qUZPsF84WNcQBVNTOAEQ&oe=66375768",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.294Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843fb"
        },
        "title": "2 beds 1 bath Flat",
        "price": 700,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/411667281723705/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437357631_808843544021158_784411002088471149_n.jpg?stp=c0.76.507.507a_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=DYaAX1IjHlMQ7kNvgHF9fIX&_nc_ht=scontent-ord5-2.xx&oh=00_AfBrJPMCqdWdMMN074qyFqx2jGGrizoG5RHayKXBXh-QgQ&oe=66377D60",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.294Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843fc"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1250,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1149292392983991/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/438246062_1468638964077540_1536016101841402565_n.jpg?stp=c196.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=G64-grD0d6kQ7kNvgF47E2q&_nc_ht=scontent-ord5-1.xx&oh=00_AfCOz1ogCoGuNKoOuOCdsLBF-V-H8I_q3Ci_zOwCvbkpcw&oe=66378606",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.294Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843fd"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1250,
        "city": "Longueuil, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1616899759139653/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436800577_399426482935017_702145272418488676_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=vYXd8-nS0nkQ7kNvgH_JoAA&_nc_ht=scontent-ord5-2.xx&oh=00_AfDwcNol_FhJxe80z7ofNJvIst4JoCaDNvI4Bc1gbM13WQ&oe=663784B8",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.294Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843fe"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1450,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/817077626973613/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438032331_435423632565187_4146547296813689332_n.jpg?stp=c0.86.526.526a_dst-jpg_p526x395&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=aNvbl7ztVpQQ7kNvgEyfm39&_nc_ht=scontent-ord5-2.xx&oh=00_AfCW3hI3HqLvvsrxewnqB7oUuvEQm8TVvMleNLDasAWShw&oe=66375E72",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.294Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d153843ff"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1495,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1782958242196983/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436962018_251066188033995_5328899276415454407_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=xQ-AUKfowMQQ7kNvgHTVklQ&_nc_ht=scontent-ord5-2.xx&oh=00_AfDVo8QnouC_wP3Dpajbm-5MkH7kh7CswQXW3F1PQy_WYQ&oe=66375F14",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.295Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384400"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1400,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/774623914735514/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/434282648_967614881066328_6287928007280056750_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=v2aAz8pjoxYQ7kNvgHgbX1Y&_nc_ht=scontent-ord5-1.xx&oh=00_AfAFvCGXFvmZOSF_5anjLy9oKGSynrUc6hrFgtiVwaActg&oe=66376C4F",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.295Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384401"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1400,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1163426061344786/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/437348352_1488010878736759_6713546984124479054_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=z97XkhPTkb8Q7kNvgHWzZoK&_nc_oc=AdhtedNDMcejqsng27UWtzVYm9sdeeYPewx0zbSzEEN1VTwtECyJyEZ6ikgMMNaNh00&_nc_ht=scontent-ord5-1.xx&oh=00_AfCTrV2LW_yoA30E42dQcpk04n77DRgRaVPuUFbrSr3UCA&oe=66376D53",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.295Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384402"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1390,
        "city": "St-Lambert, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1539659413247170/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/437403399_342514385119890_440992882738138233_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=8UQIqdmYBi0Q7kNvgHIb8a2&_nc_ht=scontent-ord5-1.xx&oh=00_AfCGKtnNmeTRrKWEygsvGGtrgjV4CjLaaw-5TGnSRkB-4Q&oe=66375C43",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.295Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384403"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1450,
        "city": "Brossard, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/441622615029965/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/438221472_10161179151246421_3068447987286817621_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=LnRI_TsqFnAQ7kNvgE3lUQ_&_nc_ht=scontent-ord5-1.xx&oh=00_AfChKbPzhwbWcHAnS09GwqtrvQ6ge_mVIO9ICskoLghcAg&oe=66375AA7",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.296Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384404"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 750,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/389557684057408/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440253724_460650029739576_917380266343702119_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BjDT-GEw8KUQ7kNvgFXHWU8&_nc_ht=scontent-ord5-2.xx&oh=00_AfB9rH6e7J6GcC_nlSqouJdmAjKPP1HFyahVGzZNZxwXbQ&oe=66377A21",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.296Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384405"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1300,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1084289639320454/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437039789_1110794706862872_7584614779656863522_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=IZ-sI_kRxpgQ7kNvgGMT2PP&_nc_ht=scontent-ord5-2.xx&oh=00_AfBhhKnQPU1VuOUVP8B8PQnGxhPDLNzznfJhN3j0ZKH-aQ&oe=66375D3E",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.296Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384406"
        },
        "title": "2 beds 1 bath Flat",
        "price": 645,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1470047020535767/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/439631758_457626233401235_2366800468929738100_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=iLd6lDOlU6cQ7kNvgGRz1QY&_nc_ht=scontent-ord5-2.xx&oh=00_AfDquOf56OF5_iuuUjqu0lz1unmqq4Kum2tBU8UXW4GxHw&oe=66377170",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.296Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384407"
        },
        "title": "1 Bed 1 Bath Apartment",
        "price": 1495,
        "city": "Westmount, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/407284895532009/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437899672_1122700382117507_6324060860047931295_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=EhX2wtJREL8Q7kNvgGeEtIy&_nc_ht=scontent-ord5-2.xx&oh=00_AfCxX49UGIjfSWBqhRjwfUh4PsBsJhHcCRYwqekzF09Tow&oe=6637561F",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.296Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384408"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1120795992366069/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/437226713_1208516397198670_7611102392753084849_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=gJ_CmsFWuEQQ7kNvgGvT-Uq&_nc_oc=AdjTJaI-hdg63WxLehY4ohNWPG6EqVh1NH_eXY9K9Jcs2ndIqyZTyrn3SCNnYa57g08&_nc_ht=scontent-ord5-1.xx&oh=00_AfB2qHckcwFK5Pkp1ouiWYlm4Oqebww5vRy49Gx36tq0TA&oe=663779C4",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.297Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384409"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1395,
        "city": "Deux-Montagnes, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1426013054949407/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438053990_743882651253872_3852115136243517402_n.jpg?stp=c0.300.526.526a_dst-jpg_p526x395&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=j7ETVSt-vocQ7kNvgEF9HUH&_nc_ht=scontent-ord5-2.xx&oh=00_AfCH8biA5wU2nXdKw_x3jfE856iCVshGAOsRK9Qi1AzjTg&oe=66378975",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.298Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d1538440a"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1050,
        "city": "La Prairie, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1612559972835800/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438306099_938805178026762_8537940586893322807_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=P5DHYLuxJOAQ7kNvgEAdLxr&_nc_ht=scontent-ord5-2.xx&oh=00_AfDp0UZpF1M6hFbZZ27pKV_FlxAYj3PWWCUVd-dU93Egag&oe=66377AB6",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.298Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d1538440b"
        },
        "title": "1 chambre à coucher 1 salle de bain Appartement",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/300669873078096/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438077246_970776744581428_4535488417295999075_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=pbg99DcPU4AQ7kNvgFnCvK0&_nc_ht=scontent-ord5-2.xx&oh=00_AfBLc9odLcwyHp_FOgPJg3jBxhex5PjDSpK_Gfrf4-Hazg&oe=6637893E",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.298Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d1538440c"
        },
        "title": "1 Bed 1 Bath Apartment",
        "price": 1350,
        "city": "Longueuil, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/399684282960296/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/436490183_1652315218844093_2306009293821326019_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=sc_ZP1mpSOwQ7kNvgGb0iOg&_nc_ht=scontent-ord5-1.xx&oh=00_AfDHGoc2fapD4y7DVIWKrkgv9Ac_tnMkXvsguwvWkMio-g&oe=66375649",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.298Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d1538440d"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1400,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/417694690977798/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/439545055_1118366546153384_4436185342518346745_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=SRszrsW0zkMQ7kNvgEX9qpw&_nc_ht=scontent-ord5-2.xx&oh=00_AfD8-6KqeLnjxrfsfN7GyxUacCO0I66YX_JTHDANN5-8DQ&oe=663788E0",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.298Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d1538440e"
        },
        "title": "1 Bed 1 Bath Apartment",
        "price": 1395,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1096124034793359/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/421630245_7413031672146179_2171327208176411028_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=qK1YFl5uMFUQ7kNvgEiOrfT&_nc_ht=scontent-ord5-1.xx&oh=00_AfCsNdkf9G0cIb-2tvWg2E8RSYbMdTofTGL39QS-O4JQFw&oe=66377F4F",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.299Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d1538440f"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1345,
        "city": "Terrebonne, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/804048811646919/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437265695_1081251633175606_3149889874642163074_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=jVTjw18krdcQ7kNvgEZgU7b&_nc_ht=scontent-ord5-2.xx&oh=00_AfA3fS88gJKHPKVO0q3jMpWdKx8acV4W70NM1zg8gS7ZVQ&oe=66376E3A",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.299Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384410"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1395,
        "city": "Ste-Anne-de-Bellevue, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1933451843764667/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440816439_463241522810119_3532702371797928070_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ojQr3FYTJRgQ7kNvgEoNg66&_nc_ht=scontent-ord5-2.xx&oh=00_AfCAnQunbTdtXPw1sGQ1S0i88RHsSgTt0eX6MKyUeL8gXg&oe=663760F7",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.300Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384411"
        },
        "title": "4 Beds 2 Baths - Apartment",
        "price": 700,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1124392072097088/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440419315_10161389652146182_2998354772466063181_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0wgOpHDSi2oQ7kNvgGeD3h2&_nc_ht=scontent-ord5-2.xx&oh=00_AfAEY0LoTkAvWH5Gajy3bcCNe2UF78TE_L-SrzMhC4J1ew&oe=66377E59",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.300Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384412"
        },
        "title": "Appartement / condominium de 4 chambres et 4 salles de bain",
        "price": 1025,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/7590600397626804/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/428298299_6982706881856568_6300249088517022324_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=IckmCU8KO2UQ7kNvgHVbbhW&_nc_ht=scontent-ord5-1.xx&oh=00_AfCTpbrSSn5IkBaFxbfGdO5SB2-P4GuRJ0cSbrLtebNMpw&oe=6637678A",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.300Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384413"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 620,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/448115064438749/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437930581_1498089624393147_4008181696445182161_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=nBzVVYGoVRsQ7kNvgH118WD&_nc_ht=scontent-ord5-2.xx&oh=00_AfAoeSBoptqEKf_-p3J_Qe8uXhExRO1wZ3p_TMbFPvcodg&oe=66376703",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.300Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384414"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1200,
        "city": "Hawkesbury, ON",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/2153954904951621/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/421973729_3688583791468487_4578018385450668111_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qB1hBnPD3-QQ7kNvgFl2o-A&_nc_ht=scontent-ord5-1.xx&oh=00_AfBXi-mQ89nMJeiIHygQil5BgGIXpUqjQMpJvM7XrYVLXQ&oe=66375AC8",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.301Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384415"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1200,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/2971737686299714/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/437491625_977539117367588_409832850590377210_n.jpg?stp=c89.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=dupgHLrJXpYQ7kNvgG68uMe&_nc_ht=scontent-ord5-1.xx&oh=00_AfBHTFlOpJ-1ujT7IXc8KxarbpW6fFHXm52F5rYgKr1Q5w&oe=66376F60",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.301Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384416"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 765,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/376126128194807/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/438037036_2094774794256128_6151365851447024740_n.jpg?stp=c88.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=xH6NpUBGhOcQ7kNvgFaA6Pa&_nc_ht=scontent-ord5-1.xx&oh=00_AfBZv1lzLwxxlCIo6ZU3T4ywPq-vu9XtaxM1ki4X5yHiWg&oe=66378AF6",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.301Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384417"
        },
        "title": "2 Beds 1 Bath Apartment/condo",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/282726934806628/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/434223591_426081486820813_7152620131968163357_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=HbZr9DWGHTEQ7kNvgFv7VxC&_nc_ht=scontent-ord5-1.xx&oh=00_AfC1hESn1gbbZTDsCeCJW5kDU-9XCkaB_r1OjDFqoEF4dA&oe=6637716C",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.301Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384418"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 950,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/791716582565008/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/438080320_1960997850969976_4960666214263259239_n.jpg?stp=c136.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=4jC1aOqNl6wQ7kNvgFmuroZ&_nc_ht=scontent-ord5-1.xx&oh=00_AfBjAz8VBiGOwbyCH7HpYG4faykinjoeErN-2CKnxVjcqQ&oe=66377BED",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.301Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384419"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1568324487083185/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/439708162_1371929057098385_1878529875963904867_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=jh0YJDV7OU8Q7kNvgH91TxT&_nc_oc=AdjDgL3ZSJvpz8Yypc4FwStrUB1Kbw3U0fiuHZIEFzGthxZc3jPeK94Bk-DnIHSi_ZY&_nc_ht=scontent-ord5-2.xx&oh=00_AfCTKN9j2WBQHn37NPaJ4kLqbesBNGZxG71Z5mG4VMyEtA&oe=66376018",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.302Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d1538441a"
        },
        "title": "Appartement de 3 chambres et 2 salles de bain",
        "price": 885,
        "city": "Longueuil, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1128657695048055/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439197106_7946224862077223_3170654045838471872_n.jpg?stp=c0.202.526.526a_dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-9zWcneZq8IQ7kNvgFCZT9Z&_nc_ht=scontent-ord5-2.xx&oh=00_AfCc4bMQV8aSGMpzkjmq9GGg4L1baMocMvnR69ZP02n4Og&oe=66377E3E",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.302Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d1538441b"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1350,
        "city": "Laval, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1531839441045760/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438103111_1509175319947080_9062299037515694672_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=VOzTAHbhTGIQ7kNvgGFzoyt&_nc_ht=scontent-ord5-2.xx&oh=00_AfAUHOrASELmEAT1R_Enbyoirndd0d61y2Prme3ww9bHmQ&oe=66377267",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.302Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d1538441c"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1000,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/321138120780451/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439159219_7686689061374695_9197017665079251793_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OE_9L9YuYD0Q7kNvgGoZweO&_nc_ht=scontent-ord5-2.xx&oh=00_AfC3EZms0Ft83cDtux2v_1Rz48i9aInvH1FsPAziNtmTzg&oe=66377BF3",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.302Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d1538441d"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 750,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/641406924834451/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440203330_842524904361449_9080251073071986264_n.jpg?stp=c0.74.288.288a_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OxY2Dx08v6AQ7kNvgEoB_eQ&_nc_ht=scontent-ord5-2.xx&oh=00_AfAqEGm1tx6Xg4JQ2ghsZtYv2_maGFxHDLY3mJ6jFfmI_Q&oe=663789DA",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.302Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d1538441e"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1400,
        "city": "Longueuil, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1136838260858280/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/440959707_10160535993618051_6679401673809315752_n.jpg?stp=c210.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WdINOXxkzEsQ7kNvgGKqk_l&_nc_ht=scontent-ord5-1.xx&oh=00_AfBOogDCcCtPBgW3dXMwQ5peWU-6rVN4F3h32iN-TF2KKA&oe=66375D76",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.302Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d1538441f"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 875,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1113277793245870/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/437197347_921532339770157_8248859033457120601_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=ee5sojKU-2gQ7kNvgGGiW56&_nc_ht=scontent-ord5-1.xx&oh=00_AfC4eAnWX-6IDc_1duHtKCeTAEoVQwlx4nsEVsYaLjETtg&oe=6637889C",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.302Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384420"
        },
        "title": "3 Beds 1 Bath Apartment",
        "price": 750,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/797800792232715/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438267815_1371006850249665_8896200062487683133_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=sAh3HlFXY00Q7kNvgHLAvGy&_nc_ht=scontent-ord5-2.xx&oh=00_AfAbNF30IfuvK-pCDkVBQcm75zrYCE_H2IXBcIPB0aneMA&oe=6637734E",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.303Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384421"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 667,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1457284521661720/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439070113_294969333653084_1796054458336459722_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AxZ2T6kwnWUQ7kNvgHqXTpc&_nc_ht=scontent-ord5-2.xx&oh=00_AfBjKWsOwRhghsoIiDjQYrTPxiPYLM9DLZQxv_l9VZcqjA&oe=663789BF",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.303Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384422"
        },
        "title": "1 Bed 1 Bath - Apartment",
        "price": 1300,
        "city": "Mont-Royal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1580737002773061/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439672336_983228497138017_2133726280491873607_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NuwVFUym2WQQ7kNvgFx-uSv&_nc_ht=scontent-ord5-2.xx&oh=00_AfB1jRxmK8GnYI1-0872uzp7vH0OKbZqBOtXexChtFgBnA&oe=663763E7",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.303Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384423"
        },
        "title": "1 Bed 1 Bath Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1533808693863720/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/427109297_1345748219424448_6757859442642532836_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=h8WpRs45dY4Q7kNvgHgo7p3&_nc_ht=scontent-ord5-1.xx&oh=00_AfB6Ang0Qv51XA6quO9luY7E0i4Nrki5vQCxcraOT2yVLw&oe=66376FAA",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.303Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384424"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1500,
        "city": "Dollard-des Ormeaux, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1108811420232252/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439104657_949102093887288_8270349794827735890_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oHDBXDOTM3MQ7kNvgGVRdX_&_nc_ht=scontent-ord5-2.xx&oh=00_AfDsHMfKULZHhhMtbIv04vAblq7f0FrsX_ad1jm8yA68JQ&oe=66376CAA",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.303Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384425"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1200,
        "city": "Candiac, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/792862579454356/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436768557_751281810471201_185723688705456457_n.jpg?stp=c0.60.360.360a_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=AregkvOd8JwQ7kNvgFt68Fs&_nc_ht=scontent-ord5-2.xx&oh=00_AfCjqxvbvP9pu0dXCDn_gi5uN_jgOgtZ_cwrsqKRkn-X2w&oe=66377538",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.303Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384426"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1500,
        "city": "St-Jean-sur-Richelieu, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/819330856911321/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440331039_3614153468847089_7627816231566101480_n.jpg?stp=c0.115.526.526a_dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0CkjA7fJ_RcQ7kNvgGz6kRq&_nc_ht=scontent-ord5-2.xx&oh=00_AfAvkSYTWoS1b0vzpyV7b3YldErSIAzvac936kwea5iLcQ&oe=663765CB",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.303Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384427"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 618,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/406169395677265/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/418595050_939982830993619_4064337228154190630_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=cLyh4ujsi38Q7kNvgFYkBqE&_nc_ht=scontent-ord5-1.xx&oh=00_AfC235QZhxGgBTJr8dwNbM6jon5nwucuhGDTu6ufI2vv_w&oe=66377EAC",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.303Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384428"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 613,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/678391511042132/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/438118959_10212024744170676_4988449133118346425_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=H47Svm6L5toQ7kNvgH9ise4&_nc_ht=scontent-ord5-1.xx&oh=00_AfDdygDZ3PuG6DMN1I0q3b69Iu0NaXRmE-FATlSVnsF3Uw&oe=66375A37",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.304Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384429"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1395,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/792265665814114/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/436681655_1148080482881505_3890757669052432841_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=EeO342gjirYQ7kNvgGOG933&_nc_ht=scontent-ord5-1.xx&oh=00_AfBQ7ui0dxRjBFaLd6AwS4DG7rNF4GbOAvogI4Rhqm4rjg&oe=66377C10",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.305Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d1538442a"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1395,
        "city": "Ste-Thérèse, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/2064359027277349/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/437128866_1135845174277639_7438654028913940287_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=K_2PuKLvB8cQ7kNvgFAG7hB&_nc_ht=scontent-ord5-1.xx&oh=00_AfArZWxiOEFvqc4DLzBzofwPzGaY_m7RGGVcvK30G3fK0g&oe=6637571F",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.306Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d1538442b"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1395,
        "city": "Mirabel, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1640906926719569/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438163794_2421176301603828_4195963156356786092_n.jpg?stp=c89.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=SzrTdytQVlwQ7kNvgHExCll&_nc_ht=scontent-ord5-2.xx&oh=00_AfBSPPbV8oL1LMMKL7Aa9GOWMOXMIFjQswYcQGwAS4_WWg&oe=663774C9",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.306Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d1538442c"
        },
        "title": "3 Beds 1.5 Baths - Apartment",
        "price": 1460,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1471686813422337/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437095122_766431758970504_2345143187665839759_n.jpg?stp=c0.6.526.526a_dst-jpg_p526x395&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=-vT6pmstHFoQ7kNvgHte49e&_nc_ht=scontent-ord5-2.xx&oh=00_AfAefZGJMMOJFFsnfxMppFSTlI54Qv_cBuuNPr59bpORrw&oe=66377673",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.306Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d1538442d"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1075,
        "city": "Repentigny, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/314253274853463/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/438100864_10224837061698122_6375365809112045167_n.jpg?stp=c0.33.295.295a_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=FyCdOvadwhsQ7kNvgEsWIeK&_nc_ht=scontent-ord5-1.xx&oh=00_AfCCORNYYEKYYYUcQsIMDb7mv9anmS5fPNndnnHpaNyfmw&oe=66376ADD",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.306Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d1538442e"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1200,
        "city": "Mascouche, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1347019852519818/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/424917518_1149738932878091_7260742955363473155_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=JQNeUai5Tp4Q7kNvgGr4uul&_nc_ht=scontent-ord5-2.xx&oh=00_AfD5G-ehasERMsPCnhc9VrVXWig8c7s7c20-nX-9xP31tg&oe=66376511",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.306Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d1538442f"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1350,
        "city": "Laval, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/727108619502084/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439966331_10227351019106581_7934499471645649558_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BXy0zvCk3zwQ7kNvgEz4FCK&_nc_ht=scontent-ord5-2.xx&oh=00_AfA8UKY-Ugs8dFyNriKELoHchnrQY2PVpOu76Li_8TmL8w&oe=663761AF",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.306Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384430"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1400,
        "city": "L'Île-Perrot, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/704191921734646/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437271759_801535711874591_7152712978965347987_n.jpg?stp=c0.0.526.526a_dst-jpg_p2048x2048&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=FMjkdLxYinIQ7kNvgFO0IwX&_nc_ht=scontent-ord5-2.xx&oh=00_AfDTGV1irIHATzeEJTR4JEPsuCrErppNxTyUZWlNOdViCQ&oe=66376D4C",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.306Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384431"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1295,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/393494796845119/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/437214289_975858370774482_5576973524896239883_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=kI8sP8xynqYQ7kNvgHpJJCx&_nc_ht=scontent-ord5-1.xx&oh=00_AfDUvWQgJUss7pYtDoNI9k7OvOnerNBIpYURuO1AyrbMQA&oe=66378B98",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.307Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384432"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1000,
        "city": "Beauharnois, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/964852772020930/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/440150729_1845544149202034_3174257052467216893_n.jpg?stp=c91.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=syE1XZhVeDsQ7kNvgG5_2uZ&_nc_ht=scontent-ord5-1.xx&oh=00_AfBZmkvayk880coDQvKxRHRV-TZ-smMGtbROZ5J1g2ARXA&oe=66376F3F",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.307Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384433"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1075,
        "city": "Vaudreuil-Dorion, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/2209162726142710/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/440991140_10168420014480702_2783624423317265789_n.jpg?stp=c112.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OUrtbulZHdcQ7kNvgGIKa53&_nc_oc=Adg5c8N0OD2bkhnzVLVe-n8PGqabTpDuDQ3iOd3I8Zuk0hmJgW_gkkMRbcva6citEhI&_nc_ht=scontent-ord5-1.xx&oh=00_AfBc_bU975mxwUHnDPpjFHf24FUIk2y0IGSmVi4gXAWq4Q&oe=66375916",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.307Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384434"
        },
        "title": "2 Beds 2 Baths Apartment",
        "price": 1200,
        "city": "Repentigny, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/401425822790016/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/436526310_771338208072805_5166443798284907492_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=Y7yi7VlE5QsQ7kNvgEbIbSJ&_nc_ht=scontent-ord5-1.xx&oh=00_AfBbWiU3vBW-BDWyFwhmEdaZMSEtW7YHeKDZ4zscRUyifQ&oe=66376D1B",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.307Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384435"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1120,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/7720772184638856/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/435149039_2431283740405969_8886171488154349746_n.jpg?stp=c0.0.261.261a_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=BbcXLs80FqgQ7kNvgFvqodK&_nc_ht=scontent-ord5-2.xx&oh=00_AfC8bYALyxK_mON8GFu2MfdqZQlHKCaCdbDkmT5uqXvy4w&oe=66375952",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.307Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384436"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1475,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1499706760757537/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436876489_404537865729167_3949003765845638789_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=vzBpPiAl5nsQ7kNvgH0URO3&_nc_ht=scontent-ord5-2.xx&oh=00_AfA-aW28p1zv6CVzKm8R1W-OP06aADwpS4MTd7ZQ2isVKw&oe=6637698B",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.307Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384437"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1450,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/454937763651022/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437106601_1137223830858828_4697885067835234424_n.jpg?stp=c0.132.526.526a_dst-jpg_p526x395&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=zFv4SnX5GjQQ7kNvgFgfV1x&_nc_ht=scontent-ord5-2.xx&oh=00_AfAlUaxU8HAnjAdHm28akH2h4B-rKQjaD2xX9UDYlVsF2Q&oe=6637732D",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.307Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384438"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1200,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/415890671161163/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/435110278_2702531109913597_1699950733830872799_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=N0BIUxS7z6oQ7kNvgH6oMda&_nc_ht=scontent-ord5-1.xx&oh=00_AfAv_5PcIp6FwFuVw60kvbSiKjPn4Zr6t9F9njrajt7TDA&oe=66376A18",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.307Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d15384439"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1305,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/977912697230574/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/436455900_1128944211463469_1485101302544566590_n.jpg?stp=c0.11.518.518a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=trFxQs3vNGMQ7kNvgGDu9HP&_nc_ht=scontent-ord5-1.xx&oh=00_AfC3hKn_IqGRDByVyB2gKzdNRhi1dTvW0EYLk2gv6qHhbQ&oe=663761C5",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.308Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d1538443a"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1400,
        "city": "Sorel-Tracy, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/411193458402733/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439200111_10164580559908647_391657211037450316_n.jpg?stp=c0.203.526.526a_dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KGeIS4OjGn8Q7kNvgEE01UH&_nc_ht=scontent-ord5-2.xx&oh=00_AfAzTgSfwv4nMHDGC8w68sKoqtLGetL2QT3IEAbPlPEsBw&oe=66377651",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.308Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d1538443b"
        },
        "title": "Appartement de 1 chambre et 1 salle de bain",
        "price": 1453,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/3281414542160118/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/437561145_7736637606358382_1772123056710684755_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vZ2UqNuuJH8Q7kNvgFdwxPu&_nc_ht=scontent-ord5-2.xx&oh=00_AfCdudftmFU-Xphai0L6pThmeXxzkNxQvts3IiLKUEkZ-Q&oe=66378111",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.308Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d1538443c"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1388186975915345/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/436488731_7805376446163033_5473775170262049177_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=B4nJi1pOv64Q7kNvgGgfuCq&_nc_ht=scontent-ord5-1.xx&oh=00_AfCCzthVkWgvgTiqK8-DE8fu2s1plmUqeuJrsnlaJu9Kig&oe=66378350",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.308Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d1538443d"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1450,
        "city": "Dorval, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/468308852293499/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/424985025_817120703088474_972486180632366358_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=D9YcBkm_GMcQ7kNvgHier_b&_nc_ht=scontent-ord5-2.xx&oh=00_AfDfVpGLrJ1wyVjraYijwUkbWKjDkj9OQ_aWBW7762t99w&oe=66377D44",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.308Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f5f3c03e20d1538443e"
        },
        "title": "1 Bed 1 Bath Apartment",
        "price": 1250,
        "city": "Côte-St-Luc, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/960995718529531/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436924317_1355259381776826_9026759153584348882_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=EaeNEfLdX_0Q7kNvgERibQB&_nc_ht=scontent-ord5-2.xx&oh=00_AfApKEmhBp52MWH5tCkFwz-jCQQI9H7CwvNzV7v_-63AbA&oe=66375F41",
        "date_scraped": {
          "$date": "2024-04-30T21:48:15.308Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d1538443f"
        },
        "title": "3 Beds 2 Baths - Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/2137395246633437/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439943046_1577982586385611_480687150074746446_n.jpg?stp=c86.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jdM26sBfPQoQ7kNvgFHY4s9&_nc_ht=scontent-ord5-2.xx&oh=00_AfCDT8T6UHBV7ZNQz9VEuAPlEZ81StwYmsvAWlO2fMrk2g&oe=6637565D",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.985Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d15384440"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1795,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/358916153849336/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/438131641_750585576888965_4383301743528376503_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=Do8beFyQsDsQ7kNvgHjBwyI&_nc_ht=scontent-ord5-1.xx&oh=00_AfBhWae_O19BZntMS8-fLBMuwo1-lW_MxW9oFu14IwexyQ&oe=66378098",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.986Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d15384441"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/827417419257852/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438037053_2073017376411415_4056703235568640297_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=29i__z8l7KEQ7kNvgEmdcyU&_nc_ht=scontent-ord5-2.xx&oh=00_AfAtbpCJTAaeB5ezsq76iKaTXrb5P0u0Ltz-20lmnYHwfw&oe=66376D37",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.987Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d15384442"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1650,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/2324462887890121/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439467692_7476221935799121_1258108139768621258_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qsWWijo7Kg0Q7kNvgHjyZnX&_nc_ht=scontent-ord5-2.xx&oh=00_AfCJWk8hkHs0dFTjdGxGiGNeBElqe4LqkX36AORrfqCcIg&oe=6637776C",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.987Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d15384443"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 2300,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1626393208134631/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436525538_1160861048443417_5186737470360870492_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=th3t3xPdFkgQ7kNvgEwLSHv&_nc_ht=scontent-ord5-2.xx&oh=00_AfB9KZYEV4oesCAypwOYOkcpt3AMS_qy0d4uyN9lsPzRyA&oe=66378669",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.987Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d15384444"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1800,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/459604329800128/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440138193_3368305466792907_4007627699914966504_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Xy_lFv6YVh8Q7kNvgEhSTUz&_nc_ht=scontent-ord5-2.xx&oh=00_AfAyt6G-5AOShP5k2kpfNSSBJrdgPc-S1UEQlaGcbAFVxQ&oe=663767F0",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.988Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d15384445"
        },
        "title": "2 beds 1 bath Flat",
        "price": 2150,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/816769723628244/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/425644187_952788796169902_6232228535454312529_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=VlovegU4Rv8Q7kNvgHu9t21&_nc_ht=scontent-ord5-2.xx&oh=00_AfA5Cf8_u6yj1Vnvtn1frbh3wtB7Vg7WBPSlIou-f3mYUg&oe=66376DDE",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.988Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d15384446"
        },
        "title": "1 Bed 1 Bath - Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/290075964039714/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/437356904_10223075308488259_8442624015626076772_n.jpg?stp=c105.0.420.420a_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CHXWpiRC72wQ7kNvgHmRob3&_nc_ht=scontent-ord5-2.xx&oh=00_AfDIVYt3hyhA7ta8N0GGqNUBl0ztTNJJYC9DgIyRM331rg&oe=66376076",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.988Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d15384447"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1550,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/3145364815596416/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/436298156_350612771320224_7991215820264805231_n.jpg?stp=c0.80.480.480a_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=5E4xZzS7SsYQ7kNvgGR0KNE&_nc_ht=scontent-ord5-1.xx&oh=00_AfDqnVfWM2FrNz4iKUqOJE0GztiFmgIb1krdMoRtRu5XUQ&oe=663775FC",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.989Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d15384448"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1800,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/959211432517897/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/440408467_25727978856816262_1852989693861105458_n.jpg?stp=c217.0.394.394a_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rdfuGxX_vdAQ7kNvgFazBA6&_nc_ht=scontent-ord5-1.xx&oh=00_AfCOWIAoZIUE6Q9DfjOFBiKE1AaYlhSwJhVobitMU0T2jQ&oe=66376B22",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.989Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d15384449"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1550,
        "city": "Longueuil, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1016000086762954/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/432099439_937472604678130_5374460429967476453_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=DA7IOFr4fMoQ7kNvgE-Tywj&_nc_ht=scontent-ord5-2.xx&oh=00_AfCuOWF6t8vQNaU0NvkG4ILKNb4aEySHw47Z9jFHkYxwSA&oe=66375819",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.990Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d1538444a"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1960,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/2971337289673055/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436802811_1120036772374454_20040742947734005_n.jpg?stp=c0.204.526.526a_dst-jpg_p526x395&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=_9uS7dCRdJEQ7kNvgGIQwUE&_nc_ht=scontent-ord5-2.xx&oh=00_AfD2MNJ1s68kt8b3DKkZmckeeXmitAnfsdpuRkAX0GCF_A&oe=6637675E",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.990Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d1538444b"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1850,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/757399369816182/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/437284757_814575804024744_785778557472631587_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=joI0DwRinCIQ7kNvgGSswfT&_nc_ht=scontent-ord5-1.xx&oh=00_AfAIuNVzqm2k9Nyrd7xW5fkYh6fWFS8YVF3LkeOqiIyjnA&oe=66378A7F",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.990Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d1538444c"
        },
        "title": "2 quartos 1 banheiro – Apartamento",
        "price": 1750,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1111758683433861/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/438302460_10160452700529563_4553527963384097320_n.jpg?stp=c106.0.428.428a_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=K_SY111sAsYQ7kNvgFGKBru&_nc_ht=scontent-ord5-2.xx&oh=00_AfAAL2van_7XFWj3sdWElL9EO-r3ESBFrIbaGrffBf1s1A&oe=66375894",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.991Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d1538444d"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1943,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/737873268500208/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436570421_948363563740543_3123760272021984558_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=ZQQCx0cEvCQQ7kNvgEwnaYH&_nc_ht=scontent-ord5-2.xx&oh=00_AfAKU_ugHWNa1KgZJMipQ7WOfFqj3n9MTyDl3iZ4P_3ZsA&oe=6637854C",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.991Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d1538444e"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1595,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/949053026886751/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/437081883_1171305357222002_8411811757271884465_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=ILkzRz4Djb4Q7kNvgEPN5D2&_nc_ht=scontent-ord5-1.xx&oh=00_AfD0m7QUbO7PIHNpTNG_kbukwiV4cIIwb39XanRT1y6Sfw&oe=6637859B",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.991Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d1538444f"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1675,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/2097714490603984/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/437195948_414289061557251_4000290671055061498_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=IosPWMKbU0QQ7kNvgFgpzlO&_nc_ht=scontent-ord5-1.xx&oh=00_AfABrYD5GfwdFFqq6BRt4rQXuoXzKoQKD2h29JkrfTq_Mg&oe=66375A3F",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.992Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d15384450"
        },
        "title": "2 Beds 2 Baths - Apartment",
        "price": 1850,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1884637455290769/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/438884813_1210352860335531_4814421133018608069_n.jpg?stp=c0.55.526.526a_dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=T2YxvrmkiZsQ7kNvgEDCise&_nc_ht=scontent-ord5-1.xx&oh=00_AfAOASXPWHDzFJjoq7G1IRj7uqHRQi4d1TNeFwAg5U8efw&oe=66377AC6",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.992Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d15384451"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1650,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/957264255898310/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/438155978_1088364169128457_2846334933114301850_n.jpg?stp=c0.106.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=1mwMVYq3oXQQ7kNvgHTxXJ2&_nc_ht=scontent-ord5-1.xx&oh=00_AfCMly6dR_Wj-J6ox6vWhADFD0Bj0KyzVgBS3tODE-CJag&oe=66376312",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.992Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d15384452"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1895,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1815045742331023/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/438081855_122134496564232177_4656403185525098823_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CMelVwEqXncQ7kNvgEDWJNO&_nc_ht=scontent-ord5-1.xx&oh=00_AfA2aV3OKdbxnhTr4sjn0VYkYzdovBhWVwgRavhFPr0Q4w&oe=66376822",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.992Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d15384453"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1850,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/7519471151454232/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438303499_442387921532097_6542742340894304618_n.jpg?stp=c96.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=mVI-Px-lsgUQ7kNvgHS9R3w&_nc_ht=scontent-ord5-2.xx&oh=00_AfB8SbcsNkat6PT6M88ady_u1TAgMkq_qDNCoMV3h4vmYw&oe=663757DF",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.993Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d15384454"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 2009,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/3826680557572695/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/440036447_10169197628910226_1351965848265231028_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8d-HKqJNS5MQ7kNvgGkDs8n&_nc_ht=scontent-ord5-1.xx&oh=00_AfAo7gp8prLLPL9eh4KmbZK-W34eJFxauYNqUUpFuRL0uQ&oe=6637630F",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.993Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d15384455"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1999,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/746826067642502/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/436752994_1191626072244848_6070266063389626129_n.jpg?stp=c85.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=0RpOvt6LqysQ7kNvgH_10IK&_nc_ht=scontent-ord5-1.xx&oh=00_AfBdgXzs_IVsojGPkcD4cZ65OPw9x1_pdUjsAR1F_i8nfQ&oe=66377E94",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.994Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d15384456"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1550,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/950298946760274/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/436816621_1083207116114455_706698869644405968_n.jpg?stp=c0.300.526.526a_dst-jpg_p526x395&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=wKDs6PJKjR8Q7kNvgF0nmgK&_nc_ht=scontent-ord5-1.xx&oh=00_AfBHNJVhAK4KHIwbi3GzfB2ImmYoZYkHRg9zFiHyh0TO1Q&oe=663761B8",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.994Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d15384457"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1600,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/3440685216226337/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/439702155_342811561746685_9160358947732593730_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=-qDfIWlNH9gQ7kNvgHwpGPB&_nc_oc=AdiBudXxJsvnQOPMYAvvFlQbwlEhnpyulcjHmgpleF4I_sECFGNeV9Gd1LNc5EW-syQ&_nc_ht=scontent-ord5-1.xx&oh=00_AfCUvjL8Do37r27PCxlX0eTb7JHhmEZfO_7hb60QQeUHFA&oe=66378C0A",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.994Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d15384458"
        },
        "title": "1 Bed 1 Bath - Apartment",
        "price": 1550,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1192722455227990/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/438837845_26157055480548479_1481392553518390240_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1GJJExF3gh4Q7kNvgEfb37S&_nc_ht=scontent-ord5-2.xx&oh=00_AfBsgecV2lF202bBIvHe8sxz7AVSXKSplNKya4pdrRpITg&oe=663776A5",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.994Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d15384459"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 2000,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1710358999495278/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438155003_437999515445755_6348931269833394172_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=hsLjqJeEhi0Q7kNvgHe55sa&_nc_ht=scontent-ord5-2.xx&oh=00_AfBGcPytx4n86hCq0PejfXz5tEHhH90uQfuwI_EOwyDLYw&oe=66378807",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.995Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d1538445a"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1800,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/996883038448558/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/439021448_122131479806232177_8804476798612234800_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GyeTYm1ZWuoQ7kNvgGlg8Bx&_nc_ht=scontent-ord5-1.xx&oh=00_AfBJ756e6CHbKi2x2wJyQIp2zvYjoMs-8NgvuyakbAT3Ng&oe=663782E6",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.995Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d1538445b"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1900,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1154343948929047/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/394460969_24299875669626545_8886329280975075664_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=JC4cwbm9N4sQ7kNvgHVdO3Q&_nc_ht=scontent-ord5-2.xx&oh=00_AfDdlbaVgwNO5PioDm1cyTqWlgZJHPIqt_D_mhfSixT3Pw&oe=66376B05",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.996Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d1538445c"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1500,
        "city": "Longueuil, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1179568400068655/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/438103048_7718538454871193_1455997288557356214_n.jpg?stp=c37.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=y24zifjoZLgQ7kNvgGuHfDR&_nc_ht=scontent-ord5-1.xx&oh=00_AfD0BKCLz_-84jBNd3NXHLjeXHx9Ta96RsGfPbMOCuDNTQ&oe=663762C3",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.996Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d1538445d"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1570,
        "city": "Laval, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1084781399282587/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437034501_264468933326959_3157729054892330247_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=zjJuTpceLd0Q7kNvgHXQI7y&_nc_ht=scontent-ord5-2.xx&oh=00_AfBpqwtstd-eL5iCEAY65gH9vUB2dBh8ySAisKSTQsQM8w&oe=6637754C",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.996Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d1538445e"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1700,
        "city": "Côte-St-Luc, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/695488302614068/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436887143_738204635050999_1155923567357425997_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=h84J3Kh7xfsQ7kNvgEE2iLl&_nc_ht=scontent-ord5-2.xx&oh=00_AfD5a3rmm1vbBWOe_zBK_3BH8oUVyNYC_offwp3Ln1TdWQ&oe=66378ADE",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.996Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d1538445f"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1916,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/372200659134279/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/377745694_6664179093670901_3313202194819881424_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=X1rk8Rv-O8cQ7kNvgE4gi4F&_nc_ht=scontent-ord5-1.xx&oh=00_AfDE0M_hkAJrrar9aSm70m-vsU-AxB-A-CLJbNIOVmgDAw&oe=6637665F",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.997Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d15384460"
        },
        "title": "3 Beds 2 Baths Apartment",
        "price": 2400,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1118684079373444/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436804658_446125734737440_7796579779626434937_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=TrC1JIiF28YQ7kNvgFvCExH&_nc_ht=scontent-ord5-2.xx&oh=00_AfBeAgKViYla6XxlMVNG9BjFNrfz6ZBfCFkedeSS2H665w&oe=66376650",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.997Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d15384461"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1580,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1463847500884017/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438163573_929965885578483_1432282286801254228_n.jpg?stp=c330.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=NRcxrQ8OsIAQ7kNvgH3LERX&_nc_ht=scontent-ord5-2.xx&oh=00_AfAYUJZ117j8xywEtTl48iZzfLkrVqcpFp3Z-q6Dmb7YBw&oe=66377928",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.997Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d15384462"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 2050,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1151816192488537/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/428211812_8099771840052555_1794508151498334962_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=pew8zTsiamkQ7kNvgHvHX0A&_nc_ht=scontent-ord5-1.xx&oh=00_AfBx6_bJVV2ztSV_eCAhyWDEQED8MKDzKDLWGH61sjuzfQ&oe=663785C3",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.997Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d15384463"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1595,
        "city": "Longueuil, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/310153808773453/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/438275173_2196525304015168_5698945178704592972_n.jpg?stp=c209.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PndMcWPXqn0Q7kNvgHBv3UC&_nc_ht=scontent-ord5-2.xx&oh=00_AfBLTK9vZ1V8XlR9XwAapCdw_OjGwl42pnrvIkFuWqAlFQ&oe=663788A1",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.997Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d15384464"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1600,
        "city": "Laval, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1125484345172881/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/437409662_465837712463363_5179788264967430403_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4Vo6cAsvGXcQ7kNvgHMHP9r&_nc_ht=scontent-ord5-2.xx&oh=00_AfCLgonxrSKbpeSEPrk4QlRl6BDpvllc26a8245dr1nxAQ&oe=663782AD",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.998Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d15384465"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1595,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/452816747411116/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439431877_456628040237442_4084241030645761339_n.jpg?stp=c54.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=p8jzt-PCGh0Q7kNvgFBGuA0&_nc_ht=scontent-ord5-2.xx&oh=00_AfAMsZB9jQczeQ9cUSNF7ftU55gqXm3jpyzj3nbcn9jBfw&oe=66378534",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.998Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d15384466"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1800,
        "city": "Laval, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1176968023465005/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437333629_283000854867520_1367546969424896057_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=LV7z-2gpdGAQ7kNvgF-9g8c&_nc_ht=scontent-ord5-2.xx&oh=00_AfC8mznIzWtT87sJ20jYrlL8FqNhq0xQbDFfJ47ZeJx0Tw&oe=66377DD9",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.998Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d15384467"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1750,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/291267574034545/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/418787812_959857635436484_5751648200223338959_n.jpg?stp=c85.0.421.421a_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=GwLXFC52BfUQ7kNvgE9FqV_&_nc_ht=scontent-ord5-1.xx&oh=00_AfBVIdNueB0KO1sV1_ktDm-YY284GdLOpv7-DmzxnQjjXA&oe=66377F35",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.998Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d15384468"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1725,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/446417367878227/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/441044523_122134487780232177_5076003251812804252_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=avi_cSMV7G4Q7kNvgHabVr5&_nc_ht=scontent-ord5-2.xx&oh=00_AfBg2XYDO6BglS5cQ6O-zqRcaIDWkQhYqZ1RACspFiuSPA&oe=66378AEA",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.999Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d15384469"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1585,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/3773689796183630/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/438785349_309694982158065_7523787378853882730_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=SOFEXPUd6dYQ7kNvgETmIxb&_nc_ht=scontent-ord5-2.xx&oh=00_AfBSY-3OL81GYzJ9BCLOUaQEYZxwD-gNzJJ1Hjz1p1XGrg&oe=66375BB8",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.999Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d1538446a"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1729,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/452121860540794/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/375507908_6674995172546388_5783982981630329883_n.jpg?stp=c210.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=ObhZjCw44PAQ7kNvgH8nML9&_nc_ht=scontent-ord5-1.xx&oh=00_AfAFnKTowazu96SmA_lH1fLDre7Vtf1wJZY792jhzAS0sw&oe=66376685",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.999Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d1538446b"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1950,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1152601379408293/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439227176_10161175351784501_7496264021820202466_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6u1ldnTB1EwQ7kNvgHs1Xxi&_nc_ht=scontent-ord5-2.xx&oh=00_AfAeOUsoxMSPBjyQxjj7jVGAQZgOdu-IqwwY8fDFv3ohjg&oe=6637770D",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.999Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f683c03e20d1538446c"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1825,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/953198382795507/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/440962012_1110967010132683_5268735118682435117_n.jpg?stp=c0.57.526.526a_dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pGLRC0fr-3MQ7kNvgFTc0Dw&_nc_ht=scontent-ord5-1.xx&oh=00_AfCDqGG08Rly2mVNLj_cdu0aP2OxWYhJq6THTCo0aA47-g&oe=66376A26",
        "date_scraped": {
          "$date": "2024-04-30T21:48:24.999Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d1538446d"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 2495,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/961173148671347/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440973949_408221251974867_5058216274271042150_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=SMBCSlAFKAkQ7kNvgEQcBLS&_nc_ht=scontent-ord5-2.xx&oh=00_AfCNp7iatQrf84VBKVztbj96SNa62GLAogweX66ZfJs4Gg&oe=66375785",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.000Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d1538446e"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1950,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/755010850032767/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440238932_2098219387229261_4750644122749203804_n.jpg?stp=c0.40.360.360a_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6RDNJjUT9SUQ7kNvgHdWvi3&_nc_ht=scontent-ord5-2.xx&oh=00_AfDNRd09G-Bp2nMZ129zMIDWfIKqcu58JjszXeWDE8nQgg&oe=66377DE3",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.000Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d1538446f"
        },
        "title": "2 Beds 2 Baths Apartment",
        "price": 2940,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/2697648313742902/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/438267859_1668186277336180_6277992009792064618_n.jpg?stp=c128.0.509.509a_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=rHmv7VXAiDAQ7kNvgEqzIg5&_nc_ht=scontent-ord5-1.xx&oh=00_AfCb8v4dXuFiXJXHCV5DdMEUzdltyw2-EvfXpp8OcOmPXw&oe=66378BB8",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.000Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d15384470"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1700,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/2061272730921808/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440753155_10226879721439289_8048737022822317656_n.jpg?stp=c0.59.526.526a_dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jcmKBAIdd6YQ7kNvgHcKdLq&_nc_ht=scontent-ord5-2.xx&oh=00_AfBM7HHH8i8LpMXfrdMmYXNYeljti3_kofsAtd3T7A4KNg&oe=66377F98",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.000Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d15384471"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1800,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/400350402841881/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437546543_1745943379229227_2934257309610131056_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=-7UgRMyjQc4Q7kNvgHYwXvu&_nc_ht=scontent-ord5-2.xx&oh=00_AfDwRfzvU0KFPllB5YD5Pa28rVWbEBtYTIPrEncDr98AUQ&oe=66375C64",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.001Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d15384472"
        },
        "title": "1 chambre à coucher 1 salle de bain Appartement",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/300669873078096/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438077246_970776744581428_4535488417295999075_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=pbg99DcPU4AQ7kNvgFnCvK0&_nc_ht=scontent-ord5-2.xx&oh=00_AfBLc9odLcwyHp_FOgPJg3jBxhex5PjDSpK_Gfrf4-Hazg&oe=6637893E",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.001Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d15384473"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1700,
        "city": "Côte-St-Luc, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1468694324056260/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438036919_959306919194768_2714340579718610519_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=4Gz2Ls7MMtwQ7kNvgEDI-Ml&_nc_oc=AdjZEu_9sYuQs5DcVisCoUziTtv19M7WmIfqqJ3AYwwIeiSPPjBwkfb9Rsi3Lt6TA2I&_nc_ht=scontent-ord5-2.xx&oh=00_AfA1Kr3YARhvB9CD6oqLLKfahhm7G392vi6Rp28WY7udlQ&oe=663772A2",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.002Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d15384474"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1650,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/2252849448394778/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437226717_773583221396147_3088567256668227586_n.jpg?stp=c38.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=gRjBeRkFjmMQ7kNvgGIMnMm&_nc_ht=scontent-ord5-2.xx&oh=00_AfBtfclcGciOuNcHXnnKo2Te5iAOecbyu5utZltr-fh2yg&oe=663762B3",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.002Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d15384475"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1890,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1026261006164670/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/436816611_2166318187034555_5579366784952029938_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=HYFSAmpquTIQ7kNvgGsLSUk&_nc_oc=AdjRlWOX_wrmpJf4kXSN9aV8k1AoqC0ptnTUX1QSz3e3WxRsI30_nafjPB5xpGC0Spk&_nc_ht=scontent-ord5-1.xx&oh=00_AfC1oe1VyGRKJjng1hcvxmvoQg_t0gR46PhIeg9aZPsLSg&oe=66377304",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.003Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d15384476"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 2200,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1400919230539625/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/440886891_10161049095716928_4621666083162118847_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=I1s9o1vr_cUQ7kNvgFKw7G3&_nc_ht=scontent-ord5-1.xx&oh=00_AfBW00nZxnRv-Ett2O_voyFbXgBUl3Os_PlmxAZuCjt0cQ&oe=66378991",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.003Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d15384477"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/808139584556472/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/422664751_414634271460711_7427119800456459367_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=t_fFyFds2iMQ7kNvgGpri94&_nc_ht=scontent-ord5-2.xx&oh=00_AfDWxdxJ5xNwuTixkEDLUa99p8Erfzlo2qWLb-j1NbaGbQ&oe=66377E41",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.003Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d15384478"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1750,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/434843399154732/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/427124802_1600553677434236_1731608953212179793_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=suk1gyxEv3kQ7kNvgE0T15U&_nc_ht=scontent-ord5-2.xx&oh=00_AfB4wkIOkcUaOphTSr35s93F1Fs7X4XA5tndp6qMfaqasw&oe=66376D1E",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.003Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d15384479"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1750,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/811312937035770/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440751833_10231957858360163_7235637514448236510_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BflPrQ_rRhIQ7kNvgGhVxH6&_nc_ht=scontent-ord5-2.xx&oh=00_AfCzTOXjCOEwse57kQrj6INfkH8QbB4QAiIWHcSPivniuA&oe=663756AD",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.003Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d1538447a"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1650,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1655299181673154/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438163489_740410408297310_3888964667096763934_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=xcO9gxBkJlwQ7kNvgGuEc0r&_nc_ht=scontent-ord5-2.xx&oh=00_AfCBvJd4imCsI62w-TGq9Bmc3_O9y5j9Fv7Tq26Ml9Qarw&oe=66378A1F",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.004Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d1538447b"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1970,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/309570068839650/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/438224666_7265682063526895_5193842988488448211_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yur-ZLqnxoQQ7kNvgHN_OCU&_nc_ht=scontent-ord5-2.xx&oh=00_AfDAkokduq6n5imi9FCS8x5JY6eOpKXgWbmpB_qA4sB4Hg&oe=663764DA",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.004Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d1538447c"
        },
        "title": "2 Beds 2 Baths - Apartment",
        "price": 2500,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/469704062061716/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/441239033_122120643518262519_3619125055193214995_n.jpg?stp=c0.202.526.526a_dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RNC97eoivEIQ7kNvgF0Z1ge&_nc_ht=scontent-ord5-2.xx&oh=00_AfC3iYaW9wRYGBQDVZ675E0m_a9qrRCQRQfIroHehxO-0Q&oe=66377FC2",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.004Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d1538447d"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1905,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/6820145848086559/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/438032485_948626146983993_2396841133366728937_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=18Ab4Wdmmp0Q7kNvgH1Xdq7&_nc_ht=scontent-ord5-1.xx&oh=00_AfCZQdXpP_Frs6kNNpaJltcx0BBVJ-03RQtLTl7nlGg_vg&oe=66376F3B",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.004Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d1538447e"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1950,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/325414553631051/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/435823368_365470662566962_6348987649776438731_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=O0z9D3oNcOIQ7kNvgHG9qFe&_nc_oc=AdhHRGNQI77JhX8tP6H6AdRUD2vWNS-oQIjcBIBvH3a46ZElz6WnOO7TZCUpNMKB3Gk&_nc_ht=scontent-ord5-2.xx&oh=00_AfDQJTPaFwOFpLwkQLMnkHQDBCZZ2FE0UrRMA_lPJGyG2w&oe=663771ED",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.005Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d1538447f"
        },
        "title": "Appartement de 3 chambres et 1 salle de bain",
        "price": 1550,
        "city": "Longueuil, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1228848481410417/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439338734_3646321485621829_5856615791035870297_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4OfzPUSZhwoQ7kNvgEdZ3JU&_nc_ht=scontent-ord5-2.xx&oh=00_AfB4UgxA4XEWUPkX5oF6jDjSdfKWxpYSWivU7B-_2PxQiw&oe=66378CB3",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.005Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d15384480"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 2185,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1383011092267898/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/424954670_1149078056438617_8502979253950393476_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=nHaYIY_vvG4Q7kNvgFmFO35&_nc_ht=scontent-ord5-1.xx&oh=00_AfB6xcvtXuDtCqvH2p2Tpy8WVqtwFJtu52-cmCPZmn6h4A&oe=66377F01",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.005Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d15384481"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1879,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/421128893957657/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/435651543_1177274866975184_3374278984604004252_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=O7JMgqL5BtYQ7kNvgGpb2zv&_nc_ht=scontent-ord5-2.xx&oh=00_AfCHqgknQH1zVgTAoPZf8y1mNGjSra8NlxnZEbb_SnWcXg&oe=66376485",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.005Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d15384482"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1193173738710872/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439520752_10225453057372619_62418892930945624_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Wcg64XKyLH0Q7kNvgHObItO&_nc_ht=scontent-ord5-2.xx&oh=00_AfAmXokrSr4bmVX0veXLmw3kCRFD6mr3BkbA-SWUOGIypw&oe=66375CCD",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.005Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d15384483"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1800,
        "city": "Vaudreuil-Dorion, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1401733741228189/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438039116_289085920959291_4063160167433110128_n.jpg?stp=c210.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=arfXyTdtspEQ7kNvgGrChik&_nc_ht=scontent-ord5-2.xx&oh=00_AfAEDDFQv-ScjJWOjbpIHIGH5VrIXsvA_a2YOjjYy2avDA&oe=66377337",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.005Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d15384484"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1650,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/957172445868557/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/437933886_408580795441736_4065374892855254959_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=gQacrICyJ5wQ7kNvgEadUG1&_nc_ht=scontent-ord5-1.xx&oh=00_AfDMd5XNOKEuV33LELfe2Mj3t76pSptdYIOprEFu0y1KBw&oe=66378471",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.006Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d15384485"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 2900,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/381996491502932/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/439849436_977836527385332_7642940413937867792_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=4E1UDo0eQFUQ7kNvgFX5QKk&_nc_oc=AdixOxQsckkB_138_FLMWggoaKGZXhMm-ee_WGYzBTv-SePpwOEGLu86GigLX3L-DOo&_nc_ht=scontent-ord5-2.xx&oh=00_AfD1FgH_T0MDAtFySOkB2xrdabLDQjTO9KnBIV5e7xozgw&oe=66377868",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.006Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d15384486"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 2495,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/802318938444935/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/428850666_1695274974336749_8155676912120465920_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=tBxg8pdDQXgQ7kNvgG6pzPa&_nc_ht=scontent-ord5-2.xx&oh=00_AfBmS90T7HeLIXsoYmenKcrp3h1l80d_Z3ljMlHtrrbiXA&oe=66377276",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.006Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d15384487"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 2150,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/413553911621924/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/440108849_10161723982079626_4017972929127234623_n.jpg?stp=c138.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=SWgPVSXfMZMQ7kNvgHHLWxF&_nc_ht=scontent-ord5-1.xx&oh=00_AfADP21QhEur-S-RdtWmGkrUOxO2SjLANC3y4KqdGxPWoA&oe=66378327",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.006Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d15384488"
        },
        "title": "2 beds 1 bath Flat",
        "price": 2150,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1894154131055788/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/438036005_987114032759230_2688978542912461357_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=gqO0XyT9KIQQ7kNvgEd9Hvm&_nc_ht=scontent-ord5-1.xx&oh=00_AfBJhEIMoedQ9V8GrNzFD8XkeqNH2IhzyQ_tGoZDGIEQ-A&oe=66376622",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.006Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d15384489"
        },
        "title": "2 beds 1 bath Flat/apartment",
        "price": 2015,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1090111635427820/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437296346_357155987352304_4574594426113623299_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=UfqLc65_o08Q7kNvgGs47Et&_nc_ht=scontent-ord5-2.xx&oh=00_AfAp2x4gzpQl8MPqMRB87a5Kr1dsnB4pI1kolTMISl095Q&oe=66377735",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.007Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d1538448a"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 2690,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1525112128083043/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/438267807_799824795027563_5059673085585482429_n.jpg?stp=c71.0.411.411a_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=zBm5-EcpPfwQ7kNvgEpTn80&_nc_ht=scontent-ord5-1.xx&oh=00_AfAvAFlEBERK35zUuo20jpo4wXUm8bAbLgakkud19Z4fnQ&oe=66377C1B",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.007Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d1538448b"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1625,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1608095856591598/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440244430_10231836173077364_9009840056850638594_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=scRIGM8w_HoQ7kNvgFK4v_u&_nc_ht=scontent-ord5-2.xx&oh=00_AfABAFTCbYTThzzt6Lcbpn2vylNxW7CEQCCuYATKuyHWKw&oe=66376919",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.007Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d1538448c"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1695,
        "city": "St-Lambert, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/7824225584307367/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/438087282_10225924654606666_3425306288120004267_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HMiodXerEXUQ7kNvgFn_43H&_nc_ht=scontent-ord5-2.xx&oh=00_AfD19XeJiow2uGf9zDQMPEN3EoG39NVwG0zAS6a-qDKmwg&oe=66378C55",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.007Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d1538448d"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 2000,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/783254416854084/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/437001118_1762833067557563_2825412893222448167_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=DphN-ylX1tYQ7kNvgFn9WCZ&_nc_ht=scontent-ord5-2.xx&oh=00_AfDcBcGNh18WxIUcwNGdJF8ihjhKm5Sens0IYKC_bDCeNw&oe=66377B29",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.007Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d1538448e"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1595,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1185718895762400/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/438035923_7457246557689714_4947986833587664468_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=dQbEKDAWx8MQ7kNvgHPoktD&_nc_ht=scontent-ord5-1.xx&oh=00_AfDzuMJfQNR9wS7C1eWhcSBvumt0VlUXYrzEpjUoJZiEHg&oe=66376D0A",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.008Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d1538448f"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1695,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/752016553417403/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/440771690_25395782296731731_1406037267006103261_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VGyPKVAz55gQ7kNvgFUrb_o&_nc_ht=scontent-ord5-2.xx&oh=00_AfCEBhan8ZMO3OJCSRDkWqXmnY8d-mmlY4YQrph4f1qFFQ&oe=66377CFE",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.008Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d15384490"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1850,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/382825118068014/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436826604_398113819796527_8297186341900531280_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=G_KL7Alvh7sQ7kNvgGip2C8&_nc_ht=scontent-ord5-2.xx&oh=00_AfCCNWQwKAbfMayjFUr0NM2mLXeGs0gSznA-r9banQp0vw&oe=663785DC",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.008Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d15384491"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1500,
        "city": "Dollard-des Ormeaux, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1108811420232252/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439104657_949102093887288_8270349794827735890_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oHDBXDOTM3MQ7kNvgGVRdX_&_nc_ht=scontent-ord5-2.xx&oh=00_AfDsHMfKULZHhhMtbIv04vAblq7f0FrsX_ad1jm8yA68JQ&oe=66376CAA",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.008Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d15384492"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1750,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/412728051385347/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438211914_3653131478302976_4359160465784258089_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=8o5jobCg4i4Q7kNvgFdNbzT&_nc_ht=scontent-ord5-2.xx&oh=00_AfCb0hKDDwPZH-S3p6tgRutlWcvV7_yHcH3T9EJ7DjecaA&oe=66378117",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.008Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d15384493"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1850,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/340900495270950/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436768704_775749677856636_6730704022192525497_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=lIHgOGFJ2HsQ7kNvgE9BrZy&_nc_ht=scontent-ord5-2.xx&oh=00_AfANavoqAt2_2-bYUB5wafnBQib3L6H3s2U9gsog17pVxA&oe=66376519",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.009Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d15384494"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1680,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1473149333596859/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/436627160_1177165543445493_8934258641682377632_n.jpg?stp=c0.94.526.526a_dst-jpg_p526x395&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=LG37jd-2UOMQ7kNvgHS-hOv&_nc_ht=scontent-ord5-1.xx&oh=00_AfBp_dOMy-ijs_XE3ZpFtXx8HKVKdKKypVlZ5RqgLK9ALg&oe=66378B03",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.009Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d15384495"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1575,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1901880860316798/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/436764569_970944494698166_4082599650167473559_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=OA7MLVKcW18Q7kNvgFMDqRH&_nc_ht=scontent-ord5-2.xx&oh=00_AfDETsWrS7HHyl7o6WXjIVDRO1AJRa7fi6sLrCoFjqDo0Q&oe=66378152",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.009Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d15384496"
        },
        "title": "Appartement de 2 chambres et 1 salle de bain",
        "price": 1550,
        "city": "St-Lambert, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1523809605206068/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439900239_2496672617170163_7386185739200573010_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EihuyP9DumIQ7kNvgGw3BE8&_nc_ht=scontent-ord5-2.xx&oh=00_AfC49gQuxdh15rzUoJOmW2AYasMJacGWFKv9PECYR43VCw&oe=66378A87",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.010Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d15384497"
        },
        "title": "2 chambres à coucher 1 salle de bain Appartement",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1120795992366069/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/437226713_1208516397198670_7611102392753084849_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=gJ_CmsFWuEQQ7kNvgGvT-Uq&_nc_oc=AdjTJaI-hdg63WxLehY4ohNWPG6EqVh1NH_eXY9K9Jcs2ndIqyZTyrn3SCNnYa57g08&_nc_ht=scontent-ord5-1.xx&oh=00_AfB2qHckcwFK5Pkp1ouiWYlm4Oqebww5vRy49Gx36tq0TA&oe=663779C4",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.010Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d15384498"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 2210,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/446649477905226/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438163794_319077577663753_852714300762192749_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=i3q3hAjqVeUQ7kNvgFaeGaR&_nc_ht=scontent-ord5-2.xx&oh=00_AfBi-o-C4-esCxkW-icVv4IYbV6slt5l4nHVZqEvEXehcQ&oe=66375EA0",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.010Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d15384499"
        },
        "title": "L'appartement 4 1/2",
        "price": 1600,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/3913384638892079/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/435535342_1129466838393366_7209895586308971839_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=2GDePiilF4QQ7kNvgEKp26G&_nc_ht=scontent-ord5-1.xx&oh=00_AfByhTCxFqYMr4iAJRmcdoWqy0zz9bYhJS8Q-7saDfqpHw&oe=663781DA",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.010Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d1538449a"
        },
        "title": "2 Beds 1 Bath Apartment",
        "price": 1985,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/3665217327140224/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t45.5328-4/438155220_356495054072324_6469807926997508327_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=HSUB3DiZlW8Q7kNvgFC7jLR&_nc_ht=scontent-ord5-2.xx&oh=00_AfAMCN_m502tmJlF1rZC5t3GQIeHod5weIjCujOCBRckkQ&oe=66378BA8",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.010Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d1538449b"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1003068374779903/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/437348885_1570425397141330_3078667447688357415_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XD6uqB2wxJ0Q7kNvgGPqdiR&_nc_ht=scontent-ord5-2.xx&oh=00_AfBJr3OMVEszXUIo3M-gunA_LXdHq2lNDmlfrffkvnJqyQ&oe=663778C4",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.010Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d1538449c"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1750,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1826550374484232/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/439343873_1613400226144808_2773308565604826329_n.jpg?stp=c330.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=giZBGCwpAbQQ7kNvgFzoRSa&_nc_ht=scontent-ord5-2.xx&oh=00_AfDnd1UOAG4Ru49a9lR8xFGUjmBkltmhJNWnRFNaMY_gqA&oe=66376B6D",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.011Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d1538449d"
        },
        "title": "2 Beds 2 Baths Apartment",
        "price": 1850,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/1101574857744222/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-1.xx.fbcdn.net/v/t45.5328-4/412552264_6890825810970980_5459391334730059341_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=RfP97yhTg0oQ7kNvgHOeZ7P&_nc_ht=scontent-ord5-1.xx&oh=00_AfAOoAbKj9Y3_F8IJfaUNZmMqndjcX0PRSCpDKf75dvpJQ&oe=66377BAA",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.011Z"
        }
      },
      {
        "_id": {
          "$oid": "66319f693c03e20d1538449e"
        },
        "title": "2 Beds 1 Bath - Apartment",
        "price": 1500,
        "city": "Montréal, QC",
        "bedrooms": 2,
        "url": "https://www.facebook.com//marketplace/item/466164462433756/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
        "img": "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/437497070_10161576838502774_1835632196391787731_n.jpg?stp=c0.67.526.526a_dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dt_VEjRD_doQ7kNvgGFmpXM&_nc_ht=scontent-ord5-2.xx&oh=00_AfA_gQgf8a-80IFoeZVi0XIDw-UElc1R-3tFbigY0MUOSw&oe=66376026",
        "date_scraped": {
          "$date": "2024-04-30T21:48:25.011Z"
        }
      }]

      res.send(AppartmentsData)

    /*const appartments = Schema.appartments

    const appartData = await.appartments.find({}).exec()

    if(appartData)
    {
        //transforme la réponse en JSON
        res.send(JSON.stringify(appartData))
        console.log("Données insérées: ", appartData)
    }*/


    
})

router.get('/users', (req, res) => {

    

    
})


module.exports = router