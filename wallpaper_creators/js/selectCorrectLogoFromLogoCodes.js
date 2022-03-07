/********************************************************************/
function selectLogoFromLogoCodes(logoImageUrl) {
  // SELECT THE PROPER LOGO BASED UPON THE INPUT LOGO URL VALUE
  let allLogos = {
    "ap0": "http://downloads.concepro.com/dropbox-public-files/logos/1-logos-pali/Pali-Name-Stamp-Gold.png",
    "ap1" : "https://downloads.concepro.com/dropbox-public-files/logos/1-logos-pali/Pali-Name-Stamp-Black.png",
    "ap2" : "https://downloads.concepro.com/dropbox-public-files/logos/1-logos-pali/Pali-125-Blacknwhite-Circle-Footername.png",
    "ap3" : "https://downloads.concepro.com/dropbox-public-files/logos/1-logos-pali/Pali-125-Circle-Fullname.png",
    "ap4": "http://downloads.concepro.com/dropbox-public-files/logos/1-logos-pali/Album-Cover-Abhishek-Paliwal-Lorez.jpg",
    "ap5": "http://downloads.concepro.com/dropbox-public-files/logos/1-logos-pali/Signature-Stamp-Pali-Name-Logo-Wide-New-Dark.png",
    "anu1": "http://downloads.concepro.com/dropbox-public-files/logos/2-logos-anupama/Anupama-Paliwal-787Px-Black-White-Fullname.png",
    "anu2": "http://downloads.concepro.com/dropbox-public-files/logos/2-logos-anupama/Anupama-Paliwal-787Px-Colored-Fullname.png",
    "mggk1" : "https://downloads.concepro.com/dropbox-public-files/logos/5-logos-mggk/2020-mggk-new-logo-all-color-4000px.png", 
    "mggk2" : "https://downloads.concepro.com/dropbox-public-files/logos/5-logos-mggk/2020-mggk-new-logo-all-black-4000px.png", 
    "concepro1": "http://downloads.concepro.com/dropbox-public-files/logos/4-logos-concepro/Concepro-Shadow.png",
    "concepro2": "http://downloads.concepro.com/dropbox-public-files/logos/4-logos-concepro/I-Love-Concepro-Blue.png",
    "conceproc1": "http://downloads.concepro.com/dropbox-public-files/logos/4-logos-concepro/christmas-concepro-logo-with-santa-reindeer.png",
    "conceproc2": "http://downloads.concepro.com/dropbox-public-files/logos/4-logos-concepro/christmas-concepro-hat-logo.png",
    "ad0":"https://downloads.concepro.com/dropbox-public-files/logos/3-logos-adoria/adoria-gradient-logos-0.png" ,
    "ad1":"https://downloads.concepro.com/dropbox-public-files/logos/3-logos-adoria/Adoria-Name-Stamp-golden.png" ,
    "ad2":"https://downloads.concepro.com/dropbox-public-files/logos/3-logos-adoria/Adoria-Name-Stamp-black.png" ,
    "ad3":"https://downloads.concepro.com/dropbox-public-files/logos/3-logos-adoria/adoria-gradient-logos-1.png" ,
    "ad4":"https://downloads.concepro.com/dropbox-public-files/logos/3-logos-adoria/adoria-gradient-logos-2.png" ,
    "ad5":"https://downloads.concepro.com/dropbox-public-files/logos/3-logos-adoria/adoria-gradient-logos-3.png" ,
    "ad6":"https://downloads.concepro.com/dropbox-public-files/logos/3-logos-adoria/adoria-gradient-logos-4.png" ,
    "ad7":"https://downloads.concepro.com/dropbox-public-files/logos/3-logos-adoria/Kisses-From-Adoria-Sticker-150dpi.png",
    "fin1" : "https://downloads.concepro.com/dropbox-public-files/logos/7-logos-clients/I-Love-Finland-Circle.png",
    "fin2": "https://downloads.concepro.com/dropbox-public-files/logos/7-logos-clients/I-Love-Finland-White-Circular.png",
    "fin3": "https://downloads.concepro.com/dropbox-public-files/logos/7-logos-clients/I-Love-Finland.jpg"

} ;
  //
  let final_logo = allLogos[logoImageUrl] ; 
  if (final_logo === undefined ) {final_logo = logoImageUrl} ;  
  console.log(final_logo) ;
  return final_logo ; 
}
/********************************************************************/
