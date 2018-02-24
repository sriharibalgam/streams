import { win32 } from 'path';

var fs = require('fs');

// Synchronous Reading
var syncReadFile = fs.readFileSync(__dirname + "/fs.txt", 'utf8' ); // Reads files data synchronously
//console.log(syncReadFile);

// Asynchronous reading 

var asyncReadFile = fs.readFile(__dirname + "/fs.txt", 'utf8', function(err,data){ // Providing a Callback as Err First Callback
    if(err) return false;
    console.log(data); // consoles Hello Srihari Balgam
});
//console.log(asyncReadFile); //

var asyncReadFileWithOutBuffer = fs.readFile(__dirname + "/fs.txt", function(err,data){ // Providing a Callback as Err First Callback
    if(err) return false;
    // if you Dont pass 2nd parameter in readFile() it will return Buffer
    console.log(data); // consoles <Buffer 48 65 6c 6c 6f 20 53 72 69 68 61 72 69 20 42 61 6c 67 61 6d>
    console.log(data.toString()); // consoles Hello Srihari Balgam
});
//console.log(asyncReadFileWithOutBuffer); // <Buffer 48 65 6c 6c 6f 20 53 72 69 68 61 72 69 20 42 61 6c 67 61 6d>

/**************************** STREAMS *************************** */
/*  Readable Strems
    Writable
    Duplex
    Transform
    PassThrough
*******************/
// Readable Strems
var readable = fs.createReadStream(__dirname + "/fs.txt", { encoding: 'utf8', highWaterMark: 32 * 1024 }); // takes object as 2nd param for option to read files in Chunks and buffers

// Writable Stream
var writable = fs.createWriteStream(__dirname + "/fsCopy.txt");

// Duplex  -- is achieved using Pipe concept
readable.pipe(writable); // Reads from ReadStream And Writes to WriteStream -- TwoWay Streaming 

//transform Stream -- Transforming using zlib -- gzip() method compressing
var zlib = require('zlib');

var gZip = zlib.createGzip(); // Compresses files
var compressed = fs.createWriteStream(__dirname + '/fs.txt.gz'); // compressing new file
readable.pipe(gZip).pipe(compressed); // reads from Readable -- Compresses the Chunks -- Writes to Compressed file

// Event Emittter Created
readable.on("data", function( chunk ){ // Chunk is readStream Buffered data
    console.log(chunk);
    writable.write(chunk); // writes to another files
})
