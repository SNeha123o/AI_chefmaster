const countriesData = [
    {
      country: "India",
      countryImage: "india.jpg",
      states: [
        {

          state: "Maharashtra",
    stateImage: "maharashtra.jpg",
    famousDish: [
      {
        dishName: "Vada Pav",
        dishImage: "https://t3.ftcdn.net/jpg/01/16/14/14/360_F_116141457_gj7IMZ5ll0j1uGqXQ6lXjF4vnpgL5tkc.webp"
      },
      {
        dishName: "Poha",
        dishImage: "https://t4.ftcdn.net/jpg/02/42/99/87/240_F_242998711_Eet2g9MuURhsQ2JNxjOVfJgVJMEJNuDS.jpg"
      },
      {
        dishName: "Misal Pav",
        dishImage: "https://t3.ftcdn.net/jpg/04/34/68/40/360_F_434684091_9bSqutLyXPweoZoUoYvm3my9IRBtuPJt.webp"
      },
      {
        dishName: "Pav Bhaji",
        dishImage: "https://t3.ftcdn.net/jpg/06/40/14/24/360_F_640142414_WuUgLKRAa3Dqe92blRessQm356FyB8RJ.webp"
      }
    ]
  },
  {
    state: "Kerala",
    stateImage: "kerala.jpg",
    famousDish: [
      {
        dishName: "Sadya",
        dishImage: "https://t3.ftcdn.net/jpg/02/60/08/60/360_F_260086020_c58UCQWsYM2TBLIvmkfY4ZTeQizvDPmg.webp"
      },
      {
        dishName: "Appam with Stew",
        dishImage: "https://t4.ftcdn.net/jpg/04/10/55/63/360_F_410556335_6p6Jz5nq47Xh46ohiKHQzXfUIiNF1Xny.webp"
      },
      {
        dishName: "Puttu",
        dishImage: "https://t3.ftcdn.net/jpg/04/81/62/46/360_F_481624624_pfzKXdk9zwmSEgkrMXiRyBAp5mRcOKoF.webp"
      },
      {
        dishName: "Kerala Parotta",
        dishImage: "https://t4.ftcdn.net/jpg/03/22/27/43/360_F_322274314_MEln9YzXVGc35pXYz4hqkFzJzvGMgmvt.webp"
      }
    ]
  },
  {
    state: "Tamil Nadu",
    stateImage: "tamilnadu.jpg",
    famousDish: [
      {
        dishName: "Idli",
        dishImage: "https://t3.ftcdn.net/jpg/04/19/04/94/360_F_419049416_76icDqQfAWQ2kwK8k6iAj4cXLUAZICCF.webp"
      },
      {
        dishName: "Masala Dosa",
        dishImage: "https://t3.ftcdn.net/jpg/01/86/33/72/360_F_186337209_9rbcMLu3wGCDNaEoK1jO0aNzb0pv7Xs7.webp"
      },
      {
        dishName: "Rasam",
        dishImage: "https://t3.ftcdn.net/jpg/04/30/63/90/360_F_430639009_ehmohc1D6LoxTGackZuAoXMOTw8kyU4S.webp"
      },
      {
        dishName: "Adai",
        dishImage: "https://t4.ftcdn.net/jpg/02/80/33/89/360_F_280338911_KIwauutIYVYbE7xRbL2CKF7BCm1JdQio.webp"
      }
    ]
  },
  {
    "state": "Punjab",
    "stateImage": "punjab.jpg",
    "famousDish": [
      {
        "dishName": "Butter Chicken",
        "dishImage": "https://t3.ftcdn.net/jpg/03/33/04/02/360_F_333040259_XAngCfVMVrmZbJXD3fqH4DVhMaTK7KbV.webp"
      },
      {
        "dishName": "Sarson Da Saag ",
        "dishImage": "https://t3.ftcdn.net/jpg/05/54/42/66/360_F_554426688_6bF3ZVKqtH18ncwKA1pxIU8937O0GGWC.webp"
      },
      {
        "dishName": "Chole Bhature",
        "dishImage": "https://t3.ftcdn.net/jpg/06/26/25/44/360_F_626254408_SW2nZJeenzls4SuSt2XgOzbCZvNE3z8e.webp"
      },
      {
        "dishName": "Aloo Paratha",
        "dishImage": "https://t4.ftcdn.net/jpg/03/11/83/33/360_F_311833307_EeKZlDldlaBfpgzp4MXupiQga7td3l97.webp"
      }
    ]
  }
  
        // Add more states as needed
      ]
    },
    {
      country: "Italian",
      countryImage: "italy.jpg",
      states: [
        {
          state: "Lombardy",
          stateImage: "tuscany.jpg",
          famousDish: [
            {
            dishName: "Pasta Carbonara",
            dishImage: "https://t4.ftcdn.net/jpg/01/41/12/25/360_F_141122511_X1eEXS9nH13p6TziRMEmAvPmQVCYbyWy.webp"
          },
            {
            dishName: "Risotto",
            dishImage: "https://t4.ftcdn.net/jpg/01/71/57/91/360_F_171579140_sQhoVlTLfSIeYFiV5DCYcifM0HvUZ85H.webp"
          },
            {
            dishName: "Panettone ",
            dishImage: "https://t4.ftcdn.net/jpg/00/54/06/59/360_F_54065963_DLYTDDGN4y226teoCnm5OlJqxsiRdach.webp"
          },
            {
            dishName: "Ossobuco ",
            dishImage: "https://t4.ftcdn.net/jpg/02/22/41/49/360_F_222414914_MWgP6ZtHoExjskuUu2MUVX8nxypheURr.webp"
          },
        ]
        },
        {
          state: "Sicily",
          stateImage: "sicily.jpg",
          famousDish:  [
            {
            dishName: "Arancini ",
            dishImage: "https://t3.ftcdn.net/jpg/06/10/74/80/360_F_610748095_UoCRrCEZezk56rkWf5X1X7FE6cycbNO2.webp"
          },
            {
            dishName: "Caponata",
            dishImage: "https://t4.ftcdn.net/jpg/06/36/92/95/360_F_636929598_R32z6u9nMVNuoPT9BLyO9TQlG2JJ1fAb.webp"
          },
            {
            dishName: "Norma ",
            dishImage: "https://t4.ftcdn.net/jpg/00/88/76/17/360_F_88761789_uRZ7J0xl4d4mwQFMxx2EDNnp7p8IrgWc.webp"
          },
            {
            dishName: "Cassata ",
            dishImage: "https://t3.ftcdn.net/jpg/00/87/04/30/360_F_87043046_RQt9wfeEmoa0WpsoHen1FwClX5XtEmRW.webp"
          },
        ]
        },
        {
          state: "Tuscan",
          stateImage: "sicily.jpg",
          famousDish: [
            {
            dishName: "Ribollita ",
            dishImage: "https://t4.ftcdn.net/jpg/04/80/26/39/360_F_480263959_iKiGIU4sKtFzjzD54Tazez0O1Qam3YBv.webp"
          },
            {
            dishName: "Pappa Pomodoro",
            dishImage: "https://t4.ftcdn.net/jpg/01/11/93/09/360_F_111930927_AKrtESMLreTgrTJRd2aapcU8ddqjRnmR.webp"
          },
            {
            dishName: " Panzanella",
            dishImage: "https://t4.ftcdn.net/jpg/01/70/86/51/360_F_170865142_qf1RF04mUtmFtJ4tpqDx3YVdEwvSZsXG.webp"
          },
            {
            dishName: "Bistecca ",
            dishImage: "https://t3.ftcdn.net/jpg/06/51/10/70/360_F_651107033_4k7KC92ULyaNmL8I6kxSQAbTUIRymuGU.webp"
          },
        ]
        },
        // Add more states as needed
      ]
    },
    {
      country: "Spanish",
      countryImage: "italy.jpg",
      states: [
        {
          state: "Jalisco",
          stateImage: "tuscany.jpg",
          famousDish: [
            {
            dishName: "Birria",
            dishImage: "https://t4.ftcdn.net/jpg/04/38/71/41/360_F_438714180_ZevQgVZnMcCuPxT3SehBqj7ajhMwEc0e.webp"
          },
            {
            dishName: "Torta Ahogada",
            dishImage: "https://t3.ftcdn.net/jpg/04/90/93/40/360_F_490934089_OiztK1cKFM4kBE8AkHqnBw132CMSteRP.webp"
          },
            {
            dishName: "Birria Tacos ",
            dishImage: "https://t4.ftcdn.net/jpg/05/15/89/05/360_F_515890585_DrR4Sqv5l8ZaNrVRyjL7O0DLBJUg5c6m.webp"
          },
            {
            dishName: "Sopes",
            dishImage: "https://t4.ftcdn.net/jpg/03/54/01/71/360_F_354017125_q6O7sacISg6Bw17vZVc3xW3rmf2wg7UM.webp"
          },
        ]
        },
        {
          state: "Guerrero",
          stateImage: "sicily.jpg",
          famousDish:  [
            {
            dishName: "Pozole Guerrero",
            dishImage: "https://t3.ftcdn.net/jpg/05/18/83/48/360_F_518834876_q9FReu9sHUGClX7dTsHXezFLwMebEAS1.webp"
          },
            {
            dishName: "Risotto",
            dishImage: "https://t4.ftcdn.net/jpg/01/71/57/91/360_F_171579140_sQhoVlTLfSIeYFiV5DCYcifM0HvUZ85H.webp"
          },
            {
            dishName: "Tamales de",
            dishImage: "https://t3.ftcdn.net/jpg/06/92/83/34/360_F_692833475_9FFkMXHiA5b1kdtB2vlF7XifLOsOUseG.webp"
          },
            {
            dishName: " Pescado",
            dishImage: "https://t3.ftcdn.net/jpg/04/18/57/40/360_F_418574037_BtVv7kg3ffjiCnH4fB8MP5S5wCWtysI0.webp"
          },
        ]
        },
        {
          state: "Yucatan",
          stateImage: "sicily.jpg",
          famousDish: [
            {
            dishName: "Cochinita Pibil ",
            dishImage: "https://t4.ftcdn.net/jpg/04/94/33/63/360_F_494336328_eWORn6dfH0rIZxGDJHViwsN1hov8dQ2G.webp"
          },
            {
            dishName: "Salbutes",
            dishImage: "https://t3.ftcdn.net/jpg/05/50/20/54/360_F_550205448_g71NJ3HF2bpKJvD8fAtXSExYC3cEKDD2.webp"
          },
            {
            dishName: "Panuchos",
            dishImage: "https://t4.ftcdn.net/jpg/00/59/44/63/360_F_59446385_OCke1gGsnEQnHBJ5zNFk4RqmYWK0VHIj.webp"
          },
            {
            dishName: " Sopa de Lima",
            dishImage: "https://t4.ftcdn.net/jpg/05/30/45/59/360_F_530455977_jCTiZD8Onpjexka23Vx06QHuSbBLqDpM.webp"
          },
        ]
        },
        // Add more states as needed
      ]
    },
    {
      country: "Mexican",
      countryImage: "italy.jpg",
      states: [
        {
          state: "Jalisco",
          stateImage: "tuscany.jpg",
          famousDish: [
            {
            dishName: "Birria",
            dishImage: "https://t4.ftcdn.net/jpg/04/38/71/41/360_F_438714180_ZevQgVZnMcCuPxT3SehBqj7ajhMwEc0e.webp"
          },
            {
            dishName: "Torta Ahogada",
            dishImage: "https://t3.ftcdn.net/jpg/04/90/93/40/360_F_490934089_OiztK1cKFM4kBE8AkHqnBw132CMSteRP.webp"
          },
            {
            dishName: "Birria Tacos ",
            dishImage: "https://t4.ftcdn.net/jpg/05/15/89/05/360_F_515890585_DrR4Sqv5l8ZaNrVRyjL7O0DLBJUg5c6m.webp"
          },
            {
            dishName: "Sopes",
            dishImage: "https://t4.ftcdn.net/jpg/03/54/01/71/360_F_354017125_q6O7sacISg6Bw17vZVc3xW3rmf2wg7UM.webp"
          },
        ]
        },
        {
          state: "Guerrero",
          stateImage: "sicily.jpg",
          famousDish:  [
            {
            dishName: "Pozole Guerrero",
            dishImage: "https://t3.ftcdn.net/jpg/05/18/83/48/360_F_518834876_q9FReu9sHUGClX7dTsHXezFLwMebEAS1.webp"
          },
            {
            dishName: "Risotto",
            dishImage: "https://t4.ftcdn.net/jpg/01/71/57/91/360_F_171579140_sQhoVlTLfSIeYFiV5DCYcifM0HvUZ85H.webp"
          },
            {
            dishName: "Tamales de",
            dishImage: "https://t3.ftcdn.net/jpg/06/92/83/34/360_F_692833475_9FFkMXHiA5b1kdtB2vlF7XifLOsOUseG.webp"
          },
            {
            dishName: " Pescado",
            dishImage: "https://t3.ftcdn.net/jpg/04/18/57/40/360_F_418574037_BtVv7kg3ffjiCnH4fB8MP5S5wCWtysI0.webp"
          },
        ]
        },
        {
          state: "Yucatan",
          stateImage: "sicily.jpg",
          famousDish: [
            {
            dishName: "Cochinita Pibil ",
            dishImage: "https://t4.ftcdn.net/jpg/04/94/33/63/360_F_494336328_eWORn6dfH0rIZxGDJHViwsN1hov8dQ2G.webp"
          },
            {
            dishName: "Salbutes",
            dishImage: "https://t3.ftcdn.net/jpg/05/50/20/54/360_F_550205448_g71NJ3HF2bpKJvD8fAtXSExYC3cEKDD2.webp"
          },
            {
            dishName: "Panuchos",
            dishImage: "https://t4.ftcdn.net/jpg/00/59/44/63/360_F_59446385_OCke1gGsnEQnHBJ5zNFk4RqmYWK0VHIj.webp"
          },
            {
            dishName: " Sopa de Lima",
            dishImage: "https://t4.ftcdn.net/jpg/05/30/45/59/360_F_530455977_jCTiZD8Onpjexka23Vx06QHuSbBLqDpM.webp"
          },
        ]
        },
        // Add more states as needed
      ]
    },
    {
      country: "Thai",
      countryImage: "italy.jpg",
      states: [
        {
          state: "Jalisco",
          stateImage: "tuscany.jpg",
          famousDish: [
            {
            dishName: "Birria",
            dishImage: "https://t4.ftcdn.net/jpg/04/38/71/41/360_F_438714180_ZevQgVZnMcCuPxT3SehBqj7ajhMwEc0e.webp"
          },
            {
            dishName: "Torta Ahogada",
            dishImage: "https://t3.ftcdn.net/jpg/04/90/93/40/360_F_490934089_OiztK1cKFM4kBE8AkHqnBw132CMSteRP.webp"
          },
            {
            dishName: "Birria Tacos ",
            dishImage: "https://t4.ftcdn.net/jpg/05/15/89/05/360_F_515890585_DrR4Sqv5l8ZaNrVRyjL7O0DLBJUg5c6m.webp"
          },
            {
            dishName: "Sopes",
            dishImage: "https://t4.ftcdn.net/jpg/03/54/01/71/360_F_354017125_q6O7sacISg6Bw17vZVc3xW3rmf2wg7UM.webp"
          },
        ]
        },
        {
          state: "Guerrero",
          stateImage: "sicily.jpg",
          famousDish:  [
            {
            dishName: "Pozole Guerrero",
            dishImage: "https://t3.ftcdn.net/jpg/05/18/83/48/360_F_518834876_q9FReu9sHUGClX7dTsHXezFLwMebEAS1.webp"
          },
            {
            dishName: "Risotto",
            dishImage: "https://t4.ftcdn.net/jpg/01/71/57/91/360_F_171579140_sQhoVlTLfSIeYFiV5DCYcifM0HvUZ85H.webp"
          },
            {
            dishName: "Tamales de",
            dishImage: "https://t3.ftcdn.net/jpg/06/92/83/34/360_F_692833475_9FFkMXHiA5b1kdtB2vlF7XifLOsOUseG.webp"
          },
            {
            dishName: " Pescado",
            dishImage: "https://t3.ftcdn.net/jpg/04/18/57/40/360_F_418574037_BtVv7kg3ffjiCnH4fB8MP5S5wCWtysI0.webp"
          },
        ]
        },
        {
          state: "Yucatan",
          stateImage: "sicily.jpg",
          famousDish: [
            {
            dishName: "Cochinita Pibil ",
            dishImage: "https://t4.ftcdn.net/jpg/04/94/33/63/360_F_494336328_eWORn6dfH0rIZxGDJHViwsN1hov8dQ2G.webp"
          },
            {
            dishName: "Salbutes",
            dishImage: "https://t3.ftcdn.net/jpg/05/50/20/54/360_F_550205448_g71NJ3HF2bpKJvD8fAtXSExYC3cEKDD2.webp"
          },
            {
            dishName: "Panuchos",
            dishImage: "https://t4.ftcdn.net/jpg/00/59/44/63/360_F_59446385_OCke1gGsnEQnHBJ5zNFk4RqmYWK0VHIj.webp"
          },
            {
            dishName: " Sopa de Lima",
            dishImage: "https://t4.ftcdn.net/jpg/05/30/45/59/360_F_530455977_jCTiZD8Onpjexka23Vx06QHuSbBLqDpM.webp"
          },
        ]
        },
        // Add more states as needed
      ]
    },
    // Add more countries as needed
  ];
  
  export default countriesData;
  