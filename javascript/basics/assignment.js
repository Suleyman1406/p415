	//  D.   
	// 	  Döngüleri istifadə edərək 1'dən 100'ə qədər olan saylar arasından 3'ə vəya 5'ə bölünənləri ekrana yazdırın.
  //  E.
	// 	  1. Bir integer return edən funskiya yaradın. Funksiya parametr olaraq bir integer array və bir integer dəyər alır.
	// 	  2. Funksiya girilən integer dəyərdən arrayin içində neçə ədəd olduğunu return eləsin.
	//      Example:
	//        countElement([1, 5, 8, 5, 3, 9], 5) => 2
	//        countElement([7, 7, 9, 8, 5, 4, 7], 7) => 3
  //   F.
	// 	  reverseArray([1,2,3,4]) => [4,3,2,1]
  //   G.
	// 	  compareArrays([1,2,3], [1,2,3]) => true
	// 	  compareArrays([1,2,3,4], [1,2,3]) => false
	// 	  compareArrays([1,2,2], [1,2,3]) => false

  // D
  // for (let i = 1; i <= 100; i++) {
  //   if(i%3==0 || i%5==0){
  //     console.log(i)
  //   }    
  // }

  // E
  // function countElement(numberArr,element){
  //   let count = 0;
  //   for (let i = 0; i < numberArr.length; i++) {
  //     if(numberArr[i]==element)count++;      
  //   }
  //   return count;
  // }

  // console.log(countElement([1,2,3,3,4,5,1], 1));

  // F

  // function reverseArray(numberArr){
  //   let newNumberArr = [];
  //   for (let i = numberArr.length-1; i >= 0; i--) {
  //     newNumberArr.push(numberArr[i]);
  //   }
  //   return newNumberArr;
  // }
  // console.log(reverseArray([1,2,3,4,1,2]))

  // function reverseArray(numberArr){
  //   let newNumberArr = [];
  //   for (let i = 0; i < numberArr.length; i++) {
  //     newNumberArr.unshift(numberArr[i]);
  //   }
  //   return newNumberArr
  // }
  // console.log(reverseArray([1,2,3,4]))

  // G

  // function compareArrays(firstArray, secondArray){
  //   if(firstArray.length !== secondArray.length) return false;

  //   for (let i = 0; i < firstArray.length; i++) {
  //     if(firstArray[i]!==secondArray[i])return false;      
  //   }

  //   return true;
  // }

  // console.log(compareArrays([1,2,3], [1,2,3]));