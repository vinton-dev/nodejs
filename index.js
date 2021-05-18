const fs=require("fs")
//fs.writeFileSync("file1.txt","Hello");
//fs.writeFileSync("file1.txt","Hell World");
//fs.appendFileSync("file1.txt","How are you");
// const buf_data=fs.readFileSync("file1.txt");
// console.log(buf_data);
// const readData=buf_data.toString();
// console.log(readData.toString())

fs.renameSync("file1.txt","file2.txt");