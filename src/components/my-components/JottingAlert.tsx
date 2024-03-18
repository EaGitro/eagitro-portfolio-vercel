import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import Link from "next/link"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "~/components/ui/alert"
 
export function JottingAlert() {
  return (
    <Alert variant="destructive">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertTitle>Jottngs !</AlertTitle>
      <AlertDescription>
      ここはメモ書き置き場です。あくまでメモ書きなので体裁は整えておらず、読みにくい可能性があります。また情報の正確性も担保しません。
      <br />
      きちんとした記事は <Link href={"/writing/articles"}>/writing/articles</Link> にあります。
      </AlertDescription>
    </Alert>
  )
}

