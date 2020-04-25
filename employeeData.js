document.getElementById('button').addEventListener('click', getinfo);
function getinfo() {
   fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then(response => response.json())
      .then(data => {
        let output = '<h2> lists of employees </h2>';
        output += '<ul>';
        data.forEach((function (emp_data){
          output += `
                  <li>
                      ${data.name}
                  </li>
                `;

        });
        output+='</ul>'
          });
        document.getElementsByClassName('details').innerHTML = output;



       }



