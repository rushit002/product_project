import React from 'react'

export default function CardBoxTitle(props) {
  return (
    <div>
          <section id="advertisers" class="advertisers-service-sec pt-5 pb-5">
          <div class="section-header text-center">
              <h2 class="fw-bold fs-1">
                All
                <span class="b-class-secondary"> {props.heading} </span>
              </h2>
              <p class="sec-icon"><i class="fa-solid fa-gear"></i></p>
            </div>
            </section>
    </div>
  )
}
