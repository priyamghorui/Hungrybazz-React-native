import { useState } from 'react';
import sql from 'react-native-sqlite-storage';

// sqllitedb = () => {
//   const db = sql.openDatabase(
//     {
//       name: 'MyDb',
//       location: 'default',
//       createFromLocation: '~MyDb.db',
//     },
//     () => {},
//     error => {
//       console.log('ERROR: ' + error);
//     },
//   );

//   async function uu() {
//     console.log("connect ");
//     await db.transaction(tx => {
//       tx.executeSql('SELECT * FROM Student_Table', [], (tx, results) => {
//         console.log(results.rows.item(0));
//         var temp = [];
//         for (let i = 0; i < results.rows.length; ++i)
//           temp.push(results.rows.item(i));
//         console.log(temp);
//       });
//     });
//     console.log('done show');
//     // return("qqqq")
//   }
// };
// export{uu};

export default function uu() {
    const [data,setdata]=useState("asd")
  const db = sql.openDatabase(
    {
      name: 'MyDb',
      location: 'default',
      createFromLocation: '~MyDb.db',
    },
    () => {},
    error => {
      console.log('ERROR: ' + error);
    },
  );

  var temp1 = ['asd'];
  console.log('connect 1.');
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM Student_Table', [], (tx, results) => {
  var temp = [];

      console.log('2.' + results.rows.item(1).student_name);
      for (let i = 0; i < results.rows.length; ++i)
        temp.push(results.rows.item(i));
      // temp1.push(results.rows.item(i));
      console.log(temp);
    });
  });
  console.log('done show');

  return data;
  // return "asd";
}
