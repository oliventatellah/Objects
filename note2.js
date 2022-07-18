const notes = [
    {
        title : "my next trip",
        body : "awesome spain it is",
    },
    {
        title : " attend book session",
        body : "london arts",
    },
    {
        title : "book i am reading",
        body : "fifty shades",
    },
    {
        title : "javascript conference",
        body : "amsterdam center, netherlands",
    },
    {
        title : "formula1",
        body : "qatar rally",
    }
]
console.log(notes[3].body);
notes.forEach(function(item){
    console.log(item.body)
});


const findNote =function(notesData, noteTittle){
    return  notesData.find(function(item){
        return item.title === noteTittle;
    });
};
console.log(findNote(notes,"attend book session"));

const findNote2 =function(notesData, noteTittle){
    return  notesData.findIndex(function(item){
        return item.title === noteTittle;
    });
};
console.log(findNote2(notes,"attend book session"));

const findNote3 =function(notesData, noteBody){
    return  notesData.findIndex(function(item){
        return item.body === noteBody;
    });
};
console.log(findNote3(notes,"qatar rally"));

const findNote4 =function(notesData, noteBody){
    return  notesData.find(function(item){
        return item.body === noteBody;
    });
};
console.log(findNote4(notes,"qatar rally"));

const findNotes2= function (notesData,query){
    return notesData.filter (function(item){
        return (
            item.title.toLowerCase().includes(query.toLowerCase())||
            item.body.toLowerCase().includes(query.toLowerCase
            ())
            );    
    });
};
console.log(findNotes2(notes, "ne"));