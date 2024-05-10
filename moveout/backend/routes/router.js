const express = require('express')
const { Mongoose } = require('mongoose')
const router = express.Router()
const Schema = Mongoose.Schema

router.get('/appartments', (req, res) => {

   const AppartmentsData = [{
    "_id": {
      "$oid": "663b08da8eaff6aae413a1b2"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 840,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/976199293912780/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441350074_7163314483797099_872077244687563396_n.jpg?stp=c210.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N0_1MPtYJ0YQ7kNvgHJAmbu&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCetXc0Q6_TB0BTOgWsT5b3yD76FgcjNHA0xZcbjDpPlg&oe=6640D0D6",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.014Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1b3"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 850,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/414622431318360/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438145887_1627342808036890_6667496797886134274_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QaHMY0zQSGIQ7kNvgFyKrwg&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAsuq35NP6tDLG_WjFtAvqkqxYRsV25wbD_BJm9IzYpnQ&oe=6640CC05",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.317Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1b4"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 840,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/350035841429334/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439831138_304521436030496_121095032113515107_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=V1Kc4ymBqFsQ7kNvgGF254g&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDZcgfqPbNenEmRvshjZv7yfg0zj1nRg1CYIykxkEfvoA&oe=6640F12C",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.319Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1b5"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 897,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/293523860475007/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438301376_459399713114813_1927618513157255204_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fOXu9wDhQe4Q7kNvgHK3Aty&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBBIHVxhagf3hpIF1dKP_oI4riXSAUbagJmzVpFrqgERw&oe=6640C2A0",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.320Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1b6"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 900,
    "city": "St-Bruno-de-Montarville, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/451007010754320/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/427227685_981442710026273_7966460062037753850_n.jpg?stp=c40.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=RHuiF8HvJB4Q7kNvgHdCwk7&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDCsdR2OqCIPdr9hslQT6hjsWQIWW0l0cwQFv85MS-aUQ&oe=6640F5C2",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.321Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1b7"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 750,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/321036187692404/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/440282368_371882621922943_6219473134246991841_n.jpg?stp=c0.306.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=-1Jb-LknfIsQ7kNvgEwoPsT&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCkgR6wq9rPKNgeLfK3tUH_PBmSQOLPGuDwiLiFdDOuZw&oe=6640C129",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.323Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1b8"
    },
    "title": "3 Beds 1 Bath - Apartment",
    "price": 1000,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/827256759422076/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438088185_3093071077531437_242513204298682522_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PwjSt6tUyZMQ7kNvgGlfJ5Z&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBtOlh5jD490ZRDc6bw-BGQWEfhouriBxeT-ZH1Wr8XLg&oe=6640C59D",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.324Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1b9"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 950,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1003682331345709/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440747113_3793511740928128_541267786269416164_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=L0eMmJTeK7MQ7kNvgGoluA6&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCQKbyEZCRKPfbNvv-SNQB2K07egBT0YAt1ybtO7zoI9A&oe=6640D115",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.325Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1ba"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 830,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/976748773794132/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440120090_449277530804329_5865034617259325043_n.jpg?stp=c116.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=DYjGXDZq0LMQ7kNvgFsVqlb&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAZL0-7aiTimmwXO-8cG2ZVL5ePLg-ds9FFPP3vUAbEIA&oe=6640F61A",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.332Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1bb"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1000,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1998230667262795/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/439960884_10169101501820691_2421844388962561307_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nlsAKfDxL1IQ7kNvgFD0wPv&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDazNNkxegjQZ3VXT4wHuNUnFUmgGWHvgULK01NEuHmSQ&oe=6640E273",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.333Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1bc"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 825,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/445327514713898/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439416813_270545196054423_9072547803834436517_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=LTSrBW0Op70Q7kNvgFPgVYt&_nc_ht=scontent.fymq2-1.fna&oh=00_AfC7reHsMB2Z3eOyfUNOiaTyUyBcAkt6Luy4TUlErnVl9w&oe=6640D382",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.334Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1bd"
    },
    "title": "Appartement de 1 chambre et 1 salle de bain",
    "price": 925,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1412252829424401/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/427109285_7611225965611503_5167826129726727254_n.jpg?stp=c29.0.540.540a_dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=-z4U4qJsbmkQ7kNvgG9pcL-&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBI5pyiVR4ce_DSNkLpHHVqlEMbrEuvFQzSjDXkAILZUQ&oe=6640DB57",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.334Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1be"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 980,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/456562673558322/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438310115_820222790166512_7115454258916617806_n.jpg?stp=c0.86.526.526a_dst-jpg_p526x395&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=7rDI123BbI4Q7kNvgGvDAK6&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBM8b8tpN-nJ1M7uC4_fBQJDsd8vJESfsmhuBIFQ1d4zQ&oe=6640F1CE",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.341Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1bf"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 900,
    "city": "Westmount, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1105449863957576/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438080610_1383319572372467_884735346337347009_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=jwgACcaRk-QQ7kNvgG48bgm&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDE_ClbgqoyOS_SOXMjTPom5trMTWDIh5cK-EhePbhfYA&oe=6640E82D",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.342Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1c0"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 830,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/745880737736141/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/439503861_2205065196505820_1511858013336333573_n.jpg?stp=c0.53.480.480a_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=T39D9nFIDpQQ7kNvgEojkjo&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAZlQazBFG9i6THHQxHDyV-R320zdE7wNeV8twZY5oulA&oe=6640E342",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.343Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1c1"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 900,
    "city": "Westmount, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/336893412743521/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438108019_4155293681365862_6404768245815695440_n.jpg?stp=c90.0.540.540a_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NNVBEkqinHgQ7kNvgGQ2IG9&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCCV2mR90TuDl1RmL8o-JGWdsZX8o1T9jBszWYjoybCXw&oe=6640F090",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.343Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1c2"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 950,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/791716582565008/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438080320_1960997850969976_4960666214263259239_n.jpg?stp=c136.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=3Dbj_5qtMtcQ7kNvgHw23o6&_nc_ht=scontent.fymq2-1.fna&oh=00_AfD-WWLN_qI6C-6XVjlxczy5M0v5BlO9wWJpFN8U4azyDw&oe=6640EEAD",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.344Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1c3"
    },
    "title": "3 Beds 1 Bath Apartment",
    "price": 1000,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/404562785688340/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/429868526_1137216854364578_7693313261744689279_n.jpg?stp=c1.0.523.523a_dst-jpg_p526x395&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=7H7r6CxsDbkQ7kNvgGisvjX&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBSsD9FKBHi_dXjYD23td-fXynKhfDMkHdHtn3un4N25w&oe=6640CC42",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.345Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1c4"
    },
    "title": "1 Bed 1 Bath - Apartment",
    "price": 900,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/415897664486156/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438097904_1223177309059324_1389140980281415767_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kfN8FXV2ELwQ7kNvgE-r8pL&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDfgCnzDSzLwqvmpzbhrYiBYrRcrMUCAsQhy1AS9tqKcA&oe=6640F3B8",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.346Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1c5"
    },
    "title": "1 Bed 1 Bath Apartment",
    "price": 1000,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1162436228139467/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438103139_415938391206984_5456928925582125778_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=i6MvevPQTosQ7kNvgGEZDMg&_nc_ht=scontent.fymq2-1.fna&oh=00_AfB72Ph-jQCJKAXwhVW_lpoxStHiQNdTMFypfvo20Uj8OA&oe=6640DF03",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.347Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1c6"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 900,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/7379617455493144/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440790776_1181505706538444_8659639116760472397_n.jpg?stp=c0.202.526.526a_dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=plU9TrkPnBMQ7kNvgGJFIDm&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDoSRgOHFiUCt7zzAlVq0uIzZK4jKXKdZsLyf0s6w6KBg&oe=6640BF87",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.348Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1c7"
    },
    "title": "1 Bed 1 Bath - Apartment",
    "price": 900,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1422681425039972/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438174827_3752117648339626_9197926663568890432_n.jpg?stp=c158.0.527.526a_dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=eBtVrqvj2CIQ7kNvgE905eL&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCWP9T1sGtF00SRBk2S33nFha2xTRGpMA3U2oEWgFU2AQ&oe=6640E642",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.349Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1c8"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 950,
    "city": "Prince Edward, ON",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1162363488231551/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/439813686_10168957241770245_2871603975818495651_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mFlwmGqjGJ4Q7kNvgGhwWEi&_nc_oc=AdgaVLNxadwiz2fjMyqpGrlhnTig0TBnu0OBzPwMHC8rM8HmZO61MQr_YvJXVZdoKCb7JKphuQ9liOP1I8XQU5tP&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBwCfqsLNh_uuKf648kXExoxoBdDimStDnlHuZohPR2Ww&oe=6640D23B",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.350Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1c9"
    },
    "title": "1 Bed 1 Bath Apartment",
    "price": 870,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/368283528953438/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438079711_1158191115188250_8976527539187544379_n.jpg?stp=c0.80.480.480a_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=R-5BgNWwxB0Q7kNvgFi2I2F&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAdj-6JXnayRw4vb2ghIcxy5lwQ69YPx4oCrM6Zd4fhtg&oe=6640E34C",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.350Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1ca"
    },
    "title": "1 Bed 1 Bath - Apartment",
    "price": 920,
    "city": "Dorval, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1622226775279600/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/439613729_1147232729923379_7951627613446645695_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=k9no8TEAn7sQ7kNvgGeroQ_&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCmr4SCMf9yAjgZugjlRVJMDqp3E7Unf2NwJy6iWUjK2g&oe=6640D3DF",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.351Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1cb"
    },
    "title": "3 Beds 1.5 Baths - Apartment",
    "price": 900,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/3417344028563887/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440783323_1213407023373997_599374731874846790_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0c0_ASpqgtkQ7kNvgGnl5WV&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBy-nQonc3aG0lQpfRCy8UUgOHOMiuBNmFbSPMnDfudRA&oe=6640ECC8",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.351Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1cc"
    },
    "title": "3 beds 2 baths Flat/apartment",
    "price": 1000,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/2804255223060679/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/434845335_3740260432873527_1599412359974459189_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=Qsc5teVOWY0Q7kNvgFMF5ud&_nc_ht=scontent.fymq2-1.fna&oh=00_AfC7NS3fGkxVOlT4HysUkAUC6lmP6FdAuLBOuSMuNn08_A&oe=6640C41F",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.352Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1cd"
    },
    "title": "4 Beds 2 Baths - Apartment",
    "price": 915,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1156545958864647/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440144438_412881221539381_8280748637034486234_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=SPWtVp8vcl4Q7kNvgFcCk5f&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDZTtgQG_PXLsfy8xrWkNn0Vfwvo4RZ4mKCnTPGX4frUA&oe=6640DB7D",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.353Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1ce"
    },
    "title": "1 Bed 1 Bath - Apartment",
    "price": 850,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/818557963658221/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/436839569_348434657811362_282949494403273777_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=ExP-rH7JB3AQ7kNvgEZdHez&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCY6af1Iz85wgH4bG_aV9R1C8ns2ynLvMjY0AJVOlePsg&oe=6640DC9C",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.353Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1cf"
    },
    "title": "3 beds 1 bath Flat",
    "price": 930,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/864934978982661/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/437589815_311439431977153_3524545998942300468_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=1Wq2IzLh_AAQ7kNvgEzjw6t&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCNByadPvPXqn5K5iq2WfEUBYcAv0LyUQ6gXjQWn6lWmQ&oe=6640EF68",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.354Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1d0"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 550,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/389557684057408/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440253724_460650029739576_917380266343702119_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ehtJMZWliKsQ7kNvgGDcHnB&_nc_ht=scontent.fymq2-1.fna&oh=00_AfC6tD8iqckTUP38p4wWTxNlKzatH7-oT2LMKJVPNSj7Zw&oe=6640ECE1",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.355Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1d1"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 496,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/383359784692122/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/436962028_962746322158807_4885713628241244368_n.jpg?stp=c88.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=Yljk4y1swrQQ7kNvgHA4IUJ&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCBc7MJTJw7d3OVG1LBWyY0gZBepJWsiwCVXKfPn-DztA&oe=6640E79F",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.355Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1d2"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 900,
    "city": "Laval, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1501254577468053/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/434253588_962314542152896_7853012799946113379_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=BNiFWsvQqfQQ7kNvgGz2JVy&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAhmoL6-c7UTl0i1Dj8JVr-fqx_qfHiICgoRvcDcwXkNA&oe=6640E698",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.356Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1d3"
    },
    "title": "Private Room For Rent",
    "price": 924,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1918306871936077/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/373599977_6940346589331260_9069380561417257495_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=jT2PjA7nRckQ7kNvgHy1Lmz&_nc_ht=scontent.fymq2-1.fna&oh=00_AfD2nmg28ImM4LOXN0UgfYcnoNcoEYSCeJ1fT1OvivN4GQ&oe=6640CA69",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.356Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1d4"
    },
    "title": "3 Beds 1 Bath - Apartment",
    "price": 890,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/830489449120314/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/439120764_122138639384125152_3515999977842266790_n.jpg?stp=c0.35.526.526a_dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=LbWaMzTXlAgQ7kNvgH8TfeL&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDBwUHCHgVNF95T6Ln1IUDR_ycOcuElz2hIz6Zv1uVmzw&oe=6640DC14",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.357Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1d5"
    },
    "title": "Appartement de 3 chambres et 1 salle de bain",
    "price": 890,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/7439899829460268/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438011097_971074417547947_5541939740476588596_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=pygIcenXQW0Q7kNvgF7oJn9&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBlUYd6Qho-HIVjXPc-D5qCw6nC0c-AiH5Hi8GQhAzixQ&oe=6640F6DF",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.358Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1d6"
    },
    "title": "Appartement de 1 chambre et 1 salle de bain",
    "price": 990,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/770436731521836/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440802549_887376023192479_5744262952304412964_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=erxqfqILI7MQ7kNvgGg7CIU&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDEkMrsjPn3qQoSGXAc4hgBhWxfXt6M_t588MV6aKvRCQ&oe=6640F404",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.358Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1d7"
    },
    "title": "4 chambres à coucher 2 salles de bain Appartement",
    "price": 585,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/998979278900030/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438163818_1886583411786955_5077379215086656685_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=CstVBoDEMcgQ7kNvgHjZZVA&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBsZYopeWjEnr9f35UlhXwco5S4aJuh-hSu5nmi9KglTw&oe=6640D6D7",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.359Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1d8"
    },
    "title": "1 Bed 1 Bath - Apartment",
    "price": 1000,
    "city": "Brossard, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/447286267781350/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440424596_10160522594217061_6791453220887392733_n.jpg?stp=c48.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fTZIc8s0KikQ7kNvgHjGll9&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAPXsLtrxz_zEXZoAxJrZ4MWbm3eKhG8WYUKOg7OK6Cpg&oe=6640EF6D",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.359Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1d9"
    },
    "title": "Studio 1 salle de bain Appartement",
    "price": 995,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1673654193170582/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/436787977_459908839927497_380346795737620378_n.jpg?stp=c330.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=thoS7Wb9TjQQ7kNvgHyDVzV&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDLfP031F2QeF3r97VX05pzuh6bTBkNePFoSN5uxDS0aw&oe=6640C3FE",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.360Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1da"
    },
    "title": "3 Beds 1 Bath - Apartment",
    "price": 900,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/738895554985735/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440941447_1112478273311478_3749021187586240458_n.jpg?stp=c92.0.540.540a_dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MwQND-RGuxkQ7kNvgHT0_si&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAucqj5xoCaxlgjNks2OzJ9_9Ixmz_MGg2DaL_09NZtTg&oe=6640DB83",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.361Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1db"
    },
    "title": "1 Bed 1 Bath - Apartment",
    "price": 925,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/7444827848967273/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438225271_448889031001417_1796134083909845338_n.jpg?stp=c0.80.480.480a_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=pTnspwRkeWAQ7kNvgE4Mrws&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDt_GjMBGbLQKYsx52kMskhd8Vg3c_jgHwCiJxDUQei1Q&oe=6640D28C",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.361Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1dc"
    },
    "title": "4 Beds 2 Baths - Apartment",
    "price": 615,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/7788762857841410/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/440064381_893943896107050_76334785616582651_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=RSXRWRQq-KoQ7kNvgG92-38&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAkVmc383vPXkKen7pOEG2DAzOygkjcP30eV5MQuujYJQ&oe=6640CA25",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.362Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1dd"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 728,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1485124385750457/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/416700242_467481519277647_6377015721074419019_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=tWgFi4ZUePMQ7kNvgHTB9_E&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCYQFz3qz1OT4UIv30-CiHC2Iv1CnwyB4-S10DudZZHSA&oe=6640E368",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.362Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1de"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1000,
    "city": "Beauharnois, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/964852772020930/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440150729_1845544149202034_3174257052467216893_n.jpg?stp=c91.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IWsXkawvFkEQ7kNvgEr5zz_&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAdKuhOlQNVtfvktMq1B1SHdUOTe5YSiJwj7T8DOrTB2Q&oe=6640E1FF",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.363Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1df"
    },
    "title": "1 Bed 1 Bath Apartment",
    "price": 900,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1256493005311348/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/424974069_807809194637442_1225884586131275188_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=SvoEVZDfrBcQ7kNvgFU1Rfc&_nc_ht=scontent.fymq2-1.fna&oh=00_AfC0Q3-p5Prft8UfvfR9XhBe79oz4-KVppfxU43lR3Q66Q&oe=6640DD6C",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.364Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1e0"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement/copropriété",
    "price": 900,
    "city": "Roxton Pond, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1487389332213399/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/437914664_971552911190637_2955181221865531607_n.jpg?stp=c0.60.360.360a_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=-CdipmWQIWcQ7kNvgHYrwvj&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAU-EnfuXA4I-2TJ1ZgI2VMO9au2Hlj2eN34sCo3na2bQ&oe=6640E70D",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.365Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1e1"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 975,
    "city": "Sorel-Tracy, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/295796893575087/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438304624_10161587838783619_9181771278143675029_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ovUISbaNjoQQ7kNvgF4TbM5&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCzbGX-S_z5vv2NyCoaKXUSrESLONoI2vIGsK_2Kwe0jg&oe=6640C4A9",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.366Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1e2"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 900,
    "city": "Granby, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/956091942643201/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440850617_963874238746134_1642992965541198118_n.jpg?stp=c0.203.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=buLLN_JGKeYQ7kNvgHYcVog&_nc_ht=scontent.fymq2-1.fna&oh=00_AfD5agJP7E7gvfcr7vbcdzHLYFuVd217QnONrQifHen9Dg&oe=6640E838",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.366Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1e3"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 675,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/3348851705417722/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/442393413_10231794703835676_2491581850620481626_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ZSp4R9QvzPkQ7kNvgHiVR46&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBKO-qhtv1Y5yRRdQalMMV5mmT20yUcYAAsrW3mmsAx2Q&oe=6640ED80",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.367Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1e4"
    },
    "title": "Appartement de 1 chambre et 1 salle de bain",
    "price": 900,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/409744448681653/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439864509_899217455342759_4418040550628530213_n.jpg?stp=c136.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=nmTt2F4VFU0Q7kNvgEUU-r7&_nc_ht=scontent.fymq2-1.fna&oh=00_AfABn5hFuXOTv11L4uYi_0B_cI00PH4yUaOr52PTOCfMKw&oe=6640DFD8",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.367Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1e5"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 950,
    "city": "Joliette, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1362731611079829/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/440239146_2057735551307639_1661841129318975370_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=B05_33A8mVcQ7kNvgG6W32p&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAwzovlZRaYDClqsv6Yk-kumWg3OxC_uy6MNW_EfbTb1A&oe=6640DCF7",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.368Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1e6"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 667,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/445890721305183/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440439873_296816983468319_5122272599387960429_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=q7AEUOsaYtYQ7kNvgGYGDYs&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDo7F-b3gBhou4oQnxqg9NP0LcYjGu0_X9EFzEjm_jTFg&oe=6640D814",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.369Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1e7"
    },
    "title": "Appartement de 1 chambre et 1 salle de bain",
    "price": 920,
    "city": "Laval, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1489505775299990/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440572440_7733906836676863_6443228556166077847_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ArCXNPdXtjkQ7kNvgHEqrOQ&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDFC4gLoZ85JAv8yyBXQ7A-TOHYofMiIZao_TX-2zHpOg&oe=6640DB55",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.370Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1e8"
    },
    "title": "1 bed 1 bath Flat",
    "price": 990,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/25540770682203449/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438032463_2088223714911411_9218456258144182367_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=rTYKDeL0l1EQ7kNvgFb7UYl&_nc_ht=scontent.fymq2-1.fna&oh=00_AfByl0KIep27dCOdIHDTyXxDvHs3gegBj_IQxShpyBLGtg&oe=6640DFF4",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.371Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1e9"
    },
    "title": "1 Bed 1 Bath Apartment",
    "price": 950,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/972761771180690/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/428123149_303723252596553_6289977161562022746_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=SE4xFD8tmBgQ7kNvgHzQNGw&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDzToTaM4qmwJ3mJ480ws8F-CztGCQP21R9rVDKtn9rmg&oe=6640C108",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.373Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1ea"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 950,
    "city": "Magog, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/751576960297369/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/437529545_877041674184700_631744609992115928_n.jpg?stp=c40.0.240.240a_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=Hz9HTY3OhJMQ7kNvgG-ca5a&_nc_ht=scontent.fymq2-1.fna&oh=00_AfD5zw2V9UIoysAGXFAroAgHioUg_2hf4-uD8rGSRuIfYw&oe=6640C971",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.379Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1eb"
    },
    "title": "Appartement de 1 chambre et 1 salle de bain",
    "price": 975,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/984384866433127/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/437322715_1109434250142746_5354518700820467417_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=UMyQ1SMTdIwQ7kNvgGqnLg7&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBIGn-YrI1tgXvRiasTCYpQjEnXJE0xGtRCOJeFQ0eBqA&oe=6640E308",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.380Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1ec"
    },
    "title": "Appartement de 1 chambre et 1 salle de bain",
    "price": 950,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1154194399264274/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441486223_1823481494785830_4001350802798082571_n.jpg?stp=c89.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KhDhQvSaqnMQ7kNvgFJRCKZ&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCid6plw_5Wr09oSzzI2bG45wmzcuHoDWFTTCMUx7HKkQ&oe=6640CA6B",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.380Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1ed"
    },
    "title": "Studio_Sublet_June_through_August",
    "price": 958,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1175896546921706/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440983872_7539025062872164_2118105382381521676_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YvGe3tyjPncQ7kNvgFG4Ac8&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCA8YEzgsgTqZNsfGfYWYsphvC09L2sYZKMOv6rqL517g&oe=6640F10E",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.382Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1ee"
    },
    "title": "4 beds 2 baths Flat",
    "price": 950,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/978892030434883/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/441413351_3919876444955288_8899471122126688922_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=YhW7mTyDe3sQ7kNvgEQSL0i&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAvTGOc2zFu2Il3pjgjywf4hsstTlzXjO4zY3JuLO5wmg&oe=6640D03A",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.388Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1ef"
    },
    "title": "1 Bed 1 Bath Apartment",
    "price": 897,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1160476741624068/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440934816_455181576873580_8311092358477829190_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lW_qMMqoTUUQ7kNvgF7Fp1h&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBH-2LlYqmwiHwwJAqjJTxvvRrwJksKPoOp-YX3Sko4TQ&oe=6640E937",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.391Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1f0"
    },
    "title": "1 Bed 1 Bath Apartment",
    "price": 925,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/418192374262392/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/429492899_820438359973775_3521169430814147409_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=tFyE41o7oeAQ7kNvgHxiSL2&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBRJSixyalVegzNyCMpC8AjxCetgtftYhuERzzkh0jGPA&oe=6640F43C",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.405Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1f1"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 635,
    "city": "St-Jean-sur-Richelieu, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/807447427558332/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441533630_1993283507752736_1957346429236559949_n.jpg?stp=c0.202.526.526a_dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=me6TqeDIWSIQ7kNvgE4tBPP&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCewSay2OZ5MzeaK1jziyKBUTthU6riL5B2TCsxF49pCw&oe=6640C422",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.415Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1f2"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 667,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1457284521661720/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/439070113_294969333653084_1796054458336459722_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=y8qQ7I0qhK8Q7kNvgF3z55q&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCUmbQoWLW8fdd2cLe83DZhEQu_3Xmx8CWsxGGouAfhGw&oe=6640C43F",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.419Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1f3"
    },
    "title": "Studio 1 Bath - Apartment",
    "price": 950,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/440899781683282/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441319324_10223611170203186_6736860511820945259_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uAD3I0nk3xsQ7kNvgGLO6SP&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCdbcvXLs7citDuwKyGFNyQRN6-9NTLhbS3MrkB5UErNg&oe=6640CF12",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.421Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1f4"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 805,
    "city": "St-Hyacinthe, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1500465174161851/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438131441_959902665460658_8763508293140423381_n.jpg?stp=c168.0.515.515a_dst-jpg_p851x315&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=AlcqESjeiIkQ7kNvgEKv5Bm&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBOFVAbgO-hhfhYFn8k1zlph1AzuWGZv-BaEsFCzRM5Hw&oe=6640CEB5",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.423Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1f5"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 618,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/406169395677265/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/418595050_939982830993619_4064337228154190630_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=rwwe1wq1opQQ7kNvgFopBc2&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCbM12HCr0MyQk565IvtHQA_HKqJartmAHkuAAtcVBXIg&oe=6640F16C",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.425Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1f6"
    },
    "title": "Appartement de 1 chambre et 1 salle de bain",
    "price": 915,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/985258623311598/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438131710_7604019379658013_1482058365176935461_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=bZtclmzuBZoQ7kNvgEwOqqz&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDArmpAE8q7yiFDOaqFGVyggY6x5h1d5oh3WQBiCOM8BQ&oe=6640D0D1",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.429Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1f7"
    },
    "title": "Private room for rent",
    "price": 980,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/3682946341953008/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438224404_2719831514833518_5790493098187712472_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dcdCK50ZcWMQ7kNvgFBr9l_&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDu0-us-ZOdAl0vI1uKMS4kWggIL1wUO9NFf_H6j8meCg&oe=6640D81D",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.436Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1f8"
    },
    "title": "Studio 1 Bath - Apartment",
    "price": 995,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/454814200292963/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/442384408_2179531739047119_7073758724144312824_n.jpg?stp=c209.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TKQ-rLlbfnMQ7kNvgGVkdso&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDIRDW-b6n8qfnSCI5Nt2GqZBJxZXXGBC6oN1pkNNNhAQ&oe=6640F789",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.440Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1f9"
    },
    "title": "1 Bed 1 Bath Apartment",
    "price": 1000,
    "city": "Laval, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/2115441228819565/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/436764530_1845982675829619_3544843520846644312_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=EdnwScX0vggQ7kNvgEOUp9-&_nc_ht=scontent.fymq2-1.fna&oh=00_AfA-jpYzwZMScqrrf0wROnkfmf9vttRexQEGHbtweREXoA&oe=6640DBAE",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.441Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1fa"
    },
    "title": "2 beds 1 bath Flat",
    "price": 657,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1470047020535767/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439631758_457626233401235_2366800468929738100_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=vRi7FyxobLQQ7kNvgEZ_bcR&_nc_ht=scontent.fymq2-1.fna&oh=00_AfD9ua_Gbt9JhogstUjPDKRYCiNWBNJqdxf0U7ujCNFgNg&oe=6640E430",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.447Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1fb"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 995,
    "city": "Gatineau, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/291353114066813/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/440373518_1892391914532109_781238472757358015_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=6rQToiU1sT4Q7kNvgEBiyRJ&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAIbj8ADYzBJCfdnub8yyJL-c7E8FFbwICOnAodeAWp2g&oe=6640E061",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.449Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1fc"
    },
    "title": "2 Schlafzimmer 1 Badezimmer Wohnung",
    "price": 880,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1410463799834882/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438204131_368645358930137_7295952466003029972_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=xZ2oJujoA94Q7kNvgE82hOM&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCVB10EbCza9zqfFLZpLfWPps8Yr1mWT4nn31wILO935Q&oe=6640E132",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.453Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1fd"
    },
    "title": "1 Bed 1 Bath - Apartment",
    "price": 910,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/935025121750603/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441250527_7643768329045069_9042767850171680735_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IF7NhvrQvbUQ7kNvgEaZCCo&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCDccb8TFwG4rQzioX2cOyxTnPJK4GEsNv0AXJKGuQ-Ng&oe=6640DC3F",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.456Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1fe"
    },
    "title": "2 1/2",
    "price": 850,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/812275143659716/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438062637_2533922796788948_1201706458759804517_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=hAGwQwGaCS0Q7kNvgFXzF-P&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCybemq7Kkel466TM9eyKPV8oqcrk_GKIKvw_szXpW59Q&oe=6640F774",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.457Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a1ff"
    },
    "title": "3 Beds 1 Bath - Apartment",
    "price": 800,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/467478985701912/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440740029_7667093896687914_1650500843354490197_n.jpg?stp=c0.56.526.526a_dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_3jNqMoq3ygQ7kNvgHYA0Qf&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAPOe_6i6f3rm6s2xRPvK_GgBUEhb9oaxCeeMB8OIFMcQ&oe=6640F5CF",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.458Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a200"
    },
    "title": "Studio 1 salle de bain Appartement",
    "price": 920,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/457165209996254/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439987116_958293979007657_4740381101375781637_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=w3MbOS0skzgQ7kNvgFdseEh&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBugpYvPjq6JySim7cQ5OZojC4ZCa4-2Up8rNSiSBl5Qw&oe=6640F4B8",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.458Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a201"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 750,
    "city": "Sorel-Tracy, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/8208845649131952/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440373376_10161393926696578_4210563725324099429_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xlYzX5Fy0UEQ7kNvgE-0MS0&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBETYAaB8z8MkEstQSt4s_vVdUgjVYbM37F0G7fTnKIzw&oe=6640C9D0",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.460Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a202"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 510,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/812692273549651/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/426198160_1168366831181839_8495138305831946117_n.jpg?stp=c0.204.526.526a_dst-jpg_p526x395&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=jnwL1zcEkOkQ7kNvgENv2Kc&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAYRYzXGn7IJQi-w1dfrT0Ojyqnc3uwWcGN4Fn39JBQhQ&oe=6640CF14",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.463Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a203"
    },
    "title": "1 Bed 1 Bath - Apartment",
    "price": 850,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/2015648635496936/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440740061_2755224784650977_2280433851502102811_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qpvVynaXgSYQ7kNvgEpB9mk&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDuK-5AQADw67BHgOAgTtWzo8c5IryRAmVRc9gQSNDhCg&oe=6640D179",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.464Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a204"
    },
    "title": "Appartement de Studio et 1 salle de bain",
    "price": 925,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/754692763411149/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438131680_1855951148151363_1175082840567601609_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=lTNygV9tEKgQ7kNvgHWpFNL&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAxkyQ43GEeamgt4Ny4kq1eQW7UcpKZ0Ew-LskPr0nj3w&oe=6640CC23",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.465Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a205"
    },
    "title": "Private Room For Rent",
    "price": 700,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/2200117240338007/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/437065649_328133776644885_4915484468598310736_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=NEwPCAuwLLkQ7kNvgFFc0aS&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAaO808-H1RQvYYfpyfwjIZV525b5Mr1R-9Qd8zkHHnjQ&oe=6640D20F",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.466Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a206"
    },
    "title": "1 Bed 1 Bath Apartment",
    "price": 1000,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1009029940919772/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438242346_409653825267290_6902997120970905521_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=oC7NQjBWjSIQ7kNvgGHf6cl&_nc_ht=scontent.fymq2-1.fna&oh=00_AfA-sGwBTUGJQO_4DKPrEsEBJziGzlIMhEEfu2HpsIzotQ&oe=6640CAC6",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.466Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a207"
    },
    "title": "4 Beds 2 Baths Apartment",
    "price": 850,
    "city": "Ste-Agathe-des-Monts, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/312334991885929/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440420642_10160407815397872_1182362004974805558_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ZUuLj4xTunQQ7kNvgE-Ncjs&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDFVDgSb9UwrtOHOGjSr7dQijnont_SN10l4fHbO6sO_A&oe=6640F755",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.467Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a208"
    },
    "title": "1 Bed 1 Bath - Apartment",
    "price": 850,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1166505707840038/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441486842_7933506793326806_5666026995882900554_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-lue-i_MOtwQ7kNvgGNihVs&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBV_pVKG8L9tiQx2os9WQ_-cWb4WI2aDBUR2frgAQ_0Yw&oe=6640CDE4",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.468Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a209"
    },
    "title": "Appartement de 1 chambre et 1 salle de bain",
    "price": 800,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/456184103550230/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440943868_7490109014442252_7593483562599925630_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=U2Ht1YEH6zEQ7kNvgE5Nobs&_nc_ht=scontent.fymq2-1.fna&oh=00_AfB9IAWoro792LFw-FxFkQd9ibUg6CGGbrTS5IwkPu2RxQ&oe=6640F6F3",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.468Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a20a"
    },
    "title": "Appartement de 3 chambres et 2 salles de bain",
    "price": 1000,
    "city": "Shawinigan, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/969204844429292/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438129141_10160110632528997_2935473991678192795_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IbZUAlS63kYQ7kNvgH9T6Gi&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCp_hKqSSAHhoVna6tKceJLQlhU-wunR-niTosc4crtew&oe=6640D9FD",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.468Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a20b"
    },
    "title": "2 beds 1 bath Flat",
    "price": 700,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1298716224372614/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/434272754_732077569115545_4193484139429980370_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=F3XdoGEvmr8Q7kNvgF4ONaB&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBLcQwKlnL_UkS9bxYKgeqWtrWiAJHET5kNCjbbMOgT4Q&oe=6640D441",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.469Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a20c"
    },
    "title": "Appartement / condominium de 6 chambres et 2 salles de bain",
    "price": 650,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1213347683162029/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438303506_758560436428291_7236271588338991180_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=jlxjjnEmcpAQ7kNvgEFsQtg&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDhUE0S0jXTRPKfkMkpVTEHR_2voe8DNZG8iRBtEeBXGw&oe=6640C42C",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.470Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a20d"
    },
    "title": "1 Bed 1 Bath - Apartment",
    "price": 850,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/3637731553150256/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440259234_2432660960276422_8812856034318115241_n.jpg?stp=c100.0.540.540a_dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=21_tohkIutAQ7kNvgELxiry&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAKmkABMseHBvhR2W3ZtXQ9E1MUOTymd69XkGc-9bzFtA&oe=6640DACF",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.471Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a20e"
    },
    "title": "2 Beds 2 Baths - Apartment",
    "price": 903,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1193296375008514/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440581781_1828546967612830_2921225977182759617_n.jpg?stp=c0.32.296.296a_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6HhSqeZpOk8Q7kNvgF9FF_y&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBFZyJTk2pKWw0BXRPeSSmxOVicxQJiAXnNxLdt15YjUQ&oe=6640CBD7",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.471Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a20f"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 980,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1623921048420256/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438036952_846710027473481_8049731712049565204_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=pSLMG9v8m0AQ7kNvgEH1hS4&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDaNJ-LJA0Koja614wP4hqHbXIjTugTSrx0Gjh38kPfjQ&oe=6640C31A",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.472Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a210"
    },
    "title": "1 Bed 1 Bath Apartment",
    "price": 1000,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1537959136769151/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/437116449_1152620896176176_5367350775369823402_n.jpg?stp=c210.0.540.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=qaKVAt2lTEAQ7kNvgEZkqy6&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBlDZftBm6lneNvZvjTPHkOoSwN59uHleJyr-OxTSZfAg&oe=6640C1AB",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.472Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08da8eaff6aae413a211"
    },
    "title": "Court terme 1 chambre dispo Coloc de 2 chambres et 1 salle de bain",
    "price": 900,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/437473475633994/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438250516_345724818082453_5269655232790971117_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=E-Ph4N-kvcYQ7kNvgHvEwbm&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBAf0o1UP76vo1ZlRm9ExTwch_J8kGsIFafbh4-p03ubA&oe=6640E33F",
    "date_scraped": {
      "$date": "2024-05-08T01:08:42.472Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a212"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1200,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1506670910023273/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439538229_812932170261868_6844064721582930622_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=3m9ez5kCivYQ7kNvgEo_W0t&_nc_oc=AdgnWvm8x8PjaHIyrpwciF1mFDn4_Ec9f0xsMDFxnXd3dkJ1e_kAjhI7G8DkpMMGMMlfg-JH24eDGyIQ3OtKYw94&_nc_ht=scontent.fymq2-1.fna&oh=00_AfC5aNLTSLmftm8g6BxLHmOqWlO-OyGPzxLtDrJQprZnVA&oe=6640CE1F",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.958Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a213"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1450,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1099764371256529/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440749874_10163403285359307_1040921888824384384_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=O6ME35sUdFgQ7kNvgFWGtHw&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCuTSwkQqLZIpmGBVZdCr0h_N_cNUfRdDeeoqlITbvzaw&oe=6640F5CF",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.960Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a214"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 840,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/976199293912780/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441350074_7163314483797099_872077244687563396_n.jpg?stp=c210.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N0_1MPtYJ0YQ7kNvgHJAmbu&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCetXc0Q6_TB0BTOgWsT5b3yD76FgcjNHA0xZcbjDpPlg&oe=6640D0D6",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.961Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a215"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1350,
    "city": "Longueuil, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1510794076461423/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/442441259_1150258966176844_3928312173985092646_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BSmF8Aumj84Q7kNvgECXBda&_nc_oc=AdiAw3950D3XI40v56SRJ1k_6KFWxPycun_x7WN9MqTKIIsXSv303LO7XTf3ppqnUHOnrWpmhk8u4DQhW8FndTfO&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAVLZAPCcuIn5LJm61Hg0kxAF80I0wvS4LIPNPXXyNKaw&oe=6640C26D",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.961Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a216"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1200,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1387347021976639/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/421849581_8376577452357361_1281316111760539845_n.jpg?stp=c107.0.426.426a_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=oxWnEDcA700Q7kNvgHvIZTd&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCnZ0MjN5xkSe-1FYY9zfpqcGCsPMGIdixyvfoukUD0qw&oe=6640E3C7",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.962Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a217"
    },
    "title": "Appartement / condominium de 2 chambres et 1 salle de bain",
    "price": 1270,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/487135223662038/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438242362_768200928784781_6136406112554312885_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=bVBJdUsAL5EQ7kNvgGkA_bt&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCoZtf6y1u1cREA7HdPgiMCpKZch-zRqmyPUS-ts1iDNA&oe=6640DB04",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.962Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a218"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/766445658966460/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438242435_1601307450667720_5699056251572204618_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=14Bs-Oh-Ut8Q7kNvgHMrJtO&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDQSACPiUeEldyI_pzwaTktp5vPe4Jok1MlmdES1cJP1A&oe=6640C3AC",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.963Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a219"
    },
    "title": "1 Bed 1 Bath - Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1550009312211624/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440956662_122145650468187654_846954296301209524_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oVr1ZzOcmqUQ7kNvgFe1hDk&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBWrUeX2ScTkwRkWAg7fKGycWvleoQd5mVmEyP5pY2mGA&oe=6640DD7C",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.963Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a21a"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1400,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/819115270110277/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440934150_742884618038371_6963394776134702716_n.jpg?stp=c0.199.526.526a_dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=71LgJc0XiCcQ7kNvgGU3Z9_&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAtMobm7iHuOsi3ZcbEc2GkyksnmQmAbXijSVktutLyzw&oe=6640F6C0",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.964Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a21b"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1495,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/770018161867114/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/441447176_3138738996257211_6852380381745626370_n.jpg?stp=c209.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=g6r0uxX54BoQ7kNvgFhEaOT&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCkriSdRXYmm6V00FlJ2utz2If0v0rhR27c2EEtSanFQQ&oe=6640C53D",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.964Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a21c"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1325,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/311217158686702/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/442410099_10168667105990644_4611342926306084183_n.jpg?stp=c75.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oaaPUKB4kqEQ7kNvgE04tey&_nc_oc=Adh_zqEFoCEKMxgTEAqvNMA1rpr5zlw5ID2bHwoGR2bTr2JF0UVND-Xs5Dk0XPIRVdV3xR7G0CW7P1qG4SJrsbjo&_nc_ht=scontent.fymq2-1.fna&oh=00_AfD1FF83oJEP8UYV_i9P3GduPnSFfsIaPOM3Fy8eDeAW4Q&oe=6640C334",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.965Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a21d"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1485,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/356337016948078/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438260919_455261366876334_1145169012210454470_n.jpg?stp=c0.198.526.526a_dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6OMbwwf5Kt8Q7kNvgE0aGJ7&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCaaVgkV8ZIGRvaK9EF_fwpnnNjGyKSAQCT95anWwLiag&oe=6640E666",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.965Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a21e"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/983143269409493/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/427730536_954221852824852_8297996746862940587_n.jpg?stp=c75.0.453.453a_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=u-1Cyp-U_csQ7kNvgExJyyi&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCHXfUuYNYB9dvv3JfImiKXo8dzXSGJDKlDD10AUtztAQ&oe=6640C53A",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.965Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a21f"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1350,
    "city": "Longueuil, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/467036372414919/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438306043_454557130323841_1462251184642122746_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=XQ0gdymTcz4Q7kNvgHhAOye&_nc_ht=scontent.fymq2-1.fna&oh=00_AfC0IzgtOuqmkeFmWQlRFLnZk5UjTh0OLVLwjId98Y7uQA&oe=6640F5AF",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.966Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a220"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1350,
    "city": "Longueuil, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1279852839649175/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/440299870_1146736256670192_4272399105180227936_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=crwX1fUAJoEQ7kNvgEmI9UA&_nc_ht=scontent.fymq2-1.fna&oh=00_AfA0TexobB4-uepgZGF1aGSi7h-aVb-l7lur0KtU8wTOvg&oe=6640CDAA",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.966Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a221"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 1300,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/3851596731736487/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438131821_1161969684839778_6190242593648068881_n.jpg?stp=c0.0.261.261a_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=pcPn8DLqa-wQ7kNvgGYhH-p&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAD2pR5BOIAwH2BLFlDDWppfm5H0BSLsef7ZSnjWTmWhQ&oe=6640D1BC",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.966Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a222"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1400,
    "city": "Brossard, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1114813829752563/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/436589096_387864000885093_6136573115440192660_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=qHinmPVQf0cQ7kNvgF0HKZk&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCfnaOQx3_pnpzWJ19VikcDKwl1VOsGEfGEFlvQhNQRYw&oe=6640CF8B",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.967Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a223"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1400,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/975613753939606/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438303594_1424960465060478_9080557322705273592_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=RGHY0viUMpoQ7kNvgHrcYQI&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCpyKlIhn64Ij-UqAJIdkRsvnC9k6uIiFOScbyLQcD3Zw&oe=6640E9D6",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.967Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a224"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 850,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/414622431318360/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438145887_1627342808036890_6667496797886134274_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QaHMY0zQSGIQ7kNvgFyKrwg&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAsuq35NP6tDLG_WjFtAvqkqxYRsV25wbD_BJm9IzYpnQ&oe=6640CC05",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.968Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a225"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1350,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1124454968756339/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441312722_10161200098661421_2074650843160473559_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NfNs-U2mh1cQ7kNvgGLXZh4&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDHJ69S7xr3A_O83M1dgYGcTm7BS093IYx4Y0jxrNSBog&oe=6640DED9",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.968Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a226"
    },
    "title": "2 chambres 1 salle de bain Appartement",
    "price": 1500,
    "city": "Longueuil, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1465244944082163/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/440042041_324103013821770_210179559797618101_n.jpg?stp=c60.0.360.360a_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=SN-YYtxE5t8Q7kNvgHOTPvk&_nc_ht=scontent.fymq2-1.fna&oh=00_AfABEpWeM9eT5sh4WdPirRQPz9p6I7OLesBEuvREei8Adg&oe=6640C817",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.968Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a227"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 750,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/321036187692404/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/440282368_371882621922943_6219473134246991841_n.jpg?stp=c0.306.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=-1Jb-LknfIsQ7kNvgEwoPsT&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCkgR6wq9rPKNgeLfK3tUH_PBmSQOLPGuDwiLiFdDOuZw&oe=6640C129",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.969Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a228"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1395,
    "city": "Ste-Anne-de-Bellevue, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1933451843764667/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440816439_463241522810119_3532702371797928070_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jAOEr4eVgMEQ7kNvgH5Qy-Q&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAqQ9Jo2LLqofHl9VnCeRcUcd7pTEM0G6XamkCDkWNbeA&oe=6640D3B7",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.969Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a229"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 897,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/293523860475007/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438301376_459399713114813_1927618513157255204_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fOXu9wDhQe4Q7kNvgHK3Aty&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBBIHVxhagf3hpIF1dKP_oI4riXSAUbagJmzVpFrqgERw&oe=6640C2A0",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.969Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a22a"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1410,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1503449297195808/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441265827_7570315199672522_2530317568353729513_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=16BbjJuzCwkQ7kNvgHI2YDH&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCPvLzZyUBJxqxSIE4jh2PnkghCpcgKUsygouQC1378eQ&oe=6640BF6D",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.970Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a22b"
    },
    "title": "1 Bed 1 Bath - Apartment",
    "price": 1300,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/367919235635767/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/437516238_802571821386403_359275001392987625_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=l-BeWarDaE4Q7kNvgEw42ZJ&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCWc19RebvuSHoY06hh-U4FKCc3yJmGVyxlYJanscxexA&oe=6640D171",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.970Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a22c"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1450,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/962046905172716/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439599597_1001769957946073_5429060863796006276_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=FVGwHltLpGcQ7kNvgFLca1j&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAgFz92uyQk8WNf5vOqaGt_DC4Mz1eSYcKJSG6b172tIA&oe=6640DC41",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.970Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a22d"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1350,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/771472315129515/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438037069_452382890808863_6663321636424933658_n.jpg?stp=c24.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=qCKgBpsKoCMQ7kNvgHvOboT&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAkm4jFiqhiPc0x2Mj1Eh3iyH3dgNaA1wsa4MmBpf2fng&oe=6640CE90",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.971Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a22e"
    },
    "title": "2 beds 1 bath Flat",
    "price": 1460,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/288572884317034/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438313211_793884226052594_8932422970086441122_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=_YGM5ySAMi0Q7kNvgEEpZDH&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCkUzSRpXGXQCFeu92m7q0KHAD0R7fIaCmPMpnupj4Fsg&oe=6640EC5A",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.971Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a22f"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1400,
    "city": "Laval, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/731297599214308/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/439562228_1506650353217624_3976519505770957292_n.jpg?stp=c0.202.526.526a_dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xn54LK__dG0Q7kNvgHKf7qu&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBjux-mou-MudoZ9ds84JQ97nkwiHO53lI8jxomnNYDqg&oe=6640D55C",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.971Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a230"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 840,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/350035841429334/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439831138_304521436030496_121095032113515107_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=V1Kc4ymBqFsQ7kNvgGF254g&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDZcgfqPbNenEmRvshjZv7yfg0zj1nRg1CYIykxkEfvoA&oe=6640F12C",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.972Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a231"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1500,
    "city": "St-Constant, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/470510715330213/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440355677_2448012372053525_7583394636658204564_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4mAQWlEi_FsQ7kNvgFFx8CB&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAXOULSN3ic8n8UnADRiRm62LuAu91T5yPlQHuxrz-Bbw&oe=6640E139",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.973Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a232"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 900,
    "city": "St-Bruno-de-Montarville, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/451007010754320/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/427227685_981442710026273_7966460062037753850_n.jpg?stp=c40.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=RHuiF8HvJB4Q7kNvgHdCwk7&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDCsdR2OqCIPdr9hslQT6hjsWQIWW0l0cwQFv85MS-aUQ&oe=6640F5C2",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.973Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a233"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1450,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1119881245896975/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441186446_10161429795074154_1869493133994527418_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MTrxkHhoKdcQ7kNvgGK923c&_nc_ht=scontent.fymq2-1.fna&oh=00_AfB7ao93_GqFuAshXnziN2oUUAYXIdwucAvsnN9ShhDr0A&oe=6640D9A0",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.974Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a234"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1350,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/748543817444087/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440234329_8148789748468017_8868524611562198305_n.jpg?stp=c0.60.526.526a_dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ac11M_REETMQ7kNvgGXCr9a&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBAEV7kkGUIfVZR8HsYrb8hhtybWTTIEBPeBCsQxwzEHQ&oe=6640CD33",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.974Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a235"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1860167331151404/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438310038_750633977279242_2190086853743925623_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=DRdar-DWHkYQ7kNvgH8Yqe-&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAnhOQ0AwRKFjpB6cF7gsABbcI_HUGc7ZPdNCZjxnrEUw&oe=6640EFD8",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.975Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a236"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1450,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/808348651169859/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438204101_812984053505745_6505313703872836610_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=m7hZ2TEmG2sQ7kNvgFFBYZK&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDa31PhIPo3g1BpIkoGh5R2lWJyAL2Mdka8578wuiDXNQ&oe=6640F753",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.975Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a237"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1500,
    "city": "Côte-St-Luc, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/2448725631995362/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/429772540_25088488164130717_860094960355862249_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=lmhi1fqT0XcQ7kNvgF-dV-G&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAjHFwn0sDEbbPb9dZ4kGSbFOKBnonwvfzUre7d4qaVvA&oe=6640F58F",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.976Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a238"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1450,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1453082482001291/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440557522_10159726857847127_6424015763600537769_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rLWmOskW9qAQ7kNvgHTAXLp&_nc_ht=scontent.fymq2-1.fna&oh=00_AfB_SacKyu_smb89gvV6cNnhlfes9-FjrLOFakH8vMNgSQ&oe=6640F600",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.976Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a239"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/774746137977004/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438808685_10168630811930370_8905740284457367247_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=p3sjVqrsl_4Q7kNvgGzJh8q&_nc_ht=scontent.fymq2-1.fna&oh=00_AfA7u_4Xsb4NRfiI48S4QimI3TayINuqFh91OOaWzXbHPQ&oe=6640D8DB",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.977Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a23a"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1390,
    "city": "Longueuil, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/7091808880925024/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/440218614_810429594476911_2704563932844831014_n.jpg?stp=c329.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=QVPHVrlevvQQ7kNvgGOOgCq&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBimsSTr5-quYDP0XWpeN4SrwTdwQk5YEJRdB0MYBHr2Q&oe=6640C0AB",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.977Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a23b"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1495,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/826181482902834/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438100017_2551326861708666_8557067594162439050_n.jpg?stp=c0.31.526.526a_dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uwfGQL5QMWIQ7kNvgFHuT9q&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCbecGg5MBGNxdLmUQfhnsCUwKuuyKAuZtuSHwiC-xNPQ&oe=6640EADC",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.978Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a23c"
    },
    "title": "1 Bed 1 Bath - Apartment",
    "price": 1100,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/307056015761757/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/439748439_947462090717955_7714485699984587141_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zf0MpgFdR0EQ7kNvgH9mPn9&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBlAkjhY40Z4lojwz6VgGxtMgo7bL5kAyL9uOJ0M8ezZA&oe=6640D0BC",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.978Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a23d"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1350,
    "city": "Laval, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/978965323840275/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438101111_937546564781406_4095233454178111012_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PZmnc8uerYsQ7kNvgHf0wbm&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAV6dgMcQkCAH_6CTWlNhyKBJiLqJ_nVAtk1aeq-yRWZA&oe=6640DB6A",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.979Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a23e"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1350,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/402680479277392/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/436926560_2774054722761513_8585996883155860274_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=N09MMYt-cn0Q7kNvgExhKzW&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDvWR-CeoKfRHPLqST3HaI7kcxw4cDHIKs88qwNDKuG-w&oe=6640E1BA",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.979Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a23f"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1610679066363838/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441253186_412812921605193_6423090043746611317_n.jpg?stp=c89.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0KSvQLhFSxkQ7kNvgE3znhv&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBz_Y6gSF5czD3snT7VSL7n8ym__evnt0qh6OF-593oLQ&oe=6640C782",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.979Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a240"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1400,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/809320300602001/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/415692646_6952212694896613_2016693956549718229_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=xcLXkwLPKWoQ7kNvgFMTGG1&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBojT7MLMRhxCP3r_liCWsWXYghoLNgqPK3gZSa6Kr3uQ&oe=6640E22C",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.980Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a241"
    },
    "title": "3 Beds 1 Bath - Apartment",
    "price": 1000,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/827256759422076/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438088185_3093071077531437_242513204298682522_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PwjSt6tUyZMQ7kNvgGlfJ5Z&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBtOlh5jD490ZRDc6bw-BGQWEfhouriBxeT-ZH1Wr8XLg&oe=6640C59D",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.980Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a242"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1495,
    "city": "North Stormont, ON",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/731794492196722/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438271270_275173759021020_4763154283248894868_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=0nTUvi8RvQgQ7kNvgGZ1W5U&_nc_ht=scontent.fymq2-1.fna&oh=00_AfA8isJOnY85yfsSPuWpfQRauPTn7mWtW7dvcsThJjzw-g&oe=6640ECD9",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.980Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a243"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1450,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/359410873793769/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/440223679_452650567172420_6892977883190443912_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=kn6mNkc-qzcQ7kNvgEFmzd7&_nc_ht=scontent.fymq2-1.fna&oh=00_AfA8igmwA1xo5fM6W2KrrLePzU3uf8eS2i19rgAIwJAFfQ&oe=6640CF46",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.981Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a244"
    },
    "title": "3 1/2 à 1445 CAD à Rosemont",
    "price": 1445,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/3654079091569867/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438120742_1531390450924678_7185666647851161702_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=V6BLkQ1ElLoQ7kNvgForboT&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDZkBMKJgBbT7MGv2IT-CZEW9GocwR3EoTV8jI0gY46Pw&oe=6640E441",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.981Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a245"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1350,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/408594545405297/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438134476_410598105089929_3469584977101797406_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=nh0iMHXGyHAQ7kNvgFCECOm&_nc_ht=scontent.fymq2-1.fna&oh=00_AfD727FrAqbkb8i9i_c2buRdOmzopBQ5dkzPfx3nLtmx6A&oe=6640C6C9",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.982Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a246"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1450,
    "city": "Longueuil, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1827531177723741/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/440332365_989058722747078_8370796841484411808_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=KJytVqw02ogQ7kNvgEFS66c&_nc_ht=scontent.fymq2-1.fna&oh=00_AfC77cygZFoohknWAv1KMFeM18FJDyqupmCGlolNPduYXQ&oe=6640D31A",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.982Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a247"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1395,
    "city": "Ste-Anne-de-Bellevue, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1133022151078692/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/437474623_419844974126571_1759670719507373451_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=1ldGLfXfxEMQ7kNvgHsX50N&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDakkbHGIk6908uf_XbMcNwcLMLcF9mzPMG8L3uzCKgIg&oe=6640C644",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.982Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a248"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1350,
    "city": "Longueuil, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/470845358702553/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440327572_10161439798650751_7759690045664856383_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5BPNQ_07yDgQ7kNvgHlinVO&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBFXe4U9I_dgiqAVe3gixRhEqyOEyNp_JqaY3xb_bepPQ&oe=6640D919",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.983Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a249"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1300,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/3539909799607914/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438197489_10232340190588281_5325941601202553304_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WGcpUfZ9KscQ7kNvgGJzlvp&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAaswQcFUm84vSEx6eyd6oFXXVzZm-LHs_pLT3JvL2H4g&oe=6640D9CD",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.983Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a24a"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1300,
    "city": "Laval, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1015229106658007/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438162450_2692390064257606_5780951868494946924_n.jpg?stp=c0.51.526.526a_dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QGC3SRtlJ4QQ7kNvgEA1jdy&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDP9lYfImqvNy3SJ4M9pZLREAURWSBNWX9CkRxs3x7MhA&oe=6640CBB1",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.984Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a24b"
    },
    "title": "Studio 1 Bath - Apartment",
    "price": 1395,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/25424828717131851/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440860852_453729590501040_3234222095774238635_n.jpg?stp=c210.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rl8L1jmANAkQ7kNvgGhDvpX&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDBmkZnsvW8pK4iRXfiF4_QsTM9gzdsOvVYPXnTEQyTwA&oe=6640ED1B",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.984Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a24c"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1500,
    "city": "Brossard, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1385586388823827/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438298954_4077573465804322_5274598468012630452_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pzwi1I8w4PoQ7kNvgHpDdQJ&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBe5_9ECRQMHS1Y7Bi1-OcNDDEegtD8t6xwhasKklybmA&oe=6640C18D",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.984Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a24d"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1505567493676784/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/440326752_985227153335722_3404198060143793161_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=kJj7SwY2ItgQ7kNvgEK1At3&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBg7DLwRXFzeQtkU2Id1rlo8Led09RT2OFy0ldb2TkrsA&oe=6640EEEB",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.985Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a24e"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1500,
    "city": "Laval, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1733060153766521/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438115597_990042476089308_3907613188642779007_n.jpg?stp=c133.0.493.493a_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=YY8mjsT2qS0Q7kNvgE6Em3m&_nc_ht=scontent.fymq2-1.fna&oh=00_AfB97OzOwv2moHnmjd8BQrt1Z96QsSYyUUTrY8hklwO6wQ&oe=6640F231",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.985Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a24f"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 1425,
    "city": "Longueuil, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/450896980793641/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438080984_977217767329000_7607686754190152174_n.jpg?stp=c6.0.513.513a_dst-jpg_p526x395&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=kgkR-jcv5s8Q7kNvgH-1yyY&_nc_ht=scontent.fymq2-1.fna&oh=00_AfB67HPxkhy86TT-GGJW9tbsXURc51Td2UXLZeFfcBTy9g&oe=6640D8C8",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.985Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a250"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1300,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1863087184196463/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440975996_2111277442591548_2923777514153808239_n.jpg?stp=c0.47.526.526a_dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=A7v8UwTAP28Q7kNvgHksKZr&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDMFNYKlPFF7n_Z7G8akpInMqaMBhcUkcf1nL0QdzKQOw&oe=6640EE41",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.986Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a251"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 1395,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/388055230885716/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438032312_955372822920607_924300924933315960_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=BaKNevnckZgQ7kNvgEbyKKv&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCnMQjY_tIcxDo_Lb7Z3zdj3MRGtTBXKjMWFZhcjFEcKQ&oe=6640E4D1",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.986Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a252"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1375,
    "city": "Longueuil, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1072908843812718/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439688995_1162145041460198_3499172389462666615_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=XJyAVmRVZjAQ7kNvgGALf-K&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCf0NdPjRAfFuvXg7byuyLWj2KyzYaJjtunHDTWuTayCw&oe=6640EC2D",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.986Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a253"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1480,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/452016104048313/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/368456466_9753403251400584_5608275889488429393_n.jpg?stp=c131.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=5u3jWf2LFZIQ7kNvgHy-tPo&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDUXCv_W7am-32Q-ICem5bJ69EG4Pxin5snnYF79b2Ygw&oe=6640DF4F",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.987Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a254"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1300,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1142324516905295/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438134676_2934795326682232_7207488552005447031_n.jpg?stp=c40.0.240.240a_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=eq4LdwdAfSAQ7kNvgHIkJos&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAwj8NJN6BanvDJYMGGhht_pe_BZUKYkL1Dqy_caIhJYg&oe=6640D237",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.987Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a255"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 950,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1003682331345709/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440747113_3793511740928128_541267786269416164_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=L0eMmJTeK7MQ7kNvgGoluA6&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCQKbyEZCRKPfbNvv-SNQB2K07egBT0YAt1ybtO7zoI9A&oe=6640D115",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.987Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a256"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1450,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/3775468426070212/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/411544132_1130886398158569_3565208420669549833_n.jpg?stp=c19.0.514.514a_dst-jpg_p552x414&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=5cS0TbM7b7EQ7kNvgEtucaw&_nc_ht=scontent.fymq2-1.fna&oh=00_AfD5ma52tI_XiuoL8DG_w10f1P49uKNX56H04yb-EPQjwQ&oe=6640C9B3",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.988Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a257"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1205,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/962377102154705/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/424881317_1511673226083454_2325108035525449088_n.jpg?stp=c120.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=dyuT-1iHVx8Q7kNvgEMscYj&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDzhmX87G8fD9VKYmq2bVG7yYWtX7q5gkR083j98flVvA&oe=6640C252",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.988Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a258"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1350,
    "city": "Laval, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1629532081183171/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438168917_7551019391618271_4147590604317219969_n.jpg?stp=c40.0.240.240a_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UX-xQ1hISZ0Q7kNvgEl9kB2&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDPyCkF_8GHKJTffyozKL4yupfjUwLTsIOhPYlfG8L50Q&oe=6640EB85",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.988Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a259"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1395,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/409090268671288/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438300593_10230157212466749_3730829176200002488_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GogERoRFma8Q7kNvgHfZYHr&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCj3a-_tdKI5RdniURX1eWWkqfw4FG8CLRdYMokxYXThA&oe=6640C552",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.989Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a25a"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1060,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/887960553012168/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/437334689_1135825431065318_8160056489563293114_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=A9GJlfMA4TkQ7kNvgF6yY2N&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBLDAk5exo7r-7vokO73dHEJqTtaG_mPlrsZyOltVvB3g&oe=6640C1CB",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.989Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a25b"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1300,
    "city": "Châteauguay, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1110890006629387/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/424985035_378482975173213_2727619833327829970_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=yGXUJPecKfEQ7kNvgGm4GnV&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAlZXSePv4FehXR9WDkvDWjF2crX0dKTHsNY-QtkRAIdg&oe=6640CC2C",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.990Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a25c"
    },
    "title": "1 Bed 1 Bath - Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/459820503283308/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441054349_10162229398511189_8051833402189142612_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9BZAWXjPh4MQ7kNvgFYgStE&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDrWJr6U6Yn6-8-3xVeOowW8BGIXGknokdaNDAzwHNjwg&oe=6640D11C",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.990Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a25d"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1400,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/478219201393049/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438025517_439735925413704_7636599027273914303_n.jpg?stp=c0.92.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=w_Ga4dsKH2wQ7kNvgFKD1y0&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAsXRTjgXjbdjpM0SqoAa_-SPm_1177iYgpC-9pGATPrw&oe=6640F5F8",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.991Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a25e"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1400,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/944124110597437/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440939956_3642625179328652_8383694878858902556_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gNdX0wTIA6MQ7kNvgHgb6JB&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBMhft-xvb48ZGyz4tH9NztvewCcbf7qyzhLDHBRaFigA&oe=6640D1D9",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.991Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a25f"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1350,
    "city": "St-Eustache, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1489924308548950/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/437497761_1103988337566908_6574658644921652096_n.jpg?stp=c51.0.206.206a_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=Zsv2lMCpl24Q7kNvgGflwqi&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBk-8lafuMuUwdGbKJkzY9HtlvVSqUNkTFsKbhYs0QmVQ&oe=6640CB6B",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.991Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a260"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 1450,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/456663406758659/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/437850737_461968112857529_1716836222404499585_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=TnZUz3WRpbQQ7kNvgHWeX6B&_nc_ht=scontent.fymq2-1.fna&oh=00_AfD8TKYk7j6e0OdsWlkpW4dtssja1o95knbD0pi9oC1Q1A&oe=6640DC08",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.992Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a261"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 825,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/445327514713898/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439416813_270545196054423_9072547803834436517_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=LTSrBW0Op70Q7kNvgFPgVYt&_nc_ht=scontent.fymq2-1.fna&oh=00_AfC7reHsMB2Z3eOyfUNOiaTyUyBcAkt6Luy4TUlErnVl9w&oe=6640D382",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.992Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a262"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1395,
    "city": "Brossard, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/404012949208520/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441178031_10160531209942061_5417967065947309546_n.jpg?stp=c105.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4MgjrNJHHgUQ7kNvgE47qBf&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBGu7eO4_2OQsuSweK1sIxlcX2afHCW9r2OFRoGhHz_AQ&oe=6640CFB1",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.993Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a263"
    },
    "title": "Appartement de 1 chambre et 1 salle de bain",
    "price": 1250,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/437559975533857/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438080423_821193889871845_2852639379644618328_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=_SULCkb-NVgQ7kNvgFdAApG&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDhsBpwAbAjEbFCeqMKgQGehgyYM3nMSQXzUTn8PKsJFA&oe=6640CAF9",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.993Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a264"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1400,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1135884460943555/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438299930_10161299595636352_3225245847091507172_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9duKs1UltBkQ7kNvgFW3xN9&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAkCNPyOJ63nt_gcyCOQVuBNIuYQn1edR5S9ZPeZe0S9g&oe=6640F4B8",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.994Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a265"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1450,
    "city": "Laval, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/2721717404647141/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438302913_7491426977573574_4257707612180594177_n.jpg?stp=c0.202.526.526a_dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9mj2RAyKPFgQ7kNvgHkqMxD&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAc9Cm2gVEgoN3109d8xH7zGFUqqONbu9e7HzG-DV0V8A&oe=6640D21E",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.994Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a266"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/968887098230722/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440405107_456986703491212_7221378121775068198_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kIt7XzhqLowQ7kNvgHV8veZ&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCFgETFE8OnndL_W09l_Hc527uqTJwzqpE9ihfggl6qBQ&oe=6640D8E4",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.995Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a267"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1000,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1998230667262795/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/439960884_10169101501820691_2421844388962561307_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nlsAKfDxL1IQ7kNvgFD0wPv&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDazNNkxegjQZ3VXT4wHuNUnFUmgGWHvgULK01NEuHmSQ&oe=6640E273",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.995Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a268"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1300,
    "city": "St-Lin--Laurentides, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1510773189869845/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439915242_803043514685826_1139387209973027039_n.jpg?stp=c0.80.480.480a_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=bpqj43G5EooQ7kNvgEWEuP-&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCnaSm3iE1S2_7AaPCbpJLBhq7emDeuoaGrqCbTrA09Yg&oe=6640DBC1",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.998Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a269"
    },
    "title": "1 Bed 1 Bath Apartment",
    "price": 1495,
    "city": "Westmount, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1383824875626871/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438329377_991624652308682_58202145188487478_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=R0MPGKXnp2MQ7kNvgEu5hu-&_nc_ht=scontent.fymq2-1.fna&oh=00_AfC4VOXxuEESq9s6BvrWW5nX-Z6O_jm9sYlwsL93k15V2g&oe=6640D1A4",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.999Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08eb8eaff6aae413a26a"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1450,
    "city": "Chambly, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/761114319467718/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438300382_10219812895672648_3965632882587993580_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AbsxLvmqMrsQ7kNvgHv95_M&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDUbRWtB8J7U0pzf4xAGC1H9n-3iRaQnPu0sArgzglwTg&oe=6640EE7F",
    "date_scraped": {
      "$date": "2024-05-08T01:08:59.999Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08ec8eaff6aae413a26b"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1250,
    "city": "Ste-Sophie, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/961401412203338/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439456375_1685177092287160_2769881265874076947_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=QEtzrcNk4UMQ7kNvgFVbNdT&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCP9jpL6a9KAj2YFcDgzQfkALLGzQ7i4N843Kz0gRCmHg&oe=6640CA8D",
    "date_scraped": {
      "$date": "2024-05-08T01:09:00.000Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08ec8eaff6aae413a26c"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/936338121305262/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/439472709_10161857386453223_3666549913639486927_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=78b8i8uyZTEQ7kNvgHnfY0F&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDrF78K-g2lqWi5I3_Fg4e2zOV_FqiCzDXhEuHcGCm5Qw&oe=6640E578",
    "date_scraped": {
      "$date": "2024-05-08T01:09:00.000Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08ec8eaff6aae413a26d"
    },
    "title": "1 Bed 1 Bath Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1533808693863720/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/427109297_1345748219424448_6757859442642532836_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=GbH9hA-CKLkQ7kNvgHIqq6Q&_nc_ht=scontent.fymq2-1.fna&oh=00_AfADNdXflaknmRrW8wzcklxSulw-pvor3IUDO-hlkS3Wsw&oe=6640E26A",
    "date_scraped": {
      "$date": "2024-05-08T01:09:00.001Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08ec8eaff6aae413a26e"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/354322447171248/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439626383_1003322794761177_4554793464074601346_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=pRMLoTpi4KgQ7kNvgHzruYo&_nc_oc=AdgqyWNVtvUE15s1RJQ5L8hlNxNl9PahXlh2o5V4WzUqMv5DhfOZTv0gCt9WQZlpjkxo6C9QvinoV6o_rQ-uiKL5&_nc_ht=scontent.fymq2-1.fna&oh=00_AfA5TADjFb-qPYElBkibyr7liRCpIcR8Dh318W09zPxtNQ&oe=6640CFA3",
    "date_scraped": {
      "$date": "2024-05-08T01:09:00.001Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08ec8eaff6aae413a26f"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/827417419257852/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438037053_2073017376411415_4056703235568640297_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=zGOWUp6RdGkQ7kNvgFk8edy&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBHetzqhCgjQmdcxmNnMF8Z64YmVPPajpn3Rq4FYbHvtw&oe=6640DFF7",
    "date_scraped": {
      "$date": "2024-05-08T01:09:00.002Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08ec8eaff6aae413a270"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/779464070827283/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440361391_6860917687343564_8136707956220592908_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5KN-jUm22Q0Q7kNvgGVuyi9&_nc_ht=scontent.fymq2-1.fna&oh=00_AfC6f4KmMg0PGM4cOBylWLotnRSWKpvc_xhXeLh2sssHYg&oe=6640DC92",
    "date_scraped": {
      "$date": "2024-05-08T01:09:00.002Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08ec8eaff6aae413a271"
    },
    "title": "1 Bed 1 Bath - Apartment",
    "price": 1460,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/875001971050317/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/437551480_1551807945669706_8206664391757681170_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CpBISB-suI8Q7kNvgE0SPGB&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBGUT_mmYDIv1h3j89VH3zvXfuuY_Npa6wAe38KGVdv_Q&oe=6640CEC8",
    "date_scraped": {
      "$date": "2024-05-08T01:09:00.003Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a272"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1650,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/309494622192349/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438264194_10161312088343351_2902488392990356224_n.jpg?stp=c0.193.526.526a_dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Q8rXTi0UuQgQ7kNvgELrvcP&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCL3BDULcpqvKWixdlgBZsjDC2EY-qgy5fpVKkYSUcKdw&oe=6640E275",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.436Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a273"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/766445658966460/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438242435_1601307450667720_5699056251572204618_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=14Bs-Oh-Ut8Q7kNvgHMrJtO&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDQSACPiUeEldyI_pzwaTktp5vPe4Jok1MlmdES1cJP1A&oe=6640C3AC",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.441Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a274"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1750,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1437992556822987/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/434287425_1365507230802329_2664667087575995852_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=JTKpampkvt8Q7kNvgE7KhNY&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCI6Q-Bf3_NcXo2gYoZGQ0wwcuFkLeR5eAE17GhTzdtYQ&oe=6640F2A2",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.442Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a275"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1575,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/419376264374317/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/436839568_327759090332350_7835958781393462505_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=poW-GR8MJkAQ7kNvgGJVXxi&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDJbRu9tsgfte8U4uFdACuwUwo4yokcUpSlc64LFD_UXg&oe=6640D3C2",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.443Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a276"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1740,
    "city": "Hampstead, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/946753413586715/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438302886_1570934730145105_1607109345836046223_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=z_xwOPAoBy0Q7kNvgHLBUKl&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDZX6822Yirs9khGRATTQN4rHnjinvQ3yD9_MMX94Rs_g&oe=6640D0FD",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.443Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a277"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1860,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1127914588260195/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438313321_451838737341308_6698589816465429895_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=DXi853jEQZUQ7kNvgGsk5at&_nc_ht=scontent.fymq2-1.fna&oh=00_AfD2ezv0j5f-lbo7E9GFOvMVSioZOEKUL1SxoAKn79FsCw&oe=6640F1F2",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.443Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a278"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1800,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/984032342709051/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/440479426_808204657439063_1972481067060408672_n.jpg?stp=c147.0.533.533a_dst-jpg_p2048x2048&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=Dyw-u8383mQQ7kNvgEnHM9H&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBvJrB2HV0aeonLAvfoxRGAsW9U20vK42OxxzsKRGXfhw&oe=6640F0D5",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.444Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a279"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/983143269409493/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/427730536_954221852824852_8297996746862940587_n.jpg?stp=c75.0.453.453a_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=u-1Cyp-U_csQ7kNvgExJyyi&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCHXfUuYNYB9dvv3JfImiKXo8dzXSGJDKlDD10AUtztAQ&oe=6640C53A",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.445Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a27a"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1675,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/858813012956593/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/434327705_741822481456000_4933187739006790143_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=58fT4mFhK9cQ7kNvgHKtsN_&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAB7KohaM0aDnQTppwGGHLIPnI4PYTHL7QwA5BdjkY_NA&oe=6640DE54",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.445Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a27b"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1850,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/427953323500730/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/399152200_7404808039571808_8639966909326385247_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=kAor6QI4c4UQ7kNvgEqwB7h&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBpshKfr56SUV6QmtBjGoZFbTL5YqPYqwVGIY5A_NKyNA&oe=6640F3F3",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.445Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a27c"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1740,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/952023096410176/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440985078_410488201877698_8553187078460614890_n.jpg?stp=c86.0.512.512a_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VMdc-XUfV0UQ7kNvgFBSshL&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCZBXoTGtzVpWQM3BabuqXBuSgRu8bJ0tyCgEMy0o-AXw&oe=6640CC30",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.446Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a27d"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1520,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1148869376113890/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438313417_1215758699389834_7049202750404432768_n.jpg?stp=c0.117.526.526a_dst-jpg_p526x395&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=n6McqG4gUoYQ7kNvgFcvnsz&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCF8t2S7v8P9cFyUVZrIRTvgv4GI185Wpe7Y7cx51BIqw&oe=6640E07E",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.446Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a27e"
    },
    "title": "2 giường 1 phòng tắm - Căn hộ",
    "price": 1650,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/940906027514940/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440759210_2222217931450792_2883454278016940914_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xy5m7we7JvcQ7kNvgHAGW-x&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCEWR5itFFFZtfl6rXr7FxC7-V30NNgsdTgu0jZ5BSPeg&oe=6640E061",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.447Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a27f"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 1730,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/316611594620558/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438032430_7098298046964679_1079847608787188168_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=F_nG9XYAQ2IQ7kNvgFELiJj&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAKBbqYIezmJYHh2-tjdluzXF26UKb0VfY6w9c2bSReew&oe=6640CDBB",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.447Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a280"
    },
    "title": "1 Bed 1 Bath - Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1550009312211624/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440956662_122145650468187654_846954296301209524_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oVr1ZzOcmqUQ7kNvgFe1hDk&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBWrUeX2ScTkwRkWAg7fKGycWvleoQd5mVmEyP5pY2mGA&oe=6640DD7C",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.448Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a281"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1650,
    "city": "La Prairie, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/273265739111985/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439639121_1477905936438567_1791825626431216860_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=EIlcHVue9s0Q7kNvgGia0UM&_nc_ht=scontent.fymq2-1.fna&oh=00_AfD6Lg7uq7ySd_BtOAmXiBbxTEOjl5wG5iC-uD-udd5-ig&oe=6640CD74",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.448Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a282"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1600,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/467006495897347/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441051750_10161500201241425_6189324587540320636_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fIFqmdoyCq8Q7kNvgEltep_&_nc_oc=AdjWdsZPLBQTiO8bEQkTOfCmcjwPw7HMzlQ3YIeb0ZqH9G3pwv2WlNQ5iRKNxWo2QyAxWc-8ZCepubGQAuz5TJ_N&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDW8UT19A5qx4no0_d4V81ZDKRTvUamWRPsn9lmFqJfog&oe=6640D10C",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.449Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a283"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1625,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1472338100373117/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438120540_8070911472923243_3630481741971183504_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=5VpSkqWbLI4Q7kNvgEXamX4&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAEcm_F4AIvGEz-CYZSs5DWs6JEB0H_H_PScVo1LLhhew&oe=6640F3DF",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.449Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a284"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1600,
    "city": "Laval, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1373140040037021/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438120812_1607256903371599_8909921898520474348_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=4ZaW0uDucEwQ7kNvgGawc2B&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBJreteoXmo96Lej8Eok8XhBG08gE6UfhSDx8dGGb-8jw&oe=6640E544",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.449Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a285"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1675,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/423082893689200/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/433016439_1994364150959197_2535066825602365864_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=XWH7pGE8pL8Q7kNvgFKjR-o&_nc_oc=AdiUzLIaHayLiSyqTGLrRdrBY9YW-zUC3p5cBGqr4RmSsK4TyrIwDd5oWy9IEH8AtndDf6MwdSPQ7h_-bfnGTPW_&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBYDlMty1GHCQP6oeQKAXPGdJtCEmPq6iWQPuCtyeH2pg&oe=6640ED3A",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.450Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a286"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 2000,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1111557896763298/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438302134_10161016108990266_894294804068669016_n.jpg?stp=c146.0.540.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KcLuyFSci0QQ7kNvgHxPz4D&_nc_ht=scontent.fymq2-1.fna&oh=00_AfC7iddBkPBZCyrhbCNmncG3gAlAubBT3DvjYiM9ooJBLg&oe=6640F1B2",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.450Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a287"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1800,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/473881601662301/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/433292541_953931136087058_4331161553228952347_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=TJhsd1LIUHUQ7kNvgHOGGru&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCH5DXwLD2pF4SFIAyxPrnQm39CmZ_Z6TH6r9_lHiFKpQ&oe=6640D198",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.451Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a288"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 2050,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/871600154689572/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438259522_10161726964496416_1708130160726918591_n.jpg?stp=c0.46.526.526a_dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CiUELd4nYSkQ7kNvgG3cwlx&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAYHxg5nQ87g1MUT3jBkMP4PGtBMllYQ59mH0AuklYWAg&oe=6640CB6F",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.451Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a289"
    },
    "title": "2 Beds 1.5 Baths Apartment",
    "price": 1800,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/452936003896830/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/435962491_345249194769578_3337553138195977456_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=XoWGyGqXT90Q7kNvgEPaEqb&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAXwRHiGZKae9lWhtC6aHz3HVYFGDD4hAOMFAameYpmwQ&oe=6640BF8C",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.451Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a28a"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1775,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/798963718964444/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/424925321_1562413580992767_5985499602152400005_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=E81hwpUUtbQQ7kNvgEUeoM4&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCsHf4SuBQ9DyqmS4oIAMuJdXz9ZGHlZ-D4-zzHuOcu1A&oe=6640CF71",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.452Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a28b"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1810,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/2943877669088287/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440357175_10226091870782572_6895837555990430448_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BXBxVQiLW4UQ7kNvgHXm2l5&_nc_oc=AdjPI78dMtSMft4KWImmjkW9AoINAr4dVVuNFbV8gfAwyn2csksuOBO9_tDSSdBYKv9cST78uhGZzvUm0Rif9UAr&_nc_ht=scontent.fymq2-1.fna&oh=00_AfARPfXCAn3HS1cRQWU8H0QjytyW4QIjiP-mjGxoq9h_0w&oe=6640CFB5",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.452Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a28c"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1695,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1869744546875959/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438131448_751518440396406_8585858286413270223_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=Qe-VuGq2UgQQ7kNvgHfQCeH&_nc_ht=scontent.fymq2-1.fna&oh=00_AfD_tHNCgfsgtqBfp6dhDqZK26rY_j7cPYEnXoSaBAH1ww&oe=6640DFC5",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.453Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a28d"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 2205,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/850406737129408/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438209596_1640499293427371_6972837683773869517_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=EQGKOA_at8wQ7kNvgGN3k2F&_nc_oc=Adhdc2JHbniXXNngOoEgwV0Mape1IRSsTl1o2hlgXqvlWNyvXIso3kIVYX1J5vvaNBxm2TZNFQaobgsMr3IqObVk&_nc_ht=scontent.fymq2-1.fna&oh=00_AfD0WVEdfroYXnnZeK69INDNxd69-uWkQwvFR15BFajT5A&oe=6640C37C",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.453Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a28e"
    },
    "title": "2 beds 1 bath Flat",
    "price": 1800,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1159443531737606/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/434321079_1105477270755550_1949333747759308906_n.jpg?stp=c0.0.260.260a_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=bushF9Qj0k8Q7kNvgHF3WKQ&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDh0XKLgQJ9yXa6BvQcjxuok4uWhdtvajbZKaca0ry4GA&oe=6640C7FE",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.453Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a28f"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1750,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1370406113624513/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438092188_7820287341356403_1600880429645331373_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ZX-RwTdqFnAQ7kNvgFlvXib&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCwQreDxGHM2J6DY3XxYf7YIFI02ByKz4Z8e9UJLJOZlA&oe=6640EB6E",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.454Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a290"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1750,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/2770894633059681/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441154326_3758730704374493_5020540842386760295_n.jpg?stp=c0.134.526.526a_dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RmlypxE3KS8Q7kNvgE5eF3u&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBf8wNKZXsZPmx3bJV_qtAa6qsMGi5QPjh7G0yuIW4hKQ&oe=6640CE47",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.454Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a291"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1999,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/883387503557028/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/426438134_1145537543158656_2942586098390590047_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=TaFb4jX39YAQ7kNvgG_axAB&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAG0C43OiWr3BgT3b3PbrI2U6NHDWfuezzBUypk2dieVQ&oe=6640D90D",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.455Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a292"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1875,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1909710292834038/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439407356_7700490933347905_4107280849413545754_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=bND4zUwlxuAQ7kNvgFDlRFW&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCbEXekWfu9b0NQPzGGXh0XlNvT-75C_4KkAwVrDTjsnA&oe=6640D2CC",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.455Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a293"
    },
    "title": "2 chambres 1 salle de bain Appartement",
    "price": 1500,
    "city": "Longueuil, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1465244944082163/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/440042041_324103013821770_210179559797618101_n.jpg?stp=c60.0.360.360a_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=SN-YYtxE5t8Q7kNvgHOTPvk&_nc_ht=scontent.fymq2-1.fna&oh=00_AfABEpWeM9eT5sh4WdPirRQPz9p6I7OLesBEuvREei8Adg&oe=6640C817",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.456Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a294"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 2100,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1466589380616171/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439666414_924074612794506_6076123777974593747_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=4u3dRqjSFjQQ7kNvgEiys07&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDjvgUWz0S83WGuYQU5IJYOanMvZequ5lzJO_yYfhEqLg&oe=6640DE35",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.456Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a295"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1500,
    "city": "St-Constant, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/470510715330213/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440355677_2448012372053525_7583394636658204564_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4mAQWlEi_FsQ7kNvgFFx8CB&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAXOULSN3ic8n8UnADRiRm62LuAu91T5yPlQHuxrz-Bbw&oe=6640E139",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.456Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a296"
    },
    "title": "2 habitaciones 1 baño - Departamento",
    "price": 1600,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1214386576196794/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441205041_8136072913089025_2379799649874239975_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YfJ-Qehpv3oQ7kNvgEGGc5z&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDOS7DZYkk-zk07bh1rUVVTy4poZqAsqR3YnkLshK6iRw&oe=6640C37D",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.457Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a297"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1700,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/2201892326834243/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/436768686_405933052228193_2284956719643111782_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=ZiuyIrg1LmMQ7kNvgHpM5GK&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCysInvcdeNZRybaObDZcxhziKgJKcf5PmZnID8NPgCfw&oe=6640DCF0",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.457Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a298"
    },
    "title": "Appartement de 3 chambres et 2 salles de bain",
    "price": 1598,
    "city": "Longueuil, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/842187604399884/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438302677_7687546347958843_8484839661112267738_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PCGqYEIzWr4Q7kNvgFUx4NR&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCMBLZiGj906SoDitVskOZxQeE-fImJ2w9ZyVl8FYO9kg&oe=6640E4A0",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.458Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a299"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1860167331151404/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438310038_750633977279242_2190086853743925623_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=DRdar-DWHkYQ7kNvgH8Yqe-&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAnhOQ0AwRKFjpB6cF7gsABbcI_HUGc7ZPdNCZjxnrEUw&oe=6640EFD8",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.458Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a29a"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 2500,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/454923543707139/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439900262_3661157740820367_5979128948298550890_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=0WLvgaRIlIUQ7kNvgGWRk3S&_nc_ht=scontent.fymq2-1.fna&oh=00_AfB8NW5PhsWnw1yci_s35cVbup3WYUvaIh_n5s4uNVBa1Q&oe=6640E9F6",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.458Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a29b"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1950,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/441920584910443/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441204414_10161695517838120_7149574448979085212_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=FsjqnSJnVloQ7kNvgH1OwhJ&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCS94Vh0iIdSxvUxNvRGvh-H7Tu9jA9SB6NVHV3OGKOGw&oe=6640F24A",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.459Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a29c"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 2000,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1476006346331543/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440947678_10161581779218944_9117588531363733555_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=D6pw68I8k-UQ7kNvgEKj1oK&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCK812JMUfY1vlHPuZzX6lH4MkjSn0p94X1Rxt50DdSlQ&oe=6640E979",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.459Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a29d"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 2200,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1237637133867013/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440330810_7532928886770830_4121189465574646013_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=033mdOcCU0gQ7kNvgHCWdv1&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCNfFdyE5KXHL-Vv9h0jo4RV_ljtT7R2-liavlSsqsCmQ&oe=6640EC52",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.460Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a29e"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1650,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/939655781176695/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/437886353_1164311104562690_4257606473925648655_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=2Ite04ta9pcQ7kNvgFw8RmK&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCYVW7AxmeLnLWhqHN_s2c59ZIIvCSsdVqAMlVev5BdYg&oe=6640C8F9",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.461Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a29f"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1675,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/832491025360998/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/434327705_741822481456000_4933187739006790143_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=58fT4mFhK9cQ7kNvgHKtsN_&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAB7KohaM0aDnQTppwGGHLIPnI4PYTHL7QwA5BdjkY_NA&oe=6640DE54",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.461Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2a0"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 1690,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/650232787267350/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438196107_1700673613795589_5174754134900529138_n.jpg?stp=c97.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=_KZ6yIQ_32kQ7kNvgF8-rkF&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBj9hA4UhdbXBE27Zimq0UUA9bkEMGBFGu6o--Dn4YkIw&oe=6640C3B3",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.462Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2a1"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1550,
    "city": "Laval, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/962094862256595/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438807900_7355306884517109_4457341234154969179_n.jpg?stp=c19.0.443.443a_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Qm5PkEhnK98Q7kNvgFmHCRx&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBFTO0m0SOnNbic8gdhyaaOZCJgyILy5bkrVbj2urI1Kw&oe=6640CA59",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.462Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2a2"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1990,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/3858908764345207/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/440520109_637604498582691_3745224243674722160_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=HKzJGFY5vnEQ7kNvgHGjvjD&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDl-DWRebknXvwVDEKqR51BlQMY9_NRGyQBJSuz2ACcqw&oe=6640E526",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.462Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2a3"
    },
    "title": "3 Beds 2 Baths - Apartment",
    "price": 1995,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1435275304026807/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438300204_6295791963879255_4736204607806327687_n.jpg?stp=c0.133.526.526a_dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uXV9cOGSnM8Q7kNvgHVu9PW&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBQQRAeig5rcwu_a8VKlEoLy61PKR8mMSr1Ed7nqQwV8Q&oe=6640CCA1",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.463Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2a4"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1850,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/803060355221191/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440571631_734276598865366_4746510392479290774_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=SCJ-Y8nNZI0Q7kNvgGsuJLS&_nc_ht=scontent.fymq2-1.fna&oh=00_AfD7AUPv7FI3WcWIif9CCm_UMGD9yl8fYCbAt49UAF5b_w&oe=6640DDA6",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.463Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2a5"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1550,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1630540577759036/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441325325_10211560802251731_2169585404460731238_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3q_hbuqoc7oQ7kNvgHUMTVt&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAUvar0eLEAIBBphT5WRISHINB3Iw0tc5Ynt7bhk7FHkw&oe=6640F00F",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.464Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2a6"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1620,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1405300613482479/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439720228_1509572609768481_415019927777792077_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=I2bUoRe9O2EQ7kNvgE4FtgQ&_nc_ht=scontent.fymq2-1.fna&oh=00_AfC7Y5t2xzhnUFi74yxuTg9tLpppu6Lxx4vvRIL6lWOE_g&oe=6640D5EA",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.464Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2a7"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1550,
    "city": "Cornwall, ON",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/2197008653964793/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439620493_2246440532363335_4456107998503944022_n.jpg?stp=c84.0.352.352a_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=GbpGCLJtkTsQ7kNvgEvnQI7&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCPL2g1xIbeS192_j1W9-FIhhXQAOdyQ4aeqdJwxI_4ng&oe=6640D4FC",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.464Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2a8"
    },
    "title": "2 Beds 1 Bath Apartment/condo",
    "price": 1700,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/987069119673728/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438080294_7413326292070160_4494911092703433808_n.jpg?stp=c65.0.260.260a_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=pIBeQM0_d80Q7kNvgEYtoAR&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBvn0mrghkR22FEDfG0M4IdfaDtl1eVKEEHxpseVdW5dg&oe=6640ECA7",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.465Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2a9"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1590,
    "city": "Laval, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/777816080988422/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/431308792_284960164648636_5196441089584282714_n.jpg?stp=c128.0.512.512a_dst-jpg_p2048x2048&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=es1-vUbLTRAQ7kNvgHcTY-G&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBRDypT26L90_rwYpgwmxGvxbzG4cpCdBdXAaJzHHgztQ&oe=6640EA33",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.465Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2aa"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 2050,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1366407410737465/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440742571_7478690068846807_2022421849463420940_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=umy8ozZHg4MQ7kNvgFoQARp&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAutJtAM5R44ZmkzrNsTdkuPpqcCspuxhoOVRNEvwL7Rw&oe=6640DF95",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.465Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2ab"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1640,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/326037326946073/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/406814745_24455873760726991_2425264895402771963_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=TVXsUnAHKkwQ7kNvgHnnXLL&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAgNSSrGTdPjVeF2EXKif0KPFnlDVOu4lKt02Ha-LeToQ&oe=6640C058",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.466Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2ac"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/354322447171248/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439626383_1003322794761177_4554793464074601346_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=pRMLoTpi4KgQ7kNvgHzruYo&_nc_oc=AdgqyWNVtvUE15s1RJQ5L8hlNxNl9PahXlh2o5V4WzUqMv5DhfOZTv0gCt9WQZlpjkxo6C9QvinoV6o_rQ-uiKL5&_nc_ht=scontent.fymq2-1.fna&oh=00_AfA5TADjFb-qPYElBkibyr7liRCpIcR8Dh318W09zPxtNQ&oe=6640CFA3",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.466Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2ad"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 2000,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/459481659877616/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438120778_7542655579165873_8832801131654655913_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=UkSW8VhysPAQ7kNvgGlEXhB&_nc_oc=AdgWNyn6It-YMReA_oTiFJhx-y_B3FC22-jp_lufy3k6s4pcukpgUK1BgHTPtTLs4WCWUONsH0-Xp_TIXzIOd6Bb&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCcHqwtHF9cG9jg3ifXSz_Fu0HZjennQa92ok34as39JQ&oe=6640C057",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.466Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2ae"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1550,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/826045192907595/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438134658_821479786499751_5547537788606876812_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=6nfwLC9S5cMQ7kNvgFCrXXJ&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCXPcneUw6ZE1jnS0MWRZ4fDjpqAqtxq-rDZ9MLVvxueg&oe=6640EA35",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.467Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2af"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1925,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/832701795568253/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/431603187_790439982502893_171562680573902172_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=C2p_VqFyRqgQ7kNvgEKUwCu&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBlRYItk2fy5bChq1bTzs5RONko16-RNwf3EJh1qUBoVQ&oe=6640D8CE",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.467Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2b0"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1769,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/825043442854550/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440876304_413154644944387_8792246886529251151_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=20LRlLzXweIQ7kNvgEayQof&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBq-4ZZ55O7S_m5L6GZV1EXeEQzGsCBgWZZ_HKmVSSEbQ&oe=6640C315",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.468Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2b1"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1650,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/898058272121311/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438053932_1674283266739902_57885633667525972_n.jpg?stp=c109.0.382.382a_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=XG_D55sm_PIQ7kNvgFW_uJZ&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAlmtqiVu165eY21lvS29D-jMGIqSt3VRAaQqvJPNv7ww&oe=6640E016",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.468Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2b2"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1595,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/7455723461183844/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/440341832_1191384575364264_4542217852979566603_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=T1eVUwVB_TsQ7kNvgFFJqjr&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBTNmHhzNdr05JltBaiYzvfc_b7amLPxZLZoyeFCVtFCw&oe=6640CD96",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.469Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2b3"
    },
    "title": "Appartement de 3 chambres et 2 salles de bain",
    "price": 1598,
    "city": "Longueuil, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/424197150233647/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441544887_8086725524674110_3115298661044374550_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jDysMb9kWDcQ7kNvgG5px-O&_nc_ht=scontent.fymq2-1.fna&oh=00_AfChQ5tUfozQ76216E8FMk_DeScyxxvZhfU-Y4fQQV2DGg&oe=6640C8E9",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.469Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2b4"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1625,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1471603886776223/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/442436033_1166275184555439_203184883792409037_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Eqq7uTpoeegQ7kNvgGQB8oD&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBYGZri_Ss27peE0r_AVFtkW7uZDTDHpEs8ACypqRZ1rQ&oe=6640EF12",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.469Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2b5"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1570,
    "city": "Laval, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/453978053814221/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438262766_10160945894434765_2329564511953010173_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Y-j6nxXBrgMQ7kNvgF6Hkpz&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCHbxZt7QSAxv0yMWSPj_ZXs28cvrhrnZgWakAX5K_m2Q&oe=6640D8B3",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.470Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2b6"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 2150,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/756124719938586/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439864514_404532312482286_946328318514576775_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=pn5Bdxpl4XUQ7kNvgHBTZZW&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDl0X2yFustlpScnrwXRKOENs7bJCLVvNNdPlvBAkXsxQ&oe=6640DCE0",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.470Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2b7"
    },
    "title": "2 Beds 2 Baths Apartment",
    "price": 1900,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1659908037876476/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438237295_3668343163407952_9168377031921317241_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=lvV4IrI8XdQQ7kNvgHWSiGE&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCM2RUzmVzwBOtIzyVlFlERCM9UrMsRmTml-z_zmrzYwg&oe=6640C6BF",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.471Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2b8"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1570,
    "city": "Laval, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/759387312975307/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438077537_1344664896213493_6418660397162968275_n.jpg?stp=c209.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=Bl6P7b-O8KEQ7kNvgHOYXTl&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAhe1HXA_VzzbJqkIXmmJ1VdkXFzOuP5B1JYAhkdg_MXA&oe=6640F37A",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.480Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2b9"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 2300,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/425880916825484/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438271081_425880523417648_6389838599063461661_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=PwQAnjTmIGsQ7kNvgEQYL4K&_nc_ht=scontent.fymq2-1.fna&oh=00_AfA6ZpZrHEKZMR0mGPTXGFTk3otZfIx3iFhRYTtJTCHdtA&oe=6640E83A",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.516Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2ba"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1650,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1412080882845109/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441065513_1612638412891886_2468554916447974225_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pdj5d91C2hEQ7kNvgF5kyuV&_nc_oc=AdjjApOQunxVOC1aw3v6csvTAgWcrLb0PxXxH3jebf1XS40btfemwKCN4jG3aQpb-qJUrrltq9omjGRCGzrQVY-t&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAzgWRmtdR3r5VCyg1aaUVmp5KKG3eRJ_xumcbTQNJSPA&oe=6640E39F",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.517Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2bb"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1795,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1109078563481144/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/442412111_2332986876890795_1341605876544533022_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ppP5rGzX_j0Q7kNvgG0NjzR&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCAl2MjBZyZeIItFutxveSo40e3GZiebh0MZL1Jvfj1nw&oe=6640D50C",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.518Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2bc"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1975,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/796673958735392/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/434689878_439780358721912_6296631662126575883_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=FcF5S9HQWx4Q7kNvgEMfB5-&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBlgugPX73XmJ8cSM0X_5TJ4Srk-QXvfHv80r2__1w6Pw&oe=6640D2EF",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.518Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2bd"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1590,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1595129804671606/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440036022_7917735034926642_121230389373830852_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Yeib9knKjP8Q7kNvgFmAQxy&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCiNrq_-mkELPew9jBpmgxSEZjhQJFOGHSX24fDOMYiFQ&oe=6640C55B",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.519Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2be"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 1600,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/684721343728718/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438079948_374298548289238_6568039171800923874_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=qRqQpypuGosQ7kNvgHp4e9J&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBtceob6hcprGOHUs5rvzmxgnZFexXgKhkyZF45xRvoUA&oe=6640F06C",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.519Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2bf"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1650,
    "city": "Laval, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/490418823308151/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438222172_914646700410790_7893436147213503425_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kJMa8GFkZjsQ7kNvgE0ykY6&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAhSGOJeQUANyT4Ii0dZF7TC0nayB_fNPQhi-B1R1ClWA&oe=6640F3B2",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.520Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2c0"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 1950,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/795062772608983/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440326499_10168687836375453_7098865096323829388_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=182dJESjrtcQ7kNvgF-g-C9&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDDLiF0M0Nk2Z_6gQ8yCttvHEMs6hJGBQX7L6DyddITFA&oe=6640ECC9",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.524Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2c1"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1850,
    "city": "Laval, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/3585492121765610/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439569763_460052356381018_8923112029130983117_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=DysW1sedXNsQ7kNvgELHrCi&_nc_ht=scontent.fymq2-1.fna&oh=00_AfALuqFag500OQHqfI9XyoybWRe5JXWXbXKvqNQ3LmiA3g&oe=6640D189",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.530Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2c2"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 2200,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/407398815445460/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438145049_8029398920423991_254705295157657509_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KDpgOGL5Xp8Q7kNvgGsCJeU&_nc_ht=scontent.fymq2-1.fna&oh=00_AfASmuu6WzDXGRQtrxxiOAhthijUmXPyMyJosldXivzY6A&oe=6640DABC",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.531Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2c3"
    },
    "title": "Appartement de 3 chambres et 1 salle de bain",
    "price": 1585,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/388286617535417/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440133823_2142406692784278_4817653076869257928_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2v8tv6-n8CkQ7kNvgHKED8V&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBI1cStqpFjUmpbOhTkpg0pQJnkeXkHvyQrwvJ1_kNlmg&oe=6640C36F",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.532Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2c4"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1500,
    "city": "Côte-St-Luc, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/2448725631995362/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/429772540_25088488164130717_860094960355862249_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=lmhi1fqT0XcQ7kNvgF-dV-G&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAjHFwn0sDEbbPb9dZ4kGSbFOKBnonwvfzUre7d4qaVvA&oe=6640F58F",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.532Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2c5"
    },
    "title": "2 Beds 2 Baths - Apartment",
    "price": 2250,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/344360128662349/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440934262_7781336591930111_5896914061048004872_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sAbJSce9WG4Q7kNvgF5k2oD&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDHS5MJJsrUADCjRUADO4jrUNYjzmQyq7mFH1YgdjWI8g&oe=6640EE90",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.533Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2c6"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1600,
    "city": "La Prairie, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/984795816549567/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440928530_10159656290722204_7896486170691793488_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OwT9vgUR_ZEQ7kNvgHif0KY&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAJqZEE4rDz971yQI62xT5Gnx1LoNxJYaLtvRIPu_sOmg&oe=6640D631",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.534Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2c7"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1550,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/313619384947930/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438077614_1636727813737774_132046989521730378_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=n2dNmTFzL8EQ7kNvgF8DL7B&_nc_ht=scontent.fymq2-1.fna&oh=00_AfC47De3xs82S3E1KZ2Q2yfirpiAMfqre7GV4E3ZmriRsA&oe=6640D540",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.534Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2c8"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 1600,
    "city": "Longueuil, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/449858687451607/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/431757993_7929353577088735_6272272770895088719_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=bDfYq-QNkHYQ7kNvgEXFkrp&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCke8MSeZ_lZbqQT6w0ojh6-9hx9YaGTY14KjrC7b7Tlw&oe=6640D327",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.535Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2c9"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 2000,
    "city": "Laval, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/324417100447281/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/429872196_7021697187953063_1703228030941310211_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=DeUbXRFzoFQQ7kNvgE9WFP5&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCIEUauwPDqzs7eppPYY0YntBFK40xvHMqNJN2DNVe8aw&oe=6640D6F6",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.535Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2ca"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1750,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/2140349719677787/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439779039_456108766869707_746378478657426141_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=0IOz14Zw-XMQ7kNvgHYwVxz&_nc_ht=scontent.fymq2-1.fna&oh=00_AfA4V8ZbRGWIJZ-DnB0QZ3t71CrehI1nrykT2WC90-eMrA&oe=6640C0AD",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.536Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2cb"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1895,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1738595363216049/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440212717_10233196659406487_936481360565970223_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HyqzqBfofb4Q7kNvgHpWycO&_nc_ht=scontent.fymq2-1.fna&oh=00_AfABp_XB-4EzeOcxtwlSYbz-m2o0Bcb9ShrmMlfEhFnkIg&oe=6640D0A0",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.536Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2cc"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1505567493676784/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/440326752_985227153335722_3404198060143793161_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=kJj7SwY2ItgQ7kNvgEK1At3&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBg7DLwRXFzeQtkU2Id1rlo8Led09RT2OFy0ldb2TkrsA&oe=6640EEEB",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.537Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2cd"
    },
    "title": "2 beds 1 bath Flat/apartment",
    "price": 2195,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/406057852349304/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438131663_320029294268589_4867743564220770746_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=ryhh_LoS3TMQ7kNvgGGfPns&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBrEY2wjCWmacDnlewO4l3dM7a1DaUM9Vet4wyiwRdhHA&oe=6640C9F5",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.537Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2ce"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 1745,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/286273197787696/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/424985027_2772006942956504_3375838394778082306_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=cLYKbdvNmRoQ7kNvgEzuRN7&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCAd_7NK_PMsW3e3SQpkwWZugYbOiTlrLE2LVdwTH2CzA&oe=6640E53D",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.538Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2cf"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1500,
    "city": "Brossard, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1385586388823827/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438298954_4077573465804322_5274598468012630452_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pzwi1I8w4PoQ7kNvgHpDdQJ&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBe5_9ECRQMHS1Y7Bi1-OcNDDEegtD8t6xwhasKklybmA&oe=6640C18D",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.538Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2d0"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1610679066363838/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441253186_412812921605193_6423090043746611317_n.jpg?stp=c89.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0KSvQLhFSxkQ7kNvgE3znhv&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBz_Y6gSF5czD3snT7VSL7n8ym__evnt0qh6OF-593oLQ&oe=6640C782",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.539Z"
    }
  },
  {
    "_id": {
      "$oid": "663b08fd8eaff6aae413a2d1"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1975,
    "city": "Montréal, QC",
    "bedrooms": 1,
    "url": "https://www.facebook.com//marketplace/item/1676758573142826/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440968734_10168886955335314_6458658312569359680_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yu3E9tBf13sQ7kNvgG7U0EO&_nc_ht=scontent.fymq2-1.fna&oh=00_AfB7sqbtueAkO_guAa2jSSgcwXzXZM9sKPKwH9J7VHpfWQ&oe=6640E758",
    "date_scraped": {
      "$date": "2024-05-08T01:09:17.539Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2d2"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 840,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/976199293912780/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441350074_7163314483797099_872077244687563396_n.jpg?stp=c210.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N0_1MPtYJ0YQ7kNvgHJAmbu&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCetXc0Q6_TB0BTOgWsT5b3yD76FgcjNHA0xZcbjDpPlg&oe=6640D0D6",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.431Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2d3"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 850,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/414622431318360/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438145887_1627342808036890_6667496797886134274_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QaHMY0zQSGIQ7kNvgFyKrwg&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAsuq35NP6tDLG_WjFtAvqkqxYRsV25wbD_BJm9IzYpnQ&oe=6640CC05",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.432Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2d4"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 840,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/350035841429334/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439831138_304521436030496_121095032113515107_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=V1Kc4ymBqFsQ7kNvgGF254g&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDZcgfqPbNenEmRvshjZv7yfg0zj1nRg1CYIykxkEfvoA&oe=6640F12C",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.433Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2d5"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 897,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/293523860475007/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438301376_459399713114813_1927618513157255204_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fOXu9wDhQe4Q7kNvgHK3Aty&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBBIHVxhagf3hpIF1dKP_oI4riXSAUbagJmzVpFrqgERw&oe=6640C2A0",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.433Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2d6"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 900,
    "city": "St-Bruno-de-Montarville, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/451007010754320/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/427227685_981442710026273_7966460062037753850_n.jpg?stp=c40.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=RHuiF8HvJB4Q7kNvgHdCwk7&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDCsdR2OqCIPdr9hslQT6hjsWQIWW0l0cwQFv85MS-aUQ&oe=6640F5C2",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.434Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2d7"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 750,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/321036187692404/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/440282368_371882621922943_6219473134246991841_n.jpg?stp=c0.306.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=-1Jb-LknfIsQ7kNvgEwoPsT&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCkgR6wq9rPKNgeLfK3tUH_PBmSQOLPGuDwiLiFdDOuZw&oe=6640C129",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.434Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2d8"
    },
    "title": "3 Beds 1 Bath - Apartment",
    "price": 1000,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/827256759422076/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438088185_3093071077531437_242513204298682522_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PwjSt6tUyZMQ7kNvgGlfJ5Z&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBtOlh5jD490ZRDc6bw-BGQWEfhouriBxeT-ZH1Wr8XLg&oe=6640C59D",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.435Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2d9"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 950,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1003682331345709/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440747113_3793511740928128_541267786269416164_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=L0eMmJTeK7MQ7kNvgGoluA6&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCQKbyEZCRKPfbNvv-SNQB2K07egBT0YAt1ybtO7zoI9A&oe=6640D115",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.435Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2da"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 830,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/976748773794132/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440120090_449277530804329_5865034617259325043_n.jpg?stp=c116.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=DYjGXDZq0LMQ7kNvgFsVqlb&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAZL0-7aiTimmwXO-8cG2ZVL5ePLg-ds9FFPP3vUAbEIA&oe=6640F61A",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.436Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2db"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1000,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1998230667262795/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/439960884_10169101501820691_2421844388962561307_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nlsAKfDxL1IQ7kNvgFD0wPv&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDazNNkxegjQZ3VXT4wHuNUnFUmgGWHvgULK01NEuHmSQ&oe=6640E273",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.436Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2dc"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 825,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/445327514713898/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439416813_270545196054423_9072547803834436517_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=LTSrBW0Op70Q7kNvgFPgVYt&_nc_ht=scontent.fymq2-1.fna&oh=00_AfC7reHsMB2Z3eOyfUNOiaTyUyBcAkt6Luy4TUlErnVl9w&oe=6640D382",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.437Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2dd"
    },
    "title": "Appartement de 1 chambre et 1 salle de bain",
    "price": 925,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1412252829424401/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/427109285_7611225965611503_5167826129726727254_n.jpg?stp=c29.0.540.540a_dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=-z4U4qJsbmkQ7kNvgG9pcL-&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBI5pyiVR4ce_DSNkLpHHVqlEMbrEuvFQzSjDXkAILZUQ&oe=6640DB57",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.437Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2de"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 980,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/456562673558322/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438310115_820222790166512_7115454258916617806_n.jpg?stp=c0.86.526.526a_dst-jpg_p526x395&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=7rDI123BbI4Q7kNvgGvDAK6&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBM8b8tpN-nJ1M7uC4_fBQJDsd8vJESfsmhuBIFQ1d4zQ&oe=6640F1CE",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.438Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2df"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 900,
    "city": "Westmount, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1105449863957576/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438080610_1383319572372467_884735346337347009_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=jwgACcaRk-QQ7kNvgG48bgm&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDE_ClbgqoyOS_SOXMjTPom5trMTWDIh5cK-EhePbhfYA&oe=6640E82D",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.438Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2e0"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 830,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/745880737736141/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/439503861_2205065196505820_1511858013336333573_n.jpg?stp=c0.53.480.480a_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=T39D9nFIDpQQ7kNvgEojkjo&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAZlQazBFG9i6THHQxHDyV-R320zdE7wNeV8twZY5oulA&oe=6640E342",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.439Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2e1"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 900,
    "city": "Westmount, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/336893412743521/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438108019_4155293681365862_6404768245815695440_n.jpg?stp=c90.0.540.540a_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NNVBEkqinHgQ7kNvgGQ2IG9&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCCV2mR90TuDl1RmL8o-JGWdsZX8o1T9jBszWYjoybCXw&oe=6640F090",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.439Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2e2"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 950,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/791716582565008/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438080320_1960997850969976_4960666214263259239_n.jpg?stp=c136.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=3Dbj_5qtMtcQ7kNvgHw23o6&_nc_ht=scontent.fymq2-1.fna&oh=00_AfD-WWLN_qI6C-6XVjlxczy5M0v5BlO9wWJpFN8U4azyDw&oe=6640EEAD",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.439Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2e3"
    },
    "title": "3 Beds 1 Bath Apartment",
    "price": 1000,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/404562785688340/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/429868526_1137216854364578_7693313261744689279_n.jpg?stp=c1.0.523.523a_dst-jpg_p526x395&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=7H7r6CxsDbkQ7kNvgGisvjX&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBSsD9FKBHi_dXjYD23td-fXynKhfDMkHdHtn3un4N25w&oe=6640CC42",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.440Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2e4"
    },
    "title": "1 Bed 1 Bath - Apartment",
    "price": 900,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/415897664486156/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438097904_1223177309059324_1389140980281415767_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kfN8FXV2ELwQ7kNvgE-r8pL&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDfgCnzDSzLwqvmpzbhrYiBYrRcrMUCAsQhy1AS9tqKcA&oe=6640F3B8",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.440Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2e5"
    },
    "title": "1 Bed 1 Bath Apartment",
    "price": 1000,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1162436228139467/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438103139_415938391206984_5456928925582125778_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=i6MvevPQTosQ7kNvgGEZDMg&_nc_ht=scontent.fymq2-1.fna&oh=00_AfB72Ph-jQCJKAXwhVW_lpoxStHiQNdTMFypfvo20Uj8OA&oe=6640DF03",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.441Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2e6"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 900,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/7379617455493144/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440790776_1181505706538444_8659639116760472397_n.jpg?stp=c0.202.526.526a_dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=plU9TrkPnBMQ7kNvgGJFIDm&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDoSRgOHFiUCt7zzAlVq0uIzZK4jKXKdZsLyf0s6w6KBg&oe=6640BF87",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.441Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2e7"
    },
    "title": "1 Bed 1 Bath - Apartment",
    "price": 900,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1422681425039972/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438174827_3752117648339626_9197926663568890432_n.jpg?stp=c158.0.527.526a_dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=eBtVrqvj2CIQ7kNvgE905eL&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCWP9T1sGtF00SRBk2S33nFha2xTRGpMA3U2oEWgFU2AQ&oe=6640E642",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.442Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2e8"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 950,
    "city": "Prince Edward, ON",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1162363488231551/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/439813686_10168957241770245_2871603975818495651_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mFlwmGqjGJ4Q7kNvgGhwWEi&_nc_oc=AdgaVLNxadwiz2fjMyqpGrlhnTig0TBnu0OBzPwMHC8rM8HmZO61MQr_YvJXVZdoKCb7JKphuQ9liOP1I8XQU5tP&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBwCfqsLNh_uuKf648kXExoxoBdDimStDnlHuZohPR2Ww&oe=6640D23B",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.442Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2e9"
    },
    "title": "1 Bed 1 Bath Apartment",
    "price": 870,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/368283528953438/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438079711_1158191115188250_8976527539187544379_n.jpg?stp=c0.80.480.480a_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=R-5BgNWwxB0Q7kNvgFi2I2F&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAdj-6JXnayRw4vb2ghIcxy5lwQ69YPx4oCrM6Zd4fhtg&oe=6640E34C",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.443Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2ea"
    },
    "title": "1 Bed 1 Bath - Apartment",
    "price": 920,
    "city": "Dorval, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1622226775279600/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/439613729_1147232729923379_7951627613446645695_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=k9no8TEAn7sQ7kNvgGeroQ_&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCmr4SCMf9yAjgZugjlRVJMDqp3E7Unf2NwJy6iWUjK2g&oe=6640D3DF",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.443Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2eb"
    },
    "title": "3 Beds 1.5 Baths - Apartment",
    "price": 900,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/3417344028563887/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440783323_1213407023373997_599374731874846790_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0c0_ASpqgtkQ7kNvgGnl5WV&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBy-nQonc3aG0lQpfRCy8UUgOHOMiuBNmFbSPMnDfudRA&oe=6640ECC8",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.444Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2ec"
    },
    "title": "3 beds 2 baths Flat/apartment",
    "price": 1000,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/2804255223060679/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/434845335_3740260432873527_1599412359974459189_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=Qsc5teVOWY0Q7kNvgFMF5ud&_nc_ht=scontent.fymq2-1.fna&oh=00_AfC7NS3fGkxVOlT4HysUkAUC6lmP6FdAuLBOuSMuNn08_A&oe=6640C41F",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.444Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2ed"
    },
    "title": "4 Beds 2 Baths - Apartment",
    "price": 915,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1156545958864647/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440144438_412881221539381_8280748637034486234_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=SPWtVp8vcl4Q7kNvgFcCk5f&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDZTtgQG_PXLsfy8xrWkNn0Vfwvo4RZ4mKCnTPGX4frUA&oe=6640DB7D",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.445Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2ee"
    },
    "title": "1 Bed 1 Bath - Apartment",
    "price": 850,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/818557963658221/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/436839569_348434657811362_282949494403273777_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=ExP-rH7JB3AQ7kNvgEZdHez&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCY6af1Iz85wgH4bG_aV9R1C8ns2ynLvMjY0AJVOlePsg&oe=6640DC9C",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.445Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2ef"
    },
    "title": "3 beds 1 bath Flat",
    "price": 930,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/864934978982661/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/437589815_311439431977153_3524545998942300468_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=1Wq2IzLh_AAQ7kNvgEzjw6t&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCNByadPvPXqn5K5iq2WfEUBYcAv0LyUQ6gXjQWn6lWmQ&oe=6640EF68",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.445Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2f0"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 550,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/389557684057408/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440253724_460650029739576_917380266343702119_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ehtJMZWliKsQ7kNvgGDcHnB&_nc_ht=scontent.fymq2-1.fna&oh=00_AfC6tD8iqckTUP38p4wWTxNlKzatH7-oT2LMKJVPNSj7Zw&oe=6640ECE1",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.446Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2f1"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 496,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/383359784692122/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/436962028_962746322158807_4885713628241244368_n.jpg?stp=c88.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=Yljk4y1swrQQ7kNvgHA4IUJ&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCBc7MJTJw7d3OVG1LBWyY0gZBepJWsiwCVXKfPn-DztA&oe=6640E79F",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.446Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2f2"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 900,
    "city": "Laval, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1501254577468053/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/434253588_962314542152896_7853012799946113379_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=BNiFWsvQqfQQ7kNvgGz2JVy&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAhmoL6-c7UTl0i1Dj8JVr-fqx_qfHiICgoRvcDcwXkNA&oe=6640E698",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.446Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2f3"
    },
    "title": "Private Room For Rent",
    "price": 924,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1918306871936077/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/373599977_6940346589331260_9069380561417257495_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=jT2PjA7nRckQ7kNvgHy1Lmz&_nc_ht=scontent.fymq2-1.fna&oh=00_AfD2nmg28ImM4LOXN0UgfYcnoNcoEYSCeJ1fT1OvivN4GQ&oe=6640CA69",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.447Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2f4"
    },
    "title": "3 Beds 1 Bath - Apartment",
    "price": 890,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/830489449120314/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/439120764_122138639384125152_3515999977842266790_n.jpg?stp=c0.35.526.526a_dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=LbWaMzTXlAgQ7kNvgH8TfeL&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDBwUHCHgVNF95T6Ln1IUDR_ycOcuElz2hIz6Zv1uVmzw&oe=6640DC14",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.447Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2f5"
    },
    "title": "Appartement de 3 chambres et 1 salle de bain",
    "price": 890,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/7439899829460268/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438011097_971074417547947_5541939740476588596_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=pygIcenXQW0Q7kNvgF7oJn9&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBlUYd6Qho-HIVjXPc-D5qCw6nC0c-AiH5Hi8GQhAzixQ&oe=6640F6DF",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.448Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2f6"
    },
    "title": "Appartement de 1 chambre et 1 salle de bain",
    "price": 990,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/770436731521836/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440802549_887376023192479_5744262952304412964_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=erxqfqILI7MQ7kNvgGg7CIU&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDEkMrsjPn3qQoSGXAc4hgBhWxfXt6M_t588MV6aKvRCQ&oe=6640F404",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.448Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2f7"
    },
    "title": "4 chambres à coucher 2 salles de bain Appartement",
    "price": 585,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/998979278900030/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438163818_1886583411786955_5077379215086656685_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=CstVBoDEMcgQ7kNvgHjZZVA&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBsZYopeWjEnr9f35UlhXwco5S4aJuh-hSu5nmi9KglTw&oe=6640D6D7",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.448Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2f8"
    },
    "title": "1 Bed 1 Bath - Apartment",
    "price": 1000,
    "city": "Brossard, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/447286267781350/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440424596_10160522594217061_6791453220887392733_n.jpg?stp=c48.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fTZIc8s0KikQ7kNvgHjGll9&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAPXsLtrxz_zEXZoAxJrZ4MWbm3eKhG8WYUKOg7OK6Cpg&oe=6640EF6D",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.449Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2f9"
    },
    "title": "Studio 1 salle de bain Appartement",
    "price": 995,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1673654193170582/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/436787977_459908839927497_380346795737620378_n.jpg?stp=c330.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=thoS7Wb9TjQQ7kNvgHyDVzV&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDLfP031F2QeF3r97VX05pzuh6bTBkNePFoSN5uxDS0aw&oe=6640C3FE",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.449Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2fa"
    },
    "title": "3 Beds 1 Bath - Apartment",
    "price": 900,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/738895554985735/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440941447_1112478273311478_3749021187586240458_n.jpg?stp=c92.0.540.540a_dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MwQND-RGuxkQ7kNvgHT0_si&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAucqj5xoCaxlgjNks2OzJ9_9Ixmz_MGg2DaL_09NZtTg&oe=6640DB83",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.450Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2fb"
    },
    "title": "1 Bed 1 Bath - Apartment",
    "price": 925,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/7444827848967273/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438225271_448889031001417_1796134083909845338_n.jpg?stp=c0.80.480.480a_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=pTnspwRkeWAQ7kNvgE4Mrws&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDt_GjMBGbLQKYsx52kMskhd8Vg3c_jgHwCiJxDUQei1Q&oe=6640D28C",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.450Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2fc"
    },
    "title": "4 Beds 2 Baths - Apartment",
    "price": 615,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/7788762857841410/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/440064381_893943896107050_76334785616582651_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=RSXRWRQq-KoQ7kNvgG92-38&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAkVmc383vPXkKen7pOEG2DAzOygkjcP30eV5MQuujYJQ&oe=6640CA25",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.450Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2fd"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 728,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1485124385750457/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/416700242_467481519277647_6377015721074419019_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=tWgFi4ZUePMQ7kNvgHTB9_E&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCYQFz3qz1OT4UIv30-CiHC2Iv1CnwyB4-S10DudZZHSA&oe=6640E368",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.451Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2fe"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1000,
    "city": "Beauharnois, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/964852772020930/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440150729_1845544149202034_3174257052467216893_n.jpg?stp=c91.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IWsXkawvFkEQ7kNvgEr5zz_&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAdKuhOlQNVtfvktMq1B1SHdUOTe5YSiJwj7T8DOrTB2Q&oe=6640E1FF",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.451Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a2ff"
    },
    "title": "1 Bed 1 Bath Apartment",
    "price": 900,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1256493005311348/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/424974069_807809194637442_1225884586131275188_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=SvoEVZDfrBcQ7kNvgFU1Rfc&_nc_ht=scontent.fymq2-1.fna&oh=00_AfC0Q3-p5Prft8UfvfR9XhBe79oz4-KVppfxU43lR3Q66Q&oe=6640DD6C",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.451Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a300"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement/copropriété",
    "price": 900,
    "city": "Roxton Pond, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1487389332213399/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/437914664_971552911190637_2955181221865531607_n.jpg?stp=c0.60.360.360a_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=-CdipmWQIWcQ7kNvgHYrwvj&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAU-EnfuXA4I-2TJ1ZgI2VMO9au2Hlj2eN34sCo3na2bQ&oe=6640E70D",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.452Z"
    }
  },
  {
    "_id": {
      "$oid": "663b090e8eaff6aae413a301"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 975,
    "city": "Sorel-Tracy, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/295796893575087/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438304624_10161587838783619_9181771278143675029_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ovUISbaNjoQQ7kNvgF4TbM5&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCzbGX-S_z5vv2NyCoaKXUSrESLONoI2vIGsK_2Kwe0jg&oe=6640C4A9",
    "date_scraped": {
      "$date": "2024-05-08T01:09:34.452Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a302"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1200,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1506670910023273/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439538229_812932170261868_6844064721582930622_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=3m9ez5kCivYQ7kNvgEo_W0t&_nc_oc=AdgnWvm8x8PjaHIyrpwciF1mFDn4_Ec9f0xsMDFxnXd3dkJ1e_kAjhI7G8DkpMMGMMlfg-JH24eDGyIQ3OtKYw94&_nc_ht=scontent.fymq2-1.fna&oh=00_AfC5aNLTSLmftm8g6BxLHmOqWlO-OyGPzxLtDrJQprZnVA&oe=6640CE1F",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.491Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a303"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1450,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1099764371256529/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440749874_10163403285359307_1040921888824384384_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=O6ME35sUdFgQ7kNvgFWGtHw&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCuTSwkQqLZIpmGBVZdCr0h_N_cNUfRdDeeoqlITbvzaw&oe=6640F5CF",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.497Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a304"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 840,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/976199293912780/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441350074_7163314483797099_872077244687563396_n.jpg?stp=c210.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N0_1MPtYJ0YQ7kNvgHJAmbu&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCetXc0Q6_TB0BTOgWsT5b3yD76FgcjNHA0xZcbjDpPlg&oe=6640D0D6",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.498Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a305"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1350,
    "city": "Longueuil, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1510794076461423/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/442441259_1150258966176844_3928312173985092646_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BSmF8Aumj84Q7kNvgECXBda&_nc_oc=AdiAw3950D3XI40v56SRJ1k_6KFWxPycun_x7WN9MqTKIIsXSv303LO7XTf3ppqnUHOnrWpmhk8u4DQhW8FndTfO&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAVLZAPCcuIn5LJm61Hg0kxAF80I0wvS4LIPNPXXyNKaw&oe=6640C26D",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.499Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a306"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1200,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1387347021976639/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/421849581_8376577452357361_1281316111760539845_n.jpg?stp=c107.0.426.426a_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=oxWnEDcA700Q7kNvgHvIZTd&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCnZ0MjN5xkSe-1FYY9zfpqcGCsPMGIdixyvfoukUD0qw&oe=6640E3C7",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.499Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a307"
    },
    "title": "Appartement / condominium de 2 chambres et 1 salle de bain",
    "price": 1270,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/487135223662038/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438242362_768200928784781_6136406112554312885_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=bVBJdUsAL5EQ7kNvgGkA_bt&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCoZtf6y1u1cREA7HdPgiMCpKZch-zRqmyPUS-ts1iDNA&oe=6640DB04",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.499Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a308"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/766445658966460/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438242435_1601307450667720_5699056251572204618_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=14Bs-Oh-Ut8Q7kNvgHMrJtO&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDQSACPiUeEldyI_pzwaTktp5vPe4Jok1MlmdES1cJP1A&oe=6640C3AC",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.500Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a309"
    },
    "title": "1 Bed 1 Bath - Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1550009312211624/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440956662_122145650468187654_846954296301209524_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oVr1ZzOcmqUQ7kNvgFe1hDk&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBWrUeX2ScTkwRkWAg7fKGycWvleoQd5mVmEyP5pY2mGA&oe=6640DD7C",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.500Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a30a"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1400,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/819115270110277/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440934150_742884618038371_6963394776134702716_n.jpg?stp=c0.199.526.526a_dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=71LgJc0XiCcQ7kNvgGU3Z9_&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAtMobm7iHuOsi3ZcbEc2GkyksnmQmAbXijSVktutLyzw&oe=6640F6C0",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.501Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a30b"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1495,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/770018161867114/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/441447176_3138738996257211_6852380381745626370_n.jpg?stp=c209.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=g6r0uxX54BoQ7kNvgFhEaOT&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCkriSdRXYmm6V00FlJ2utz2If0v0rhR27c2EEtSanFQQ&oe=6640C53D",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.501Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a30c"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1325,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/311217158686702/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/442410099_10168667105990644_4611342926306084183_n.jpg?stp=c75.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oaaPUKB4kqEQ7kNvgE04tey&_nc_oc=Adh_zqEFoCEKMxgTEAqvNMA1rpr5zlw5ID2bHwoGR2bTr2JF0UVND-Xs5Dk0XPIRVdV3xR7G0CW7P1qG4SJrsbjo&_nc_ht=scontent.fymq2-1.fna&oh=00_AfD1FF83oJEP8UYV_i9P3GduPnSFfsIaPOM3Fy8eDeAW4Q&oe=6640C334",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.501Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a30d"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1485,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/356337016948078/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438260919_455261366876334_1145169012210454470_n.jpg?stp=c0.198.526.526a_dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6OMbwwf5Kt8Q7kNvgE0aGJ7&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCaaVgkV8ZIGRvaK9EF_fwpnnNjGyKSAQCT95anWwLiag&oe=6640E666",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.502Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a30e"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/983143269409493/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/427730536_954221852824852_8297996746862940587_n.jpg?stp=c75.0.453.453a_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=u-1Cyp-U_csQ7kNvgExJyyi&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCHXfUuYNYB9dvv3JfImiKXo8dzXSGJDKlDD10AUtztAQ&oe=6640C53A",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.502Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a30f"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1350,
    "city": "Longueuil, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/467036372414919/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438306043_454557130323841_1462251184642122746_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=XQ0gdymTcz4Q7kNvgHhAOye&_nc_ht=scontent.fymq2-1.fna&oh=00_AfC0IzgtOuqmkeFmWQlRFLnZk5UjTh0OLVLwjId98Y7uQA&oe=6640F5AF",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.503Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a310"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1350,
    "city": "Longueuil, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1279852839649175/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/440299870_1146736256670192_4272399105180227936_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=crwX1fUAJoEQ7kNvgEmI9UA&_nc_ht=scontent.fymq2-1.fna&oh=00_AfA0TexobB4-uepgZGF1aGSi7h-aVb-l7lur0KtU8wTOvg&oe=6640CDAA",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.503Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a311"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 1300,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/3851596731736487/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438131821_1161969684839778_6190242593648068881_n.jpg?stp=c0.0.261.261a_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=pcPn8DLqa-wQ7kNvgGYhH-p&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAD2pR5BOIAwH2BLFlDDWppfm5H0BSLsef7ZSnjWTmWhQ&oe=6640D1BC",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.503Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a312"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1400,
    "city": "Brossard, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1114813829752563/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/436589096_387864000885093_6136573115440192660_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=qHinmPVQf0cQ7kNvgF0HKZk&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCfnaOQx3_pnpzWJ19VikcDKwl1VOsGEfGEFlvQhNQRYw&oe=6640CF8B",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.504Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a313"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1400,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/975613753939606/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438303594_1424960465060478_9080557322705273592_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=RGHY0viUMpoQ7kNvgHrcYQI&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCpyKlIhn64Ij-UqAJIdkRsvnC9k6uIiFOScbyLQcD3Zw&oe=6640E9D6",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.504Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a314"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 850,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/414622431318360/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438145887_1627342808036890_6667496797886134274_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QaHMY0zQSGIQ7kNvgFyKrwg&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAsuq35NP6tDLG_WjFtAvqkqxYRsV25wbD_BJm9IzYpnQ&oe=6640CC05",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.505Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a315"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1350,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1124454968756339/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441312722_10161200098661421_2074650843160473559_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NfNs-U2mh1cQ7kNvgGLXZh4&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDHJ69S7xr3A_O83M1dgYGcTm7BS093IYx4Y0jxrNSBog&oe=6640DED9",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.505Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a316"
    },
    "title": "2 chambres 1 salle de bain Appartement",
    "price": 1500,
    "city": "Longueuil, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1465244944082163/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/440042041_324103013821770_210179559797618101_n.jpg?stp=c60.0.360.360a_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=SN-YYtxE5t8Q7kNvgHOTPvk&_nc_ht=scontent.fymq2-1.fna&oh=00_AfABEpWeM9eT5sh4WdPirRQPz9p6I7OLesBEuvREei8Adg&oe=6640C817",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.505Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a317"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 750,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/321036187692404/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/440282368_371882621922943_6219473134246991841_n.jpg?stp=c0.306.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=-1Jb-LknfIsQ7kNvgEwoPsT&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCkgR6wq9rPKNgeLfK3tUH_PBmSQOLPGuDwiLiFdDOuZw&oe=6640C129",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.506Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a318"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1395,
    "city": "Ste-Anne-de-Bellevue, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1933451843764667/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440816439_463241522810119_3532702371797928070_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jAOEr4eVgMEQ7kNvgH5Qy-Q&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAqQ9Jo2LLqofHl9VnCeRcUcd7pTEM0G6XamkCDkWNbeA&oe=6640D3B7",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.506Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a319"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 897,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/293523860475007/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438301376_459399713114813_1927618513157255204_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fOXu9wDhQe4Q7kNvgHK3Aty&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBBIHVxhagf3hpIF1dKP_oI4riXSAUbagJmzVpFrqgERw&oe=6640C2A0",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.507Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a31a"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1410,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1503449297195808/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441265827_7570315199672522_2530317568353729513_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=16BbjJuzCwkQ7kNvgHI2YDH&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDRyRmWTreJOlnR9Neyl5OfzMvSjVsCfYIGNKZJUhzrYQ&oe=6640F7AD",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.507Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a31b"
    },
    "title": "1 Bed 1 Bath - Apartment",
    "price": 1300,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/367919235635767/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/437516238_802571821386403_359275001392987625_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=l-BeWarDaE4Q7kNvgEw42ZJ&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCWc19RebvuSHoY06hh-U4FKCc3yJmGVyxlYJanscxexA&oe=6640D171",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.508Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a31c"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1450,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/962046905172716/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439599597_1001769957946073_5429060863796006276_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=FVGwHltLpGcQ7kNvgFLca1j&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAgFz92uyQk8WNf5vOqaGt_DC4Mz1eSYcKJSG6b172tIA&oe=6640DC41",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.508Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a31d"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1350,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/771472315129515/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438037069_452382890808863_6663321636424933658_n.jpg?stp=c24.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=qCKgBpsKoCMQ7kNvgHvOboT&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAkm4jFiqhiPc0x2Mj1Eh3iyH3dgNaA1wsa4MmBpf2fng&oe=6640CE90",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.508Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a31e"
    },
    "title": "2 beds 1 bath Flat",
    "price": 1460,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/288572884317034/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438313211_793884226052594_8932422970086441122_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=_YGM5ySAMi0Q7kNvgEEpZDH&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCkUzSRpXGXQCFeu92m7q0KHAD0R7fIaCmPMpnupj4Fsg&oe=6640EC5A",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.509Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a31f"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1400,
    "city": "Laval, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/731297599214308/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/439562228_1506650353217624_3976519505770957292_n.jpg?stp=c0.202.526.526a_dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xn54LK__dG0Q7kNvgHKf7qu&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBjux-mou-MudoZ9ds84JQ97nkwiHO53lI8jxomnNYDqg&oe=6640D55C",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.509Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a320"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 840,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/350035841429334/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439831138_304521436030496_121095032113515107_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=V1Kc4ymBqFsQ7kNvgGF254g&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDZcgfqPbNenEmRvshjZv7yfg0zj1nRg1CYIykxkEfvoA&oe=6640F12C",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.510Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a321"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1500,
    "city": "St-Constant, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/470510715330213/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440355677_2448012372053525_7583394636658204564_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4mAQWlEi_FsQ7kNvgFFx8CB&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAXOULSN3ic8n8UnADRiRm62LuAu91T5yPlQHuxrz-Bbw&oe=6640E139",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.510Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a322"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 900,
    "city": "St-Bruno-de-Montarville, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/451007010754320/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/427227685_981442710026273_7966460062037753850_n.jpg?stp=c40.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=RHuiF8HvJB4Q7kNvgHdCwk7&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDCsdR2OqCIPdr9hslQT6hjsWQIWW0l0cwQFv85MS-aUQ&oe=6640F5C2",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.511Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a323"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1450,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1119881245896975/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441186446_10161429795074154_1869493133994527418_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MTrxkHhoKdcQ7kNvgGK923c&_nc_ht=scontent.fymq2-1.fna&oh=00_AfB7ao93_GqFuAshXnziN2oUUAYXIdwucAvsnN9ShhDr0A&oe=6640D9A0",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.511Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a324"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1350,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/748543817444087/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440234329_8148789748468017_8868524611562198305_n.jpg?stp=c0.60.526.526a_dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ac11M_REETMQ7kNvgGXCr9a&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBAEV7kkGUIfVZR8HsYrb8hhtybWTTIEBPeBCsQxwzEHQ&oe=6640CD33",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.512Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a325"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1860167331151404/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438310038_750633977279242_2190086853743925623_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=DRdar-DWHkYQ7kNvgH8Yqe-&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAnhOQ0AwRKFjpB6cF7gsABbcI_HUGc7ZPdNCZjxnrEUw&oe=6640EFD8",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.512Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a326"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1450,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/808348651169859/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438204101_812984053505745_6505313703872836610_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=m7hZ2TEmG2sQ7kNvgFFBYZK&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDa31PhIPo3g1BpIkoGh5R2lWJyAL2Mdka8578wuiDXNQ&oe=6640F753",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.512Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a327"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1500,
    "city": "Côte-St-Luc, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/2448725631995362/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/429772540_25088488164130717_860094960355862249_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=lmhi1fqT0XcQ7kNvgF-dV-G&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAjHFwn0sDEbbPb9dZ4kGSbFOKBnonwvfzUre7d4qaVvA&oe=6640F58F",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.513Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a328"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1450,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1453082482001291/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440557522_10159726857847127_6424015763600537769_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rLWmOskW9qAQ7kNvgHTAXLp&_nc_ht=scontent.fymq2-1.fna&oh=00_AfB_SacKyu_smb89gvV6cNnhlfes9-FjrLOFakH8vMNgSQ&oe=6640F600",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.513Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a329"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/774746137977004/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438808685_10168630811930370_8905740284457367247_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=p3sjVqrsl_4Q7kNvgGzJh8q&_nc_ht=scontent.fymq2-1.fna&oh=00_AfA7u_4Xsb4NRfiI48S4QimI3TayINuqFh91OOaWzXbHPQ&oe=6640D8DB",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.514Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a32a"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1390,
    "city": "Longueuil, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/7091808880925024/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/440218614_810429594476911_2704563932844831014_n.jpg?stp=c329.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=QVPHVrlevvQQ7kNvgGOOgCq&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBimsSTr5-quYDP0XWpeN4SrwTdwQk5YEJRdB0MYBHr2Q&oe=6640C0AB",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.515Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a32b"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1495,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/826181482902834/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438100017_2551326861708666_8557067594162439050_n.jpg?stp=c0.31.526.526a_dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uwfGQL5QMWIQ7kNvgFHuT9q&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCbecGg5MBGNxdLmUQfhnsCUwKuuyKAuZtuSHwiC-xNPQ&oe=6640EADC",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.515Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a32c"
    },
    "title": "1 Bed 1 Bath - Apartment",
    "price": 1100,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/307056015761757/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/439748439_947462090717955_7714485699984587141_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zf0MpgFdR0EQ7kNvgH9mPn9&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBlAkjhY40Z4lojwz6VgGxtMgo7bL5kAyL9uOJ0M8ezZA&oe=6640D0BC",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.516Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a32d"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1350,
    "city": "Laval, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/978965323840275/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438101111_937546564781406_4095233454178111012_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PZmnc8uerYsQ7kNvgHf0wbm&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAV6dgMcQkCAH_6CTWlNhyKBJiLqJ_nVAtk1aeq-yRWZA&oe=6640DB6A",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.516Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a32e"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1350,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/402680479277392/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/436926560_2774054722761513_8585996883155860274_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=N09MMYt-cn0Q7kNvgExhKzW&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDvWR-CeoKfRHPLqST3HaI7kcxw4cDHIKs88qwNDKuG-w&oe=6640E1BA",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.517Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a32f"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1610679066363838/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441253186_412812921605193_6423090043746611317_n.jpg?stp=c89.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0KSvQLhFSxkQ7kNvgE3znhv&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBz_Y6gSF5czD3snT7VSL7n8ym__evnt0qh6OF-593oLQ&oe=6640C782",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.517Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a330"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1400,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/809320300602001/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/415692646_6952212694896613_2016693956549718229_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=xcLXkwLPKWoQ7kNvgFMTGG1&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBojT7MLMRhxCP3r_liCWsWXYghoLNgqPK3gZSa6Kr3uQ&oe=6640E22C",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.517Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a331"
    },
    "title": "3 Beds 1 Bath - Apartment",
    "price": 1000,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/827256759422076/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438088185_3093071077531437_242513204298682522_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PwjSt6tUyZMQ7kNvgGlfJ5Z&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBtOlh5jD490ZRDc6bw-BGQWEfhouriBxeT-ZH1Wr8XLg&oe=6640C59D",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.518Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a332"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1495,
    "city": "North Stormont, ON",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/731794492196722/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438271270_275173759021020_4763154283248894868_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=0nTUvi8RvQgQ7kNvgGZ1W5U&_nc_ht=scontent.fymq2-1.fna&oh=00_AfA8isJOnY85yfsSPuWpfQRauPTn7mWtW7dvcsThJjzw-g&oe=6640ECD9",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.518Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a333"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1450,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/359410873793769/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/440223679_452650567172420_6892977883190443912_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=kn6mNkc-qzcQ7kNvgEFmzd7&_nc_ht=scontent.fymq2-1.fna&oh=00_AfA8igmwA1xo5fM6W2KrrLePzU3uf8eS2i19rgAIwJAFfQ&oe=6640CF46",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.518Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a334"
    },
    "title": "3 1/2 à 1445 CAD à Rosemont",
    "price": 1445,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/3654079091569867/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438120742_1531390450924678_7185666647851161702_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=V6BLkQ1ElLoQ7kNvgForboT&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDZkBMKJgBbT7MGv2IT-CZEW9GocwR3EoTV8jI0gY46Pw&oe=6640E441",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.519Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a335"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1350,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/408594545405297/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438134476_410598105089929_3469584977101797406_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=nh0iMHXGyHAQ7kNvgFCECOm&_nc_ht=scontent.fymq2-1.fna&oh=00_AfD727FrAqbkb8i9i_c2buRdOmzopBQ5dkzPfx3nLtmx6A&oe=6640C6C9",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.519Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a336"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1450,
    "city": "Longueuil, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1827531177723741/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/440332365_989058722747078_8370796841484411808_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=KJytVqw02ogQ7kNvgEFS66c&_nc_ht=scontent.fymq2-1.fna&oh=00_AfC77cygZFoohknWAv1KMFeM18FJDyqupmCGlolNPduYXQ&oe=6640D31A",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.520Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a337"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1395,
    "city": "Ste-Anne-de-Bellevue, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1133022151078692/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/437474623_419844974126571_1759670719507373451_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=1ldGLfXfxEMQ7kNvgHsX50N&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDakkbHGIk6908uf_XbMcNwcLMLcF9mzPMG8L3uzCKgIg&oe=6640C644",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.520Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a338"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1350,
    "city": "Longueuil, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/470845358702553/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440327572_10161439798650751_7759690045664856383_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5BPNQ_07yDgQ7kNvgHlinVO&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBFXe4U9I_dgiqAVe3gixRhEqyOEyNp_JqaY3xb_bepPQ&oe=6640D919",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.520Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a339"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1300,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/3539909799607914/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438197489_10232340190588281_5325941601202553304_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WGcpUfZ9KscQ7kNvgGJzlvp&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAaswQcFUm84vSEx6eyd6oFXXVzZm-LHs_pLT3JvL2H4g&oe=6640D9CD",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.521Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a33a"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1300,
    "city": "Laval, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1015229106658007/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438162450_2692390064257606_5780951868494946924_n.jpg?stp=c0.51.526.526a_dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QGC3SRtlJ4QQ7kNvgEA1jdy&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDP9lYfImqvNy3SJ4M9pZLREAURWSBNWX9CkRxs3x7MhA&oe=6640CBB1",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.521Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a33b"
    },
    "title": "Studio 1 Bath - Apartment",
    "price": 1395,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/25424828717131851/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440860852_453729590501040_3234222095774238635_n.jpg?stp=c210.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=rl8L1jmANAkQ7kNvgGhDvpX&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDBmkZnsvW8pK4iRXfiF4_QsTM9gzdsOvVYPXnTEQyTwA&oe=6640ED1B",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.521Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a33c"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1500,
    "city": "Brossard, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1385586388823827/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438298954_4077573465804322_5274598468012630452_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pzwi1I8w4PoQ7kNvgHpDdQJ&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBe5_9ECRQMHS1Y7Bi1-OcNDDEegtD8t6xwhasKklybmA&oe=6640C18D",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.529Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a33d"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1505567493676784/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/440326752_985227153335722_3404198060143793161_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=kJj7SwY2ItgQ7kNvgEK1At3&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBg7DLwRXFzeQtkU2Id1rlo8Led09RT2OFy0ldb2TkrsA&oe=6640EEEB",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.536Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a33e"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1500,
    "city": "Laval, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1733060153766521/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438115597_990042476089308_3907613188642779007_n.jpg?stp=c133.0.493.493a_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=YY8mjsT2qS0Q7kNvgE6Em3m&_nc_ht=scontent.fymq2-1.fna&oh=00_AfB97OzOwv2moHnmjd8BQrt1Z96QsSYyUUTrY8hklwO6wQ&oe=6640F231",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.539Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a33f"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 1425,
    "city": "Longueuil, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/450896980793641/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438080984_977217767329000_7607686754190152174_n.jpg?stp=c6.0.513.513a_dst-jpg_p526x395&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=kgkR-jcv5s8Q7kNvgH-1yyY&_nc_ht=scontent.fymq2-1.fna&oh=00_AfB67HPxkhy86TT-GGJW9tbsXURc51Td2UXLZeFfcBTy9g&oe=6640D8C8",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.551Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a340"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1300,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1863087184196463/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440975996_2111277442591548_2923777514153808239_n.jpg?stp=c0.47.526.526a_dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=A7v8UwTAP28Q7kNvgHksKZr&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDMFNYKlPFF7n_Z7G8akpInMqaMBhcUkcf1nL0QdzKQOw&oe=6640EE41",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.553Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a341"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 1395,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/388055230885716/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438032312_955372822920607_924300924933315960_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=BaKNevnckZgQ7kNvgEbyKKv&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCnMQjY_tIcxDo_Lb7Z3zdj3MRGtTBXKjMWFZhcjFEcKQ&oe=6640E4D1",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.557Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a342"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1375,
    "city": "Longueuil, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1072908843812718/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439688995_1162145041460198_3499172389462666615_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=XJyAVmRVZjAQ7kNvgGALf-K&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCf0NdPjRAfFuvXg7byuyLWj2KyzYaJjtunHDTWuTayCw&oe=6640EC2D",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.563Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a343"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1480,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/452016104048313/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/368456466_9753403251400584_5608275889488429393_n.jpg?stp=c131.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=5u3jWf2LFZIQ7kNvgHy-tPo&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDUXCv_W7am-32Q-ICem5bJ69EG4Pxin5snnYF79b2Ygw&oe=6640DF4F",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.566Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a344"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1300,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1142324516905295/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438134676_2934795326682232_7207488552005447031_n.jpg?stp=c40.0.240.240a_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=eq4LdwdAfSAQ7kNvgHIkJos&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAwj8NJN6BanvDJYMGGhht_pe_BZUKYkL1Dqy_caIhJYg&oe=6640D237",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.573Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a345"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 950,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1003682331345709/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440747113_3793511740928128_541267786269416164_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=L0eMmJTeK7MQ7kNvgGoluA6&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCQKbyEZCRKPfbNvv-SNQB2K07egBT0YAt1ybtO7zoI9A&oe=6640D115",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.579Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a346"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1450,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/3775468426070212/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/411544132_1130886398158569_3565208420669549833_n.jpg?stp=c19.0.514.514a_dst-jpg_p552x414&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=5cS0TbM7b7EQ7kNvgEtucaw&_nc_ht=scontent.fymq2-1.fna&oh=00_AfD5ma52tI_XiuoL8DG_w10f1P49uKNX56H04yb-EPQjwQ&oe=6640C9B3",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.585Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a347"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1205,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/962377102154705/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/424881317_1511673226083454_2325108035525449088_n.jpg?stp=c120.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=dyuT-1iHVx8Q7kNvgEMscYj&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDzhmX87G8fD9VKYmq2bVG7yYWtX7q5gkR083j98flVvA&oe=6640C252",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.599Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a348"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1350,
    "city": "Laval, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1629532081183171/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438168917_7551019391618271_4147590604317219969_n.jpg?stp=c40.0.240.240a_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UX-xQ1hISZ0Q7kNvgEl9kB2&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDPyCkF_8GHKJTffyozKL4yupfjUwLTsIOhPYlfG8L50Q&oe=6640EB85",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.612Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a349"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1395,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/409090268671288/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438300593_10230157212466749_3730829176200002488_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GogERoRFma8Q7kNvgHfZYHr&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCj3a-_tdKI5RdniURX1eWWkqfw4FG8CLRdYMokxYXThA&oe=6640C552",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.614Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a34a"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1060,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/887960553012168/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/437334689_1135825431065318_8160056489563293114_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=A9GJlfMA4TkQ7kNvgF6yY2N&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBLDAk5exo7r-7vokO73dHEJqTtaG_mPlrsZyOltVvB3g&oe=6640C1CB",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.616Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a34b"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1300,
    "city": "Châteauguay, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1110890006629387/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/424985035_378482975173213_2727619833327829970_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=yGXUJPecKfEQ7kNvgGm4GnV&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAlZXSePv4FehXR9WDkvDWjF2crX0dKTHsNY-QtkRAIdg&oe=6640CC2C",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.617Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a34c"
    },
    "title": "1 Bed 1 Bath - Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/459820503283308/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441054349_10162229398511189_8051833402189142612_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9BZAWXjPh4MQ7kNvgFYgStE&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDrWJr6U6Yn6-8-3xVeOowW8BGIXGknokdaNDAzwHNjwg&oe=6640D11C",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.618Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a34d"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1400,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/478219201393049/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438025517_439735925413704_7636599027273914303_n.jpg?stp=c0.92.526.526a_dst-jpg_p526x395&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=w_Ga4dsKH2wQ7kNvgFKD1y0&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAsXRTjgXjbdjpM0SqoAa_-SPm_1177iYgpC-9pGATPrw&oe=6640F5F8",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.618Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a34e"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1400,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/944124110597437/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440939956_3642625179328652_8383694878858902556_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gNdX0wTIA6MQ7kNvgHgb6JB&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBMhft-xvb48ZGyz4tH9NztvewCcbf7qyzhLDHBRaFigA&oe=6640D1D9",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.628Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a34f"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1350,
    "city": "St-Eustache, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1489924308548950/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/437497761_1103988337566908_6574658644921652096_n.jpg?stp=c51.0.206.206a_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=Zsv2lMCpl24Q7kNvgGflwqi&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBk-8lafuMuUwdGbKJkzY9HtlvVSqUNkTFsKbhYs0QmVQ&oe=6640CB6B",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.630Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a350"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 1450,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/456663406758659/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/437850737_461968112857529_1716836222404499585_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=TnZUz3WRpbQQ7kNvgHWeX6B&_nc_ht=scontent.fymq2-1.fna&oh=00_AfD8TKYk7j6e0OdsWlkpW4dtssja1o95knbD0pi9oC1Q1A&oe=6640DC08",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.631Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a351"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 825,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/445327514713898/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439416813_270545196054423_9072547803834436517_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=LTSrBW0Op70Q7kNvgFPgVYt&_nc_ht=scontent.fymq2-1.fna&oh=00_AfC7reHsMB2Z3eOyfUNOiaTyUyBcAkt6Luy4TUlErnVl9w&oe=6640D382",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.632Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a352"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1395,
    "city": "Brossard, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/404012949208520/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441178031_10160531209942061_5417967065947309546_n.jpg?stp=c105.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4MgjrNJHHgUQ7kNvgE47qBf&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBGu7eO4_2OQsuSweK1sIxlcX2afHCW9r2OFRoGhHz_AQ&oe=6640CFB1",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.633Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a353"
    },
    "title": "Appartement de 1 chambre et 1 salle de bain",
    "price": 1250,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/437559975533857/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438080423_821193889871845_2852639379644618328_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=_SULCkb-NVgQ7kNvgFdAApG&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDhsBpwAbAjEbFCeqMKgQGehgyYM3nMSQXzUTn8PKsJFA&oe=6640CAF9",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.635Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a354"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1400,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1135884460943555/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438299930_10161299595636352_3225245847091507172_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9duKs1UltBkQ7kNvgFW3xN9&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAkCNPyOJ63nt_gcyCOQVuBNIuYQn1edR5S9ZPeZe0S9g&oe=6640F4B8",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.636Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a355"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1450,
    "city": "Laval, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/2721717404647141/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438302913_7491426977573574_4257707612180594177_n.jpg?stp=c0.202.526.526a_dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9mj2RAyKPFgQ7kNvgHkqMxD&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAc9Cm2gVEgoN3109d8xH7zGFUqqONbu9e7HzG-DV0V8A&oe=6640D21E",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.638Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a356"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/968887098230722/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440405107_456986703491212_7221378121775068198_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kIt7XzhqLowQ7kNvgHV8veZ&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCFgETFE8OnndL_W09l_Hc527uqTJwzqpE9ihfggl6qBQ&oe=6640D8E4",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.639Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a357"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1000,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1998230667262795/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/439960884_10169101501820691_2421844388962561307_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nlsAKfDxL1IQ7kNvgFD0wPv&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDazNNkxegjQZ3VXT4wHuNUnFUmgGWHvgULK01NEuHmSQ&oe=6640E273",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.640Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a358"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1300,
    "city": "St-Lin--Laurentides, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1510773189869845/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439915242_803043514685826_1139387209973027039_n.jpg?stp=c0.80.480.480a_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=bpqj43G5EooQ7kNvgEWEuP-&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCnaSm3iE1S2_7AaPCbpJLBhq7emDeuoaGrqCbTrA09Yg&oe=6640DBC1",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.642Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a359"
    },
    "title": "1 Bed 1 Bath Apartment",
    "price": 1495,
    "city": "Westmount, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1383824875626871/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438329377_991624652308682_58202145188487478_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=R0MPGKXnp2MQ7kNvgEu5hu-&_nc_ht=scontent.fymq2-1.fna&oh=00_AfC4VOXxuEESq9s6BvrWW5nX-Z6O_jm9sYlwsL93k15V2g&oe=6640D1A4",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.652Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a35a"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1450,
    "city": "Chambly, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/761114319467718/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438300382_10219812895672648_3965632882587993580_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AbsxLvmqMrsQ7kNvgHv95_M&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDUbRWtB8J7U0pzf4xAGC1H9n-3iRaQnPu0sArgzglwTg&oe=6640EE7F",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.654Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a35b"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1250,
    "city": "Ste-Sophie, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/961401412203338/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439456375_1685177092287160_2769881265874076947_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=QEtzrcNk4UMQ7kNvgFVbNdT&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCP9jpL6a9KAj2YFcDgzQfkALLGzQ7i4N843Kz0gRCmHg&oe=6640CA8D",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.656Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a35c"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/936338121305262/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/439472709_10161857386453223_3666549913639486927_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=78b8i8uyZTEQ7kNvgHnfY0F&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDrF78K-g2lqWi5I3_Fg4e2zOV_FqiCzDXhEuHcGCm5Qw&oe=6640E578",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.671Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a35d"
    },
    "title": "1 Bed 1 Bath Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1533808693863720/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/427109297_1345748219424448_6757859442642532836_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=GbH9hA-CKLkQ7kNvgHIqq6Q&_nc_ht=scontent.fymq2-1.fna&oh=00_AfADNdXflaknmRrW8wzcklxSulw-pvor3IUDO-hlkS3Wsw&oe=6640E26A",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.673Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a35e"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/354322447171248/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439626383_1003322794761177_4554793464074601346_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=pRMLoTpi4KgQ7kNvgHzruYo&_nc_oc=AdgqyWNVtvUE15s1RJQ5L8hlNxNl9PahXlh2o5V4WzUqMv5DhfOZTv0gCt9WQZlpjkxo6C9QvinoV6o_rQ-uiKL5&_nc_ht=scontent.fymq2-1.fna&oh=00_AfA5TADjFb-qPYElBkibyr7liRCpIcR8Dh318W09zPxtNQ&oe=6640CFA3",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.674Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a35f"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/827417419257852/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438037053_2073017376411415_4056703235568640297_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=zGOWUp6RdGkQ7kNvgFk8edy&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBHetzqhCgjQmdcxmNnMF8Z64YmVPPajpn3Rq4FYbHvtw&oe=6640DFF7",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.677Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a360"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/779464070827283/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440361391_6860917687343564_8136707956220592908_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5KN-jUm22Q0Q7kNvgGVuyi9&_nc_ht=scontent.fymq2-1.fna&oh=00_AfC6f4KmMg0PGM4cOBylWLotnRSWKpvc_xhXeLh2sssHYg&oe=6640DC92",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.679Z"
    }
  },
  {
    "_id": {
      "$oid": "663b091f8eaff6aae413a361"
    },
    "title": "1 Bed 1 Bath - Apartment",
    "price": 1460,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/875001971050317/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/437551480_1551807945669706_8206664391757681170_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CpBISB-suI8Q7kNvgE0SPGB&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBGUT_mmYDIv1h3j89VH3zvXfuuY_Npa6wAe38KGVdv_Q&oe=6640CEC8",
    "date_scraped": {
      "$date": "2024-05-08T01:09:51.681Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a362"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1650,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/309494622192349/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438264194_10161312088343351_2902488392990356224_n.jpg?stp=c0.193.526.526a_dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Q8rXTi0UuQgQ7kNvgELrvcP&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCL3BDULcpqvKWixdlgBZsjDC2EY-qgy5fpVKkYSUcKdw&oe=6640E275",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.530Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a363"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/766445658966460/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438242435_1601307450667720_5699056251572204618_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=14Bs-Oh-Ut8Q7kNvgHMrJtO&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDQSACPiUeEldyI_pzwaTktp5vPe4Jok1MlmdES1cJP1A&oe=6640C3AC",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.533Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a364"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1750,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1437992556822987/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/434287425_1365507230802329_2664667087575995852_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=JTKpampkvt8Q7kNvgE7KhNY&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCI6Q-Bf3_NcXo2gYoZGQ0wwcuFkLeR5eAE17GhTzdtYQ&oe=6640F2A2",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.534Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a365"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1575,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/419376264374317/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/436839568_327759090332350_7835958781393462505_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=poW-GR8MJkAQ7kNvgGJVXxi&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDJbRu9tsgfte8U4uFdACuwUwo4yokcUpSlc64LFD_UXg&oe=6640D3C2",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.534Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a366"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1740,
    "city": "Hampstead, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/946753413586715/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438302886_1570934730145105_1607109345836046223_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=z_xwOPAoBy0Q7kNvgHLBUKl&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDZX6822Yirs9khGRATTQN4rHnjinvQ3yD9_MMX94Rs_g&oe=6640D0FD",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.535Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a367"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1860,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1127914588260195/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438313321_451838737341308_6698589816465429895_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=DXi853jEQZUQ7kNvgGsk5at&_nc_ht=scontent.fymq2-1.fna&oh=00_AfD2ezv0j5f-lbo7E9GFOvMVSioZOEKUL1SxoAKn79FsCw&oe=6640F1F2",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.535Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a368"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1800,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/984032342709051/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/440479426_808204657439063_1972481067060408672_n.jpg?stp=c147.0.533.533a_dst-jpg_p2048x2048&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=Dyw-u8383mQQ7kNvgEnHM9H&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBvJrB2HV0aeonLAvfoxRGAsW9U20vK42OxxzsKRGXfhw&oe=6640F0D5",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.536Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a369"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/983143269409493/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/427730536_954221852824852_8297996746862940587_n.jpg?stp=c75.0.453.453a_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=u-1Cyp-U_csQ7kNvgExJyyi&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCHXfUuYNYB9dvv3JfImiKXo8dzXSGJDKlDD10AUtztAQ&oe=6640C53A",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.537Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a36a"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1675,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/858813012956593/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/434327705_741822481456000_4933187739006790143_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=58fT4mFhK9cQ7kNvgHKtsN_&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAB7KohaM0aDnQTppwGGHLIPnI4PYTHL7QwA5BdjkY_NA&oe=6640DE54",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.537Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a36b"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1850,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/427953323500730/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/399152200_7404808039571808_8639966909326385247_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=kAor6QI4c4UQ7kNvgEqwB7h&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBpshKfr56SUV6QmtBjGoZFbTL5YqPYqwVGIY5A_NKyNA&oe=6640F3F3",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.538Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a36c"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1740,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/952023096410176/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440985078_410488201877698_8553187078460614890_n.jpg?stp=c86.0.512.512a_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VMdc-XUfV0UQ7kNvgFBSshL&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCZBXoTGtzVpWQM3BabuqXBuSgRu8bJ0tyCgEMy0o-AXw&oe=6640CC30",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.538Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a36d"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1520,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1148869376113890/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438313417_1215758699389834_7049202750404432768_n.jpg?stp=c0.117.526.526a_dst-jpg_p526x395&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=n6McqG4gUoYQ7kNvgFcvnsz&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCF8t2S7v8P9cFyUVZrIRTvgv4GI185Wpe7Y7cx51BIqw&oe=6640E07E",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.539Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a36e"
    },
    "title": "2 giường 1 phòng tắm - Căn hộ",
    "price": 1650,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/940906027514940/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440759210_2222217931450792_2883454278016940914_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xy5m7we7JvcQ7kNvgHAGW-x&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCEWR5itFFFZtfl6rXr7FxC7-V30NNgsdTgu0jZ5BSPeg&oe=6640E061",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.539Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a36f"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 1730,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/316611594620558/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438032430_7098298046964679_1079847608787188168_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=F_nG9XYAQ2IQ7kNvgFELiJj&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAKBbqYIezmJYHh2-tjdluzXF26UKb0VfY6w9c2bSReew&oe=6640CDBB",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.540Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a370"
    },
    "title": "1 Bed 1 Bath - Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1550009312211624/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440956662_122145650468187654_846954296301209524_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oVr1ZzOcmqUQ7kNvgFe1hDk&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBWrUeX2ScTkwRkWAg7fKGycWvleoQd5mVmEyP5pY2mGA&oe=6640DD7C",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.540Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a371"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1650,
    "city": "La Prairie, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/273265739111985/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439639121_1477905936438567_1791825626431216860_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=EIlcHVue9s0Q7kNvgGia0UM&_nc_ht=scontent.fymq2-1.fna&oh=00_AfD6Lg7uq7ySd_BtOAmXiBbxTEOjl5wG5iC-uD-udd5-ig&oe=6640CD74",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.540Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a372"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1600,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/467006495897347/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441051750_10161500201241425_6189324587540320636_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fIFqmdoyCq8Q7kNvgEltep_&_nc_oc=AdjWdsZPLBQTiO8bEQkTOfCmcjwPw7HMzlQ3YIeb0ZqH9G3pwv2WlNQ5iRKNxWo2QyAxWc-8ZCepubGQAuz5TJ_N&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDW8UT19A5qx4no0_d4V81ZDKRTvUamWRPsn9lmFqJfog&oe=6640D10C",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.541Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a373"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1625,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1472338100373117/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438120540_8070911472923243_3630481741971183504_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=5VpSkqWbLI4Q7kNvgEXamX4&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAEcm_F4AIvGEz-CYZSs5DWs6JEB0H_H_PScVo1LLhhew&oe=6640F3DF",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.541Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a374"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1600,
    "city": "Laval, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1373140040037021/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438120812_1607256903371599_8909921898520474348_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=4ZaW0uDucEwQ7kNvgGawc2B&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBJreteoXmo96Lej8Eok8XhBG08gE6UfhSDx8dGGb-8jw&oe=6640E544",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.542Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a375"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1675,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/423082893689200/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/433016439_1994364150959197_2535066825602365864_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=XWH7pGE8pL8Q7kNvgFKjR-o&_nc_oc=AdiUzLIaHayLiSyqTGLrRdrBY9YW-zUC3p5cBGqr4RmSsK4TyrIwDd5oWy9IEH8AtndDf6MwdSPQ7h_-bfnGTPW_&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBYDlMty1GHCQP6oeQKAXPGdJtCEmPq6iWQPuCtyeH2pg&oe=6640ED3A",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.542Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a376"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 2000,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1111557896763298/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438302134_10161016108990266_894294804068669016_n.jpg?stp=c146.0.540.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KcLuyFSci0QQ7kNvgHxPz4D&_nc_ht=scontent.fymq2-1.fna&oh=00_AfC7iddBkPBZCyrhbCNmncG3gAlAubBT3DvjYiM9ooJBLg&oe=6640F1B2",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.542Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a377"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1800,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/473881601662301/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/433292541_953931136087058_4331161553228952347_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=TJhsd1LIUHUQ7kNvgHOGGru&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCH5DXwLD2pF4SFIAyxPrnQm39CmZ_Z6TH6r9_lHiFKpQ&oe=6640D198",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.543Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a378"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 2050,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/871600154689572/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438259522_10161726964496416_1708130160726918591_n.jpg?stp=c0.46.526.526a_dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CiUELd4nYSkQ7kNvgG3cwlx&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAYHxg5nQ87g1MUT3jBkMP4PGtBMllYQ59mH0AuklYWAg&oe=6640CB6F",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.543Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a379"
    },
    "title": "2 Beds 1.5 Baths Apartment",
    "price": 1800,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/452936003896830/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/435962491_345249194769578_3337553138195977456_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=XoWGyGqXT90Q7kNvgEPaEqb&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAQl8PfvJpRt6PvBDIU7mxZ6c9Wdg5sg5qTJ14tLk-tyQ&oe=6640F7CC",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.543Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a37a"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1775,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/798963718964444/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/424925321_1562413580992767_5985499602152400005_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=E81hwpUUtbQQ7kNvgEUeoM4&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCsHf4SuBQ9DyqmS4oIAMuJdXz9ZGHlZ-D4-zzHuOcu1A&oe=6640CF71",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.544Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a37b"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1810,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/2943877669088287/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440357175_10226091870782572_6895837555990430448_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BXBxVQiLW4UQ7kNvgHXm2l5&_nc_oc=AdjPI78dMtSMft4KWImmjkW9AoINAr4dVVuNFbV8gfAwyn2csksuOBO9_tDSSdBYKv9cST78uhGZzvUm0Rif9UAr&_nc_ht=scontent.fymq2-1.fna&oh=00_AfARPfXCAn3HS1cRQWU8H0QjytyW4QIjiP-mjGxoq9h_0w&oe=6640CFB5",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.544Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a37c"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1695,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1869744546875959/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438131448_751518440396406_8585858286413270223_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=Qe-VuGq2UgQQ7kNvgHfQCeH&_nc_ht=scontent.fymq2-1.fna&oh=00_AfD_tHNCgfsgtqBfp6dhDqZK26rY_j7cPYEnXoSaBAH1ww&oe=6640DFC5",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.544Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a37d"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 2205,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/850406737129408/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438209596_1640499293427371_6972837683773869517_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=EQGKOA_at8wQ7kNvgGN3k2F&_nc_oc=Adhdc2JHbniXXNngOoEgwV0Mape1IRSsTl1o2hlgXqvlWNyvXIso3kIVYX1J5vvaNBxm2TZNFQaobgsMr3IqObVk&_nc_ht=scontent.fymq2-1.fna&oh=00_AfD0WVEdfroYXnnZeK69INDNxd69-uWkQwvFR15BFajT5A&oe=6640C37C",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.545Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a37e"
    },
    "title": "2 beds 1 bath Flat",
    "price": 1800,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1159443531737606/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/434321079_1105477270755550_1949333747759308906_n.jpg?stp=c0.0.260.260a_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=bushF9Qj0k8Q7kNvgHF3WKQ&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDh0XKLgQJ9yXa6BvQcjxuok4uWhdtvajbZKaca0ry4GA&oe=6640C7FE",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.545Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a37f"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1750,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1370406113624513/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438092188_7820287341356403_1600880429645331373_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ZX-RwTdqFnAQ7kNvgFlvXib&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCwQreDxGHM2J6DY3XxYf7YIFI02ByKz4Z8e9UJLJOZlA&oe=6640EB6E",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.545Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a380"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1750,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/2770894633059681/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441154326_3758730704374493_5020540842386760295_n.jpg?stp=c0.134.526.526a_dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RmlypxE3KS8Q7kNvgE5eF3u&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBf8wNKZXsZPmx3bJV_qtAa6qsMGi5QPjh7G0yuIW4hKQ&oe=6640CE47",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.546Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a381"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1999,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/883387503557028/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/426438134_1145537543158656_2942586098390590047_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=TaFb4jX39YAQ7kNvgG_axAB&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAG0C43OiWr3BgT3b3PbrI2U6NHDWfuezzBUypk2dieVQ&oe=6640D90D",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.546Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a382"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1875,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1909710292834038/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439407356_7700490933347905_4107280849413545754_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=bND4zUwlxuAQ7kNvgFDlRFW&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCbEXekWfu9b0NQPzGGXh0XlNvT-75C_4KkAwVrDTjsnA&oe=6640D2CC",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.547Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a383"
    },
    "title": "2 chambres 1 salle de bain Appartement",
    "price": 1500,
    "city": "Longueuil, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1465244944082163/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/440042041_324103013821770_210179559797618101_n.jpg?stp=c60.0.360.360a_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=SN-YYtxE5t8Q7kNvgHOTPvk&_nc_ht=scontent.fymq2-1.fna&oh=00_AfABEpWeM9eT5sh4WdPirRQPz9p6I7OLesBEuvREei8Adg&oe=6640C817",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.547Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a384"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 2100,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1466589380616171/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439666414_924074612794506_6076123777974593747_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=4u3dRqjSFjQQ7kNvgEiys07&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDjvgUWz0S83WGuYQU5IJYOanMvZequ5lzJO_yYfhEqLg&oe=6640DE35",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.547Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a385"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1500,
    "city": "St-Constant, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/470510715330213/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440355677_2448012372053525_7583394636658204564_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4mAQWlEi_FsQ7kNvgFFx8CB&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAXOULSN3ic8n8UnADRiRm62LuAu91T5yPlQHuxrz-Bbw&oe=6640E139",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.548Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a386"
    },
    "title": "2 habitaciones 1 baño - Departamento",
    "price": 1600,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1214386576196794/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441205041_8136072913089025_2379799649874239975_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YfJ-Qehpv3oQ7kNvgEGGc5z&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDOS7DZYkk-zk07bh1rUVVTy4poZqAsqR3YnkLshK6iRw&oe=6640C37D",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.548Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a387"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1700,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/2201892326834243/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/436768686_405933052228193_2284956719643111782_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=ZiuyIrg1LmMQ7kNvgHpM5GK&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCysInvcdeNZRybaObDZcxhziKgJKcf5PmZnID8NPgCfw&oe=6640DCF0",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.549Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a388"
    },
    "title": "Appartement de 3 chambres et 2 salles de bain",
    "price": 1598,
    "city": "Longueuil, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/842187604399884/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438302677_7687546347958843_8484839661112267738_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PCGqYEIzWr4Q7kNvgFUx4NR&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCMBLZiGj906SoDitVskOZxQeE-fImJ2w9ZyVl8FYO9kg&oe=6640E4A0",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.549Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a389"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1860167331151404/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438310038_750633977279242_2190086853743925623_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=DRdar-DWHkYQ7kNvgH8Yqe-&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAnhOQ0AwRKFjpB6cF7gsABbcI_HUGc7ZPdNCZjxnrEUw&oe=6640EFD8",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.549Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a38a"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 2500,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/454923543707139/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439900262_3661157740820367_5979128948298550890_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=0WLvgaRIlIUQ7kNvgGWRk3S&_nc_ht=scontent.fymq2-1.fna&oh=00_AfB8NW5PhsWnw1yci_s35cVbup3WYUvaIh_n5s4uNVBa1Q&oe=6640E9F6",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.550Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a38b"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1950,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/441920584910443/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441204414_10161695517838120_7149574448979085212_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=FsjqnSJnVloQ7kNvgH1OwhJ&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCS94Vh0iIdSxvUxNvRGvh-H7Tu9jA9SB6NVHV3OGKOGw&oe=6640F24A",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.550Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a38c"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 2000,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1476006346331543/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440947678_10161581779218944_9117588531363733555_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=D6pw68I8k-UQ7kNvgEKj1oK&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCK812JMUfY1vlHPuZzX6lH4MkjSn0p94X1Rxt50DdSlQ&oe=6640E979",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.550Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a38d"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 2200,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1237637133867013/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440330810_7532928886770830_4121189465574646013_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=033mdOcCU0gQ7kNvgHCWdv1&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCNfFdyE5KXHL-Vv9h0jo4RV_ljtT7R2-liavlSsqsCmQ&oe=6640EC52",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.551Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a38e"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1650,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/939655781176695/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/437886353_1164311104562690_4257606473925648655_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=2Ite04ta9pcQ7kNvgFw8RmK&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCYVW7AxmeLnLWhqHN_s2c59ZIIvCSsdVqAMlVev5BdYg&oe=6640C8F9",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.551Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a38f"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1675,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/832491025360998/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/434327705_741822481456000_4933187739006790143_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=58fT4mFhK9cQ7kNvgHKtsN_&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAB7KohaM0aDnQTppwGGHLIPnI4PYTHL7QwA5BdjkY_NA&oe=6640DE54",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.552Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a390"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 1690,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/650232787267350/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438196107_1700673613795589_5174754134900529138_n.jpg?stp=c97.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=_KZ6yIQ_32kQ7kNvgF8-rkF&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBj9hA4UhdbXBE27Zimq0UUA9bkEMGBFGu6o--Dn4YkIw&oe=6640C3B3",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.552Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a391"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1550,
    "city": "Laval, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/962094862256595/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438807900_7355306884517109_4457341234154969179_n.jpg?stp=c19.0.443.443a_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Qm5PkEhnK98Q7kNvgFmHCRx&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBFTO0m0SOnNbic8gdhyaaOZCJgyILy5bkrVbj2urI1Kw&oe=6640CA59",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.553Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a392"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1990,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/3858908764345207/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/440520109_637604498582691_3745224243674722160_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=HKzJGFY5vnEQ7kNvgHGjvjD&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDl-DWRebknXvwVDEKqR51BlQMY9_NRGyQBJSuz2ACcqw&oe=6640E526",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.553Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a393"
    },
    "title": "3 Beds 2 Baths - Apartment",
    "price": 1995,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1435275304026807/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438300204_6295791963879255_4736204607806327687_n.jpg?stp=c0.133.526.526a_dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uXV9cOGSnM8Q7kNvgHVu9PW&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBQQRAeig5rcwu_a8VKlEoLy61PKR8mMSr1Ed7nqQwV8Q&oe=6640CCA1",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.554Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a394"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1850,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/803060355221191/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440571631_734276598865366_4746510392479290774_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=SCJ-Y8nNZI0Q7kNvgGsuJLS&_nc_ht=scontent.fymq2-1.fna&oh=00_AfD7AUPv7FI3WcWIif9CCm_UMGD9yl8fYCbAt49UAF5b_w&oe=6640DDA6",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.555Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a395"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1650,
    "city": "Laval, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/490418823308151/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438222172_914646700410790_7893436147213503425_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kJMa8GFkZjsQ7kNvgE0ykY6&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAhSGOJeQUANyT4Ii0dZF7TC0nayB_fNPQhi-B1R1ClWA&oe=6640F3B2",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.555Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a396"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1550,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1630540577759036/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441325325_10211560802251731_2169585404460731238_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3q_hbuqoc7oQ7kNvgHUMTVt&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAUvar0eLEAIBBphT5WRISHINB3Iw0tc5Ynt7bhk7FHkw&oe=6640F00F",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.556Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a397"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1620,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1405300613482479/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439720228_1509572609768481_415019927777792077_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=I2bUoRe9O2EQ7kNvgE4FtgQ&_nc_ht=scontent.fymq2-1.fna&oh=00_AfC7Y5t2xzhnUFi74yxuTg9tLpppu6Lxx4vvRIL6lWOE_g&oe=6640D5EA",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.556Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a398"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1550,
    "city": "Cornwall, ON",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/2197008653964793/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439620493_2246440532363335_4456107998503944022_n.jpg?stp=c84.0.352.352a_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=247b10&_nc_ohc=GbpGCLJtkTsQ7kNvgEvnQI7&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCPL2g1xIbeS192_j1W9-FIhhXQAOdyQ4aeqdJwxI_4ng&oe=6640D4FC",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.557Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a399"
    },
    "title": "2 Beds 1 Bath Apartment/condo",
    "price": 1700,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/987069119673728/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438080294_7413326292070160_4494911092703433808_n.jpg?stp=c65.0.260.260a_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=pIBeQM0_d80Q7kNvgEYtoAR&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBvn0mrghkR22FEDfG0M4IdfaDtl1eVKEEHxpseVdW5dg&oe=6640ECA7",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.558Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a39a"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 2050,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1366407410737465/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440742571_7478690068846807_2022421849463420940_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=umy8ozZHg4MQ7kNvgFoQARp&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAutJtAM5R44ZmkzrNsTdkuPpqcCspuxhoOVRNEvwL7Rw&oe=6640DF95",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.558Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a39b"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1590,
    "city": "Laval, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/777816080988422/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/431308792_284960164648636_5196441089584282714_n.jpg?stp=c128.0.512.512a_dst-jpg_p2048x2048&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=es1-vUbLTRAQ7kNvgHcTY-G&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBRDypT26L90_rwYpgwmxGvxbzG4cpCdBdXAaJzHHgztQ&oe=6640EA33",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.559Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a39c"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1640,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/326037326946073/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/406814745_24455873760726991_2425264895402771963_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=TVXsUnAHKkwQ7kNvgHnnXLL&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAgNSSrGTdPjVeF2EXKif0KPFnlDVOu4lKt02Ha-LeToQ&oe=6640C058",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.559Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a39d"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/354322447171248/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439626383_1003322794761177_4554793464074601346_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=pRMLoTpi4KgQ7kNvgHzruYo&_nc_oc=AdgqyWNVtvUE15s1RJQ5L8hlNxNl9PahXlh2o5V4WzUqMv5DhfOZTv0gCt9WQZlpjkxo6C9QvinoV6o_rQ-uiKL5&_nc_ht=scontent.fymq2-1.fna&oh=00_AfA5TADjFb-qPYElBkibyr7liRCpIcR8Dh318W09zPxtNQ&oe=6640CFA3",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.560Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a39e"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 2000,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/459481659877616/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438120778_7542655579165873_8832801131654655913_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=UkSW8VhysPAQ7kNvgGlEXhB&_nc_oc=AdgWNyn6It-YMReA_oTiFJhx-y_B3FC22-jp_lufy3k6s4pcukpgUK1BgHTPtTLs4WCWUONsH0-Xp_TIXzIOd6Bb&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCcHqwtHF9cG9jg3ifXSz_Fu0HZjennQa92ok34as39JQ&oe=6640C057",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.560Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a39f"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1550,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/826045192907595/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438134658_821479786499751_5547537788606876812_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=6nfwLC9S5cMQ7kNvgFCrXXJ&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCXPcneUw6ZE1jnS0MWRZ4fDjpqAqtxq-rDZ9MLVvxueg&oe=6640EA35",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.561Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3a0"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1925,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/832701795568253/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/431603187_790439982502893_171562680573902172_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=C2p_VqFyRqgQ7kNvgEKUwCu&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBlRYItk2fy5bChq1bTzs5RONko16-RNwf3EJh1qUBoVQ&oe=6640D8CE",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.561Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3a1"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1769,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/825043442854550/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440876304_413154644944387_8792246886529251151_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=20LRlLzXweIQ7kNvgEayQof&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBq-4ZZ55O7S_m5L6GZV1EXeEQzGsCBgWZZ_HKmVSSEbQ&oe=6640C315",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.561Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3a2"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1595,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/7455723461183844/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/440341832_1191384575364264_4542217852979566603_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=T1eVUwVB_TsQ7kNvgFFJqjr&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBTNmHhzNdr05JltBaiYzvfc_b7amLPxZLZoyeFCVtFCw&oe=6640CD96",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.562Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3a3"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1650,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/898058272121311/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438053932_1674283266739902_57885633667525972_n.jpg?stp=c109.0.382.382a_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=XG_D55sm_PIQ7kNvgFW_uJZ&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAlmtqiVu165eY21lvS29D-jMGIqSt3VRAaQqvJPNv7ww&oe=6640E016",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.562Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3a4"
    },
    "title": "Appartement de 3 chambres et 2 salles de bain",
    "price": 1598,
    "city": "Longueuil, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/424197150233647/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441544887_8086725524674110_3115298661044374550_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jDysMb9kWDcQ7kNvgG5px-O&_nc_ht=scontent.fymq2-1.fna&oh=00_AfChQ5tUfozQ76216E8FMk_DeScyxxvZhfU-Y4fQQV2DGg&oe=6640C8E9",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.562Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3a5"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1570,
    "city": "Laval, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/453978053814221/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438262766_10160945894434765_2329564511953010173_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Y-j6nxXBrgMQ7kNvgF6Hkpz&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCHbxZt7QSAxv0yMWSPj_ZXs28cvrhrnZgWakAX5K_m2Q&oe=6640D8B3",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.563Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3a6"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1625,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1471603886776223/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/442436033_1166275184555439_203184883792409037_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Eqq7uTpoeegQ7kNvgGQB8oD&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBYGZri_Ss27peE0r_AVFtkW7uZDTDHpEs8ACypqRZ1rQ&oe=6640EF12",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.563Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3a7"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 2150,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/756124719938586/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439864514_404532312482286_946328318514576775_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=pn5Bdxpl4XUQ7kNvgHBTZZW&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDl0X2yFustlpScnrwXRKOENs7bJCLVvNNdPlvBAkXsxQ&oe=6640DCE0",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.563Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3a8"
    },
    "title": "2 Beds 2 Baths Apartment",
    "price": 1900,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1659908037876476/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438237295_3668343163407952_9168377031921317241_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=lvV4IrI8XdQQ7kNvgHWSiGE&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCM2RUzmVzwBOtIzyVlFlERCM9UrMsRmTml-z_zmrzYwg&oe=6640C6BF",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.564Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3a9"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1570,
    "city": "Laval, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/759387312975307/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438077537_1344664896213493_6418660397162968275_n.jpg?stp=c209.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=Bl6P7b-O8KEQ7kNvgHOYXTl&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAhe1HXA_VzzbJqkIXmmJ1VdkXFzOuP5B1JYAhkdg_MXA&oe=6640F37A",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.564Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3aa"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1650,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1412080882845109/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441065513_1612638412891886_2468554916447974225_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pdj5d91C2hEQ7kNvgF5kyuV&_nc_oc=AdjjApOQunxVOC1aw3v6csvTAgWcrLb0PxXxH3jebf1XS40btfemwKCN4jG3aQpb-qJUrrltq9omjGRCGzrQVY-t&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAzgWRmtdR3r5VCyg1aaUVmp5KKG3eRJ_xumcbTQNJSPA&oe=6640E39F",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.565Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3ab"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 2300,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/425880916825484/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438271081_425880523417648_6389838599063461661_n.jpg?stp=c134.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=PwQAnjTmIGsQ7kNvgEQYL4K&_nc_ht=scontent.fymq2-1.fna&oh=00_AfA6ZpZrHEKZMR0mGPTXGFTk3otZfIx3iFhRYTtJTCHdtA&oe=6640E83A",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.565Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3ac"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1975,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/796673958735392/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/434689878_439780358721912_6296631662126575883_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=FcF5S9HQWx4Q7kNvgEMfB5-&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBlgugPX73XmJ8cSM0X_5TJ4Srk-QXvfHv80r2__1w6Pw&oe=6640D2EF",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.567Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3ad"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1795,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1109078563481144/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/442412111_2332986876890795_1341605876544533022_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ppP5rGzX_j0Q7kNvgG0NjzR&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCAl2MjBZyZeIItFutxveSo40e3GZiebh0MZL1Jvfj1nw&oe=6640D50C",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.568Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3ae"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1590,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1595129804671606/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440036022_7917735034926642_121230389373830852_n.jpg?stp=c0.135.526.526a_dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Yeib9knKjP8Q7kNvgFmAQxy&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCiNrq_-mkELPew9jBpmgxSEZjhQJFOGHSX24fDOMYiFQ&oe=6640C55B",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.568Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3af"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 1600,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/684721343728718/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438079948_374298548289238_6568039171800923874_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=qRqQpypuGosQ7kNvgHp4e9J&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBtceob6hcprGOHUs5rvzmxgnZFexXgKhkyZF45xRvoUA&oe=6640F06C",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.569Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3b0"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 1950,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/795062772608983/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440326499_10168687836375453_7098865096323829388_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=182dJESjrtcQ7kNvgF-g-C9&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDDLiF0M0Nk2Z_6gQ8yCttvHEMs6hJGBQX7L6DyddITFA&oe=6640ECC9",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.569Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3b1"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1600,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1424990354802813/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438134985_405678572389135_8983187144649745883_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=OSaZBdXQL6kQ7kNvgHZQydt&_nc_ht=scontent.fymq2-1.fna&oh=00_AfC2iCcoUZSSdXDP-638Es5Mkqg8U7n6x3O7YttOo_yWkQ&oe=6640CC81",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.569Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3b2"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 2200,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/407398815445460/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438145049_8029398920423991_254705295157657509_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KDpgOGL5Xp8Q7kNvgGsCJeU&_nc_ht=scontent.fymq2-1.fna&oh=00_AfASmuu6WzDXGRQtrxxiOAhthijUmXPyMyJosldXivzY6A&oe=6640DABC",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.570Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3b3"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1850,
    "city": "Laval, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/3585492121765610/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439569763_460052356381018_8923112029130983117_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=DysW1sedXNsQ7kNvgELHrCi&_nc_ht=scontent.fymq2-1.fna&oh=00_AfALuqFag500OQHqfI9XyoybWRe5JXWXbXKvqNQ3LmiA3g&oe=6640D189",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.570Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3b4"
    },
    "title": "Appartement de 3 chambres et 1 salle de bain",
    "price": 1585,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/388286617535417/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440133823_2142406692784278_4817653076869257928_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2v8tv6-n8CkQ7kNvgHKED8V&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBI1cStqpFjUmpbOhTkpg0pQJnkeXkHvyQrwvJ1_kNlmg&oe=6640C36F",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.571Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3b5"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1500,
    "city": "Côte-St-Luc, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/2448725631995362/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/429772540_25088488164130717_860094960355862249_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=lmhi1fqT0XcQ7kNvgF-dV-G&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAjHFwn0sDEbbPb9dZ4kGSbFOKBnonwvfzUre7d4qaVvA&oe=6640F58F",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.571Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3b6"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1750,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/2140349719677787/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/439779039_456108766869707_746378478657426141_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=0IOz14Zw-XMQ7kNvgHYwVxz&_nc_ht=scontent.fymq2-1.fna&oh=00_AfA4V8ZbRGWIJZ-DnB0QZ3t71CrehI1nrykT2WC90-eMrA&oe=6640C0AD",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.572Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3b7"
    },
    "title": "2 Beds 2 Baths - Apartment",
    "price": 2250,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/344360128662349/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440934262_7781336591930111_5896914061048004872_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sAbJSce9WG4Q7kNvgF5k2oD&_nc_ht=scontent.fymq2-1.fna&oh=00_AfDHS5MJJsrUADCjRUADO4jrUNYjzmQyq7mFH1YgdjWI8g&oe=6640EE90",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.572Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3b8"
    },
    "title": "2 Beds 1 Bath - Apartment",
    "price": 1600,
    "city": "La Prairie, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/984795816549567/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440928530_10159656290722204_7896486170691793488_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OwT9vgUR_ZEQ7kNvgHif0KY&_nc_ht=scontent.fymq2-1.fna&oh=00_AfAJqZEE4rDz971yQI62xT5Gnx1LoNxJYaLtvRIPu_sOmg&oe=6640D631",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.574Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3b9"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1550,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/313619384947930/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438077614_1636727813737774_132046989521730378_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=n2dNmTFzL8EQ7kNvgF8DL7B&_nc_ht=scontent.fymq2-1.fna&oh=00_AfC47De3xs82S3E1KZ2Q2yfirpiAMfqre7GV4E3ZmriRsA&oe=6640D540",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.575Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3ba"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 1600,
    "city": "Longueuil, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/449858687451607/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/431757993_7929353577088735_6272272770895088719_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=bDfYq-QNkHYQ7kNvgEXFkrp&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCke8MSeZ_lZbqQT6w0ojh6-9hx9YaGTY14KjrC7b7Tlw&oe=6640D327",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.576Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3bb"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 2000,
    "city": "Laval, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/324417100447281/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/429872196_7021697187953063_1703228030941310211_n.jpg?stp=c135.0.540.540a_dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=DeUbXRFzoFQQ7kNvgE9WFP5&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCIEUauwPDqzs7eppPYY0YntBFK40xvHMqNJN2DNVe8aw&oe=6640D6F6",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.577Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3bc"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1895,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1738595363216049/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/440212717_10233196659406487_936481360565970223_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HyqzqBfofb4Q7kNvgHpWycO&_nc_ht=scontent.fymq2-1.fna&oh=00_AfABp_XB-4EzeOcxtwlSYbz-m2o0Bcb9ShrmMlfEhFnkIg&oe=6640D0A0",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.578Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3bd"
    },
    "title": "2 Beds 1 Bath Apartment",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1505567493676784/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/440326752_985227153335722_3404198060143793161_n.jpg?stp=c0.87.526.526a_dst-jpg_p526x395&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_ohc=kJj7SwY2ItgQ7kNvgEK1At3&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBg7DLwRXFzeQtkU2Id1rlo8Led09RT2OFy0ldb2TkrsA&oe=6640EEEB",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.579Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3be"
    },
    "title": "2 beds 1 bath Flat/apartment",
    "price": 2195,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/406057852349304/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/438131663_320029294268589_4867743564220770746_n.jpg?stp=c80.0.480.480a_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=ryhh_LoS3TMQ7kNvgGGfPns&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBrEY2wjCWmacDnlewO4l3dM7a1DaUM9Vet4wyiwRdhHA&oe=6640C9F5",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.581Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3bf"
    },
    "title": "2 chambres à coucher 1 salle de bain Appartement",
    "price": 1745,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/286273197787696/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t45.5328-4/424985027_2772006942956504_3375838394778082306_n.jpg?stp=c90.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=cLYKbdvNmRoQ7kNvgEzuRN7&_nc_ht=scontent.fymq2-1.fna&oh=00_AfCAd_7NK_PMsW3e3SQpkwWZugYbOiTlrLE2LVdwTH2CzA&oe=6640E53D",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.582Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3c0"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1500,
    "city": "Brossard, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1385586388823827/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/438298954_4077573465804322_5274598468012630452_n.jpg?stp=c0.58.526.526a_dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pzwi1I8w4PoQ7kNvgHpDdQJ&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBe5_9ECRQMHS1Y7Bi1-OcNDDEegtD8t6xwhasKklybmA&oe=6640C18D",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.582Z"
    }
  },
  {
    "_id": {
      "$oid": "663b09308eaff6aae413a3c1"
    },
    "title": "Appartement de 2 chambres et 1 salle de bain",
    "price": 1500,
    "city": "Montréal, QC",
    "bedrooms": 2,
    "url": "https://www.facebook.com//marketplace/item/1610679066363838/?ref=search&referral_code=null&referral_story_type=post&__tn__=!%3AD",
    "img": "https://scontent.fymq2-1.fna.fbcdn.net/v/t39.30808-6/441253186_412812921605193_6423090043746611317_n.jpg?stp=c89.0.540.540a_dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0KSvQLhFSxkQ7kNvgE3znhv&_nc_ht=scontent.fymq2-1.fna&oh=00_AfBz_Y6gSF5czD3snT7VSL7n8ym__evnt0qh6OF-593oLQ&oe=6640C782",
    "date_scraped": {
      "$date": "2024-05-08T01:10:08.587Z"
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