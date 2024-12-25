const characterGifs = {
    "Summer Smith": "https://media.giphy.com/media/XZNq76MHRuol8xevjt/giphy.gif?cid=790b7611iqiqh857d3bxoi0z1zhs1jjpyl3e7vq9wu15v0ak&ep=v1_gifs_search&rid=giphy.gif&ct=g",

    "Rick Sanchez": "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWh1OGh6eDVoOWNiMnk4b21oazF3azZtODV3Z2J1YmN2cDN4dTFiZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IgpAALi5hEv1IFmCrZ/giphy.gif",

   "Morty Smith" : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTU2aG0ycGV4dHZqaGJqc3d6bm56amNpd25iMms0OHdqazEydGZhciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/RH1IFq2GT0Oau8NRWX/giphy.gif",

   "Beth Smith": "https://media.giphy.com/media/j51YpFPcH5WRGa5BwD/giphy.gif?cid=790b7611m4n8pi4k50en6emke2ttjdfsfu6i7wq4kxys5y34&ep=v1_gifs_search&rid=giphy.gif&ct=g",

   "Jerry Smith" :"https://media.giphy.com/media/idjnunwjD9CyAPbH5E/giphy.gif?cid=790b76115hxo922nfhj5t985e05pvcefo2t9ne0h3yxtmnrx&ep=v1_gifs_search&rid=giphy.gif&ct=g",

   "Abadango Cluster Princess": "https://media.giphy.com/media/o8elHkOZR56g0/giphy.gif?cid=790b7611le978qky80zcf88nz5v6t07cu11bq18a8jflngq3&ep=v1_gifs_search&rid=giphy.gif&ct=g",

   "Abradolf Lincler" :"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExemx4NjRuNXlrYXBmZGtmNnN5em45ejFwa2kwa3pucWV5MXVjc2VsayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Qtk7fwKdKwWjFWPpGn/giphy.gif ",

   "Adjudicator Rick" : "https://media.giphy.com/media/3orif0K4rLTgsHTweA/giphy.gif?cid=ecf05e472vjuu18oplv0ns77hr5i5z6jo0paiyfqjb7zoywv&ep=v1_gifs_search&rid=giphy.gif&ct=g",
   "Agency Director" : "https://media.giphy.com/media/3oEhmVQaCjPOJJQgG4/giphy.gif?cid=ecf05e47hkw7jgkv6heg3iq4ctfxpv5adpmr4vbfgn9cvllt&ep=v1_gifs_search&rid=giphy.gif&ct=g",

   "Alan Rails" : "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3BpaXRkazR1OXNxMDFna3l2ZjB0azFiYTlsbzJ5enphYXcweTZ6bSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o6Mbn9NSxhiXPsJyw/giphy.gif",

   "Albert Einstein": "https://media.giphy.com/media/afqT2ykIlYcVi/giphy.gif?cid=ecf05e47y1rfwwq8kgmd51ar5rz43xju9v2ihcm9h3e10jzs&ep=v1_gifs_search&rid=giphy.gif&ct=g",

   "Alexander" : "https://media.giphy.com/media/ewUPoFDHwvVynBoTVV/giphy.gif?cid=ecf05e4749m2dm262w93qyaiulqecj35igfez6i64qzbmotd&ep=v1_gifs_search&rid=giphy.gif&ct=g",
   
   "Alien Googah": "https://media.giphy.com/media/QwM8yc4z3riTTZUguE/giphy.gif?cid=790b7611vhnkup1ee98c0fxtmlrhi60v1hr3pak5a5t9dqsb&ep=v1_gifs_search&rid=giphy.gif&ct=g",

   "Alien Morty" : "https://media.giphy.com/media/Pwzmdvl18CoE1yJ1B3/giphy.gif?cid=ecf05e4724csgz3n9aes2fhsbx47zv7mckfpzjc01dxl3l9o&ep=v1_gifs_search&rid=giphy.gif&ct=g",

   "Alien Rick" : "https://media.giphy.com/media/J3fy8aUGfcuLi7l8y2/giphy.gif?cid=ecf05e47998n3sw9qimow37ojho5j5r1v8iqwtmdesr1wuzp&ep=v1_gifs_search&rid=giphy.gif&ct=g",

   "Amish Cyborg": "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDI5ZmprYXMzcjZvOGVmOXB3OTFjamphbmVua2J0aXd3cXQ0ZWl0MSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oEduMbgX8EGTODD7G/giphy.gif",

   "Annie":"https://media.giphy.com/media/l0MYR4VvCcLhNB2CY/giphy.gif?cid=ecf05e47adxa4ij9ja1w0d8mo1k89908a6vi9wxklgntauv3&ep=v1_gifs_search&rid=giphy.gif&ct=g",

   "Antenna Morty": "https://media.giphy.com/media/cBIooxvKerol2/giphy.gif?cid=ecf05e470tg1xawa00d0svs68biukpeiu8i9blv71blim7f2&ep=v1_gifs_search&rid=giphy.gif&ct=g",

   "Antenna Rick":"https://media.giphy.com/media/YmuBikckdIDXC5jPFf/giphy.gif?cid=ecf05e47ymwikmyzxw38ika015c5wwb9nc5gyfoehn0tsso3&ep=v1_gifs_search&rid=giphy.gif&ct=g",

   "Ants In My Eyes Johnson": "https://media.giphy.com/media/qPVzemjFi150Q/giphy.gif?cid=790b7611w1648mjm429uwj614uissgf38qjljxu5tssja3tf&ep=v1_gifs_search&rid=giphy.gif&ct=g"


  };
  
  export default characterGifs;