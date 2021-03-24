import Button from '../button'
import styles from './index.module.css'

export default function Modal() {
  return (
    <div className={styles.card}>
      <div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="white" fillOpacity="0.01" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM9.3824 11.0689C9.50441 11.1213 9.61475 11.1975 9.707 11.293L11 12.586L14.293 9.29302C14.3852 9.19751 14.4956 9.12133 14.6176 9.06892C14.7396 9.01651 14.8708 8.98892 15.0036 8.98777C15.1364 8.98662 15.2681 9.01192 15.391 9.0622C15.5138 9.11248 15.6255 9.18673 15.7194 9.28063C15.8133 9.37452 15.8875 9.48617 15.9378 9.60907C15.9881 9.73196 16.0134 9.86364 16.0122 9.99642C16.0111 10.1292 15.9835 10.2604 15.9311 10.3824C15.8787 10.5044 15.8025 10.6148 15.707 10.707L11.707 14.707C11.5195 14.8945 11.2652 14.9998 11 14.9998C10.7348 14.9998 10.4805 14.8945 10.293 14.707L8.293 12.707C8.19749 12.6148 8.1213 12.5044 8.0689 12.3824C8.01649 12.2604 7.9889 12.1292 7.98775 11.9964C7.98659 11.8636 8.0119 11.732 8.06218 11.6091C8.11246 11.4862 8.18671 11.3745 8.2806 11.2806C8.3745 11.1867 8.48615 11.1125 8.60904 11.0622C8.73194 11.0119 8.86362 10.9866 8.9964 10.9878C9.12918 10.9889 9.2604 11.0165 9.3824 11.0689Z"
            fill="#36B37E"
          />
        </svg>
      </div>

      <div>
        <h4 className={styles.title}>Hey, did you know...</h4>
        <p>This alert needs your attention, but its not super important.</p>
        <footer className={styles.footer}>
          <Button appearance="link">Understood</Button>
          <Button appearance="link">No thanks</Button>
        </footer>
      </div>

      <div>
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="16"
            height="16"
            transform="translate(0 4)"
            fill="white"
            fillOpacity="0.01"
          />
          <path
            d="M8 11.0573L4.47133 7.52866C4.3456 7.40722 4.17719 7.34002 4.0024 7.34154C3.8276 7.34306 3.66039 7.41318 3.53678 7.53678C3.41318 7.66039 3.34307 7.82759 3.34155 8.00239C3.34003 8.17719 3.40723 8.34559 3.52866 8.47133L7.05733 12L3.52866 15.5287C3.40723 15.6544 3.34003 15.8228 3.34155 15.9976C3.34307 16.1724 3.41318 16.3396 3.53678 16.4632C3.66039 16.5868 3.8276 16.6569 4.0024 16.6584C4.17719 16.66 4.3456 16.5928 4.47133 16.4713L8 12.9427L11.5287 16.4713C11.6544 16.5928 11.8228 16.66 11.9976 16.6584C12.1724 16.6569 12.3396 16.5868 12.4632 16.4632C12.5868 16.3396 12.6569 16.1724 12.6584 15.9976C12.66 15.8228 12.5928 15.6544 12.4713 15.5287L8.94266 12L12.4713 8.47133C12.535 8.40983 12.5858 8.33627 12.6207 8.25493C12.6557 8.17359 12.6741 8.08611 12.6748 7.99759C12.6756 7.90907 12.6587 7.82129 12.6252 7.73936C12.5917 7.65743 12.5422 7.58299 12.4796 7.5204C12.417 7.4578 12.3426 7.4083 12.2606 7.37478C12.1787 7.34126 12.0909 7.32439 12.0024 7.32516C11.9139 7.32593 11.8264 7.34432 11.7451 7.37926C11.6637 7.4142 11.5902 7.46499 11.5287 7.52866L8 11.0573Z"
            fill="#42526E"
          />
        </svg>
      </div>
    </div>
  )
}
