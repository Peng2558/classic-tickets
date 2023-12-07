// exports.performers = [
//     {name: 'Maxim Vengerov', born: '08-20-1974'},
//     {name: 'Hilary Hahn', born: '11-27-1979'},
//     {name: 'Isaac Perlman', born: '08-31-1945'},
//     {name: 'Gil Shaham', born: '02-19-1971'},
//     {name: 'Pinchas Zukerman', born: '07-16-1948'}
//   ];
  
//   exports.performances = [
//     {title: 'Mozart Violin Concerto no.1', performanceDate:'09-21-2024' , nowShowing: false},
//     {title: 'Sibelius Violin Concerto', performanceDate:'03-14-2023' , nowShowing: false,
//       reviews: [{content: 'Great Performance!', rating: 5}]
//     },
//     {title: 'Brahms Violin Concerto', performanceDate:'12-10-2023' , nowShowing: true,
//       reviews: [{content: 'A fantastic mind blower!', rating: 5}]
//     },
//     {title: 'Four Seasons Vivaldi',performanceDate:'8-10-2024'  ,  nowShowing: false,
     
//     },
//     {title: 'Mendelsson Violin Concerto',performanceDate:'12-23-2024', nowShowing: false}
//   ];
const performanceData = [
    {
      title: "Sibelius Violin Concerto",
      performanceDate: '09-21-2024',
      soloist: 'Maxim Vengerov',
      concertHall: 'Walt Disney Concert Hall',
      nowShowing: false
    },
    {
      title: "Brahms Violin Concerto",
      soloist: 'Isaac Perlman',
      concertHall: 'Hollywood Bowl',
      performanceDate: '03-14-2023',
      nowShowing: false
    }
  ];
  
  module.exports = {
    performances: performanceData
  };
  