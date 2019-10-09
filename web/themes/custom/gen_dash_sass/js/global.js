
const headers =  {
	headers: {
		Authorization: 'Bearer f86a9cd5fcaf57d48d6f0f322cf4053f26bca04ca8eb82fa242819a58e76b75d'
	}
};

const accordion = $('#accordion')

fetch('https://cors-anywhere.herokuapp.com/https://api.mavenlink.com/api/v1/workspace_allocations?include=workspace,workspace_resource&per_page=200', headers)
	.then(res => {
		if (res.status >= 400) {
			throw new Error("Bad response from servers");
		}
		return res.json();
	})
	.then(data => {
    // console.log(data)
    appendProjects(data)
	})
	.catch(err => {
		console.log(err)
  });
  
function appendProjects(data) {
  let workspaces = Object.values(data.workspaces)

  console.log(workspaces)

  workspaces.forEach(workspace => {
    let accordionItem = `
      <div class="card">
        <div class="card-header" id="">
          <h5 class="mb-0">
            <button class="btn btn-link collapsed" data-id="${workspace.id}" data-toggle="collapse" data-target="#job${workspace.id}" aria-expanded="false" aria-controls="job${workspace.id}">
              ${workspace.title}
            </button>
          </h5>
        </div>
        <div id="job${workspace.id}" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
          <div class="card-body">

            <h3>Project Details</h3>

            <div class="row">
              <div class="col">
                <p class="mb-0">Start Date: </br><strong>${workspace.start_date}</strong></p>
              </div>
              <div class="col">
                <p class="mb-0">End Date: </br><strong>${workspace.due_date}</strong></p>
              </div>
              <div class="col-8 d-flex align-items-center flex-wrap">
                <p class="mb-0 w-100">Percent Complete:</p>
                <div class="progress w-100">
                  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="${workspace.percentage_complete}" aria-valuemin="0" aria-valuemax="100" style="width: ${workspace.percentage_complete};">${workspace.percentage_complete}%</div>
                </div>
              </div>
            </div>
            <hr>
            <div class="row mt-3">
              <div class="col">
                <p class="mb-0">Price </br><strong>${workspace.price}</strong></p>
              </div>
              <div class="col">
                <p class="mb-0">Budget Used </br><strong>${workspace.budget_used}</strong></p>
              </div>
              <div class="col">
                <p class="mb-0">Budget Remaining </br><strong>${workspace.budget_remaining}</strong></p>
              </div>
            </div>
            
            <div class="team">
              <h3 class="mt-4">Team Allocations</h3>
              <table class="table table-bordered table-dark table-hover">
                <th>Name</th>
                <th>10/7 - 10/11</th>
                <th>10/14 - 10/18</th>
                <th>10/21 - 10/25</th>
                <th>10/28 - 11/1</th>
              </table>
            </div>

          </div>
        </div>
      </div>
      `
    $('#project-container').append(accordionItem)
  });
  
}