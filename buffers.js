var buf  = Buffer("Hello", "utf8");
console.log(buf);
console.log(buf.toString()); // Converts back to string
console.log(buf.toJSON()); // converts into JSON DATA

console.log(buf[2]);//

buf.write("WO"); // Overrites He with WO fixed array
console.log(buf.toString());
