function populate(){
	if(quiz.isEnded()){
		showScores();
	}
	else{
		var element=document.getElementById("question");
		element.innerHTML=quiz.getQuestionIndex().text;

		var choices=quiz.getQuestionIndex().choices;
		for(var i=0;i<choices.length;i++)
		{
			var element = document.getElementById("choice"+i);
			element.innerHTML=choices[i];
			guess("btn"+i,choices[i]);
		}
		showProgress();
	}
};

function guess(id,guess){
	var button = document.getElementById(id);
	button.onclick=function(){
		quiz.guess(guess);
		populate();
	}
};

function showProgress(){
	var currentQuestionNumber=quiz.questionIndex+1;
	var element = document.getElementById("progress");
	element.innerHTML="Question "+currentQuestionNumber +" of "+quiz.questions.length;

};

function showScores()
{
	var gameOverHtml="<h1>測驗結果</h1>"
	gameOverHtml+="<h2 id='score'>分數："+quiz.score+"</h2>";
	var element=document.getElementById("quiz");
	element.innerHTML=gameOverHtml;


};

var questions=[
	new Question("已知某地區有30%的人口感染某傳染病。針對該傳染病的快篩試劑檢驗，有陽性或陰性兩結果。已知該試劑將染病者判為陽性的機率為80%，將未染病者判為陰性的機率則為60%。為降低該試劑將染病者誤判為陰性的情況，專家建議連續採檢三次。若單次採檢判為陰性者中，染病者的機率為 P；而連續採檢三次皆判為陰性者中，染病者的機率為P '。試問'P/P最接近哪一選項？",["7","8","9","10"],"8"),
	new Question("COVID-19疫情爆發以後，許多國家積極研發與生產疫苗。2021年，歐盟與美國、中國、印度、臺灣等已有疫苗生產廠，但大多實施出口管制，優先留給其公民施打；相較下，非洲地區目前疫苗嚴重不足，而非洲聯盟也計畫在2040年擴大疫苗生產到足敷非洲大陸60%所需。COVID-19疫苗生產的時空差異，最適合以下列哪個概念解釋？",["時空收斂","區位移轉","擴散與反吸","核心與邊陲"],"核心與邊陲"),
	new Question("為減少伴侶間的分手暴力事件，有學者主張親密關係也應強調民主化，即是將公共事務中強調的平等溝通、自由表達個人意志等原則，同樣適用於親密關係的情愛互動中。下列何項敘述最符合前述主張？",["國家應針對伴侶間的互動關係，廣泛與民溝通制訂更明確之規範","在私領域親密關係互動中有爭議時，應遵循少數服從多數之原則","親密伴侶雙方應學習達成意見一致，才能避免輕易選擇結束關係","情愛關係強調相互依賴，但依賴中仍應肯定彼此具備獨立自主性"],"情愛關係強調相互依賴，但依賴中仍應肯定彼此具備獨立自主性"),
	new Question("注射疫苗可透過免疫的過程達到防疫的目的，新冠肺炎（Coronavirus Disease 2019,COVID-19）之RNA疫苗即為對抗嚴重急性呼吸道症候群冠狀病毒2型（SARS-CoV-2）的疫苗之一。有關RNA的敘述，下列哪些正確？",["RNA分子為短片段的雙股螺旋結構","構成RNA分子的四種基本鹼基與構成DNA的一樣","細胞的基因被表現時，RNA經由轉錄產生","注射RNA疫苗後，其中的RNA必先插入基因體中才能產生蛋白質"],"細胞的基因被表現時，RNA經由轉錄產生"),
	new Question("Bobby cared a lot about his _____ at home and asked his parents not to go through his things without his permission.?",["discipline","facility","privacy","representation"],"privacy"),
];
var quiz=new Quiz(questions);
populate();