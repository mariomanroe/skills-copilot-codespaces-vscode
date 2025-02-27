function skillsMember() {
  return {
    name: 'John Doe',
    age: 30,
    skills: ['HTML', 'CSS', 'JavaScript'],
    // Method
    getSkills: function() {
      return this.skills;
    }
  };
}