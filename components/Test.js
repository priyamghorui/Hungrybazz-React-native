import React, {useState} from 'react';
import {Button, FlatList, Text, View} from 'react-native';
import sql from 'react-native-sqlite-storage';
// [
//   {
//     student_address: 'singur',
//     student_id: 1,
//     student_name: 'priyam',
//     student_phone: 9433765586,
//   },
//   {
//     student_address: '12.',
//     student_id: 2,
//     student_name: 'ghorui',
//     student_phone: 6297345864,
//   },
// ]

const Test = () => {
  const [data, setdata] = useState([]);
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
  const getdata = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM Student_Table', [], (tx, results) => {
        var temp = [];

        console.log('2.' + results.rows.item(1).student_name);
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
          setdata(preval => {
            return [
              ...preval,
              {
                student_address: results.rows.item(i).student_address,
                student_id: results.rows.item(i).student_id,
                student_name: results.rows.item(i).student_name,
                student_phone: results.rows.item(i).student_phone,
              },
            ];
          });
          console.log('8888');
        }
        // temp1.push(results.rows.item(i));
        console.log(temp);
      });
    });
    console.log('done show');
  };

  return (
    <View>
      <Text>Test </Text>

      <Button title="show" onPress={getdata} />
      <Button
        title="showState"
        onPress={() => {
          console.log(data);
        }}
      />
      
      <View>
        {data.map(e => (
          <Text key={e.student_id}>{e.student_name}</Text>
        ))}
      </View>
    </View>
  );
};

export default Test;
// <FlatList
// data={data}
// renderItem={({item})=>{
//   return(
//     <Text>{item.student_name}</Text>
//   )
// }}
// />
