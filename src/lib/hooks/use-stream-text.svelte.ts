interface UseStreamTextOptions {
  speed?: number
}

export function useStreamText({ speed = 5 }: UseStreamTextOptions = {}) {
  let parts = $state<string[]>([]);
  let stream = $state<string>('');

  const addPart = (part: string) => {
    if (part) {
      parts.push(part)
    }
  }

  const reset = () => {
    parts = []
    stream = ''
  }


  return {
    stream,
    addPart,
    reset,
  }
}