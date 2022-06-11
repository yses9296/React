import React, { Component } from 'react';
import { Routes, Route, NavLink, useParams} from "react-router-dom";
import Topics from './Topics';

function Topic(props){
  //contents Topics.js로부터 받아오기.
  var contents = props.data;
  var params = useParams();
  var topic_id = Number(params.topic_id);

  var selected_topic = {
    title: 'Sorry,',
    desc: 'Not Found'

  }
    /*
      To Do.
      for 반복문으로 contents들 마다 할 일.
      순회하는 값에서 contents.id 값과 topic_id이 동일한다면
      그 순번의 내용을 selected_topic에 저장.
      selected_topic = contents[0]
  
    */
    /* //for loop ver.
    for (var i = 0; i < contents.length; i++){
      if ( topic_id == contents[i].id ){
        selected_topic = contents[i];
        break;
      }
    }
    */
    /*
    // find ver.
    배열 contents에서 각 항목의 id와 topic_id가 같은 요소를 찾아서 그 결과 반환(return)
    */
   /*
    selected_topic = getContent(topic_id);
  
    function getContent(topic_id){
      return contents.find(
        contents =>  contents.id === topic_id
      );
    }
    */
  //mdn 버전.
  selected_topic = contents.find(
    contents => contents.id === topic_id
  )

  return(
    <div>
      <h3>{selected_topic.title}</h3>
      <p>{selected_topic.desc}</p>
    </div>
  )
}

export default Topic;