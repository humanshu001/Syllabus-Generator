document.getElementById("generate").addEventListener("click", (e) => {
    e.preventDefault();

    let courseCode = document.getElementById("courseCode").value;
    let courseTitle = document.getElementById("courseTitle").value;
    let versionNo = document.getElementById("versionNo").value;
    let objective = document.getElementById("objective").value;

    let co1 = document.getElementById("co1").value;
    let co2 = document.getElementById("co2").value;
    let co3 = document.getElementById("co3").value;
    let co4 = document.getElementById("co4").value;
    let co5 = document.getElementById("co5").value;

    let unit1Name = document.getElementById("unit1Name").value;
    let unit1Syllabus = document.getElementById("unit1Syllabus").value;
    let unit1Hours = document.getElementById("unit1Hours").value;

    let unit2Name = document.getElementById("unit2Name").value;
    let unit2Syllabus = document.getElementById("unit2Syllabus").value;
    let unit2Hours = document.getElementById("unit2Hours").value;

    let unit3Name = document.getElementById("unit3Name").value;
    let unit3Syllabus = document.getElementById("unit3Syllabus").value;
    let unit3Hours = document.getElementById("unit3Hours").value;

    let unit4Name = document.getElementById("unit4Name").value;
    let unit4Syllabus = document.getElementById("unit4Syllabus").value;
    let unit4Hours = document.getElementById("unit4Hours").value;

    let unit5Name = document.getElementById("unit5Name").value;
    let unit5Syllabus = document.getElementById("unit5Syllabus").value;
    let unit5Hours = document.getElementById("unit5Hours").value;

    let textbooks = document.getElementById("textbooks").value;
    let referenceBooks = document.getElementById("referenceBooks").value;

    let modeOfEvaluation = document.getElementById("modeOfEvaluation").value;
    let recommendationDate = document.getElementById("recommendationDate").value;
    let publicationDate = document.getElementById("publicationDate").value;

    if (
        courseCode === "" ||
        courseTitle === "" ||
        versionNo === "" ||
        objective === "" ||
        co1 === "" ||
        co2 === "" ||
        co3 === "" ||
        co4 === "" ||
        co5 === "" ||
        unit1Name === "" ||
        unit1Syllabus === "" ||
        unit1Hours === "" ||
        unit2Name === "" ||
        unit2Syllabus === "" ||
        unit2Hours === "" ||
        unit3Name === "" ||
        unit3Syllabus === "" ||
        unit3Hours === "" ||
        unit4Name === "" ||
        unit4Syllabus === "" ||
        unit4Hours === "" ||
        unit5Name === "" ||
        unit5Syllabus === "" ||
        unit5Hours === "" ||
        textbooks === "" ||
        referenceBooks === "" ||
        modeOfEvaluation === "" ||
        recommendationDate === "" ||
        publicationDate === ""
    ) {
        alert("Please fill in all the fields.");
        return;
    }
   
    let data = `
    <table class="table table-bordered">
        <colgroup>
            <col style="width:25%">
            <col style="width:50%">
            <col style="width:25%">
        </colgroup>  
        <tr>
            <td><span style="color:blue;font-weight:900">${courseCode}</span></td>
            <td class="text-center"><b>Title:</b><span style="color:blue;font-weight:900"> ${courseTitle}</span></td>
            <td class="text-center"><b>L T P C</b></td>
        </tr>
        <tr>
            <td><b>Version No.</b></td>
            <td colspan="2">${versionNo}</td>
        </tr>
        <tr>
            <td><b>Objective</b></td>
            <td colspan="2">${objective}</td>
        </tr>
        <tr>
            <td><b>Course Outcomes</b></td>
            <td colspan="2">
                Student will be able to: <br>
                CO1: ${co1}<br>
                CO2: ${co2}<br>
                CO3: ${co3}<br>
                CO4: ${co4}<br>
                CO5: ${co5}
            </td>
        </tr>
        <tr>
            <td><b>Unit No.</b></td>
            <td class="text-center"><b>Unit Title</td>
            <td class="text-center"><b>No of Hours<br>(Per Unit)</td>
        </tr>
        <tr>
            <td><b>Unit I</b></td>
            <td class="text-center"><span style="color:blue;font-weight:900">${unit1Name}</span></td>
            <td class="text-center">${unit1Hours}</td>
        </tr>
        <tr>
            <td colspan="3">${unit1Syllabus}</td>
        </tr>
        <tr>
            <td><b>Unit II</b></td>
            <td class="text-center"><span style="color:blue;font-weight:900">${unit2Name}</span></td>
            <td class="text-center">${unit2Hours}</td>
        </tr>
        <tr>
            <td colspan="3">${unit2Syllabus}</td>
        </tr>
        <tr>
            <td><b>Unit III</b></td>
            <td class="text-center"><span style="color:blue;font-weight:900">${unit3Name}</span></td>
            <td class="text-center">${unit3Hours}</td>
        </tr>
        <tr>
            <td colspan="3">${unit3Syllabus}</td>
        </tr>
        <tr>
            <td><b>Unit IV</b></td>
            <td class="text-center"><span style="color:blue;font-weight:900">${unit4Name}</span></td>
            <td class="text-center">${unit4Hours}</td>
        </tr>
        <tr>
            <td colspan="3">${unit4Syllabus}</td>
        </tr>
        <tr>
            <td><b>Unit V</b></td>
            <td class="text-center"><span style="color:blue;font-weight:900">${unit5Name}</span></td>
            <td class="text-center">${unit5Hours}</td>
        </tr>
        <tr>
            <td colspan="3">${unit5Syllabus}</td>
        </tr>
        <tr>
            <td><b>Textbooks</b></td>
            <td colspan="2">${textbooks.replace(/\n/g, "<br>")}</td>
        </tr>
        <tr>
            <td><b>Reference Books</b></td>
            <td colspan="2">${referenceBooks.replace(/\n/g, "<br>")}</td>
        </tr>
        <tr>
            <td><b>Mode of Evaluation</b></td>
            <td colspan="2">${modeOfEvaluation}</td>
        </tr>
        <tr>
            <td><b>Recommendation by board of Studies on</b></td>
            <td colspan="2">${recommendationDate}</td>
        </tr>
        <tr>
            <td><b>Date of Publication after approval in the Academic council</b></td>
            <td colspan="2">${publicationDate}</td>
        </tr>
    </table>
    `;

    document.getElementById("syllabus").innerHTML = data;
    
    window.print();
    
    document.getElementById("syllabus").innerHTML = "";


});