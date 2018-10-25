function generateP1(limit)
{
    var pList = new Array();
    pList.push(2); pList.push(3); pList.push(5);
    var computations=0;
    if(limit <= 5) return pList;
    else
     {
       for(i=7; i<=limit; i+=2)
       {
          var isComposite=false;
          isComposite=pList.some(function(element, index, array) {
                                                 //console.log('element:', element);
                                                 if(i%element==0) return true;
												 computations++;
                                            });
         if(!isComposite) pList.push(i);
       }
     }
  console.log('Computations Performed: '+computations);
  return pList;
}


/////////////////////////////////////////////////////////
////////// Very Very Bad Approach. Unnecesary Computation
//////////Eg. checkP1(7797893)
 
//////////		Max Computation Limit:2792

//////////		Not Prime. 
//////////		Found a factor @ 1489
//////////		Computational Complexity: 29718
////////// Better do direct
/////////////////////////////////////////////////////////


function checkP1(num)
{
  if(num%2==0 || num%3==0 || num%5==0)
  {
	console.log('Divisible by 2,3 or 5');
	return;
  }
  var isPrime = true;
  var maxLimit = Math.floor(Math.sqrt(num));
  console.log('Max Computation Limit:'+maxLimit); 
  var pList = [2,3,5];
  var i,computations=0;
  for(i=7; i<=maxLimit; i+=2)
       {
          var isComposite=false;
          isComposite=pList.some(function(element, index, array) {
                                                 //console.log('element:', element);
						computations++;
                                                 if(i%element==0) return true;
                                            });
         if(!isComposite) 
         { 
           pList.push(i); 
           if(num%i==0) 
           { 
             isPrime = false; 
             break;
           }
         }
         
       }
  if(isPrime) console.log('Prime.'); else console.log('Not Prime. Found a factor @ '+i);
  console.log('Computational Complexity: '+computations);
  }

////////////////////////////////////////
////////// Direct Approach
////////// Eg. checkP1Direct(7797893)
//////////	 Max Computation Limit:2792

//////////	 Not Prime. 
//////////	 Found a factor @ 1489
//////////	 Computational Complexity: 742
///////////////////////////////////////


function checkP1Direct(num)
{
  if(num%2==0 || num%3==0 || num%5==0)
  {
	console.log('Divisible by 2,3 or 5');
	return;
  }
  var isPrime = true;
  var maxLimit = Math.floor(Math.sqrt(num));
  console.log('Max Computation Limit:'+maxLimit); 
  var i,computations=0;
  for(i=7; i<=maxLimit; i+=2)
       {
	   computations++;
           if(num%i==0) 
           { 
             isPrime = false; 
             break;
           }
       }
  if(isPrime) console.log('Prime.'); else console.log('Not Prime. Found a factor @ '+i);
  console.log('Computational Complexity: '+computations);
}

/////////////////////////////////////////////////
////////////////// with a pre generated list
//////////////////Eg.checkP1Dictionary(7797893, pList)

//////////////////  Not Prime.
//////////////////  Found a factor @ 1489

//////////////////  Computational Complexity: 236
//////////////////Eg.checkP1Dictionary(779789376871, pList)
//////////////////  Prime.
//////////////////  Computational Complexity: 70046
/////////////////////////////////////////////////

function checkP1Dictionary(num,pList)
{
	var isComposite=false;
	var i,factor;
	var maxNum = Math.pow(pList[pList.length-1],2);
	var maxLimit = Math.floor(Math.sqrt(num));
	if(num>maxNum) 
	{
		console.log('Out of Dictionary scope. Max Limit is: '+maxNum);
		console.log('Prime detection may be incorrect...');
	}
	else if (num<=pList[pList.length-1]) 
		{
			if (pList.indexOf(num)>-1) 
			{
				console.log('Direct Dictinory Search: Prime.');
			}
			else
				console.log('Direct Dictinory Search: Non-Prime.');

			console.log('No division Computation used.');

		};
	for(i=0;i<pList.length;i++)
	{
		factor=pList[i];
		if(factor>maxLimit) break;
	       if(num%factor==0)
		{
			isComposite=true;
			 break;
		}
	}
	if(!isComposite) console.log('Prime.'); else console.log('Not Prime. Found a factor @ '+factor);
	console.log('Computational Complexity: '+i);
}