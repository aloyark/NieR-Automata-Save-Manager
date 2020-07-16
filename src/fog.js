function Fog() {
	this.saveImport = function(slot) {
		f = fs.readFileSync('ImportBuffer/SlotDataOriginal.dat');

		save = fs.readFileSync(`ImportBuffer/Buffer.dat`);

		// let path = 'ImportBuffer/SlotData_2.dat';

		let chunk1 = save.slice(0, 0 + 4);
		let steamid = f.slice(4, 4 + 4);
		let chunk2 = save.slice(8, 8 + 235332);
		let settings = f.slice(235340, 235340 + 264);
		let controls = f.slice(235604, 235604 + 172);
		let chunk3 = save.slice(235776, 235776 + 204); // 235980 end of the array/file

		let everything = [chunk1, steamid, chunk2, settings, controls, chunk3];


		// Path for making a new file because when im putting together the
		// data chunks, I have to append them. If I don't make a new file I'll just append to the end
		// of the original file and It won't replace it.
		let path = `ImportBuffer/SlotData_${slot}.dat`;
		console.log(path);

		fd = fs.openSync(path, 'a+');
		try {
			fs.writeSync(fd, chunk1, 0, chunk1.length, 0);
			fs.writeSync(fd, steamid, 0, steamid.length, 0);
			fs.writeSync(fd, chunk2, 0, chunk2.length, 0);
			fs.writeSync(fd, settings, 0, settings.length, 0);
			fs.writeSync(fd, controls, 0, controls.length, 0);
			fs.writeSync(fd, chunk3, 0, chunk3.length, 0);
		} catch (err) {
			console.log("no");
		} finally {
			fs.closeSync(fd);
			console.log("its done dipshit");
		}

		// for (let i = 0; i < everything.length; i++) {
		// 	try {
		// 		console.log(everything[i]);
		// 		fs.writeSync(fd, everything[i], 0, everything[i].length, 0);
		// 	} catch (error) {
		// 		console.log(" lsdfj;joiawjef;");
		// 	} finally {
		// 		console.log("its done dipshit");
		// 	}

		// }

		// fs.open(path, 'a+', (err, fd) => {
		// 	fs.write(fd, chunk1, 0, chunk1.length, 0, (err, bytes, buff) => {
		// 		fs.write(fd, steamid, 0, steamid.length, 0, (err, bytes, buff) => {
		// 			fs.write(fd, chunk2, 0, chunk2.length, 0, (err, bytes, buff) => {
		// 				fs.write(fd, settings, 0, settings.length, 0, (err, bytes, buff) => {
		// 					fs.write(fd, controls, 0, controls.length, 0, (err, bytes, buff) => {
		// 						fs.write(fd, chunk3, 0, chunk3.length, 0, (err, bytes, buff) => {
		// 							console.log("Fog Import Complete.");
		// 						});
		// 					});
		// 				});
		// 			});
		// 		});
		// 	});
		// });
	}
}
