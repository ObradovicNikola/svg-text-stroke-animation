const logo = document.querySelectorAll('#logo path');

for (let i = 0; i <= 16; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

// This is just temporary file
// nedded to get full path lengths of all the letters
