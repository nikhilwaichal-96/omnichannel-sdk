
export default interface IAxiosRetryOptions {
  /**
   * Number of retries before failing.
   */
  retries: number | 0;
  /**
   * Whether to retry on 429 HTTP status code response
   */
  retryOn429?: boolean | true;
  /**
   * 
   * Function to handle logic and evaluate if retry should continue based on response results.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  shouldRetry?(error?: any, retryOn429?: boolean): boolean
  /**
   * Overwrite request headers on demand based on response headers of the same name
   */
  headerOverwrites?: string[];

  // wait time in milliseconds between retries
  waitTimeInMsBetweenRetries: number | 1000;
}
