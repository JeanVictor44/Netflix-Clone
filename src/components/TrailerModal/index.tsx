import { useContext, useEffect } from 'react'
import { TrailerModalContext } from '../../context/TrailerModal'
import { ContainerModal, CloseModal } from './style'

interface TrailerModalProps {
    videoKey:string
}
export const TrailerModal = ({videoKey}: TrailerModalProps) => {
    const { closeTrailerModal, isTrailerModalOpen} = useContext(TrailerModalContext)
    useEffect(() => {
        
        function loadVideo() {
            let player = new window.YT.Player('player', {
                events: {
                  onReady: onPlayerReady,
                },
              });
            
              /* Tinha um event */
            function onPlayerReady() {
                const buttonPause = document.getElementById('closeModal') as HTMLSpanElement
                buttonPause.addEventListener('click',() => {
                    player.pauseVideo()
                })
            }
        }

        if(!window.YT){
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            
            window.onYouTubeIframeAPIReady = loadVideo

            const firstScriptTag = document.getElementsByTagName('script')[0];

            if(firstScriptTag.parentNode) {
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            }
        }else {
            loadVideo()
        }


        window.addEventListener('click',(e) => {
            const target = e.target
            const modal = document.querySelector('#root > div')
            if(target === modal) {
                closeTrailerModal()
            }
            
        })
    })
    return (
        <ContainerModal showModal={isTrailerModalOpen}>
            <iframe id="player" width="853" height="480" src={`https://www.youtube.com/embed/${videoKey}?enablejsapi=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <CloseModal id="closeModal" onClick={closeTrailerModal} >&times;</CloseModal>
        </ContainerModal>
    )
}

