// to reveal the team on click.
$(document).ready(function(){
	// hide by default
	$(".fixture-seriesWise-teams-team1-info-1,.fixture-seriesWise-teams-team2-info-2,.fixture-seriesWise-teams-team1-info-3, .fixture-seriesWise-teams-team2-info-4, .fixture-seriesWise-teams-team1-info-5, .fixture-seriesWise-teams-team2-info-6,.fixture-teamWise-team1,.fixture-teamWise-team2,.fixture-teamWise-team3,.fixture-teamWise-team4,.fixture-teamWise-team5,.fixture-teamWise-team6,.fixture-teamWise-team7,.fixture-teamWise-team8, .polls-pollingList-question-1-option-1, .polls-pollingList-question-1-option-2,.polls-pollingList-question-2-option-1, .polls-pollingList-question-2-option-2, .polls-pollingList-question-3-option-1, .polls-pollingList-question-3-option-2").hide();
	//toggle on click
    $(".fixture-seriesWise-teams-team2-2").click(function(){
        $(".fixture-seriesWise-teams-team2-info-2").toggle();
    });
        $(".fixture-seriesWise-teams-team1-1").click(function(){
        $(".fixture-seriesWise-teams-team1-info-1").toggle();
    });
        $(".fixture-seriesWise-teams-team1-3").click(function(){
        $(".fixture-seriesWise-teams-team1-info-3").toggle();
    });
        $(".fixture-seriesWise-teams-team2-4").click(function(){
        $(".fixture-seriesWise-teams-team2-info-4").toggle();
    });
        $(".fixture-seriesWise-teams-team1-5").click(function(){
        $(".fixture-seriesWise-teams-team1-info-5").toggle();
    });
        $(".fixture-seriesWise-teams-team2-6").click(function(){
        $(".fixture-seriesWise-teams-team2-info-6").toggle();
    });
        $(".fixture-teamWise-1").click(function(){
        $(".fixture-teamWise-team1").toggle();
    });
        $(".fixture-teamWise-2").click(function(){
        $(".fixture-teamWise-team2").toggle();
    });
        $(".fixture-teamWise-3").click(function(){
        $(".fixture-teamWise-team3").toggle();
    });
        $(".fixture-teamWise-4").click(function(){
        $(".fixture-teamWise-team4").toggle();
    });
        $(".fixture-teamWise-5").click(function(){
        $(".fixture-teamWise-team5").toggle();
    });
        $(".polls-pollingList-question-1").click(function(){
        $(".polls-pollingList-question-1-option-1, .polls-pollingList-question-1-option-2").toggle();
    });
        $(".polls-pollingList-question-2").click(function(){
        $(".polls-pollingList-question-2-option-1, .polls-pollingList-question-2-option-2").toggle();
    });

        $(".polls-pollingList-question-3").click(function(){
        $(".polls-pollingList-question-3-option-1, .polls-pollingList-question-3-option-2").toggle();
    });
});
