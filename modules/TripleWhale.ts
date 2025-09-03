import { Pages } from './Mixpanel'
import { TDict } from '@/utils/types'
import { TQuizTrafficSource } from '@/utils/types'

type TripleWhaleEvent = 'pageLoad' | 'custom' | 'contact'

class TripleWhale {
  private readonly MAX_ATTEMPTS = 50

  private isReady(): boolean {
    return typeof window !== 'undefined' && typeof window.TriplePixel === 'function'
  }

  private waitForTriplePixel(callback: () => void, attempt = 0) {
    if (this.isReady()) {
      callback()
    } else if (attempt < this.MAX_ATTEMPTS) {
      setTimeout(() => {
        this.waitForTriplePixel(callback, attempt + 1)
      }, 100)
    } else {
      console.warn('Triple Whale TriplePixel function not available after waiting')
    }
  }

  private sendEvent(event: TripleWhaleEvent, props?: TDict) {
    this.waitForTriplePixel(() => {
      try {
        window.TriplePixel?.(event, props)
      } catch (e) {
        console.error('Triple Whale event error:', e)
      }
    })
  }

  track = {
    PageLoad: (pageName: Pages) => {
      this.sendEvent('pageLoad', { page_name: pageName })
    },

    Contact: (props: { firstName?: string; lastName?: string; email?: string }) => {
      this.sendEvent('contact', props)
    },

    // Standardized custom events
    ButtonClicked: (props: {
      button_label?: string
      page_name?: Pages
      redirection?: string
      plan_type?: string
      seq_no?: number
    }) => {
      this.sendEvent('custom', { custom_name: 'buttonClicked', ...props })
    },

    VideoStarted: (props: { video_type: string; page_name?: Pages }) => {
      this.sendEvent('custom', { custom_name: 'videoStarted', ...props })
    },

    VideoProgress: (props: { progress: number; video_type: string; page_name?: Pages }) => {
      this.sendEvent('custom', { custom_name: 'videoProgress', ...props })
    },

    QuizStarted: (props: {
      quiz_name: string
      quiz_type?: 'romantic' | 'friends' | 'family'
      quiz_traffic_source?: TQuizTrafficSource
    }) => {
      this.sendEvent('custom', { custom_name: 'quizStarted', ...props })
    },

    QuizProgress: (props: { quiz_name: string; progress: string; question: number; total_questions: number }) => {
      this.sendEvent('custom', { custom_name: 'quizProgress', ...props })
    },

    QuizFinished: (props: {
      quiz_name: string
      quiz_type?: 'romantic' | 'friends' | 'family'
      quiz_traffic_source?: TQuizTrafficSource
      progress?: string
    }) => {
      this.sendEvent('custom', { custom_name: 'quizFinished', ...props })
    },

    ExperimentStarted: (props: { 'Experiment name': string; 'Variant name': string; page_name?: Pages }) => {
      this.sendEvent('custom', { custom_name: 'experimentStarted', ...props })
    },

    MasterclassQuizSubmit: (props: { page_name?: Pages; option1?: boolean; option2?: boolean; option3?: boolean; option4?: boolean; option5?: boolean }) => {
      this.sendEvent('custom', { custom_name: 'masterclassQuizSubmit', ...props })
    },

    MasterclassResultsQuiz: (props: { selected_option?: string }) => {
      this.sendEvent('custom', { custom_name: 'masterclassResultsQuiz', ...props })
    },

    PageScrolled: (props: { page_name?: Pages; scroll_depth: number }) => {
      this.sendEvent('custom', { custom_name: 'pageScrolled', ...props })
    },
  }
}

export default new TripleWhale()
