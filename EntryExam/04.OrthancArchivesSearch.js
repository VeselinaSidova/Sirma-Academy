function searchArchive(archive, entry) {
    let firstOccurrenceIndex = archive.indexOf(entry);
    let lastOccurrenceIndex = archive.lastIndexOf(entry);

    if (firstOccurrenceIndex === -1) {
        console.log('Record not found');
    } else {
        console.log(`First Occurrence: ${firstOccurrenceIndex}`);
        console.log(`Last Occurrence: ${lastOccurrenceIndex}`);
    }
}

searchArchive(["Frodo", "Sam", "Frodo", "Merry"], "Frodo");
// searchArchive(["Pippin", "Merry", "Sam", "Pippin"], "Pippin");
// searchArchive(["Aragorn", "Legolas", "Gimli"], "Boromir");
// searchArchive(["Gandalf", "Sam", "Aragorn", "Frodo"], "Frodo");
