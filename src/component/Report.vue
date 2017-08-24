<template>
    <main class="report">
        <h2 class="report__title">Report</h2>
        <br/>
        <section>
            <form class="report__form-search">
                <label for="startMonth" class="report__label">Start Date</label>
                <input v-model="startDate" type="date" id="startMonth" name="startMonth"  min="2017-01-01" max="2018-01-01" class="report__input"/>

                <label for="endMonth" class="report__label">End Date</label>
                <input v-model="endDate" type="date" id="endMonth" name="endMonth"  min="2017-01-01" max="2018-01-01" class="report__input"/>

                <label for="filter" class="report__label" >Department</label>
                <select v-model="selected" id="filter" class="report__input">
                  <option value="Business Development">Business Development </option>
                  <option value="Finance">Finance</option>
                  <option value="Human Resource">Human Resource </option>
                  <option value="Marketing">Marketing</option>
                  <option value="Operations">Operations </option>
                  <option value="Product Management">Product Management </option>
                  <option value="Program Management">Program Management </option>
                  <option value="Technology">Technology </option>
                  <option value="Trade Partnership">Trade Partnership</option>
                </select>
                <button v-on:click="showReport" class="report__button">Search</button>
                <button v-on:click="downloadReport" class="report__button">Download</button>
            </form>
        </section>
        <section id="table">
            <table class="rep-table">
                <thead class="rep-table__title">
                <tr>
                    <th>NIK</th>
                    <th>Nama</th>
                    <th>Dept</th>
                    <th>Days Coming</th>
                    <th>Days Absence</th>
                    <th>Sick</th>
                    <th>Unpaid Leave</th>
                    <th>Yearly Leave</th>
                    <th>Leave Early</th>
                    <th>Late without Permission</th>
                    <th>Late with Permission</th>
                    <th>Hourly Leave</th>
                    <th>Replacement Leave</th>
                    <th>No-tap out days</th>
                    <td>Transport fee</td>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in reportData">
                    <td>{{item.nik}}</td>
                    <td>{{item.fullName}}</td>
                    <td>{{item.department}}</td>
                    <td>{{item.daysComing}}</td>
                    <td>{{item.daysAbsence}}</td>
                    <td>{{item.sick}}</td>
                    <td>{{item.unpaidLeave}}</td>
                    <td>{{item.yearlyLeave}}</td>
                    <td>{{item.leaveEarly}}</td>
                    <td>{{item.lateWithoutPermission}}</td>
                    <td>{{item.lateWithPermission}}</td>
                    <td>{{item.hourlyLeave}}</td>
                    <td>{{item.replacementLeave}}</td>
                    <td>{{item.noTapOutDay}}</td>
                    <td>{{item.daysComing*50000}}</td>
                </tr>

                </tbody>
            </table>
        </section>
        <br/>
    </main>
</template>
<script>

    export default {
        data() {
            return {
                startDate:'2017-01-01',
                endDate:'2017-12-31',
                selected:'All Department',
                reportData: [
                ]
            };
        },

        methods: {
            showReport: function() {
                this.$http.get('http://localhost:8080/report', {params:{
                    dept:this.selected,
                    startDate:this.startDate,
                    endDate:this.endDate
                }})
                .then(response => {
                    this.reportData = response.data;
                })
                .catch(function (error) {
                  console.log(error);
                })
            },

            download_csv: function(csv, filename) {
              var csvFile;
              var downloadLink;

              // CSV FILE
              csvFile = new Blob([csv], {type: "text/csv"});

              // Download link
              downloadLink = document.createElement("a");

              // File name
              downloadLink.download = filename;

              // We have to create a link to the file
              downloadLink.href = window.URL.createObjectURL(csvFile);

              // Make sure that the link is not displayed
              downloadLink.style.display = "none";

              // Add the link to your DOM
              document.body.appendChild(downloadLink);

              // Lanzamos
              downloadLink.click();
          },

          exportTableToCsv: function(html, fileName) {
          	var csv = [];
          	var rows = document.querySelectorAll("table tr");

              for (var i = 0; i < rows.length; i++) {
          		var row = [], cols = rows[i].querySelectorAll("td, th");

                  for (var j = 0; j < cols.length; j++)
                      row.push(cols[j].innerText);

          		csv.push(row.join(","));
          	}

              // Download CSV
              this.download_csv(csv.join("\n"), fileName);
          },
          downloadReport: function () {
            var html = document.querySelector("table").outerHTML;
          	this.exportTableToCsv(html, "report.csv");
          }

        }
    };
</script>
<style lang="scss">
    .report {
        $r: &;
        margin: 3% 5%;
        &__title {
            display: block;
            font-size: 1.5em;
            font-weight: bold;
        }
        &__button {
            display: inline-block;
            padding: 8px 12px;
            margin-bottom: 0;
            font-size: 14px;
            text-align: center;
            border: 1px solid transparent;
            border-radius: 4px;
            background-color: #b3dcff;
            color: black;
            cursor: pointer;
            text-decoration: none;
            &:hover {
                background-color: #92ccff;
            }
        }
        &__form-search {
            display: flex;
            flex-direction: row;
            align-content: center;
            justify-content: baseline;
            margin-bottom: 1rem ;
            #{$r}__label {
                flex: none;
                display: block;
                width: auto;
                margin: auto 10px;
                box-sizing: border-box;
            }
            #{$r}__input {
                flex: 1 1 auto;
                display: block;
                padding: 5px;
                background-color: white;
                border-radius: 5px;
                border: 1px solid #ccc;
            }
            #{$r}__button {
                margin: auto 5px;
                flex: 1 1 inherit;
                padding: 8px 12px;
                font-size: 14px;
                text-align: center;
                border: 1px solid transparent;
                border-radius: 4px;
                background-color: #b3dcff;
                cursor: pointer;
                text-decoration: none;
                color: black;
                &:hover {
                    background-color: #94c2ee;
                }
            }
        }
    }
    .rep-table{
        width: 100%;
        border-collapse: collapse;
        font-size:13px;
        &__title{
            text-align: center;
            font-weight: bold;
        }
        tr{
            td, th{
                padding:5px ;
                border: solid thin #a1a1a1;
            }
        }
    }
        @media (max-width: 900px) {
            .report {
                $r:&;
                &__form-search {
                    flex-direction: column;
                    #{$r}__label {
                        margin: 5px 0;
                    }
                    #{$r}__button {
                        margin: 5px 0;
                    }
                }
                #table {
                    overflow-x: auto;
                }
            }
        }



</style>
