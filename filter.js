  /**
   * To run this file in Gitpod, use the 
   * command node filter.js in the terminal
   */


  // Simple Filtering
  const people = [{
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];

  //Pluck paul object from array of objects

  const paul = people.filter(n => n.name === 'Paul');
  console.log(paul);

  // Complex Filtering
  const students = [{
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [{
          name: 'javascript',
          yrsExperience: 1
        },
        {
          name: 'html',
          yrsExperience: 5
        },
        {
          name: 'css',
          yrsExperience: 3
        },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [{
          name: 'javascript',
          yrsExperience: 0
        },
        {
          name: 'html',
          yrsExperience: 4
        },
        {
          name: 'css',
          yrsExperience: 2
        },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [{
          name: 'javascript',
          yrsExperience: 1
        },
        {
          name: 'html',
          yrsExperience: 1
        },
        {
          name: 'css',
          yrsExperience: 5
        },
      ]
    },
  ];

  //Find the candidates who have 5 yrs or more experience in any field

  const has5YearsExp = skill => skill.yrsExperience >= 5;
  const hasStrongSkills = student => student.skills.filter(has5YearsExp).length > 0;
  const candidates = students.filter(hasStrongSkills);
  console.log(candidates.filter(has5YearsExp));