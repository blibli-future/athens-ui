<template>
    <main class="report">
        <h2 class="report__title">Report</h2>
        <br/>
        <section>
            <form class="report__form-search">
                <label for="startMonth" class="report__label">Start Date</label>
                <input v-model="mulai" type="date" id="startMonth" name="startMonth"  min="2017-01-01" max="2018-01-01" class="report__input"/>

                <label for="endMonth" class="report__label">End Date</label>
                <input v-model="selesai" type="date" id="endMonth" name="endMonth"  min="2017-01-01" max="2018-01-01" class="report__input"/>

                <label for="filter" class="report__label" >Department</label>
                <select v-model="selected" id="filter" class="report__input">
                    <option>All Department</option>
                    <option value="TT">Business Development </option>
                    <option value="TT">Finance</option>
                    <option value="TT">Human Resource </option>
                    <option value="TT">Marketing</option>
                    <option value="TT">Operations </option>
                    <option value="TT">Product Management </option>
                    <option value="TT">Program Management </option>
                    <option value="IT">Technology </option>
                    <option value="TT">Trade Partnership</option>
                </select>
                <button v-on:click="showReport" class="report__button">Search</button>
                <button v-on:click="downloadReport" class="report__button">Download</button>
            </form>
        </section>
        <section id="table">
            <table class="rep-table">
                <thead class="rep-table__title">
                <tr>
                    <th>Nama</th>
                    <th>NIK</th>
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
                    <!--<td>Transport fee</td>-->
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
                    <!--<td>{{item.transportFee}}</td>-->
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
                mulai:'2017-01-01',
                selesai:'2017-12-31',
                selected:'All Department',
                reportData: [
                    { nik: '001', nama: 'Ariel' , daysComing: 5, daysAbsence:6, sick:1,unpaidLeave:"-" ,yearlyLeave:'-',leaveEarly:'-', leaveEarly:1,late:2,latewithPermisson:1,hourlyLeave:5,replacementLeave:9,noTapOut:2, transportFee:50000},
                    { nik: '002', nama: 'Ariela' , daysComing: 5, daysAbsence:6, sick:1,unpaidLeave:"-" ,yearlyLeave:'-',leaveEarly:'-', leaveEarly:1,late:2,latewithPermisson:1,hourlyLeave:5,replacementLeave:9,noTapOut:2, transportFee:50000},
                    { nik: '003', nama: 'Aimee' , daysComing: 5, daysAbsence:6, sick:1,unpaidLeave:"-" ,yearlyLeave:'-',leaveEarly:'-', leaveEarly:1,late:2,latewithPermisson:1,hourlyLeave:5,replacementLeave:9,noTapOut:2, transportFee:50000},
                    { nik: '004', nama: 'Ariela' , daysComing: 5, daysAbsence:6, sick:1,unpaidLeave:"-" ,yearlyLeave:'-',leaveEarly:'-', leaveEarly:1,late:2,latewithPermisson:1,hourlyLeave:5,replacementLeave:9,noTapOut:2, transportFee:50000},
                    { nik: '005', nama: 'Aeriel' , daysComing: 5, daysAbsence:6, sick:1,unpaidLeave:"-" ,yearlyLeave:'-',leaveEarly:'-', leaveEarly:1,late:2,latewithPermisson:1,hourlyLeave:5,replacementLeave:9,noTapOut:2, transportFee:50000},
                    { nik: '006', nama: 'Arie' , daysComing: 5, daysAbsence:6, sick:1,unpaidLeave:"-" ,yearlyLeave:'-',leaveEarly:'-', leaveEarly:1,late:2,latewithPermisson:1,hourlyLeave:5,replacementLeave:9,noTapOut:2, transportFee:50000},

                ]
            };
        },

        methods: {
            showReport: function() {
                this.$http.get('http://localhost:8080/report', {params:{
                    dept:this.selected,
                    startDate:this.mulai,
                    endDate:this.selesai
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

          export_table_to_csv: function(html, filename) {
          	var csv = [];
          	var rows = document.querySelectorAll("table tr");

              for (var i = 0; i < rows.length; i++) {
          		var row = [], cols = rows[i].querySelectorAll("td, th");

                  for (var j = 0; j < cols.length; j++)
                      row.push(cols[j].innerText);

          		csv.push(row.join(","));
          	}

              // Download CSV
              this.download_csv(csv.join("\n"), filename);
          },
          downloadReport: function () {
            var html = document.querySelector("table").outerHTML;
          	this.export_table_to_csv(html, "table.csv");
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
            ;
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
        width: auto;
        border-collapse: collapse;
        font-size:13px;
        &__title{
            text-align: center;
            font-weight: bold;
        }
        tr{
            td{
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
