import { TouchableWithoutFeedback,View,Text,TextInput,Button } from "react-native";
import { Formik } from 'formik';
import { globalStyles } from "../styles/globalStyles";
import * as yup from 'yup';

const reviewSchema = yup.object({
    title: yup.string()
      .required()
      .min(4),
    body: yup.string()
      .required()
      .min(8),
    rating: yup.string()
      .required()
      .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0;
      }),
  });

export default function ReviewModalScreen({addReview,closeModal}){
    return(
        <View style={globalStyles.container}>
         <Formik
         initialValues={{title: "" ,body:"",rating:""}}
         validationSchema={reviewSchema}
         onSubmit={(values,actions)=>{
            actions.resetForm()
            addReview(values)
            closeModal()
         }}
         >
          {
            ({values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         })=>(
            <View>
                <TextInput 
                style={globalStyles.input}
                placeholder='Review title...'
                placeholderTextColor="gray"
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')} 
              value={values.title}
                 />
             <Text style={globalStyles.errorText}>{touched.title && errors.title}</Text>

             <TextInput 
                style={globalStyles.input}
                placeholder="Review Details..."
                placeholderTextColor="gray"
                onChangeText={handleChange("body")}
                onBlur={handleBlur("body")}
                value={values.body}
                multiline minHeight={60}
             />
             <Text style={globalStyles.errorText}>{touched.body && errors.body}</Text>

             <TextInput 
                style={globalStyles.input}
                placeholder="Rating..."
                placeholderTextColor="gray"
                onChangeText={handleChange("rating")}
                onBlur={handleBlur("rating")}
                value={values.rating}
                keyboardType="numeric"
             />
             <Text style={globalStyles.errorText}>{touched.rating && errors.rating}</Text>
            <Button onPress={handleSubmit} title="submit" />
            </View>
         )
          }
         </Formik>
        </View>
    )
}

