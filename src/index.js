/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count = 0;
  var membersOfTriangles = [];
  var k, l;

  for (let i = 0; i < preferences.length; i++) {
    if (isNotMemberOfTriangle(membersOfTriangles, i)) {
      k = preferences[i]-1;
      if ((i+1) != preferences[k]) {
        l = preferences[k]-1;
        if (preferences[l] == (i+1)) {
          count ++;
          membersOfTriangles.push (i, k, l);
        }
      }
    }
  }
  return count;
};

function isNotMemberOfTriangle (membersOfTriangles = [], numMember){
  for (let i=0; i<membersOfTriangles.length; i++) {
    
      if (membersOfTriangles[i] == numMember) return false;
  }
  return true;
};
