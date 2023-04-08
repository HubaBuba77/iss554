let i = 0;

for (; i < 10; i++) {

	if (i % 2) continue;
	
	//alert(i);
}

let number, sum = 0;

while (true) {
	
	//number = +prompt('Enter number: ', '');
	
	if (!number) break;
	
	sum += number;
}

//alert(`Сумма: ${sum}`);

let n = 10;

stopChecking:
for (i = 2; i <= n; i++) {
	for (j = 2; j < i; j++) {
		if (i % j == 0) continue stopChecking; 
	}
	//alert(i);
}

const value = +prompt('Enter number from 0 to 3', '');

switch (value) {
	case 0:
	alert('Your number is 0');
	break;
	
	case 1:
	alert('Your number is 1');
	break;
	
	case 2:
	case 3:
	alert('Your number 2 or 3');	
	break;
}