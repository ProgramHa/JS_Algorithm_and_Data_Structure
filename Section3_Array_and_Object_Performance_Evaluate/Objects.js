let instructor = {
    firstName: "Kellyy",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}

//         ■                 ■                     ■
//      fistName        isInstructor        favoriteNumbers

Object.keys(instructor) // O(N) 시간
Object.entries(instructor) // O(N) 시간
instructor.hasOwnProperty("firstName") // O(1) 시간
