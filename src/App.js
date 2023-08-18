import React from 'react';
import './style.css'; // Import your CSS file
import girl from './assets/girl.jpg'
import grid from './assets/grid.png'
import verified from './assets/verified.png'
import home from './assets/home.png'
import group from './assets/group.png'
import chalckboard from './assets/chalkboard.png'
import setting from './assets/seting.png'
import exit from './assets/exit.png'
import chart from './assets/chart.png'
import instruement from './assets/instruement.png'
import highway from './assets/highway.png'
import musicnote from './assets/music_note.png'
import headphone from './assets/headphone.png'
import bulb from './assets/bulb_icon.png'
import phone from './assets/updates.png'
import redmark from './assets/redbookmark.png'

const App = () => {
  return (
    <div className="wrapper">
      <div className="nav">
        <div className="info">
          <div className="info1 infos">
            <img src={girl} alt="" id="profile" />
          </div>
          <div className="info2 infos">
            <img className="foto" src={grid} alt="" />
          </div>
          <div className="info3 infos">
            <img className="foto" src={verified} alt="" />
          </div>
          <div className="info4 infos">
            <img className="foto" src={home} alt="" />
          </div>
          <div className="info5 infos">
            <img className="foto" src={group} alt="" />
          </div>
          <div className="info6 infos">
            <img className="foto" src={chalckboard} alt="" />
          </div>
        </div>
        <div className="set">
          <div className="set1 sets">
            <img src={setting} alt="" className="foto" />
          </div>
          <div className="set2 sets">
            <img src={exit} alt="" className="foto" />
          </div>
        </div>
      </div>
      <div className="main">
        <div className="containee1">
          <div className="containee_part1">Featured courses</div>
          <div className="containee_part2">
            <div className="div_containee1 div_containee"></div>
            <div className="div_containee2 div_containee"></div>
            <div className="div_containee3 div_containee"></div>
            <div className="div_containee4 div_containee"></div>
          </div>
        </div>
        <div className="containee2">
          <div className="containee2_part1">Latest News</div>
          <div className="containee2_part2">
            <div className="parts1 part">
              <div className="image_part">
                <img src={chart} alt="" className="image_of_part" />
              </div>
              <div className="text_part">Musicians</div>
            </div>
            <div className="parts2 part">
              <div className="image_part">
                <img src={instruement}alt="" className="image_of_part" />
              </div>
              <div className="text_part">Instruments</div>
            </div>
            <div className="parts3 part">
              <div className="image_part">
                <img src={highway} alt="" className="image_of_part" />
              </div>
              <div className="text_part">Journey</div>
            </div>
            <div className="parts4 part">
              <div className="image_part">
                <img src={musicnote} alt="" className="image_of_part" />
              </div>
              <div className="text_part">Music Notes</div>
            </div>
            <div className="parts5 part">
              <div className="image_part">
                <img src={headphone} alt="" className="image_of_part" />
              </div>
              <div className="text_part">Practices</div>
            </div>
            <div className="parts6 part">
              <div className="image_part">
                <img src={bulb} alt="" className="image_of_part" />
              </div>
              <div className="text_part">Tips</div>
            </div>
            <div className="parts7 part">
              <div className="image_part">
                <img src={phone} alt="" className="image_of_part" />
              </div>
              <div className="text_part">Updates</div>
            </div>
          </div>
        </div>
        <div className="containee3">
          <div className="containee3_part1">My Progress</div>
          <div className="containee3_part2">
            <div className="elem1 elem">
              <div className="image_elem1"></div>
              <div className="content_elem">
                <div className="content_elem1">
                  <div className="text_content">Learning piano basics</div>
                  <div className="icon_content">
                    <img src={redmark} alt="" style={{ height: '4vh' }} />
                  </div>
                </div>
                <div className="content_elem2">John smith</div>
                <div className="content_elem3">
                  <div className="progress"></div>
                </div>
                <div className="content_elem4">45%</div>
              </div>
            </div>
            <div className="elem2 elem">
              <div className="image_elem2"></div>
              <div className="content_elem">
                <div className="content_elem1">
                  <div className="text_content">Advanced guitar techniques</div>
                  <div className="icon_content">
                    <img src={redmark} alt="" style={{ height: '4vh' }} />
                  </div>
                </div>
                <div className="content_elem2">Emily Davis</div>
                <div className="content_elem3">
                  <div className="progress"></div>
                </div>
                <div className="content_elem4">62%</div>
              </div>
            </div>
          </div>
       
        </div>
        <div className="containee4">
          <button className="but">View all</button>
        </div>
      </div>
    </div>
  );
}

export default App;
